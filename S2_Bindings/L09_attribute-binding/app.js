var viewModel = {
    url: ko.observable('/02_computed-observables/index.html'),
    details: ko.observable('Computed Observables in KnockoutJS')
};

ko.applyBindings(viewModel);