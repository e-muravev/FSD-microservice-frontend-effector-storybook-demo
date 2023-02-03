import { createStore, createEffect, createEvent, combine } from "effector";
import { useStore } from "effector-react";
import { Task } from "../../../shared/api/interfaces";

export type QueryConfig = {
  completed?: boolean;
};

export const getTasksFx = createEffect(async () => {
  const url = `https://jsonplaceholder.typicode.com/todos/`;
  const req = await fetch(url);
  return req.json();
});

export const $tasks = createStore<Task[]>([]).on(
  getTasksFx.doneData,
  (_, payload) => payload
);

export const setQueryConfig = createEvent<QueryConfig>();

export const $queryConfig = createStore<QueryConfig>({}).on(
  setQueryConfig,
  (_, payload) => payload
);

export const $tasksFiltered = combine($tasks, $queryConfig, (tasks, config) => {
  return tasks.filter(
    (task) =>
      config.completed === undefined || task.completed === config.completed
  );
});

export const $tasksListLoading = getTasksFx.pending;

export const useTask = (
  taskId: number
): import("../../../shared/api/interfaces").Task | undefined => {
  return useStore($tasks).find((el) => el.id === taskId);
};
