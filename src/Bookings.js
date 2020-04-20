class Bookings {
  constructor(bookings) {
    this.allBookings = bookings
  }

  findingRoomsAvailableToday(today, hotel, filterType) {
    console.log(today)
    console.log(hotel)
    console.log(filterType)
    if (filterType === 'none') {
      let bookingNums = this.getAllRoomNumbersBookedToday(today)
      let availableRooms = this.findAvailableRoomNumbers(bookingNums, hotel)
      return availableRooms
    } else {
      let bookingNums = this.getAllRoomNumbersBookedToday(today)
      let availableRooms = this.findAvailableRoomNumbers(bookingNums, hotel)
      let displayFilteredRoomType = this.findFilteredRoomType(availableRooms, filterType)
      return displayFilteredRoomType
    }
  }

  getAllRoomNumbersBookedToday(today) {
    let booked = []
    this.allBookings.forEach(booking => {
      if (booking.date === today) {
        booked.push(booking.roomNumber)
      }
    })
    return booked
  }

  findAvailableRoomNumbers(bookingNums, hotel) {
    let newHotel = hotel.allRooms
    bookingNums.forEach(booking => {
      newHotel.forEach(room => {
        if (room.number === booking) {
          const value = newHotel.indexOf(room)
          newHotel.splice(value, 1)
        }
      })
    })
    return newHotel
  }

  findFilteredRoomType(availableRooms, filterType) {
    let filtered = []
    availableRooms.forEach(room => {
      if (room.roomType === filterType) {
        filtered.push(room)
        return filtered
      }
    })
    return filtered
  }
}
export default Bookings;