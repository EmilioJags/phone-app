import React, { Component } from 'react'
import PhoneService from '../Services/PhoneService'

export default class PhoneListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { phones: [] }
    }
    componentDidMount() {
        PhoneService.getPhones().then((res) => {
            this.setState({ phones: res.data })
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Directorio Telefonico Familia Castro</h2>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Notas</th>
                                <th>Correo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.phones.map(amigo =>
                                    <tr key={amigo.id}>
                                        <td>{amigo.name}</td>
                                        <td>{amigo.phone}</td>
                                        <td>{amigo.note}</td>
                                        <td>{amigo.email}</td>
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
