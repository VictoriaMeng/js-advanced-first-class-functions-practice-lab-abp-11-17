function logDriverNames (drivers) {

  const callback = function (driver, index, drivers) {
    console.log(driver.name);
  }

  drivers.forEach(callback);
}

function logDriversByHometown () {
  
}