import { useEffect } from "react";
import { useState } from "react";

function PreviewCard(props) {
    //const {paymentInfo} = props;
    const [previewPaymentInfo, setPreviewPaymentInfo] = useState(0);

    useEffect(() => {
        setPreviewPaymentInfo(props.paymentInfo);
    }, [props])

    return (
        <div className="Preview-container">
            <div className="Preview-front-card">
                <svg height="100" width="100">
                    <circle cx="35" cy="35" r="15" fill="white" />
                </svg>
                <svg className="Preview-small-circle" height="100" width="100">
                    <circle cx="35" cy="35" r="7" fill="none" stroke="white" strokeWidth="2" />
                </svg>

                <div className="Preview-card-number">
                    <label>{previewPaymentInfo.cardNumber}</label>
                </div>

                <div className="Preview-bottom-info">
                    <label>Jane Appleseed</label>
                    <label>00/00</label>
                </div>
            </div>
            <div className="Preview-back-card">
                <div className="Preview-cvc">
                    <label>000</label>
                </div>
            </div>

            {/*
            <h1>PreviewCard</h1>
            <br />
            <label>Cardholder Name : {previewPaymentInfo.cardholderName} </label>
            <br />
            <label>CardNumber : {previewPaymentInfo.cardNumber} </label>
            <br />
            <label>exp. date (MM/YY) : {previewPaymentInfo.MM} / {previewPaymentInfo.YY} </label>
            <br />
            <label>CVC: {previewPaymentInfo.CVC} </label>
            */}
            
        </div>
    );
}

export default PreviewCard