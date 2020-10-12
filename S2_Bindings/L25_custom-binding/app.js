//Custom binding: datepicker
ko.bindingHandlers.datepicker = {
    init: function (element, valueAccessor, allBindingAccessor) {
        // Initialize datepicker with some optional options
        var options = allBindingAccessor().datepickerOptions || {};
        $(element).datepicker(options);

        // Handle the field changing
        ko.utils.registerEventHandler(element, 'change', function () {
            var observable = valueAccessor();
            observable($(element).datepicker('getDate'));
        });

        // Handle disposal (ik KO removes by the template binding)
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            $(element).datepicker('destroy');
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor()),
            current = $(element).datepicker('getDate');
        
        if (value - current !== 0) {
            $(element).datepicker('setDate', value);
        }
    }
}


// Usual knockout JS code
var viewModel = {
    myDate: ko.observable(new Date('01/30/1987')),
    seToCurrentDate: function () {
        this.myDate(new Date());
    }
};

ko.applyBindings(viewModel);