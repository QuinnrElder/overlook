import $ from 'jQuery'
import User from './User';
import Manager from './Manager'

let user;

const domUpdates = {

  loginHandler(usersData) {
    user = this.useLogIn(usersData)
    console.log(user)
  },

}
export default domUpdates;