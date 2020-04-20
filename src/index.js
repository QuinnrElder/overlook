import './css/base.scss';
// import './css/styles.scss';
import $ from 'jQuery';
import Booking from './Booking';
import Bookings from './Bookings'
import domUpdates from './domUpdates';
import Hotel from './Hotel';
import loginMethod from './loginMethod';
import Manager from './Manager';
import Room from './Room';
import User from './User';
import UsersRepo from './UsersRepo';

import './images/login-background.jpg'

let bookings;
let date = new Date().toLocaleDateString();
let hotel;
let usersRepo;

// THIS IS FOR THE EVENT ON THE LOGIN SCREEN BUTTON //
$('#login-btn').on('click', function () {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(promise => promise.json())
    .then(data => windowHandler(data.users))
    .catch(err => console.error(err))
})

function windowHandler(apiUsers) {
  const username = $('#login-username-input').val();
  const password = $('#password-login-input').val();
  if (username === "manager" && password === "overlook2020") {
    const newManager = 'manager';
    getNeededData(newManager, apiUsers)
  } else {
    let ourUser = loginMethod.checkUserNameAndPassword(apiUsers, username, password)
    getNeededData(ourUser, apiUsers)
  }
}

// AFTER LOGIN IS VERIFIED FETCHES FOR NEEDED API DATA //
function getNeededData(newPerson, apiUsers) {
  Promise.all([
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json()),
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json()),
  ]).then(data => reassignData(data[0].rooms, data[1].bookings, newPerson, apiUsers))
}

function reassignData(apiRooms, apiBookings, newPerson, apiUsers) {
  reAssignBookings(apiBookings)
  reAssignRooms(apiRooms, bookings);
  reAssignUsers(apiUsers)
  const currentUser = reAssignUser(newPerson)
  if (currentUser.id === 'manager') {
    domUpdates.flipCard($('.manager-page'), $('.login-container'))
    domUpdates.displayManagerPage(currentUser, usersRepo, bookings, hotel, date)
  } else {
    domUpdates.flipCard($('.user-page'), $('.login-container'))
    domUpdates.displayUserPage(currentUser, usersRepo, bookings, hotel, date)
  }
}


function reAssignBookings(apiBookings) {
  let newBookings = apiBookings.map(apiBooking => {
    let booking = new Booking(apiBooking)
    return booking
  })
  bookings = new Bookings(newBookings)
  return bookings
}

function reAssignRooms(apiRooms) {
  let newRooms = apiRooms.map(apiRoom => {
    let room = new Room(apiRoom)
    return room
  })
  hotel = new Hotel(bookings, newRooms)
  return hotel
}

function reAssignUsers(apiUsers) {
  let newUsers = apiUsers.map(data => {
    let user = new User(data, hotel, date)
    return user
  })
  usersRepo = new UsersRepo(newUsers)
  return usersRepo
}

function reAssignUser(newPerson) {
  if (newPerson === 'manager') {
    let manager = new Manager(newPerson, usersRepo, hotel, date)
    return manager
  } else {
    let user = new User(newPerson, hotel, date)
    return user
  }
}



$('.search-rooms').click(function (event) {
  console.log(event.target)
  let date = $('.input-name').val()
  let filterType = $('.filter-input').val()
  const availableRooms = bookings.findingRoomsAvailableToday(date, hotel, filterType)
  if (availableRooms.length === 0) {
    alert(`WE FIERCELY APOLOGIZE BUT THERE ARE NO ROOMS AVAILABLE FOR THAT DATE!
       Please choose another date!!`)
  }
})