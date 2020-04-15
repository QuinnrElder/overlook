import User from '../src/User'
import { expect } from 'chai';

const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the User Class', function() {

    let user;

  beforeEach(function() {
    user = new User();
  });

  afterEach(function() {
    chai.spy.restore()
  });

  it('Should', function() {

  });

})