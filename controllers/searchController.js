// const client = require("../elasticSearch/esConnection.js");
// let search = (req, res) => {
//   client.search({
//     index: 'post',
//     type: 'post',
//     body: {
//       "query": {
//         "match_phrase": {
//           "key": {
//             query: req.body.key,
//             slop: 100
//           }
//         }
//       }
//     }
//   }).then(function (resp) {
//     console.log("Successful query! Here is the response:", resp);
//     res.send(resp);
//   }, function (err) {
//     console.trace(err.message);
//     res.send(err.message);
//   });
// };

const searchModel = require("../models/searchModel.js");

let search = async (req , res)=>
{
    console.log(req.body);
    // let category = req.body.cat;
    let searchQuery = req.body.q;
    let searchresult = await searchModel.getSearchedPosts(searchQuery);
    let pageTitle = "searchResult";
    let data = {
      pageTitle,
      searchresult
    };
    res.render("search-results.ejs" , { data });
}


module.exports =
{
  search 
}