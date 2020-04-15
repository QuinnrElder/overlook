import User from '../src/User'
import UserRepo from '../src/UserRepo'
import { expect } from 'chai';

const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the User Class', function() {

    let user1;
    let user2;
    let user3;
    let userRepo;

  beforeEach(function() {
    user1 = new User();
    user2 = new User();
    user3 = new User();
    userRepo = new UserRepo();
  });

  afterEach(function() {
    chai.spy.restore()
  });

  it('Should', function() {

  });

})