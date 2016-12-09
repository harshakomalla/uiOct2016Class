(function(){

    // Concatenation - merging two strings
    var a = 'Harsha';
    var b = 'Komalla';
    var c = a + b;
    console.log(c);

    // Concatenation - adding two numbers
    var x = 1;
    var y = 25;
    var z = x + y;
    console.log(z);

    // Concatenation - merging a string and a number
    var p = 'Harsha';
    var q = 55;
    var r = p + q;
    console.log(r);

    // To find the length of the output
    console.log(c.length);
    console.log(r.length);

    // To replace a string with other string
    var d = a.replace(/Harsha/i , 'HARSHA');
    console.log(d);

    // To replace a character with other
    var e = b.replace('K' , 'k');
    console.log(e);

    // To know the character in a string at that particular location
    var f = e.charAt(3);
    console.log(f);

    // Concat - To add two or more strings
    console.log(b.concat(' Harsha' , ' ' , 'is doing well.' , ' Hello World!!'));

    // To get the location of a character in a string, when a no such character is present it returns -1
    var g = p.indexOf('a');
    console.log(g);

    var h = p.indexOf('z');
    console.log(h);

    // substr - cuts some characters from the string taking starting index and number of characters as arguments to cut
    var i = p.substr(2 , 4);
    console.log(i);

    // substring - cuts some charcaters from the string taking starting index and ending index as arguments to cut
    var j = p.substring(1, 5);
    console.log(j);

    // slice - gives a part of characters from the start and end index or just outputs the charcater from the index value given
    var k = p.slice(0 , 3);
    console.log(k);

    var l = p.slice(2);
    console.log(l);

    // match - matches from two strings
    var name = 'Harsha Komalla';
    var m = name.match(p);
    console.log(m);

    // split - converts the string into array of strings
    var n = 'India USA Pakistan UK Paris London Syndey Newyork';
    console.log(n.split(' '));

    // To know whether the string ends with a particular word or not
    console.log(n.endsWith('Newyork'));
    console.log(n.endsWith('Paris'));

    // To convert the string to lower case
    console.log(d.toLocaleLowerCase());

    // To convert the string to upper case
    console.log(e.toLocaleUpperCase());

})();