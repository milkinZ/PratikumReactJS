import React from 'react';
import '../App.css';

export default class Harga extends React.Component{
    constructor() {
        super()
        this.state = {
          hargaAwal: '',
          ppn: '',
          diskon: '',
          hargaAkhir: ''
        }
        this.changeHargaAwal=this.changeHargaAwal.bind(this);
        this.changePpn=this.changePpn.bind(this);
        this.changeDiskon=this.changeDiskon.bind(this);
        this.hitung=this.hitung.bind(this);
      }
    //fungsi mengubah hargaawal
    changeHargaAwal(event){
        this.setState({ hargaAwal: event.target.value })
    }
    //fungsi mengubah ppn
    changePpn(event){
        this.setState({ ppn: event.target.value })
    }
    //fungsi mengubah diskon
    changeDiskon(event) {
        this.state({ diskon: event.target.value })
    }
    hitung(){
        var hargaAwal = this.state.hargaAwal
        var ppn = this.state.ppn
        var diskon = this.state.diskon
        var hasil = ((hargaAwal - ((diskon / 100) * hargaAwal)) + ((ppn) / 100) * hargaAwal);
        var hargaAkhir= new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            }).format(hasil);
        this.setState({
          hargaAkhir
        })
      }
      render() {
        return (
          <div className="container col-md-6">
            <div className="card">
              <div className="card-header bg-danger text-center text-white">
                <h3>Harga Akhir</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Harga Awal</label>
                  <input type="number" className="form-control" onChange={this.changeHargaAwal}></input>
                </div>
                <div className="form-group">
                  <label>PPN</label>
                  <input type="number" className="form-control" onChange={this.changePpn}></input>
                </div>
                <div className="form-group">
                  <label>Diskon</label>
                  <input type="number" className="form-control" onChange={this.changeDiskon}></input>
                </div>
                <br></br>
                <div className="form-group">
                  <button className="btn btn-danger form-control" onClick={this.hitung}>Hitung</button>
                </div>
                <div className="container bg-light">
                    <hr/>
                    <p className="lead text-center">Harga Akhir:</p>
                    <h5 className="p-3 form-control text-center" >{this.state.hargaAkhir}</h5>
                </div>
              </div>
            </div>
          </div>
        )
      }
}