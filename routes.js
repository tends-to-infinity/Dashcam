const router = require("express").Router();
const controller = require("./controller");

// 1. Message from dashcam to backend
router.route("/").get(controller.login);

// 2. Alarm message
router.route("/send-alarm/:type").get(controller.sendAlarm);

// 3. Location message
// router.route("/location-update").get(controller.locationUpdate);

// 4. Video uplaod message
router.route("/video-upload").post(controller.videoUpload);

// 5. Message from backend to dashcam through TCP stream
router.route("/command/:string").get(controller.command);
router.route("/command-response").post(controller.commandResponse);

module.exports = router;
