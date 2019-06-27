module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFlightController {
  count: Int!
}

type AggregateLink {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type FlightController {
  id: ID!
  name: String
  disabled: Boolean
  releaseDate: DateTime
  uarts: Int
  gyroOne: Float
  gyroTwo: Float
  weightInGrams: Float
  cpu: String
  description: String
  dimensions: String
  holePattern: String
  voltageInputMin: Float
  voltageInputMax: Float
  osd: Boolean
  accelerometer: Boolean
  barometer: Boolean
  spektrumPort: Boolean
  usbInterface: Boolean
  ledWS2812Support: Boolean
  rssiPad: Boolean
  currentSensor: Boolean
  beeperPad: Boolean
  beeperOnBoard: Boolean
  antiVibrationGrommets: Boolean
  builtInReceiver: String
  postedBy: User
  threeVoltOutput: Boolean
  fiveVoltOut: Boolean
  cameraControl: Boolean
}

type FlightControllerConnection {
  pageInfo: PageInfo!
  edges: [FlightControllerEdge]!
  aggregate: AggregateFlightController!
}

input FlightControllerCreateInput {
  id: ID
  name: String
  disabled: Boolean
  releaseDate: DateTime
  uarts: Int
  gyroOne: Float
  gyroTwo: Float
  weightInGrams: Float
  cpu: String
  description: String
  dimensions: String
  holePattern: String
  voltageInputMin: Float
  voltageInputMax: Float
  osd: Boolean
  accelerometer: Boolean
  barometer: Boolean
  spektrumPort: Boolean
  usbInterface: Boolean
  ledWS2812Support: Boolean
  rssiPad: Boolean
  currentSensor: Boolean
  beeperPad: Boolean
  beeperOnBoard: Boolean
  antiVibrationGrommets: Boolean
  builtInReceiver: String
  postedBy: UserCreateOneWithoutFlightControllersInput
  threeVoltOutput: Boolean
  fiveVoltOut: Boolean
  cameraControl: Boolean
}

input FlightControllerCreateManyWithoutPostedByInput {
  create: [FlightControllerCreateWithoutPostedByInput!]
  connect: [FlightControllerWhereUniqueInput!]
}

input FlightControllerCreateWithoutPostedByInput {
  id: ID
  name: String
  disabled: Boolean
  releaseDate: DateTime
  uarts: Int
  gyroOne: Float
  gyroTwo: Float
  weightInGrams: Float
  cpu: String
  description: String
  dimensions: String
  holePattern: String
  voltageInputMin: Float
  voltageInputMax: Float
  osd: Boolean
  accelerometer: Boolean
  barometer: Boolean
  spektrumPort: Boolean
  usbInterface: Boolean
  ledWS2812Support: Boolean
  rssiPad: Boolean
  currentSensor: Boolean
  beeperPad: Boolean
  beeperOnBoard: Boolean
  antiVibrationGrommets: Boolean
  builtInReceiver: String
  threeVoltOutput: Boolean
  fiveVoltOut: Boolean
  cameraControl: Boolean
}

type FlightControllerEdge {
  node: FlightController!
  cursor: String!
}

enum FlightControllerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  disabled_ASC
  disabled_DESC
  releaseDate_ASC
  releaseDate_DESC
  uarts_ASC
  uarts_DESC
  gyroOne_ASC
  gyroOne_DESC
  gyroTwo_ASC
  gyroTwo_DESC
  weightInGrams_ASC
  weightInGrams_DESC
  cpu_ASC
  cpu_DESC
  description_ASC
  description_DESC
  dimensions_ASC
  dimensions_DESC
  holePattern_ASC
  holePattern_DESC
  voltageInputMin_ASC
  voltageInputMin_DESC
  voltageInputMax_ASC
  voltageInputMax_DESC
  osd_ASC
  osd_DESC
  accelerometer_ASC
  accelerometer_DESC
  barometer_ASC
  barometer_DESC
  spektrumPort_ASC
  spektrumPort_DESC
  usbInterface_ASC
  usbInterface_DESC
  ledWS2812Support_ASC
  ledWS2812Support_DESC
  rssiPad_ASC
  rssiPad_DESC
  currentSensor_ASC
  currentSensor_DESC
  beeperPad_ASC
  beeperPad_DESC
  beeperOnBoard_ASC
  beeperOnBoard_DESC
  antiVibrationGrommets_ASC
  antiVibrationGrommets_DESC
  builtInReceiver_ASC
  builtInReceiver_DESC
  threeVoltOutput_ASC
  threeVoltOutput_DESC
  fiveVoltOut_ASC
  fiveVoltOut_DESC
  cameraControl_ASC
  cameraControl_DESC
}

