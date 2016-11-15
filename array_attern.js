//takes in 2 arrays
// one is scrambled of the other
// return function that takes single arr 

const arrayPattern = (org, scrambled) => {

  let mappings = getMappings(org, scrambled);

  return (arr) => {
    let result = []
    for (key in mappings) {
      let newIdx = mappings[key];
      result[key] = arr[newIdx];
    }
    return result;
  }
}

const getMappings = (org, scrambled) => {
  let mappings = {}
  
  for (var i = 0; i < org.length; i++) {
    letter = org[i];
    for (var j = 0; j < scrambled.length; j++) {
      if (scrambled[j] === letter) {
        mappings[i] = j;
      }
    }
  }

  return mappings;
}

let r1 = arrayPattern([1, 2, 3, 4], [4, 3, 2, 1]);

console.log(r1([5, 6, 7, 8]));
