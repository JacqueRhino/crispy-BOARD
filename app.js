// server.mjs

var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var vehiclePlates = JSON.parse(fs.readFileSync(__dirname + "/vehicle_plates.json"));
var idx = 1;
vehiclePlates.forEach(vp => {
  vp.id = idx++;
});
const { url } = require("inspector");
const { error } = require("console");

http.createServer(function(req, res) {
  if(req.url === "/" || req.url === "/index.html")
  res.writeHead(200, {'Content-Type': 'text/html'});
  var html = fs.readFileSync("index.html", 'utf-8');
  res.end(html);
}).listen(3000);

console.log("Listening on port 3000...");