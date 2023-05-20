import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div>
          Hello {this.props.user.firstName} {this.props.user.lastName}
        </div>
      </>
    );
  }
}

export default ChildComponent;
