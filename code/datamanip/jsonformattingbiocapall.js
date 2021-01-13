const fs=require('fs');

for (let pas = 1961; pas < 2017; pas++) {

    var obj = JSON.parse(fs.readFileSync('data/biocap/'+pas+'.json', 'utf8'));
   // result = "";

    result = obj.reduce((r, { nomcontinent: key, ...object }) => {
        var temp = r.find(o => o.key === key);
        if (!temp) r.push(temp = { key, children: [] });
        temp.children.push(
            {"key" : object.GFN_name, "children":
                    [
                        {"key": object.record,
                            "value":object.total,
                            "children":
                                [
                                    {"key": "crop land" , "value":object.crop_land},
                                    {"key": "fishing ground" , "value":object.fishing_ground},
                                    {"key": "forest land" , "value":object.forest_land},
                                    {"key": "grazing land" , "value":object.grazing_land},
                                    {"key": "builtup land" , "value":object.built_up_land}
                                ]
                        }
                    ]
            });
        return r;
    }, []);

   // result = "{\n" + "  \"key\": \"Biocapacity (GHA) "+pas+"\"," + result + "}";

    fs.appendFile(pas+'.json', JSON.stringify(result), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}