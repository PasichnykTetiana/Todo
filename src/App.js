//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Task from './components/Task';
import TaskInput from './components/Taskinput';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [
        {id: 0, title: 'Задача 1', done: false},
        {id: 1, title: 'Задача 2', done: true},
        {id: 2, title: 'Задача 3', done: false}
      ]
    };
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id:  tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false
      });
      console.log(tasks)
      return tasks;
    });
  }
  
  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[index];
      return tasks;
    })
  }

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done)

    return (
      <div className="App">
        <h1 className="top">Активных задач: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map(task => (
          <Task 
          doneTask={() => this.doneTask(task.id)}
          deleteTask={() => this.deleteTask(task.id)}
         task={task} 
         key={task.id}
         ></Task>
         ))}
         <TaskInput addTask={this.addTask}></TaskInput>
      </div>
    );
  }
} 

/* function App() {
  constructor(){
    super()
    this.state = {
      tasks: [
        {id: 0, title: 'Create todo-react App', done: false},
        {id: 1, title: 'Create todo-react App', done: false},
        {id: 2, title: 'Create todo-react App', done: false}
      ]
    }
  }
  render() {
    const {tasks} = this.state;

    return(
      <div className="App">
        <h1 className="top">Active tasks: {}</h1>
      </div>
    )
  }
} */

export default App;
