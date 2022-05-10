/**
 * tp starship
 * groupe G4
 * auteur: -Hadjou Tayeb
 *         -Gaci Noufel
 *         -Degnon Glenn Youbi
 *         -Pastor Rojas Angel-Daniel
 */
export default class mobile{
    /**
     * Built a mobile with the abscissa posx with the ordinate posy with displacement speeds stpx on the horizontal and stpy on the vertical.
     * @param {integer} posx the abscissa of the mobile.
     * @param {integer} posy the ordinate of the mobile.
     * @param {string} src the source image of the mobile.
     * @param {integer} stpx the speed displacement of the mobile on the horizontal.
     * @param {integer} stpy the speed displacement of the mobile on the vertical.
     */
    constructor(posx,posy,src,stpx=0,stpy=0){
        
        this.posx=posx;
        this.posy=posy;
        this.src=src;
        this.stpx=stpx;
        this.stpy=stpy;
        this.img=this.createImage(src);

    }
    /**
     * Draws the mobile
     * @param {HTMLElement} context field where the mobile is drawn.
     */
    draw(context){
        context.drawImage(this.img,this.posx,this.posy);
        
    }
    /**
     * Moves the mobile by stpx pixels horizontally and stpy pixels vertically.
     */
    move(){
        this.posx=this.posx+this.stpx;
        this.posy=this.posy+this.stpy;
    }
    /**
     * Creates an image with the source src
     * @param {string} src the source of the image drawn
     * @returns an image
     */  
    createImage(src) {
        const img = new Image();
        img.src = src;
         return img;
         }
    
    
}