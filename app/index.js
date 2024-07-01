const form = document.querySelector(".form");
const inputFile= document.querySelector("input[type='file']");
const submitBtn = document.querySelector(".submit");
const mainContainer = document.querySelector(".main");
const regex = /https?:\/\/(?:cloud-3\.steamusercontent\.com\/ugc\/\d+\/[A-Z0-9]+|api\.tabletopsimulator\.com(?:\/ui\/introUI)?|i\.imgur\.com\/[A-Za-z0-9]+\.jpg)\/?/g;

submitBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    if(form.fileSelector.value !== undefined){  
        const newPara = document.createElement("p");
        newPara.textContent = "Funfou";
        mainContainer.appendChild(newPara);
        console.log(typeof(url));
        
        const reader = new FileReader();
        reader.onload = function () {
            let url = reader.result.match(regex);
            url = url.toString();
            console.log(url);
            console.log(typeof(url));
        }
        const fileContents = reader.readAsText(inputFile.files[0]);
        // console.log(inputFile.files[0]);
        // console.log(fileContents);
        // console.log(typeof(fileContents));
    };
});