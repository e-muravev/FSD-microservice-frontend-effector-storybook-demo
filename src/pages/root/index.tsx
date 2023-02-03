import React, { FC, Suspense, useEffect } from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { Typography, CircularProgress } from "@mui/material";
import { taskModel } from "../../entities/TaskRow";
import TaskRow from "../../entities/TaskRow/ui";
import ToogleTask from "../../features/ToogleTask/ui";
import FilterTasks from "../../features/FilterTasks/ui";

//@ts-ignore
const RemoteApp = React.lazy(() => import("app2/App"));

const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
`;

const TaskWrapper = styled.div``;

const RootPage: FC = () => {
  const tasks = useStore(taskModel.$tasksFiltered);
  const isLoading = useStore(taskModel.$tasksListLoading);

  useEffect(() => {
    taskModel.getTasksFx();
  }, []);

  return (
    <div>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
      <Wrapper>
        <Typography variant="h4">Task List (Feature Slices Design)</Typography>
        <FilterTasks />
        <TaskWrapper>
          {isLoading && <CircularProgress sx={{ mt: 10 }} />}
          {!!tasks.length &&
            tasks.map(({ title, id }) => (
              <TaskRow
                key={id}
                title={title}
                before={<ToogleTask taskId={id} />}
              />
            ))}
        </TaskWrapper>
      </Wrapper>
    </div>
  );
};

export default RootPage;
