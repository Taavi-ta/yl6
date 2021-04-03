(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
       
        function updateClock() {

            let date = new Date();
            let s = date.getSeconds()+1;
            let m = date.getMinutes();
            let h = date.getHours();
            let amPm = (h < 12 ) ? "AM" : "PM";

            h = (h > 12 ) ? h - 12 : h;
            
            if (h < 10) {
                h = "0" + h;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ":" + m + ":" + s + " " + amPm;
            
        };
        
    });
        
     // forms


document.getElementById("form").addEventListener("submit", estimateDelivery);

let e = document.getElementById("delivery");
e.innerHTML = "0 &euro;";
        
     function estimateDelivery (event) {
         event.preventDefault();
         
         let linn = document.getElementById("linn");
         let v1 = document.getElementById("v1");
         let v2 = document.getElementById("v2");

         
         if (linn.value === "" ) {
             alert("Palun valige linn nimekirjast");
            linn.focus()
            return;
             
             }
        if (linn.value === "tln") {
             linn = 0;
            }
        if (linn.value === "trt") {
            linn = 2.5;
            }
        if (linn.value === "nrv") {
            linn = 2.5;
            }
        if (linn.value === "prn") {
            linn = 3;
            }
        if (v1.checked == true) {
                v1 = 5;
            }
        if (v1.checked == false) {
                v1 = 0;
            }
        if (v2.checked == true) {
                v2 = 1;
            }
        if (v2.checked == false) {
                v2 = 0;
            }
        
        e.innerHTML = linn + v1 + v2 + " €";  
             
     }
 })();
 

 // map
 
 let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";
 
 let map, infobox;
 
 function GetMap() {
     
     "use strict";

     // centerpoint

    let centerPoint = new Microsoft.Maps.Location(58.338333, 26.311944);
    
    // map
    
    map = new Microsoft.Maps.Map("#map", {
    credentials: mapAPIKey,
    center: centerPoint,
    zoom: 10,
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    disablePanning: true
     });

    infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
        });
        
    infobox.setMap(map);

    // Tartu

     let tartu = new Microsoft.Maps.Location(58.38104, 26.71992);

     let pushpin1 = new Microsoft.Maps.Pushpin(tartu, {title: 'Tartu',});
        
     pushpin1.metadata = {title: 'Tartu Ülikool', description: 'Kena kohakene'};

     Microsoft.Maps.Events.addHandler(pushpin1, 'click', pushpinClicked);

    map.entities.push(pushpin1);
  
    
    // Mustla

    let mustla = new Microsoft.Maps.Location(58.235, 25.863056);

    let pushpin2 = new Microsoft.Maps.Pushpin(mustla, {title: 'Mustla',});
       
    pushpin2.metadata = {title: 'Mustla Keskväljak', description: 'Kodukene'};

    Microsoft.Maps.Events.addHandler(pushpin2, 'click', pushpinClicked);

   map.entities.push(pushpin2);
}

 function pushpinClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
        //Set the infobox options with the metadata of the pushpin.
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
    
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;

    if (x,y == "" || x >= 0 || x <= 0 || y >= 0 || y <= 0 ) {
      alert("Väljad ei tohi sisaldada numbreid ja ei tohi olla tühjad");
      return false;
    }
  }



 
 // https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE
 
 