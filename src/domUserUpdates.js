import $ from 'jQuery'

const domUserUpdates = {

  displayUserPage(user) {
    this.displayUserInfo(user)
  },

  injectUserSidePopUpHTML() {
    $('.pop-up-container').html(`
    <section class="available-room-nav">
          <legend class="add-booking-title">Available Rooms</legend>
          <div class="available-room-container">
            
          </div>
        </section>
    `)
  },

  displayUserInfo(user) {
    $('.welcome-user').text(`${user.name}`)
    $('.money-spent').text(`$${user.totalMoneySpent}`)
    $('.welcome-user').text(`Welcome ${user.name}`)
    this.displayAllBookings(user)
  },

  displayAllBookings(user) {
    return user.myBookings.map(booking => {
      $('.my-bookings').append(`
    <section class="singleBooking">
    <p class="booking-info">${this.refactorDates(booking)}</p>
    <p class="booking-info">${booking.roomNumber}</p>
    <p class="booking-info">${booking.id}</p>
    </section>`)
    })
  },

  refactorDates(booking) {
    let dateArray = booking.date.split('/');
    let month = dateArray[1];
    let year = dateArray[0];
    let day = dateArray[2];
    if (month <= 9) {
      let unformattedDate = `${month}/${day}/${year}`;
      return unformattedDate
    } else {
      let unformattedDate = `${month}/${day}/${year}`;
      return unformattedDate
    }
  },

  displayAvailableRoomsInfo(availableRooms) {
    return availableRooms.map(room => {
      $('.pop-up-container').append(`
        <section class="singleBooking">
        <p class="booking-info">Room Number: ${room.number}</p>
        <p class="booking-info">Room Type: ${room.roomType}</p>
        <p class="booking-info">Has Bidet: ${room.bidet}</p>
        <p class="booking-info">Bed Size: ${room.bedSize}</p>
        <p class="booking-info">Number Of Beds: ${room.numBeds}</p>
        <p class="booking-info">Cost Per Night: ${room.costPerNight}</p>
        </section>`)
    })
  },

  flipCard(showCard, hideCard) {
    $(showCard).toggleClass('hide')
    $(hideCard).toggleClass('hide')
  },

}
export default domUserUpdates;