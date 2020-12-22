const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs', expressHbs({
//   layoutsDir: 'views/layouts/',
//   defaultLayout: 'main-layout',
//   extname: 'hbs'
// }));
app.set('view engine', 'ejs');
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.get('/grid', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'holy-grailes.html'));
})

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page not found' });
})

app.listen(3000);
