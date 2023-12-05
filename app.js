document.getElementById('outer').addEventListener('click', function(event) {
    console.log('Capturing - Outer',` phase ${event.eventPhase}`);
  }, true);
  
  document.getElementById('middle').addEventListener('click', function(event) {
    console.log('Capturing - Middle',` phase ${event.eventPhase}`);
  }, true);
  
  document.getElementById('inner').addEventListener('click', function(event) {
    console.log('Capturing - Inner',` phase ${event.eventPhase}`);
  }, true);
  
  document.getElementById('inner').addEventListener('click', function(event) {
    console.log('Target - Inner',` phase ${event.eventPhase}`);
  });
  
  document.getElementById('middle').addEventListener('click', function(event) {
    console.log('Bubbling - Middle' ,` phase ${event.eventPhase}`);
  });
  
  document.getElementById('outer').addEventListener('click', function(event) {
    console.log('Bubbling - Outer',` phase ${event.eventPhase}`);
  });
  