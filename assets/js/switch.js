show = false;

let number = document.querySelector('.number');
let titleDay = document.querySelector('.title');
let ex = document.querySelector('.ex');
let en = document.querySelector('.en');
let exit;
let entry;
let container;


function content() {
    show == false ? (exit = exitJobday, entry = entryJobday) : (exit = exitHoliday, entry = entryHoliday)
        // отслеживаем положение show и присваиваем данные из массива согласно положению   

    let tableEx = '';
    for (let i = 0; i < exit.length; i++) { // перебрал массив циклом
        if (exit[i].indexOf('A') !== -1) { // если в строке цикла присутствует "А", тогда подсветим
            tableEx += `<tr class="alex"><td>${exit[i]}</td></tr>`; //
        } else {
            tableEx += `<tr><td>${exit[i]}</td></tr>`; // иначе просто вывожу
        }
    }
    ex.innerHTML = tableEx; //  все добавил в переменную и вставил в DOM   

    // обработка заходов в депо, правая колонка
    let tableEn = '';
    for (let i = 0; i < entry.length; i++) { // перебрал массив циклом
        if (entry[i].indexOf('A') !== -1) { // если в строке цикла присутствует "А", тогда подсветим
            tableEn += `<tr class="alex"><td>${entry[i]}</td></tr>`; //
        } else {
            tableEn += `<tr><td>${entry[i]}</td></tr>`; // иначе просто вывожу
        }
    }
    en.innerHTML = tableEn; //  все добавил в переменную и вставил в DOM   

}

///////////////////////////////////////////////////////////////////

function ex_vs_en() {
    content();
    container = ''; // обнуляю что бы не плюсовалось
    this.show = !this.show; /// основа перехода!!!для чего this?
    titleDay.style.backgroundColor = 'red'; // по умолчанию цвет blue
    number.style.color = 'red';
    number.innerHTML = numberHol;
    if (show == false) {
        for (let hol of "выходной") {
            container += hol + '<br>';
        }
    } else {
        number.innerHTML = numberJob;
        titleDay.style.backgroundColor = 'blue';
        number.style.color = 'blue';
        for (let job of "рабочий") {
            container += job + '<br>';
        }
    }
    titleDay.innerHTML = container;
}






//обработка выходов из депо, левая колонка