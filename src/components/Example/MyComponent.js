import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
/*
   #4-component
   #5-State
 */
class MyComponent extends React.Component {
  state = {
    name: "phong",
    channel: "vtv3",
    isToggleOn: true,
    submit: { firstName: "", lastName: "" },
    arrayUser: [],
  };

  handelOnchangeName = (event) => {
    console.log("handelOnchangeName", event);
    this.setState({
      name: event.target.value,
    });
  };

  addUserToArray = (user) => {
    //this.setState({ arrayUser: [...this.state.arrayUser, this.state.submit] });
    this.setState((preveState) => ({
      arrayUser: [...preveState.arrayUser, user],
    }));
    console.log("AddUserToArray", this.state);
  };

  removeUserToArray = (index) => {
    var newArrayUser = [...this.state.arrayUser];
    newArrayUser.splice(index, 1)
    this.setState({ arrayUser: newArrayUser })
  }

  clickOnToggle = () => {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
    //this.setState({ isToggleOn: !this.state.isToggleOn });
  };

  render() {
    // declare
    let name = "phong IT";
    console.log(this.state);
    return (
      <>
        <div>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handelOnchangeName(event)}
          ></input>
        </div>

        <div className="first">
          {console.log("My name is", name)}
          Lam quen voi component {this.state.name}
        </div>

        <div className="second">
          Lam quen voi component {this.state.channel}
        </div>

        <div className="thrid">
          <button onClick={this.clickOnToggle}>
            {this.state.isToggleOn ? "ON" : "OFF"}
          </button>
        </div>
        <AddComponent addUserToArray={this.addUserToArray}></AddComponent>
        <ChildComponent
          user={this.state.submit}
          arrayUser={this.state.arrayUser}
          removeUserToArray={this.removeUserToArray}
        ></ChildComponent>
      </>
    );
  }
}

export default MyComponent;
