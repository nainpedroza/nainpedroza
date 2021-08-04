class bank{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    deposit(accountNumber,deposit){
        if(deposit>this.balance){return "You cannot deposit more than what you have";}
        else{
            return new bank(accountNumber, deposit + this.balance);
        }
    }
    retrieve(accountNumber,retrieve){
        if (accountNumber != this.accountNumber){
            return "You can't retrieve from another account";
        }
        if (this.balance>=retrieve){
            return new bank(accountNumber, this.balance-retrieve);
        }
        else{
            return "You can't retrieve more than what you have";
        }
    }
    showBalance(accountNumber){
        if(accountNumber == this.accountNumber) {return this.balance;}
        else{return "You can't see other's balance than yours";}
    }
    
}
nain = new bank(1, 10000);
console.log(nain); //balance: 10000
nain = nain.deposit(1,100);
console.log(nain); /balance: 10100;
nain = nain.retrieve(1,5000);
console.log(nain); // balance 5100
console.log(nain.showBalance(1));
