alert("I am a full stack web application developer");
alert("I am Abu Al Shahriar Rifat");
document.write("Abu Al Shahriar Rifat");
console.log("Abu Al Shahriar Rifat");
document.write("<h1>Abu Al shahriar Rifat</h1>");
document.write("<h1>Abu Al shahriar Rifat</h1>");
document.write("<h1>Abu Al shahriar Rifat</h1>");
var myName;
var number=56;
var isName=true;
myName="Abu Al Shahriar Rifat";
var firstName,secondName;
console.log('My Name is '+myName);
firstName="Abu Al Shahriar";
secondName="Rifat";
var mynumber=20;
var myNumber2=73.5343;
var num='625344353';
var myName=true;
var number=6355353436;
var pasringFloat="20.5";
var myCountry="Bangladesh";
//Here I am Printing my details
console.log(typeof(myName));
console.log(typeof(number));
console.log(typeof(isName));
console.log("My first Name is "+firstName);
console.log("My Last Name is "+secondName);
console.log(Number(num));
console.log(typeof(num));
console.log(toString(myName));
console.log(toString(number));
console.log(parseFloat(pasringFloat));
console.log(parseInt(pasringFloat));
console.log(parseInt(pasringFloat).toFixed(1));
console.log(parseInt(pasringFloat).toFixed());
console.log(parseInt(pasringFloat).toPrecision(2));
console.log(Number("01313218256"));
console.log(Number("  12.5  "));
console.log("My Full Name is"+' '+firstName.concat(secondName))
console.log("My Country length ="+myCountry.length);
console.log(myCountry.charAt(2));
console.log(myCountry.charCodeAt(2));
console.log(myCountry.toUpperCase());
var slicingIs=myCountry.slice(2,5);
console.log(slicingIs);
var slicing2=myCountry.slice(3,5);
console.log(slicing2);
//p-1
//Making a calculator using Javascript
var num1=parseInt(prompt('Enter The First Number'));
var num2=parseInt(prompt('Enter The Second Number'));
var farenheightTemparature=parseFloat(prompt("Enter Faren-height"));
var celsiousTemparature=parseFloat(prompt("Enter Celsious"));
var marks=parseInt(prompt("Enter The Marks"));
var sum=num1+num2;
var sub=num-num2;
var div=num1/num2;
var modu=num1%num2;
var AreaofSquare=num1*num1;
var AreaofReactangle=num1*num2;
var Faren=(celsiousTemparature*(9/5)+32);
var celsiousIs=5*(farenheightTemparature-32)/9;
parseFloat(modu);
parseFloat(AreaofSquare);
parseFloat(AreaofReactangle);
console.log(`The sum of 2 numbers are=${sum}`);
console.log(`The sub of 2 numbers are=${sub}`);
console.log(`The division of 2 numbers are=${div}`);
console.log(`The modulas of 2 numbers are=${modu.toFixed(2)}`);
console.log(`The Area of Sqauare is=${AreaofSquare.toFixed(1)}`);
console.log(`The Area of Ractangle is=${AreaofReactangle.toFixed(1)}`);
console.log(`Faren-height temparature=${Faren.toFixed(2)}`);
console.log(`Celsious temparature is =${celsiousIs.toFixed(2)}`);
var n_1=10,n_2=20,n_3=30;
if(n_1>n_2 && n_1>n_3){
   console.log(n_1); 
}else if(n_2>n_1 && n_2>n_3){
    console.log(n_2);
}else{
    console.log(n_3);
}

if(marks>=80 && marks<=100){
    console.log("A+")
}else if(marks>=70 && marks<=79){
    console.log("A")
}else if(marks>=60 && marks<=69){
    console.log("A-");
}else if(marks>=50 && marks<=59){
    console.log("B")
}else if(marks>=40 && marks<=33){
    console.log("B+")
}
else{
    console.log("Fail");
}
var number=78;
var result=(number%2==0)?console.log("true")?(number%3==0):console.log("Number is disivle by 3"):console.log("Number is not disivle by 3");
var firstNumber=100,secondNnumber=200,thirdNnumber=300;
var checkingMaxNumber=(firstNumber>secondNnumber && firstNumber>thirdNnumber)?console.log("first number is max"):console.log("first number is not max")?(secondName>firstNumber && secondNnumber>thirdNnumber)?console.log("second number is max"):
console.log("Second numner is not max")?(thirdNnumber>firstName && thirdNnumber>secondName)?console.log("Third number is max"):
console.log("Third number is not max");
console.log(result)

function Myname(){
 console.log("My name is Abu Al Shahriar Rifat");
}
Myname();
//
var  Mynameis=function First() {
    console.log("My name is Abu Al Shahriar");
  }
console.log(Mynameis());

 const myName2=()=>{
    console.log("I am a full stack web appliaction developer");
 }
myName2();

function addSum(x,y){
    var result=x+y;
    return result;
}
var addingSum=addSum(100,200);
console.log(addingSum);