type FlightControllerPreviousValues {
  id: ID!
  name: String
  disabled: Boolean
  releaseDate: DateTime
  uarts: Int
  gyroOne: Float
  gyroTwo: Float
  weightInGrams: Float
  cpu: String
  description: String
  dimensions: String
  holePattern: String
  voltageInputMin: Float
  voltageInputMax: Float
  osd: Boolean
  accelerometer: Boolean
  barometer: Boolean
  spektrumPort: Boolean
  usbInterface: Boolean
  ledWS2812Support: Boolean
  rssiPad: Boolean
  currentSensor: Boolean
  beeperPad: Boolean
  beeperOnBoard: Boolean
  antiVibrationGrommets: Boolean
  builtInReceiver: String
  threeVoltOutput: Boolean
  fiveVoltOut: Boolean
  cameraControl: Boolean
}

input FlightControllerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  disabled: Boolean
  disabled_not: Boolean
  releaseDate: DateTime
  releaseDate_not: DateTime
  releaseDate_in: [DateTime!]
  releaseDate_not_in: [DateTime!]
  releaseDate_lt: DateTime
  releaseDate_lte: DateTime
  releaseDate_gt: DateTime
  releaseDate_gte: DateTime
  uarts: Int
  uarts_not: Int
  uarts_in: [Int!]
  uarts_not_in: [Int!]
  uarts_lt: Int
  uarts_lte: Int
  uarts_gt: Int
  uarts_gte: Int
  gyroOne: Float
  gyroOne_not: Float
  gyroOne_in: [Float!]
  gyroOne_not_in: [Float!]
  gyroOne_lt: Float
  gyroOne_lte: Float
  gyroOne_gt: Float
  gyroOne_gte: Float
  gyroTwo: Float
  gyroTwo_not: Float
  gyroTwo_in: [Float!]
  gyroTwo_not_in: [Float!]
  gyroTwo_lt: Float
  gyroTwo_lte: Float
  gyroTwo_gt: Float
  gyroTwo_gte: Float
  weightInGrams: Float
  weightInGrams_not: Float
  weightInGrams_in: [Float!]
  weightInGrams_not_in: [Float!]
  weightInGrams_lt: Float
  weightInGrams_lte: Float
  weightInGrams_gt: Float
  weightInGrams_gte: Float
  cpu: String
  cpu_not: String
  cpu_in: [String!]
  cpu_not_in: [String!]
  cpu_lt: String
  cpu_lte: String
  cpu_gt: String
  cpu_gte: String
  cpu_contains: String
  cpu_not_contains: String
  cpu_starts_with: String
  cpu_not_starts_with: String
  cpu_ends_with: String
  cpu_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  dimensions: String
  dimensions_not: String
  dimensions_in: [String!]
  dimensions_not_in: [String!]
  dimensions_lt: String
  dimensions_lte: String
  dimensions_gt: String
  dimensions_gte: String
  dimensions_contains: String
  dimensions_not_contains: String
  dimensions_starts_with: String
  dimensions_not_starts_with: String
  dimensions_ends_with: String
  dimensions_not_ends_with: String
  holePattern: String
  holePattern_not: String
  holePattern_in: [String!]
  holePattern_not_in: [String!]
  holePattern_lt: String
  holePattern_lte: String
  holePattern_gt: String
  holePattern_gte: String
  holePattern_contains: String
  holePattern_not_contains: String
  holePattern_starts_with: String
  holePattern_not_starts_with: String
  holePattern_ends_with: String
  holePattern_not_ends_with: String
  voltageInputMin: Float
  voltageInputMin_not: Float
  voltageInputMin_in: [Float!]
  voltageInputMin_not_in: [Float!]
  voltageInputMin_lt: Float
  voltageInputMin_lte: Float
  voltageInputMin_gt: Float
  voltageInputMin_gte: Float
  voltageInputMax: Float
  voltageInputMax_not: Float
  voltageInputMax_in: [Float!]
  voltageInputMax_not_in: [Float!]
  voltageInputMax_lt: Float
  voltageInputMax_lte: Float
  voltageInputMax_gt: Float
  voltageInputMax_gte: Float
  osd: Boolean
  osd_not: Boolean
  accelerometer: Boolean
  accelerometer_not: Boolean
  barometer: Boolean
  barometer_not: Boolean
  spektrumPort: Boolean
  spektrumPort_not: Boolean
  usbInterface: Boolean
  usbInterface_not: Boolean
  ledWS2812Support: Boolean
  ledWS2812Support_not: Boolean
  rssiPad: Boolean
  rssiPad_not: Boolean
  currentSensor: Boolean
  currentSensor_not: Boolean
  beeperPad: Boolean
  beeperPad_not: Boolean
  beeperOnBoard: Boolean
  beeperOnBoard_not: Boolean
  antiVibrationGrommets: Boolean
  antiVibrationGrommets_not: Boolean
  builtInReceiver: String
  builtInReceiver_not: String
  builtInReceiver_in: [String!]
  builtInReceiver_not_in: [String!]
  builtInReceiver_lt: String
  builtInReceiver_lte: String
  builtInReceiver_gt: String
  builtInReceiver_gte: String
  builtInReceiver_contains: String
  builtInReceiver_not_contains: String
  builtInReceiver_starts_with: String
  builtInReceiver_not_starts_with: String
  builtInReceiver_ends_with: String
  builtInReceiver_not_ends_with: String
  threeVoltOutput: Boolean
  threeVoltOutput_not: Boolean
  fiveVoltOut: Boolean
  fiveVoltOut_not: Boolean
  cameraControl: Boolean
  cameraControl_not: Boolean
  AND: [FlightControllerScalarWhereInput!]
  OR: [FlightControllerScalarWhereInput!]
  NOT: [FlightControllerScalarWhereInput!]
}

