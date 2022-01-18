const express = require('express')

const app = express()

app.get('/skills', (req, res) => {
    res.send({
        teste: 'criando api',
        tecnologia: 'node express'
    })
})


app.listen(8080, () => console.log(`server running`))
    //tap "node ." to start server