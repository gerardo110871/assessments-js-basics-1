let answer = prompt("Welcome!, What is your name?")
let user = prompt(`Welcome ${answer}!, Please validate Password here:`)


 while (user.length < 10) {
    user = prompt(`Sorry ${answer}!,Password is too short`)
    }
   
    console.log(`Great Password ${answer}`)
  