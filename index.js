const express = require("express");
const cors = require("cors")
const ytdl = require("ytdl-core")
const app = express()

app.use(cors())

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/download', (req,res)=>{
    var URL = req.query.URL

    res.header('Content-Disposition', 'attachment; filename="video.mp3')

    ytdl(URL, {
        format: 'mp3'
    }).pipe(res)
})

app.listen(3000, ()=> {
    console.log('server rodando na porta 3000')
})