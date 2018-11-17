// Write your solution in this file!
const driver = {
  name: 'Sam',
}

function updateDriverWithKeyAndValue(driver, address, value) {
  const newObj = {...driver}
    newObj[address] = value;
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, address, value) {
  driver[address] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = delete driver.key;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
