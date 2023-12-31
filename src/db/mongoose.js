const mongoose = require('mongoose')

const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
/* ,{
    useNewUrlParser: true,
    useCreateIndex: true
}) */
/* 
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim : true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age : {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const me = new User ({
   
    name: 'Sahasra',
   
    email: 'Sahasra@gmail.com'
})

me.save().then((me)=> {
    console.log('Data saved', me)
})
.catch((error) => {
    console.log('Error! ' , error)
}) */



const Task = mongoose.model('tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    },

    completed: {
        type: Boolean,
        default: false,
    }
})

const myTask = new Task({

    description: 'test  '
})

myTask.save().then((task) => {
    console.log('Task saved', task)
})
    .catch((error) => {
        console.log('Error! ', error)
    })