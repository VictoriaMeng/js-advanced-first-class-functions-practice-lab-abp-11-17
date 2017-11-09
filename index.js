function logDriverNames (drivers) {

  const callback = function (driver, index, drivers) {
    console.log(driver.name);
  }

  drivers.forEach(callback);
}

logDriverNames([{name: "annie"}, {name: "bobby"}])
