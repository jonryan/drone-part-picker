"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Link",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  },
  {
    name: "FlightController",
    embedded: false
  },
  {
    name: "Merchant",
    embedded: false
  },
  {
    name: "FlightControllerMerchantLink",
    embedded: false
  },
  {
    name: "ReceiverProtocol",
    embedded: false
  },
  {
    name: "HolePattern",
    embedded: false
  },
  {
    name: "HoleSize",
    embedded: false
  },
  {
    name: "Gyro",
    embedded: false
  },
  {
    name: "CPU",
    embedded: false
  },
  {
    name: "Baro",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://prism-Publi-1NX25XXJPKTRC-1994595457.us-east-1.elb.amazonaws.com`
});
exports.prisma = new exports.Prisma();
