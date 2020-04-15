import Booking from '../src/Booking';
import { expect } from 'chai';

const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test a single Booking Class', function () {

  let booking;
  
  beforeEach(function () {
    booking = new Booking();
  });
  afterEach(function() {
    chai.spy.restore()
  });

  it('Should', function() {
    // test here
  })

})