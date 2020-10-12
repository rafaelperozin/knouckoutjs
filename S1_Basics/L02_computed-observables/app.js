// The ViewModel
// To change manipulate the splitted fields and print the full name
// READ ONLY
// var viewModelPersonReadOnly = function () {
//     var self=this;
//     firstName = ko.observable('Rafael'),
//     lastName = ko.observable('Perozin'),
//     fullName = ko.computed(function () {
//         return self.firstName() + " " + self.lastName();
//     });
// }

// To allow each field manipulate the object values
// READ AND WRITE
var viewModelPerson = function () {
    var self=this;
    self.firstName = ko.observable('Rafael'),
    self.lastName = ko.observable('Perozin'),
    self.fullName = ko.computed({
        read: function () {
            return self.firstName() + " " + self.lastName();
        },
        write: function (val) {
            var namesArray = val.split(' ');
            self.firstName(namesArray[0]);
            self.lastName(namesArray[1]);
        }
    });
}

ko.applyBindings(viewModelPerson);
// ko.applyBindings(viewModelPersonReadOnly);
// What applyBindings do?
// ko.applyBindings(one, two);
// 1. Define viewModel object you want to use
// 2. Define which part of the document you want to search the data-attribute
// The 2nd property it required only if you would like to specify an element to interact
// test with ko.applyBindings(viewModelTask, document.getElementById('task-name'));

