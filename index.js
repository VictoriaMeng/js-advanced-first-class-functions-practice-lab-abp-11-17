function logDriverNames (drivers) {

  const callback = function (driver, index, drivers) {
    console.log(driver);
  }

  drivers.forEach(callback);
}

logDriverNames([{name: "annie"}])