/** root/index.js
 * 
 */

/** addLogText()
 * Add a log to the log.txt in the local folder.
 * @param {string} message - The message to add
 * @param {object} file - fs as defined above
 */
const logFileName = 'runtime.log'
const fs = require('fs');
const scriptStartTime = new Date;
const scriptStartTimeString = "V"+ scriptStartTime.getDate()+ scriptStartTime.getHours()+ scriptStartTime.getMinutes();

function addLogText(message) {
  const currentTime = new Date().toLocaleString();
  const content = scriptStartTimeString + " [" + currentTime + "] [" + message + "]\n";

  fs.appendFile(logFileName, content, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
      return;
    }
    console.log('Content has been appended successfully.');
  });
}
/** Test the add Log Function*/
const path = require('path');
addLogText("Test: Greetings from app.js");
const filePath = path.resolve(logFileName);
addLogText("Log file path = "+ filePath);
