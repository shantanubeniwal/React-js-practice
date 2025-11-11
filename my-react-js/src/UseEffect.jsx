import React, { useState, useEffect, use } from "react";

// function UseEffect() {

//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState('green');

//     // re render the title everry time when we click the add button
//     // useEffect(() => {
//     //     document.title = `count: ${count}`
//     // });

//     // re render the title only one time when we click the add button
//     // useEffect(() => {
//     //     document.title = `count: ${count}`
//     // } , []);

//     // re render the title everry time when the count changes
//     // useEffect(() => {
//     //     document.title = `count: ${count}` // do this code only when the count changes
//     // } , [count]);


//     useEffect(() => {
//         document.title = `count: ${count} ${color}` // do this code when the count or color changes
//     } , [count , color]);
    
//     function addCount() {
//         setCount(c => c + 1);
//     }
//     function subtractCount() {
//         setCount(c => c - 1);
//     }
//     function changeColor() {
//         color == 'green' ? setColor('red') : setColor('green')
//         // document.getElementById('count').style.color = {color}
//     }

//     return (
//         <div>
//             <p id="color" style={{ color : color}}>Count: {count}</p>
//             <button onClick={addCount}>Add</button>
//             <button onClick={subtractCount}>Subtract</button><br />
//             <button onClick={changeColor}>Change color</button>
//         </div>
//     )
// }

function UseEffect() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         setHeight(window.innerWidth)
    //         setWidth(window.innerHeight)
    //     })
    //     console.log('event listener is added 1')
    // },[])


    useEffect(() => {
        window.addEventListener('resize', handleResize)
        console.log('event listener is added 1')

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log('event listener removed')
        }
    }, [])
    
    useEffect(() => {
        document.title = `size: ${width} X ${height}`
    }, [width , height])
    // console.log('event listener is added 2')


    function handleResize() {
        setHeight(window.innerWidth)
        setWidth(window.innerHeight)
    }

    return (
        <div>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    );
}

export default UseEffect