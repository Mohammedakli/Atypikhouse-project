import React,{useState} from 'react'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import PaymentForm from '../components/PaymentForm'

const PUBLIC_KEY="pk_test_51IUIaHEn6AdwJXWGa4lLjg7uBUzOhq20EwpHu4vDEloQKroXsuFLzA4Gt0XIXCU53Pqcvg7wr0kUZ1QqaveeZHiJ00X0H1mI7p"
const stripeTest = loadStripe(PUBLIC_KEY)
function StripeContainer() {
    return (
       <Elements stripe={stripeTest}>
            <PaymentForm/>

       </Elements>
        
    )
}

export default StripeContainer
