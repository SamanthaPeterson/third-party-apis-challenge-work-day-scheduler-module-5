let timeDisplay = moment().format('dddd, MMMM Do');

init();

function init() {
    $('#currentDay').text(timeDisplay);
}

$('.save-container').on("click", saveText);

function saveText() {
    var textBox = $(`#hour-${this.id}-text-button`).val();
    localStorage.setItem(this.id, textBox);
}

var textareaEl = $("textarea");
var localStorageReferences = ["800", "900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"]
var timeOfDay = (moment().format('HH')) * 100;


for (i = 0; i < textareaEl.length; i++) {

    textareaEl[i].value = localStorage.getItem(localStorageReferences[i]);

    let blank = parseInt(localStorageReferences[i]);

    var selector = $(`.hour${[blank]}-text`);

    if (timeOfDay === blank) {
        selector.removeClass("past");
        selector.addClass("present");

    }

    if (timeOfDay < blank) {
        selector.removeClass("past");
        selector.addClass("future");


    }

}