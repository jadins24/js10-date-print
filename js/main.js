setInterval(timeMode,1000);
function timeMode(){
  const t=new Date();
  document.getElementById("time").innerHTML=t.toLocaleTimeString();
}