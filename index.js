
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



logDriverNames([{name: 'Annie'}, {name: 'Bobby'}])
