function logDriverNames(drivers) {
  for (const driver in drivers) {
    console.log(driver.name);
  }
}

logDriverNames([{name: "Annie"}, {name: "Bobby"}])
