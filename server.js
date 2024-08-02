const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const uploadController = require("./controllers/uploadController");
const videoController = require("./controllers/videoController");
const dataController = require("./controllers/dataController");
const PORT = process.env.PORT
const app = express();
// https://neon-flask-enterprises-task.netlify.app
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173' // Replace with the origin you want to allow
}));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.post("/api/v1/upload-data", uploadController.uploadData);
app.post("/api/v1/get-video-id", videoController.getVideoId);
app.post("/api/v1/get-video-link", videoController.getVideoLink);
app.get("/api/v1/getdata", dataController.getData);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
