
// var myArray = ["apple", "mango", "kiwi", "banana", "orange"];

// var first = myArray[0];
// var last = myArray[myArray.length - 1];

// myArray[0] = last;
// myArray[myArray.length - 1] = first;

// console.log(myArray);


//<-------------------------------Chapter no 14 to 16 -------------------------------->

//Question no 01
// var studentNames = new Array();   //"literal Notation"

//Question no 02
// var studentNames = [];  //"Object Notation"

//Questuion no 03

// var strings;
// strings=["a","b","c","d","e"];

//Question no 04

// var numbers;
// numbers=[1,2,3,4,5];

//Question no 05

// var boolean;
// boolean=[true,false]

//Question no 06

// var mixed;
// mixed=["a","b",1,2,true,false]


//Question no 07

// var store;
// store=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<h1>Qualiafications:</h1>")
// document.write("<ol>" + "<b>"+"<li>" + store[0] + "</li>" +"<li>" + store[1] + "</li>" + "<li>" + store[2] + "</li>" + "<li>" + store[3] + "</li>" + "<li>" + store[4] + "</li>"+ "<li>" + store[5] + "<li>" + store[6] + "</li>" + "</li>"+ "<li>" + store[7] + "</li>"+"</b>"+"</ol>")

//Question no 08

// var stuName = ["Umar","Ali","Usman"]
// var score = [320,230,480]
// var total = 500;

// document.write("Score of "+stuName[0] + " is " + score[0] + ". " + "Percentage:" + score[0]/total*100 + "%"  )
// document.write("</br>Score of "+stuName[1] + " is " + score[1] + ". " + "Percentage:" + score[1]/total*100 + "%"  )
// document.write("</br>Score of "+stuName[2] + " is " + score[2] + ". " + "Percentage:" + score[2]/total*100 + "%"  )

//Question no 09
//(.A)
// var color = ["Red","Green","Blue","Orange","Purple","White"]
// document.write("Original Colors: " + color+"</br>")
//  var askcolor = prompt("Write the Color which you want at the beginning")
// color.unshift(askcolor)
// document.write("Updated Colors: "+ color )

//(.B)
//  var askcolor =prompt("Choose the Color which you want at the end")
// color.push(askcolor)
// document.write("Updated Colors :"+ color )

//(.C)
//  var askcolor =prompt("Add two more the Color which you want at the beginning")
// color.unshift(askcolor)
// document.write("Updated Colors :"+ color )

//(.D)
// color.shift()
// document.write("Updated Colors :"+ color )

//(.E)
// color.pop()
// document.write("Updated Colors :"+ color )

//(.F)
// var index = +prompt("Write the index at which you add color")
// var colorName = prompt("Write the color name ")
// color.splice(index,0,colorName)
// document.write("Updated Colors :"+ color)

//(.G)

// var index = +prompt("Write the index at which you delete color")
// var colorNo = prompt("Write the no of color names which you want to delete ")
// color.splice(index,colorNo)
// document.write("Updated Colors :"+ color)

//Question no 10

// var score = [320,230,480,180]
// document.write("Score of Students : " + score + "</br>")
// score.sort(function(a, b){return a-b});
// document.write("Ordered Score of Student : "+score)

//question no 11

// var cities = ['Karachi', 'Islamabad', 'Quetta', 'Lahore', 'Peshawar'];
// var selectedCities = [];
// selectedCities.push(cities[1], cities[2], cities[4]);
// document.write("Citeies list : " + cities); 
// document.write("</br>Selected Cities: " +selectedCities);

//Question no 12
// var arr = ["This ","is ","my ","cat"]
// document.write("Array: </br>"+arr)
// var string = arr.join('')
// document.write("</br>"+"String :"+ string)


//Queation no 13

// var device = ["monitor","keyboard","mouse","printer"]

// document.write("Devices: "+"</br>"+device+"</br>")


// device.push("monitor")
// device.push("keyboard")
// device.push("mouse")
// device.push("printer")

// document.write("Out: "+"</br>"+device.shift()+"</br>")
// document.write("Out: "+"</br>"+device.shift()+"</br>")
// document.write("Out: "+"</br>"+device.shift()+"</br>")
// document.write("Out: "+"</br>"+device.shift()+"</br>")


//Question no 14

// var devices = ["keyboard","mouse","printer","monitor</br>"];

// document.write("Devices: "+"</br>"+devices+"</br>")

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// document.write("Out: "+"</br>"+devices.pop()+"</br>"); 
// document.write("Out: "+"</br>"+devices.pop()+"</br>"); 
// document.write("Out: "+"</br>"+devices.pop()+"</br>"); 
// document.write("Out: "+"</br>"+devices.pop()+"</br>");

//Question no 15

// var mobileBrands = ["Apple","Samsung","Motorola","Nokia","Sony","Hair"]
// document.write( "<label for='brand'>"+"Choose a mobile Brand: "+"</label>"+ "<select name='mobileBrand' id='brand'>"+"<option value='apple'>"+mobileBrands[0]+"</option>"+"<+ value='samsung'>"+mobileBrands[1]+"<option value='motorola'>"+mobileBrands[2]+"</option>"+"<option value='nokia'>"+mobileBrands[3]+"</option>"+"<option value='sony'>"+mobileBrands[3]+"</option>"+"<option value='hair'>"+mobileBrands[4]+"</option>" +"</select>")

