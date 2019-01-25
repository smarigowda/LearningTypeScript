let bankAccount: { money: number, deposit: (value: number) => void} = {
    money: 1000,
    deposit(value: number) {
        this.money += value;
    }
}

let myself: { name: string, bankAccount: { money: number, deposit: (value: number) => void}, hobbies: string[] } = {
    name: 'Santosh M',
    bankAccount,
    hobbies: ['reading', 'explore technology']
}

myself.bankAccount.deposit(20000);

console.log(myself);

