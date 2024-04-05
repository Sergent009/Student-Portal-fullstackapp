import db from '../database.js'

export const registerStudent = (data, result) => {
    db.query('insert into student(s_firstname, s_lastname, s_semester, s_email, s_password) values(?, ?, ?, ?, ?)',
    [data.s_firstname, data.s_lastname, data.s_semester, data.s_email, data.s_password], (err, results) => {
    if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results)
        }
    }) 
}

export const loginStudent = async (email, password, res) => {
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
            const lastName = result[0].s_lastname.charAt(0)
            res.status(200).send({ id: id, firstName: firstName, lastName: lastName }); // Sending id back as JSON
        } else {
            console.log('email or password is not found!');
            res.status(404).send('Email or password is not found');
        }
    } catch (err) {
        console.log('Error Ocured while executing the login query !', err);
        res.status(500).send('Error!');
    }
}

export const updateStudent = (id, firstname, lastname, semester, email, password, res) => {
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
}