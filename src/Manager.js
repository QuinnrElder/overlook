class Manager {
  constructor(manager, usersData, bookings, hotel) {
    this.id = manager
    this.users = usersData;
    this.bookings = bookings.allBookings
    this.rooms = hotel.allRooms;
  }
}
export default Manager;