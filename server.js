//include Node.js
const express = require('express');

//set port
const port = 3000;

const app = express();

app.get('/',(req,res)=>{
	res.send(`
		<h1>Here's my home page</h1>
		<p>Welcome to Express!</P>

  `);

});

app.get('/about',(req,res)=>{
	res.send(`
		<h1>Here's David's Express About Page</h1>
		<p>Welcome to Express!</P>

  `);

});


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
