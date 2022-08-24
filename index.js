
console.log('I am a full stack web developer');
var num=new Array();
for(var i=0;i<num.length;i++){
    num[i]=parseInt(prompt("Enter the number"));
}
var sum=0;
for(var i=0;i<num.length;i++){
    sum+=num[i];
}
console.log("The sum of the numbers are",sum);
var names=[
    "Abu Al Shahriar",
    "Rifat",
    "Rahim",
    "Karim Khan" 
]
console.log(names);
//shift opposite of pop [shift==pop]
var s_1=names.shift();
console.log(names)
//unshift opposite of push [unshift==push]
var s_2=names.unshift("Bangladesh");
console.log(names);
//splice methods  [adding elements]
var splicingIs=names.splice(2,1,"Karim","Rahim");
console.log(splicingIs);
console.log(names)
//splice  methods delete elements
var deletingUsingSplice=names.splice(1,2);
console.log(deletingUsingSplice);
console.log(names);
//slice methods 
var slicing=names.slice(1,2);
console.log(slicing);
console.log(names);
//var sortedNames
var sortedName=names.sort();
var re=sortedName.reverse();
console.log(re);
var reversingIs=names.sort().reverse();
console.log(reversingIs);
//sorting number using sort method
var Numbers=[20,5,25,45,1];
Numbers.sort((a,b)=>{
 return a-b;
})
console.log(Numbers.reverse());
//Object in Javascript
var myBiograpgy={
    name:"Abu Al Shahriar Rifat",
    age:23,
    Cgpa:3.93,
    language:[
        "Bengali","Hindi","English"
    ]
}
console.log(myBiograpgy);
console.log(myBiograpgy.Cgpa)
for(var i=0;i<myBiograpgy.length;i++){
    console.log("Using for-lope",myBiograpgy[i]);
}
console.log(myBiograpgy.name,myBiograpgy.age,myBiograpgy.age,
    myBiograpgy.Cgpa,myBiograpgy.language[2]);
//adding a function in object
function Student(name,age,cgpa,language){
   this.name=name;
   this.age=age;
   this.cgpa=cgpa;
   this.language=language;
}
var s1=new Student("Abu Al Shahriar Rifat",24,3.31,
["Python","Javascript","Typescript"]);
var s2=new Student("Kifayet Nawajesh Keya",24,4.00,['C','C++','JS']);
console.log(s1)
console.log(s2);

//Adding function insode a constuctor function
function MyBiography(name,SystemId,University,Profession,FPL){
    this.name=name;
    this.SystemId=SystemId;
    this.University=University;
    this.Profession=Profession;
    this.FPL=function(){
        console.log("I am a full stack web application developer");
    }
}
var m1=new MyBiography("Abu Al Shhahriar",2019005005,"University of Sharda","Software Enginner");
console.log(m1);
console.log(m1.FPL());

Math Object
console.log(Math.sqrt(4));
console.log(Math.abs(-2));
console.log(Math.cos(45));
console.log(Math.pow(2,4));
console.log(Math.floor(2.5));
console.log(Math.ceil(4.5));
console.log(Math.round(3.4));
console.log(Math.max(100,200));
console.log(Math.floor(Math.random()*10)+10);
console.log(Math.floor(Math.random()*50)+10);
console.log(Math.floor(Math.random()*90)+10);

Making a guessing games
var numberOfWon=0;
var numberOfLost=0;
var gueesingNumber=parseInt(prompt("Enter The gueesing Number from 1 to5"));
while(1){
    var randomNumber=Math.floor(Math.random()*5)+1;
     if(gueesingNumber==randomNumber){
        console.log("You have won");
     }else{
        console.log("You have lost.Random Number was",randomNumber);
     }
}

Date method in Javascript
var date=new Date();
console.log(date);
var year=date.getFullYear();
console.log(year);
var month=date.getMonth();
console.log(month);
var myDate=date.getDay();
console.log(myDate);
var currentDate=date.getDate();
console.log(currentDate);
var cuurentHour=date.getHours();
console.log(cuurentHour);
//document object model

document.getElementById('myName').innerHTML="Hello";
document.getElementById("para").style.color="red";
document.getElementById("para").style.background="yellow";
document.getElementById("para").style.padding="10px 20px";
document.getElementById("para").style.textAlign="center";

document.getElementsByTagName("h1")[0].innerHTML="1";
document.getElementsByTagName("h1")[1].innerHTML="2";
document.getElementsByTagName("h1")[2].innerHTML="3";

// document.getElementsByClassName("myClassName")[0].innerHTML="Abu Al Shahriar Rifat";



// document.querySelector('.myDiv a').innerHTML="new-text";
// //
const myMessage=()=>{
    alert("I am Working as a spfiware Engineer at Google");
}
const showinfPara=()=>{
    alert('y6dtdh')
}
var myvar=document.querySelector('#p1')
function m1(){
myvar.innerHTML="You have clicked m1"
}
function m2(){
myvar.innerHTML="You have clicked m2"
    }
