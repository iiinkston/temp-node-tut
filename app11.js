const { readFile, writeFile } = require('fs');
const util = require('util');

// Promisify readFile and writeFile for async/await
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// Remove unnecessary custom Promise function
// Use the correct file path argument in the getText function

const start = async () => {
    try {
        // Read files asynchronously
        const first = await readFilePromise('./content/subfolder/first.txt', 'utf8');
        const second = await readFilePromise('./content/subfolder/second.txt', 'utf8');

        // Write to a file asynchronously
        await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`);

        // Log results to the console
        console.log(first, second);
    } catch (error) {
        console.error("Error:", error); // Log any errors
    }
}

start();
