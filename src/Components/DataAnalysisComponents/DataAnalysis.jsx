import React, { Component } from 'react';
import logo from '../../Resources/under_construction.png'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


export default class DataAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plotData: {
                title: "asd",
                data: [],
                xAxis: "",
                yAxis: ""
            },
            data: []
        }
        this.updatePlot = this.updatePlot.bind(this);
        this.validDigits = this.validDigits.bind(this);
        this.getXValue = this.getXValue.bind(this);
        this.arimaMethod = this.arimaMethod.bind(this);
        this.armaMethod = this.armaMethod.bind(this);
    }

    armaMethod() {
        alert("should perform ARMA method on data");
    }
    arimaMethod() {
        alert("should perform ARMA method on data");
    }
    getXValue = data => {
        return data.value;
    }

    validDigits(data) {
        return data.replace(/[^\d,.]+/g, '');
    }

    updatePlot = (e) => {
        document.getElementById('data-to-plot').innerHTML = e.target.value.replace(/[^\d,.]+/g, '');
        var dt = this.validDigits(e.target.value).split(',').map(Number);
        dt = Array.from(dt, item => item === '' ? 0 : item);
        //console.log(dt);
        let dt2 = dt.map(item => {
            return item
        })

        //console.log(dt2);
        const data = []
        var reg = /^[a-z]+$/i;
        if (reg.test(e.target.value)) {
            document.getElementById('arima-btn').disabled = true;
            document.getElementById('arma-btn').disabled = true;
        } else if (e.target.value !== '' && !reg.test(e.target.value)) {
            document.getElementById('arima-btn').disabled = false;
            document.getElementById('arma-btn').disabled = false;
        }
        else {
            document.getElementById('arima-btn').disabled = true;
            document.getElementById('arma-btn').disabled = true;
        }
        if (e.target.value == '')
            document.getElementById('data-to-plot').innerHTML = '-'
        else
            document.getElementById('data-to-plot').innerHTML = "[" + dt + "]";

        let dt_plot = []

        for (let i = 0; i < dt.length; i++) {
            //console.log(i);
            let new_d = {
                value: dt[i]
            }
            dt_plot.push(new_d)
        }

        this.setState({ data: dt_plot })
        console.log("state = " + this.state.plotData.data)
    }


    render() {
        return <>
            <div className='container' style={{ textAlign: "center", marginBottom: "15px" }}>this app will allow for data analysis on the spot</div>

            <div className='container' style={{ wrap: "flex", alignItems: "center" }}>
                <div className='row'>

                    <div className='col-sm-3' style={{ margin: "auto", textAlign: "left" }}>
                        <div className='container'>
                            <label style={{ margin: "10px" }}>Enter the data you want to plot:</label><br />
                            <input onChange={this.updatePlot} id='input-data' placeholder='ex. 1,2,3,4,5 ....'></input>
                        </div>
                        <div className='container' style={{ marginTop: "10px", marginBottom: "5px" }}>
                            <label style={{ margin: "5px" }}>Select forecasting method</label>
                            <button onClick={this.arimaMethod} style={{ marginLeft: "5px", marginRight: "5px" }}
                                disabled="true" id='arima-btn' className='btn btn-info'>ARIMA</button>
                            <button onClick={this.armaMethod} style={{ marginLeft: "5px", marginRight: "5px" }}
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

                    {
                        // here begins the plotting
                    }

                    <div className='col-sm-9'>
                        <div className='container'>
                            <label>Data to be plotted: </label>
                            <label id='data-to-plot'>-</label>
                        </div>
                        <div className='container'>
                            <LineChart width={500} height={300} data={this.props.data}>
                                <Line type="monotone" dataKey={[{ value: 3 }, { value: 5 }]} stroke="#8884d8" dot={false} />
                                <XAxis id='xaxis' dataKey="X Axis" value="s" />
                                <YAxis id='yaxis' />
                            </LineChart>
                        </div>
                        <div >
                            <div className='container' style={{ marginTop: "5px", marginBottom: "5px", alignContent: "left" }}>
                                <div className='col-sm-6'>
                                    <div className='input-group '>
                                        <div className='input-group-prepend '>
                                            <span className='input-group-text'>Graph's name: </span>

                                        </div>
                                        <input type="text" aria-label="Plot Name" placeholder='Graph name' class="form-control" />
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
