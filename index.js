function getFirstSelector(selector) {
  var firstElement = document.querySelector(selector)
  return firstElement

}

function nestedTarget() {
  var target = document.getElementById('nested').getElementsByClassName('target')[0]
  return target
}

function deepestChild() {
  var allInnerChildren = document.querySelector('div#grand-node').querySelectorAll('div')
  var selectorString = 'div#grand-node'
  for (let i = 0; i < allInnerChildren.length; i++){
    selectorString += ' div'
  }
  var theDeepestChild = document.querySelector(selectorString)
  return theDeepestChild
}

function increaseRankBy(n) {
  var allRankedLists = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < allRankedLists.length; i++) {
    allRankedLists[i].innerHTML = parseInt(allRankedLists[i].innerHTML) + n
  }
}
