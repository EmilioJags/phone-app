import React, { Component } from 'react'

export default class DeletePhoneComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <button style={{ margin: "10px", justifyItems: "center" }} className='btn btn-danger align-bottom' onClick={this.updateContact}>Borrar [{this.props.contactId}]</button>
            </div>
        )
    }
}
