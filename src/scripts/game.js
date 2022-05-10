/**
 * tp starship
 * groupe G4
 * auteur: -Hadjou Tayeb
 *         -Gaci Noufel
 *         -Degnon Glenn Youbi
 *         -Pastor Rojas Angel-Daniel
 */
 import starShip from './starShip';
 import saucer from   './saucer';
 import shoot from './shoot';
 const score_html =document.getElementById("score");
 export default class Game {
/**
 * Built a game.
 * @param {HTMLElement} canvas 
 */
 constructor(canvas){
 this.canvas=canvas;
 this.context=canvas.getContext("2d");
 this.starship=new starShip(40,canvas.height/2,canvas);
 this.saucer=new Array();
 this.shoot=new Array();
 this.score=0;
 this.raf=null;
 this.shoot=new Array();
 this.interval;
 this.clique=false;
 }
 /**
  * Moves and draws all elements of the game .
  */
 moveAndDraw() {
     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     this.starship.move();
     this.starship.draw(this.context);
     this.movedrawSaucer();
     this.movedrawShoot();
     this.addScore();
     this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
   }
/**
 * Adds saucer to the array saucer.
 */
 addSaucer(){
     
    let y=Math.floor(Math.random()*this.canvas.height);
     let x=Math.floor(Math.random()*this.canvas.width/2)+(this.canvas.width/2);
     let scr=new saucer(x,y,this.canvas);
     this.saucer.push(scr);
     
 }
 /**
 * Adds shoot to the array shoot.
 */
 addShoot(){
     
     this.shoot.push(new shoot(this.starship.posx+40,this.starship.posy+10));
     
 }
 /**
  * Moves and draws the saucers.
  */
 movedrawSaucer(){
     this.saucer.forEach(elm=>{elm.move();}
     );
     this.saucer=this.saucer.filter(elt=>elt.maluc==false && elt.posy<this.canvas.height);
     this.saucer.forEach((elt) => {
         elt.draw(this.context);
         });
 }
 /**
  * Moves and draws the shoots.
  */
 movedrawShoot(){
     
     
     this.shoot.forEach((elm) =>{elm.toucher(this.saucer);});
     this.shoot=this.shoot.filter(elm=>elm.sup===false);
     this.shoot.forEach(elm=>{elm.move(this.canvas);});
     this.shoot.forEach(elt=>{
         elt.draw(this.context);
     });
     
 }
    /**
     * manage keyboard events that allow you to move the starship using the up and down arrow keys. 
     * To shoot using the spacebar.
     * @param {HTMLElementEvent} event 
     * @returns None.
     */
   keyDownActionHandler(event) {
     switch (event.key) {
         case "Spacebar":
         case " ":
             this.addShoot();
             break;
         case "ArrowUp":
         case "Up":
             this.starship.moveUp();
             break;
          case "ArrowDown":
          case "Down":
             this.starship.moveDown();
              break;
         case " ":
             this.AddShoot();
             break;
         default: return;
     }
     event.preventDefault();
  }
  /**
   * Manage event to stop moving the starship when the up and down arrow keys are not touch.
   * @param {HTMLElementEvent} event 
   * @returns 
   */
  keyUpActionHandler(event) {
     switch (event.key) {
        
         case "ArrowUp":
         case "Up":
         case "ArrowDown":
         case "Down":
 
             this.starship.stopMoving();
             break;
         default: return;
     }
     event.preventDefault();
 
 }
 
 
 
 
 /**
  * Adds score to 
  */
 addScore(){
 
     this.score=parseInt(score_html.innerText);
 }
 /**
 * Adds saucer to the array saucer.
 */
 addSaucer_2(){
     let t=Math.floor(Math.random()*2)==1;
     if(t=true){
         let y=Math.floor(Math.random()*this.canvas.height);
     let x=Math.floor(Math.random()*this.canvas.width/2)+(this.canvas.width/2);
     let scr=new saucer(x,y,this.canvas);
     this.saucer.push(scr);
     
 
     }
 }
 /**
  * Make appear the saucers if the clique equals true and disappear if the clique equals false. 
  */
 flott(){
 
     if(this.clique==false){
         this.clique=true;  
     
     
         this.interval=setInterval(this.addSaucer_2.bind(this),700);
         
     }
     else{
     clearInterval(this.interval);
     this.clique=false;
     }
 }
 
 
   
 
 }
 
