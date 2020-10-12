// Foreach duplicate the markup for each entry on the array
ko.applyBindings({
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    tweets: [1,2,4,8,16,32,64,128,256,512,1024,'Christmas']
});

// ko.applyBindings({
//     people: [
//         { firstName: 'John', lastName: 'Dean' },
//         { firstName: 'Mark', lastName: 'Rufalo' },
//         { firstName: 'Gabriel', lastName: 'Pensador' },
//         { firstName: 'Rafael', lastName: 'Perozin' }
//     ]
// });