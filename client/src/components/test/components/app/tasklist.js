import React, { Component } from "react";
import QRCode from "react-qr-code";

export default class tasklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: false,
      data: "",
    };
  }
  onDelete = (event) => {
    let tag = event.currentTarget.dataset.id;
    this.props.onDelete(tag);
    console.log(tag);
  };
  save = (event) => {
    let tag = event.currentTarget.dataset.save;
    this.setState({
      isDisplayForm: true,
      data: tag,
    });
  };
  render() {
    var { tasks } = this.props;
    let { isDisplayForm, data } = this.state;
    // console.log(tasks.name);
    let elmqr = isDisplayForm ? (
      <div className="qr">
        <QRCode value={data} />
      </div>
    ) : (
      ""
    );
    let elmTasks = tasks.map((tasks, index) => {
      console.log(tasks.name);
      return (
        <div className="col" key={index}>
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Tên sản phẩm: {tasks.name}</h5>
                  {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                </div>
                <div className="modal-body">
                  <p>Mô tả: {tasks.mota}</p>

                  <p>
                    Loại sản phẩm:{" "}
                    {tasks.types === 1 ? "Vật nuôi" : "Cây trồng"}
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary">
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-id={tasks.id}
                    onClick={this.onDelete}
                  >
                    delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-save={tasks.id}
                    onClick={this.save}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {elmqr}
        </div>
      );
    });
    return <div>{elmTasks}</div>;
  }
}
