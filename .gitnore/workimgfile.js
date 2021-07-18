$(function() {});

/* Declare Variables */
var today = moment().format("dddd, MMMM Do");

var now = moment().format("H A");

/* planWorkday entries for each hour of the workday */
var planWorkday = [{
        time: "9 AM",
        event: ""
    },
    {
        time: "10 AM",
        event: ""
    },
    {
        time: "11 AM",
        event: ""
    },
    {
        time: "12 PM",
        event: ""
    },
    {
        time: "1 PM",
        event: ""
    },
    {
        time: "2 PM",
        event: ""
    },
    {
        time: "3 PM",
        event: ""
    },
    {
        time: "4 PM",
        event: ""
    },
    {
        time: "5 PM",
        event: ""
    },
];

/* Local Storage check */
var workEvents = JSON.parse(localStorage.getItem("workDay"));
if (workEvents) {
    planWorkday = workEvents;
}

/* Current Day */
$("#currentDay").text(today);

/* Create rows */
planWorkday.forEach(function(timeBlock, index) {
    var timeLabel = timeBlock.time;
    var blockColor = colorRow(timeLabel);
    var row =
        '<div class="time-block" id="' +
        index +
        '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
        timeLabel +
        '</div><textarea class="form-control ' +
        blockColor +
        '">' +
        timeBlock.event +
        '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

    /* Adding rows to container div */
    $(".container").append(row);
});

/* Color rows based on current time */
function colorRow(time) {
    var planNow = moment(now, "H A");
    var planEntry = moment(time, "H A");
    if (planNow.isBefore(planEntry) === true) {
        return "future";
    } else if (planNow.isAfter(planEntry) === true) {
        return "past";
    } else {
        return "present";
    }
}

/* Save Events */
$(".saveBtn").on("click", function() {
    var blockID = parseInt(
        $(this)
        .closest(".time-block")
        .attr("id")
    );
    var userEntry = $.trim(
        $(this)
        .parent()
        .siblings("textarea")
        .val()
    );
    planWorkday[blockID].event = userEntry;

    /* Set local storage */
    localStorage.setItem("workDay", JSON.stringify(planWorkday));
});

https: //github.com/fondofhats/workday-scheduler/blob/master/assets/js/script.js


    //   another option// Display today's day and date
    var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {
    // saveBtn click listener 
    $(".saveBtn").on("click", function() {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})

https: //github.com/sylviaprabudy/work-day-scheduler/blob/master/assets/js/script.js


    $(document).ready(function() { // tells engine to load 1)html & 2)css first.
        //display current day & time.
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
        //assign saveBtn click listener for user input and time stamp??
        $(".saveBtn").on("click", function() {
                //get nearby values.
                console.log(this);
                var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
                var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

                //set items in local storage.
                localStorage.setItem(time, text);
            })
            //load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
        $("#hour8 .description").val(localStorage.getItem("hour8"));
        $("#hour9 .description").val(localStorage.getItem("hour9"));
        $("#hour10 .description").val(localStorage.getItem("hour10"));
        $("#hour11 .description").val(localStorage.getItem("hour11"));
        $("#hour12 .description").val(localStorage.getItem("hour12"));
        $("#hour13 .description").val(localStorage.getItem("hour13"));
        $("#hour14 .description").val(localStorage.getItem("hour14"));
        $("#hour15 .description").val(localStorage.getItem("hour15"));
        $("#hour16 .description").val(localStorage.getItem("hour16"));
        $("#hour17 .description").val(localStorage.getItem("hour17"));

        function hourTracker() {
            //get current number of hours.
            var currentHour = moment().hour(); // use of moment.js

            // loop over time blocks
            $(".time-block").each(function() {
                var blockHour = parseInt($(this).attr("id").split("hour")[1]);
                console.log(blockHour, currentHour)

                //check if we've moved past this time, click into css/html given classes of past, present, or future
                if (blockHour < currentHour) {
                    $(this).addClass("past");
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                } else if (blockHour === currentHour) {
                    $(this).removeClass("past");
                    $(this).addClass("present");
                    $(this).removeClass("future");
                } else {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
                }
            })
        }
        hourTracker(); //re-run function
    })

https: //github.com/EdenKhaos/05-work-day-scheduler/blob/master/script.jsvar displayTime = document.querySelector("#currentDay");

    var currentTime = moment();

displayTime.textContent = currentTime.format("dddd, MMMM Do")

$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time /* aka KEY = row id */ , value /* text in the textarea */ );
});

