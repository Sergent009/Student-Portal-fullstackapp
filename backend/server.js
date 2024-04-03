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

app.post('/loginST', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await new Promise((resolve, reject) => {
            db.query('select * from student where s_email = ? and s_password = ?', [email, password], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        if (result.length > 0) {
            console.log('email and password found!');
            const id = result[0].id;
            const firstName = result[0].s_firstname.charAt(0)
            res.status(200).send({ id: id, firstName: firstName }); // Sending id back as JSON
        } else {
            console.log('email or password is not found!');
            res.status(404).send('Email or password is not found');
        }
    } catch (err) {
        console.log('Error Ocured while executing the login query !', err);
        res.status(500).send('Error!');
    }
});

app.put('/updateST/:id', (req, res) => {
    const id = req.params.id
    const {firstname, lastname, semester, email, password} = req.body
    db.query('update student set s_firstname = ?, s_lastname = ?, s_semester = ?, s_email = ?, s_password = ? where id = ?',
    [firstname, lastname, semester, email, password, id], (err,result) => {
        if(err){
            console.log('error occuring while updating the data !.')
            res.sendStatus(500)
        }
        else{
            console.log('successfully updated the data.')
            res.sendStatus(200)
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})