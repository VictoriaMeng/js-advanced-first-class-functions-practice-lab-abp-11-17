

function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(`${driver.name}`);
  };
}

logDriverNames([{name: 'Annie'}, {name: 'Bobby'}])
