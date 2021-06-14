// permute a string
console.log("Below are variations of entered characters");

function permute(pwCharacters) {
  let len = pwCharacters.length;
  if (len === 1) {
    return pwCharacters;
  }
  if (len ===0){
    return "please enter alphabet to list out permutations";
  }
  let pick = "";
  let permutations = [];
  for (let i = 0; i < len; i++) {
    pick = pwCharacters[i];
    var remainder = pwCharacters.slice(0, i) + pwCharacters.slice(i + 1, len);
    for (var perm of permute(remainder)) {
      permutations.push(pick + perm);
    }
  }
  var counter = permutations.length;
  return permutations;
}
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

const pwCharacters = "ab9RVde7";    //REPLACE THESE TO WORK WITH NODE
console.log(JSON.stringify(permute(pwCharacters)));
console.log("number of permutations = "+factorialize(pwCharacters.length));


