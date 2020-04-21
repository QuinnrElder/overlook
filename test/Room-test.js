import Room from '../src/Room'
import {
  expect
} from 'chai';
const assert = require('chai').assert
const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the Room Class', function () {

  let room;

  beforeEach(function () {
    room = new Room({
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    });
  });

  it('should be a function', function () {
    assert.isFunction(Room);
  });
  it('Should instantiate a room', function () {
    assert.isObject(room);
  });
  it('Should have a name', function () {
    expect(room.number).to.equal(1)
  });
  it('Should have a userID', function () {
    expect(room.roomType).to.equal("residential suite")
  });
  it('Should have a date', function () {
    expect(room.bidet).to.equal(true)
  });
  it('Should have a roomNumber', function () {
    expect(room.bedSize).to.equal("queen")
  });
  it('Should have a roomService', function () {
    expect(room.numBeds).to.deep.equal(1)
  });
  it('Should have a costPerNight', function () {
    expect(room.costPerNight).to.deep.equal(358.4)
  });

})