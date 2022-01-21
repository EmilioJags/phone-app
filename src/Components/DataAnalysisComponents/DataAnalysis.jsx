import React, { Component } from 'react';
import logo from '../../Resources/under_construction.png'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Label,
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
        this.randomSet = this.randomSet.bind(this);
        this.xAxisChange = this.xAxisChange.bind(this);
        this.yAxisChange = this.yAxisChange.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    clearData = (e) => {
        document.getElementById('input-data').value = '';
        document.getElementById('data-to-plot').innerHTML = '';
        document.getElementById('arima-btn').disabled = true;
        document.getElementById('arma-btn').disabled = true;
        this.setState({ data: [] })
    }

    xAxisChange = (e) => {
        if (e.target.value == '') {
            console.log('empty')
            var xVal = document.getElementById('label-x-axis')
            console.log(xVal + " === ")
        }
        else {
            console.log('fill it')
            var xVal = document.getElementById('label-x-axis').innerHTML.replace('X-Axis', e.target.value)
            document.getElementById('label-x-axis').innerHTML.replace('X-Axis', e.target.value)
            console.log(xVal + " === ")
        }
    }

    yAxisChange = (e) => {
        if (e.target.value == '') {
            console.log('empty')
        }
        else {
            console.log('fill it')
            var yVal = document.getElementById('yaxis').value
            console.log(yVal)
        }
    }
    randomSet = (e) => {
        document.getElementById("input-data").innerHTML = '';
        var arr = [];
        var str = '';
        var pos = 0;
        while (arr.length < 15) {
            arr.push(Math.floor(Math.random() * 100 + 1));
            str += arr[pos] + ', ';
            pos++;
        }
        //console.log(arr);
        //console.log(str);
        str = str.substring(0, str.length - 2);
        //console.log(str);
        document.getElementById('input-data').value = str
        document.getElementById("data-to-plot").innerHTML = "[" + str + "]";
        str = str.split(',').map(Number);
        let dt_plot = []

        for (let i = 0; i < str.length; i++) {
            //console.log(i);
            let new_d = {
                value: str[i],
                year: i + 1
            }
            dt_plot.push(new_d)
        }
        this.setState({ data: dt_plot })
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
    updatePlot() {

    }
    updatePlot = (e) => {
        console.log(str);
        var dt = this.validDigits(e.target.value).split(',').map(Number);
        var str = ''
        for (let i = 0; i < dt.length; i++) {
            str += dt[i] + ', '
        }
        document.getElementById('data-to-plot').innerHTML = "[" + str.substring(0, str.length - 2) + "]";
        dt = Array.from(dt, item => item === '' ? 0 : item);
        //console.log(dt); 


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

        let dt_plot = []

        for (let i = 0; i < dt.length; i++) {
            //console.log(i);
            let new_d = {
                value: dt[i],
                year: i + 1
            }
            dt_plot.push(new_d)
        }

        this.setState({ data: dt_plot })
    }


    render() {
        return <>
            <div className='container' style={{ textAlign: "center", marginBottom: "15px" }}>this app will allow for data analysis on the spot</div>

            <div className='container' style={{ wrap: "flex", alignItems: "center" }}>
                <div className='row'>

                    <div className='col-sm-3' style={{ margin: "auto", textAlign: "left" }}>
                        <div className='container'>
                            <label >Enter the data you want to plot:</label>
                            <br />

                            <div className='input-group mb-3' style={{ flex: 1, marginTop: "3px" }}>
                                <div className='input-group-prepend' >
                                    <span><input className='input-group' onChange={this.updatePlot} id='input-data' placeholder='ex. 1,2,3,4,5 ....' />
                                    </span>
                                </div>
                                <button style={{ marginLeft: "3px" }} className='bi bi-trash' onClick={this.clearData}>Clear</button>

                            </div>
                            <div className='container' style={{ padding: "0", marginTop: "5px" }}>
                                <button onClick={this.randomSet} className='btn btn-outline-dark rounded-square'>
                                    Random data set
                                </button>
                                <label style={{ marginLeft: "5px" }} onMouseEnter={() => console.log("flying")} onMouseLeave={() => console.log("remove")}>

                                </label>
                            </div>
                        </div>
                        <div className='container' style={{ marginTop: "10px", marginBottom: "5px" }}>
                            <label style={{ margin: "5px" }}>Select forecasting method (not working yet)</label>
                            <button onClick={this.arimaMethod} style={{ marginLeft: "5px", marginRight: "5px" }}
                                disabled="true" id='arima-btn' className='btn btn-info'>ARIMA</button>
                            <button onClick={this.armaMethod} style={{ marginLeft: "5px", marginRight: "5px" }}
                                disabled="true" id='arma-btn' className='btn btn-info  '>ARMA</button>
                            <br />
                        </div>
                        <div className='container'>
                            <a href='https://machinelearningmastery.com/arima-for-time-series-forecasting-with-python/#:~:text=An%20ARIMA%20model%20is%20a,and%20forecasting%20time%20series%20data.&text=time%20series%20forecasts.-,ARIMA%20is%20an%20acronym%20that%20stands%20for%20AutoRegressive%20Integrated%20Moving,adds%20the%20notion%20of%20integration.'
                                target="_blank">
                                <button style={{ marginLeft: "15px", marginRight: "5px", marginTop: "5px" }}
                                    id='arima-info-btn' className='btn btn-outline-info rounded-circle'>info</button></a>
                            <a href="https://www.statisticshowto.com/arma-model/#:~:text=An%20ARMA%20model%2C%20or%20Autoregressive,second%20for%20the%20moving%20average.&text=q%20is%20the%20order%20of%20the%20moving%20average%20polynomial."
                                target="_blank">
                                <button style={{ marginLeft: "15px", marginRight: "5px", marginTop: "5px" }}
                                    id='arma-info-btn' className='btn btn-outline-info rounded-circle'>info</button></a>
                        </div>
                    </div>

                    {
                        // here begins the plotting
                    }

                    <div className='col-sm-9'>
                        <div style={{ wordWrap: "initial", flex: 1, flexWrap: "wrap" }} className='container'>
                            <div style={{ wordWrap: "initial", flex: 1, flexWrap: "wrap" }} className='row'>
                                <label>Data to be plotted: </label>
                                <view style={{ flex: 1, flexDirection: "row" }} >
                                    <label style={{ wordWrap: "initial", flex: 1, flexWrap: "wrap" }} id='data-to-plot'>-</label>
                                </view>
                            </div>
                        </div>
                        <div className='container'>
                            <LineChart title="ok" width={500} height={300} data={this.state.data}>
                                <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
                                <XAxis id='xaxis' dataKey="year">
                                    <Label value="X-Axis" id='label-x-axis' style={{}} >
                                    </Label>
                                </XAxis>
                                <YAxis id='yaxis'  >
                                    <Label angle={270} offset={0} style={{ textAnchor: "middle", margin: "5px" }} value="Y-Axis" id='label-x-axis'>
                                    </Label>
                                </YAxis>
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
                                        <input onChange={this.xAxisChange} placeholder='X Axis' type="text" class="form-control" />
                                        <input onChange={this.yAxisChange} placeholder='Y Axis' type="text" class="form-control" />
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
