class cañon {

    constructor (x, y, w, h,angle) {

      this.width = w;

      this.height = h;

      this.x =x;

      this.y = y;
      this.angle = angle;

     
    }    
    
    display() {


        if (keyDown(RIGTH_ARROW) && this.angle < 0.45)  {

            this.angle += 0.2;

        }






        if (keyDown(LEFT_ARROW) && this.angle  > -1.45)  {

            this.angle -= 0.2;

        }

      fill("#676e6a");


      push();
      rect(-10, -20, this.weidht, this.height);
      translate(this.x, this.y);
      rotate(this.angle);
      pop();




      arc (this.x -30, this.y + 90, 140, 200, PI,TWO_PI);
      norfill();


    }


}
