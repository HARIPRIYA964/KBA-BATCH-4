const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
const Expense = new Map();
function askcommand(){
    rl.question("\Enter a command:", function(command){
    switch(command.trim().toLowerCase()){
        case "add": addItems();
        break;
        case "view": viewItems();
        askcommand();
        break;
        case "exit":
            rl.close();
        default: "Not Found!"
        askcommand();

    }
    })

}

function addItems(){
  
    rl.question("Enter an Type of exp:", function(exp){
        rl.question("Enter an  Amount:", function(amount){
                rl.question("Enter an Date:", function(date){
                    addItem(exp,amount,date);
                    askcommand();

                });
            });
        });  
}

function addItem(exp,amount,date){
    if(Expense.has(date)){
        console.log(`Error expense with  ${Expense} already exists`)
    }
    else{
        Expense.set(date,{exp,amount});
        console.log(` ${date} is added !`)
    }
}

function viewItems(){
    if (Expense.size>0){
        console.log('View Expense: ');
        for(const[date,ex] of Expense){
            console.log(`Date: ${date}, Type of Expense: ${ex.exp},  amount: ${ex.amount} `);            }
    }
    else{
        console.log('No Expense found');
    }

}


askcommand();
