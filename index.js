

function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(`${driver}`);
  };
}

logDriverNames([{name: 'Annie'}, {name: 'Bobby'}])
