/**
 * tp starship
 * groupe G4
 * auteur: -Hadjou Tayeb
 *         -Gaci Noufel
 *         -Degnon Glenn Youbi
 *         -Pastor Rojas Angel-Daniel
 */
import mobile from './mobile';
import STARSHIP from   '../assets/images/vaisseau-ballon-petit.png'
const  MoveState = { LEFT : 0, RIGHT : 1, NONE : 2,UP:3,DOWN:4};
const stp=8;
export default class starShip extends mobile{
/**
  * Built a starship.
  * @param {integer} posx the abscissa of the mobile.
  * @param {integer} posy the ordinate of the mobile. 
  * @param {HTMLElement} canvas field where the mobile is drawn.
*/
constructor(posx,posy,canvas){
super(posx,posy,STARSHIP,0,stp);
this.moving=MoveState.NONE;
this.canvas=canvas;

}
/**
 * @returns {Boolean} True if MoveState equals UP and False if not.
 */
get up(){
    return this.MoveState==MoveState.UP;
}
/**
 *  @returns {Boolean} True if MoveState equals DOWN and False if not.
 */
get down(){
    return this.MoveState==MoveState.DOWN;
}
/**
 * Move the mobile up by stpy pixels.
 */
moveUp(){
    this.stpy=- stp ;
    this.moving=MoveState.UP;

    }
/**
 * Moves the mobile down by stpy pixels. 
 */
moveDown(){
    this.stpy=+ stp;
    this.moving=MoveState.DOWN;

}
/**
 * Moves the mobile horizontally and stpy vertically.
 */
move() {   
  if(this.moving!=MoveState.NONE){ 
    if (this.posy+stp>stp+8 && this.moving === MoveState.UP)  {
      super.move();
  }
  else if(this.posy+stp<this.canvas.height-stp-30 && this.moving === MoveState.DOWN){
    super.move();
  }

  }
}


/**
 * Stop the displacement of the mobile.
 */
stopMoving() {
  this.moving = MoveState.NONE;
}
}