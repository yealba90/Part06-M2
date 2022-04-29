var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  // TU CÓDIGO AQUÍ
    for(var i = 0; i<startEl.children.length; i++){
      let elements =  traverseDomAndCollectElements(matchFunc, startEl.children[i]);
      resultSet = [...resultSet, ...elements];
    }
    return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#') {
    return 'id';
  } else if (selector[0] === '.') {
    return 'class';
  } 
  //selector.split('.') -> [tag, class] > 1 === tag.class
  if(selector.split('.').length > 1){
    return 'tag.class';
  }
  return 'tag';  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  //selectoe => '#primero'
  var selectorType = selectorTypeMatcher(selector); // id / class / tag.class / tag
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function(element){
      // element (ELEMENT HTML) tiene el ID que estoy buscando
      return '#' + element.id === selector;
    }
  } else if (selectorType === "class") {
    matchFunction = function(element){
      // element (ELEMENT HTML) tiene el CLASS que estoy buscando
      let classes = element.classList;
      for (let i = 0; i < classes.length; i++) {
        if('.' + classes[i] === selector) {
          return true;
        } 
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(el){
      var [tagSearch, classSearch] = selector.split('.');
      return matchFunctionMaker(tagSearch)(el) && matchFunctionMaker(`.${classSearch}`)(el);
    }
  } else if (selectorType === "tag") {
    matchFunction = function(element){
      return element.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
