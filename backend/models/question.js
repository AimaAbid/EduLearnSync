var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var questionSchema = new Schema({
	moduleId:String ,
	questionText:String,
    options:{},
    correctAnswer: String,
    insight:String
	
    
	
});

var question = mongoose.model("Question", questionSchema);

module.exports = question;

  