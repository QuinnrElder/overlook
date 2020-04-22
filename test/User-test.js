import Booking from '../src/Booking';
import Bookings from '../src/Bookings'
import Hotel from '../src/Hotel';
import Room from '../src/Room';
import User from '../src/User';
import bookingsData from './bookingsData'
import roomsData from './roomsData'

import {
  expect
} from 'chai';

const assert = require('chai').assert
const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the User Class', function () {

  let date;
  let user;
  let hotel;
  let bookings;
  let person;

  beforeEach(function () {
    date = new Date().toLocaleDateString();
    
    let newBookings = bookingsData.bookings.map(element => {
      let booking = new Booking(element)
      return booking
    });

    bookings = new Bookings(newBookings)

    let newRooms = roomsData.rooms.map(element => {
      let room = new Room(element)
      return room
    });

    hotel = new Hotel(bookings, newRooms)
    person = {
      "id": 10,
      "name": "Tony Armstrong"
    }

    user = new User(person, hotel, date);
  });


  it('should be a function', function () {
    assert.isFunction(User);
  });

  it('Should instantiate a room', function () {
    assert.isObject(user);
  });

  it('Should have an id', function () {
    expect(user.id).to.equal(10)
  });

  it('Should have a name', function () {
    expect(user.name).to.equal(person.name)
  });

  it('Should have a date', function () {
    expect(user.date).to.deep.equal(date)
  });

  it("Should have user's bookings ", function () {
    expect(user.myBookings).to.deep.equal([{
      "id": "5fwrgu4i7k55hl6tf",
      "userID": 10,
      "date": "2020/01/25",
      "roomNumber": 10,
      "roomService": [],
    }])
  });

  it('Should have a listOfRoomsStayedIn(', function () {
    expect(user.listOfRoomsStayedIn).to.deep.equal([{
      "number": 10,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "twin",
      "numBeds": 1,
      "costPerNight": 497.64
    }])
  });

  it('Should have a totalMoneySpent', function () {
    expect(user.totalMoneySpent).to.deep.equal('497.64')
  });

  it('Should check the method findMyRooms', function () {
    expect(user.findMyRooms(hotel.allRooms)).to.deep.equal([{
      "number": 10,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "twin",
      "numBeds": 1,
      "costPerNight": 497.64
    }])
  });

  it('Should check the method getTotalSpent', function () {
    expect(user.getTotalSpent()).to.deep.equal('497.64')
  });
})