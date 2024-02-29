// CommonJs
const fastify = require('fastify')({
  logger: true
})
const generator = require('generate-password')

fastify.get('/', async (request, reply) => {
  var length = request.query['length'] || 32
  if (length) {
    length = parseInt(length)
  }
  let parameter = {
    length,
    numbers: true || request.query['numeric'] == '1',
    symbols: false || request.query['symbol'] == '1',
    lowercase: true || request.query['lower'] == '1',
    uppercase: true || request.query['upper'] == '1',
    excludeSimilarCharacters: true,
    strict: true,
  }
  
  var passwords = generator.generate(parameter)
  console.log(passwords);
  reply.type('application/json').code(200)
  return { 'value': passwords }
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})