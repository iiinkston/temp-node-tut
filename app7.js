const { readFile, writeFile } = require('fs')

readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.error('Error reading first file:', err)
        return
    }
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.error('Error reading second file:', err)
            return
        }
        const second = result
        writeFile('./content/subfolder/result-async.txt', `Here is the result: ${first}, ${second}`, (err) => {
            if (err) {
                console.error('Error writing file:', err)
                return
            }
            console.log('File written successfully!')
        })
    })
})

console.log('starting next task')
