import domManagerUpdates from '../src/domManagerUpdates';
import { expect } from 'chai';


const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the domManagerUpdates Object', function () {

  afterEach(function () {
    chai.spy.restore(domManagerUpdates)
  });

  it('Should SPY on displayManagerPage', function() {
    chai.spy.on(domManagerUpdates, 'displayManagerPage', () => {});
    domManagerUpdates.displayManagerPage();
    expect(domManagerUpdates.displayManagerPage).to.have.been.called(1);
  });

  it('Should SPY on displayManagerInfo', function() {
    chai.spy.on(domManagerUpdates, 'displayManagerInfo', () => {});
    domManagerUpdates.displayManagerPage();
    expect(domManagerUpdates.displayManagerInfo).to.have.been.called(1);
  });

  it('Should SPY on injectManagerSideUserWindowHTML', function() {
    chai.spy.on(domManagerUpdates, 'injectManagerSideUserWindowHTML', () => {});
    domManagerUpdates.injectManagerSideUserWindowHTML();
    expect(domManagerUpdates.injectManagerSideUserWindowHTML).to.have.been.called(1);
  });

  it('Should SPY on displayManagerInfo', function() {
    chai.spy.on(domManagerUpdates, 'displayManagerInfo', () => {});
    domManagerUpdates.displayManagerInfo();
    expect(domManagerUpdates.displayManagerInfo).to.have.been.called(1);
  });

  it('Should SPY on displayAllBookings', function() {
    chai.spy.on(domManagerUpdates, 'displayAllBookings', () => {});
    domManagerUpdates.displayAllBookings();
    expect(domManagerUpdates.displayAllBookings).to.have.been.called(1);
  });

  it('Should SPY on displayAvailableRoomsInfo', function() {
    chai.spy.on(domManagerUpdates, 'displayAvailableRoomsInfo', () => {});
    domManagerUpdates.displayAvailableRoomsInfo();
    expect(domManagerUpdates.displayAvailableRoomsInfo).to.have.been.called(1);
  });

  it('Should SPY on refactorDates', function() {
    chai.spy.on(domManagerUpdates, 'refactorDates', () => {});
    domManagerUpdates.refactorDates();
    expect(domManagerUpdates.refactorDates).to.have.been.called(1);
  });

  it('Should SPY on flipCard', function() {
    chai.spy.on(domManagerUpdates, 'flipCard', () => {});
    domManagerUpdates.flipCard();
    expect(domManagerUpdates.flipCard).to.have.been.called(1);
  });

  it.skip('Should test the method refactorDates', function() {
    
  });
})