var myVar=document.querySelector("#p1");
function m_1(){
    myVar.innerHTML="Showing message-1";
}
function m_2(){
    myVar.innerHTML="Showing message-2";
}
function p1(){
    myVar.src="img/1.C.png";
}
 var showingImg=document.querySelector('#img1');
 function p1(){
    showingImg.src="img/1.C.png";
 }
 function p2() {
    showingImg.src="img/2.C++.png";
   }
 var myDom=document.getElementsByTagName('h1')[0];
myDom.style.background="yellow";
myDom.style.padding="10px 20px";
myDom.style.textAlign="center";
var link=document.getElementById('a1');
link.innerHTML="Rifat";
link.style.textDecoration="none";
link.style.background="yellow";
link.style.padding="10px 20px";
link.style.margin="0 auto";
link.style.width="100px"; 
var haeding_1=getElementsByTagName("h1")[1];
haeding_1.innerHTML="Say Hello";
var heading1=document.getElementsByTagName('h1')[0];
var heading2=document.getElementsByTagName('h1')[1];
var heading3=document.createElement("h1");
var heading4=document.createElement("h1");
var text=document.createTextNode("Javascript Programming");
var text2=document.createTextNode("Python Programming");

heading1.innerHTML="C programming";
heading2.innerHTML="C Plus Plus Programming";
heading3.appendChild(text);
heading4.appendChild(text2);
var heading3_1=document.getElementById('my-div');
heading3_1.appendChild(heading3);
var heading3_2=document.getElementById('my-div');
heading3_2.appendChild(heading4);
// //Removing Tag
var Removing1=document.getElementsByTagName('h1')[2];
var removeTag=document.getElementById("my-div");
removeTag.removeChild(Removing1);
// ///add in the top
var addingDiv=document.getElementById('my-div');
var heading0=document.createElement("h1");
var text0=document.createTextNode("Go Programming");
heading0.appendChild(text0);
addingDiv.appendChild(heading0);

// //Make a slider
var photos=[
"img/1.C.png",
"img/2.C++.png",
"img/3.Java.png",
"img/4.JS.png"];
var count=0;
var image_finder=document.querySelector("img");
function next(){
  count++;
  if(count>=photos.length){
    count=0;
    image_finder.src=photos[count];
  }else{
    image_finder.src=photos[count];
  }
}
function prev(){
    count--;
    if(count<0){
     count=photos.length-1;
     image_finder.src=photos[count];
    }else{
        image_finder.src=photos[count];
    }
}


//add style 
var S1=document.querySelector('#para-2');
function addStyle(){
 S1.classList.add('paraC-1')
}
//Remove style
function removeStyle(){
 S1.classList.remove('paraC-1')
}

//Event Listener
document.querySelector("button").addEventListener("click",myClick)
function myClick(){
    alert("I am  a full stack web application developer")
}
var myVariable=document.querySelector('h1');
myVariable.addEventListener("mousedown",function(){
    myVariable.classList.add('p2')
})
myVariable.addEventListener('mouseover',function () {
    myVariable.classList.remove('p2');
})
var buttonLength=document.querySelectorAll(".button-1").length;
for(var i=0;i<buttonLength;i++){
    var btnIs=document.querySelectorAll('.button-1')[i];
btnIs.addEventListener("click",function () {
    var text=this.innerHTML;
    document.querySelector("h1").innerHTML=text+" "+"Is clicked";
  })
}

// adding mp3 

 var lengthOfSongs=document.querySelectorAll('.button-1').length;
for(var i=0;i<lengthOfSongs;i++){
var playingmusice=document.querySelectorAll('.button-1')[i];
playingmusice.addEventListener('click',function(){
    var text=this.innerHTML;
      console.log(text);
      playMusice(text);
      animatedButton(text);
    })
}

function playMusice(text){
    switch(text){
        case "Button-1":
        var audio=new Audio('songs/s1.mp3') ;
        audio.play();
        break;
        case "Button-2":
           var audio=new Audio('songs/s2.mp3') ;
           audio.play();
           break;
           case "Button-3":
               var audio=new Audio('songs/s3.mp3') ;
               audio.play();
               break;
     }
}
      
  document.addEventListener("keypress",function(event){
   var text=event.key;
   playMusice(text);
   animatedButton(text);
  })

  function animatedButton(text) {
       var sectedButton=document.querySelector("."+text);
       sectedButton.classList.add("anim");

       setTimeout(function () {
        selectedButton.classList.remove("anim");
         },2000);
    }
     
//KeyPress addEventListener

document.addEventListener("keypress",function(event){
var text=event.key;
document.querySelector("p").innerHTML="You have pressed="+" "+text;
});

var count=0;
var selectedTextArea=document.querySelector("textarea");
selectedTextArea.addEventListener("keypress",function(event){
    count++;
    var text=event.key;
    document.querySelector("p").innerHTML="You have written"+" "+count;
})
//error Handling
try{
    alert('Hi Everyone');
    alert("Bye EveryOne");
    alert(x);
}catch(err){
  alert("Inside catch block");
  console.log(err)
  console.log(err.name);
  console.log(err.message);
}finally{
    alert("Bye I have learn Javascript")
}

