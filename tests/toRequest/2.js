
const u = require("wlj-utilities");
const { v4 } = require('uuid');

const toRequest = require("../../library/toRequest.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let userId = v4();
    u.assertThrows(
        () => toRequest({userId,petition:'Salvation',name:'Not A Name'})
    );
});
