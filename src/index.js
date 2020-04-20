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
let hotel = new Hotel()
let manager
let room;
let user;
let usersRepo = new UsersRepo();

// THIS IS FOR THE EVENT ON THE LOGIN SCREEN BUTTON //
$('#login-btn').on('click', function () {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(promise => promise.json())
    .then(data => windowHandler(data.users))
    .catch(err => console.error(err))
})

function windowHandler(data) {
  const username = $('#login-username-input').val();
  const password = $('#password-login-input').val();
  if (username === "manager" && password === "overlook2020") {
    const newManager = 'manager';
    getNeededData(newManager, data)
  } else {
    let ourUser = loginMethod.checkUserNameAndPassword(data, username, password)
    getNeededData(ourUser, data)
  }
}

// AFTER LOGIN IS VERIFIED FETCHES FOR NEEDED API DATA //
function getNeededData(newPerson, usersData) {
  Promise.all([
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json()),
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json()),
  ]).then(data => reassignData(data[0].rooms, data[1].bookings, newPerson, usersData))
}

function reassignData(apiRooms, apiBookings, newPerson, usersData) {
  reAssignRooms(apiRooms);
  reAssignBookings(apiBookings)
  reAssignUsers(usersData)
  reAssignUser(newPerson, usersRepo.allUsers, bookings, hotel)
  if (manager) {
    domUpdates.flipCard($('.manager-page'), $('.login-container'))
    domUpdates.displayManagerPage(manager, usersRepo, bookings, hotel, date)
  } else {
    domUpdates.flipCard($('.user-page'), $('.login-container'))
    domUpdates.displayUserPage(user, usersRepo, bookings, hotel, date)
  }
}

function reAssignRooms(apiRooms) {
  apiRooms.forEach(apiRoom => {
    room = new Room(apiRoom)
    hotel.allRooms.push(room)
  })
}

function reAssignBookings(apiBookings) {
  let map = apiBookings.map(apiBooking => { 
    let booking = new Booking(apiBooking)
    return booking
  })
  bookings = new Bookings(map)
  return bookings
}

function reAssignUsers(usersData) {
  usersData.forEach(data => {
    user = new User(data, bookings, date, hotel)
    usersRepo.allUsers.push(user)
  })
}

function reAssignUser(newPerson, usersRepo, bookings, hotel) {
  if (newPerson === 'manager') {
    manager = new Manager(newPerson, usersRepo, bookings, hotel, date)
  } else {
    user = new User(newPerson, bookings, date, hotel)
  }
}