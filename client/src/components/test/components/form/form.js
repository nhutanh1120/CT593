import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: "",
      name: "",
      supplier: "",
      mota: "",
    };
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
    // console.log(name)
    // console.log(value)
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div className="forms">
        <form onSubmit={this.onSubmit}>
          <label>Chọn loại sản phẩm</label>
          <select
            name="types"
            // value={this.state.types}
            className="form-control"
            onChange={this.onChange}
          >
            <option value=""></option>
            <option value="1">Vật nuôi</option>
            <option value="1">Cây trồng</option>
          </select>
          <label>Name</label>
          <input
            type="text"
            name="name"
            // value={this.state.name}
            className="form-control"
            onChange={this.onChange}
          />
          <label>Nhà cung cấp</label>
          <input
            type="text"
            name="supplier"
            // value={this.state.supplier}
            className="form-control"
            onChange={this.onChange}
          />
          <label>Mô tả</label>
          <textarea
            name="mota"
            id=""
            rows="4"
            className="form-control"
            onChange={this.onChange}
          ></textarea>
          <button type="submit" className="btn btn-success mt-2">
            Lưu
          </button>
          <button type="reset" className="btn btn-success mt-2">
            Xóa
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
