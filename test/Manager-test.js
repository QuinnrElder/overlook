import Manager from '../src/Manager';
import { expect } from 'chai';

const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the Manager Class', function () {

  let manager;
  
  beforeEach(function () {
    manager = new Manager();
  });
  
  afterEach(function() {
    chai.spy.restore()
  });

  it('Should', function() {
    // test here
  });

})