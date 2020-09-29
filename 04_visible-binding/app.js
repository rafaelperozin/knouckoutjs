var viewModel = function ()
{
    this.shouldShowMessage = ko.observable(false);
    this.myValues = ko.observableArray([]);
    this.showDiv = function () {
        this.shouldShowMessage(true);
    };
    this.showDivWithFunction = function () {
        this.myValues.push('Test Data');
    }.bind(this);
};

ko.applyBindings(viewModel);