const data = require("../models/dataSchema");

exports.getData = async (req, res) => {
    const resobj = [];
    const result = await data.find();
    result.forEach(item => {
        resobj.push({
            imageUrl: item.image,
            title: item.title,
            id: item.id
        });
    });
    res.send(resobj);
};
