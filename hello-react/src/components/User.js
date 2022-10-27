import PropTypes from 'prop-types';

export default function User(props) {
   
    if (!props.isLoggedIn) {
        return <h1>Not Logged In</h1>
    }
    return (  
    <div>
      <ul>
        <li>Name: {props.name}</li>
        <li>Surname: {props.surname}</li>
        <li>Age: {props.age}</li>
        <li>{props.isLoggedIn ? `Login successfully` : "unsuccessfully"}</li>
        {props.friends.map((friend) => (
            <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array.isRequired,
};

User.defaultProps = {
    name: "John",
    surname: "Doe",
    age: 18,
    isLoggedIn: false,
    friends: [],
};

