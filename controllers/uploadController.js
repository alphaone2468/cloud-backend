const { cloudinary } = require("../utils/cloudinary");
const data = require("../models/dataSchema");

exports.uploadData = async (req, res) => {
    try {

        const fileImg = req.body.stringimg;

        const fileVid = req.body.stringvideo;
    

    
        const uploadResponseimg = await cloudinary.uploader.upload(fileImg, {
            upload_preset: 'images',
        });
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
        let result = await data(obj);
        result = await result.save();
        res.json({ msg: [uploadResponseimg.secure_url, uploadResponsevid.secure_url] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: err});
    }
};
