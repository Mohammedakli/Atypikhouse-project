import React, { useState, useEffect } from 'react'
import {CardElement, useElements , useStripe} from '@stripe/react-stripe-js'
import axios from 'axios'
import { useLocation, useParams } from "react-router"
import {Image} from 'cloudinary-react';
import {useHistory } from "react-router-dom";



const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}
function PaymentForm() {
    const history = useHistory();

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const element = useElements();
    const [postDetails, setPosts]= useState([]);
    const {id} =useParams();
    const location = useLocation()
    useEffect( async () => {
        await axios.get(`http://localhost:5001/api/post/${id}`).then(res=>setPosts(res.data)).catch(err=>console.log(err));
    }, [id]);
    console.log(postDetails)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type: "card",
            card: element.getElement(CardElement)
        })
    
        try{
            const {id} = paymentMethod
            await axios.post("http://localhost:5001/api/post/payment/",{
                amount : postDetails.prix,
                id
            }).then(res=> {
                console.log(res.data.success)
                if(res.data.success){
                    console.log("Successful payment");                
                    setSuccess(true);
                }
                
                axios.patch(`http://localhost:5001/api/post/reserve-habitat/${id}`).then(history.push("/explore"))
                
            })
            
        }catch(error){
            console.log("Error", error)
        }
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                 <Image alt="Opt alp thumbnail" cloudName='saleh-fakhir' publicId={postDetails.picture}/>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement ptions={CARD_OPTIONS}/>
                    </div>
                </fieldset>
               
                <h1>{postDetails.prix}$</h1>
                <button>payer</button>

            </form>  
        </div>
    )
}

export default PaymentForm
