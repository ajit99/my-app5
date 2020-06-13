var faker = require('faker');
var database = { products: [] };
for (let i=1; i<=100; i++) {
  database.products.push({
    id: i,
    name: faker.name.firstName()+" "+faker.name.lastName(),
    title: faker.name.jobTitle(),
    contact: faker.phone.phoneNumber()
  });
}
console.log(JSON.stringify(database));