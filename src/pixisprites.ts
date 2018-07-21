    let type = "WebGL";

    if(! PIXI.utils.isWebGLSupported())
        type = "canvas";

    PIXI.utils.sayHello(type);

    let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

    let app = new Application({
        width: window.innerWidth/2,
        height: window.innerHeight - 50,
        antialias: true,
        transparent: false,
        resolution: 1
    });

//app.renderer.backgroundColor = 0xFFFFFF;
    document.body.appendChild(app.view);
    loader.add("../assets/sprites.json");
    loader.load(setup);

    let TicTacToe, grid, oTurn, xTurn, player1, player2, restart, id;

    function setup() {

        id = PIXI.loader.resources["../assets/sprites.json"].textures;

        class Images {
            constructor() {
                this.addGrid();
                this.addTitle();
                this.addPlayerSymbols();
                this.addTurn();
                this.addRestart();
            }

            addGrid() {
                this.grid = new Sprite(id["grid.png"]);
                app.stage.addChild(this.grid);
                this.grid.width = app.renderer.width / 2;
                this.grid.height = app.renderer.height / 2;
                this.grid.x = app.renderer.width / 2 - this.grid.width / 2;
                this.grid.y = app.renderer.height / 2 - this.grid.height / 2;
            }
            
            addTitle() {
                this.TicTacToe = new Sprite(id["TicTacToe.png"]);
                app.stage.addChild(this.TicTacToe);
                this.TicTacToe.width = app.renderer.width / 3;
                this.TicTacToe.height = app.renderer.height / 3;
                this.TicTacToe.x = this.grid.x;
            }

            addPlayerSymbols() {
                this.oTurn = new Sprite(id["o.png"]);
                app.stage.addChild(this.oTurn);

                this.xTurn = new Sprite(id["x.png"]);
                app.stage.addChild(this.xTurn);
            }

            addTurn() {
                this.player1 = new Sprite(id["player1.png"]);
                app.stage.addChild(this.player1);
                this.player1.width = app.renderer.width / 8;
                this.player1.height = app.renderer.height / 8;
                this.player1.x = this.grid.x;
                this.player1.y = (app.renderer.height - this.grid.y) + this.player1.height / 2;
                this.player1.interactive = true;
                this.player1.buttonMode = true;

                this.player2 = new Sprite(id["player2.png"]);
                app.stage.addChild(this.player2);
                this.player2.width = app.renderer.width / 8;
                this.player2.height = app.renderer.height / 8;
                this.player2.x = (this.grid.x + this.grid.width) - this.player2.width;
                this.player2.y = (app.renderer.height - this.grid.y) + this.player2.height / 2;
                this.player2.interactive = true;
                this.player2.buttonMode = true;
            }

            addRestart() {
                this.restart = new Sprite(id["restart.png"]);
                app.stage.addChild(this.restart);
                this.restart.width = app.renderer.width / 8;
                this.restart.height = app.renderer.height / 8;
                this.restart.x = ((this.player1.x + this.player1.width) +
                    (this.player2.x - (this.player1.x + this.player1.width)) / 2) - this.restart.width / 2;
                this.restart.y = (app.renderer.height - this.grid.y) + this.restart.height / 2;
                this.restart.interactive = true;
                this.restart.buttonMode = true;
            }
        }

        let images = new Images();
    }