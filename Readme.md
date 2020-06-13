Options  to start the server as follows:-

Option 1: Here the pagination will not work,but both of the resposes will be servered.

node  prepareFakeEmployeeAndProductData.js
 
Option 2: Here pagination will work, but at a time only one of the json will be rendered.

json-server products.json
json-server employees.json

Option 3: Here more changes will be needed on angular code,but both of the resposes will be servered.

json-server  jsonServer.js