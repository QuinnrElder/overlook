// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/login-background.jpg'

import './css/base.scss';
// import './css/styles.scss';
import $ from 'jQuery'
import User from './User';
import Room from './Room';
import Hotel from './Hotel';
import Booking from './Booking';
import Bookings from './Bookings'
import domUpdates from './domUpdates';
import Manager from './Manager';

let booking;
let manager
let bookings = new Bookings()
let hotel = new Hotel()
let room;
let date;
let user;

$('#log-in-btn').on('click', function () {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(promise => promise.json())
    .then(data => windowHandler(data.users))
    .catch(err => console.error(err))
})

function windowHandler(data) {
  userLogIn(data)
}

function userLogIn(usersData) {
  const username = $('#login-username-input').val();
  const password = $('#password-login-input').val();

  if (username === "manager" && password === "overlook2020") {
    const newManager = 'manager';
    getNeededData(newManager)
  } else {
    let ourUser = checkPassword(usersData)
    getNeededData(ourUser)
  }
}

function checkPassword(usersData) {
  let username = $('#login-username-input').val();
  let password = $('#password-login-input').val();

  if (username !== "" && password !== "") {
    let passwordId = checkPasswordLetters(username, password)
    let correctUser = usersData.find(user => user.id === passwordId)
    return correctUser
  } else {
    alert('Please fill out Username & Password correctly')
  }
}

function checkPasswordLetters(username, password) {
  let passwordId;
  if (username.includes('customer') && password.includes('overlook2020')) {
    passwordId = checkPasswordNumbers(username)
    return passwordId
  } else {
    alert('Please use the correct PASSWORD')
  }
  return passwordId
}

function checkPasswordNumbers(username) {
  let id1;
  username = username.split('')
  if (username.length === 9) {
    id1 = (username[username.length - 1])
    id1 = parseInt(id1)
    return id1
  } else if (username.length === 10) {
    id1 = username[username.length - 2] + username[username.length - 1]
    id1 = parseInt(id1)
    return id1
  } else {
    alert('Please use the correct PASSWORD')
  }
}

// AFTER LOG IN FETCHES FOR DATA //
function getNeededData(newPerson) {
  Promise.all([
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json()),
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json()),
  ]).then(data => reassignData(data[0].rooms, data[1].bookings, newPerson))
}

function reassignData(apiRooms, apiBookings, newPerson) {
  reAssignRooms(apiRooms);
  reAssignBookings(apiBookings)
  reAssignUser(newPerson)
  if (manager) {
    domUpdates.flipCard($('.manager-page'), $('.login'))
    domUpdates.displayManagerPage(manager)
  } 
  domUpdates.flipCard($('.user-page'), $('.login'))
  domUpdates.displayUserPage(user)
}

function reAssignRooms(apiRooms) {
  apiRooms.forEach(apiRoom => {
    room = new Room(apiRoom)
    hotel.allRooms.push(room)
  })
}

function reAssignBookings(apiBookings) {
  apiBookings.forEach(apiBooking => {
    booking = new Booking(apiBooking)
    bookings.allBookings.push(booking)
  })
}

function reAssignUser(newPerson) {
  if (newPerson === 'manager') {
    manager = new Manager(newPerson)
  } else {
    user = new User(newPerson, bookings)
  }
}