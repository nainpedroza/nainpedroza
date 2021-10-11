class Client{
    constructor(name, cash, account, bankName){
        this.name = name;
        this.cash = cash;
        this.account = account;
      this.bankName = bankName;
    }
    deposit(amount, receptorAccount){
        if (amount < 0){
            console.log('Only positive quantities are allowed');
        }else if(this.cash < amount){
            console.log('You do not have enough money');
        } else{
            bank.deposit(amount, receptorAccount);
            this.cash -= amount;
        }
    }
    retrieve(amount){
        this.cash += bank.retrieve(amount, this.account)
    }
    showBalance(bankName){
        return bank.showBalance(this.account) + ' in the bank: '+ this.bankName;
    }
}

class Bank{
    constructor(name,accounts){
        this.name = name;
        this.accounts = accounts;
    }
    addClient(client){
        this.accounts.push(client);
    }
    getClient(accountNumber){
        let client = this.accounts.filter(client => client['accountNumber'] === accountNumber)[0];
        return client;
    }
    retrieve(amount, accountNumber){
      let fromThisClient = this.getClient(accountNumber);
      if (amount < 0){
        throw ('You can not deposit a negative amount');
      }
      if (fromThisClient['bankBalance'] >= amount){
        fromThisClient['bankBalance'] -= amount;
        return amount;
      }
      throw ('You do not have enough money to retrieve');
    }
    deposit(amount, toWhichAccount){
        let toWhichClient = this.getClient(toWhichAccount);
        toWhichClient['bankBalance'] += amount;
    }
    showBalance(accountNumber){
      let balanceClient = this.getClient(accountNumber)
      return balanceClient['bankBalance'];
    }
}
function addNewBankClient(name, accountNumber, bankMoney, cash, bankName){
    let addNewClient = new Client(name, cash, accountNumber, bankName);
    bank.addClient({
      'accountNumber':accountNumber, 
      'owner':name, 
      'bankBalance':bankMoney,
      'bankName': bankName
    });
    return addNewClient;
}
//Creation of a bank into Bank's class 
let bank = new Bank('BBVA',[{'accountNumber':0, 'owner':'Nain', 'bankBalance': 10000}]);
//Add this new client to Clients' class
let Nain = new Client('Nain', 5000, 0,'BBVA'); // 5000, cash (not deposited)
console.log(Nain.showBalance()); //10000
console.log("Nain's balance after 5000 deposit")
Nain.deposit(5000,0);
console.log(Nain.showBalance()); //15000
console.log(Nain.cash); // 0
console.log("Nain's balance after 1000 retrieved")
Nain.retrieve(1000)
console.log(Nain.showBalance()); //14000
let Marco = addNewBankClient('Marco', 1, 9000, 1000,'HSBC'); //9000  money to open the account, 1000 in cash
console.log("Marco's balance")
console.log(Marco.showBalance()); //9000 (money used to open the account)
Marco.retrieve(-100);
console.log("Marco's balance after 100 retrieved")
console.log(Marco.showBalance()); //8900
Marco.deposit(800,1)
console.log("Nain's balance after 500 deposit")
console.log(Marco.showBalance()); //9700
Marco.retrieve(-100); //Error: You can not retrieve a negative amount
