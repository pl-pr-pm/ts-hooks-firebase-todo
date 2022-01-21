import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import { ListItem, TextField, Grid } from "@material-ui/core";
import DeleteOutlineOutlined from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

interface PROPS {
  id: string;
  title: string;
}

const TaskItem: React.FC<PROPS> = (props) => {
  return (
    <div>
      <ListItem>
        <h2>{props.title}</h2>
      </ListItem>
    </div>
  );
};

export default TaskItem;
