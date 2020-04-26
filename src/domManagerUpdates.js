import $ from 'jQuery'

const domManagerUpdates = {

  displayManagerPage(manager, usersRepo, bookings, hotel, date) {
    this.displayManagerInfo(manager, usersRepo, bookings, hotel, date)
  },

  // user-pop-up-window is hidden
  // injectManagerSideUserWindowHTML() {
  //   $('user-pop-up-window').html(`
  //   <section class="bookings-container">
  //       <section class="bookings-box">
  //         <p class="my-bookings-text">My Bookings</p>
  //         <section class="my-bookings"></section>
  //       </section>
  //       <section class="nav-box">
  //         <p class=" money-spent-text">Money Spent</p>
  //         <section class="money-spent">//</section>
  //       </section>
  //     </section>
  //     <section class="manager-user-info">
  //       <p class="welcome-user">//</p>
  //       <section class="add-booking-nav">
  //         <legend class="add-booking-title">Add a Booking:</legend>
  //         <div class="add-booking-container">
  //           <label class="add-booking-label" for="input-userID">Enter Your Id:</label>
  //           <input class="input-id" type="text" name="input-userID" aria-label=""></input>
  //           <label class="add-booking-label" for="input-date">Enter The Date:</label>
  //           <input class="input-date" type="text" name="input-date" aria-label=""></input>
  //           <label class="add-booking-label" for="input-roomNumber">Enter RoomNumber:</label>
  //           <input class="input-roomNumber" type="text" name="input-roomNumber" aria-label="search-by-date"></input>
  //           <input class="add-booking-btn" type="submit">
  //         </div>
  //       </section>
  //       <section class="delete-booking-nav">
  //         <label class="delete-booking-title">Delete a Booking:</label>
  //         <input class="delete-booking-input" type="text" aria-label="search-by-date"></input>
  //         <input class="delete-booking-btn" type="submit">
  //       </section>
  //   `)
  // },

  displayManagerInfo(manager, users, bookings, hotel, date) {
    $('.todays-date').text(date)
    $('.all-available-rooms').text(`${manager.numberOfRoomsAvailable}`)
    $('.available-percent').text(`${manager.percentageOfRoomsAvailable}%`)
    $('.total-revenue').text(`$${manager.todaysTotalRevenue}`)
  },

  // displayAllBookings(user) {
  //   return user.myBookings.map(booking => {
  //     $('.my-bookings').append(`
  //   <section class="singleBooking">
  //   <p class="booking-info">${this.refactorDates(booking)}</p>
  //   <p class="booking-info">${booking.roomNumber}</p>
  //   <p class="booking-info">${booking.id}</p>
  //   </section>`)
  //   })
  // },

  // displayAvailableRoomsInfo(availableRooms) {
  //   return availableRooms.map(room => {
  //     $('.my-bookings').append(`
  //   <section class="singleBooking">
  //   <p class="booking-info">Room Number: ${room.number}</p>
  //   <p class="booking-info">Room Type: ${room.roomType}</p>
  //   <p class="booking-info">Has Bidet: ${room.bidet}</p>
  //   <p class="booking-info">Bed Size: ${room.bedSize}</p>
  //   <p class="booking-info">Number Of Beds: ${room.numBeds}</p>
  //   <p class="booking-info">Cost Per Night: ${room.costPerNight}</p>
  //   </section>`)
  //   })
  // },

  // refactorDates(booking) {
  //   let dateArray = booking.date.split('/');
  //   let month = dateArray[1];
  //   let year = dateArray[0];
  //   let day = dateArray[2];
  //   if (month <= 9) {
  //     let unformattedDate = `${month}/${day}/${year}`;
  //     return unformattedDate
  //   } else {
  //     let unformattedDate = `${month}/${day}/${year}`;
  //     return unformattedDate
  //   }
  // },

  flipCard(showCard, hideCard) {
    $(showCard).toggleClass('hide')
    $(hideCard).toggleClass('hide')
  },

}
export default domManagerUpdates;