// load any saved data from localStorage 

// 9am
$("#9am-row .description").val(localStorage.getItem("9am-row" /* localStorage KEY also the row id */ ));

// 10am
$("#10am-row .description").val(localStorage.getItem("#10am-row" /* localStorage KEY also the row id */ ));

// 11am
$("#11am-row .description").val(localStorage.getItem("11am-row" /* localStorage KEY also the row id */ ));

// 12pm
$("#12pm-row .description").val(localStorage.getItem("12pm-row" /* localStorage KEY also the row id */ ));

// 1pm
$("#1pm-row .description").val(localStorage.getItem("1pm-row" /* localStorage KEY also the row id */ ));

// 2pm
$("#2pm-row .description").val(localStorage.getItem("2pm-row" /* localStorage KEY also the row id */ ));

// 3pm
$("#3pm-row .description").val(localStorage.getItem("3pm-row" /* localStorage KEY also the row id */ ));

// 4pm
$("#4pm-row .description").val(localStorage.getItem("4pm-row" /* localStorage KEY also the row id */ ));

// 5pm
$("#5pm-row .description").val(localStorage.getItem("5pm-row" /* localStorage KEY also the row id */ ));

// converting time and display

var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 13;
var hour2 = 14;
var hour3 = 15;
var hour4 = 16;
var hour5 = 17;

var currentHour = moment().format('H');

// 9am 
if (currentHour < hour9) {
    $("#9am-text").addClass("future");
} else if (currentHour > hour9) {
    $("#9am-text").addClass("past");
} else if (currentHour = hour9) {
    $("#9am-text").addClass("present");
}

// 10am 
if (currentHour < hour10) {
    $("#10am-text").addClass("future");
} else if (currentHour > hour10) {
    $("#10am-text").addClass("past");
} else if (currentHour = hour10) {
    $("#10am-text").addClass("present");
}

// 11am
if (currentHour < hour11) {
    $("#11am-text").addClass("future");
} else if (currentHour > hour11) {
    $("#11am-text").addClass("past");
} else if (currentHour = hour11) {
    $("#11am-text").addClass("present");
}

// 12pm
if (currentHour < hour12) {
    $("#12pm-text").addClass("future");
} else if (currentHour > hour12) {
    $("#12pm-text").addClass("past");
} else if (currentHour = hour12) {
    $("#12pm-text").addClass("present");
}

// 1pm
if (currentHour < hour1) {
    $("#1pm-text").addClass("future");
} else if (currentHour > hour1) {
    $("#1pm-text").addClass("past");
} else if (currentHour = hour1) {
    $("#1pm-text").addClass("present");
}

// 2pm
if (currentHour < hour2) {
    $("#2pm-text").addClass("future");
} else if (currentHour > hour2) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour2) {
    $("#2pm-text").addClass("present");
}

// 3pm
if (currentHour < hour3) {
    $("#3pm-text").addClass("future");
} else if (currentHour > hour3) {
    $("#3pm-text").addClass("past");
} else if (currentHour = hour3) {
    $("#3pm-text").addClass("present");
}

// 4pm
if (currentHour < hour4) {
    $("#4pm-text").addClass("future");
} else if (currentHour > hour4) {
    $("#4pm-text").addClass("past");
} else if (currentHour = hour4) {
    $("#4pm-text").addClass("present");
}

// 5pm
if (currentHour < hour5) {
    $("#5pm-text").addClass("future");
} else if (currentHour > hour5) {
    $("#5pm-text").addClass("past");
} else if (currentHour = hour5) {
    $("#5pm-text").addClass("present");
}

https: //github.com/nicolewallace09/work-day-scheduler/blob/master/assets/script.js


    <
    dx: BootstrapScheduler runat = "server"
