class Form {
    constructor(){
        this.input = createInput().attribute("placeholder", "Enter Your Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
    }
    
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display(){
        this.input.position(790, 450);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(795, 475);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'skyblue');
        this.title.html("SPACE DESTROYERS");
        this.title.position(500, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'red');

        this.reset.position(1700, 50);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            console.log(playerCount)
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Hello " + player.name)
            this.greeting.position(700,300);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
             game.update(0);



        //     var playerInfoRef = database.ref('players');
        //     playerInfoRef.remove();

            
         });
    }
   
}