const express = require("express");
const port = 8888;
const app = express();


app.get('/',(req,res)=>{
	//throw new Error('custom error');
	response.send('hello from express server!');

});

app.use((err,req,res,next)=>{
	console.log(err);
	res.status('500').send('Server errror');
});

app.listen(port,(err)=>{
	if(err){
		console.log("something bad happened",err);
	}
});