ActiveViewType = "Timeline"
GroupType = "Resource"
AppointmentDataSourceID = "AppointmentDataSource"
ResourceDataSourceID = "efResourceDataSource" >
    <
    ClientSideEvents
AppointmentClick = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'AppointmentClick'); }"
AppointmentDrag = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'AppointmentDrag'); }"
AppointmentDrop = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'AppointmentDrop'); }"
AppointmentResize = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'AppointmentResize'); }"
AppointmentResizing = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'AppointmentResizing'); }"
AppointmentDeleting = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'AppointmentDeleting'); }"
AppointmentsSelectionChanged = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'AppointmentsSelectionChanged'); }"
AppointmentDoubleClick = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'AppointmentDoubleClick'); }"
ActiveViewChanged = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'ActiveViewChanged'); }"
ActiveViewChanging = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'ActiveViewChanging'); }"
SelectionChanged = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'SelectionChanged'); }"
SelectionChanging = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'SelectionChanging'); }"
VisibleIntervalChanged = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'VisibleIntervalChanged'); }"
MenuItemClicked = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'MenuItemClicked'); }"
MoreButtonClicked = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'MoreButtonClicked'); }"
MouseUp = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'MouseUp'); }"
BeginCallback = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'BeginCallback'); }"
CallbackError = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'CallbackError'); }"
EndCallback = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'EndCallback'); }"
Init = "function(s, e) { dxbsDemo.eventMonitor.trace(s, e, 'Init'); }" / >
    <
    OptionsResourceNavigator EnableIncreaseDecrease = "false" / >
    <
    Views >
    <
    DayView ResourcesPerPage = "2"
DayCount = "2" / >
    <
    WorkWeekView ResourcesPerPage = "1" / >
    <
    WeekView Enabled = "false" / >
    <
    MonthView Enabled = "false" / >
    <
    TimelineView ResourcesPerPage = "1"
IntervalCount = "5" / >
    <
    <
    /Views> < /
dx: BootstrapScheduler >

    function OnActiveViewChanging(args) {
        var answer = confirm('Do you want to switch the current view from ' + args.oldView + ' to ' + args.newView + '?');
        if (!answer) {
            args.cancel = true;
            radioButtonListViews.SetValue(args.oldView);
        }
    }

function OnActiveViewChanged() {
    var currType = schedulerActiveViewChangingAPI.GetActiveViewType();
    radioButtonListViews.SetValue(currType);
}

function OnSelectViewType(viewType) {
    var newType = radioButtonListViews.GetSelectedItem().value;
    schedulerActiveViewChangingAPI.SetActiveViewType(newType);
}

function OnAppointmentsSelectionChanged(scheduler, appointmentIds) {
    if (appointmentIds != null && appointmentIds.length == 1) {
        scheduler.GetAppointmentProperties(appointmentIds[0], 'Subject;Location;Start;End;Description', OnGetAppointmentProps);
    } else
        OnGetAppointmentProps(null);
}

function OnGetAppointmentProps(values) {
    var formatter = new ASPx.DateFormatter();
    formatter.SetFormatString("dd.MM.yyyy HH:mm");
    $("#infoSubject").html(values ? values[0] : "");
    $("#infoLocation").html(values ? values[1] : "");
    $("#infoStartTime").html(values ? formatter.Format(values[2]) : "");
    $("#infoEndTime").html(values ? formatter.Format(values[3]) : "");
    $("#infoDescription").html(values ? values[4] : "");
}

function OnActiveViewChanging(args) {
    var answer = confirm('Do you want to switch the current view from ' + args.oldView + ' to ' + args.newView + '?');
    if (!answer) {
        args.cancel = true;
        radioButtonListViews.SetValue(args.oldView);
    }
}

function OnActiveViewChanged() {
    var currType = schedulerActiveViewChangingAPI.GetActiveViewType();
    radioButtonListViews.SetValue(currType);
}

function OnSelectViewType(viewType) {
    var newType = radioButtonListViews.GetSelectedItem().value;
    schedulerActiveViewChangingAPI.SetActiveViewType(newType);
}

