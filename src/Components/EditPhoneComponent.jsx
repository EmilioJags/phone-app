import React, { Component } from 'react'
import PhoneService from '../Services/PhoneService';

export default class EditPhoneComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            phone: '',
            email: '',
            note: '',
            phoneObj: []
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    updateContact = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.phone === '') {
            alert("Nombre y telefono deben tener un valor")
            return
        }
        console.log(this.state.phoneObj)
        alert(this.state.phoneObj)
        PhoneService.updateContact(this.state.id, this.state.phoneObj).then(res => {
            this.props.history.push("/")
        })
    }

    componentDidMount() {
        PhoneService.findById(this.state.id).then((res) => {
            let phone = res.data
            this.setState({ phoneObj: res.data })
            this.setState({ name: phone.name, email: phone.email, note: phone.note, phone: phone.phone })
        })
    }
    changeNameHandler = (e) => {
        this.setState({ name: e.target.value })
    }
    changePhoneHandler = (e) => {
        this.setState({ phone: e.target.value })
    }
    changeNoteHandler = (e) => {
        this.setState({ note: e.target.value })
    }
    changeEmailHandler = (e) => {
        this.setState({ email: e.target.value })
    }
    cancel() {
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <div className="container" style={{ marginTop: "10px" }}>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <h3 className="text-center">Modificar contacto</h3>
                            <div className="card-body">
                                <form id="newEmpFormId">
                                    <div className="form-group">
                                        <label style={{ marginBottom: "5px" }}>Nombre completo: </label>
                                        <input placeholder="Nombre completo" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginBottom: "5px" }}>Telefono: </label>
                                        <input placeholder="Telefono" name="phone" className="form-control"
                                            value={this.state.phone} onChange={this.changePhoneHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ marginBottom: "5px" }}>Notas: </label>
                                        <input placeholder="Notas" name="note" className="form-control"
                                            value={this.state.note} onChange={this.changeNoteHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ marginBottom: "5px" }}>Correo electronico: </label>
                                        <input placeholder="Correo electronico" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button style={{ marginTop: "10px" }} type="submit" onClick={this.updateContact} className="btn btn-primary">Confirmar Cambios</button>

                                    <button style={{ marginTop: "10px", marginLeft: "5px" }} type="button" onClick={this.cancel} className="btn btn-secondary">Cancelar</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
