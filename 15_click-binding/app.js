var viewModel = {
    numberOfClicks: ko.observable(0),
    incrementClickCounter: function () {
        var previousCount = this.numberOfClicks();
        this.numberOfClicks(previousCount + 1);
    },
    functionWithParam: function (param1, param2) {
        alert(param1 + ' ' + param2);
    }
}

ko.applyBindings(viewModel);