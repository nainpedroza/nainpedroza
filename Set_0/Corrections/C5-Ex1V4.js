class Client{
    constructor(name, cash, account, banking){
        this.name = name;
        this.cash = cash;
        this.account = account;
        this.banking = banking;
    }
    deposit(amount, receptorAccount){
        if (amount < 0){
            throw ('Only positive quantities are allowed');
        }else if(this.cash < amount){
            throw ('You do not have enough money');
        } else{
            this.banking.deposit(amount, receptorAccount);
            this.cash -= amount;
        }
    }
    retrieve(amount){
        this.cash += this.banking.retrieve(amount, this.account)
    }
    showBalance(){
      return this.banking.accounts[this.account]['bankBalance']
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
//Creation of a bank into Bank's information 
let bankInfo = new Bank('BBVA',[{'accountNumber':0, 'owner':'Nain', 'bankBalance': 10000}]);
//Add this new client to Clients' bank
let Nain = new Client('Nain', 5000, 0, bankInfo); // 5000, cash (not deposited)
console.log(Nain.showBalance()) //10000
Nain.deposit(3000,0)
console.log(Nain.showBalance()) //13000
Nain.deposit(1000,0)
console.log(Nain.showBalance()) //14000
Nain.retrieve(2000,0)
console.log(Nain.showBalance()) //12000
