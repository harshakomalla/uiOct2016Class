var a = {
    userName: 'Harsha',
    password: 'Komalla',
    isRegistered: true,
    isLoggedIn: false,
    b: {
        userName: 'HKomalla',
        c: {
            password: 'HarshaK'
        }
    }
};

console.log(a);


a.password = 'harshakomalla';
a.b.c.password = 'USA';

console.log(a);
console.log(a.b.c);



var c = {
    userName: 'HarshaKom',
    password: 'KomallaHar',
};

console.log(c);









