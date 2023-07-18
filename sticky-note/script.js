const container=document.getElementById('container');
const btnAdd=document.getElementsByClassName('btn-add')[0];

function getAppStorage(){
    return JSON.parse(localStorage.getItem('gold') || "[]");
}

getAppStorage().forEach(element => {
    const textElement= createTextElement(element.id,element.content);
    container.insertBefore(textElement,btnAdd);
});

function createTextElement(id,content){
    const textElement=document.createElement('textarea');
    textElement.classList.add('sticky');
    textElement.value = content;
    textElement.placeholder='Enter your text';

    textElement.addEventListener("change",() => {
        updateNote(id,textElement.value);
    });
    
    
    textElement.addEventListener("dblclick",() => {
        const check=confirm("Are you sure to delete");
        if(check){
            deleteNote(id,textElement);
        }
        //console.log(check);
        //updateNote(id,textElement.value);
    });

    return textElement;
}

//add new Sticky
function addSticky(){
    const notes=getAppStorage();
    const noteObject={
        id:Math.floor(Math.random()*1000000),
        content:""
    }

    const textElement= createTextElement(noteObject.id,noteObject.content);
    container.insertBefore(textElement,btnAdd);
    notes.push(noteObject);
    saveNote(notes);
    
}
btnAdd.addEventListener('click',()=>addSticky());

function saveNote(notes){
localStorage.setItem("gold",JSON.stringify(notes));
}

//update
function updateNote(id,content){
    const notes=getAppStorage();
    const updateElement=notes.filter((note)=>note.id==id)[0];
    updateElement.content=content;
    saveNote(notes);
};

//delete
function deleteNote(id,content){
    const notes=getAppStorage().filter((note)=>note.id!=id);
    
    saveNote(notes);
    container.removeChild(content);
};

//[{"id":12,"content":"hi"},{"id":29,"content":"Hello"}]