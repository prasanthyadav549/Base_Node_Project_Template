const express = require('express')
const {ServerConfig,Logger } = require('./config')
const apiRoutes = require('./routes')
const app = express()

app.use('/api', apiRoutes)
app.listen(ServerConfig.PORT, () => {
      console.log("successfully started the port number hello world")
      Logger.info("Successfully started the server","root",{});
})