//https: //demos.devexpress.com/Bootstrap/Scheduler/ClientSideAPI.aspx

Subject:
    Location:
    Start time:
    End time:
    Description:


    --

    $(function() {});

/* Declare Variables */
var today = moment().format("dddd, MMMM Do");

var now = moment().format("H A");

/* planWorkday entries for each hour of the workday */
var planWorkday = [{
        time: "9 AM",
        event: ""
    },
    {
        time: "10 AM",
        event: ""
    },
    {
        time: "11 AM",
        event: ""
    },
    {
        time: "12 PM",
        event: ""
    },
    {
        time: "1 PM",
        event: ""
    },
    {
        time: "2 PM",
        event: ""
    },
    {
        time: "3 PM",
        event: ""
    },
    {
        time: "4 PM",
        event: ""
    },
    {
        time: "5 PM",
        event: ""
    },
];

/* Local Storage check */
var workEvents = JSON.parse(localStorage.getItem("workDay"));
if (workEvents) {
    planWorkday = workEvents;
}

/* Current Day */
$("#currentDay").text(today);

/* Create rows */
planWorkday.forEach(function(timeBlock, index) {
    var timeLabel = timeBlock.time;
    var blockColor = colorRow(timeLabel);
    var row =
        '<div class="time-block" id="' +
        index +
        '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
        timeLabel +
        '</div><textarea class="form-control ' +
        blockColor +
        '">' +
        timeBlock.event +
        '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

    /* Adding rows to container div */
    $(".container").append(row);
});

/* Color rows based on current time */
function colorRow(time) {
    var planNow = moment(now, "H A");
    var planEntry = moment(time, "H A");
    if (planNow.isBefore(planEntry) === true) {
        return "future";
    } else if (planNow.isAfter(planEntry) === true) {
        return "past";
    } else {
        return "present";
    }
}

/* Save Events */
$(".saveBtn").on("click", function() {
    var blockID = parseInt(
        $(this)
        .closest(".time-block")
        .attr("id")
    );
    var userEntry = $.trim(
        $(this)
        .parent()
        .siblings("textarea")
        .val()
    );
    planWorkday[blockID].event = userEntry;

    /* Set local storage */
    localStorage.setItem("workDay", JSON.stringify(planWorkday));
});

https: //github.com/fondofhats/workday-scheduler/blob/master/assets/js/script.js


    //   another option// Display today's day and date
    var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {
    // saveBtn click listener 
    $(".saveBtn").on("click", function() {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})

https: //github.com/sylviaprabudy/work-day-scheduler/blob/master/assets/js/script.js


    $(document).ready(function() { // tells engine to load 1)html & 2)css first.
        //display current day & time.
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
        //assign saveBtn click listener for user input and time stamp??
        $(".saveBtn").on("click", function() {
                //get nearby values.
                console.log(this);
                var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
                var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

                //set items in local storage.
                localStorage.setItem(time, text);
            })
            //load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
        $("#hour8 .description").val(localStorage.getItem("hour8"));
        $("#hour9 .description").val(localStorage.getItem("hour9"));
        $("#hour10 .description").val(localStorage.getItem("hour10"));
        $("#hour11 .description").val(localStorage.getItem("hour11"));
        $("#hour12 .description").val(localStorage.getItem("hour12"));
        $("#hour13 .description").val(localStorage.getItem("hour13"));
        $("#hour14 .description").val(localStorage.getItem("hour14"));
        $("#hour15 .description").val(localStorage.getItem("hour15"));
        $("#hour16 .description").val(localStorage.getItem("hour16"));
        $("#hour17 .description").val(localStorage.getItem("hour17"));

        function hourTracker() {
            //get current number of hours.
            var currentHour = moment().hour(); // use of moment.js

            // loop over time blocks
            $(".time-block").each(function() {
                var blockHour = parseInt($(this).attr("id").split("hour")[1]);
                console.log(blockHour, currentHour)

                //check if we've moved past this time, click into css/html given classes of past, present, or future
                if (blockHour < currentHour) {
                    $(this).addClass("past");
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                } else if (blockHour === currentHour) {
                    $(this).removeClass("past");
                    $(this).addClass("present");
                    $(this).removeClass("future");
                } else {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
                }
            })
        }
        hourTracker(); //re-run function
    })

https: //github.com/EdenKhaos/05-work-day-scheduler/blob/master/script.jsvar displayTime = document.querySelector("#currentDay");

    var currentTime = moment();

displayTime.textContent = currentTime.format("dddd, MMMM Do")

$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time /* aka KEY = row id */ , value /* text in the textarea */ );
});

