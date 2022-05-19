import React from 'react';
import './App.css';
import Bmi from './bahan/Bmi';
import Bank from './bahan/Bank';
import Harga from './bahan/Harga';
import Hexadesimal from './bahan/konversi/hexadesimal';
import Biner from './bahan/konversi/biner';
import Decimal from './bahan/konversi/decimal';
import Oktal from './bahan/konversi/oktal';
class App extends React.Component {
  render(){
    return(
      <div className="container border border-2">
        <div className="p-3">
          <Bmi/>
          <hr/>
        </div>
        <div className="p-3">
          <Bank/>
          <hr/>
        </div>
        <div className="p-3">
          <Harga/>
          <hr/>
        </div>
        <h3 className="h3 text-center">Konversi Bilangan</h3>
        <div className="p-3">
          <Biner/>
          <hr/>
        </div>
        <div className="p-3">
          <Decimal/>
          <hr/>
        </div>
        <div className="p-3">
          <Oktal/>
          <hr/>
        </div>
        <div className="p-3">
          <Hexadesimal/>
          <hr/>
        </div>
      </div>
    )
    }
}
export default App;




