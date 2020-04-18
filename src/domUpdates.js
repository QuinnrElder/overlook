import $ from 'jQuery'

const domUpdates = {

  displayManagerPage(manager, usersRepo, bookings, hotel, date) {
    this.injectManagerHTML()
    this.displayManagerInfo(manager, usersRepo, bookings, hotel, date)
  },

  displayUserPage(user, usersRepo, bookings, hotel, date) {
    this.injectUserHTML()
    this.displayUserInfo(user, usersRepo, bookings, hotel, date)
  },

  injectManagerHTML() {
    $('.manager-page').html(`
      <section class="main-manager-info">
        <p class="todays-date">//</p>
        <section class="manager-search-nav">
          <label class="search-nav-title">Search Customers Name</label>
          <input class="input-name" type="text"></input>
          <input class="search-user" id="search-btn" type="submit">
        </section>
        <section class="manager-navs">
        <section class="nav-box">
          <p class="all-available-rooms-txt">Available Rooms:</p>
          <p class="all-available-rooms">//</p>
        </section>
        <section class="nav-box">
          <p class="total-revenue-text">Total Revenue:</p>
          <p class="total-revenue">//</p>
        </section>
        <section class="nav-box">
          <p class="available-percent-text">Percent of Rooms available:</p>
          <p class="available-percent">//</p>
        </section>
      </section>
      </section>
    `)
  },

  injectUserHTML() {
    $('.user-page').html(`
    <section class="bookings-container">
      <section class="bookings-box">
        <p class="my-bookings-text">My Bookings</p>
      <section class="my-bookings"></section>
      </section>
      <section class="nav-box">
        <p class=" money-spent-text">Money Spent</p>
        <section class="money-spent">//</section>
      </section>
      </section>
      <section class="main-user-info">
        <p class="welcome-user">//</p>
        <section class="user-search-nav">
          <label class="search-nav-title">Check Room Availability</label>
          <input class="input-name" type="test"></input>
          <input id="search-btn" type="submit">
        </section>
        <section class="user-search-nav">
          <label class="search-nav-title">Filter By Room-Type</label>
          <input class="filter-input" type=""></input>
          <input id="search-btn" type="submit">
        </section>
    `)
  },

  displayManagerInfo(manager, users, bookings, hotel, date) {
    $('.todays-date').text(date)
    // $('.total-revinue').text()
    // $('.available-percent')
  },

  displayUserInfo(user, users, bookings, hotel, date) {
    this.displayBookings(user)
    $('.welcome-user').text(`Welcome ${user.name}`)
  },

  flipCard(showCard, hideCard) {
    $(showCard).toggleClass('hide')
    $(hideCard).toggleClass('hide')
  },

  // displayBookings(user) {
  //   for (let i = 0; i < user.myBookings.length; i++) {
  //     $('.my-bookings').html(`<p>${user.myBookings[i].id}</p>`)
  //   }
  // },

  injectManagerSideUserHTML() {
    $('.user-page').html(`
    <section class="bookings-container">
        <section class="bookings-box">
          <p class="my-bookings-text">My Bookings</p>
          <section class="my-bookings"></section>
        </section>
        <section class="nav-box">
          <p class=" money-spent-text">Money Spent</p>
          <section class="money-spent">//</section>
        </section>
      </section>
      <section class="manager-user-info">
        <p class="welcome-user">//</p>
        <section class="add-booking-nav">
          <legend class="add-booking-title">Add a Booking:</legend>
          <div class="add-booking-container">
            <label class="add-booking-label" for="input-userID">Enter Your Id:</label>
            <input class="input-id" type="test" name="input-userID"></input>
            <label class="add-booking-label" for="input-date">Enter The Date:</label>
            <input class="input-date" type="test" name="input-date"></input>
            <label class="add-booking-label" for="input-roomNumber">Enter RoomNumber:</label>
            <input class="input-roomNumber" type="test" name="input-roomNumber"></input>
            <input class="add-booking-btn" type="submit">
          </div>
        </section>
        <section class="delete-booking-nav">
          <label class="delete-booking-title">Delete a Booking:</label>
          <input class="delete-booking-input" type=""></input>
          <input class="delete-booking-btn" type="submit">
        </section>
    `)
  },
}
export default domUpdates;