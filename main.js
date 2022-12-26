// ------------------ ДЗ ----------------
//9
// 9. Дан объект следующего вида: {
//     name: 'Jack',
//     age: 34,
//     work: 'IT',
//     hours: 23,
//    salary: 2300,
// experience: 450
// }, задача: добавить объекту методы: ходить на работу(при вызове этого метода, кол-во часов возрастает на 6, и зарплата тоже растет в пропорции 1час-100$), также должен быть метод Получить зарплату(зарплату можно получить только если уже есть мин. 3000$, после вызова этого метода ключи зарплата и наработанные часы должны быть обнулены, а в ключе опыт, необходимо хранить сумму всех отработанных часов)

// let person = {
//     name: 'Jack',
//     age: 34,
//     work: 'IT',
//     hours: 23,
//     salary: 2300,
//     experience: 450,
//     goWork: function () {
//         this.hours = this.hours + 6;
//         this.salary = this.salary + 100*6;
//         console.log(person);
//     },
//     getSalary: function () {
//         if(this.salary > 3000) {
//             this.experience = this.experience + this.hours
//             this.salary = 0;
//             this.hours = 0;
//             console.log(person);
//         }
//     },
// }

// person.goWork()
// person.getSalary()
// person.goWork()
// person.getSalary()
// person.goWork()

//10
// 10. Создать игру. Задача: создать программу, которая запрашивает у пользователя данные для 2х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по умолчанию(герой 1, герой 2), каждая стихия повышает силу героя на определенное количество пунктов(огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля +5 к силе), после добавления героев в бд, устраивать между ними бой и выявлять победителя по следующим характеристикам(победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья), выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, в том случае если победителя нет(решитьс помощью функций)

// let database = [];
// let hero1 = {
//     name,
//     strength: 0,
//     agility: 0,
//     element: 0
// };
// let hero2 = {
//     name,
//     strength: 0,
//     agility: 0,
//     element: 0
// }; 

// function createHero () { 

//     let conf = confirm('Let\'s create the first hero?');

//     if (conf) {
//         let askHero1Strength = +prompt('Enter strength for the first hero (max 100)');
//         let askHero1Agility = +prompt('Enter agility for the first hero (max 100)');

//         if (askHero1Agility <= 100 && askHero1Strength <= 100) {

//             hero1 = {
//                 name: 'Герой 1',
//                 strength: askHero1Strength,
//                 agility: askHero1Agility
//             }

//         } else {
//             alert('Enter maximum 100')
//             return;
//         }

//         let askHero1Element = prompt('Enter 1 element for the first hero (fire, water, earth, air)');

//         switch (askHero1Element) {
//             case 'fire':    
//                 hero1.element = 'fire +20';
//                 hero1.strength = hero1.strength + 20;
//                 break;
//             case 'water':
//                 hero1.element = 'water +10';
//                 hero1.strength = hero1.strength + 10;
//                 break;
//             case 'earth':
//                 hero1.element = 'earth +5';
//                 hero1.strength = hero1.strength + 5;
//                 break;
//             case 'air':
//                 hero1.element = 'air +15';
//                 hero1.strength = hero1.strength + 15;
//                 break;
//             default: 
//                 alert('You can enter only 1 element from the list')
//                 return;
//         }

//     database.push(hero1);

//     // return database

//     } else {
//         return;
//     }

//     let conf2 = confirm('Let\'s create the second hero?');
    
//     if (conf) {
//         let askHero2Strength = +prompt('Enter strength for the second hero (max 100)');
//         let askHero2Agility = +prompt('Enter agility for the second hero (max 100)');

//         if (askHero2Agility <= 100 && askHero2Strength <= 100) {

//             hero2 = {
//                 name: 'Герой 2',
//                 strength: askHero2Strength,
//                 agility: askHero2Agility
//             }

//         } else {
//             alert('Enter maximum 100')
//         };

//         let askHero2Element = prompt('Enter 1 element for the second hero (fire, water, earth, air)');

//         switch (askHero2Element) {
//             case 'fire':
//                 hero2.element = 'fire +20';
//                 hero2.strength = hero2.strength + 20;
//                 break;
//             case 'water':
//                 hero2.element = 'water +10';
//                 hero2.strength = hero2.strength + 10;
//                 break;
//             case 'earth':
//                 hero2.element = 'earth +5';
//                 hero2.strength = hero2.strength + 5;
//                 break;
//             case 'air':
//                 hero2.element = 'air +15';
//                 hero2.strength = hero2.strength + 15;
//                 break;
//             default: 
//             alert('You can enter only 1 element from the list')
//         }
    
//     database.push(hero2)
//     return database
  
//     }  else {
//         return;
//     }
    
// }

// function letsFight () {

