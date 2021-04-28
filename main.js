var names_of_guests= [];
    
function submit(){
    var GuestName=document.getElementById("name1").value;
	names_of_guests.push(GuestName);

	console.log(GuestName);
        
    console.log(names_of_guests);
    var length_of_name = names_of_guests.length;
    console.log(length_of_name);
	document.getElementById("display_name").innerHTML=names_of_guest.toString();
	
   }

function sorting(){
	names_of_guests.sort();
	var i= names_of_guests.join("<br>");
    console.log(names_of_guests);		
	document.getElementById("sorted").innerHTML=i.toString();
	}

function show(){
	var i= names_of_guests.join("<br>");
	console.log(names_of_guests);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	}

