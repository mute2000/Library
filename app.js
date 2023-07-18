const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.json());

// 创建MySQL数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'book_management'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/books', (req, res) => {
  connection.query('SELECT * FROM books', (err, results) => {
    if (err) {
      res.status(500).send({ error: 'Error fetching books' });
    } else {
      res.send(results);
    }
  });
});

app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  connection.query('SELECT * FROM books WHERE id = ?', [bookId], (err, results) => {
    if (err) {
      res.status(500).send({ error: 'Error fetching book' });
    } else {
      res.send(results[0]);
    }
  });
});

app.post('/books', (req, res) => {
  const newBook = req.body;
  connection.query('INSERT INTO books SET ?', newBook, (err, results) => {
    if (err) {
      res.status(500).send({ error: 'Error creating book' });
    } else {
      res.status(201).send({ id: results.insertId, ...newBook });
    }
  });
});

app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
  connection.query('UPDATE books SET ? WHERE id = ?', [updatedBook, bookId], (err, results) => {
    if (err) {
      res.status(500).send({ error: 'Error updating book' });
    } else {
      res.send({ id: bookId, ...updatedBook });
    }
  });
});

app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  connection.query('DELETE FROM books WHERE id = ?', [bookId], (err, results) => {
    if (err) {
      res.status(500).send({ error: 'Error deleting book' });
    } else {
      res.send({ message: 'Book deleted' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});