const nam=document.getElementById("nam");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const date=document.getElementById("date");
const time=document.getElementById("time");
const btn=document.querySelector('.btn');
btn.addEventListener('mouseover',(e) =>{
    e.preventDefault();
    document.querySelector('.myform').style.background='green';
});
btn.addEventListener('mouseout',(e) =>{
    e.preventDefault();
    document.querySelector('.myform').style.background='yellow';
});

function sumbitofrom(event){
    event.preventDefault();
    if (nam.value==='' || email.value==='' || phone.value==='' || date.value===''|| time.value===''){
        alert("Fill all the Fields");
    }else{
        localStorage.setItem('name',nam.value);
        localStorage.setItem('email',email.value)
        localStorage.setItem('phone',phone.value)
        localStorage.setItem('date',date.value)
        localStorage.setItem('time',time.value)

    }
    

}



