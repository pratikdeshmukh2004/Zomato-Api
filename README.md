# Zomato-API

In this project, I have used Zomato-API (https://developers.zomato.com/) to get the details of restaurants present in a particular location. You'll be asked a location to fetch the details like **average cost for two people, price ranges, has online delivery or not, and cuisines** of that location. 

## Requirements

### NodeJS and npm 

If you're using Linux-based OS, install the latest version of Nodejs and npm, by typing the following commands on your terminal.
```
sudo apt update
sudo apt install build-essential apt-transport-https lsb-release ca-certificates curl

```

Then, for the **Latest** release (version 12), add this PPA, by typing the following command on your terminal
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install nodejs
```

Now, you need to install necessary dependencies using npm (node-package-manager), open your termial, and first type <br>
`npm init` to initialize **package.json** file. Then, type <br>
```
npm install body-parser ejs express iplocation path public-ip zomato --save
```

### How to Run?

Now, navigate to `server.js` file on your terminal, and run the following command to start your localhost server 
```
node server.js
```

### Endpoints 

- **/categories** <br>
  - This endpoint presents you a list of all restaurants categorized under a particular restaurant type.

- **/geocode** <br>
  - This endpoint takes **latitude and longitude** to get the list of popular Cuisines, Foodie, Nightlife-index and nearby restaurants using your public IP address.

- **/search** <br>
  - This endpoint takes a location, and gives you the precise restaurant suggestions, using `/geocode` endpoint.

Now, open your browser, and type <br>
http://localhost:{PORT}/{YOUR_ENDPOINT} to get the required details.

**Although, this node-app has been hosted. You can try it by clicking on the following URL:** <br>
http://zomatoapi.ml

#### Happy Coding:)
