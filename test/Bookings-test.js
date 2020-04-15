import Bookings from '../src/Bookings';
import Booking from '../src/Booking';
import { expect } from 'chai';

const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the Bookings Class', function () {

  let booking1;
  let booking2;
  let booking3;
  let bookings;
  
  beforeEach(function () {
    booking1 = new Booking();
    booking2 = new Booking();
    booking3 = new Booking();
    bookings = new Bookings()
    bookings.allBookings = [booking1,
      booking2,
      booking3]
  });
  afterEach(function() {
    chai.spy.restore()
  });

  it('Should', function() {
    // test here
  })

})