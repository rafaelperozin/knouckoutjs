define(['jquery', 'knockout'], function ($, ko) {
    ko.components.register('usersignup', {
        require: './components/usersignup'
    });
    ko.applyBindings();
});