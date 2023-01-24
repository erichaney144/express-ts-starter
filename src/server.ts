import { default as bodyParser, default as express } from 'express';

const app = express();
const port = process.env.PORT || 8080; // default port to listen

app.use(bodyParser.json());

app.get('/', async (req, res) => {
	res.status(200).send('Hello World');
});

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
