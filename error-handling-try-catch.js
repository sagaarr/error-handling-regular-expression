/*
try- let us write a code and test it 
catch - helps us in handling this error
*/
try {
  myFunction();
} catch (error) {
  console.log(error)
  console.log(error.message);
  console.log(error.name);
  console.log(error instanceof ReferenceError);
}
/*
here if we just write 
myFunction();(without try-catch) it will similarly generate a refrence error but it will break the code
 and code wont continue to execute further 
*/
console.log("hello there code continues in try catch")

// =============================================================
try {
  null.myFunction();
} catch (error) {
  // Here you can format error however you want 
  console.log("ERRORRRRRRRRRR")
  //console.log(error)
}finally{
  console.log("finally will run no matter what !!!!")
}