function listElements () {
  var list = document.querySelectorAll('li')
  for (var i = 0; i < list.length; i++) {
    if (list[i].textContent.indexOf('a') !== -1) {
      list[i].remove()
    } else {
      list[i].title = list[i].textContent
    }
  }
}
listElements()
