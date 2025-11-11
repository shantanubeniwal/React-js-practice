import React,{useState} from "react"

function ArrayUpdater() {
    const [foods , setFood] = useState(["Apple" , "Banana", "Orange"])

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value  //get input value

        setFood(f => [...f, newFood]) //add food to list
        
        document.getElementById("foodInput").value = ""  // after adding reset the input element
    }
    function handleRemoveFood(index) {
        setFood(foods.filter((_,i) => i!==index))
    }

    return (
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={()=> handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add food</button>
        </div>
    )
}

export default ArrayUpdater