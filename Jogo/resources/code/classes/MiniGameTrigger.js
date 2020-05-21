class MiniGameTrigger extends Trigger {
    constructor(src, posX, posY, speed, hitboxWidth, hitboxHeight, miniGame) {
		if (arguments.length==1){
			var obj=src;
			super(obj.src, obj.posX, obj.posY,obj.speed,obj.hitboxWidth,obj.hitboxHeight);
			this.miniGameSrc="../code/classes/MiniGames/"+obj.miniGame;
		}else{
			super(src, posX, posY,speed, hitboxWidth, hitboxHeight);
			this.miniGameSrc ="../code/classes/MiniGames/"+miniGame;
		}
		this.hitboxColor = "blue";
	}
	
    action(ctx) {
		ctx.clearRect(0,0,ctx.canvas.width,ctx,canvas.height);
	}

	interaction(ctx,game){

		document.getElementById("game").style.display = "none";
		var frm = document.getElementsByTagName("iframe")[0];
		frm.src = this.miniGameSrc;
		frm.addEventListener("load", iframeHandler);
		frm.style.display = "block";
		window.addEventListener("message", messageHandler);


		function messageHandler(ev){
			game.money.addMoney(parseInt(ev.data));
			frm.style.display = "none";
			document.getElementById("game").style.display = "block";
		}

		function iframeHandler(ev){
			let frm = ev.target;
			frm.contentWindow.postMessage("-", "*");
		}
	}
}

