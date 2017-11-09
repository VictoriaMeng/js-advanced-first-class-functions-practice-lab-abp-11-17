
const callback = function (driver, index, drivers) {
  console.log(`${driver.name}`);
}


function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(`${driver.name}`);
  };
}

function logDriversByHometown() {

}



[{name: 'Annie'}, {name: 'Bobby'}].forEach(callback);
