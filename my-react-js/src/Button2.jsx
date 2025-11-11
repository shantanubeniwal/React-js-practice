function Button2() {

    // const handleClick = () => {
    //     console.log("ouch!")
    // }
    // return (
    //     <button onClick={handleClick}>Click me</button>
    // );

    // const handleClick2 = (name) => {
    //     console.log(`${name} stop clicking`)
    // }
    // return (
    //     <button onClick={() => handleClick2("shantanu")}>Click me</button>
    // );

    // let count = 0;
    // const handleClick3 = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked ${count} time/s`);
    //     }
    //     else {
    //         console.log(`${name} stop clicking me`)
    //     }
    // }
    // return (
    //     <button onClick={() => handleClick3("shantanu")}>Click me</button>
    // );


    // const handleClick4 = (e) => {
    //     console.log(e)
    // }
    // return (
    //     <button onClick={(e) => handleClick4(e)}>Click me</button>
    // );


    // const handleClick5 = (e) => {
    //     e.target.textContent = "ouch!"
    // }
    // return (
    //     <button onDoubleClick={(e) => handleClick5(e)}>Click me</button>
    // );

    const imgUrl = "https://placehold.co/100x100/005a9c/ffffff?";
    let height = 100
    let width = 100
    const handleClick5 = (e) => {
        // e.target.style.display = "none"

        e.target.style.height = `${height}` + `px`
        e.target.style.width = `${width}` + `px`
        height = height - 5;
        width = width - 5;
    }
    return (
        <img onClick={handleClick5} src={imgUrl} alt="profile picture" />
    );
}

export default Button2