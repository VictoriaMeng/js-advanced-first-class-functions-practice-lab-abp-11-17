const logDriverNames = function (driver) {
  for (const name in driver) {
    console.log(driver.name);
  }
}

logDriverNames([{name: "Annie"}, {name: "Bob"}])
