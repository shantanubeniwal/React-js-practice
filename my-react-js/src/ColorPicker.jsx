import React, { useState } from 'react'

function ColorPicker() {

    const [color , setColor] = useState("#ffffff")
    function handelColorChange(e) {
        setColor(e.target.value)
    }

    return (
        
        <div className="color-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
            </div>
            <p>selected color: {color}</p>
            <input type="color" value={color} onChange={handelColorChange} />
            <label>select color</label>
        </div>
    )
}

export default ColorPicker

// updater function => setCount(c => c + 1)