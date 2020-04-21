import Bookings from '../src/Bookings';
import Booking from '../src/Booking';
import {
  expect
} from 'chai';

const assert = require('chai').assert
const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the Bookings Class', function () {

  let booking1;
  let booking2;
  let booking3;
  let bookings;
  let date;
  let bookingNums;
  let hotel
  let filterType;

  beforeEach(function () {
    filterType = "single room";
    date = '2020/02/04'
    booking1 = new Booking({
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2020/02/04",
      "roomNumber": 15,
      "roomServiceCharges": []
    });
    booking2 = new Booking({
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 43,
      "date": "2020/02/04",
      "roomNumber": 24,
      "roomServiceCharges": []
    });
    booking3 = new Booking({
      "id": "5fwrgu4i7k55hl6t6",
      "userID": 13,
      "date": "2020/02/04",
      "roomNumber": 12,
      "roomServiceCharges": []
    });
    bookings = new Bookings([booking1,
      booking2,
      booking3
    ])
    bookingNums = [15, 24, 12]
    hotel = {
      'allRooms': [{
          "number": 15,
          "roomType": "residential suite",
          "bidet": true,
          "bedSize": "queen",
          "numBeds": 1,
          "costPerNight": 358.4
        },
        {
          "number": 24,
          "roomType": "suite",
          "bidet": false,
          "bedSize": "full",
          "numBeds": 2,
          "costPerNight": 477.38
        },
        {
          "number": 12,
          "roomType": "single room",
          "bidet": false,
          "bedSize": "king",
          "numBeds": 1,
          "costPerNight": 491.14
        },
        {
          "number": 4,
          "roomType": "single room",
          "bidet": false,
          "bedSize": "queen",
          "numBeds": 1,
          "costPerNight": 429.44
        }
      ]
    }
  });
  
  afterEach(function () {
    chai.spy.restore()
  });

  it('Should be a function', function () {
    assert.isFunction(Bookings);
  });

  it('Should instantiate Bookings', function () {
    assert.isObject(bookings);
  });

  it('Should have all the bookings', function () {
    expect(bookings.allBookings).to.deep.equal([booking1,
      booking2,
      booking3
    ])
  });

  it('Should test the method getAllRoomNumbersBookedToday', function () {
    expect(bookings.getAllRoomNumbersBookedToday(date)).to.deep.equal([15, 24, 12])
  });

  it('Should test the method findAvailableRoomNumbers', function () {
    expect(bookings.findAvailableRoomNumbers(bookingNums, hotel)).to.deep.equal([{
      "number": 4,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 429.44
    }])
  });

  it('Should test the method findFilteredRoomType', function () {
    let availableRooms = [{ 
    "number": 4,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 429.44
    }]
    expect(bookings.findFilteredRoomType(availableRooms, filterType)).to.deep.equal([{ 
      "number": 4,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 429.44
    }])
  });

  it('Should test findingRoomsAvailableToday with filterType', function() {
    expect(bookings.findingRoomsAvailableToday(date, hotel, filterType)).to.deep.equal([{ 
      "number": 4,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 429.44
    }])
  });

  it('Should test findingRoomsAvailableToday with no filterType', function() {
    filterType = 'none'
    expect(bookings.findingRoomsAvailableToday(date, hotel, filterType)).to.deep.equal([{ 
      "number": 4,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 429.44
    }])
  });
})