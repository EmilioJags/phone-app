import React, { Component } from 'react'
import PhoneService from '../Services/PhoneService'

export default class PhoneListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { phones: [] }
        this.filterResults = this.filterResults.bind(this);
        this.delete = this.delete.bind(this);
        this.editContact = this.editContact.bind(this);
        this.addContact = this.addContact.bind(this);
    }
    editContact(id) {
        this.props.history.push(`/edit-phone/${id}`)
    }
    delete(id) {
        PhoneService.deleteContact(id).then(res => {
            this.setState({ phones: this.state.phones.filter(amigo => amigo.id !== id) })
        });

    }

    componentDidMount() {
        PhoneService.getPhones().then((res) => {
            this.setState({ phones: res.data })

        })
    }

    filterResults = (e) => {
        if (e.target.value == "") {
            PhoneService.getPhones().then((res) => {
                this.setState({ phones: res.data })
            })
        }
        else {
            PhoneService.findByFilter(e.target.value).then((res) => {
                this.setState({ phones: res.data })
            })
        }
    }

    addContact = (e) => {
        this.props.history.push('/agregar');
    }
    render() {
        return (
            <div style={{ marginTop: "25px", alignContent: "left" }}>
                <h2 className="text-center">Directorio Telefonico Familia Castro ({this.state.phones.length} contactos)</h2>
                <div className="input-group mb-3" >
                    <input onChange={this.filterResults} type="text" className="form-control"
                        placeholder="Introduce un termino de busqueda" aria-label="Recipient's username"
                        aria-describedby="button-addon2" />

                </div>
                <div className="container" style={{ margin: "20px" }} >
                    <button onClick={this.addContact} className="btn btn-primary"
                        placeholder="Introduce un termino de busqueda" aria-label="Recipient's username"
                        aria-describedby="button-addon2">Add new contact</button>

                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Notas</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.phones.map(amigo =>
                                    <tr key={amigo.id}>
                                        <td>{amigo.name}</td>
                                        <td><a href={"tel:" + amigo.phone}>{amigo.phone}</a></td>
                                        <td>{amigo.note}</td>
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
        )
    }
}
