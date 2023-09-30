import Mongoose from "mongoose";
const Schema = Mongoose.Schema;
const todoSchema = new Schema ({
    title:{
        type: String,
        required:true
    },
    content:String
},{timestamps:true});
const Todo=Mongoose.model('Todo',todoSchema);  //cluster collection name 'todos'
export default Todo;