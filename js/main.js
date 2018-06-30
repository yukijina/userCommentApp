//select id=formDiv and store in a variable
var Div1 = document.getElementById('formDiv');
//create button element to HTML and store in a valiable
var myBtn = document.createElement('button');
 //give class name to myBtn created above (style button)
 myBtn.className = 'btn btn-outline-info';
 //create text to myBtn
 myBtn.textContent ='POST';
 //myBtn is appended to div
 Div1.appendChild(myBtn);

//we work on click function here
// preparation

var newH2 = document.createElement('h2');
//create p element to div id=result
var t = document.createElement('p');
//select div id=result and store in a variable
var resultDiv = document.getElementById('result');

var body = document.getElementsByTagName('body')[0];




 //create onlick function to myBtn and create myFunction
 myBtn.onclick = function () {myFunction()};

 function myFunction() {
// input and text area:
   //store input element in a variable
   var myInput = document.getElementById('myInput').value;
   //create text typed in myInput
   var inputText = document.createTextNode(myInput);

   //store textarea element in a variable
   var myText = document.getElementById('myText').value;
  //create text typed in myText
   var textText = document.createTextNode(myText);
   //append inputText and textText
   newH2.appendChild(inputText);
   t.appendChild(textText);

    //h2 and p append to div
    resultDiv.appendChild(newH2);
    resultDiv.appendChild(t);


 };

 // Remove and Hide button
  //create div element
  var divBtn = document.getElementById('divBtn');
  //create remove button element
  var remBtn = document.createElement('button');
  //give class name to remove button
  remBtn.className = 'btn btn-outline-danger remove';
  //give text inside remove button
  remBtn.textContent = 'Remove';

  //reate hide button
  var hideBtn = document.createElement('button');
  //give class name to hide button
  hideBtn.className = 'btn btn-outline-success hide';
  //give text to hide button
  hideBtn.textContent = 'Hide';

  //append both remove and hide button to div
  divBtn.appendChild(remBtn);
  divBtn.appendChild(hideBtn);


//remove function
remBtn.onclick = function () {remFunction()};
function remFunction() {
  //remove H2 and text inside div id=result
  resultDiv.remove(newH2);
  resultDiv.remove(t);
}

//hide and show function
//create onclick
hideBtn.onclick = function () {hideFunction()};

//Ref.toggle show/hide
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function hideFunction() {
 if (resultDiv.style.display === 'none') {
     resultDiv.style.display = 'block';
 } else {
   resultDiv.style.display = 'none'
 }
}


/////////


//turn on when you create image
//creat array & object for dropdown
// var animals = [
//    {
//      name: '',
//      path: '',
//      desc: ''
//    },
//   {
//     name: 'penguin',
//     path: 'https://www.aquarium.co.za/cache/ce_img_cache/local/24be6a810f238a37/rockhoppergathering_800_600_80_c1_c_c.jpg',
//     desc: 'penguin'
//   },
//   {
//     name: 'sea otter',
//     path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOzksus_JHe3YnJRke-f-KgvDAkmH7QkWzH07iv8MN0aSWQtG',
//     desc: 'sea otter'
//   },
//   {
//     name: 'dolphin',
//     path: 'https://worldanimalnews.com/wp-content/uploads/2017/04/DOLPHINS.jpg',
//     desc: 'dolphin'
//   },
//   {
//     name: 'octopus',
//     path: 'https://media.treehugger.com/assets/images/2015/03/octopus-facts.jpg.860x0_q70_crop-scale.jpg',
//     desc: 'octopus'
//   },
//   {
//     name: 'shark',
//     path: 'http://www.aquariumofpacific.org/images/made/images/exhibits/sand-tiger-front_AReitsma_LRG_530_400_85shar-70-.5-5_s_c1_c_c_0_0_1.jpg',
//     desc: 'shark'
//   }
// ];
//
//
//
// //for loop: create animals inside dropdown menu
// for (var i = 0; i < animals.length; i++) {
//   //grab select element and store in a variable
//   var dropdown = document.getElementById('mySelect');
//   //create option element
//   var selection = document.createElement('option');
//
//    //option appends dropdown
//    dropdown.appendChild(selection);
//    //place/grab date to selection to animals name
//    selection.value = animals[i].name;
//    //create text for animals in selection
//    selection.textContent = animals[i].name;
//
// };
//
// //create image element inside resultDiv
// var newImg = document.createElement('img');
// newImg.className = 'img-fluid';
// resultDiv.appendChild(newImg);
