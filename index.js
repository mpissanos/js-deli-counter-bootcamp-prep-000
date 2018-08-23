function takeANumber(current) {
 current.push(line.length + 1);
 return current;
}

function nowServing(current) {
  if (current.length !== 0) {
    var currentCust = line[0];
    current.shift()
    return current;
  } else {
    return " No one in line";
  }
}  


function currentLine(current) {
  var katzLine = []
    if (current.length !== 0) {
      for( var i = 0; i < current.length ; i++) {
      var name = current[i] ;
      var pos = i + 1
      katzLine.push(` ${pos}. ${name}`)
    }   
      return "The line is currently:" + katzLine;
  
    } else { 
      return "The line is currently empty.";
  } 
}

var line = []

console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(nowServing(line))