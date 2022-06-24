
function showTable(){
    let tableRef=document.getElementById("tableDiv");
    let showbtn=document.getElementById("show");
    let hidebtn=document.getElementById("hide");
    tableRef.style.display="block";
    showbtn.disabled=true;
    hidebtn.disabled=false;
}


function hideTable(){
    let tableRef=document.getElementById("tableDiv");
    let showbtn=document.getElementById("show");
    let hidebtn=document.getElementById("hide");
    tableRef.style.display="none";
    showbtn.disabled=false;
    hidebtn.disabled=true;
}