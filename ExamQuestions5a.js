/**
 * Created by mrlef on 1/8/2017.
 */

//Question 1 - Explain the two strategies for improving JavaScript: ES6 (es2005) + ES7, versus Typescript. -------------
// What does it require to use these technologies: In our backend with Node, and in (many different) Browsers.

/*
 * Es2015 giver javascript features såsom arrow functions, klasser og arv, promises, generators etc.
 - Skal bruge en transpiler for at kunne bruges med nodeJS (medmindre man bruger LTS v6.x).


 * TypeScript er opensource og tilføjer typer til Javascript.
 * Angular2 bliver designet til at blive brugt med Typescript (kan også bruges med es2015).
 - Skal compiles til ES5 på browsersiden.
 - Kan bruges med NodeJS sammen med en typescript compiler.
 */






// Question 2 - Provide examples and explain the ES6 (es2005) features: let, arrow functions, this, --------------------------
// rest parameters, de-structuring assignments, maps/sets etc.


// Let har med scope at gøre. Let gør at hvis en let variabel ligger i et ydre scope så kan man godt referere til det
//fra et indre scope. Mens ligger let variablen i et indre scope, så kan man ikke referere til det uden for det scope.


//let--------------------------------------------
// let a = "okay";
//
// (function innerScope() {   //self invoking function
//     console.log(a);
//     let b = "kan ikke ses ude fra"
// })();
//
// try {
//     console.log(b)
// } catch (e) {
//     console.log("kunne ikke se b")
// }

// arrow function -------------------------------
// let multiply = (x, y) => x * y;
//
// console.log(multiply(5, 10))  // returnerer 50


// this -----------------------------------------
//this i ES6 laver ikke sin egen context. Så den har sin context fra den ydre skal.


// WHAT THE FUQ? !!!!!!!!!!!!!!!!!!!!!!!!!!!!


//Rest Parametre i ES6 ------------------------

// function myFunction() {
//     for(var i in arguments){
//         console.log(arguments[i]);
//     }
// }
// var params = [10, 15];
// myFunction(5, ...params)

//Rest parameters kan man bruge fremfor at skrive hver parameter. Så kan man bare skrive ...params (array).


//De-structuring assignments ---------------

// var b = [6, 7, 8, 9]
// var c = [b, 1, 2, 3, 4, 5];
//
// [g, x, ...rest] = c;  // her definerer vi hvad g, x, rest er.
// console.log(g) // [6, 7, 8, 9]
// console.log(x) // 1
// console.log(rest); // [2,3,4,5]


//Maps ------------------------------------

//In Map you can use any value as Key (even an object).

// let map = new Map();
//
// map.set('foo', 123);
// console.log("get the value of 'foo' in map: " + map.get('foo'))  // returns 123
// console.log("'foo' exists in the map: " + map.has('foo'))  //returns true
// console.log("deleted 'foo' key: " + map.delete('foo'))  //returns true
// console.log("'foo' is indeed deleted: " + map.has('foo'))  //returns false


//Question 3 - Explain and demonstrate how es2015 supports modules (import and export) similar to what -----------------
// is offered by NodeJS.


//VIRKER IKKE?!?
// export function square(x) { return x * x; }
//
// export function  diag(x, y) { return x + y; }


// Question 4 ----------------------------------------------------------------------------------------------------------
// Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

/*
 I ES6 behøver den klasse som arver fra en anden klasse, ikke en kontstruktor. Firkant har stadig adgang til
 konstruktoren fra Shape. Men i javascript SKAL der være en konstruktor.
 I JAVA behøves der ikke en konstruktor, men har man en konstruktor SKAL der være konstruktor i de klasser som arver.
 */

// class Shape {
//     constructor(color) {
//         this._color = color;
//     }
// }
//
// class Firkant extends Shape {
//     // constructor(){      // i javascript ville det se sådan her ud.
//     //     super(Shape);
//     // }
//
//     returncolor() {
//         return this._color;
//     }
// }
//
// var firkant = new Firkant("grøn"); // når man laver en firkant har den automatisk color fra Shape, via arv.
//
// console.log(firkant.returncolor())


