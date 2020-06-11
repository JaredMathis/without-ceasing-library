
const u = require("wlj-utilities");
const { v4 } = require('uuid');

const toRequest = require("../../library/toRequest.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let userId = v4();
    u.assertIsEqualJson(
        () => toRequest({userId,petition:'Salvation',name:'J'}),
        () => ({userId,petitionId:0,nameId:9})
    );
});
