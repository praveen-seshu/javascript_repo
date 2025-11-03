for(let i = 1; i <= 2; i++){
  for(let j = 1; j <= 3; j++){
    console.log(i, j);
  }
}

// output
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3


for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= i; j++){
    console.log(i, j);
  }
}

// output

// 1 1
// 2 1
// 2 2
// 3 1
// 3 2
// 3 3


for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    if(j === 2) continue;
    console.log(i, j);
  }
}

// output

// 1 1
// 1 3
// 2 1
// 2 3
// 3 1
// 3 3


for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    if(j === 2) break;
    console.log(i, j);
  }
}

// output
// 1 1
// 2 1
// 3 1

for(let i = 2; i < 3; i++){
  for(let j = 0; i < 3; j++){
    console.log(i, j);
  }
}
//infinite


for(let i = 3; i > 0; i--){
  for(let j = i; j > 0; j--){
    console.log(i, j);
  }
}
// 3 3
// 3 2
// 3 1
// 2 2
// 2 1
// 1 1



for(let i = 0; i < 3; i++){
  for(let j = 0; j < 2; j++){
    console.log(i, j);
    i++;
  }
}
// 0 0
// 1 1



for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    console.log(i * j);
  }
}

// 1
// 2
// 3
// 2
// 4
// 6
// 3
// 6
// 9



for(let i = 1; i <= 3; i++){
  for(let j = i; j <= 3; j++){
    console.log(i, j);
  }
}

// 1 1
// 1 2
// 1 3
// 2 2
// 2 3
// 3 3


for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    if(i + j > 3) console.log(i, j);
  }
}

// 1 3
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3







