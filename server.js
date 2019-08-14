const express=require("express");
const zomato = require("zomato");
var bodyparser= require("body-parser");
const app= express();
app.use(bodyparser.urlencoded({extended: true}));

const user=zomato.createClient({
    userKey:"70f1de8cd147f576208e6ec6e8f507a4"
});
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/home.html")
})
app.post("/location",(req,res)=>{
    console.log("code is running.....");
    var result=[]
    var city=req.body.city
    user.getLocations({query:city},(err,data)=>{
        if (err){
            res.send("<center><h1>404 city Not Found Please Try Again...")
        }
        else{
            data=JSON.parse(data)
            if (data.location_suggestions[0]!=undefined){
                var lat=data.location_suggestions[0].latitude
                var lon=data.location_suggestions[0].longitude
                user.getGeocode({lat:lat,lon:lon},(err,data2)=>{
                    data2=JSON.parse(data2).nearby_restaurants
                    for (var i of data2){
                        var rdic={}
                        rdic["Name"]=i.restaurant.name
                        rdic["Address"]=i.restaurant.location.address
                        rdic["cuisines"]=i.restaurant.cuisines
                        rdic["average_cost_for_two"]=i.restaurant.average_cost_for_two
                        rdic["price_range"]=i.restaurant.price_range
                        rdic["Image"]=i.restaurant.featured_image
                        rdic["has_online_delivery"]=i.restaurant.has_online_delivery
                        rdic["url"]=i.restaurant.url
                        result.push(rdic)
                    }
                    // res.send(data2)
                    console.log(result);
                    
                    res.render(__dirname+"/views/zomato.ejs",{data:result})
                })
            }else{
                res.send("<center><h1>404 city Not Found Please Try Again...")
            }
            // res.send({lat:lat,lon:lon,data:data})
        }
    })
})

// listen for requests :)
const listener = app.listen(3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
