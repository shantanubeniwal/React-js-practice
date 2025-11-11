import PropTypes from 'prop-types';

// Use default parameters directly in the function signature
function Student({ name = "Guest", age = 0, isStudent = false }) {

    const styles = {
        border: "2px solid hsla(0, 0%, 0%, 0.70)",
        fontFamily: "Arial",
        margin:"5px",
    };

    return (
        <div style={styles}>
            {/* Use the variables directly, not props.name */}
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "yes" : "no"}</p>
        </div>
    );
}

// propTypes are still fine to use like this
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

// We no longer need this block for functional components
/*
Student.defaultProps = {
    name: "hi",
    age: 0,
    isStudent: false,
}
*/

export default Student; // Added export for completeness