import { useEffect } from "react";
import { useState } from "react";

function PreviewCard(props) {
    //const {paymentInfo} = props;
    const[previewPaymentInfo, setPreviewPaymentInfo] = useState(0);

    useEffect(()=> {
        setPreviewPaymentInfo(props.paymentInfo);
    }, [props])

    return (
        <div >
            <h1>PreviewCard</h1>
            <br />
            <label>Cardholder Name : {previewPaymentInfo.cardholderName} </label>
            <br />
            <label>CardNumber : {previewPaymentInfo.cardNumber} </label>
            <br />
            <label>exp. date (MM/YY) : {previewPaymentInfo.MM} / {previewPaymentInfo.YY} </label>
            <br />
            <label>CVC: {previewPaymentInfo.CVC} </label>
        </div>
    );
}

export default PreviewCard