var form = document.getElementById('addForm');
var newitem = document.getElementById('items');
form.addEventListener('submit',submitForm);

newitem.addEventListener('click',delitem)
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
    li.appendChild(document.createTextNode(" - Email :"));
    li.appendChild(document.createTextNode(email.value));
    li.appendChild(document.createTextNode(" - Phone :"));
    li.appendChild(document.createTextNode(phone.value));
    var del=document.createElement('button');
    del.id='deleteBtn'
    del.className='btn btn-danger btn-sm float-right delete';
    
    del.appendChild(document.createTextNode('X'));
    li.appendChild(del)
    newitem.appendChild(li);

}

function delitem(e){
    
    if(e.target.classList.contains('delete')){
        if(confirm("Are you Sure?")){
            var li=e.target.parentElement;
            var deletitem=li.childNodes[2].textContent;
            newitem.removeChild(li)
            localStorage.removeItem(deletitem)

            console.log()
            
        }
    }
}
