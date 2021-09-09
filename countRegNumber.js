module.exports = function countRegNumber(registrationNumber) {
    return registrationNumber.split(",").length;
  }