var viewModel = {
    availableCountries: ko.observableArray(['United States', 'United Kingdom', 'Brazil']),
    chosenCountries: ko.observable(['Brazil'])
};

ko.applyBindings(viewModel);