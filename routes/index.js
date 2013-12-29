var animal_data = require('../data/animals.json');

exports.animals = function(req,res) {
  data=animal_data.animals;
  for(var key in data) {
    data[key].speak = undefined;
  }
  if(req.route.path.match(/^\/v1/)) {
    res.status(200).json(data);
  } else {
    res.render('index',{ animals:data, pageID: 'animals', title: 'animals'});
  }
}
exports.animal_by_name = function(req,res) {
  data={};
  data[req.params.name]=animal_data.animals[req.params.name];
  console.log(data);
  if(!animal_data.animals[req.params.name]) {
    res.status(400).send("animal not found");
  } else {
    if(req.route.path.match(/^\/v1/)) { // api call
      data.speak = undefined;
      res.status(200).json(data);
    } else {
      if(req.route.path.match(/speak$/)) { // render html
        data[req.params.name]["speak"] = "1"; // "speak" page (embedded audio)
      } else {
        data[req.params.name]["speak"] = undefined; // non "speak" page (with link to "speak" page)
      }
      res.render('index',{ animals:data, pageID: 'animals'});
    }
  }
}
