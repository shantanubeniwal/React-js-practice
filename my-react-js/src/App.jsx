// import Header from './Header.jsx'
// import Footer from './Footer.jsx';
// import Food from './Food.jsx';

// import Card from './Card.jsx';

// import Button from "./Button";

// import Student from "./Student";

// import UserGreeting  from "./UserGreeting";

// import List from "./List";

// import Button2 from "./Button2";

// import MyComponent from "./myComponent";
// import Counter from "./Counter";

// import MyComponent2 from "./MyComponent2";

// import ColorPicker from "./ColorPicker";

// import Car from "./Car";

// import ArrayUpdater from "./ArrayUpdater";

// import ArrayObjectUpdater from "./ArrayObjectUpdater";

// import ToDoList from "./ToDoList";

// import UseEffect from "./UseEffect";

import DigitalClock from "./DigitalClock";

function App() {

  // for part -- 6
  const fruits = [{id: 1, name: "apple", clories: 95},
        {id: 2, name: "orange", clories: 45},
        {id: 3, name: "banana", clories: 105},
        {id: 4, name: "coconut", clories: 159},
        {id: 5, name: "pineapple", clories: 37 }];
  
  const vegetables = [{id: 6, name: "potatoes", clories: 110},
        {id: 7, name: "celery", clories: 15},
        {id: 8, name: "carrots", clories: 25},
        {id: 9, name: "corn", clories: 63},
        { id: 10, name: "broccoli", clories: 50 }];
  
  
  return (
    <>
      {/* part -- 1 */}
      {/* <Header></Header>
      <Food></Food>
      <Footer></Footer> */}

      {/* part -- 2 */}
      {/* <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card> */}

      {/* part -- 3 */}
      {/* <Button></Button> */}

      {/* part -- 4 */}
      {/* <Student name="Shantanu Beniwal" age={21} isStudent={true}></Student>
      <Student name="Happy" age={40} isStudent={false}></Student>
      <Student name="Rahul" age="4" isStudent={false}></Student>
      <Student name="Ratnesh" age={22} isStudent={true}></Student>
      <Student></Student> */}

      {/* part -- 5 */}
      {/* <UserGreeting isloggedIn={true} userName="Shantanu Beniwal"></UserGreeting>
      <UserGreeting isloggedIn={false} userName="Shantanu Beniwal"></UserGreeting> */}

      {/* part -- 6 */}
      {/* <List></List> */}
      {/* {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="vegetables"></List> : null} */}

      {/* part -- 7 */}
      {/* <Button2></Button2> */}

      {/* part -- 8 */}
      {/* <MyComponent></MyComponent> */}
      {/* <Counter></Counter> */}

      {/* part -- 9 */}
      {/* <MyComponent2></MyComponent2> */}

      {/* part -- 10 */}
      {/* <ColorPicker></ColorPicker> */}

      {/* part -- 12 */}
      {/* <Car></Car> */}

      {/* part -- 13 */}
      {/* <ArrayUpdater></ArrayUpdater> */}

      {/* part -- 14 */}
      {/* <ArrayObjectUpdater></ArrayObjectUpdater> */}

      {/* part -- 15 */}
      {/* <ToDoList></ToDoList> */}

      {/* part -- 16*/}
      {/* <UseEffect></UseEffect> */}

      {/* part -- 17*/}
      <DigitalClock></DigitalClock>
    </>
  );  
}

export default App