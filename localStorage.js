var form = document.getElementById('addForm');
var newitem = document.getElementById('items');
form.addEventListener('submit',submitForm);


function submitForm(e){
    e.preventDefault();
    var nam=document.getElementById('name');
    var email=document.getElementById('email');
    var phone=document.getElementById('phone');
    let myobj={
        name : nam.value,
        email: email.value,
        phone:phone
    }
    let myobj_serial=JSON.stringify(myobj);
    localStorage.setItem(email.value,myobj_serial);
    
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode("Name: " + nam.value +" - "));
    li.appendChild(document.createTextNode("Email: " + email.value +" - "));
    li.appendChild(document.createTextNode("Phone: " + phone.value));
    newitem.appendChild(li);

}