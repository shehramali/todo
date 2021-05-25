

let input=document.querySelector('#add');
let btn=document.querySelector('#btn');
let list=document.querySelector('#list');
let el= document.getElementsByTagName('li');


//Now We can write a function to add a list on button click

btn.addEventListener('click',()=>{
    let txt = input.value;
    if (txt==="") {
        alert('You Must Write Something');
    }else{
        let li=document.createElement('li');
        li.innerHTML=txt;
        list.insertBefore(li,list.childNodes[0]);
        input.value='';
    }
});


