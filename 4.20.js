/*function createParagraph(){
    let para = document.createElement('p');
    para.textContent = 'you had clicked the button';
    document.body.appendChild(para);
}

function getalarm(){

}
const buttons = document.querySelectorAll('button');

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',createParagraph);
}

*/

let myimage = document.querySelector('img');
myimage.onclick = function(){
    let source = myimage.getAttribute('src');
    alert(source);
    if(source !== 'test3.png'){
        myimage.setAttribute('src','test3.png');
    }
    else if(source !=='test2.png') {
        myimage.setAttribute('src','test2.png');
    }
}
