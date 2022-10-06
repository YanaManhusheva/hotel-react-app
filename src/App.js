import { useEffect, useState } from "react";
import "./App.css";
import HotelList from "./HotelList";
import AddForm from "./AddForm";
import axios from "axios";
import HotelService from "./API/HotelService";

function App() {
  const [hotels, setHotels] = useState([
    { id: 0, name: "Готель 'Салют'", lat: 50, lon: 80 },
    { id: 1, name: "Готель 'Салют 1'", lat: 50, lon: 80 },
    { id: 2, name: "Готель 'Салют 2'", lat: 50, lon: 80 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [edited, setEdited] = useState({});

  function addHotel(newHotel) {
    const id = HotelService.createHotel(newHotel);
    newHotel.id = id;
    setHotels([...hotels, newHotel]);
  }
  function removeHotel(removedHotel) {
    setHotels(hotels.filter((p) => p.id !== removedHotel.id));
    HotelService.deleteHotel(removeHotel.id);
  }
  function addNewHotel() {
    setShowForm(!showForm);
  }
  function editHotel(editedHotel) {
    let newArr = [];
    hotels.map((hotel) => {
      if (hotel.id === editedHotel.id) {
        hotel.name = editedHotel.name;
        hotel.lat = editedHotel.lat;
        hotel.lon = editedHotel.lon;
      }
      newArr.push(hotel);
    });
    /* newArr.map((hotel) => {
      if (hotel.id === editedHotel.id) {
        newArr[hotel.id] = {
          id: editedHotel.id,
          name: editedHotel.name,
          lat: editedHotel.lat,
          lon: editedHotel.lon,
        };
      }
    });*/

    setHotels([...newArr]);
    HotelService.updateHotel(editedHotel);
  }

  /*useEffect(() => {
    getApi();
  }, []);
  async function getApi() {
    const response = await HotelService.getAll();
    setHotels(response);
  }*/

  return (
    <div className="App">
      <div className="App__inner">
        <h1 className="list-title">Hotels available</h1>
        <HotelList hotels={hotels} remove={removeHotel} edit={editHotel} />
        <button className="hotel-btn addHotel-btn" onClick={addNewHotel}>
          Add new
        </button>

        {showForm && (
          <AddForm
            add={addHotel}
            edited={edited}
            setShowForm={setShowForm}
            showForm={showForm}
          />
        )}
      </div>
    </div>
  );
}

export default App;
