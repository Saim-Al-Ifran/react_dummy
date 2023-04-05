import React, { useState } from 'react';
import shortid from 'shortid';
import Layout from './components/layout/Layout';
import CreateTask from './components/tasks/CreateTask';
import ShowTasks from './components/tasks/ShowTasks';

const Tasks = () => {
   const [tasks,setTask] = useState([]);
   const [visibility,setVisibility] = useState('all');

   const addNewTask = (text)=>{
         const task ={
              text,
              isCompleted:false,
              createdAt: new Date(),
              id: shortid.generate(),
         }
         setTask([task,...tasks]);
   }

  return (
     <>
         <Layout>
              <h1>Todo list</h1>
              <CreateTask addNewTask={addNewTask}/>
              <ShowTasks tasks={tasks}/>
         </Layout>
     </>
  )
}

export default Tasks;