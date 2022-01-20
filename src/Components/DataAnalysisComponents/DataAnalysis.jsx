import React, { Component } from 'react';


export default class DataAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plotData: {
                title: "",
                data: [],
                xAxis: "",
                yAxis: ""
            }
        }
        this.updatePlot = this.updatePlot.bind(this);
        this.validDigits = this.validDigits.bind(this);
    }

    validDigits(data) {
        return data.replace(/[^\d,]+/g, '');
    }

    updatePlot = (e) => {
        const data = this.validDigits(e.target.value).split(",");
        this.setState({ data: data });

        if (e.target.value !== '') {
            document.getElementById('arima-btn').disabled = false;
            document.getElementById('arma-btn').disabled = false;
        }
        else {
            document.getElementById('arima-btn').disabled = true;
            document.getElementById('arma-btn').disabled = true;
        }
        console.log(this.props.state[data]);
    }

    render() {
        return <>
            <div className='container'>this app will allow for data analysis on the spot</div>

            <div className='container' style={{ wrap: "flex", alignItems: "center" }}>
                <div className='row'>

                    <div className='col-sm-3'>
                        <div className='container'>
                            <label>Enter the data you want to plot:</label><br />
                            <input onChange={this.updatePlot} id='input-data' placeholder='ex. 1,2,3,4,5 ....'></input>
                        </div>
                        <div className='container' style={{ marginTop: "5px", marginBottom: "5px" }}>
                            <label>Select forecasting method</label>
                            <button style={{ marginLeft: "5px", marginRight: "5px" }}
                                disabled="true" id='arima-btn' className='btn btn-info'>ARIMA</button>
                            <button style={{ marginLeft: "5px", marginRight: "5px" }}
                                disabled="true" id='arma-btn' className='btn btn-info'>ARMA</button>

                            <a href="https://machinelearningmastery.com/arima-for-time-series-forecasting-with-python/#:~:text=An%20ARIMA%20model%20is%20a,and%20forecasting%20time%20series%20data.&text=time%20series%20forecasts.-,ARIMA%20is%20an%20acronym%20that%20stands%20for%20AutoRegressive%20Integrated%20Moving,adds%20the%20notion%20of%20integration."
                                target="_blank">
                                <button style={{ marginLeft: "15px", marginRight: "5px", marginTop: "5px" }}
                                    id='arima-info-btn' className='btn btn-outline-info rounded-circle'>info</button></a>
                            <a href='https://www.statisticshowto.com/arma-model/#:~:text=An%20ARMA%20model%2C%20or%20Autoregressive,second%20for%20the%20moving%20average.&text=q%20is%20the%20order%20of%20the%20moving%20average%20polynomial.'
                                target="_blank">
                                <button style={{ marginLeft: "25px", marginRight: "5px", marginTop: "5px" }}
                                    id='arma-info-btn' className='btn btn-outline-info rounded-circle'>info</button></a>
                        </div>
                    </div>

                    <div className='col-sm-9'> here the plot
                        <div className='container'>
                            <img src='../../Resources/under_construction.png' alt='testing img'></img>
                        </div>
                        <div >
                            <div className='container' style={{ marginTop: "5px", marginBottom: "5px", alignContent: "left" }}>
                                <div className='col-sm-6'>
                                    <div className='input-group '>
                                        <div className='input-group-prepend '>
                                            <span className='input-group-text'>Graph's name: </span>

                                        </div>
                                        <input type="text" aria-label="Plot Name" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className='container' >
                                <div className='col-sm-6' style={{ marginTop: "5px", marginBottom: "5px", alignContent: "left" }}>
                                    <div className='input-group '>
                                        <div className='input-group-prepend '>
                                            <span className='input-group-text'>Axis' names: </span>
                                        </div>
                                        <input placeholder='X Axis' type="text" class="form-control" />
                                        <input placeholder='Y Axis' type="text" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>;
    }
}
