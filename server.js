const http = require('http');
const url = require('url');

const PORT = 3000;
const login = 'is-31fiot-23-066';
const link = `http://localhost:${PORT}/?login=${login}`;

http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (query.login === login) {
        res.write(`<h2>Персональні дані студента:</h2>
                   <ul>
                       <li><strong>Прізвище:</strong> Волошин</li>
                       <li><strong>Ім’я:</strong> Артем</li>
                       <li><strong>Курс:</strong> 2</li>
                       <li><strong>Група:</strong> ІС-31</li>
                   </ul>`);
    } else {
        res.write(`<p>Невірний або відсутній логін. Спробуйте ще раз.</p>`);
    }

    res.end();
}).listen(PORT, () => {
    console.log(`Сервер запущено: ${link}`);
});
