
// var username = prompt("Enter Your Name"); 

// if(username != null) {
//     document.getElementById("username").innerHTML = username ;
//     document.body.style.display='block'; 
  
// }
// else{
//     alert('Pleace Enter Your Name') 
//     document.body.style.display = 'none';
// }
var date = new Date();
document.getElementById('date').innerHTML = date.getDate() + '/' + date.getMonth()+'/'+date.getFullYear()


function add_btn(){
    var text = document.getElementById('inp_text').value;
    if(text != null){
        var toodo = document.getElementById("list");
        var h1 = document.createElement("h1");
        var span = document.createElement("span");
        h1.className="text_list"
        span.id++
        span.className = "fa-solid fa-eraser"
        toodo.appendChild(h1)
        h1.appendChild(span)
        document.getElementById(span.id).innerHTML = text
     }else{
          alert('Pleace Enter Text')
     }
}

