import { registerStudent, loginStudent, updateStudent } from "../models/model.js"

export const registerUser = (req, res) => {
    const data = req.body
    registerStudent(data, (err, results) => {
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}

export const loginUser = (req, res) => {
    const { email, password } = req.body;
    loginStudent(email, password, res, (err, results) => {
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}

export const updateUser = (req, res) => {
    const id = req.params.id
    const {firstname, lastname, semester, email, password} = req.body
    updateStudent(id, firstname, lastname, semester, email, password, res, (err, results) => {
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    }) 
    }
