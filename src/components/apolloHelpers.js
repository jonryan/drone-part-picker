// import update from 'immutability-helper'
let _ = require('underscore')

// export const mergePaginatedData = (connectionPath, previousData, newData) => (
//   update(
//     previousData,
//     _.set({}, connectionPath, {
//       $merge: _.get(newData, connectionPath),
//       edges: {
//         $push: _.get(newData, connectionPath).edges
//       }
//     })
//   )
// )

export const transformGraphQLErrors = userErrors => (
  _.chain(userErrors).map('message').toPlainObject().value()
)
