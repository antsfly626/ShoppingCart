var index = 0;
var imgArray = new Array();
  imgArray[0] = "https://www.usbg.gov/sites/default/files/images/2021corpseflowerusbg.jpg";
  imgArray[1] = "https://jmflandscaping.com/wp-content/uploads/2020/12/20-most-interesting-plant-shy-plant.jpg";
  imgArray[2] = "https://jmflandscaping.com/wp-content/uploads/2020/12/tropical-pitcher-plants-20-most-interesting-plants-1158x1800.jpg";

var Description = new Array();
  Description[0]="Native to the rainforests in Sumatra, corpse flowers are known for their blooms that smell like rotting animals to attract scavengers as pollinators."
  Description[1]="Native to Central and South America, the Mimosa pudica is often called the shy plant because its leaves close up tightly when touched."
  Description[2]="Pitcher plants are carniverous plants that trap insects and even small rodents by luring them with sweet nectar and bright colors into their pitcher-like cavities filled with digestive fluid"



function chosenimage(index) {
  var img = document.getElementById("picture");
  img.src = imgArray[index];


  var speech = new SpeechSynthesisUtterance();
  
  speech.text = Description[index];
  window.speechSynthesis.speak(speech);
  alert(index);


}