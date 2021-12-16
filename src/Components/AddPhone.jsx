import React, { Component } from 'react'
import PhoneService from '../Services/PhoneService';

export default class AddPhone extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', phone: '', note: '', email: '' }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.addNewContact = this.addNewContact.bind(this);
        this.mainPage = this.mainPage.bind(this);
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
    addNewContact = (event) => {
        event.preventDefault();
        if (this.state.name === '' || this.state.phone === '') {
            alert("Nombre y telefono deben tener un valor")
            return
        }
        let contact = {
            name: this.state.name,
            phone: this.state.phone,
            note: this.state.note,
            email: this.state.email
        }

        PhoneService.createPhone(contact).then(res => { this.props.history.push("/listatelefono"); });

    }
    mainPage = (e) => {
        this.props.history.push('/listatelefono')
    }
    render() {
        return (
            <div>
                <div className="container" style={{ marginTop: "10px" }}>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <h3 className="text-center">Agregar Nuevo Contacto</h3>
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

                                    <button type="submit" style={{ margin: "5px" }} onClick={this.addNewContact} className="btn btn-primary">Agregar Contact</button>

                                    <button type="button" style={{ margin: "5px" }} onClick={this.mainPage} className="btn btn-secondary">Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
