import "./App.scss";
import Reservation from "./component/Reservation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoomList from "./component/RoomList";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="rooms" element={<RoomList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
