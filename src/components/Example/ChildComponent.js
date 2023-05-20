import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log("ChildComponent", this.props);
    return (
      <>
        <div>
          Hello {this.props.user.firstName} {this.props.user.lastName}
        </div>
        <table>
          <tr>
            <th>STT</th>
            <th>FistName</th>
            <th>LastName</th>
          </tr>

          {this.props.arrayUser.map((x, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}

export default ChildComponent;