// load any saved data from localStorage 

// 9am
$("#9am-row .description").val(localStorage.getItem("9am-row" /* localStorage KEY also the row id */ ));

// 10am
$("#10am-row .description").val(localStorage.getItem("#10am-row" /* localStorage KEY also the row id */ ));

// 11am
$("#11am-row .description").val(localStorage.getItem("11am-row" /* localStorage KEY also the row id */ ));

// 12pm
$("#12pm-row .description").val(localStorage.getItem("12pm-row" /* localStorage KEY also the row id */ ));

// 1pm
$("#1pm-row .description").val(localStorage.getItem("1pm-row" /* localStorage KEY also the row id */ ));

// 2pm
$("#2pm-row .description").val(localStorage.getItem("2pm-row" /* localStorage KEY also the row id */ ));

// 3pm
$("#3pm-row .description").val(localStorage.getItem("3pm-row" /* localStorage KEY also the row id */ ));

// 4pm
$("#4pm-row .description").val(localStorage.getItem("4pm-row" /* localStorage KEY also the row id */ ));

// 5pm
$("#5pm-row .description").val(localStorage.getItem("5pm-row" /* localStorage KEY also the row id */ ));

// converting time and display

var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 13;
var hour2 = 14;
var hour3 = 15;
var hour4 = 16;
var hour5 = 17;

var currentHour = moment().format('H');

// 9am 
if (currentHour < hour9) {
    $("#9am-text").addClass("future");
} else if (currentHour > hour9) {
    $("#9am-text").addClass("past");
} else if (currentHour = hour9) {
    $("#9am-text").addClass("present");
}

// 10am 
if (currentHour < hour10) {
    $("#10am-text").addClass("future");
} else if (currentHour > hour10) {
    $("#10am-text").addClass("past");
} else if (currentHour = hour10) {
    $("#10am-text").addClass("present");
}

// 11am
if (currentHour < hour11) {
    $("#11am-text").addClass("future");
} else if (currentHour > hour11) {
    $("#11am-text").addClass("past");
} else if (currentHour = hour11) {
    $("#11am-text").addClass("present");
}

// 12pm
if (currentHour < hour12) {
    $("#12pm-text").addClass("future");
} else if (currentHour > hour12) {
    $("#12pm-text").addClass("past");
} else if (currentHour = hour12) {
    $("#12pm-text").addClass("present");
}

// 1pm
if (currentHour < hour1) {
    $("#1pm-text").addClass("future");
} else if (currentHour > hour1) {
    $("#1pm-text").addClass("past");
} else if (currentHour = hour1) {
    $("#1pm-text").addClass("present");
}

// 2pm
if (currentHour < hour2) {
    $("#2pm-text").addClass("future");
} else if (currentHour > hour2) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour2) {
    $("#2pm-text").addClass("present");
}

// 3pm
if (currentHour < hour3) {
    $("#3pm-text").addClass("future");
} else if (currentHour > hour3) {
    $("#3pm-text").addClass("past");
} else if (currentHour = hour3) {
    $("#3pm-text").addClass("present");
}

// 4pm
if (currentHour < hour4) {
    $("#4pm-text").addClass("future");
} else if (currentHour > hour4) {
    $("#4pm-text").addClass("past");
} else if (currentHour = hour4) {
    $("#4pm-text").addClass("present");
}

// 5pm
if (currentHour < hour5) {
    $("#5pm-text").addClass("future");
} else if (currentHour > hour5) {
    $("#5pm-text").addClass("past");
} else if (currentHour = hour5) {
    $("#5pm-text").addClass("present");
}

https: //github.com/nicolewallace09/work-day-scheduler/blob/master/assets/script.js