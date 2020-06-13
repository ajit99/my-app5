var express = require('express'),
    cors = require('cors'),
    app = express(),
    faker = require('faker');

app.set('port', process.env.PORT || 3000);

app.use(cors());

var databaseEmployees = { employees: [] };
for (let i=1; i<=100; i++) {
  databaseEmployees.employees.push({
    id: i,
    name: faker.name.firstName()+" "+faker.name.lastName(),
    title: faker.name.jobTitle(),
    contact: faker.phone.phoneNumber()
  });
}

app.get('/employees', function(req, res) {
    res.json(JSON.parse(JSON.stringify(databaseEmployees.employees)))
});



var databaseProducts = { products: [] };
for (let i=1; i<=100; i++) {
  databaseProducts.products.push({
    id: i,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    rating: Math.floor(Math.random() * 5 + 1)
  });
}


app.get('/products', function(req, res) {
    res.json(JSON.parse(JSON.stringify(databaseProducts.products)))
});

var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
