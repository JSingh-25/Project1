//gets current date
let currentDate = new Date();

//gets elements from the HTML document so we can use them here
const monthSelectedElement = document.getElementById('monthSelected');
const datesElement = document.getElementById('dates');
const prevMonthElement = document.getElementById('prevMonth');
const nextMonthElement = document.getElementById('nextMonth');


function convertMonth(month){

    let monthString = '';

    if (month = '1'){
        monthString = 'January'
    }
    else if (month = '2'){
        monthString = 'February'
    }
    else if (month = '3'){
        monthString = 'March'
    }
    else if (month = '4'){
        monthString = 'April'
    }
    else if (month = '5'){
        monthString = 'May'
    }
    else if (month = '6'){
        monthString = 'June'
    }
    else if (month = '7'){
        monthString = 'July'
    }
    else if (month = '8'){
        monthString = 'August'
    }
    else if (month = '9'){
        monthString = 'September'
    }
    else if (month = '10'){
        monthString = 'October'
    }
    else if (month = '11'){
        monthString = 'November'
    }
    else if (month = '12'){
        monthString = 'December'
    }
    else{
        return;
    }

    return monthString;
}

function updateCalender(){

    //update currentDate variable to the current date
    let currentDate = new Date();

    //gets the values for the current year and month
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    //gets the full first and last date of the current month as well as how many days are in the current month
    const monthFirstDate = new Date(currentYear, currentMonth -1 , 1);
    const monthLastDate = new Date(currentYear, currentMonth, 0);
    const daysInMonth = monthLastDate.getDate();

    //gets first day of month as a number
    firstDayOfMonth = monthFirstDate.getDay();
    lastDayOfMonth = monthLastDate.getDay();

    let monthSelectedString = currentDate.getMonth;

    let monthString = convertMonth(monthSelectedString);

    let dateDays = 'game';

    for(i = 1; i <=daysInMonth; i++){

        const date = new Date(currentYear, currentMonth, i);

        dateDays+= '<div class = "dateDays">${i}</div>';

    }

    monthSelectedElement.innerHTML = monthString;

    datesElement.innerHTML = dateDays;
}

//change the currently viewed month to the previous month
function prevMonth(){
    currentDate.setMonth(currentDate.getMonth - 1);
    updateCalender();
}

//change the currently viewed month to the next month
function nextMonth(){
    currentDate.setMonth(currentDate.getMonth + 1);
    updateCalender();

}

//adds event listeners so that when each button is clicked, they will change the month and update the calender
prevMonthElement.addEventListener("click", prevMonth);
nextMonthElement.addEventListener("click", nextMonth);


updateCalender();

document.write("Hello World!");
