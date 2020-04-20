class User {
  constructor(data, bookingsData, date, hotel) {
    this.id = data.id;
    this.name = data.name;
    this.date = date;
    this.myBookings = bookingsData.allBookings.filter(booking => booking.userID === data.id);
    this.listOfRoomsStayedIn = this.findMyRooms(hotel.allRooms);
    this.totalMoneySpent = this.getTotalSpent()
  }

  findMyRooms(hotel) {
    let myRooms = hotel.reduce((acc, room) => {
      this.myBookings.forEach(booking => {
        if (booking.roomNumber === room.number) {
          acc.push(room)
        }
      })
      return acc
    }, [])
    return myRooms
  }

  getTotalSpent() {
    let number = this.listOfRoomsStayedIn.reduce((acc, room) => {
      acc += room.costPerNight
      return acc
    }, 0)
    return number.toFixed(2)
  }
}
export default User;