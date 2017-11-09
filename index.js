function logDriverNames (drivers) {
  for (const driver of drivers) {
    console.log(driver.name);
  }
}

function logDriversByHometown (drivers, hometown) {
  for (const driver of drivers) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  }
}

function driversByRevenue (drivers) {
  const driversClone = drivers.slice(0);
  return driversClone.sort(
    function (driver1, driver2) {return driver1.revenue - driver2.revenue;}
  );
}

function driversByName (drivers) {
  const driversClone = drivers.slice(0);
  return driversClone.sort(
    function (driver1, driver2) {return driver1.name.localeCompare(driver2.name);}
  );
}

function totalRevenue (drivers) {
  const addRevenue = function(agg, index, driver, drivers) {
    return agg + driver.revenue;
  };

  return drivers.reduce(addRevenue(0), 0);

}



logDriverNames([
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
]);
