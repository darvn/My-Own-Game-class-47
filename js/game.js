class Game {
    constructor(){
        
    }

    update(gamestate){
        database.ref("/").update({
            gamestate : gamestate
        })
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value"); // create a .on listener here
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                console.log(playerCount)
                player.getCount();
            }
            form = new Form()
            form.display();
        }

        player1 = createSprite(300, 450, 50, 50);
        player1.addImage(player1Img);
        player1.rotation = 90;
        player1.scale = 0.4;
      
        player2 = createSprite(1500, 450, 50, 50);
        player2.addImage(player2Img);
        player2.rotation = 270;
        player2.scale = 0.4;

        wall1 = createSprite(900, 0, 1800, 5);
        wall1.visible = false;

        wall2 = createSprite(900, 900, 1800, 5);
        wall2.visible = false;

        wall3 = createSprite(0, 450, 5, 900);
        wall3.visible = false;

        wall4 = createSprite(1800, 450, 5, 900);
        wall4.visible = false;

        wall5 = createSprite(900, 450, 5, 900);
        wall5.visible = false;
      
        players = [player1, player2]

        player1.bounceOff(wall1);
        player1.bounceOff(wall2);
        player1.bounceOff(wall3);
        player1.bounceOff(wall4);
        player1.bounceOff(wall5);

        //droneGroup = new Group();
    
       // console.log(frameCount)
       
    }

    getState(){
        database.ref("gamestate").on("value", (data)=>{
            storage = data.val()
        })
    }

    start(){
        if(storage == 0){
            form = new Form();
            form.display();

            player = new Player();
            player.getPlayerCount();
         }
        }

       play(){ 
        form.hide();

        Player.getPlayerInfo();
      //  player.getPlayerAtEnd();
         image(back_img, 0, 0, 1000, 800);
         var x =100;
         var y=200;
         var index =0;
         
         for(var plr in allPlayers){
            
            
             index = index+1;
             x = 500-allPlayers[plr].distance;
             y=500//-allPlayers[plr].distance;
             
             players[index -1].x = x;
             players[index - 1].y = y;
               
             if(index === player.index){
                 
                 fill("black");
                 textSize(25);
                 text(allPlayers[plr].name ,x-25,y+25);

                 
            }
            
         
         }
        
         

        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();
        }
        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
        }

        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.y -= 10
            player.update();
        }

        if (keyIsDown(DOWN_ARROW) && player.index !== null) {
            player.y += 10
            player.update();
        }
        
        //   if(keyDown(DOWN_ARROW)){
        //     player1.y += 13;
        //   }
        
        //   if(keyDown(RIGHT_ARROW)){
        //     player1.x += 13;
        //   }
        
        //   if(keyDown(LEFT_ARROW)){
        //     player1.x -= 13;
        //   }
             
             
         
                      

       }
          
                  


          
        
    
    
 

 


        showRank() {
            alert("Awesome !! You Win! You rank is :" +player.rank)
          }

          gameOver() {
            textSize(40)
            fill("white")
            text("GAME OVER",displayWidth/2-400,displayHeight/2-200)
            }

            end(){
                console.log("Game Ended");
                console.log(player.rank)
                this.gameOver();
             }
         
         
            //  addDrones()
            //  {       
            //          var x, y;
            //          //x= 200;
            //          x = random(0, width-100);
            //          //x = random(0);
            //          //x = random();
                     
                     
            //          y = 0
            //          var drone = createSprite(x, y);
            //          drone.addImage("obstacle", droneImg);
            //          obstacle.scale = 0.15;
            //          droneGroup.add(drone);
            //  }
    
     }
    
    