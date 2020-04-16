class User {
  constructor(data, bookingsData) {
    this.id = data.id;
    this.name = data.name;
    this.myBookings = bookingsData.allBookings.filter(booking => booking.userID === data.id);
  }
}
export default User;