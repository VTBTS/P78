var reason=[
           "Dad",
           "Mom",
           "Myra",
           "All of US",
  ];
  
  var images=[
              "p.jpg",
              "m.jpg",
              "my.jpg",
              "f.jpg",
             ]
  var i = 0;
  function nextslide() 
  { document.getElementById("reason-text").innerHTML=reason[i];
    document.getElementById("album").src = images[i];
    i++;
    }