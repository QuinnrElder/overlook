// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

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
let bookings = []
let hotel = [];
let room;
let date; 
let user;



$('#log-in-btn').on('click', function() {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(promise => promise.json())
    .then(data => windowHandler(data.users))
    .catch(err => console.error(err))
})

function windowHandler(data) {
  let currentUser = userLogIn(data)
  console.log(currentUser)
}

function userLogIn(usersData) {
  let username = $('#login-username-input').val();
  let password = $('#password-login-input').val();
  let manager = 'manager';

  if (username === "manager" && password === "overlook2020") {
    manager = new Manager("manager")
    return manager;

  } else {
    let ourUser = checkPassword(usersData)
    user = new User(ourUser)
    return user
  }
}

function checkPassword(usersData) {
  let username = $('#login-username-input').val();
  let password = $('#password-login-input').val();
  if (username === "manager" && password === "overlook2020") {

  }
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
  username = username.split('');
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