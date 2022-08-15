
function uniqueCharacters(str) {
    let obj = {};
    for (let i = 0; i < str.length; ++i) {
        if(obj[str.charCodeAt(i)] === 1)  return false;
        obj[str.charCodeAt(i)] = 1

    }
    return true
  };

console.log(uniqueCharacters('😀a'));