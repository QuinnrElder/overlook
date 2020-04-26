import './css/base.scss';
// import './css/styles.scss';
import $ from 'jQuery';
import Booking from './Booking';
import Bookings from './Bookings'
import domManagerUpdates from './domManagerUpdates';
import domUserUpdates from './domUserUpdates';
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
let user;
let manager;

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
  let currentUser = reAssignUser(newPerson)

  if (currentUser.id === 'manager') {
    domManagerUpdates.flipCard($('.manager-page'), $('.login-container'))
    domManagerUpdates.displayManagerPage(currentUser, usersRepo, bookings, hotel, date)
  } else {
    console.log(currentUser)
    domUserUpdates.flipCard($('.user-page'), $('.login-container'))
    domUserUpdates.displayUserPage(currentUser)
  }
}

// MANAGER EVENT LISTENERS //
$('#search-user').on('click', function () {
  const searchedUserName = $('.input-names').val()
  domManagerUpdates.flipCard($('.user-page'), $('.manager-page'));
  let user = manager.findSearchedUser(searchedUserName)
  console.log(user)
  domUserUpdates.displayUserPage(user)
})

// USER EVENT LISTENERS //
$('#search-btn').click(function () {
  let date = $('.input-name').val()
  let filterType = $('.filter-input').val()
  const availableRooms = bookings.findingRoomsAvailableToday(date, hotel, filterType)
  if (availableRooms.length === 0) {
    alert(`WE FIERCELY APOLOGIZE BUT THERE ARE NO ROOMS AVAILABLE FOR THAT DATE!
         Please choose another date!!`)
  }
  $('.pop-up-container').toggleClass('hide')
  domUserUpdates.displayAvailableRoomsInfo(availableRooms, date)
})

$('#close-x').on('click', function () {
  $('.pop-up-container').toggleClass('hide')
})

$('.pop-up-container').on('click', function (event) {
  if (event.target.classList.contains('book-room-btn')) {
    const room = event.target.id;
    const date = event.target.dataset.id;
    user.postBooking(room, date)
  }
})

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
    manager = new Manager(newPerson, usersRepo, hotel, date)
    return manager
  } else {
    user = new User(newPerson, hotel, date)
    return user
  }
}