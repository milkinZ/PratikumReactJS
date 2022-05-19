import React from 'react';
class Alert extends React.Component {
    render() {
        return(
            <div className={"alert alert-" + this.props.alertClass}>
                { this.props.children }
            </div> 
        )
    }
}

export default Alert;