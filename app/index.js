const form = document.querySelector(".form");
const inputFile= document.querySelector("input[type='file']");
const submitBtn = document.querySelector(".submit");
const mainContainer = document.querySelector(".main");
// const regex = /https?:\/\/(?:cloud-3\.steamusercontent\.com\/ugc\/\d+\/[A-Z0-9]+|api\.tabletopsimulator\.com(?:\/ui\/introUI)?|i\.imgur\.com\/[A-Za-z0-9]+\.jpg)\/?/g;
const regex = /https?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/g;

submitBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    // check if file was chosen
    // read file, find urls in file, return
    if(form.fileSelector.value !== undefined){     
        const reader = new FileReader();
        reader.onload = function () {
            let url = reader.result.match(regex);        
            console.log(url);
            
        }
        const fileContents = reader.readAsText(inputFile.files[0]);
        // console.log(inputFile.files[0]);
        // console.log(fileContents);
        // console.log(typeof(fileContents));
    };
});