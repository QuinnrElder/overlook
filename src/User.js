class User {
  constructor(user, hotel, date) {
    this.id = user.id;
    this.name = user.name;
    this.date = date;
    this.myBookings = hotel.hotelBookings.allBookings.filter(booking => booking.userID === user.id);
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

  postBooking(room, dates) {
    let roomNumbers = parseInt(room)
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: this.id,
        date: dates,
        roomNumber: roomNumbers
      })
    })
      .then(response => response.json())
      .then(data => console.log('success', data))
      .catch(err => console.error(err))
  }
}
export default User;