document.querySelector("#checkButton").addEventListener("click",function(){
  var num= document.querySelector("#numberTextField").value
  try{
   if(num<5){
      throw "Input is too low";
   }else if(num>5){
     throw "Input is too high";
   }
  }catch(err){
     console.log(err)
  }
});
//Canvas using [Graphics design using Javascript]
var c=document.getElementById('design_Canvash');
var ctx=c.getContext("2d");
ctx.lineWidth=3;
ctx.strokeStyle="black";
ctx.strokeRect(10,10,380,280);


ctx.fillStyle="green";
ctx.fillRect(12,12,376,280);

var centerX=c.width/2;
var centerY=c.height/2;

ctx.beginPath();
ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();

ES6
var x=90;
let y=89,z=78;
console.log(y+z);


const add=(x,y)=>{
    var sum=x+y;
}
add(10,20);
hosting and 
x=20;
console.log(x);
var x;

// //default and rest parameter
function message(text){
    console.log(`I love js and ${text}`);
}
message("I love javascript es6");

function msg(text="Hello this is a default parameter") {
    console.log(`text is=${text}`)
  }
  msg();
  msg("I am a working as a full stack  software Enginner");

  //rest parameter
  function sum(x,y, ...z){
    console.log(`The sum of 2 numbers are=${x} and ${y} and the
     value of using rest parameter is ${z}`)
  }
  sum(10,20,30,40,50,60,70);
  
//   spread operator
  function addNumbers(x,y,z){
   return x+y+z;
  }
  var numbers=[1,2,3];
  console.log(addNumbers(...numbers));
  let numbers1=[5,6,...numbers];
  console.log(numbers1)
var arr_1=[1,2,3,4,5];
var arr_2=[6,7,8,9,10];
var concatArr=[...arr_1,...arr_2];
console.log(concatArr)
var object1={
    name:"Abu Al shahriar Rifat",
    nationality:"Bangladeshi"
}
var object2={
    age:24,
    qualification:"Software Enginnering",
}
var concatObject={...object1,...object2};
console.log(concatObject)

const addSum=(a,b,c,d,e)=>{
    return a+b+c+d+e;
}
console.log(addSum(...arr_1));


// //Object Literals
function studentInformation(name,age){
    return {
        name,
        age
    }
}
console.log(studentInformation("Abu Al shahriar Rifat",24));

// //Object Literal consize
let message={
     body:function(){
        return `Hi ,I am Object function`;
     }
}
console.log(message.body());

let myMessage={
    'mybody-name'(){
        return `Hi,I am Abu Al Shahriar Rifat`;
    }
}
console.log(myMessage['mybody-name']());
let myFullName={
    'MyFullname'(myname){
        return `My name is ${myname}`
    }
}
console.log(myFullName['MyFullname']('Abu Al Shahriar Rifat'));

//for of and for in loope
const names=["s1","s2","s3"];
var students={
    name:"Abu Al shahriar Rifat",
    SystemId:2019005005,
    CGPA:3.94,
}
// //for of itaration
for(let name of names){
    console.log(name);
}
// //for in itaration
for(let i in students){
    console.log(students[i]);
}

//for loope
var numbers=[10,20,30,40,50];
var squareNumber=[];
var newNumbers=[];
for(var x=0;x<numbers.length;x++){
    console.log(numbers[x]);
}
// //for Each loope
numbers.forEach(myName);
function myName(x){
   console.log("Using special=",x);
}
numbers.forEach(function name(i){
   console.log("Using inter function-"+i);
})
numbers.forEach(function(x){
    console.log("Using Annonymus function",x);
})
numbers.forEach(function(x){
    squareNumber.push(x*x);
})
console.log(squareNumber);
numbers.forEach(function(x,index,arr){
    newNumbers.push(arr[index]=x+5)
})
console.log(newNumbers)

//forEach,Map,filter
var numbers=[1,2,3,4];
var squareNumbers=[];
var arrayFiltering=[10,45,3,5,78,30];
numbers.forEach(function(x){
    squareNumbers.push(x*x);
})
console.log(squareNumbers);

// //Map function=>Map Function retunrs a array
var makingSquarearray=numbers.map(function(x){
    return(
        x*x
    )
})
console.log(makingSquarearray);
var filteringArray=arrayFiltering.filter(function(x){
    return x>10;
})
console.log(filteringArray);

//Arrow function
const display1=()=>{
    console.log("I am a display-1")
}
const display2=()=>{
   console.log("I am a display-2");
}
display1();
display2();


//passing parameter;
const add=(number1,number2)=>{
    return number1+number2;
}
console.log(add(100,200));
const add2=(n1,n2,n3)=>n1+n2+n3;
console.log(add2(100,200,300));