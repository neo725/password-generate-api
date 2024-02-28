// CommonJs
const fastify = require('fastify')({
  logger: true
})
const generator = require('generate-password')

fastify.get('/', async (request, reply) => {
  var passwords = generator.generate({
    length: 20,
    numbers: true,
    symbols: false,
    lowercase: true,
    uppwercase: false,
    excludeSimilarCharacters: true,
    strict: true,
  })
  console.log(passwords);
  reply.type('application/json').code(200)
  return { 'value': passwords }
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})