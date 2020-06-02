const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s the best name you\'ve ever been called\? Nicknames encouraged. ', (answer1) => {
  rl.question('What\'s your guiltiest pleasure\? ', (answer2) => {   
    rl.question('What\'s your drink of choice while you\'re endulging in such behavior\? ', (answer3) => {
      rl.question('As the world slides into chaos, what\'s your plan for the future\? ', (answer4) => {
        rl.question('When the nightmares come for you, where will you hide\? ', (answer5) => {
          rl.question('Who will you take with you to the Promised Lands\? ', (answer6) => {
            rl.question('How will you know when you\'ve arrived\? ', (answer7) => {
              console.log(`My name is ${answer1}, and I am chronically involved in the world of ${answer2}, a nasty habit that causes me to drink too much ${answer3}. Still, I have goals, chief among them the urge to ${answer4}, and escape to ${answer5} with my dear ${answer6}. I know we'll find peace once we ${answer7}`);  
              rl.close();
            })
          })
        })
      })
    })
  })
});
