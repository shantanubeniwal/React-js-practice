// ---------------------------------1--------------------------

// function List() {
//     // Array of strings
//     // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
//     // fruits.sort()
//     // const listItems = fruits.map(fruits => <li>{fruits}</li>)
//     // return (
//     //     <ol>{listItems}</ol>
//     // )
    
//     // Array of objects
//     // const fruits = [{id: 1, name: "apple", clories: 95},
//     //     {id: 2, name: "orange", clories: 45},
//     //     {id: 3, name: "banana", clories: 105},
//     //     {id: 4, name: "coconut", clories: 159},
//     //     {id: 5, name: "pineapple", clories: 37}];
        
//     // fruits.sort((a, b) => a.name.localeCompare(b.name)) // ALPHABATICAL
//     // fruits.sort((a, b) => b.name.localeCompare(a.name)) // REVERSED ALPHABATICAL
//     // fruits.sort((a, b) => a.clories - b.clories) // NUMERIC
//     // fruits.sort((a, b) => b.clories - a.clories) // REVERSE NUMERIC
    
//     // const listItems = fruits.map(fruits => <li key={fruits.name}>{fruits.name}: &nbsp; <b>{fruits.clories}</b></li>)


//     // const lowCalFruits = fruits.filter(x => x.clories < 100)
//     // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.name}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.clories}</b></li>)


//     // const highCalFruits = fruits.filter(x => x.clories >= 100)
//     // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.name}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.clories}</b></li>)

//     // const listItems = fruits.map(fruits => <li key={fruits.id}>{fruits.name} &nbsp; <b>{fruits.clories}</b></li>)
//     // return (
//     //         <ol>{listItems}</ol>
//     // )

// }

// export default List

// ---------------------------------2--------------------------
// this is for any list passed 

function List({items = [], category = "category"}) {

    const type = category;
    const itemList = items;

    const listItems = itemList.map(item => <li key={item.id}>{item.name} &nbsp; <b>{item.clories}</b></li>)

    return (
        <>
            <h1 className="list-category">{type}</h1>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

export default List