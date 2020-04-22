import loginMethod from '../src/loginMethod';
import {
  expect
} from 'chai';

const chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

describe('Should test the loginMethod Object', function () {

  // USER PATH

  it('Should test the method checkPasswordNumbers', function () {
    let username = "customer34"
    expect(loginMethod.checkPasswordNumbers(username)).to.equal(34)
  });

  it('Should test the method checkPasswordLetters', function () {
    let username = "customer34"
    let password = 'overlook2020'
    expect(loginMethod.checkPasswordLetters(username, password)).to.equal(34)
  });

  it('Should test the method checkPassword', function () {
    let usersData = [{
      "id": 1,
      "name": "Leatha Ullrich"
    }, {
      "id": 2,
      "name": "Rocio Schuster"
    }, {
      "id": 3,
      "name": "Kelvin Schiller"
    }, {
      "id": 4,
      "name": "Kennedi Emard"
    }, {
      "id": 5,
      "name": "Rhiannon Little"
    }, {
      "id": 6,
      "name": "Fleta Schuppe"
    }];
    let passwordId = 3;
    expect(loginMethod.checkPassword(usersData, passwordId)).to.deep.equal({
      "id": 3,
      "name": "Kelvin Schiller"
    })
  });
})