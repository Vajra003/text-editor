//elements
const elements = document.querySelectorAll('.btn');
//events
elements.forEach(element=>{
    element.addEventListener('click',()=>{
        let command = element.dataset['element'];

        if(command == 'createLink' || command == 'insertImage'){
            let url = prompt("Enter a link here", "http://")
            document.execCommand(command, false, url);
        }else{
            document.execCommand(command, false, null);
        }
    });
});