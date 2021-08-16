
const client = require('./esConnection.js');

client.indices.create({  
  index: 'articles'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("Create index response: ",resp);
  }
});