import React from "react";

class AddContact extends React.Component {
  state = {
    layout:"",
    name: "",
    capacity: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.capacity === "" || this.state.layout === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ layout: "", name: "", capacity: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Create Table</h2>
        <hr></hr>
        <form className="ui form" onSubmit={this.add}>
        <div className="field">
            <span>Layout: </span>
            <input
              list="layout"
              type="text"
              name="layout"
              placeholder="Select Layout"
              value={this.state.layout}
              onChange={(e) => this.setState({ layout: e.target.value })}
              className="text"
            />
            <datalist id="layout">
              <option value="column-based"/>
            </datalist>
          </div>
          <div className="field">
            <span>Name: </span>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="text"
            />
          </div>
          <div className="field">
            <span>Capacity</span>
            <input
              type="number"
              name="capacity"
              placeholder="Enter number of capacity"
              value={this.state.capacity}
              onChange={(e) => this.setState({ capacity: e.target.value })}
              className="text"
            />
          </div>
          <div className="field">
            <span>Status: </span>
            <input
              type="checkbox"
              name="status"
              required term="terms"
              value={this.state.email}
              onChange={(e) => this.setState({ status: e.target.value })}
              className="checkbox"
            />
          </div>
          <div className="field">
          <span>Image: </span>
                <input type="file" name="image" className="photo"></input>
          </div>
          <button className="ui button black">Create Table</button>
          <button className="ui button red">Cancel</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
