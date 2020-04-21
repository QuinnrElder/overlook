import domUserUpdates from '../src/domUserUpdates';
import { expect } from 'chai';
const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the domUserUpdates Object', function () {

  afterEach(function () {
    chai.spy.restore(domUserUpdates)
  });

  it('Should SPY on displayUserPage', function() {
    chai.spy.on(domUserUpdates, 'displayUserPage', () => {});
    domUserUpdates.displayUserPage();
    expect(domUserUpdates.displayUserPage).to.have.been.called(1);
  });

  it('Should SPY on displayUserInfo', function() {
    chai.spy.on(domUserUpdates, 'displayUserInfo', () => {});
    domUserUpdates.displayUserPage();
    expect(domUserUpdates.displayUserInfo).to.have.been.called(1);
  });

  it('Should SPY on displayUserInfo', function() {
    chai.spy.on(domUserUpdates, 'displayUserInfo', () => {});
    domUserUpdates.displayUserInfo();
    expect(domUserUpdates.displayUserInfo).to.have.been.called(1);
  });

  it('Should SPY on displayAllBookings', function() {
    chai.spy.on(domUserUpdates, 'displayAllBookings', () => {});
    domUserUpdates.displayAllBookings();
    expect(domUserUpdates.displayAllBookings).to.have.been.called(1);
  });

  it('Should SPY on displayAvailableRoomsInfo', function() {
    chai.spy.on(domUserUpdates, 'displayAvailableRoomsInfo', () => {});
    domUserUpdates.displayAvailableRoomsInfo();
    expect(domUserUpdates.displayAvailableRoomsInfo).to.have.been.called(1);
  });

  it('Should SPY on refactorDates', function() {
    chai.spy.on(domUserUpdates, 'refactorDates', () => {});
    domUserUpdates.refactorDates();
    expect(domUserUpdates.refactorDates).to.have.been.called(1);
  });

  it('Should SPY on flipCard', function() {
    chai.spy.on(domUserUpdates, 'flipCard', () => {});
    domUserUpdates.flipCard();
    expect(domUserUpdates.flipCard).to.have.been.called(1);
  });

  it.skip('Should test the method refactorDates', function() {
    
  });
})