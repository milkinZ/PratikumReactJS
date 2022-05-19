import React from 'react';
import '../App.css';


class Bank extends React.Component{
    constructor(){
        super()
        this.state = {
          nominal: '',
          bunga: '',
          periode:'',
          hasil: '',
        }
        this.changeNominal =this.changeNominal.bind(this);
        this.changeBunga =this.changeBunga.bind(this);
        this.changePeriode =this.changePeriode.bind(this);
        this.hitungBank =this.hitungBank.bind(this);
      }
    
      //fungsi untuk mengubah nominal
      changeNominal(event){
        this.setState({nominal: event.target.value})
      }
      //fungsi untuk mengubah bunga
      changeBunga(event){
        this.setState({bunga: event.target.value})
      }
      //fungsi untuk mengubah periode
      changePeriode(event){
        this.setState({periode: event.target.value})
      }
      hitungBank(){
        var nominal=parseInt(this.state.nominal);
        var bunga=this.state.bunga;
        var periode=this.state.periode;
        var totalBunga=nominal * (periode / 12) * bunga / 100;
        var cicilan= (nominal + totalBunga) / periode;
        var hasil= new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            }).format(cicilan);
        this.setState({
         hasil
        })
      }
      render() {
        return (
            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header bg-success text-center text-white">
                        <h3>Cicilan Bank</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Nominal</label>
                            <input type="number" className="form-control" onChange={this.changeNominal}></input>
                        </div>
                        <div className="form-group">
                            <label>Bunga</label>
                            <input type="number" className="form-control" onChange={this.changeBunga}></input>
                        </div>
                        <div className="form-group">
                            <label>Periode</label>
                            <select className="form-control" onChange={this.changePeriode}>
                                <option selected className="text-muted">Pilih Opsi Periode</option>
                                <option value="6">6 Bulan</option>
                                <option value="12">12 Bulan</option>
                                <option value="18">18 Bulan</option>
                                <option value="24">24 Bulan</option>
                            </select>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <button className="btn btn-success form-control" type="button" onClick={this.hitungBank}> Hitung </button>
                        </div>
                        <div class="p-3">
                            <div class="container bg-light text-center">
                                <hr/>
                                <h4>Cicilan Per Bulan:</h4>
                                <h5 className="form-control text-center" >{this.state.hasil}</h5>
                                <hr/>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
        );
    }
    }
    
    export default Bank;