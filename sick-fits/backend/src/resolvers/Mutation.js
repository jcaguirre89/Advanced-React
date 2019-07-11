/*A method for every mutation defined in '../schema.graphql'
args:
  - parent: parent schema
  - args: object. arguments passed to query
  - ctx: context
  - info: additional info on graphql query

Each method describes the logic that gets executed whenever
the method gets called. this can be creating a new instace,
writing to a DB, etc.

Then then return whatever the mutation is expecting.

*/

const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if they are logged in

    // get from Prisma db (API defined in prisma.graphql)
    // methods available via the context

    //createItem returns a Promise
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info)

    return item;
  }
};

module.exports = Mutations;
