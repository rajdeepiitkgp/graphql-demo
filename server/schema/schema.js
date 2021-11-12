const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');
const _ = require('lodash');
const books = [
  { name: 'book A', genere: 'genere A', id: '1' },
  { name: 'book B', genere: 'genere B', id: '2' },
  { name: 'book C', genere: 'genere C', id: '3' },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genere: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        //code to get data from db
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
