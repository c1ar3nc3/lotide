const assert = require('../assertEqual');
const tail = require('../tail')


assert(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);