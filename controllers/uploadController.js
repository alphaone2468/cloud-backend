const { cloudinary } = require("../utils/cloudinary");
const data = require("../models/dataSchema");

exports.uploadData = async (req, res) => {
    try {
        console.log("gine");
        const fileImg = req.body.stringimg;
        console.log("gine");
        const fileVid = req.body.stringvideo;
        console.log("gine");

        console.log("gine");
        const uploadResponseimg = await cloudinary.uploader.upload(fileImg, {
            upload_preset: 'images',
        });
        console.log("gine");
        const uploadResponsevid = await cloudinary.uploader.upload(fileVid, {
            resource_type: 'video',
            upload_preset: 'videos',
        });

        const obj = {
            title: req.body.title,
            description: req.body.description,
            image: uploadResponseimg.secure_url,
            video: uploadResponsevid.secure_url
        };
        console.log("fgfdedfv");
        let result = await data(obj);
        result = await result.save();
        res.json({ msg: [uploadResponseimg.secure_url, uploadResponsevid.secure_url] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
};
