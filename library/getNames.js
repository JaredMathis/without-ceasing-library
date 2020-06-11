
const u = require("wlj-utilities");
const letters = require("./letters");

const names = letters;

module.exports = getNames;

function getNames() {
    let result;
    u.scope(getNames.name, x => {
        result = names;
    });
    return result;
}
