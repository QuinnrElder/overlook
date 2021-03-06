import $ from 'jQuery'

const loginMethod = {

  checkUserNameAndPassword(usersData, username, password) {
    let passwordId = this.checkPasswordLetters(username, password)
    return this.checkPassword(usersData, passwordId)
  },

  checkPasswordLetters(username, password) {
    if (username !== "" && password !== "") {
      let passwordId;
      if (username.includes('customer') && password.includes('overlook2020')) {
        passwordId = this.checkPasswordNumbers(username)
        return passwordId
      } else {
        alert('Please use the correct PASSWORD')
      }
      return passwordId
    } else {
      alert('Please fill out Username & Password correctly')
    }
  },

  checkPasswordNumbers(username) {
    let id1;
    username = username.split('')
    let two = username[username.length - 2]
    let indexMinusTwo = parseInt(two)
    let one = username[username.length - 1]
    let indexMinusOne = parseInt(one)
    if (typeof indexMinusTwo === "number") {
      id1 = username[username.length - 2] + username[username.length - 1]
      id1 = parseInt(id1)
      return id1
    } else if (typeof indexMinusOne === 'number') {
      id1 = (username[username.length - 1])
      id1 = parseInt(id1)
      return id1
    } else {
      return
    }
  },

  checkPassword(usersData, passwordId) {
    let correctUser = usersData.find(user => user.id === passwordId)
    return correctUser
  },

}
export default loginMethod