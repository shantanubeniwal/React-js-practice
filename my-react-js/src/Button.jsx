// import styles from './Button.module.css'   ----> used for modules

function Button() {
    
    const styles = {
        background: "lightblue",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        margin: "5px",
        cursor: "pointer",
    }

    
    return (
        // <button className={styles.button}>Click Me</button>     ----> used for modules
        <button style={styles}>Click Me</button>
    );
}

export default Button