/**
 * tp starship
 * groupe G4
 * auteur: -Hadjou Tayeb
 *         -Gaci Noufel
 *         -Degnon Glenn Youbi
 *         -Pastor Rojas Angel-Daniel
 */
import src_saucer from '../assets/images/flyingSaucer-petit.png'
import mobile from './mobile';
const score_html =document.getElementById("score");

const stp=-3;
export default class saucer extends mobile{
    /**
     * Built a saucer.
     * @param {integer} posx the abscissa of the mobile.
     * @param {integer} posy the ordinate of the mobile. 
     * @param {HTMLElement} canvas field where the mobile is drawn.
     */
    constructor(posx,posy,canvas){
        super(posx,posy,src_saucer,stp,0);
        this.canvas=canvas;
        this.destroy=false;
        this.maluc=false;
        this.test=false;
        
        }
        /**
         * Moves the saucer horizontally and vertically.
         */
        move(){
          
            if (this.posx<10) {
                this.stpx=0;
                if(this.test==false){
                
                this.maluce();
                }
            }
            else if(this.posy==this.canvas.height){
                this.stpy=0;
            }
            else{
            super.move();     
            }       
            }
        /**
         * Adds 200 to score when a mobile is destroyed.
         */
        down(){
            this.stpx=0;
            this.stpy=3;
            this.destroy=true;
            let txt=score_html.innerText;
            score_html.innerHTML=parseInt(txt)+200;

        }
        /**
         * Removes 1000 to score when a mobile is destroyed.
         */
        maluce(){
            let txt=score_html.innerText;
            score_html.innerHTML=parseInt(txt)-1000;
            this.test=true;
            this.maluc=true;
        }
        

}