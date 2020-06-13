
const u = require("wlj-utilities");

const getCountries = require("../../library/getCountries.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    u.assert(() => getCountries()[0] === 'Unknown');
    u.assert(() => getCountries()[1] === 'United States');
    u.assert(() => getCountries()[2] === 'Mexico');
    u.assert(() => getCountries()[3] === 'Canada');
});
