var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

var mock = new MockAdapter(axios);

require("./assets.mock").default(mock);

require("./certificates.mock").default(mock);

require("./degrees.mock").default(mock);

require("./finances.mock").default(mock);