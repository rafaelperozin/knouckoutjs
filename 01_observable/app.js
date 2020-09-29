// The ViewModel
// When values wrapped with observables change, will automatically update the View (index.html)
var viewModelTask = {
    todo: ko.observable("Any text"),
    completed: ko.observable("No"),
    createdDate: "29-Sep-2020",
}

// As soon as this change occurs, due to the OBSERVABLE, will automatically refresh the DOM
setTimeout(() => {
    viewModelTask.completed('Yes');
    // You can change multiples
    // viewModelTask.todo('Some new words').completed('Yes');
}, 2000);

document.getElementById('done').addEventListener('click', function () {
    // to read the new input value
    document.getElementById('new-todo').textContent = viewModelTask.todo();
});

document.getElementById('task-name').addEventListener('change', function () {
    setTimeout(() => {
        // to read the new content after change
        // if you do it as soon as the change will bring the old value
        // because the Knockout don't have time to update the object value
        document.getElementById('new-twodo').textContent = viewModelTask.todo();
    }, 500);
    
});

ko.applyBindings(viewModelTask);
// What applyBindings do?
// ko.applyBindings(one, two);
// 1. Define viewModel object you want to use
// 2. Define which part of the document you want to search the data-attribute
// The 2nd property it required only if you would like to specify an element to interact
// test with ko.applyBindings(viewModelTask, document.getElementById('task-name'));

