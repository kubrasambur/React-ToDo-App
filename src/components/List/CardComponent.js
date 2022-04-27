import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import "../../App.css";
import React from "react";

function CardComponent({ todos, shower, setTask, filter }) {
  return (
    <div className="container">
      <Card sx={{ minWidth: 275, width: 300 }} className="card">
        {filter(shower).map((todo, index) => {
          return (
            <div className="froms">
              <FormControlLabel
              key={index}
              className="checkbox"
              control={
                <Checkbox
                  checked={todo.done}
                  className="checkbox"
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                  onChange={(e) => {
                    localStorage.setItem(todo.text, e.target.checked);
                    setTask(
                      todos.map((el) =>
                        el.text === todo.text
                          ? { ...el, done: e.target.checked }
                          : el
                      )
                    );
                  }}
                  
                />
           

              }
            />
             <p className={todo.done===true ? "completed": "card" }>{todo.text}</p>
            </div>
            
          );
        })}
      </Card>
    </div>
  );
}

export default CardComponent;
