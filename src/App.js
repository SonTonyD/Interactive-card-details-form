import './App.css';
import PaymentForm from "./components/PaymentForm"
import PreviewCard from "./components/PreviewCard"
import { useState } from 'react';

function App() {
  const[PaymentInfo, SetPaymentInfo] = useState({
    cardholderName:"",
    cardNumber:""
  });

  function handleChange(paymentInfo) {
    SetPaymentInfo(paymentInfo)
  }

  return (
    <>
      <div className='Top-Container'>
        <div className='Component-PreviewCard'>
          <PreviewCard paymentInfo={PaymentInfo} />
        </div>
        
        <br />
        <div className='Component-PaymentForm'>
          <PaymentForm handleChange={handleChange}/>
        </div>
      </div>
    </>
  );
}

export default App;
