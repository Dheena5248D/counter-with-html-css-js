let count=0;
//add button
document.getElementById('add').onclick=function(){
  count += 1;
  document.getElementById('num').innerText=count;
}
//reset button
document.getElementById('res').onclick=function() {
  count =0;
  document.getElementById('num').innerText=count;
}
//less button
document.getElementById('less').onclick=function() {
  count -=1;
  document.getElementById('num').innerText=count;}