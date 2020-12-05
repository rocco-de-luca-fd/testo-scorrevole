// refs
const text = `Lorem Ipsum is simply dummy text 
of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s`

let index = 0;

// function
function writeText(){
    document.body.innerText = text.slice(0, index)
    index++;
    if(inex > text.lenght -1){
        index = 0;
    }
}

setInterval(writeText, 100);

