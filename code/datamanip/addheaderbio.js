const fs=require('fs');

for (let pas = 1961; pas < 2017; pas++) {

    var obj = JSON.parse(fs.readFileSync(pas+'.json', 'utf8'));
    //result = "";



    result = "{\"key\": \"Biocapacity (GHA) "+pas+"\",\n" +
        "  \"children\":" + JSON.stringify(obj) + "}";
   // console.log(result)

    fs.appendFile("data/"+pas+'.json', JSON.stringify(JSON.parse(result)), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}