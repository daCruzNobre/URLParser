
const regex = /https?:\/\/(?:cloud-3\.steamusercontent\.com\/ugc\/\d+\/[A-Z0-9]+|api\.tabletopsimulator\.com(?:\/ui\/introUI)?|i\.imgur\.com\/[A-Za-z0-9]+\.jpg)\/?/g;

// function that reads the contents of the file
async function parseUrl(filepath) {
    try {
        const data = await fs.readFile(filepath, 'utf-8');
        return data;
    } catch (error) {
        console.error("Error reading file:", error);
        return null;
    }

};

const fileContents = await readFile(filepath);
let url = fileContents.match(regex);
console.log(url);
// console.log(fileContents.search(regex));

