let userData = {
    signUp: '2020-10-06 15:00:00',
    id: 'minidoo',
    name: 'Not Set',
    setName: function(firstName, lastName) {
        this.name = firstName + ' ' + lastName;
    }
}

function getUserName(firstName, lastName, callback, obj) {
	callback.call(obj, firstName, lastName);
}

getUserName('kim', 'deokyong', userData.setName, userData);

console.log(userData.name); // kim deokyong