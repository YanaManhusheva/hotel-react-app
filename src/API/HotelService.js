import axios from "axios";

export default class HotelService {
  static async getAll() {
    try {
      const apiURL = "/hotels";
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
      id: editedHotel.id,
      name: editedHotel.name,
      latitude: editedHotel.lat,
      longitude: editedHotel.lon,
    };
    await axios.put(`/hotels`, body);
  }

  static async createHotel(newHotel) {
    const body = {
      id: newHotel.d,
      name: newHotel.name,
      latitude: newHotel.lat,
      longitude: newHotel.lon,
    };
    await axios.post(`/hotels`, body).then((response) => {
      console.log(response.data);
    });
  }
}
