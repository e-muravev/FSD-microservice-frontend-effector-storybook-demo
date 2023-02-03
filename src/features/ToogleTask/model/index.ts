import { taskModel } from "../../../entities/TaskRow";
import { createEvent } from "effector";

export const toggleTask = createEvent<number>();

taskModel.$tasks.on(toggleTask, (state, taskId) =>
  state.map((el) => {
    if (el.id === taskId) {
      return { ...el, completed: !el.completed };
    }
    return el;
  })
);
