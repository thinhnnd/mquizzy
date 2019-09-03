const fs = require("fs");
const fse = require("fs-extra");
const childProcess = require("child_process");

if (fs.existsSync("./build")) {
  fse.removeSync("./build");
}

childProcess.execSync("react-scripts build", { stdio: "inherit" });
childProcess.execSync("cd server && npm run build");

fse.moveSync("./build", "./server/build-frontend", { overwrite: true });
