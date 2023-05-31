let currentImage = 1;
    
// Funktion för att generera en slumpmässig färg
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// funktion för "Change Background" button
function changeBg() 
{
    document.body.style.backgroundColor = getRandomColor();
}


  
  // Function for "Good Vibes" button
  function goodVibes() {
    const vibes = document.getElementById("vibes");
    vibes.style.display = (vibes.style.display === "none") ? "block" : "none";
  }
  
  // funktion för "Show Time" button
  function showTime() {
    const time = document.getElementById("time");
    time.style.display = (time.style.display === "none" || time.style.display === "") ? (time.innerHTML = new Date(), "block") : (time.innerHTML = "", "none");
  }
  
  
  // funktion för "Change Picture" button
  function changePicture() 
  {
        const imageUrl1 = "ChildWithDog.png";
        const imageUrl2 = "https://via.placeholder.com/300/0000FF";
    
        // byter image source baserade på den nuvarande bilden 
        if (currentImage === 1) {
            document.getElementById("image").src = imageUrl2;
            currentImage = 2;
        } else {
            document.getElementById("image").src = imageUrl1;
            currentImage = 1;
        }
    }
  
  // funktion för "Hide Picture" button
  function hidePicture() 
  {
    document.getElementById("image").style.display = "none";
  }
  
  // funktion för "Show Picture" button
  function showPicture() 
  {
        const imgElement = document.getElementById("image");
        imgElement.classList.remove("hidden");
        imgElement.style.display = "block";
  }
  
  // funktion för "Show Header" button
  function showHeader() {
    document.getElementById("header").style.display = "flex";
    document.getElementById("vibes").style.display = "block";
    document.getElementById("time").style.display = "block";
    document.getElementById("image").style.display = "block";
    // Lägger till en text längst ner på sidan. 
    document.getElementById("thanks").innerHTML = "Thank you for visiting my website"
  }
  
  // Function for "Remove Header" button
  function removeHeader() {
    document.getElementById("header").style.display = "none";
  }
  

  function header() {
    const header = document.getElementById("header");
    const isReset = header.style.backgroundColor === "gray";
    
    if (isReset) {
      // återställer till original 
      header.style.backgroundColor = "";
      header.style.alignItems = "";
      document.getElementById("vibes").style.display = "";
      document.getElementById("vibes").style.color = "";
      document.getElementById("time").style.display = "";
      document.getElementById("time").innerHTML = "";
      document.getElementById("time").style.color = "";
      document.getElementById("image").style.border = "";
    } else {
      // lägger en ny stil
      header.style.backgroundColor = "gray";
      header.style.alignItems = "center";
      document.getElementById("vibes").style.display = "block";
      document.getElementById("vibes").style.color = "white";
      document.getElementById("time").style.display = "block";
      document.getElementById("time").innerHTML = new Date();
      document.getElementById("time").style.color = "white";
      document.getElementById("image").style.border = "1vw solid green";
    }
  }
  
  


function show_header()
{
    // Ändrar allt till display = block
    document.getElementById("header").style.display = "flex";
    document.getElementById("vibes").style.display = "block";
    document.getElementById("time").style.display = "block";
    document.getElementById("image").style.display = "block";
    // Lägger till en text längst ner på sidan. 
    document.getElementById("thanks").innerHTML = "Thank you for visiting my website"
}


