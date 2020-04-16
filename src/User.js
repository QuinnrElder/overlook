class User {
  constructor(data, bookingsData) {
    this.id = data.id;
    this.name = data.name;
    this.myBookings = this.findMyBookings(data, bookingsData)
  }
  findMyBookings(data, bookingsData) {
    // this will give this.myBookings
    // an array of that users bookings.
  }
}
export default User;