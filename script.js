
const cars = [
    "(1)Toyota Camry; $24,000; 2021; 30,000",
    "(2)Honda Accord; $26,000; 2020; 25,000",
    "(3)Ford Mustang; $30,000; 2019; 15,000",
    "(4)Chevrolet Malibu; $22,000; 2022; 10,000",
    "(5)Nissan Altima; $23,500; 2021; 20,000",
    "(6)BMW 3 Series; $40,000; 2020; 18,000",
    "(7)Audi A4; $38,000; 2021; 12,000",
    "(8)Mercedes-Benz C-Class; $42,000; 2019; 22,000",
    "(9)Volkswagen Jetta; $20,000; 2022; 8,000",
    "(10)Subaru Outback; $28,000; 2021; 15,000",
    "(11)Hyundai Sonata; $25,000; 2020; 20,000",
    "(12)Kia Optima; $24,500; 2021; 17,000",
    "(13)Mazda6; $27,000; 2020; 19,000",
    "(14)Porsche 911; $100,000; 2019; 5,000",
    "(15)Tesla Model 3; $39,000; 2022; 8,000",
    "(16)Volvo S60; $35,000; 2021; 10,000",
    "(17)Lexus ES; $39,500; 2020; 12,000",
    "(18)Chrysler 300; $31,000; 2019; 30,000",
    "(19)Dodge Charger; $33,000; 2021; 15,000",
    "(20)Jeep Grand Cherokee; $45,000; 2022; 5,000"
];

const name = prompt("Как вас зовут?");
const s=confirm(`HELLO ${name}!`);
const w = prompt(`Хотите купить машину? (Yes/No)`);
const se = confirm(cars)

if (w === "YES",'Yes','yes') {
    const s = prompt("Выберите номер машины от 1 до 20") ;
    const car = cars[s].split("; ");
    console.log(`Имя: ${name}\n Модель ${car[0]}\n Цена ${car[1]}\n Год ${car[2]}\n Пробег ${car[3]}\n `);
}else{
    alert('Спасибо за интерес!')
}