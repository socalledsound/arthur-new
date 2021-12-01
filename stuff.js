ambientLight(150);
  directionalLight(20, 0, 200, -300, 0.25, -10);
  //image(img, 0, 0, 400, 400);
  
  push()
   rotateX(PI);
   translate(0, -50, -200);
   rotateY(theta);

    
    // fill(250, 0, 0);
    //ambientMaterial(250);
    texture(img);
    // specularMaterial(250);
    model(mod);
    pop();
  
    theta+=0.01;
