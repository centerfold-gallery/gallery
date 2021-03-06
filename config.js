// if running on heroku, get heroku config variables
if(process.env.airtableAPIKey){
    var parsed = {"airtableAPIKey": process.env.airtableAPIKey,
                  "airtableBase": process.env.airtableBase,
                  "stripeAPIKey": process.env.stripeAPIKey}
}

// If local development, parse the config.json file
else{
    var fs = require('fs'),
    configPath = './config.json';
    var parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));
}
exports.storageConfig = parsed;
