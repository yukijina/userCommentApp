//select id=formDiv and store in a variable
var Div1 = document.getElementById('formDiv');
//create button element to HTML and store in a valiable
var myBtn = document.createElement('button');
 //give class name to myBtn created above (style button)
 myBtn.className = 'btn btn-outline-light btn-lg my-2';
 //create text to myBtn
 myBtn.textContent ='POST';
 //myBtn is appended to div
 Div1.appendChild(myBtn);

//we work on click function.
// preparation - set global variable and create element and classs

//create h2 to div id=result (display of subject)
var newH2 = document.createElement('h2');
//create p element to div id=result (dispay of "tell us about your experience")
var t = document.createElement('p');
//select div id=result and store in a variable
var resultDiv = document.getElementById('result');
var body = document.getElementsByTagName('body')[0];

// create Remove and Hide button
 //create div element
 var divBtn = document.getElementById('divBtn');
 //create remove button element
 var remBtn = document.createElement('button');
 //reate hide button
 var hideBtn = document.createElement('button');


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

/////function of Remove and Hide button

  //give class name to remove button
  remBtn.className = 'btn btn-outline-danger remove mx-2';
  //give text inside remove button
  remBtn.textContent = 'Remove';

  //give class name to hide button
  hideBtn.className = 'btn btn-outline-success hidemx-2';
  //give text to hide button
  hideBtn.textContent = 'Hide';

  //append both remove and hide button to div
  divBtn.appendChild(remBtn);
  divBtn.appendChild(hideBtn);

/////// function of dropdown and image
  //create div for dropdown and image
  var imgDiv = document.createElement('div');
  var label = document.createElement('label');
  var dropdown = document.createElement('select');
  var image = document.createElement('img');
  //give class name for div
  imgDiv.className = ('py-3 form-group');
  //give text inside label
  label.textContent = ('Choose your favorite animal!');
  //give class to dropdown
  dropdown.className = ('form-control');
  //give class to img
  image.className = ('img-fluid w-50 rounded my-2');

  //append each element
  resultDiv.appendChild(imgDiv);
  imgDiv.appendChild(label);
  imgDiv.appendChild(dropdown);
  imgDiv.appendChild(image);

  //loop for dropdorn menue
  for (var i = 0; i < animals.length; i++) {
    //create option, this has to be inside of loop because option is multiple (=animais[i].name)
    var selection = document.createElement('option');
     //append to dropdown
     dropdown.appendChild(selection);
     //place/grab date to selection to animals name
     selection.value = animals[i].name;
     //create text for animals in selection
     selection.textContent = animals[i].name;
  };

///onchange image - works when user select by drowpdown menue
dropdown.onchange = function() {
  for (var i = 0; i < animals.length; i++) {
    //you have to use this.value, not selection.value
    //if you type selection.value, only last image is selected
    if (this.value == animals[i].name) {
      image.src = animals[i].path;
    } ;
  };
}

};  // function ends here


//Remove function
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
 };
}


//creat array & object for dropdown and image
var animals = [
  {
    name: " ",
    path: " ",
    desc: " "
  },
  {
    name: 'penguin',
    path: 'https://www.aquarium.co.za/cache/ce_img_cache/local/24be6a810f238a37/rockhoppergathering_800_600_80_c1_c_c.jpg',
    desc: 'penguin'
  },
  {
    name: 'sea otter',
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOzksus_JHe3YnJRke-f-KgvDAkmH7QkWzH07iv8MN0aSWQtG',
    desc: 'sea otter'
  },
  {
    name: 'dolphin',
    path: 'https://worldanimalnews.com/wp-content/uploads/2017/04/DOLPHINS.jpg',
    desc: 'dolphin'
  },
  {
    name: 'octopus',
    path: 'https://media.treehugger.com/assets/images/2015/03/octopus-facts.jpg.860x0_q70_crop-scale.jpg',
    desc: 'octopus'
  },
  {
    name: 'shark',
    path: 'http://www.aquariumofpacific.org/images/made/images/exhibits/sand-tiger-front_AReitsma_LRG_530_400_85shar-70-.5-5_s_c1_c_c_0_0_1.jpg',
    desc: 'shark'
  }
];
