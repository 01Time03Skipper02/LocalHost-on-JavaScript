const http = require('http');

const html = `
   <!doctype>
   <html>
      <head>
         <meta charset="utf-8">
         <title>Основы Node.js</title>
         <link rel="stylesheet" href="app.css">
      </head>

      <body>
         <h1>Основы Node.js</h1>
         <button>Click me!</button>
         <script src="app.js"></script>
      </body>
   </html>
`;
const css = `
   body {
      margin: 0;
      padding: 0;
      text-align: center;
   }

   h1 {
      background-color: green;
      color: white;
      padding: .5em;
      font-family: 'Consolas';
   }
`;
const js = `
   const button = document.querySelector('button');
   button.addEventListener('click', event => alert('Node.js is working'));
`;

http.createServer((req, res) => {
   if(req.url == '/'){
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(html);
   } else if (req.url == '/app.js') {
      res.writeHead(200, {'Content-Type' : 'text/javascript'});
      res.end(js);
   } else if (req.url == '/app.css') {
      res.writeHead(200, {'Content-Type' : 'text/css'});
      res.end(css);
   } else {
      res.writeHead(404, {'Content-Type' : 'text/plain'});
      res.end('ERROR');
   }
}).listen(3000, () => console.log('Сервер работает!'));
