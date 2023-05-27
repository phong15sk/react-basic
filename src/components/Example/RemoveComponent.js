import React from "react";

class RemoveComponent extends React.Component {
    handleCickRemove = () => {
        this.props.handleCickRemove(this.props.indexRemove);
    }
    render() {
        return (
            <>
                <button onClick={this.handleCickRemove}>Remove</button>
            </>
        );
    }
}

export default RemoveComponent