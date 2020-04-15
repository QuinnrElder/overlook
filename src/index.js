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
import Manager from './Manager'

let booking;
let manager
let bookings = []
let hotel = [];
let room;
let todayDate = "2019/09/22";
let user;
let users = [];

window.onload = () => {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(promise => promise.json())
    .then(data => getUsersData(data))
    .catch(err => console.error(err))
};

function getUsersData(usersData) {
  users = usersData
  return users
}

