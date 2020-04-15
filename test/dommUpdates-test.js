import domUpdates from '../src/domUpdates';
import { expect } from 'chai';
const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the domUpdates Object', function () {

  let user;
  let booking;
  let bookings;
  let user;
  let userRepo;
  let Room;
  let Hotel;

  this.beforeEach(function () {
  
  });

  afterEach(function () {
    chai.spy.restore(domUpdates)
  });

  it('Should', function() {

  });
})