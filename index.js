const http = require('http');
const httpProxy = require('http-proxy');

const ports = [
    3000,
    4001,
    4002,
    4003,
    4004,
    4005
];

const proxy = httpProxy.createProxyServer();

ports.forEach(port => {
    http.createServer((req, res) => {
        proxy.web(req, res, {
            target: 'http://10.0.2.2:' + port
        });
    }).listen(port, () => console.log('listening to port ' + port));
});