type FlightControllerSubscriptionPayload {
  mutation: MutationType!
  node: FlightController
  updatedFields: [String!]
  previousValues: FlightControllerPreviousValues
}

input FlightControllerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FlightControllerWhereInput
  AND: [FlightControllerSubscriptionWhereInput!]
  OR: [FlightControllerSubscriptionWhereInput!]
  NOT: [FlightControllerSubscriptionWhereInput!]
}

input FlightControllerUpdateInput {
  name: String
  disabled: Boolean
  releaseDate: DateTime
  uarts: Int
  gyroOne: Float
  gyroTwo: Float
  weightInGrams: Float
  cpu: String
  description: String
  dimensions: String
  holePattern: String
  voltageInputMin: Float
  voltageInputMax: Float
  osd: Boolean
  accelerometer: Boolean
  barometer: Boolean
  spektrumPort: Boolean
  usbInterface: Boolean
  ledWS2812Support: Boolean
  rssiPad: Boolean
  currentSensor: Boolean
  beeperPad: Boolean
  beeperOnBoard: Boolean
  antiVibrationGrommets: Boolean
  builtInReceiver: String
  postedBy: UserUpdateOneWithoutFlightControllersInput
  threeVoltOutput: Boolean
  fiveVoltOut: Boolean
  cameraControl: Boolean
}

input FlightControllerUpdateManyDataInput {
  name: String
  disabled: Boolean
  releaseDate: DateTime
  uarts: Int
  gyroOne: Float
  gyroTwo: Float
  weightInGrams: Float
  cpu: String
  description: String
  dimensions: String
  holePattern: String
  voltageInputMin: Float
  voltageInputMax: Float
  osd: Boolean
  accelerometer: Boolean
  barometer: Boolean
  spektrumPort: Boolean
  usbInterface: Boolean
  ledWS2812Support: Boolean
  rssiPad: Boolean
  currentSensor: Boolean
  beeperPad: Boolean
  beeperOnBoard: Boolean
  antiVibrationGrommets: Boolean
  builtInReceiver: String
  threeVoltOutput: Boolean
  fiveVoltOut: Boolean
  cameraControl: Boolean
}

