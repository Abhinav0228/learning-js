/ const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return                              // it do not return the value
// } )

// console.log(values);


// filter -- if the condition is true it will return the value else it will not

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const NewNum = myNumber.filter( (num) => num > 4)

// const NewNum = myNumber.filter( (num) => {    // if we use {} then we use return keyword
//     return num > 4
// })
// console.log(NewNum);


// const newNums = []
// myNumber.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'Non-Fiction' )
  userBooks = books.filter( (bk)=> {
    return bk.publish >= 1995 && bk.genre === 'History'
  } )
//   console.log(userBooks);



// NEW FILEEEEEEEEEEEEEEEEEEEEE ****************


const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNUms = myNumbers.map( (num) =>  num + 10 )
// console.log(newNUms);

myNumbers.forEach( (all) => {
    console.log(all + 10);
} )
