import $ from 'jQuery'

const domUpdates = {

  displayLogin(manager) {
    if (manager === undefined) {
      $('.user-page').toggleClass('hide')
      $('.login').toggleClass('hide')
    } else {
      $('.manager-page').toggleClass('hide')
      $('.login').toggleClass('hide')
    }
  },

}
export default domUpdates;