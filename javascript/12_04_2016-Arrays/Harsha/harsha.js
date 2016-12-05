(function(){

    // Different arrays with different datatypes
    var a = ['Harsha' , 'Komalla' , 'USA' , 'KC' , 'MO'];

    var b = [1, 2, 3, 4, 5 ];

    var c = [{
        name : 'Harsha Komalla',
        rollno : '10',
        isPresent : true
    },{
        name : 'K Harsha',
        rollno : '11',
        isPresent : false
    }]

    console.log(a);
    console.log(b);
    console.log(c);

    // To print 0th index of Array "a"
    console.log(a[0]);

    // To add an entity to the Array "b"
    b[5] = 6;
    console.log(b);

    // To check whether the variable is an array or not
    var d = 11;
    console.log(Array.isArray(a));
    console.log(Array.isArray(d));

    // To know the length of an array
    console.log(c.length);

    // To add an entity at the end of the array
    c.push({
        name : 'Komalla H',
        rollno : '12',
        isPresent : false
    })
    console.log(c);

    // To remove an entity from the end of the array
    a.pop();
    console.log(a);

    // To add an entity at the start of the array
    b.unshift(0);
    console.log(b);

    // To remove an entity from the start of the array
    c.shift();
    console.log(c);

    // To add an entity at any location in an array
    a.splice(2, 0, 'India');
    console.log(a);

    // To remove an entity from any location in an array
    a.splice(4, 1);
    console.log(a);

    // To find an entity location in an array
    console.log(b.indexOf(3));

    console.log(b.indexOf(10));

    // To merge two arrays
    var e = a.concat(b);
    console.log(e);

    // To fill the elements of ana array with a static value from a start index to end index
    b.fill(10, 1, 4);
    console.log(b);

    // To print values which satisfy the condition given by the function
    function filterout(value){
        return (value != 'Harsha');
    }
    var f = ['Harsha' , 'Komalla' , 'Harsha' , 'India' , 'Harsha' , 'USA'];
    var g = f.filter(filterout);
    console.log(g);

    // To join the values inside an array
    console.log(g.join());

    // To return the first location of  the entity which satisfies the condition given by the function
    function findPlace(value){
        return (value == 'Harsha');
    }
    var h = ['A' , 'B' , 'Harsha' , 'D' , 'Harsha'];
    console.log(h.findIndex(findPlace));

    // To print the contents of an array
    function logArrayElements(element, index, array){
        console.log('i[' + index + '] =' + element);
    }
    var i = [100, 101, 102, 103, 104, 105];
    i.forEach(logArrayElements);

    // To find whether an entity is present in the array or not
    console.log(i.includes(104));
    console.log(i.includes(106));

    // Creates a new array with the results of calling a function
    var j = [16, 25, 36];
    var squares = j.map(Math.sqrt);
    console.log(squares);

    // To reverse the entities in the array
    var k = ['India' , 'USA' , 'UK' , 'Africa' , 'China' , 'Japan' ];
    console.log(k);
    var reversedArray = k.reverse();
    console.log(reversedArray);

    // To sort an array
    console.log(k.sort());

    var l = [34, 95, 12, 66, 21, 57, 83, 19];
    console.log(l.sort());

})();