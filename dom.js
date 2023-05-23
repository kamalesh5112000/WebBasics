var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter =document.getElementById('filter');


form.addEventListener('submit',additem);
itemList.addEventListener('click',delitem);
filter.addEventListener('keyup',filteritems);
function additem(e){
    e.preventDefault();
    var newitem = document.getElementById('item');
    var itemdis =document.getElementById('description');
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newitem.value));
    li.appendChild(document.createTextNode(itemdis.value));
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

function filteritems(e){
    var text=e.target.value.toLowerCase();
    var items= itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var itemdiscr=item.childNodes;
        var sec=item.childNodes[1].textContent;
             
        //console.log(itemdiscr)
        console.log(sec)
        
         if((itemName.toLowerCase().indexOf(text) != -1)||(sec.toLowerCase().indexOf(text) != -1)){
            item.style.display = 'block';
          } else { 
           item.style.display = 'none';
         }
      });

}