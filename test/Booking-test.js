import Booking from '../src/Booking';
import { expect } from 'chai';
const assert = require('chai').assert;
const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test a single Booking Class', function () {

  let booking;
  let bookingObject;
  beforeEach(function () {
    bookingObject = {
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2020/02/04",
      "roomNumber": 15,
      "roomServiceCharges": [],
    }
    booking = new Booking(bookingObject);
  });
  
  it('should be a function', function() {
    assert.isFunction(Booking);
  });
  it('Should instantiate a Booking', function() {
    assert.isObject(booking);
  });
  it('Should have a name', function() {
    expect(booking.id).to.equal("5fwrgu4i7k55hl6sz")
  });
  it('Should have a userID', function() {
    expect(booking.userID).to.equal(9)
  });
  it('Should have a date', function() {
    expect(booking.date).to.equal("2020/02/04")
  });
  it('Should have a roomNumber', function() {
    expect(booking.roomNumber).to.equal(15)
  });
  it('Should have a roomService', function() {
    expect(booking.roomService).to.deep.equal([])
  });
})