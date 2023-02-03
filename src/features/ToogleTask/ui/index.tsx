import React, { FC } from "react";
import Checkbox from "@mui/material/Checkbox";
import { taskModel } from "../../../entities/TaskRow";
import { toogleTaskModel } from "..";

interface ToogleTaskProps {
  taskId: number;
}

const ToogleTask: FC<ToogleTaskProps> = ({ taskId }) => {
  const handleChange = () => {
    toogleTaskModel.toggleTask(taskId);
  };

  const task = taskModel.useTask(taskId);

  return <Checkbox checked={task.completed} onChange={handleChange} />;
};

export default ToogleTask;