//Question 5 -----------------------------------------------------------------------------------------------------------
//Explain about promises in (pick one) ES 6, Typescript, AngularJS including:
// The problems they solve.
// Examples to demonstrate how to avoid the "Pyramid of Doom"
// Examples to demonstrate how to execute asynchronous code in serial or parallel

/*
 Hvis vi gerne vil lave en asynctask (kan være crypto, kunne være http kald, kunne være hvad som helst)
 kan vi i ES2015 gøre brug af Promises.
 En Promise er en 'placeholder' for et fremtidigt svar/objekt, eller hvad end man vil kalde det.
 Promises kan gøre brug af deres .then() metode, som bliver kørt, når en Promise
 har fået svar fra det den bad om (kunne være et REST-kald eller andet, som er async).

 Det gode ved .then() er, at det også returnerer en Promise og vi kan derfor chaine vores kald,
 hvis vi vil have svarene i en bestemt rækkefølge.
 Først når vi har fået et bestemt svar kalder vi .then() hvori vi kalder på et nyt REST-kald osv.

 Det fede er, at man kan slutte med en .catch() og kun skrive sin error-handling et sted.
 Man kunne dog også kalde en .catch efter et specifikt .then() hvis man ville.
 Hvis man i stedet vil lave 100 random forespørgelser og er ligeglad med rækkefølgen kan man gøre brug af Promise.all,
 der ikke holder styr på rækkefølgen på ens promises, men venter på at alle Promises er fuldført,
 og derefter kan man kalde .then() metoden og gøre noget med sine svar.
 */



// Callback approach MED pyramid of doom.
// async1(function(){
//     async2(function(){
//         async3(function(){
//             ....
//         });
//     });
// });



//Callback approach UDEN pyramid of doom
// let multiply = (x, y) => x * y;
//
//
// function timeout() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 100);
//     })
// }
//
// var p = timeout().then(() => {
//     var a = multiply(5, 10)
//     console.log(a)
//     return a
// }).then((b) => {
//     console.log(multiply(b, 10))
// }).catch((e) => {
//     console.log(e)
// })





// Question 6 ----------------------------------------------------------------------------------------------------------
// Explain about Generators and how to use them to:
// Implement iterables
// Implement blocking with asynchronous calls

/*
Generatorer er funktioner som kan blive paused eller genoptaget.-------------

    Generatorer

    Kan blive brugt som Iterators (Data producers): Hvert yield(yield bruges til at pause en funktion inde i sig selv.
    Intet kan pause en generator udefra. Den kan kun pause sig selv - inde fra) kan returnere en værdi via next().
    Dette betyder generatorer kan producere en sekvens af værdier via loops og recursion.
    Grundet generator objekter implementere interfacet Iterable, kan disse sekvenser blive arbejdet på af alle
    ECMAScript 6 konstruktører som understøtter Iterables. To eksempler er: for-of loops og spread operatoren.

    Kan blive brugt som Observers (data consumers): yield kan også modtage en værdig fra next(), vha en parameter. Dette betyder at
    generatorer kan blive Data Consumers som pauser indtil de får en ny værdig skubbet til sig via next().

    */


//Syntaks til at lave en generator er:
// function *foo() {
//     // ..
// }

//Eksempel på en generator med yield:
// function *foo(x) {
//     var y = 2 * (yield (x + 1));
//     var z = yield (y / 3);
//     return (x + y + z);
// }
//
// var it = foo( 5 );
//
// // note: not sending anything into next() here
// console.log( it.next() );       // { value:6, done:false }
// console.log( it.next( 12 ) );   // { value:8, done:false }
// console.log( it.next( 13 ) );   // { value:42, done:true }




// function *foo() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     return;
// }
//

// for..of loop
// for (var v of foo()) {
//     console.log( v );
// }
// // 1 2 3 4 5


//Blocking calls------------

//Blocking call returnerer først når alle er færdige og i den rigtige rækkefølge.

let slow = new Promise((resolve) => {
    setTimeout(resolve, 2000, 'slow');
});
let instant = 'instant';

let quick = new Promise((resolve) => {
    setTimeout(resolve, 50, 'quick');
});

//Rigtig rækkefølge
Promise.all([slow, instant, quick]).then((responses) => {
    console.log(responses)
});