var viewModel = {
    availableCountries: ko.observableArray(['United States', 'United Kingdom', 'Brazil']),
    Countries: ko.observableArray([
        { id: 'US', name: 'United States' },
        { id: 'UK', name: 'United Kingdom' },
        { id: 'BR', name: 'Brazil' }
    ])
};

ko.applyBindings(viewModel);