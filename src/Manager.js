class Manager {
  constructor(manager, usersData, hotel, date) {
    this.id = manager
    this.users = usersData;
    this.bookings = hotel.hotelBookings;
    this.rooms = hotel.allRooms;
    this.date = this.getDateSyntax(date)
    this.numberOfRoomsAvailable = this.findNumberOfRoomsAvailable();
    this.percentageOfRoomsAvailable = this.findPercentOfAvailableRooms();
    this.todaysTotalRevenue = this.getTotalRevenue();
  }

  getDateSyntax(date) {
    let dateArray = date.split('/');
    let day = dateArray[1];
    let month = dateArray[0];
    let year = dateArray[2];
    if (month <= 9) {
      let unformattedDate = `${year}/0${month}/${day}`;
      return unformattedDate
    } else {
      let unformattedDate = `${year}/${month}/${day}`;
      return unformattedDate
    }
  }

  findNumberOfRoomsAvailable() {
    let matchingBookings = this.bookings.allBookings.filter(booking => booking.date === this.date)
    return (this.rooms.length - matchingBookings.length)
  }

  findPercentOfAvailableRooms() {
    return `${(this.numberOfRoomsAvailable / this.rooms.length) * 100}`
  }

  getTotalRevenue() {
    let matchingBookings = this.bookings.allBookings.filter(booking => booking.date === this.date);
    let profits = matchingBookings.reduce((acc, match) => {
      this.rooms.forEach(room => {
        if (room.number === match.roomNumber) {
          acc = room.costPerNight + acc
        }
      })
      return acc
    }, 0)
    return profits
  }
}
export default Manager;