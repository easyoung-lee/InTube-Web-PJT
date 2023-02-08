import React from "react";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import QuestionListittem from "components/questioner/QuestionListittem";

export default function QuestionerList(props) {
  return (
    <Paper>
      <MenuList>
        {props.interviewList.map((interview, index) => (
          <div>
            <QuestionListittem interview={(interview, index)} />
            <Divider />
          </div>
        ))}
      </MenuList>
    </Paper>
  );
}
