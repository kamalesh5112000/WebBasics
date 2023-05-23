var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit',additem);
itemList.addEventListener('click',delitem);
function additem(e){
    e.preventDefault();
    var newitem = document.getElementById('item');
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newitem.value));
    var del=document.createElement('button');

    del.className='btn btn-danger btn-sm float-right delete';
    del.appendChild(document.createTextNode('X'));

    li.appendChild(del)

    itemList.appendChild(li);

}
function delitem(e){
    
    if(e.target.classList.contains('delete')){
        if(confirm("Are you Sure?")){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}