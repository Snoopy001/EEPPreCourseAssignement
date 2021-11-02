const express = require('express');
const app = express();
var fs = require('fs');
var path = require('path');
const PORT = process.env.PORT || 3000;
const strToDisplay = ["Logic will get you from A to B. Imagination will take you everywhere.",
"There are 10 kinds of people. Those who know binary and those who don't.",
"It's not that I'm so smart, it's just that I stay with problems longer.",
"It is pitch dark. You are likely to be eaten by a grue.",
"There are two ways of constructing a software design. One way is to make it " +
"so simple that there are obviously no deficiencies and the other is to make " +
"it so complicated that there are no obvious deficiencies."
]



app.use(express.static(path.join(__dirname, "/public")));


app.get('/',(req, res) => {
	fs.readFile('./index.html', function(error, content) {
		
		if (error) {
			res.writeHead(500);
			res.end();
		}
		else {
			x = Math.floor(Math.random() * (strToDisplay.length));
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(content, 'utf-8');
			res.end('<h1 class="center">' + strToDisplay[x] + "</h1>", 'utf-8');
		}
	});

})
app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))
