require('dotenv').config();
import { home } from 'controllers/home/home.controller';
import { default as bodyParser, default as express } from 'express';

const app = express();
const port = process.env.PORT || 8080; // default port to listen

app.use(bodyParser.json());

app.get('/', home);

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
