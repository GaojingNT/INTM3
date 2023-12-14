// import { createGuestList } from './data/guestdata.js'
// import { GuestManagement } from './lib/GuestManagement.js'
const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList
 
  
 
  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}

module.exports = guestForm

// export { guestForm }
// const { registerEventHandling, displayGuests } = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())