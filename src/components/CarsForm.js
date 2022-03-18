import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CarsForm.css'

export const CarsForm = ({getData, carSelected, setCarSelected}) => {
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [color, setColor] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {
        if(carSelected){
            setBrand(carSelected.brand)
            setModel(carSelected.model)
            setColor(carSelected.color)
            setYear(carSelected.year)
            setPrice(carSelected.price)
        }
    }, [carSelected])
    

    function submitForm(e) {
        e.preventDefault()
        const newCar = {
            brand,
            model,
            color,
            year,
            price
        }

        if(carSelected){
            axios.put(`https://cars-crud.herokuapp.com/cars/${carSelected.id}/`,newCar)
                .then(() => {
                    getData()
                    reset()
                })
        }else{
            axios.post('https://cars-crud.herokuapp.com/cars/', newCar)
                .then(() => {
                    getData()
                    reset()

                })
        }
    }

    function reset() {
        setCarSelected(null)
        setBrand('')
        setModel('')
        setColor('')
        setYear('')
        setPrice('')
    }


  return (
    <form onSubmit={submitForm} className='m-5 p-5'>
        <div className='mb-3'>
            <label htmlFor='brand' className='form-label'>Brand</label>
            <input
                className='form-control'
                type='text'
                onChange={e => setBrand(e.target.value)}
                value={brand}
            ></input>
        </div>
        <div className='mb-3'>
            <label htmlFor='model' className='form-label'>Model</label>
            <input
                className='form-control'
                type='text'
                onChange={e => setModel(e.target.value)}
                value={model}
            ></input>
        </div>
        <div className='mb-3'>
            <label htmlFor='color' className='form-label'>Color</label>
            <input
                className='form-control'
                type='text'
                onChange={e => setColor(e.target.value)}
                value={color}
            ></input>
        </div>
        <div className='mb-3'>
            <label htmlFor='year' className='form-label'>Year</label>
            <input
                className='form-control'
                type='number'
                onChange={e => setYear(e.target.value)}
                value={year}
            ></input>
        </div>
        <div className='mb-3'>
            <label htmlFor='price' className='form-label'>Price</label>
            <input
                className='form-control'
                type='text'
                onChange={e => setPrice(e.target.value)}
                value={price}
            ></input>
        </div>
        <button type='submit' className='btn btn-primary'>Add Car</button>
    </form>
  )
}
