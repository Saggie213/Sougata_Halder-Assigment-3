function downloadDataPromise(url) {
    console.log(`Starting download from ${url}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = `Data from ${url}`;
            console.log(`Finished downloading from ${url}`);
            resolve(data);
        }, 1000);
    });
}

function writeFilePromise(data) {
    console.log("Writing data to file...");
    return new Promise((resolve) => {
        setTimeout(() => {
            const filename = "file.txt";
            console.log(`Data written to ${filename}`);
            resolve(filename);
        }, 1000);
    });
}

function uploadFilePromise(filename, uploadUrl) {
    console.log(`Uploading ${filename} to ${uploadUrl}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Uploaded ${filename} to ${uploadUrl}`);
            resolve("Upload success");
        }, 1000);
    });
}


downloadDataPromise("https://example.com/data")
    .then(data => writeFilePromise(data))
    .then(filename => uploadFilePromise(filename, "https://upload.com"))
    .then(result => console.log("Process completed:", result))
    .catch(error => console.error("Error:", error));
