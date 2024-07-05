function clockstart(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    console.log(hour, minute, second);
    
    if(hour > 12){
        hour = hour - 12;
    }

    document.getElementById("hrs").innerText = hour;
    document.getElementById("mins").innerText = minute;
    document.getElementById("secs").innerText = second;
}

setInterval(clockstart, 1000);

let date = new Date();
let hour = date.getHours();
if (hour >= 12){
    document.getElementById("ampm").innerText = "PM";
} else {
    document.getElementById("ampm").innerText = "AM";
}

let button = document.getElementById("button");
button.addEventListener("mouseover", function(){
    this.innerText = "Party Time";
});
button.addEventListener("mouseout", function(){
    this.innerText = "Set Alarm";
});

let greeting = document.getElementById("greeting");
if(hour >= 12 && hour < 16){
    greeting.innerHTML = "Good Afternoon";
} else if(hour >= 16 && hour <= 20){
    greeting.innerHTML = "Good Evening";
} else if(hour >= 20 && hour <= 24){
    greeting.textContent = "Good Night";
}

button.addEventListener("click", function(){
    let date = new Date();
    let hour = date.getHours();

    let wakeUp = document.getElementById("wakeUp");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");

    if(parseInt(wakeUp.value) === hour){
        document.getElementById("settime").innerHTML = "Grab some Breakfast!";
        document.getElementById("clockimage").src = "images/Component 30 – 1.svg";
    } else if(parseInt(lunch.value) === hour){
        document.getElementById("settime").innerHTML = "Let's have some Lunch!";
        document.getElementById("clockimage").src = "images/Component 31 GÇô 1.jpg";
    } else if(parseInt(nap.value) === hour){
        document.getElementById("settime").innerHTML = "Get some Tea!";
        document.getElementById("clockimage").src = "images/lunch_time.svg";
    } else if(parseInt(night.value) === hour){
        document.getElementById("settime").innerHTML = "Go to Sleep";
        document.getElementById("clockimage").src = "images/goodnight_image.svg";
    }

    let timing = document.getElementsByClassName("timing");
    timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
    timing[1].innerText = lunch.options[lunch.selectedIndex].text;
    timing[2].innerText = nap.options[nap.selectedIndex].text;
    timing[3].innerText = night.options[night.selectedIndex].text;
});