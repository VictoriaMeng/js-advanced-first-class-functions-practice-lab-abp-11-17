const logDriverNames = function (driver, index, drivers) {
  for (const name in driver) {
    console.log(driver.name);
  }
}

[{name: "Annie"}, {name: "Bob"}].forEach(logDriverNames);
