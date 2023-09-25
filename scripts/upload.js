// postBuild.js
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const S3_URL = "s3://peng37.com";
function replaceInFile(filePath, newPath) {
  // Read file content
  const content = fs.readFileSync(filePath, "utf8");

  // Perform the replacement
  const newContent = content.replace(/\/_next\//g, `/${newPath}/`);

  // If content has changed, write it back to the file
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, "utf8");
  }
}

function traverseDirectory(directory, assetsPath) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      traverseDirectory(fullPath, assetsPath);
    } else if (path.extname(fullPath) === ".html") {
      replaceInFile(fullPath, assetsPath);
    }
  }
}

console.log("Moving assets to new folder ...");
const startDirectory = "out"; // adjust this to your desired directory
const newAssetsFolder = `assets-${new Date()
  .toISOString()
  .replace(/[^0-9]/g, "")
  .slice(0, 14)}`;
traverseDirectory(startDirectory, newAssetsFolder);

console.log("Moving assets to new folder ...");
if (fs.existsSync("build")) {
  fs.rmSync("build", { recursive: true });
}
fs.mkdirSync("build");
fs.renameSync("out/_next", `build/${newAssetsFolder}`);

fs.renameSync("out/images", `build/images`);

console.log("Upload assets to S3 ...");
execSync(`aws s3 sync build ${S3_URL} --cache-control max-age=31536000,public`);

console.log("Upload website to S3 ...");
execSync(
  `aws s3 sync out ${S3_URL} --cache-control max-age=0,no-cache,no-store,must-revalidate`
);

console.log("Deleting old versions ...");
// Retrieve the list of folder names (versions) from S3
const command = `aws s3 ls ${S3_URL} --recursive | awk '{print $4}' | grep '/' | cut -d/ -f1 | uniq`;
const result = execSync(command).toString();

// Split the result into an array, filter out 'index.html' and other non-versioned entries, and then sort
const versions = result
  .split("\n")
  .filter((v) => v && v.startsWith("assets-20") && v !== newAssetsFolder)
  .sort();
// If there are more than 10 versions, remove the oldest ones
if (versions.length > 3) {
  const toDelete = versions.slice(0, versions.length - 3); // Keep the last 10
  toDelete.forEach((version) => {
    console.log(`Deleting version: ${version}`);
    execSync(`aws s3 rm ${S3_URL}/${version} --recursive`);
  });
  console.log("Deleting old versions completed.");
} else {
  console.log("No old versions to delete.");
}
