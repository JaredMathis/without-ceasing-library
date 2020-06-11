
const u = require("wlj-utilities");
const petitions = require('./getPetitions')();
const names = require('./getNames')();

module.exports = toRequest;

function toRequest(event) {
    let result;
    u.scope(toRequest.name, x => {
        u.assert(() => u.isDefined(event));
        u.assert(() => u.isGuid(event.userId));
        u.assertOnlyContainsProperties(event, 
            ['userId', 'petition', 'name']);

        let petitionId = petitions.indexOf(event.petition);
        u.assert(() => petitionId >= 0);

        let nameId = names.indexOf(event.name);
        u.assert(() => nameId >= 0);
        
        result = {
            userId: event.userId,
            petitionId,
            nameId,
        };        
    });
    return result;
}
