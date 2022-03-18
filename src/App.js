import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import { CarsList } from './components/CarsList';
import { CarsForm } from './components/CarsForm';

function App() {

  const [carSelected, setCarSelected] = useState(null)
  const [cars, setCars] = useState([])

  function getData() {
    axios.get('https://cars-crud.herokuapp.com/cars/')
      .then(res => setCars(res.data))
  }

  function deleteData(car) {
    axios.delete(`https://cars-crud.herokuapp.com/cars/${car.id}/`)
      .then(() => getData())
  }
  

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="App">
      <CarsForm getData={getData} carSelected={carSelected} setCarSelected={setCarSelected}/>
      <CarsList cars={cars} setCarSelected={setCarSelected} deleteData={deleteData}/>
    </div>
  );
}

export default App;
