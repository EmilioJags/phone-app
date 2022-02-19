import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';
import BirthdayService from '../../Services/BirthdayService';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

class AddBirthdayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', phone: '', dob: '', date: new Date() }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.addNewContact = this.addNewContact.bind(this);
        this.mainPage = this.mainPage.bind(this);
        this.setDate = this.setDate.bind(this);
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul",
            "Aug", "Sep", "Oct", "Nov", "Dec"];
    }
    changeNameHandler = (e) => {
        this.setState({ name: e.target.value })
    }
    changePhoneHandler = (e) => {
        this.setState({ phone: e.target.value })
    }
    changeDobHandler = (e) => {
        this.setState({ dob: e.target.value })
    }
    addNewContact = (event) => {
        event.preventDefault();
        if (this.state.name === '' || this.state.dob === '') {
            alert("Nombre y cumpleaños deben tener un valor")
            return
        }
        let contact = {
            name: this.state.name,
            phone: this.state.phone,
            dob: this.state.dob
        }

        BirthdayService.addBirth(contact).then(res => { this.props.history.push("/birthday-app"); });

    }
    mainPage = (e) => {
        this.props.history.push('/birthday-app')
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
            <div>
                <div className="container" style={{ marginTop: "10px" }}>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <h3 className="text-center">Agregar Nuevo Cumpleaños</h3>
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

                                        <Datepicker id='pick-date'
                                            selected={this.state.date}
                                            dateFormat='dd-MMM-yyyy'
                                            onChange={this.setDate}
                                            showFullMonthYearPicker
                                        />


                                    </div>

                                    <button type="submit" style={{ marginTop: "15px" }} onClick={this.addNewContact} className="btn btn-primary">Agregar Cumpleaños</button>

                                    <button type="button" style={{ marginTop: "15px", marginLeft: "5px" }} onClick={this.mainPage} className="btn btn-secondary">Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddBirthdayComponent;