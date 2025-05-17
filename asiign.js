
function downloadData(url, callback) {
    console.log(`Starting download from ${url}...`);
    setTimeout(() => {
        const data = `Data from ${url}`;
        console.log(`Finished downloading from ${url}`);
        callback(null, data);
    }, 1000);
}


function writeFile(data, callback) {
    console.log("Writing data to file...");
    setTimeout(() => {
        const filename = "file.txt";
        console.log(`Data written to ${filename}`);
        callback(null, filename);
    }, 1000);
}


function uploadFile(filename, uploadUrl, callback) {
    console.log(`Uploading ${filename} to ${uploadUrl}...`);
    setTimeout(() => {
        console.log(`Uploaded ${filename} to ${uploadUrl}`);
        callback(null, "Upload success");
    }, 1000);
}


downloadData("https://example.com/data", (err, data) => {
    if (err) return console.error("Download error:", err);
    writeFile(data, (err, filename) => {
        if (err) return console.error("Write error:", err);
        uploadFile(filename, "https://upload.com", (err, result) => {
            if (err) return console.error("Upload error:", err);
            console.log("Process completed:", result);
        });
    });
});


// Task 2 With Promise 
downloadDataPromise("https://example.com/data")
    .then(data => writeFilePromise(data))
    .then(filename => uploadFilePromise(filename, "https://upload.com"))
    .then(result => console.log("Process completed:", result))
    .catch(error => console.error("Error:", error));


// task 3 with async/await
async function processFileOperations() {
    try {
        console.log("Starting async/await flow...");
        const data = await downloadDataPromise("https://example.com/data");
        const filename = await writeFilePromise(data);
        const result = await uploadFilePromise(filename, "https://upload.com");
        console.log("Process completed:", result);
    } catch (error) {
        console.error("Error in async flow:", error);
    }
}

processFileOperations();
