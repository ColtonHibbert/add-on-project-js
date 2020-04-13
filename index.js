/*
    JavaScript Language
    JS is a Dynamic and Weakly Typed Language
        Dynamic, means types are not declared on variables
            in JS variables can change what type they are after being declared
            in JS variables are just a reference/container for values
        Weak, means type coercion takes place
            in JS coercion is implicit meaning automatic, 
            you can also be explicit whenever you want
    Single Thread Non-Blocking Language that can be Asynchronous
    use strict; is the unofficial default, all transpilers will use it, must be declared before anything else
*/
/*
    Scripts
        each script is considered its own mini program
        ES modules probably fall into this as well
        External scripts are considered JSONP
        Scripts can go in <head> or <body> tags
        Loading scripts later allows html to load first
            defer="defer", lets page load first before loading script
                <script src="www.url" defer="defer"></script>
            async="async", lets script load asynchronously and not interfere with page
                <script src="www.url" async="async"></script>
        Examples:
            <script>code<script/>
            <script src="www.completeurl.com"></script>
            <script src="/filepath/file"></script>
*/
/*
    Outputting JS code
    Display data with the following methods, JS does not have a standard print object
        .innerHTML = 
        window.console.log()
        window.alert()
        window.print(), brings up print the page box
        document.write(), DON'T USE, will delete ALL HTML when used after page loads
*/
/*
    Statements
    JS programs are a list of statements, aka JavaScript Code
    Statements are executed line by line, unless it's a promise/async
    ; indicates end of a statement
    statements can be multiline
    multiple statements allowed on one line if seperated by semicolons
        a = 5; b = 6; c = a + b;
    semicolons are not required but recommended
        I think transpilers like babel will auto put them in or the browser might do it or maybe they're really not needed now
*/
/*
    Syntax
        {} for code blocks, specifies scope
        identifiers means names of variables
        variables can start with
            letters 
            _
            $
            NOT numbers
        _ underscore at the beginning is convention for a private variable
        variables can't be reserved keywords
        variables declared without assigment are undefined
            var justDeclared; is undefined
        variable multiple declaration
            have comma sepration
            one line
                let person = "John", car = "Subaru", age = 24;
            multi-line
                let person = "John",
                car = "Subaru",
                age = 24;
        JavaScript is Case Sensitive
        Hyphens are a no go for naming, they mean subtract only
        JS uses utf-8/unicode as default
*/
/*
do increment and decrement examples
let x = 3;
let y = x++;
x is 4 and y is 3
    Operators
        Order of Operations
            Value	Operator	Description	            Example
            20	    ( )	        Expression grouping	    (3 + 4), everything inside completed before moving on      
            19	    .	        Member/reference	    person.name
            19	    []	        Member/reference	    person["name"]
            19	    ()	        Function call	        myFunction()
            19  	new	        Create stuff	        new Date()

            17	    ++	        Postfix Increment	    i++
            17	    --	        Postfix Decrement	    i--

            16	    ++	        Prefix Increment	    ++i
            16	    --	        Prefix Decrement	    --i
            16	    !	        Logical not	            !(x==y)
            16	    typeof	    Type	                typeof x
                        
            15	    **	        Exponentiation(ES2016)	10 ** 2
                        
            14	    *	        Multiplication	        10 * 5
            14	    /	        Division	            10 / 5
            14	    %	        Division Remainder	    10 % 5
                        
            13	    +	        Addition	            10 + 5
            13	    -	        Subtraction	            10 - 5
                        
            12	    <<	        Shift left	            x << 2
            12	    >>	        Shift right         	x >> 2
            12	    >>>	        Shift right(unsigned)	x >>> 2
                        
            11	    <	        Less than	            x < y 
            11	    <=	        Less than or equal	    x <= y
            11	    >	        Greater than	        x > y
            11	    >=	        Greater than or equal	x >= y
            11	    in	        Property in an Object	"PI" in Math, or for(key in myObjectName)
            11	    instanceof	Instance of an Object	instanceof myArrayName
                        
            10	    ==	        Equal, coercion	        x == y
            10	    ===	      Strict equal, no coercion x === y
            10	    !=	        Unequal	                x != y
            10	    !==	        Strict unequal	        x !== y
                        
            9	    &	        Bitwise AND	            x & y
            8	    ^	        Bitwise XOR	            x ^ y
            7	    |	        Bitwise OR	            x | y
            6	    &&	        Logical AND	            x && y
            5	    ||	        Logical OR	            x || y
            4	    ? :	        Ternary/Conditon	    ? "Yes" : "No"
                        
            3	    +=	        Assignment	            x += y
            3	    /=	        Assignment	            x /= y
            3	    -=	        Assignment	            x -= y
            3	    *=	        Assignment	            x *= y
            3	    %=	        Assignment	            x %= y
            3	    <<=	        Assignment          	x <<= y
            3	    >>=	        Assignment	            x >>= y
            3	    >>>=	    Assignment          	x >>>= y
            3	    &=	        Assignment          	x &= y
            3	    ^=      	Assignment	            x ^= y
            3	    |=	        Assignment          	x |= y
                        
            2	    yield	    Pause Function      	yield x

            1	    ,	        Comma	                5 , 6
        Arithmetic
            Operator	Description
            +	        Addition
            -	        Subtraction
            *	        Multiplication
            **	        Exponentiation (ES2016)
            /	        Division
            %	        Modulus (Remainder)
            ++	        Increment
            --	        Decrement
        Assignment 
            Operator	Example	    Same As
            =	        x = y	    x = y
            +=	        x += y	    x = x + y
            -=	        x -= y	    x = x - y
            *=	        x *= y	    x = x * y
            /=	        x /= y	    x = x / y
            %=	        x %= y	    x = x % y
            **=	        x **= y	    x = x ** y
        String
            Operator    Description      Example          
            +           concat operator  "Hello " + "World"
            +=                           "He" += "ello"
        Comparison
            Operator	Description
            ==	        equal to, 
            ===	        equal value and equal type
            !=	        not equal
            !==	        not equal value or not equal type
            >	        greater than
            <	        less than
            >=	        greater than or equal to
            <=	        less than or equal to
            ?	        ternary operator
                            variablename = (condition) ? value1:value2 
            when doing comparisions between types strings will get converted to numbers
            "" converts to 0
            non-numeric strings convert to NaN which is a falsy value
        Logical        
            Operator	Description
            &&	        logical and
            ||	        logical or
            !	        logical not
        Type
            Operator	Description
            typeof	    Returns the type of a variable
            instanceof	Returns true if an object is an instance of an object type
        Bitwise
    Data Types
        Primitives
            number types
                number
                    only 1 type of number, 64 bit floating point number, double precision
                    Value (aka Fraction/Mantissa)	Exponent	            Sign
                    52 bits (0 - 51) 	            11 bits(52 - 62)	     1 bit(63)
                    Integers accurate up to 15 places
                        var x = 999999999999999;   // x will be 999999999999999
                        var y = 9999999999999999;  // y will be 10000000000000000
                    Floating points up to 17 decimals
                    Decimals are not 100% accurate
                        multiply and divide by number of places you want  
                        10 to the tenths/one decimal
                        100 to the hundreths/2 decimal places
                        and so forth  
                            var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3
                NaN 
                    not a number
                    doing arithmetic on a string or non-number value
                    when something touches NaN all other operations after it will be NaN
                        var x = 100 / "Apple"; 
                    isNaN(number), function to tell if it's NaN
                    typeof NaN, returns number
                Infinity
                    JS will show this value to represent Infinity or outside of the Largest Number 
                    divide by 0 generates Infinity
                    var x =  2 / 0;       // x will be Infinity
                -Infinity
                Hexadecimal
                    JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
                        var x = 0xFF;        // x will be 255
                number Object
                    DON'T do this
                    number and object are different types
                    objects cannot be compared
                    var y = new Number(123);
            boolean type
                values are
                    true
                    false
                        can use Boolean(checkValue) function to see something is truthy or falsey
                falsy values, everything without a "value"
                    0
                    -0
                    ""
                    undefined
                    null
                    false
                    NaN
                boolean Object
                    DON'T use it

            string type
                anything in quotes
                    ""
                    ''
                    ``
                        backticks enable interpolation, these values then get converted to the string type
                        `I'm ${name}`
                can be zero or more characters
                \ is escape character, 
                    use for special characters
                    \n is newline, doesn't make sense in HTML, designed for typewriters etc
                string Object
                    DON'T do this
            null type
                value of null is undefined, 
                but the type is of object, bug
                you can set things to null just remember that the value of null is undefined
            undefined type
                value is undefined

                Differences between null and undefined
                    typeof undefined           // undefined
                    typeof null                // object
                    null === undefined         // false, null and undefined have different types
                    null == undefined          // true, works because the value is undefined for null but it's type is object                    
        Complex Data Type
            Object types
                object
                    name:value pairs, aka key:value pairs, together name:value are called properties
                    create an object with an object literal
                        var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
                    new keyword can also create an object, use literals where able
                        var person = new Object({firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"});
                    access properties with
                        . object notation
                        ["value"] bracket notation
                    functions can also be stored as properties, a method is a function stored as a property
                        var person = {
                            firstName:"John", 
                            function getAge() { return 24 }, 
                        }
                    typeof {} is "object"
                array
                    create an array with array literal
                        var cars = ["Saab", "Volvo", "BMW"];
                    create an array with new keyword, better to use literals
                        var numbers = new Array(1,2,3);
                        however just 1 argument produces an array with that many empty indexes
                        var arrayOf40Items = new Array(40);
                    typeof [] is "object"
                    isArray(), use this to check if it's an array
                        arrayName.isArray(); 
                    elements with high indexes can create "holes" in an array
                    JS arrays only use numbered indexes, they do not use named indexes like associative arrays/hashes in other languages
                function
                    function name(parameter1, parameter2, parameter3) {
                        code to be executed
                        return //function stops at return
                    }
                    return, value returned back to caller
                    parameters behave as local variables as if defined with let
                    a function must be called with () operator to execute
                    type of function myFunc() {} is "function"   
                    var, function scope, anything declared with var is available anywhere in the function    
*/
/*
    Scope
        Prior to ES2015 there was only global scope and function scope
        //var is function level scope, 
        //?declarations get hoisted, not initializations
                    
*/
/*
    Events
        See DOM and BOM
        HTML events
            document.getElementById(id).addEventListener("click", myFunction)
        Other events
            other objects on the window can also listen to events
*/
/*
    String Methods and Properties
        JavaScript treats primitive values as objects when executing methods and properties, it gives the primitive an object wrapper
        this allows all primitives to have default methods and properties available 
        string properties
            string.
                    Property	    Description
                    constructor	    Returns the string's constructor function
                    length	        Returns the length of a string
                    prototype	    Allows you to add properties and methods to an object 
        string methods, all return a new value and do not change the original variable
            string.
                Method	            Description
                charAt()	        Returns the character at the specified index (position)
                charCodeAt()	    Returns the Unicode of the character at the specified index
                concat()	        Joins two or more strings, and returns a new joined strings
                endsWith()	        Checks whether a string ends with specified string/characters
                fromCharCode()	    Converts Unicode values to characters
                includes()	        Checks whether a string contains the specified string/characters
                indexOf()	        Returns the position of the first found occurrence of a specified value in a string
                lastIndexOf()	    Returns the position of the last found occurrence of a specified value in a string
                localeCompare()	    Compares two strings in the current locale
                match()	            Searches a string for a match against a regular expression, and returns the matches
                repeat()	        Returns a new string with a specified number of copies of an existing string
                replace()	        Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
                search()	        Searches a string for a specified value, or regular expression, and returns the position of the match
                slice()	            Extracts a part of a string and returns a new string
                split()	            Splits a string into an array of substrings
                startsWith()	    Checks whether a string begins with specified characters
                substr()	        Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
                substring()	        Extracts the characters from a string, between two specified indices
                toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
                toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
                toLowerCase()	    Converts a string to lowercase letters
                toString()	        Returns the value of a String object
                toUpperCase()	    Converts a string to uppercase letters
                trim()	            Removes whitespace from both ends of a string
                valueOf()	        Returns the primitive value of a String object  
*/
/*
    Number Methods and Properties
        Properties
            number.
                Property	        Description
                constructor	        Returns the function that created JavaScript's Number prototype
                MAX_VALUE	        Returns the largest number possible in JavaScript
                MIN_VALUE	        Returns the smallest number possible in JavaScript
                NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
                NaN	                Represents a "Not-a-Number" value
                POSITIVE_INFINITY	Represents infinity (returned on overflow)
                prototype	        Allows you to add properties and methods to an object
        Methods
            number.
                isFinite()	Checks whether a value is a finite number
                isInteger()	Checks whether a value is an integer
                isNaN()	Checks whether a value is Number.NaN
                isSafeInteger()	Checks whether a value is a safe integer
                toExponential(x)	Converts a number into an exponential notation
                toFixed(x)	Formats a number with x numbers of digits after the decimal point
                toLocaleString()	Converts a number into a string, based on the locale settings
                toPrecision(x)	Formats a number to x length
                toString()	Converts a number to a string
                valueOf()	Returns the primitive value of a number
*/
/*
    Array Properties and Methods
        Properties
            array.
                Property	Description
                constructor	Returns the function that created the Array object's prototype
                length	Sets or returns the number of elements in an array
                prototype	Allows you to add properties and methods to an Array object 
        Methods
            array.
                Method	        Description
                concat()	    Joins two or more arrays, and returns a copy of the joined arrays
                copyWithin()	Copies array elements within the array, to and from specified positions
                entries()	    Returns a key/value pair Array Iteration Object
                every()	        Checks if every element in an array pass a test
                fill()	        Fill the elements in an array with a static value
                filter()	    Creates a new array with every element in an array that pass a test
                find()	        Returns the value of the first element in an array that pass a test
                findIndex()	    Returns the index of the first element in an array that pass a test
                forEach()	    Calls a function for each array element
                from()	        Creates an array from an object
                includes()	    Check if an array contains the specified element
                indexOf()	    Search the array for an element and returns its position
                isArray()	    Checks whether an object is an array
                join()	        Joins all elements of an array into a string
                keys()	        Returns a Array Iteration Object, containing the keys of the original array
                lastIndexOf()	Search the array for an element, starting at the end, and returns its position
                map()	        Creates a new array with the result of calling a function for each array element
                pop()	        Removes the last element of an array, and returns that element
                push()	        Adds new elements to the end of an array, and returns the new length
                reduce()	    Reduce the values of an array to a single value (going left-to-right)
                reduceRight()	Reduce the values of an array to a single value (going right-to-left)
                reverse()	    Reverses the order of the elements in an array
                shift()	        Removes the first element of an array, and returns that element
                slice()	        Selects a part of an array, and returns the new array
                some()	        Checks if any of the elements in an array pass a test
                sort()	        Sorts the elements of an array
                splice()	    Adds/Removes elements from an array
                toString()	    Converts an array to a string, and returns the result
                unshift()	    Adds new elements to the beginning of an array, and returns the new length
                valueOf()	    Returns the primitive value of an array                  
*/
/*
    Sorting Arrays
        array.sort()
            sorts values as strings, alphabetically 
                    var fruits = ["Banana", "Orange", "Apple", "Mango"];
                    fruits.sort();        // Sorts the elements of fruits
        array.reverse(), just like sort
        Sorting numbers
            array.sort(function(a,b) {return value - value})
                provide a comparing function
                sorting will compare two values, it will sort based on negative, zero, positive
                if the first value is negative in a - b order it means it's smaller and will sort accordingly
                    sort ascending, 
                    default, normal order is a - b, if a i
                        var points = [40, 100, 1, 5, 25, 10];
                        points.sort(function(a, b){return a - b});
                    sort descending
                    just switch the order to b - a
                        var points = [40, 100, 1, 5, 25, 10];
                        points.sort(function(a, b){return b - a});
                uses indexes after array is sorted for highest and lowest values
            Math.max(arr)
                find the highest value, no sorting
            Math.min(arr)
                find the lowest value, no sorting    
        Sorting array of Objects
            cars.sort(function(a, b){return a.year - b.year});
                just compare the desired properties of each object
*/
/*
    JS DATES
        the Date Object allows working with dates
        date objects 
            are static, computer time is ticking but Date Objects are not
            new Date()
                date constructor, 4 ways to make dates
                new Date()
                new Date(year, month, day, hours, minutes, seconds, milliseconds)
                    must at least submit year and month or it will be treated as milliseconds
                new Date(milliseconds)
                    Zero time is January 01, 1970 00:00:00 UTC
                    milliseconds since zero time
                new Date(date string)
        JS date output String, always this format
            Tue Mar 24 2015 18:00:00 GMT-0600 (Mountain Daylight Time)
            toString() method is automatically called when displaying date objects
        date/time format details
            JS months go from 0-11, 
            days of month, weeks etc start at 1
            UTC and GMT are the same
            ISO is the standard
            other types of formats are accepted, not recommended
                Short Date	"03/25/2015"
                Long Date	"Mar 25 2015" or "25 Mar 2015"
        Time formats
            INPUTS
            (YYYY-MM-DD) ISO Date
            (YYYY-MM-DDTHH:MM:SSZ) ISO DATE-TIME
                T is to seperate for time and Z is a delimiter
                if you want to base off time zone add or subtract from the UTC
                new Date("2015-03-25T12:00:00-06:30")
            OUTPUTS
                Independent of input format, JavaScript will (by default) output dates in full text string format:
                Tue Mar 24 2015 18:00:00 GMT-0600 (Mountain Daylight Time) 
        Date.parse()
            convert a date string to milliseconds
            Date.parse("March 21, 2012");
        Date Object properties
            Property            Description 
            constructor	        Returns the function that created the Date object's prototype
            prototype	        Allows you to add properties and methods to an object
        Date Object methods
            Method	            Description
            getDate()	        Returns the day of the month (from 1-31)
            getDay()	        Returns the day of the week (from 0-6)
            getFullYear()	    Returns the year
            getHours()	        Returns the hour (from 0-23)
            getMilliseconds()	Returns the milliseconds (from 0-999)
            getMinutes()	    Returns the minutes (from 0-59)
            getMonth()	        Returns the month (from 0-11)
            getSeconds()	    Returns the seconds (from 0-59)
            getTime()	        Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
            getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
            getUTCDate()	    Returns the day of the month, according to universal time (from 1-31)
            getUTCDay()	        Returns the day of the week, according to universal time (from 0-6)
            getUTCFullYear()	Returns the year, according to universal time
            getUTCHours()	    Returns the hour, according to universal time (from 0-23)
            getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
            getUTCMinutes()     Returns the minutes, according to universal time (from 0-59)
            getUTCMonth()	    Returns the month, according to universal time (from 0-11)
            getUTCSeconds()	    Returns the seconds, according to universal time (from 0-59)
            now()	            Returns the number of milliseconds since midnight Jan 1, 1970
            parse()	            Parses a date string and returns the number of milliseconds since January 1, 1970
            setDate()	        Sets the day of the month of a date object
            setFullYear()	    Sets the year of a date object
            setHours()	        Sets the hour of a date object
            setMilliseconds()	Sets the milliseconds of a date object
            setMinutes()	    Set the minutes of a date object
            setMonth()	        Sets the month of a date object
            setSeconds()	    Sets the seconds of a date object
            setTime()	        Sets a date to a specified number of milliseconds after/before January 1, 1970
            setUTCDate()	    Sets the day of the month of a date object, according to universal time
            setUTCFullYear()	Sets the year of a date object, according to universal time
            setUTCHours()	    Sets the hour of a date object, according to universal time
            setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
            setUTCMinutes()	    Set the minutes of a date object, according to universal time
            setUTCMonth()	    Sets the month of a date object, according to universal time
            setUTCSeconds()	    Set the seconds of a date object, according to universal time
            toDateString()     	Converts the date portion of a Date object into a readable string
            toISOString()	    Returns the date as a string, using the ISO standard
            toJSON()	        Returns the date as a string, formatted as a JSON date
            toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
            toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
            toLocaleString()	Converts a Date object to a string, using locale conventions
            toString()	        Converts a Date object to a string
            toTimeString()  	Converts the time portion of a Date object to a string
            toUTCString()	    Converts a Date object to a string, according to universal time
            UTC()	            Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
            valueOf()	        Returns the primitive value of a Date object        
*/
/*
    Math Object
        Math Properties
            Property	Description
            E	        Returns Euler's number (approx. 2.718)
            LN2	        Returns the natural logarithm of 2 (approx. 0.693)
            LN10	    Returns the natural logarithm of 10 (approx. 2.302)
            LOG2E	    Returns the base-2 logarithm of E (approx. 1.442)
            LOG10E	    Returns the base-10 logarithm of E (approx. 0.434)
            PI	        Returns PI (approx. 3.14)
            SQRT1_2	    Returns the square root of 1/2 (approx. 0.707)
            SQRT2	    Returns the square root of 2 (approx. 1.414)
        Math Methods
            Method	        Description
            abs(x)	        Returns the absolute value of x
            acos(x)	        Returns the arccosine of x, in radians
            acosh(x)	    Returns the hyperbolic arccosine of x
            asin(x)	        Returns the arcsine of x, in radians
            asinh(x)	    Returns the hyperbolic arcsine of x
            atan(x)	        Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
            atan2(y, x)	    Returns the arctangent of the quotient of its arguments
            atanh(x)	    Returns the hyperbolic arctangent of x
            cbrt(x)	        Returns the cubic root of x
            ceil(x)	        Returns x, rounded upwards to the nearest integer
            cos(x)	        Returns the cosine of x (x is in radians)
            cosh(x)	        Returns the hyperbolic cosine of x
            exp(x)      	Returns the value of Ex
            floor(x)	    Returns x, rounded downwards to the nearest integer
            log(x)	        Returns the natural logarithm (base E) of x
            max(x, y, z, ..., n)	Returns the number with the highest value
            min(x, y, z, ..., n)	Returns the number with the lowest value
            pow(x, y)	    Returns the value of x to the power of y
            random()	    Returns a random number between 0 and 1
            round(x)	    Rounds x to the nearest integer
            sin(x)	        Returns the sine of x (x is in radians)
            sinh(x)     	Returns the hyperbolic sine of x
            sqrt(x)	        Returns the square root of x
            tan(x)	        Returns the tangent of an angle
            tanh(x)	        Returns the hyperbolic tangent of a number
            trunc(x)	    Returns the integer part of a number (x)
*/
/*
    Conditionals
        ternary
            const val = (condition) ? return val1 : val2;

        if(condition) {
            code
        }

        if(condition) {
            code
        } else {
            default
        }

        if(condition) {
            code
        } else if(condition) {
            code
        } else if(condition) {
            code
        } else {
            default 
        }

        switch(expression) {
            case x:
                // code block
                day = "Sunday";
                break;
            case y:
                // code block
                day = "Monday";
                break;
            default:
                // code block
        }
            without breaks all cases below the first one triggered will also run, until it finds a break
            a break will break it out of the switch block
            switch uses === strict comparison
*/


