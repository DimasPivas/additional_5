module.exports = function check(str, bracketsConfig) {
  var len = str.length;
  var brackets = str.split("");
  if(len % 2 != 0) {
    return false;
  }
  var stack = [];
  var size = bracketsConfig.length;
  for(var i = 0; i < len; ++i) {  // бегу по строке
    var lastOpen;
    var b = false;
    for( lastOpen = 0; lastOpen < size; ++lastOpen) { // цикл по количеству пар скобок
      if(brackets[i] == bracketsConfig[lastOpen][0]) { // если скобка открывающая
        stack.push(brackets[i]);  // пушаю её в стек
        b = true;
        break;                    // и выхожу из цикла.
      } // при этом lastOpen - номер пары, где была последняя открывающая скобка.
    }
    if(b == true) { // если скобка распозналась как открывающая и запушилась
      continue;
    }
    for(var j = 0; j < size; ++j) { // цикл по количеству пар скобок
      if(brackets[i] == bracketsConfig[j][1]) { // если скобка закрывающая
        var last = stack.pop();
        if(last != bracketsConfig[j][0]) {  // если предыдущая скобка(откр) не подходит к этой(закр)
          return false;
        }
      }
    }
  }
  return true;
}
