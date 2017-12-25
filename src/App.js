import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      task : '',
      tasks:[]
    }
  }

  createTask(){
    console.log(this.state.task);
    let tasks = [...this.state.tasks] //taking old content of this.state.tasks| spread operator
    tasks.push({
      task: this.state.task,
      id: Math.floor(Math.random()*1000)
    })
    this.setState({tasks}) // this.setState({tasks:tasks})
  }

  /*listTasks(){
    return this.state.tasks.map
  }*/

  render() {
    return (
      <div className="container">
        <h1>To Do List</h1>
        <div className="col-md-6">
          <form className="form-inline" onSubmit={e=>e.preventDefault()}>
            <div className="form-group">
              <input type="text"
                placeholder="enter a task"
                className="form-control"
                onChange={ val=>this.setState({task: val.target.value})}
               />
            </div>
            <div className="form-group">
              <button type='submit' className="btn btn-warning"
                onClick={this.createTask.bind(this)}>
                add
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <ul className="list-unstyled">
            {this.state.tasks.map((i)=>(
              <li key={i.id}>{i.task}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
