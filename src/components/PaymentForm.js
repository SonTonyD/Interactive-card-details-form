import React, { useEffect } from "react";
import { useState } from "react";

export default function PaymentForm(props) {
    const {handleChange} = props;

    const [PaymentInfo, setPaymentInfo] = useState({
        cardholderName:'',
        cardNumber:''
    })

    function handleOnChange(event) {
        const {name, value} = event.target;
        setPaymentInfo({...PaymentInfo, [name]: value})
    }

    useEffect(() => {
        handleChange(PaymentInfo)
    }, [PaymentInfo, handleChange]);

    return (
        <form>
            <label>cardholder name :</label>
            <br />
            <input type="text" name="cardholderName" value={PaymentInfo.cardholderName} onChange={(event) => handleOnChange(event)} />
            <br />

            <label>card number :</label>
            <br />
            <input type="text" name="cardNumber" value={PaymentInfo.cardNumber} onChange={(event) => handleOnChange(event)} />
            <br />
            
            <input type="submit" value="Confirm" />
        </form>
    );
}
