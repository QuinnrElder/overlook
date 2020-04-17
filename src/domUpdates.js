import $ from 'jQuery'

const domUpdates = {

  displayManagerPage(manager) {
    this.injectManagerHTML()
  },
 
  displayUserPage(user) {
    this.injectUserHTML()
  },

  injectManagerHTML() {
    $('.manager-page').html(`
    <section class="manager-navs">
        <p class="nav-title">The Hotel has:</p>
        <section class="nav-box">
          <p class="all-available-rooms-txt">Available Rooms</p>
          <p class="all-available-rooms">//</p>
        </section>
        <section class="nav-box">
          <p class="total-revenue-text">Total Revenue</p>
          <p class="total-revenue">//</p>
        </section>
        <section class="nav-box">
          <p class="available-percent-text">Available %</p>
          <p class="available-percent">//</p>
        </section>
      </section>
      <section class="main-manager-info">
        <p class="todays-date">//</p>
        <section class="manager-search-nav">
          <label class="search-nav-title">Customers Name?</label>
          <input class="input-name" type="text"></input>
          <input id="search-btn" type="submit">
        </section>
      </section>
    `)
  },

  injectUserHTML() {
    $('.user-page').html(`
    <section class="main-navs'>
      <p class="nav-title">As of Now...</p>
      <section class="nav-box'>
       <p class="my-bookings-text">My Bookings</p>
       <p class="my-bookings">//</p>
      </section>
      <section class="nav-box'>
        <p class="money-spent-text">Money Spent</p>
        <p class="money-spent">//</p>
      </section>
    </section>
    <p class="welcome-user">//</p>
    <section class="user-search-nav">
      <p class="search-nav-title">Check Room Availability</p>
      <input class="input-name" type="test"></input>
      <input id="search-btn" type="submit">
    </section>
    <section class="user-search-nav">
      <p class="search-nav-title">Filter By Room-Type</p>
      <input class="filter-input" type=""></input>
      <input id="search-btn" type="submit">
    </section>
    `)
  },

  flipCard(showCard, hideCard) {
    $(showCard).toggleClass('hide')
    $(hideCard).toggleClass('hide')
  },

}
export default domUpdates;