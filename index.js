const {
	addMockFunctionsToSchema,
	makeExecutableSchema,
} = require('graphql-tools');
const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const typeDefs = gql(
	fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')
);

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

const server = new ApolloServer({
	schema,
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
