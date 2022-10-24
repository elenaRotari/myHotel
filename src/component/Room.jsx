export default function Room({ room }) {
  const reverse = (str) => {
    return str.split("-").reverse().join(".");
  };
  return (
    <div className="roomsItem">
      <h2>{room.roomNo}</h2>
      <ul className="firstLastName">
        <li>{room.guest.firstName}</li>
        <li>{room.guest.lastName}</li>
      </ul>
      <p>{reverse(room.checkIn)}</p>
      <p>{reverse(room.checkOut)}</p>
      <button onClick={checkIn && checkOut}>Click me </button>
    </div>
  );
}
