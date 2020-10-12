// EXAMPLE 1, 2 and 3
// Set the component name: usersignup
// ko.components.register('usersignup', {
//     template: '<fieldset>' +
//         '<legend>User Sign-up</legend>' +
//         '<p>First Name: <input type="text" placeholder="First Name" data-bind="value:firstname" /></p>' +
//         '<p>Last Name: <input type="text" placeholder="Last Name" data-bind="value:lastname" /></p>' +
//         '<hr />' +
//         '<p>Full Name: <span data-bind="html: fullname"></span></p>' +
//         '<hr />' +
//         '<p>Email: <input type="email" placeholder="Email" data-bind="value:email" /></p>' +
//         '<p>Password: <input type="password" placeholder="Password" data-bind="value:password" /></p>' +
//         '<p><input type="button" value="Create Account" /></p>' +
//         '<div>User Sign up Component</div>' +
//     '</fieldset>',
//     viewModel: function (params) { // Can be a function or an object
//         // If you use this will not receive data from params on the DOM
//         firstname = ko.observable(params.firstname),
//         lastname = ko.observable(params.lastname),
//         email = ko.observable(params.email),
//         password = ko.observable(params.password),
//         fullname = ko.pureComputed(function () {
//             // Use this, to get the values set up earlier on this parent function
//             return this.firstname() + " " + this.lastname();
//         })
//     }
// });

// EXAMPLE 4

// Function example 1
// function usersignup(params) {
//     firstname = ko.observable(params.firstname),
//     lastname = ko.observable(params.lastname),
//     email = ko.observable(params.email),
//     password = ko.observable(params.password),
//     fullname = ko.pureComputed(function () {
//         return this.firstname() + " " + this.lastname();
//     })
// }
// ko.components.register('usersignup', {
//     template: { element: 'signup-template' },
//     viewModel: usersignup
// });

// Function example 2
var userSignupModel = function () { 
    this.firstname = ko.observable('firstname'),
    this.lastname = ko.observable('lastname'),
    this.email = ko.observable('email'),
    this.password = ko.observable('password'),
    this.fullname = ko.pureComputed(function () {
        return this.firstname() + " " + this.lastname();
    })
}
ko.components.register('usersignup', {
    template: { element: 'signup-template' },
    viewModel: { instance: userSignupModel }
});

ko.applyBindings();