let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");


console.log(money);
console.log(time);


 let appData = {
    budget: money,
    timeData: time,
    expenses:  { },
    optionalExpenses: {},
    income: [],
    savings: false

}; 


let expenses1 = ("Введите обязательную статью расходов в этом месяце", ''),
    expenses2 = ("Во сколько обойдется?", ''), 
    expenses3 = ("Введите обязательную статью расходов в этом месяце", ''),
    expenses4 = ("Во сколько обойдется?", '');

appData.expenses[expenses1] = expenses3;
appData.expenses[expenses2] = expenses4;


alert(appData.budget / 30);