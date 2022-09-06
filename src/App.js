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
      <PreviewCard paymentInfo={PaymentInfo} />
      <br />
      <PaymentForm handleChange={handleChange}/>
    </>
  );
}

export default App;
