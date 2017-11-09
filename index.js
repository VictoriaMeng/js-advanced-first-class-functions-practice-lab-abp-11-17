const logDriverNames = function (driver, index, drivers) {
    console.log(driver.name);
}

[{name: "Annie"}, {name: "Bob"}].forEach(logDriverNames);