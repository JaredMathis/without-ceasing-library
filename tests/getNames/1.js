
const u = require("wlj-utilities");

const getNames = require("../../library/getNames.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    u.assertIsArray(() => getNames());
    u.assert(() => getNames()[0] === 'A');
    u.assert(() => getNames()[1] === 'B');
    u.assert(() => getNames()[2] === 'C');
});
