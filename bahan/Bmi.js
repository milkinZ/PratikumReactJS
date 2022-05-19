import React from 'react';
import '../App.css';
import Alert from '../Components/alert';
class Bmi extends React.Component {
  constructor(){
    super();

    this.state = {
      tinggi: '',
      berat: '',
      stat:'',
      bmi:''
    }

    this.handleTinggiChange = this.handleTinggiChange.bind(this);
    this.handleBeratChange = this.handleBeratChange.bind(this);
    this.hitungBmi = this.hitungBmi.bind(this);
  }

  handleTinggiChange(event){
    this.setState({
      tinggi: event.target.value
    });
  }  

  handleBeratChange(event){
    this.setState({
      berat: event.target.value
    });
  }
  hitungBmi(){
    var tinggi=this.state.tinggi / 100;
    var berat=this.state.berat;
    var hasil = berat / (tinggi * tinggi);
    var bmi= hasil.toFixed(1);
    var stat;
    if(bmi < 18.5){
        stat="kurang"     
    } else if(bmi >= 18.5 && bmi <= 24.9){
        stat="normal"
    } else if(bmi >= 25 && bmi <= 29.9){
        stat="lebih"
    }else if(bmi>30){
        stat="gemuk"
    }else{
      stat="Kosong"
    }
    this.setState({
      bmi,
      stat
    })
  }
  Alert = () => {
    if(this.state.stat === "kurang"){  
      return <Alert alertClass="warning text-center" >
      <p class="h5">Kekurangan Berat Badan</p>
    </Alert>
    }

    if(this.state.stat === "normal"){  
      return <Alert alertClass="success text-center">
        <p class="h5">Berat Badan Normal</p>
      </Alert>
    } 

    if(this.state.stat === "lebih"){
      return <Alert alertClass="warning text-center">
        <p class="h5">Kelebihan Berat Badan</p>
      </Alert>
    }

    if(this.state.stat === "gemuk"){
      return <Alert alertClass="danger text-center">
        <p class="h5">Obeitas!!</p>
      </Alert>
    }

    //ini apabila belum memasukkan berat dan tinggi
    if(this.state.stat === "kosong"){
      return <Alert alertClass="secondary text-center">
        <p class="h5">Masukkan Berat dan Tinggi Terlebih Dahulu!</p>
      </Alert>
    }

  }
  render() {
    return (
      <div className="App container">
        <div className="text-center bg-light">
            <h4 className="py-4">Body Mass Index</h4>
          <hr/>
        </div>
        <div className="container">
        <div class="mb-3 row">
          <label for="berat" class="col-sm-2 col-form-label">Berat:</label>
          <div class="col-sm-9">
            <input className="form-control" id="berat" type="number" value={ this.state.berat } onChange={ this.handleBeratChange } />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="tinggi" class="col-sm-2 col-form-label">Tinggi:</label>
          <div class="col-sm-9">
            <input className="form-control" id="tinggi" type="number" value={ this.state.tinggi } onChange={ this.handleTinggiChange } />
          </div>
        </div>
        </div>
          <div className="d-grid gap-3">
            <button class="btn btn-info text-white" type="button" onClick={this.hitungBmi}>Hitung</button>
          </div>
          <div class="py-3">
            <div class="container bg-light">
              <hr/>
              <h3>Hasil:</h3>
              <h5 className="text-center">{this.state.bmi}</h5> 
              {this.Alert()}
            </div>
          </div>
        </div>
    );
  }
}
export default Bmi;