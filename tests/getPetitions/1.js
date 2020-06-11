
const u = require("wlj-utilities");

const getPetitions = require("../../library/getPetitions.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    u.assertIsArray(() => getPetitions());
    u.assert(() => getPetitions()[0] === 'Salvation');
    u.assert(() => getPetitions()[1] === 'Wisdom');
    u.assert(() => getPetitions()[2] === 'Repentance');
});
