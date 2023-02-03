import React, { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material"; // instead of ../../shared/UIkit
import styled from "styled-components";

interface TaskProps {
  before: React.ReactNode;
  title: string;
}

const StyledCardContent = styled(CardContent)`
  display: flex;
  align-content: center;
`;

const TaskRow: FC<TaskProps> = ({ before, title }) => {
  return (
    <Card sx={{ m: 2.5, mt: 0 }}>
      <StyledCardContent>
        {before}
        <Typography sx={{ mt: "3.5px" }} component="p" variant="h5">
          {title}
        </Typography>
      </StyledCardContent>
    </Card>
  );
};

export default TaskRow;
