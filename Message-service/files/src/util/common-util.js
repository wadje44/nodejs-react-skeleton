module.exports = {

  // Check if message is palindrome
  checkIfPalindrome: (message) => {
    const trimmedMessage = message.replace(/ /g, '');
    for (let i = 0; i < trimmedMessage.length / 2; i += 1) {
      if (trimmedMessage[i] !== trimmedMessage[trimmedMessage.length - i - 1]) {
        return false;
      }
    }
    return true;
  },

  /*
  * Datastore doesn't support page number
  * but accepts offset i.e. number of records to be skipped
  * getOffset returns offset using page number and records per page
  */
  getOffset: (page, limit) => {
    let offset = 0;
    if (page && page >= 2) {
      offset = (parseInt(page, 10) - 1) * limit;
    }
    return offset;
  },
};
