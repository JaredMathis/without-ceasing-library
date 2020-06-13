
const u = require("wlj-utilities");

module.exports = getCountries;

const countries = [
    'Unknown',
    'United States',
    'Mexico',
    'Canada'
]

function getCountries() {
    let result;
    u.scope(getCountries.name, x => {
        result = countries
    });
    return result;
}
