exports.locationUpdate = () => {
  try {
    let date_string = new Date().toLocaleString("en-US");
    let date_nz = new Date(date_string);
    let year = date_nz.getFullYear();
    let month = ("0" + (date_nz.getMonth() + 1)).slice(-2);
    let date = ("0" + date_nz.getDate()).slice(-2);
    let hours = ("0" + date_nz.getHours()).slice(-2);
    let minutes = ("0" + date_nz.getMinutes()).slice(-2);
    let seconds = ("0" + date_nz.getSeconds()).slice(-2);
    let date_time =
      year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    console.log({
      type: "LOCATION",
      location_time: date_time,
      latitude: 32.2,
      longitude: 20.2,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.login = (req, res) => {
  try {
    res.status(200).json({ type: "Login", imei: process.env.IMEI });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.sendAlarm = (req, res) => {
  try {
    const alarmType = req.params.type;
    let date_string = new Date().toLocaleString("en-US");
    let date_nz = new Date(date_string);
    let year = date_nz.getFullYear();
    let month = ("0" + (date_nz.getMonth() + 1)).slice(-2);
    let date = ("0" + date_nz.getDate()).slice(-2);
    let hours = ("0" + date_nz.getHours()).slice(-2);
    let minutes = ("0" + date_nz.getMinutes()).slice(-2);
    let seconds = ("0" + date_nz.getSeconds()).slice(-2);
    let date_time =
      year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;

    res.status(200).json({
      type: "ALARM",
      alarm_type: alarmType,
      alarm_time: date_time,
      latitude: 32.22,
      longitude: -122.34,
      file_list: ["a.mp4", "b.mp4"],
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.videoUpload = (req, res) => {
  try {
    const filename = req.body.filename;
    if (filename) {
      return res.status(200).json({
        imei: process.env.IMEI,
        filename: filename,
        data: "video_data",
      });
    } else {
      return res.status(500).json({ message: "file-missing" });
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.command = (req, res) => {
  try {
    const command = req.params.string;
    res.status(200).json({
      type: "COMMAND",
      imei: process.env.IMEI,
      command: command,
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.commandResponse = (req, res) => {
  try {
    const response = req.body.response;
    if (response) {
      return res.status(200).json({
        type: "COMMAND_RESPONSE",
        response: response,
      });
    } else {
      return res.status(500).json({ message: "Provide response" });
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
