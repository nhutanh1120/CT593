import React, { Component } from "react";
import "./aspp.css";
import TaskList from "./components/app/tasklist";
import Forms from "./components/form/form";

class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
    };
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      // console.log("dismaou"+tasks)
      this.setState({
        tasks,
      });
    }
  }
  createData = () => {
    let tasks = [
      {
        id: this.ids(),
        types: 1,
        name: "Bò",
        supplier: "abcdefS",
        mota: "ass",
      },
      {
        id: this.ids(),
        types: 2,
        name: "Bò",
        supplier: "abcdefS",
        mota: "ass",
      },
      {
        id: this.ids(),
        types: 3,
        name: "Bò",
        supplier: "abcdefS",
        mota: "ass",
      },
    ];
    console.log(tasks);
    this.setState({
      tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  s4() {
    return Math.floor(1 + Math.random() * 0x10000)
      .toString(16)
      .substring(1);
  }
  ids() {
    return this.s4() + "-" + this.s4();
  }

  openForm = () => {
    // console.log(typeof this.state.isDisplayForm )
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
  };
  onSubmit = (data) => {
    // console.log(data)
    let { tasks } = this.state;
    data.id = this.ids();
    tasks.push(data);
    this.setState({
      tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
  };

  findIndex(id) {
    let { tasks } = this.state;
    tasks.forEach((tasks, index) => {
      if (tasks.id === id) {
        return index;
      }
      return -1;
    });
  }

  onDelete = (data) => {
    let { tasks } = this.state;
    let index = this.findIndex(data);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    console.log(data);
  };
  render() {
    let { tasks, isDisplayForm } = this.state;
    let elmForm = isDisplayForm ? <Forms onSubmit={this.onSubmit} /> : "";
    // console.log("test"+isDisplayForm)
    // console.log(elmForm)
    // console.log("lay state" + tasks)
    // let elmS = tasks.map((tasks,index)=>{
    //   return ( <TaskList key={index} tasks={tasks} index={index} />)
    // })
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button
                className="btn btn-primary me-3"
                onClick={this.createData}
              >
                abcd
              </button>
              <button className="btn btn-primary" onClick={this.openForm}>
                Create
              </button>
            </div>
            <div className="row">
              <TaskList tasks={tasks} onDelete={this.onDelete} />
              {/* {elmS} */}
            </div>
          </div>
        </div>
        {elmForm}
      </div>
    );
  }
}

export default Apps;