input FlightControllerUpdateManyMutationInput {
  name: String
  disabled: Boolean
  releaseDate: DateTime
  uarts: Int
  gyroOne: Float
  gyroTwo: Float
  weightInGrams: Float
  cpu: String
  description: String
  dimensions: String
  holePattern: String
  voltageInputMin: Float
  voltageInputMax: Float
  osd: Boolean
  accelerometer: Boolean
  barometer: Boolean
  spektrumPort: Boolean
  usbInterface: Boolean
  ledWS2812Support: Boolean
  rssiPad: Boolean
  currentSensor: Boolean
  beeperPad: Boolean
  beeperOnBoard: Boolean
  antiVibrationGrommets: Boolean
  builtInReceiver: String
  threeVoltOutput: Boolean
  fiveVoltOut: Boolean
  cameraControl: Boolean
}

input FlightControllerUpdateManyWithoutPostedByInput {
  create: [FlightControllerCreateWithoutPostedByInput!]
  delete: [FlightControllerWhereUniqueInput!]
  connect: [FlightControllerWhereUniqueInput!]
  set: [FlightControllerWhereUniqueInput!]
  disconnect: [FlightControllerWhereUniqueInput!]
  update: [FlightControllerUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [FlightControllerUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [FlightControllerScalarWhereInput!]
  updateMany: [FlightControllerUpdateManyWithWhereNestedInput!]
}

input FlightControllerUpdateManyWithWhereNestedInput {
  where: FlightControllerScalarWhereInput!
  data: FlightControllerUpdateManyDataInput!
}

input FlightControllerUpdateWithoutPostedByDataInput {
  name: String
  disabled: Boolean
  releaseDate: DateTime
  uarts: Int
  gyroOne: Float
  gyroTwo: Float
  weightInGrams: Float
  cpu: String
  description: String
  dimensions: String
  holePattern: String
  voltageInputMin: Float
  voltageInputMax: Float
  osd: Boolean
  accelerometer: Boolean
  barometer: Boolean
  spektrumPort: Boolean
  usbInterface: Boolean
  ledWS2812Support: Boolean
  rssiPad: Boolean
  currentSensor: Boolean
  beeperPad: Boolean
  beeperOnBoard: Boolean
  antiVibrationGrommets: Boolean
  builtInReceiver: String
  threeVoltOutput: Boolean
  fiveVoltOut: Boolean
  cameraControl: Boolean
}

input FlightControllerUpdateWithWhereUniqueWithoutPostedByInput {
  where: FlightControllerWhereUniqueInput!
  data: FlightControllerUpdateWithoutPostedByDataInput!
}

input FlightControllerUpsertWithWhereUniqueWithoutPostedByInput {
  where: FlightControllerWhereUniqueInput!
  update: FlightControllerUpdateWithoutPostedByDataInput!
  create: FlightControllerCreateWithoutPostedByInput!
}

input FlightControllerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  disabled: Boolean
  disabled_not: Boolean
  releaseDate: DateTime
  releaseDate_not: DateTime
  releaseDate_in: [DateTime!]
  releaseDate_not_in: [DateTime!]
  releaseDate_lt: DateTime
  releaseDate_lte: DateTime
  releaseDate_gt: DateTime
  releaseDate_gte: DateTime
  uarts: Int
  uarts_not: Int
  uarts_in: [Int!]
  uarts_not_in: [Int!]
  uarts_lt: Int
  uarts_lte: Int
  uarts_gt: Int
  uarts_gte: Int
  gyroOne: Float
  gyroOne_not: Float
  gyroOne_in: [Float!]
  gyroOne_not_in: [Float!]
  gyroOne_lt: Float
  gyroOne_lte: Float
  gyroOne_gt: Float
  gyroOne_gte: Float
  gyroTwo: Float
  gyroTwo_not: Float
  gyroTwo_in: [Float!]
  gyroTwo_not_in: [Float!]
  gyroTwo_lt: Float
  gyroTwo_lte: Float
  gyroTwo_gt: Float
  gyroTwo_gte: Float
  weightInGrams: Float
  weightInGrams_not: Float
  weightInGrams_in: [Float!]
  weightInGrams_not_in: [Float!]
  weightInGrams_lt: Float
  weightInGrams_lte: Float
  weightInGrams_gt: Float
  weightInGrams_gte: Float
  cpu: String
  cpu_not: String
  cpu_in: [String!]
  cpu_not_in: [String!]
  cpu_lt: String
  cpu_lte: String
  cpu_gt: String
  cpu_gte: String
  cpu_contains: String
  cpu_not_contains: String
  cpu_starts_with: String
  cpu_not_starts_with: String
  cpu_ends_with: String
  cpu_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  dimensions: String
  dimensions_not: String
  dimensions_in: [String!]
  dimensions_not_in: [String!]
  dimensions_lt: String
  dimensions_lte: String
  dimensions_gt: String
  dimensions_gte: String
  dimensions_contains: String
  dimensions_not_contains: String
  dimensions_starts_with: String
  dimensions_not_starts_with: String
  dimensions_ends_with: String
  dimensions_not_ends_with: String
  holePattern: String
  holePattern_not: String
  holePattern_in: [String!]
  holePattern_not_in: [String!]
  holePattern_lt: String
  holePattern_lte: String
  holePattern_gt: String
  holePattern_gte: String
  holePattern_contains: String
  holePattern_not_contains: String
  holePattern_starts_with: String
  holePattern_not_starts_with: String
  holePattern_ends_with: String
  holePattern_not_ends_with: String
  voltageInputMin: Float
  voltageInputMin_not: Float
  voltageInputMin_in: [Float!]
  voltageInputMin_not_in: [Float!]
  voltageInputMin_lt: Float
  voltageInputMin_lte: Float
  voltageInputMin_gt: Float
  voltageInputMin_gte: Float
  voltageInputMax: Float
  voltageInputMax_not: Float
  voltageInputMax_in: [Float!]
  voltageInputMax_not_in: [Float!]
  voltageInputMax_lt: Float
  voltageInputMax_lte: Float
  voltageInputMax_gt: Float
  voltageInputMax_gte: Float
  osd: Boolean
  osd_not: Boolean
  accelerometer: Boolean
  accelerometer_not: Boolean
  barometer: Boolean
  barometer_not: Boolean
  spektrumPort: Boolean
  spektrumPort_not: Boolean
  usbInterface: Boolean
  usbInterface_not: Boolean
  ledWS2812Support: Boolean
  ledWS2812Support_not: Boolean
  rssiPad: Boolean
  rssiPad_not: Boolean
  currentSensor: Boolean
  currentSensor_not: Boolean
  beeperPad: Boolean
  beeperPad_not: Boolean
  beeperOnBoard: Boolean
  beeperOnBoard_not: Boolean
  antiVibrationGrommets: Boolean
  antiVibrationGrommets_not: Boolean
  builtInReceiver: String
  builtInReceiver_not: String
  builtInReceiver_in: [String!]
  builtInReceiver_not_in: [String!]
  builtInReceiver_lt: String
  builtInReceiver_lte: String
  builtInReceiver_gt: String
  builtInReceiver_gte: String
  builtInReceiver_contains: String
  builtInReceiver_not_contains: String
  builtInReceiver_starts_with: String
  builtInReceiver_not_starts_with: String
  builtInReceiver_ends_with: String
  builtInReceiver_not_ends_with: String
  postedBy: UserWhereInput
  threeVoltOutput: Boolean
  threeVoltOutput_not: Boolean
  fiveVoltOut: Boolean
  fiveVoltOut_not: Boolean
  cameraControl: Boolean
  cameraControl_not: Boolean
  AND: [FlightControllerWhereInput!]
  OR: [FlightControllerWhereInput!]
  NOT: [FlightControllerWhereInput!]
}

input FlightControllerWhereUniqueInput {
  id: ID
}

type Link {
  id: ID!
  createdAt: DateTime!
  description: String!
  url: String!
  postedBy: User
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type LinkConnection {
  pageInfo: PageInfo!
  edges: [LinkEdge]!
  aggregate: AggregateLink!
}

input LinkCreateInput {
  id: ID
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutLinksInput
  votes: VoteCreateManyWithoutLinkInput
}

input LinkCreateManyWithoutPostedByInput {
  create: [LinkCreateWithoutPostedByInput!]
  connect: [LinkWhereUniqueInput!]
}

input LinkCreateOneWithoutVotesInput {
  create: LinkCreateWithoutVotesInput
  connect: LinkWhereUniqueInput
}

input LinkCreateWithoutPostedByInput {
  id: ID
  description: String!
  url: String!
  votes: VoteCreateManyWithoutLinkInput
}

input LinkCreateWithoutVotesInput {
  id: ID
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutLinksInput
}

type LinkEdge {
  node: Link!
  cursor: String!
}

enum LinkOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
}

type LinkPreviousValues {
  id: ID!
  createdAt: DateTime!
  description: String!
  url: String!
}

input LinkScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [LinkScalarWhereInput!]
  OR: [LinkScalarWhereInput!]
  NOT: [LinkScalarWhereInput!]
}

