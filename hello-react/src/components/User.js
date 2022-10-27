export default function User(props) {
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
