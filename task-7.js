'use strict';
/*
Task 5
*/


/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        return ({
            id: this.transactions.length + 1,
            type: type,
            amount: amount
        })
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        let transaction = account.createTransaction(amount, 'deposit')
        this.transactions.push(transaction)
        this.balance += amount
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        let transaction = account.createTransaction(amount, 'withdraw')
        this.transactions.push(transaction)
        if(amount > this.balance){
            console.log(`Cнятие суммы ${amount} не возможно, недостаточно средств`);
        } else {
            this.balance -= amount
        }
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        console.log(`Текущий баланс ${this.balance}`);
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(number) {
        for (const obj of this.transactions) {
                if (obj.id === number) {
                    console.log(obj);
                }
        }
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let totalValue = 0
        for (const obj of this.transactions) {
            if (obj.type === type) {
                totalValue += obj.amount
            }
        }
        console.log(`Общее кол-во ${type}: ${totalValue}`);
    },
  };

  account.deposit(350)
  account.withdraw(275)
  account.deposit(1350)
  account.deposit(750)
  account.withdraw(210)
  account.deposit(50)
  account.withdraw(130) 
  account.getBalance()
  account.getTransactionDetails(5)
  account.getTransactionTotal("deposit")
  account.getTransactionTotal("withdraw")
  