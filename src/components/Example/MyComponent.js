import React from "react";
import ChildComponent from "./ChildComponent";
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

  clickOnToggle = () => {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
    //this.setState({ isToggleOn: !this.state.isToggleOn });
  };

  handelOnChangeFistName = (event) => {
    const newSubmit = { ...this.state.submit, firstName: event.target.value };
    this.setState({
      submit: newSubmit,
    });
    console.log("handelOnChangeFistName", newSubmit);
  };

  handelOnChangeLastName = (event) => {
    const newSubmit = { ...this.state.submit, lastName: event.target.value };
    this.setState({
      submit: newSubmit,
    });
    console.log("handelOnChangeLastName", newSubmit);
  };

  handelOnSumit = (event) => {
    // alert(
    //   "Full Name: " +
    //     this.state.submit.firstName +
    //     " " +
    //     this.state.submit.lastName
    // );
    let user = this.state.submit;

    console.log("user", user);
    /// add user to array
    //this.setState({ arrayUser: [...this.state.arrayUser, this.state.submit] });

    this.setState((preveState) => [preveState.arrayUser, user]);

    console.log("handelOnSumit", this.state);

    event.preventDefault();
  };

  render() {
    // declare
    let name = "phong IT";
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

        <form onSubmit={(event) => this.handelOnSumit(event)}>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={this.state.submit.firstName}
            onChange={(event) => this.handelOnChangeFistName(event)}
          ></input>
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={this.state.submit.lastName}
            onChange={(event) => this.handelOnChangeLastName(event)}
          ></input>
          <br />
          <input
            type="submit"
            value="Submit"
            style={{
              textAlign: "center",
            }}
          ></input>
        </form>
        <ChildComponent user={this.state.submit}></ChildComponent>
      </>
    );
  }
}

export default MyComponent;
