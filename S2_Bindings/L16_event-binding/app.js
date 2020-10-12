var viewModel = {
    detailsEnabled: ko.observable(false),
    enableDetails: function () {
        this.detailsEnabled(true);
    },
    disableDetails: function () {
        this.detailsEnabled(false);
    }
}

ko.applyBindings(viewModel);