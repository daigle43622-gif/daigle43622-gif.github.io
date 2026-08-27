$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(7, 8, 7)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(50, 200, 30, 2000, "black");
createPlatform(325, 200, 30, 2000, "black");
createPlatform(600, 200, 30, 2000, "black");
createPlatform(875, 200, 30, 2000, "black");
createPlatform(1150, 700, 100, 2000, "black");
createPlatform(1150, 40, 100, 550, "black");
createPlatform(1370, 600, 100, 20, "black");
createPlatform(1250, 500, 30, 20, "black");
createPlatform(1370, 400, 100, 20, "black");
createPlatform(1250, 300, 30, 20, "black");
createPlatform(1370, 200, 100, 20, "black");
createPlatform(1250, 100, 30, 20, "black");


    // TODO 3 - Create Collectables

createCollectable("database", 600, 100, 1, 0);
createCollectable("database", 1200, 650, 1, 0);
createCollectable("database", 1250, 50, 1, 0);

    
    // TODO 4 - Create Cannons

createCannon("left", 660, 1);
    createCannon("bottom", 150, 800);
    createCannon("bottom", 400, 900);
    createCannon("bottom", 675, 1000);
    createCannon("right", 220, 1900);
    

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
