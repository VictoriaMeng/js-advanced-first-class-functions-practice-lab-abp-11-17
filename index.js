function logDriverNames (drivers) {

  const callback = function (driver, index, drivers) {
    console.log(driver.name);
  }

  drivers.forEach(callback);
}

function logDriversByHometown (drivers, place) {

  const callback = function (driver, index, drivers) {
    if (driver.hometown === place) {
     console.log(driver.name);
   }
  }

  drivers.forEach(callback);

}
