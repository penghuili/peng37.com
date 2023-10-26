// postBuild.js
const fs = require("fs");
const { execSync } = require("child_process");

console.log("Uploading assets to S3...");
execSync(
  `aws s3 sync build/assets s3://peng37.com/assets --cache-control max-age=31536000,public`
);
console.log("Upload assets to S3 completed.");

const buildFiles = fs.readdirSync("build");
for (const file of buildFiles) {
  if (file !== "assets") {
    console.log(`Uploading ${file} to S3...`);

    const stats = fs.statSync(`build/${file}`);
    if (stats.isDirectory()) {
      execSync(
        `aws s3 sync build/${file} s3://peng37.com/${file} --cache-control max-age=0,no-cache,no-store,must-revalidate`
      );
    } else {
      execSync(
        `aws s3 cp build/${file} s3://peng37.com/${file} --cache-control max-age=0,no-cache,no-store,must-revalidate`
      );
    }
    console.log(`Upload ${file} to S3 completed.`);
  }
}
