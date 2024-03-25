import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [msg, setMsg] = useState('')
  console.log(weight, height);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      window.alert('Enter valid weight and height')
    }
    else if (weight >0 && height >0){
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi);

      if (bmi < 25) {
        setMsg('You are underweight');
      }
      else if (bmi > 25 && bmi < 30) {
        setMsg('You are normal weight')
      }
      else {
        setMsg('You are obese')
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="app">
          <h2>BMI Calculator</h2>
          <form onSubmit={handleSubmit} className='submit'>
            <label htmlFor="weight">Weight</label>
            <input type="number" id="weight" placeholder='Enter your weight' value={weight} onChange={(e) => setWeight(e.target.value)} />

            <label htmlFor="height">Height</label>
            <input type="number" id="height" placeholder='Enter your height' value={height} onChange={(e) => setHeight(e.target.value)} />

            <button type='submit'>Calculate BMI</button>
            <h4>Your BMI is: {bmi}</h4>
            <p>{msg}</p>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
