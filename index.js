function logDriverNames (drivers) {
  for (const driver of drivers) {
    console.log(driver.name);
  }
}

function logDriversByHometown (drivers, place) {
  for (const driver of drivers) {
    
  }
}

logDriverNames([
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
]);
