// Load modules and use them
require(
['module/hello', 'module/world','thirdparty/jquery-1.9.1.min'], 
function(helloref, worldref){
   $("#req_click").click(function(){
      alert("Hello world");
    });
  var hello = new helloref(),world = new worldref();
   $("#result").html(world.getName());
}
);