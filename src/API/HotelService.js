import axios from "axios";

export default class HotelService {
  static async getAll() {
    try {
      const apiURL = "";
      const response = await axios.get(apiURL);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async deleteHotel(id) {
    await axios.delete(`/hotels/` + id);
  }

  static async updateHotel(editedHotel) {
    const body = {
      id: editedHotel.d,
      name: editedHotel.name,
      lat: editedHotel.lat,
      lon: editedHotel.lon,
    };
    await axios.put(`/hotels`, body);
  }

  static async createHotel(newHotel) {
    const body = {
      id: newHotel.d,
      name: newHotel.name,
      lat: newHotel.lat,
      lon: newHotel.lon,
    };
    await axios.post(`/hotels`, body).then((response) => {
      console.log(response.data);
    });
  }
}
