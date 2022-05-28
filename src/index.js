const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const postsRoutes = require('./routes/posts.routes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(postsRoutes);

app.listen(4000)
console.log('server en puerto 4000')