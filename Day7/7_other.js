let input = `$ cd /
$ ls
dir a
$ cd a
$ ls
dir a
2 a.txt
$ cd a
$ ls
99999 a.txt`;

let arrayFy = input.split('\n');

//console.log(arrayFy);

let directories = [];


const getDirSize = (dir = '/') => {
  let startIndex;
  let endIndex;
  for (let i in arrayFy) {
    if (arrayFy[i] === `$ cd ${dir}`) {
      startIndex = i;
      break;
    }
  }
  for (let i in arrayFy) {
    //3
    if (arrayFy[i].includes('$ cd') && !arrayFy[i].includes('$ cd ..')) {
      if (i > startIndex) {
        endIndex = i;
        break;
      }
    }
  }
  let directory = arrayFy.slice(startIndex + 2, endIndex);
  console.log(directory, 'directory');
  directory = directory.filter((item) => item !== '$ cd ..');
  let sum = 0;
  for (let i = 0; i < directory.length; i++) {
    // check if dir has nested dir
    if (directory[i].includes('dir')) {
      letNestedDir = directory[i].split(' ')[1];
      // if yes find the size of files in that dir
      sum += getDirSize(letNestedDir);
    } else {
      //console.log(directory, dir, sum);
      let size = Number(directory[i].split(' ')[0]);
      sum = size + sum;
    }
  }
  //push the size up to directories array
  // console.log(dir, sum);
  if (sum < 100000) {
  }
  directories.push({ [dir]: sum });
  return sum;
};
getDirSize('/');

console.log(directories);

console.log(
  directories.reduce((accu, current) => {
    let value = Object.values(current)[0];
    console.log('vale', value);
    return accu + value;
  }, 0)
);
