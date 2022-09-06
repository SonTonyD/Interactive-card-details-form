import { useEffect } from "react";
import { useState } from "react";

function PreviewCard(props) {
    //const {paymentInfo} = props;
    const[previewPaymentInfo, setPreviewPaymentInfo] = useState(0);

    useEffect(()=> {
        setPreviewPaymentInfo(props.paymentInfo);
    }, [props])

    return (
        <div>
            <h1>PreviewCard</h1>
            <br />
            <label>Cardholder Name : {previewPaymentInfo.cardholderName} </label>
            <br />
            <label>Card Number : {previewPaymentInfo.cardNumber} </label>
        </div>
    );
}

export default PreviewCard