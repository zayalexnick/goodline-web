const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({ static: path.resolve('dist') });

server
    .use(middlewares)
    .use(jsonServer.bodyParser)
    .use('/api', router);

server.use('/', (req, res) => {
	res.sendFile(path.resolve('dist', 'index.html'));
});

server.listen(5555, () => console.log(`Running`));