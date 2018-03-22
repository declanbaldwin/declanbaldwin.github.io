(function test() {
    let addItemButton = document.getElementById('addItemButton');
    let list = document.getElementById('myList');

    function onMouseOver() {
        console.log('over button');
        addItemButton.style.cursor = "pointer";
    }

    function addItem() {
        console.log('add item');
        

        let listItem = document.createElement('LI');
        listItem.appendChild(document.createTextNode('text'));
        list.appendChild(listItem);
    }

    addItemButton.addEventListener('mouseover', onMouseOver);
    addItemButton.addEventListener('click', addItem);
})();

