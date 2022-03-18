import React from 'react'

export const CarsList = ({cars, setCarSelected, deleteData}) => {
  return (
    <ul>
        {cars.map(car => (
            <li key={car.id}>
                <h4>{car.brand} {car.model}</h4>
                <p><b>Color: </b>{car.color}</p>
                <p><b>Year: </b>{car.year}</p>
                <p><b>Price: </b>{car.price}</p>
                <button onClick={() => setCarSelected(car)}>Edit</button>
                <button onClick={() => deleteData(car)}>Delete</button>
            </li>
        ))}
    </ul>
  )
}
