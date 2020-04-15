import Room from '../src/Room'
import { expect } from 'chai';

const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the Room Class', function () {

  let room;
  
  beforeEach(function () {
    room = new Room();
  });

  afterEach(function() {
    chai.spy.restore()
  });

  it('Should', function() {
    // test here
  });

})