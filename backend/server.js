const express = require('express')
const cors = require('cors')
const db = require('./database.js')
const app = express()

const port = process.env.PORT || 3003

app.use(cors())
app.use(express.json())

app.post('/regST', (req, res) => {
    data = req.body
    db.query('insert into student(s_firstname, s_lastname, s_semester, s_email, s_password) values(?, ?, ?, ?, ?)', 
    [data.s_firstname, data.s_lastname, data.s_semester, data.s_email, data.s_password], (err, result) => {
        if(err){
            console.log('Error Ocured while executing the register query !', err)
            res.status(500).send('Error!')
        }
        else{
            res.send(result)
        }
    })
})

app.post('/loginST', (req, res) => {
    const {email, password} = req.body
    db.query('select * from student where s_email = ? and s_password = ?',
    [email, password], (err, result) => {
        if(err){
            console.log('Error Ocured while executing the login query !', err)
            res.status(500).send('Error!')
        }
        else{
            console.log('successfully checked email and password')

            if(result.length > 0){
                console.log('email and password found!')
                res.status(200).send(result[0].s_firstname)
                const myid = result[0].id
                console.log(myid)
                // res.redirect(`/Home/${myid}`);
            }
            else{
                console.log('email or password is not found!')
                res.status(404)
            }
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})