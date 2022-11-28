const Canvas = require("canvas");

module.exports = class Banned {

    constructor() {
        this.bg = "https://github.com/Lingz-ui/data-myBot/raw/main/bas.jpg";
        this.numero = "+62 831-3325-5651";
        
    }
    setNumero(value) {
        this.numero = value;
        return this;
    }
    
    async Create() {
        const canvas = Canvas.createCanvas(720, 299);
        const ctx = canvas.getContext("2d");
        let numero = this.numero;
	
        let bg = await Canvas.loadImage(this.bg);
        ctx.drawImage(bg, 0, 0, 720, 299);
  
        
        ctx.textAlign = 'left';
        ctx.font = "31.5px Roboto-Bold"; 
        ctx.fillStyle = "#65777b";
        ctx.fillText(numero,99,65)

        return canvas;
    }
};




