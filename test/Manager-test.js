import Manager from '../src/Manager';
import Booking from '../src/Booking';
import Bookings from '../src/Bookings'
import Hotel from '../src/Hotel';
import Room from '../src/Room';
import User from '../src/User';
import UsersRepo from '../src/UsersRepo';
import usersData from './usersData';
import bookingsData from './bookingsData'
import roomsData from './roomsData'
import {
  expect
} from 'chai';

const assert = require('chai').assert
const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the Manager Class', function () {
  
  let date;
  let manager;
  let weirdDate;
  let usersRepo;
  let hotel;
  let bookings;
 

  
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

    let newUsers = usersData.users.map(element => {
      let user = new User(element, hotel, date)
      return user
    });

    usersRepo = new UsersRepo(newUsers)
    
    manager = new Manager("manager", usersRepo, hotel, date);
    weirdDate = manager.getDateSyntax(date)
  });


  it('should be a function', function () {
    assert.isFunction(Manager);
  });

  it('Should instantiate a room', function () {
    assert.isObject(manager);
  });

  it('Should have an id', function () {
    expect(manager.id).to.equal("manager")
  });

  it('Should have users', function () {
    expect(manager.users).to.equal(usersRepo)
  });

  it('Should have bookings', function () {
    expect(manager.bookings).to.deep.equal(hotel.hotelBookings)
  });

  it('Should have rooms', function () {
    expect(manager.rooms).to.equal(hotel['allRooms'])
  });

  it('Should have a date', function () {
    expect(manager.getDateSyntax(date)).to.deep.equal(weirdDate)
  });

  it('Should have a numberOfRoomsAvailable', function () {
    expect(manager.numberOfRoomsAvailable).to.deep.equal(
      manager.findNumberOfRoomsAvailable()
    )
  });

  it('Should have a percentageOfRoomsAvailable', function () {
    expect(manager.percentageOfRoomsAvailable).to.deep.equal(
      manager.findPercentOfAvailableRooms()
    )
  });
  it('Should have a todaysTotalRevenue', function () {
    expect(manager.todaysTotalRevenue).to.deep.equal(
      manager.getTotalRevenue()
    )
  });
})