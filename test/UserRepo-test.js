import UsersRepo from '../src/UsersRepo'
import {
  expect
} from 'chai';

const assert = require('chai').assert
const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the UsersRepo Class', function () {

  let user1;
  let user2;
  let user3;
  let usersRepo;

  beforeEach(function () {
    user1 = {
      "id": 1,
      "name": "Leatha Ullrich"
    }
    user2 = {
      "id": 2,
      "name": "Rocio Schuster"
    }
    user3 = {
      "id": 3,
      "name": "Kelvin Schiller"
    }
    usersRepo = new UsersRepo([user1, user2, user3]);
  });

  it('should be a function', function () {
    assert.isFunction(UsersRepo);
  });
  it('Should instantiate a room', function () {
    assert.isObject(usersRepo);
  });
  it('Should have a allUsers', function () {
    expect(usersRepo.allUsers).to.deep.equal([user1, user2, user3])
  });
})