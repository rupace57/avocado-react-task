import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.layout === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ layout:"", name: "", layout: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
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
              type="text"
              name="layout"
              placeholder="Enter number of capacity"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
