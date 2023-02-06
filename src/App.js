import './App.css'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const App = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanInterest, setLoanInterest] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [Add, setAdd] = useState(0);

  const calcSum = (e) => {
    e.preventDefault();

    if (loanAmount === 0 || loanInterest === 0 || loanTenure === 0) {
      alert('Please fill all the inputs')
    }
    else {
      const monthlyRate = loanInterest / 12 / 100;
      let Add = (loanAmount * monthlyRate * (1 + monthlyRate) ** loanTenure) / ((1 + monthlyRate) ** loanTenure - 1);
      setAdd(Add)
    }


  }

  const handleClick = (e) => {
    setAdd(0);
    window.location.reload();
  }
  


  return (
    <div className='app'>
      <div className="container">
        <div className="heading_text">
          <h1 className='heading_one'>Know your EMI's</h1>
        </div>

        <div className='total_amount_card'>
          <div className='card_text '>
            <h3 className='total_amount_heading'>₹ {(Math.round(Add * 100) / 100).toFixed(2)}</h3>
            <p className='total_amount_para'>EMI Amount</p>
          </div>
          <div className='card_text '>
            <h3 className='total_amount_heading'>₹ {((Math.round(Add * 100) / 100) * loanTenure).toFixed(2)}</h3>
            <p className='total_amount_para'>Total Amount with Interest</p>
          </div>
        </div>


        <form onSubmit={calcSum}>

          <div className='input_area'>
            <div className='input_field'>
              <TextField type="number" value={loanAmount || ""} onChange={(e) => setLoanAmount(e.target.value)} id="outlined-basic" label="₹ Principal amount" variant="outlined" />
            </div>
            <div className='input_field'>
              <TextField type="number" value={loanInterest || ""} onChange={(e) => setLoanInterest(e.target.value)} id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
            </div>
            <div className='input_field'>
              <TextField type="number" value={loanTenure || ""} onChange={(e) => setLoanTenure(e.target.value)} id="outlined-basic" label="Time period ( Months )" variant="outlined" />
            </div>
          </div>
          <div className='button_collection'>
            <Stack spacing={2} direction="row">
              <Button type='submit' className='btn_one' style={{ backgroundColor: '#8EE4AF', boxShadow: 'none', fontWeight: 'bold', color: 'darkblue' }} variant="contained">Calculate</Button>
              <Button className='btn_one' style={{ fontWeight: 'bold', backgroundColor: '#8EE4AF', color: 'darkblue', border: 'none' }} onClick={handleClick} variant="outlined">Reset</Button>
            </Stack>
          </div>
        </form>


      </div>
      

      
    </div>
  )

}

export default App