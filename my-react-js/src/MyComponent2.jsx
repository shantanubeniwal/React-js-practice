import React, {useState} from "react"

function MyComponent2() {

    const [name, setName] = useState("guest")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState()
    const [payment, setPayment] = useState("visa")
    const [shipping, setShipping] = useState("Delivery")

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }
    function handleCommentChange(e) {
        setComment(e.target.value)
    }
    function handlePaymentChange(e) {
        setPayment(e.target.value)
    }
    function handleShippingChange(e) {
        setShipping(e.target.value)
    }
    return (
        <>
            <div>
                <input type="text" value={name} onChange={handleNameChange} />
                <p>Name: {name}</p>

                <input type="number" value={quantity} onChange={handleQuantityChange} min={1}/>
                <p>quantity: {quantity}</p>
                
                <textarea value={comment} onChange={handleCommentChange}></textarea>
                <p>comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="visa">visa</option>
                    <option value="UPI">UPI</option>
                    <option value="debit card">debit card</option>
                </select>
                <p>payment method: {payment}</p>

                {/* <h2>Gender</h2>
                <input type="radio" name="gender" value="Male" id="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" value="Female" id="female" />
                <label for="female">Female</label> */}

                <label for="pickup">
                    <input type="radio" name="shipping" id="pickup" value="Pick up" onChange={handleShippingChange} checked={shipping === "Pick up"} />
                    Pick up
                </label><br />
                <label for="delivery">
                    <input type="radio" name="shipping" id="delivery" value="Delivery" onChange={handleShippingChange} checked={shipping === "Delivery"}/>
                    Delivery
                </label>
                <p>Delevery method: {shipping}</p>
            </div>
        </>
    )
}

export default MyComponent2