const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
const Expense = new Map();
function askcommand(){
    rl.question("\Enter a command:", function(command){
    switch(command.trim().askcommand()){
        case "add": 
    }
    })
}