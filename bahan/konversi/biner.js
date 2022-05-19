import React, { Component } from 'react';
import '../../App.css';

class Biner extends Component {
    constructor() {
        super()
        this.state = {
            biner: '',
            option: '',
            hasil: '',
        }
        this.changeBiner=this.changeBiner.bind(this);
        this.changeOption=this.changeOption.bind(this);
        this.hitung=this.hitung.bind(this);
    }

    hitung(){
        var biner = this.state.biner
        var decimal = parseInt(biner, 2)
        if (this.state.option === "decimal") {
            this.setState({
                hasil: decimal
            })
        }
        if (this.state.option === "octal") {
            this.setState({
                hasil: decimal.toString(8)
            })
        }
        if (this.state.option === "hexadecimal") {
            this.setState({
                hasil: decimal.toString(16)
            })
        }
    }

    //fungsi untuk mengubah biner
    changeBiner(event){
        this.setState({ biner: event.target.value })
    }
    //fungsi untuk pilihan konversinya
    changeOption(event){
        this.setState({ option: event.target.value })
    }


    render() {
        return (
            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header bg-danger text-center text-white">
                        <h3>Konversi Bilangan Biner</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Biner</label>
                            <input type="number" className="form-control" onChange={this.changeBiner}></input>
                        </div>
                        <div className="form-group" onChange={this.changeOption}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="decimal">Decimal</option>
                                <option value="octal">Octal</option>
                                <option value="hexadecimal">Hexadecimal</option>
                            </select>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <button className="btn btn-danger form-control" onClick={this.hitung}>Konversi</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.hasil}</h5>
                    </div>
                </div>
            </div>
        )

    }

}

export default Biner;