import React, {Component} from "react";

const withData = (Wrapped) => {

    return class extends Component {
        render() {
            return <Wrapped {...this.props} />
        }
    }
};

export default withData;