const server = require('./server.js')

const PORT = process.env.PORT || 8008;

server.listen(PORT, () => console.log(`....listening on port ${PORT}...`))