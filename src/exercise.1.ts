type BankAccount = {
    money: number,
    deposit: (value: number) => void
}

let bankAccount: BankAccount = {
    money: 1000,
    deposit(value: number) {
        this.money += value;
    }
}

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: 'Santosh M',
    bankAccount,
    hobbies: ['reading', 'explore technology']
}

myself.bankAccount.deposit(20000);

console.log(myself);

