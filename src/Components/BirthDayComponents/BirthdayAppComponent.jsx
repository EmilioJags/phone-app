import React, { Component } from 'react';
import BirthdayService from '../../Services/BirthdayService';
import CalendarComponent from './CalendarComponent';

class BirthdayAppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { births: [] }

        this.filterResults = this.filterResults.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        BirthdayService.getBirths().then(
            (res) => {
                this.setState({ births: res.data })
            })
    }

    filterResults = (e) => {
        if (e.target.value == "") {
            BirthdayService.getBirths().then((res) => {
                this.setState({ births: res.data })
            })
        }
        else {
            BirthdayService.findByFilter(e.target.value).then((res) => {
                this.setState({ births: res.data })
            })
        }
    }
    editContact(id) {
        console.log("loading .... " + id)
        console.log(this.state)
        this.props.history.push(`/edit-birthday/${id}`)
    }

    delete(id) {
        BirthdayService.deleteBirth(id).then(res => {
            this.setState({ births: this.state.births.filter(amigo => amigo.id !== id) })
        });

    }
    addBirthday = (e) => {
        this.props.history.push('/add-birthday');
    }
    render() {
        return (
            <>
                <div className='container' style={{ marginTop: "45px", paddingTop: "45px" }}>
                    <div className="container" style={{ padding: "10px", marginBottom: "20px" }} >
                        <input onChange={this.filterResults}
                            style={{
                                padding: "10px", marginBottom: "20px"
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Introduce un termino de busqueda" aria-label="Recipient's username"
                            aria-describedby="button-addon2" />
                        <button onClick={this.addBirthday}
                            style={{
                                padding: "10px",
                                marginBottom: "20px"
                            }} className="btn btn-primary"
                            aria-describedby="button-addon2">Add new birthday
                        </button>

                    </div>

                    <div className='container' style={{ margin: "15px" }}>
                        big calendar here [wip]
                        <CalendarComponent></CalendarComponent>
                    </div>


                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Telefono</th>
                                    <th>Cumpleaños</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.births.map(amigo =>
                                        <tr key={amigo.id}>
                                            <td>{amigo.name}</td>
                                            <td><a href={"tel:" + amigo.phone}>{amigo.phone}</a></td>
                                            <td>{amigo.dob}</td>
                                            <td style={{ display: "flex" }}>
                                                <button style={{ margin: "10px", justifyItems: "center" }}
                                                    className='btn btn-info'
                                                    onClick={() => this.editContact(amigo.id)}
                                                >Modificar</button>
                                                <button style={{ margin: "10px", justifyItems: "center" }}
                                                    className='btn btn-danger'
                                                    onClick={() => this.delete(amigo.id)}>Borrar</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default BirthdayAppComponent;