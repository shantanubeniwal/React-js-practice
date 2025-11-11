import React, {use, useState} from "react"

function MyComponent() {

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployed , setisEmployed] = useState(false)
    
    const updateName = () => {
        setName("shantanu")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setisEmployed(!isEmployed)
    }
    
    
    
    return (
        <>
            <div>
                <p>Name: { name}</p>
                <button onClick={updateName}>Set name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment</button>

                <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
                <button onClick={toggleEmployedStatus}>Toggle status</button>
        </div>
        </>
    );
}

export default MyComponent