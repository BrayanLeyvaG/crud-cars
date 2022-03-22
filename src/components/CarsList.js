import React from 'react'
import './CarList.css'

export const CarsList = ({cars, setCarSelected, deleteData}) => {
  return (
    <ul className='d-flex flex-wrap'>
        {cars.map(car => (
            <li className='card text-center p-5' style={{width: "18rem"}} key={car.id}>
                <h4>{car.brand} {car.model}</h4>
                <p><b>Color: </b>{car.color}</p>
                <p><b>Year: </b>{car.year}</p>
                <p><b>Price: </b>{car.price}</p>
                <div className='d-flex justify-content-evenly'>
                    <button className='btn btn-warning' onClick={() => setCarSelected(car)}>Edit</button>     
                    <button className='btn btn-danger' onClick={() => deleteData(car)}>Delete</button>
                </div>
            </li>
        ))}
    </ul>
  )
}
