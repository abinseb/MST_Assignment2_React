import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [todoName, setTodoName] = useState('');

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const addTodo = () => {
    if (todoName.trim() !== '') {
      setTodo([...todo, todoName]);
      setTodoName('');
    }
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <Typography variant="h4">Todo Application</Typography>
      <TextField
        variant="outlined"
        label="Enter values"
        value={todoName}
        onChange={handleInputChange}
      />
      &nbsp;
      <div style={{ bottom: '40px', paddingTop: '20px' }}>
        <Button variant="contained" color="error" onClick={addTodo}>
          Add Todo
        </Button>
      </div>

      <div style={{ paddingTop: '20px' }}>
        <ol style={{ paddingLeft: '350px' }}>
          {todo.map((td, index) => (
            <li style={{ paddingRight: '550px' }} key={index}>
              {td}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
