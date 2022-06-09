const buttons=document.querySelectorAll('button')




for(let i of buttons)
{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newC = `rgb(${r},${g},${b})`
    i.addEventListener('click',function(){
        this.style.backgroundColor=newC; //TO CHANGE PROPERTEIS DIRECTLY FROM JS
        this.innerText=newC;
    })
}

