import PropTypes from 'prop-types';

function UserGreeting({ userName = "Guest", isloggedIn = false }) {
    
    // -----------Method 1----------
    // if (isloggedIn) {
    //     return (
    //         <h2 className="welcomeMessage">Welcome {userName }</h2>
    //     );
    // }
    // else {
    //     return (
    //         <h2 className="loginPromt">Please log in to continue</h2>
    //     );
    // }

    // -----------Method 2----------
    // return (isloggedIn ? <h2 className="welcomeMessage">Welcome {userName }</h2> : <h2 className="loginPromt">Please log in to continue</h2>);

    // -----------Method 3----------
    const welcomeMessage = <h2 className="welcomeMessage">Welcome {userName}</h2>
    const loginPromt = <h2 className="loginPromt">Please log in to continue</h2> 
    return (isloggedIn ? welcomeMessage : loginPromt);

}
UserGreeting.propTypes = {
    userName: PropTypes.string,
    isloggedIn: PropTypes.bool,
};
export default UserGreeting