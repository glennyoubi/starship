/**
 * tp starship
 * groupe G4
 * auteur: -Hadjou Tayeb
 *         -Gaci Noufel
 *         -Degnon Glenn Youbi
 *         -Pastor Rojas Angel-Daniel
 */
import mobile from './mobile';
import src_tir from '../assets/images/tir.png';
const stp=8;
export default class shoot extends mobile{
/**
 * Built a shoot.
 * @param {integer} posx the abscissa of the mobile.
 * @param {integer} posy the ordinate of the mobile.
 */
constructor(posx,posy){
    super(posx,posy,src_tir,stp,0);
    this.sup=false;
}
/**
 * Checcks if a shoot hit or not the mobile (obj).
 * @param {mobile} obj 
 * @returns {Boolean} True if the shoot hits the mobile obj.
 */
collision(obj){
    if( Math.abs((this.posx)-(obj.posx))<30 && Math.abs((this.posy)-(obj.posy))<30 && obj.destroy!=true){
        obj.down();
        return true;

    }
    return false;
  
}
/**
 * filtered the array list and keep only the mobile hit by a shoot.
 * @param {mobile | Array} list Arrays of mobile.
 * @returns {mobile} the first element of the array list.
 */
toucher(list){

    let res=list.filter(elt =>this.collision(elt)==true );
    if (res.length>0){
        this.sup=true;
        
    }
    return res[0];
    
}

/**
 * Moves the mobile by stpx pixels horizontally and stpy pixels vertically.
 * @param {HTMLElement} canvas 
 */
move(canvas){
    if (this.posx>canvas.width-35) {
        this.stpx=0;
        this.sup=true;
    }
    else{
    super.move();     
    }       
    }

}
