import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { taskModel } from "../../../entities/TaskRow";
import styled from "styled-components";

const StyledButtonGroup = styled(ButtonGroup)`
  padding: 20;
  padding-top: 15;

  &.MuiButtonGroup-root {
    border: none;
    box-shadow: none;
  }
`;

const FilterTasks = () => {
  const handleChangeFilters = (variant: string) => () => {
    switch (variant) {
      case "Opened":
        taskModel.setQueryConfig({ completed: false });
        break;
      case "Closed":
        taskModel.setQueryConfig({ completed: true });
        break;
      default:
        taskModel.setQueryConfig({});
    }
  };
  return (
    <StyledButtonGroup variant="contained">
      <Button onClick={handleChangeFilters("All")}>All</Button>
      <Button onClick={handleChangeFilters("Opened")}>Opened</Button>
      <Button onClick={handleChangeFilters("Closed")}>Closed</Button>
    </StyledButtonGroup>
  );
};

export default FilterTasks;
