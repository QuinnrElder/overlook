import Manager from '../src/Manager';
import {
  expect
} from 'chai';

const assert = require('chai').assert
const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the Manager Class', function () {
  let users;
  let room1
  let room2
  let room3
  let booking1
  let booking2
  let booking3
  let hotel
  let date;
  let manager;
  let weirdDate;

  beforeEach(function () {
    booking1 = {
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2020/02/04",
      "roomNumber": 15,
      "roomServiceCharges": []
    }
    booking2 = {
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 43,
      "date": "2020/01/24",
      "roomNumber": 24,
      "roomServiceCharges": []
    }
    booking3 = {
      "id": "5fwrgu4i7k55hl6t6",
      "userID": 13,
      "date": "2020/01/10",
      "roomNumber": 12,
      "roomServiceCharges": []
    }
    room1 = {
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    };
    room2 = {
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
    };
    room3 = {
      "number": 3,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 491.14
    };
    hotel = {
      'hotelBookings': [booking1, booking2, booking3],
      'allRooms': [room1, room2, room3]
    };
    users = [{
      "id": 1,
      "name": "Leatha Ullrich"
    }, {
      "id": 2,
      "name": "Rocio Schuster"
    }, {
      "id": 3,
      "name": "Kelvin Schiller"
    }]
    date = new Date().toLocaleDateString();
    manager = new Manager("manager", users, hotel, date);
    weirdDate = manager.getDateSyntax(date)
  });


  it.only('should be a function', function () {
    assert.isFunction(Manager);
  });

  it.only('Should instantiate a room', function () {
    assert.isObject(manager);
  });

  it.only('Should have an id', function () {
    expect(manager.id).to.equal("manager")
  });

  it.only('Should have users', function () {
    expect(manager.users).to.equal(users)
  });

  it.only('Should have bookings', function () {
    expect(manager.bookings).to.equal(hotel.allBookings)
  });

  it.only('Should have rooms', function () {
    expect(manager.rooms).to.equal(hotel['allRooms'])
  });

  it.only('Should have a date', function () {
    expect(manager.getDateSyntax(date)).to.deep.equal(weirdD.onlyate)
  });

  it.only('Should have a numberOfRoomsAvailable', function () {
    expect(manager.numberOfRoomsAvailable).to.deep.equal(
      manager.findNumberOfRoomsAvailable()
    )
  });

  it.only('Should have a percentageOfRoomsAvailable', function () {
    expect(manager.percentageOfRoomsAvailable).to.deep.equal(
      manager.findPercentOfAvailableRooms()
    )
  });
  it.only('Should have a todaysTotalRevenue', function () {
    expect(manager.todaysTotalRevenue).to.deep.equal(
      manager.getTotalRevenue()
    )
  });
})