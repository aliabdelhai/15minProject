const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/fs-15!!", { useNewUrlParser: true, useUnifiedTopology: true })
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const Schema = mongoose.Schema
const fsSchema = new Schema({
    word: String
})

const Word = mongoose.model("Word", fsSchema)


app.get('/words' , async (req, res) => {
    const words = await Word.find({})
    res.send(words)

})

app.post('/word', async (req, res) => {
    const word = new Word(req.body);
    await word.save()
    res.send(word) 
})



const PORT = 8080
app.listen(PORT, function(){
    console.log(`Running server on port ${PORT}`)
})

