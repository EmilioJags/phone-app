import React, { Component } from 'react';
import BirthdayService from '../../Services/BirthdayService';
import Datepicker from 'react-datepicker'

class EditBirthdayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            phone: '',
            dob: ''
        }
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.cancel = this.cancel.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }
    updateDate() {
        this.setDate(this.state.dob)
    }
    updateContact = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.dob === '') {
            alert("Nombre y cumpleaños deben tener un valor")
            return
        }
        let newBirth = {
            name: this.state.name,
            dob: this.state.dob,
            phone: this.state.phone
        }
        BirthdayService.updateContact(this.state.id, newBirth).then(res => {
            this.props.history.push("/birthday-app")
        })
    }

    componentDidMount() {
        BirthdayService.findById(this.state.id).then((res) => {
            let birth = res.data
            this.setState({ name: birth.name, dob: birth.dob, phone: birth.phone })
        })
        document.getElementById('dob').value = new Date();
    }
    changeNameHandler = (e) => {
        this.setState({ name: e.target.value })
    }
    changePhoneHandler = (e) => {
        this.setState({ phone: e.target.value })
    }
    changeNoteHandler = (e) => {
        this.setState({ dob: e.target.value })
    }
    cancel = (e) => {
        e.preventDefault();
        this.props.history.push("/birthday-app");
    }
    setDate = e => {
        this.setState({ date: e })
        var newD = (e.getDate() < 10 ? "0" + e.getDate() : e.getDate()) + "-" +
            this.months[e.getMonth()] + "-" +
            e.getFullYear();
        console.log((e.getDate() < 10 ? "0" + e.getDate() : e.getDate()) + "-" +
            this.months[e.getMonth()] + "-" +
            e.getFullYear())
        this.setState({ dob: newD })
    }
    render() {
        return (
            <>
                <div>
                    <div className="container" style={{ marginTop: "10px" }}>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                <h3 className="text-center">Modificar Cumpleaños</h3>
                                <div className="card-body">
                                    <form id="newEmpFormId" onSubmit={this.addNewContact}>
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
                                            <label style={{ marginBottom: "5px" }}>Cumpleaños: </label>

                                            <Datepicker id='dob' name='dob'
                                                selected={this.props.match.params.dob}
                                                dateFormat='dd-MMM-yyyy'
                                                onChange={this.setDate}
                                                showFullMonthYearPicker
                                            />


                                        </div>

                                        <button type="submit" style={{ marginTop: "15px" }} onClick={this.updateContact} className="btn btn-primary">Guardar cambios</button>

                                        <button type="button" style={{ marginTop: "15px", marginLeft: "5px" }} onClick={this.cancel} className="btn btn-secondary">Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default EditBirthdayComponent;