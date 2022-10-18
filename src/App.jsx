import "./App.scss";
import rooms from "./rooms.json";
import Room from "./component/Room";

function App() {
  return (
    <div className="App">
      <h1 className="header">Unsere {rooms.length} Rooms</h1>
      <div className="rooms">
        {rooms
          .sort((a, b) => a.roomNo - b.roomNo)
          .map((roomItem, index) => {
            return <Room key={index} room={roomItem} />;
          })}
      </div>
    </div>
  );
}

export default App;
