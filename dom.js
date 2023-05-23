// console.dir(document);
let items=document.getElementsByClassName('list-group-item');
items[2].style.color='blue';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}