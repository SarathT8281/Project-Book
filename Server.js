const express = require('express')
const connection = require('./Mongoos')
const app = express()
const cors = require ('cors')
const router = require('./Back-End/Router')
const dotenv = require ('dotenv')


connection ()




app.use (cors())
app.use(express.json())
app.use('/',router)
dotenv.config()





app.listen(port=3055,()=>{
    console.log(`Server Running ${port}`)
});

