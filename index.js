const callback = function (driver, index, drivers) {
    console.log(driver.name);
}

[{name: 'Anne'}].forEach(callback);