let userData = {
    signUp: '2020-10-06 15:00:00',
    id: 'minidoo',
    name: 'Not Set',
    setName: function(firstName, lastName) {
        this.name = firstName + ' ' + lastName;
    }
}

function getUserName(firstName, lastName, callback) {
    callback(firstName, lastName);
}

getUserName('kim', 'deokyong', userData.setName);

console.log('1: ', userData.name); // Not Set
console.log('2: ', name); // kim deokyong

/*
getUserName()이 전역함수라서
getUserName 안에서 호출되는 setName에서
-> this.name에서의 this는 전역 객체인 window객체의 프로퍼티가 되서 name이라는 전역변수가 생성되서 그 안에 값이 들어간 것이다.
-> this.name은 앞에 var,let,const 가 없이 선언된 것이므로 전역변수로 선언된 것이고, 그렇기 때문에 전역변수 name을 출력해보면 그 안에 값이 저장된 것이다.
*/