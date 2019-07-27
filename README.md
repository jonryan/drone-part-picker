## Deployment
There are 3 main pieces that get deployed
1. FE - The app is built doing a `yarn build` which populates the `build` directory, that is what is deployed. It is deployed to an Amazon S3 bucket and public routing is turned on to access it directly: http://drone-part-picker.s3-website-us-east-1.amazonaws.com/products/flight-controller/1. 
2. Node API - This is the `/server` directory and it's deployed an an amazon EC2 Linux AMI. I expose public access to port 80, and thenr un nginx on the box to direct port `80` to port `4000` where the server is set to run at. 
3. Prisma.io ORM/DB - This was deployed via a CloudFormation template that I got from [this tutorial](https://www.prisma.io/tutorials/deploy-prisma-to-aws-fargate-ct14/). I know that a public URL is exposed and that's what I piont my NodeAPI at. 


## Technologies Involved and Documentation
### FE & BE
 * [GraphQL](https://graphql.org/learn/) 
 * [graphql-config](https://github.com/prisma/graphql-config) - Used to tell my IDE about my GraphQL Implementation
### API/Back-End:

 * [Prisma.io](https://www.prisma.io/docs/1.34/) - Used as the ORM & Database layer. It scans the [datamodel.prisma](https://github.com/coreysnyder04/drone-part-picker/blob/master/server/prisma/datamodel.prisma) file and generates a client for interfacing with the database.
 * [GraphQL-Yoga](https://github.com/prisma/graphql-yoga) - A Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience. Written and managed by Prisma
   * [GraphQL Yoga Example Apps](https://github.com/prisma/graphql-yoga/tree/master/examples)
### FE
 * ReactJS - Create React App
 * [Apollo](https://www.apollographql.com/docs/)
   * [React Apollo](https://github.com/apollographql/react-apollo) - React integration for Apollo Client. In this app we `import {Mutation, Query} from 'react-apollo'` in order to connect our components to the GraphQL Server. 
     * [Apollo Client](https://github.com/apollographql/apollo-client) - A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server
     * [Apollo Boost](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost) - The fastest, easiest way to get started with Apollo Client!
     * [Apollo-link-http](https://www.npmjs.com/package/apollo-link-http) - Get GraphQL results over a network using HTTP fetch
     
### Example Projects
##### API
 * [Realworld-GraphQL](https://github.com/thebergamo/realworld-graphql) - GraphQL NodeJS Server Example
 * [Realworld-NodeJS](https://github.com/gothinkster/node-express-realworld-example-app)
 * [Prisma Nexus Example](https://github.com/Kandelborg/KATS)
 
##### Front-End
 * [Realworld-React-Apollo](https://github.com/dostu/react-apollo-realworld-example-app)
 * [Realworld-React-Redux](https://github.com/gothinkster/react-redux-realworld-example-app)
 * 
 
### Where to talk to others:
 * [Prisma.io Spectrum Chat](https://spectrum.chat/prisma?tab=posts)
 * [Prisma Slack Chat](https://slack.prisma.io/)
   * Prisma 
   * GraphQL-Yoga
 * 
 
### Other Sources
 * [DB Diagram](https://dbdiagram.io/d/5d1a2279ced98361d6dc385d)
 * [How To GraphQL](https://www.howtographql.com/) - Where I learned most of what I used to get started on both the FE & BE. 
 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
