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
        width: window.innerWidth / 2,
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

        grid = new Sprite(id["grid.png"]);
        app.stage.addChild(grid);
        grid.width = app.renderer.width / 2;
        grid.height = app.renderer.height / 2;
        grid.x = app.renderer.width / 2 - grid.width / 2;
        grid.y = app.renderer.height / 2 - grid.height / 2;

        TicTacToe = new Sprite(id["TicTacToe.png"]);
        app.stage.addChild(TicTacToe);
        TicTacToe.width = app.renderer.width / 3;
        TicTacToe.height = app.renderer.height / 3;
        TicTacToe.x = grid.x;
        //oTurn  = new Sprite(id["o.png"]);
        //app.stage.addChild(oTurn);

        //xTurn  = new Sprite(id["x.png"]);
        //app.stage.addChild(xTurn);

        player1 = new Sprite(id["player1.png"]);
        app.stage.addChild(player1);
        player1.width = app.renderer.width / 8;
        player1.height = app.renderer.height / 8;
        player1.x = grid.x;
        player1.y = (app.renderer.height - grid.y) + player1.height / 2;
        player1.interactive = true;
        player1.buttonMode = true;

        player2 = new Sprite(id["player2.png"]);
        app.stage.addChild(player2);
        player2.width = app.renderer.width / 8;
        player2.height = app.renderer.height / 8;
        player2.x = (grid.x + grid.width) - player2.width;
        player2.y = (app.renderer.height - grid.y) + player2.height / 2;
        player2.interactive = true;
        player2.buttonMode = true;

        restart = new Sprite(id["restart.png"]);
        app.stage.addChild(restart);
        restart.width = app.renderer.width / 8;
        restart.height = app.renderer.height / 8;
        restart.x = ((player1.x + player1.width) + (player2.x - (player1.x + player1.width)) / 2) - restart.width / 2;
        restart.y = (app.renderer.height - grid.y) + restart.height / 2;
        restart.interactive = true;
        restart.buttonMode = true;
    }