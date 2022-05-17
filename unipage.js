let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


function filter(n) {
    //Отлавливаем самый минимальный и максимальный пределы фильтра
    let min = n[0]
    let max = n[1]
    //Проходим по нашему массиву
    for (let i = 0; i < courses.length; i++) {
        //если у курса нет цен, пропускаем его
        if (courses[i].prices[0] === null && courses[i].prices[1] === null) continue
        //если мы ищем ДО какой-либо цены
        else if (min == null) {
            if (max >= courses[i].prices[0] && courses[i].prices[0] != null || max >= courses[i].prices[1] && courses[i].prices[1] != null) console.log(courses[i].name)
        }
        //если мы ищем ОТ какой-нибудь цены
        else if (max == null) {
            if (min <= courses[i].prices[0] || min <= courses[i].prices[1]) console.log(courses[i].name)
        }
        //если у нас есть промежуток
        else {
            if ((min <= courses[i].prices[0] && (max >= courses[i].prices[0] && courses[i].prices[0] != null)) || ((min >= courses[i].prices[0] && courses[i].prices[0] != null)) && (max >= courses[i].prices[1] && courses[i].prices[1] != null)) console.log(courses[i].name)
        }
    }
}

console.log('1 фильтр')
filter(requiredRange1)
console.log('2 фильтр')
filter(requiredRange2)
console.log('3 фильтр')
filter(requiredRange3)