
const u = require("wlj-utilities");

module.exports = getPetitions;

function getPetitions() {
    let result;
    u.scope(getPetitions.name, x => {
        result = [
            'Salvation',
            'Wisdom',
            'Repentance',
            'Peace',
            'Love',
            'Healing',
        ]
    });
    return result;
}
