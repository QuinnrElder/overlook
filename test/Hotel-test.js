import Hotel from '../src/Hotel';
import {
  expect
} from 'chai';

const assert = require('chai').assert;
const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the Hotel Class', function () {

  let room1;
  let room2;
  let room3;
  let booking1;
  let booking2;
  let booking3;
  let hotel;

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
    hotel = new Hotel([booking1, booking2, booking3], [room1, room2, room3])
  });

  afterEach(function () {
    chai.spy.restore()
  });

  it('should be a function', function () {
    assert.isFunction(Hotel);
  });
  it('Should instantiate a Booking', function () {
    assert.isObject(hotel);
  });
  it('Should have a hotelBookings', function () {
    expect(hotel.hotelBookings).to.deep.equal([booking1, booking2, booking3])
  });
  it('Should have a hotelBookings', function () {
    expect(hotel.allRooms).to.deep.equal([room1, room2, room3])
  });

})