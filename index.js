function superbowlWin(record) {  
    const result = record.find(checkWins); 
    if (result != undefined) {
      return result.year; 
    }
}

function checkWins(obj) { 
  return obj.result === "W";
}