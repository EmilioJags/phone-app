import React, { Component } from 'react'
import PhoneService from '../Services/PhoneService'
import DeletePhoneComponent from './DeletePhoneComponent';
import EditPhoneComponent from './EditPhoneComponent';

export default class PhoneListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { phones: [] }
        this.filterResults = this.filterResults.bind(this);
    }
    componentDidMount() {
        PhoneService.getPhones().then((res) => {
            this.setState({ phones: res.data })
        })
    }


    filterResults = (e) => {
        PhoneService.findByFilter(e.target.value).then((res) => {
            this.setState({ phones: res.data })
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Directorio Telefonico Familia Castro</h2>
                <div className="input-group mb-3" >
                    <input onChange={this.filterResults} type="text" className="form-control" 
                    placeholder="Introduce un termino de busqueda" aria-label="Recipient's username" 
                    aria-describedby="button-addon2" />

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
                                        <td>{amigo.phone}</td>
                                        <td>{amigo.note}</td>
                                        <td className='me-2'>
                                            <EditPhoneComponent props={amigo.id} />
                                            <DeletePhoneComponent props={amigo.id} /></td>
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
