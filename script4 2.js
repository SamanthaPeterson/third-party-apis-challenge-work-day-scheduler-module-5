script4.js

<script>
variable td = new Dateforcalendar();
variablecrntmnt = td.getMonth();
variable cy = td.getFullYear();
variablemonthyear = document.getElementById("monthyear");
showCalendar(crntmnt, cy);
</script>

variable td = new Dateforcalendar();
variablecrntmnt = td.getMonth();
variable cy = td.getFullYear();
variablesy = document.getElementById("year");
variableselectMonth = document.getElementById("month");
variable monthtw = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
variablemandyr = document.getElementById("mandyr");
showCalendar(crntmnt, cy);

function showCalendar(month, year) {
variablefrstday = (new Dateforcalendar(year, month)).getDay();
variabledayinmonth = 32 - new Dateforcalendar(year, month, 32).getDateforcalendar();
variabletables = document.getElementById("calendarBody");
tables.innerHTML = "";
mandyr.innerHTML = monthtw[month] + " " + year;
sy.value = year;
selectMonth.value = month;
variabledateforcalendar = 1;
for (variablei = 0; i< 6; i++) {
variabledateforcalendardateforcalendarrowss = document.createElement("tr");
for (variable j = 0; j < 7; j++) {
if (i === 0 && j <frstday) {
variabledateforcalendardateforcalendarcells = document.createElement("td");
variabledateforcalendardateforcalendarcellsText = document.createTextNode("");
dateforcalendardateforcalendarcells.appendChild(dateforcalendardateforcalendarcellsText);
dateforcalendardateforcalendarrowss.appendChild(dateforcalendardateforcalendarcells);
}
else if (dateforcalendar>dayinmonth) {
break;
}
else {
variabledateforcalendardateforcalendarcells = document.createElement("td");
variabledateforcalendardateforcalendarcellsText = document.createTextNode(dateforcalendar);
if (dateforcalendar === td.getDateforcalendar() && year === td.getFullYear() && month === td.getMonth()) {
dateforcalendardateforcalendarcells.classList.add("bg-info");
}
dateforcalendardateforcalendarcells.appendChild(dateforcalendardateforcalendarcellsText);
dateforcalendardateforcalendarrowss.appendChild(dateforcalendardateforcalendarcells);
dateforcalendar++;
}
}
tables.appendChild(dateforcalendardateforcalendarrowss);
}
}