type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}

input LinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LinkWhereInput
  AND: [LinkSubscriptionWhereInput!]
  OR: [LinkSubscriptionWhereInput!]
  NOT: [LinkSubscriptionWhereInput!]
}

input LinkUpdateInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutLinksInput
  votes: VoteUpdateManyWithoutLinkInput
}

input LinkUpdateManyDataInput {
  description: String
  url: String
}

input LinkUpdateManyMutationInput {
  description: String
  url: String
}

input LinkUpdateManyWithoutPostedByInput {
  create: [LinkCreateWithoutPostedByInput!]
  delete: [LinkWhereUniqueInput!]
  connect: [LinkWhereUniqueInput!]
  set: [LinkWhereUniqueInput!]
  disconnect: [LinkWhereUniqueInput!]
  update: [LinkUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [LinkUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [LinkScalarWhereInput!]
  updateMany: [LinkUpdateManyWithWhereNestedInput!]
}

input LinkUpdateManyWithWhereNestedInput {
  where: LinkScalarWhereInput!
  data: LinkUpdateManyDataInput!
}

input LinkUpdateOneRequiredWithoutVotesInput {
  create: LinkCreateWithoutVotesInput
  update: LinkUpdateWithoutVotesDataInput
  upsert: LinkUpsertWithoutVotesInput
  connect: LinkWhereUniqueInput
}

input LinkUpdateWithoutPostedByDataInput {
  description: String
  url: String
  votes: VoteUpdateManyWithoutLinkInput
}

input LinkUpdateWithoutVotesDataInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutLinksInput
}

input LinkUpdateWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput!
  data: LinkUpdateWithoutPostedByDataInput!
}