//     if (hero1.strength > hero2.strength) {
//         console.log(`${hero1.name} победил`);
//         return;
//     } else if (hero1.strength === hero2.strength && hero1.agility > hero2.agility) {
//         console.log(`${hero1.name} победил`);
//         return;
//     } else if (hero1.strength === hero2.strength && hero1.agility === hero2.agility) {
//         console.log('Ничья');
//         return;
//     };

//     if (hero2.strength > hero1.strength) {
//         console.log(`${hero2.name} победил`);
//         return;
//     } else if (hero2.strength === hero1.strength && hero2.agility > hero1.agility) {
//         console.log(`${hero2.name} победил`);
//         return;
//     };

// }

// createHero()
// console.log(database);
// letsFight()

// extra

// 1. Дан список товаров следующего вида: [
//     {title: 'Samsung', price: 1000, count: 3, color: ['black', 'white', 'blue']},
//     {title: 'Apple', price: 1300, count: 2, color: ['green', 'space-gray']},
//     {title: 'Xiaomi', price: 600, count: 0, color: []},
//     {title: 'LG', price: 450, count: 5, color: ['black', 'white']},
//     {title: 'Sony', price: 700, count: 4, color: ['white', 'yellow', 'gray']}
// ], задача: запросить у пользователя информацию о том, какой телефон он бы хотел приобрести, затем предложить ему варианты расцветки телефона, после того как пользователь введет цвет, озвучить цену на товар и спросить будет ли он покупать, если ответ положительный то количество товара нужно уменьшить на 1, учесть, что товара может не быть на складе, в этом случае вывести сообщение типа: Извините, в данный момент товара нет на складе(решить с помощью функций)

// let database = [
//     {title: 'Samsung', price: 1000, count: 3, color: ['black', 'white', 'blue']},
//     {title: 'Apple', price: 1300, count: 2, color: ['green', 'space-gray']},        
//     {title: 'Xiaomi', price: 600, count: 0, color: []},
//     {title: 'LG', price: 450, count: 5, color: ['black', 'white']},
//     {title: 'Sony', price: 700, count: 4, color: ['white', 'yellow', 'gray']}
// ];

// function askProduct () {
//     let askName = prompt('Enter title of phone you want to buy').toLowerCase();
//     for (let i of database) {
//         i.title = i.title.toLowerCase();
//         if (i.title == askName) {
//             if(i.count > 0) {

//                 let askColor = prompt(`What color you want: ${i.color}`);
//                 let confAsk = confirm(`Your phone costs ${i.price}. Do you want to buy it?`);
//                 if (confAsk) {
//                     i.count--;
//                 } else {
//                     alert('See your next time!');
//                     return;
//                 };
//             } else {
//                 alert('Sorry, we don\'t have this product right now');
//                 return;
//             };
//         };
//     };
//     return database;
// };


// console.log(askProduct());
// console.log(askProduct());
// console.log(askProduct());


//уникальные значения title

// 2. Дан список дел в формате: [
//     {id: 1, todo: 'Принять душ', done: false},
//     {id: 2, todo: 'Завтрак', done: false},
//     {id: 3, todo: 'Пойти на работу', done: false},
//     {id: 4, todo: 'Приготовить ужин', done: false},
//     {id: 5, todo: 'Лечь спать', done: false}
// ], задача: принимать от пользователя айди того, что он сделал и менять статус на true, также должна быть возможность добавлять новые пункты дел(другая функция), учесть, что айди должен быть уникальным(решить с помощью функций)

// let todoList = [
//     {id: 1, todo: 'Принять душ', done: false},
//     {id: 2, todo: 'Завтрак', done: false},
//     {id: 3, todo: 'Пойти на работу', done: false},
//     {id: 4, todo: 'Приготовить ужин', done: false},
//     {id: 5, todo: 'Лечь спать', done: false}
// ]

// manager()

// function todoFunc () {
//     let askAction = +prompt('Enter id number of your done activity');

//     let flag = true;

//     for (i of todoList) {

//         if (askAction === i.id) {
//             i.done = true;
//             alert('Activity is done');
//             manager();
//             return;
//         } else flag = false
//     };

//     if(flag === false) {
//         alert('There is no this ID');
//         return;
//     };
    
//     return todoList;
// }

// console.log(todoList);

// function createNewAct () {
//     let askAction = prompt('Enter your new activity to do');

//     todoList.push({
//         // id: Date.now(),
//         id: todoList.length + 1,
//         todo: askAction,
//         done: false
//     })

//     manager()
//     return todoList
// }

// function manager () {

//     let ask = prompt('Done activity (d) or new activity (n) or exit (e)');

//     switch (ask) {
//         case 'd':
//             todoFunc();
//             return;
//         case 'n':
//             createNewAct();
//             return;
//         case 'e':
//             return;
//     }
// }

// console.log((todoList));

// добавить
// сделать
// менеджер