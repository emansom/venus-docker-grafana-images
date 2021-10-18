import Server from '../lib'
const server = new Server()

server.start()
    .catch(err => {
        console.log(err)
        process.exit(-1)
    })
