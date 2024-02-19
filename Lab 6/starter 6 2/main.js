const path = require("path");

/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date: February 19, 2024
 * Author: Jaymond Mach
 *
 */

const IOhandler = require("./IOhandler");

const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");

(async () => {
  try {
    await IOhandler.unzip(zipFilePath, pathUnzipped);
    console.log("Zip file decompressed successfully!");

    const pngFiles = await IOhandler.readDir(pathUnzipped);
    console.log("Found PNG files:", pngFiles);

    await IOhandler.grayscale(pathUnzipped, pathProcessed);
    console.log("PNG files converted to grayscale successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
