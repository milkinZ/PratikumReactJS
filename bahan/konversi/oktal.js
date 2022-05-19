import React, { Component } from 'react';
import '../../App.css';

class Oktal extends Component {
    constructor() {
        super()
        this.state = {
            oktal: '',
            option: '',
            hasil: '',
        }
        this.changeOktal=this.changeOktal.bind(this);
        this.changeOption=this.changeOption.bind(this);
        this.hitung=this.hitung.bind(this);
    }

    hitung(){
        var oktal = this.state.oktal
        var decimal = parseInt(oktal, 8)
        if (this.state.option === "decimal") {
            this.setState({
                hasil: decimal
            })
        } else if (this.state.option === "biner") {
            this.setState({
                hasil: decimal.toString(2)
            })
        } else if (this.state.option === "hexadecimal") {
            this.setState({
                hasil: decimal.toString(16)
            })
        }
    }

    //fungsi untuk mengubah oktal
    changeOktal(event){
        this.setState({ oktal: event.target.value })
    }
    //fungsi untuk pilihan konversinya
    changeOption(event){
        this.setState({ option: event.target.value })
    }


    render() {
        return (
            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                        <h3>Konversi Bilangan Oktal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Oktal</label>
                            <input type="number" className="form-control" onChange={this.changeOktal}></input>
                        </div>
                        <div className="form-group" onChange={this.changeOption}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="decimal">Decimal</option>
                                <option value="biner">Biner</option>
                                <option value="hexadecimal">Hexadecimal</option>
                            </select>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <button className="btn btn-primary form-control" onClick={this.hitung} >Konversi</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.hasil}</h5>
                    </div>
                </div>
            </div>
        )

    }

}

export default Oktal;