input LinkUpsertWithoutVotesInput {
  update: LinkUpdateWithoutVotesDataInput!
  create: LinkCreateWithoutVotesInput!
}

input LinkUpsertWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput!
  update: LinkUpdateWithoutPostedByDataInput!
  create: LinkCreateWithoutPostedByInput!
}

input LinkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  postedBy: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [LinkWhereInput!]
  OR: [LinkWhereInput!]
  NOT: [LinkWhereInput!]
}

input LinkWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFlightController(data: FlightControllerCreateInput!): FlightController!
  updateFlightController(data: FlightControllerUpdateInput!, where: FlightControllerWhereUniqueInput!): FlightController
  updateManyFlightControllers(data: FlightControllerUpdateManyMutationInput!, where: FlightControllerWhereInput): BatchPayload!
  upsertFlightController(where: FlightControllerWhereUniqueInput!, create: FlightControllerCreateInput!, update: FlightControllerUpdateInput!): FlightController!
  deleteFlightController(where: FlightControllerWhereUniqueInput!): FlightController
  deleteManyFlightControllers(where: FlightControllerWhereInput): BatchPayload!
  createLink(data: LinkCreateInput!): Link!
  updateLink(data: LinkUpdateInput!, where: LinkWhereUniqueInput!): Link
  updateManyLinks(data: LinkUpdateManyMutationInput!, where: LinkWhereInput): BatchPayload!
  upsertLink(where: LinkWhereUniqueInput!, create: LinkCreateInput!, update: LinkUpdateInput!): Link!
  deleteLink(where: LinkWhereUniqueInput!): Link
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  flightController(where: FlightControllerWhereUniqueInput!): FlightController
  flightControllers(where: FlightControllerWhereInput, orderBy: FlightControllerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FlightController]!
  flightControllersConnection(where: FlightControllerWhereInput, orderBy: FlightControllerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FlightControllerConnection!
  link(where: LinkWhereUniqueInput!): Link
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Subscription {
  flightController(where: FlightControllerSubscriptionWhereInput): FlightControllerSubscriptionPayload
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  flightControllers(where: FlightControllerWhereInput, orderBy: FlightControllerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FlightController!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  links: LinkCreateManyWithoutPostedByInput
  votes: VoteCreateManyWithoutUserInput
  flightControllers: FlightControllerCreateManyWithoutPostedByInput
}

input UserCreateOneWithoutFlightControllersInput {
  create: UserCreateWithoutFlightControllersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLinksInput {
  create: UserCreateWithoutLinksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFlightControllersInput {
  id: ID
  name: String!
  email: String!
  password: String!
  links: LinkCreateManyWithoutPostedByInput
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateWithoutLinksInput {
  id: ID
  name: String!
  email: String!
  password: String!
  votes: VoteCreateManyWithoutUserInput
  flightControllers: FlightControllerCreateManyWithoutPostedByInput
}

input UserCreateWithoutVotesInput {
  id: ID
  name: String!
  email: String!
  password: String!
  links: LinkCreateManyWithoutPostedByInput
  flightControllers: FlightControllerCreateManyWithoutPostedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
  votes: VoteUpdateManyWithoutUserInput
  flightControllers: FlightControllerUpdateManyWithoutPostedByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutFlightControllersInput {
  create: UserCreateWithoutFlightControllersInput
  update: UserUpdateWithoutFlightControllersDataInput
  upsert: UserUpsertWithoutFlightControllersInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutLinksInput {
  create: UserCreateWithoutLinksInput
  update: UserUpdateWithoutLinksDataInput
  upsert: UserUpsertWithoutLinksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFlightControllersDataInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateWithoutLinksDataInput {
  name: String
  email: String
  password: String
  votes: VoteUpdateManyWithoutUserInput
  flightControllers: FlightControllerUpdateManyWithoutPostedByInput
}

input UserUpdateWithoutVotesDataInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
  flightControllers: FlightControllerUpdateManyWithoutPostedByInput
}

input UserUpsertWithoutFlightControllersInput {
  update: UserUpdateWithoutFlightControllersDataInput!
  create: UserCreateWithoutFlightControllersInput!
}

input UserUpsertWithoutLinksInput {
  update: UserUpdateWithoutLinksDataInput!
  create: UserCreateWithoutLinksInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  links_every: LinkWhereInput
  links_some: LinkWhereInput
  links_none: LinkWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  flightControllers_every: FlightControllerWhereInput
  flightControllers_some: FlightControllerWhereInput
  flightControllers_none: FlightControllerWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote {
  id: ID!
  link: Link!
  user: User!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  id: ID
  link: LinkCreateOneWithoutVotesInput!
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateManyWithoutLinkInput {
  create: [VoteCreateWithoutLinkInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutLinkInput {
  id: ID
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateWithoutUserInput {
  id: ID
  link: LinkCreateOneWithoutVotesInput!
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
}

type VotePreviousValues {
  id: ID!
}

input VoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  link: LinkUpdateOneRequiredWithoutVotesInput
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateManyWithoutLinkInput {
  create: [VoteCreateWithoutLinkInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutLinkInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutLinkInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateWithoutLinkDataInput {
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithoutUserDataInput {
  link: LinkUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutLinkDataInput!
}

input VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutUserDataInput!
}

input VoteUpsertWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutLinkDataInput!
  create: VoteCreateWithoutLinkInput!
}

input VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutUserDataInput!
  create: VoteCreateWithoutUserInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  link: LinkWhereInput
  user: UserWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`
      }
    