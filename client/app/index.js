// grab the DOM elements
const form = document.querySelector(".form");
const inputFile= document.querySelector("input[type='file']");
const submitBtn = document.querySelector(".submit");
const mainContainer = document.querySelector(".main");
const copyBtn = document.querySelector(".copyBtn");
const downloadBtn = document.querySelector(".downloadBtn");
const chooseBtn = document.querySelector(".chooseBtn");
const filePicker = document.querySelector(".filePicker");
const error = document.querySelector(".error");
const regex = /https?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/g;
const childNumber = mainContainer.childElementCount;


// change button color and name when file is selected
filePicker.addEventListener("change", (event) => {
    const fileName = form.fileSelector.files[0].name;
    chooseBtn.textContent = fileName;
    chooseBtn.style.backgroundColor = "#14bd89";
});

submitBtn.addEventListener("click", (event) =>{
    clear();
    event.preventDefault();
    // check if file was chosen
    // reset the error message to be hidden
    // read file, find urls in file, displays a textarea with the links
    error.style.display = "none";
    let contents = form.fileSelector.value;
    console.log(contents)
    if(form.fileSelector.value !== ''){
        const reader = new FileReader();
        reader.onload = function () {
            let url = reader.result.match(regex);
            const urlDiv = document.createElement("textarea");
            urlDiv.classList.add("scrollable")
            // display urls in a div
            url.forEach(url => {
                urlDiv.textContent += (url + "\n"); 
            });
            mainContainer.appendChild(urlDiv);
        }
        const fileContents = reader.readAsText(inputFile.files[0]);
        
    };
});

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let isDisabled = e.target.disabled;
    console.log(isDisabled);
})

// Eventlistener to copy the urls to the clipboard
copyBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const urlDiv = document.querySelector(".scrollable"); 
    let hasFile = checkForFile(urlDiv);
    if( hasFile === 1){
        urlDiv.select()
    }
    try {
        document.execCommand("copy");        
    } catch (err) {
        console.error("Could not copy URLs: ", err);
    }
    document.getSelection().removeAllRanges()    
});

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const urlDiv = document.querySelector(".scrollable"); 
    let hasFile = checkForFile(urlDiv);

})

// check is a file is uploaded on filpicker
function checkForFile(urlDiv){    
    if(!urlDiv){        
        error.textContent = "Please, select and submit a text file";
        error.style.display = "block";
        return -1
    }else{
        error.style.display = "none";
        return 1
    }    
   
}

// function to clear the output everytime a new file is selected
function clear(){
    if(mainContainer.childElementCount >= childNumber){
        mainContainer.removeChild(mainContainer.lastChild);
    };    
};
