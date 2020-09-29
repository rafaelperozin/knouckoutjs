// Define the observable Array
// var observableArr = ko.observableArray();

// // Add some values
// observableArr.push('Matt');

// // Observable Array initially containing two objects
// var techArr = ko.observableArray([
//     { name: "John", job: "Software Developer" },
//     { name: "Matt", job: "Web Developer" }
// ]);

// // Reading information from an observableArray
// alert('The length of the array is ' + techArr().length);
// alert('The first element is ' + techArr()[0].name);

var ListModel = function (items) {
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItem = function () {
        if (this.itemToAdd() != "") {
            this.items.push(this.itemToAdd());
            this.itemToAdd("");
        }
    }.bind(this);
};

ko.applyBindings(new ListModel(["Master JS", "Master jQuery", "Master Knockout"]));