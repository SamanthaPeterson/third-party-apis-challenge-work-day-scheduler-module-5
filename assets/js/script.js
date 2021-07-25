let timeView = moment().format('dddd, MMMM Do');
var textareaEl = $("textarea");
var localStorageReferences = ["800", "900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"]
var timeOfDay = (moment().format('HH')) * 100;

init();

function init() {
    $('#currentDay').text(timeView);
}

$('.save-container').on("click", saveText);

function saveText() {
    var textBox = $(`#hour-${this.id}-text-button`).val();
    localStorage.setItem(this.id, textBox);
}



for (i = 0; i < textareaEl.length; i++) {

    textareaEl[i].value = localStorage.getItem(localStorageReferences[i]);

    let empty = parseInt(localStorageReferences[i]);

    var selector = $(`.hour${[empty]}-text`);

    if (timeOfDay === empty) {
        selector.removeClass("past");
        selector.addClass("present");

    }

    if (timeOfDay < empty) {
        selector.removeClass("past");
        selector.addClass("future");


    }

}