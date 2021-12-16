AFRAME.registerComponent("target-ring", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = "ring"+i;
  
        //position variables   
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);
      
      ringEl.setAttribute("material","color","red");
      
      ringEl.setAttribute("geometry",{ primitive: "torus",radius: 8 });   
  
      terrainEl.appendChild(ringEl);
    }
  });
  
  AFRAME.registerComponent("target-bird", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = "bird"+i;
  
        //position variables   
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createBirds(id, position);
      }
    } ,
  
    createBirds: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var birdEl = document.createElement("a-entity");
  
      birdEl.setAttribute("id",id);
      birdEl.setAttribute("position",position);

      birdEl.setAttribute("gltf-model", "./flying_bird/scene.gltf")
      birdEl.setAttribute("animation-mixer", {})
      birdEl.setAttribute("scale", {x: 500, y: 500, z: 500})
      terrainEl.appendChild(birdEl);
    }
  });
  