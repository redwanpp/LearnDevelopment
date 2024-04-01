const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

const books = [
    {
        id: '1',
        name: 'X',
        price: 500
    },
    {
        id: '2',
        name: 'Y',
        price: 5000
    },
    {
        id: '3',
        name: 'Z',
        price: 1500
    },
    {
        id: '4',
        name: 'A',
        price: 5100
    },
    {
        id: '5',
        name: 'B',
        price: 5200
    }
]

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/books', (req, res) => {
    if(req.query.show === 'all') {
        return res.json(books);
    }

    if (req.query.price == '500') {
        const result = books.filter(book => book.price <= 500);
        res.json(result);
    }

    if (req.query.price == '5100') {
        const result = books.filter(book => book.price <= 5100);
        res.json(result);
    }

    return res.json(books);
})

app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);

    res.json(books);
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});