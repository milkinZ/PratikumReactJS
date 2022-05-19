import React, { Component } from 'react';
import '../../App.css';

class Hexadecimal extends Component {
    constructor() {
        super()
        this.state = {
            hexadecimal:'',
            option:'',
            hasil: '',
        }
        this.hitung=this.hitung.bind(this);
        this.changeOption=this.changeOption.bind(this);
        this.changeHexadecimal=this.changeHexadecimal.bind(this);
    }

    hitung(){
        var hexadecimal = this.state.hexadecimal
        var decimal = parseInt(hexadecimal, 16)
        if (this.state.option === "decimal") {
            this.setState({
                hasil: decimal
            })
        } else if (this.state.option === "octal") {
            this.setState({
                hasil: decimal.toString(8)
            })
        } else if (this.state.option === "biner") {
            this.setState({
                hasil: decimal.toString(2)
            })
        }
    }

    //fungsi untuk mengubah hexadecimal
    changeHexadecimal(event){
        this.setState({ hexadecimal: event.target.value })
    }
    //fungsi untuk pilihan konversinya
    changeOption(event){
        this.setState({ option: event.target.value })
    }


    render() {
        return (
            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header bg-success text-center text-white">
                        <h3>Konversi Bilangan Hexadecimal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Hexadecimal</label>
                            <input type="number" className="form-control" onChange={this.changeHexadecimal}></input>
                        </div>
                        <div className="form-group" onChange={this.changeOption}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="decimal">Decimal</option>
                                <option value="octal">Octal</option>
                                <option value="biner">Biner</option>
                            </select>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <button className="btn btn-success form-control" onClick={this.hitung}>Konversi</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.hasil}</h5>
                    </div>
                </div>
            </div>
        )

    }

}

export default Hexadecimal;