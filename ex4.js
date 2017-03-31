// list.js
function addItem () {
    // get the text typed into the input field
  var text = document.getElementById('item').value

    // todo: create a new list item and append it to the ordered list
  var list = document.getElementById('list')
  var itemEl = document.createElement('li')
  itemEl.textContent = text
  list.appendChild(itemEl)
    // clear the text in the input field
  document.getElementById('item').value = ''
}
