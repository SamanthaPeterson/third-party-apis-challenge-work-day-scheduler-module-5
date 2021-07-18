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