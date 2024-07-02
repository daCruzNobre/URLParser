const form = document.querySelector(".form");
const inputFile= document.querySelector("input[type='file']");
const submitBtn = document.querySelector(".submit");
const mainContainer = document.querySelector(".main");
const copyBtn = document.querySelector(".copy")
const regex = /https?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/g;

submitBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    // check if file was chosen
    // read file, find urls in file, return
    if(form.fileSelector.value !== undefined){     
        const reader = new FileReader();
        reader.onload = function () {
            let url = reader.result.match(regex);
            const urlDiv = document.createElement("div");
            urlDiv.classList.add("scrollable")
            url.forEach(url => {
                urlDiv.textContent += (url + "\n"); 
            });
            mainContainer.appendChild(urlDiv);
                       
        }
        const fileContents = reader.readAsText(inputFile.files[0]);
        
    };
});

