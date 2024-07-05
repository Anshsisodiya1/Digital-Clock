function clockstart(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    console.log(hour,minute,second)
    // document.getElementById("hrs").innerText = hours;
    // document.getElementById("mins").innerText = minute;
    // document.getElementById("secs").innerText = second;
    if(hours>12){
         hours = hours -12;
    }
    let hrs =document.getElementById("hrs");
    hrs.innerText = hours;
    let mins =document.getElementById("mins");
    mins.innerText = minutes;
    let secs =document.getElementById("secs");
    secs.innerText = seconds;
}

setInterval(()=>{
    clockstart();
},1000)

let date = new Date();
let hour = date.getHours();
if (hour>=12){
   let ampm = document.getElementById("ampm");
   ampm.innerText = "Am";
}
else if(hours<12){
    let ampm = document.getElementById("ampm");
    ampm.innerText = "Pm";
}   ``

let button = document.getElementById("button");
button.addEventListener("mouseover",function(){
    this.innerText = "Party Time"
})
button.addEventListener("mouseout",function(){
    this.innerText = "Set Alarm"
})

let greeting = document.getElementById("greeting");
if(hours>=12 && hours<16){
    greeting.innerHTML = "Good Afternoon"
}
 if(hours>=16 && hours<=20){
        greeting.innerHTML = "Good Evening"
}
 if(hours>=20 && hour<=24){
    greeting.textContent = "Good Night"
}

button.addEventListener("click",function(){
    let date = new Date();
    let hour = date.getHours();

    let wakeUp = document.getElementById("wakeUp");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");

    if(parseInt(wakeUp.value)=== hours){
        document.getElementById("settime").innerHTML = "Grab some Breakfast !";
        document.getElementById("clockimage").src = "images/Component 30 – 1.svg";
    }
    else if(parseInt(lunch.value)=== hours){
        document.getElementById("settime").innerHTML = "Let's have some Lunch !";
        document.getElementById("clockimage").src = "images/Component 31 GÇô 1.jpg";
    }
    else if(parseInt(nap.value)=== hours){
        document.getElementById("settime").innerHTML = "Get some Tea!";
        document.getElementById("clockimage").src = "images/lunch_time.svg";
    }
    else if(parseInt(night.value)=== hours){
        document.getElementById("settime").innerHTML = "Go to Sleep";
        document.getElementById("clockimage").src = "images/goodnight_image.svg ";
    }

   let timing =  document.getElementsByClassName("timing");
   timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
   timing[1].innerText = lunch.options[lunch.selectedIndex].text;
   timing[2].innerText = wakeUp.options[nap.selectedIndex].text;
   timing[3].innerText = wakeUp.options[night.selectedIndex].text;
})