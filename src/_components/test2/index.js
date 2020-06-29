import React, {useState, useEffect} from 'react';
import {TextField, Button,} from '@material-ui/core';

const Index = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTask = event => {
    setTask(event.target.value);
  }


  const addTask = () => {

    if (task.length) {
      tasks.push({name: task})
      setTasks(() => {
        return tasks
      });
    }
  }

  useEffect(()=> {
    console.log(findCount(["Tom","Tom","Tom", "Harry", "Nick", "Tom", "Nick", "Tom"]));
  }, );

  const findCount = (array) => {
    let obj = {};
    const isInObj = (item) => {
      return obj.hasOwnProperty(item)
    }
     array.forEach(item => {
      obj[item] = isInObj(item) ? obj[item] + 1: 1;
    });
    let count = 0;

    for(const key in obj){
      if(obj[key] > count){
        count = obj[key];
      }
    }
    return count;
  }

  const deleteTask = index => {
    const newTasks = tasks.splice(1, index);
    setTasks(newTasks)
  }
  const handleCheckBox = (e, index) => {
    tasks[index].isChecked = true;
    setTasks(tasks);
  }
  return (
    <div>
      <input value={task} onChange={handleTask}/>
      <button onClick={addTask}>Add Task</button>
      <div>
        {tasks.map((item, index) => (
          <div key={index}>
            <div>
              <input type={'checkbox'} value={item.isChecked} onChange={(event) => handleCheckBox(event, index)}/></div>
            <div>{item.name}</div>
            <div>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>)
        )
        }
      </div>
    </div>
  )
}

export default Index;