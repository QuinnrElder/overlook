import Hotel from '../src/Hotel';
import Room from '../src/Room'
import { expect } from 'chai';

const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the Hotel Class', function () {

  let room1;
  let room2;
  let room3;
  let hotel;

  beforeEach(function () {
    room1 = new Room();
    room2 = new Room();
    room3 = new Room();
    hotel = new Hotel()
  });
  
  afterEach(function() {
    chai.spy.restore()
  });

  it('Should', function() {
    // test here
  });

})