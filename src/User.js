class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.myBookings = this.findMyBookings(data)
  }
  findMyBookings(data) {
    // this will give this.myBookings
    // an array of that users bookings.
  }
}
export default User;