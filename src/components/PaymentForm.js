import React, { useEffect } from "react";
import { useState } from "react";
import '../css/PaymentForm.css';

export default function PaymentForm(props) {
    const { handleChange } = props;

    const [PaymentInfo, setPaymentInfo] = useState({
        cardholderName: '',
        cardNumber: '',
        MM: "",
        YY: "",
        CVC: ""
    })

    function handleOnChange(event) {
        const { name, value } = event.target;
        setPaymentInfo({ ...PaymentInfo, [name]: value })
    }

    useEffect(() => {
        handleChange(PaymentInfo)
    }, [PaymentInfo, handleChange]);

    function handleCardNumber(event) {
        let { name, value } = event.target;
        if(value.length === 4 || value.length === 9 || value.length === 14) {
            value += " "
        }
        setPaymentInfo({ ...PaymentInfo, [name]: value })
    }

    function handleKeyDown(event) {
        if (event.key === 'Backspace') {
            let { name, value } = event.target;
            console.log(value[value.length-1])
            if (value[value.length-1] === ' ') {
                value = value.slice(0,-1)
            } 
            setPaymentInfo({ ...PaymentInfo, [name]: value })
        }
    };

    
    

    return (
        <form className="container" autoComplete="off">
            <label className="PaymentForm-label">cardholder name :</label>

            <input type="text" name="cardholderName" value={PaymentInfo.cardholderName} onChange={(event) => handleOnChange(event)} placeholder="e.g. Jane Appleseed" />


            <label className="PaymentForm-label">card number :</label>

            <input size="19" maxLength="19" data-stripe="number" type="text" name="cardNumber" value={PaymentInfo.cardNumber} onChange={(event) => handleCardNumber(event)} onKeyDown={handleKeyDown} placeholder="e.g. 1234 5678 9123 0000" />

            <div className="date-info">
                <div className="exp-date">
                    <label className="PaymentForm-label">exp. date (MM/YY) </label>

                    <div className="exp-date-input-group">
                        <input className="exp-date-input" type="text" name="MM" value={PaymentInfo.MM} onChange={(event) => handleOnChange(event)} placeholder="MM" />
                        <input className="exp-date-input" type="text" name="YY" value={PaymentInfo.YY} onChange={(event) => handleOnChange(event)} placeholder="YY" />
                    </div>
                </div>
                <div className="cvc">
                    <label className="PaymentForm-label">cvc </label>
                    <div className="cvc-input-group">
                        <input className="cvc-input" type="text" name="CVC" value={PaymentInfo.CVC} onChange={(event) => handleOnChange(event)} placeholder="e.g. 123" />
                    </div>
                    
                </div>
            </div>

            <input className="confirm-btn" type="submit" value="Confirm" />
        </form>
    );
}

