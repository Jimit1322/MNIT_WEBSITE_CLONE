const link=document.querySelector("a");


function NewTab1(){
    window.open("https://mnit.ac.in/about_us/about_mnit","","width=300,height=300");
}
function NewTab2(){
    window.open("https://mnit.ac.in/admin/chairperson-nitser","","width=300,height=300");
}
function NewTab3(){
    window.open("https://mnit.ac.in/sw/","","width=300,height=300");
}
function NewTab4(){
    window.open("https://mnit.ac.in/dept_ece/","","width=300,height=300");
}
function NewTab5(){
    window.open("https://mnit.ac.in/research/researchareas","","width=300,height=300");
}
function NewTab6(){
    window.open("https://mnit.ac.in/dis/","","width=300,height=300");
}
function NewTab7(){
    window.open("https://mnit.ac.in/quick_links/recruitment","","width=300,height=300");
}

function link1(){
    window.open("https://mnit.ac.in/news/newsall?type=latest","","width=300,height=300");
}

function link2(){
    window.open("https://mnit.ac.in/news/newsall?type=event","","width=300,height=300");
}
function link3(){
    window.open("https://mnit.ac.in/news/newsall?type=student","","width=300,height=300");
}

link.addEventListener("click",(evt)=>{
    evt.preventDefault();
}
)


