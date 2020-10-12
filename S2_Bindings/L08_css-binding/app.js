var viewModel = function ()
{
    this.marks = ko.observable(100);
    this.resultStatus = ko.computed(function () {
        return this.marks() < 50 ? "failed" : "pass";
    });
};

ko.applyBindings(viewModel);