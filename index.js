// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function (driver){
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, search) {
    let searchLength = search.length;

    return drivers.filter(function (driver){
        return driver.substring(0,searchLength) === search
    })
}

function matchName(drivers, something){
    return drivers.filter(function (driver){
        return driver.name === something
    })
}