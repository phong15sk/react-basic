import React from "react";

class AddComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handelOnChangeFistName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
    console.log("handelOnChangeFistName", this.state);
  };

  handelOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
    console.log("handelOnChangeLastName", this.state);
  };

  handelOnSumit = (event) => {
    //this.setState({ arrayUser: [...this.state.arrayUser, this.state.submit] });
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    this.props.addUserToArray(user);

    event.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={(event) => this.handelOnSumit(event)}>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={this.state.firstName}
            onChange={(event) => this.handelOnChangeFistName(event)}
          ></input>
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={this.state.lastName}
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
      </>
    );
  }
}

export default AddComponent;
