function viewModel() {
    this.customer = {
        name: 'Matt',
        credits: 1250
    }
    this.seller = {
        name: 'James',
        credits: 6000
    }
};

ko.applyBindings(viewModel);