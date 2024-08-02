const data = require("../models/dataSchema");

exports.getVideoId = async (req, res) => {
    const result = await data.findById(req.body.id);
    res.send({ videoId: result.id });
};

exports.getVideoLink = async (req, res) => {
    const result = await data.findById(req.body.id);
    res.send({ videoLink: result.video, description: result.description });
};
