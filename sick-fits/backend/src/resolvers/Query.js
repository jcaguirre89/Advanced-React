/*A method for every query defined in '../schema.graphql'
args:
  - parent: parent schema
  - args: arguments passed to query
  - ctx: context (?)
  - info: additional info on graphql query

Each method describes the logic that gets executed whenever
the method gets called. this can be hitting a REST API, reading
a CSV file, memory, etc.

*/

const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db')
  /*
  async items(parent, args, ctx, info) {
    const items = await ctx.db.query.items({
      data: {
        ...args
      }
    }, info)

  return items
   }
  */

}

module.exports = Query;
