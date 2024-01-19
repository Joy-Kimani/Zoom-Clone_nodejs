const express = require('express');
const app = express();
const {v4: uuidv4} = require('uuid'); 
const server = require('http').Server(app);
const PORT = 3030;

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.redirect('/${uuidv4()}'); //uuidv4 stands for a unique id 
})

app.get('/:room', (req,res) => {
    res.render('room', { roomId: req.params.room})
})


server.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));