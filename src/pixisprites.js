var type = "WebGL";
if (!PIXI.utils.isWebGLSupported())
    type = "canvas";
PIXI.utils.sayHello(type);
var Application = PIXI.Application, Container = PIXI.Container, loader = PIXI.loader, resources = PIXI.loader.resources, TextureCache = PIXI.utils.TextureCache, Sprite = PIXI.Sprite, Rectangle = PIXI.Rectangle;
var app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});
document.body.appendChild(app.view);
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.backgroundColor = 0xFFFFFF;
loader.add("../assets/sprites.json");
loader.load(setup);
var TicTacToe, grid, oTurn, xTurn, player1, player2, restart, id;
function setup() {
    id = PIXI.loader.resources["../assets/sprites.json"].textures;
    TicTacToe = new Sprite(id["TicTacToe.png"]);
    app.stage.addChild(TicTacToe);
    TicTacToe.x = window.innerWidth / 3 + 20;
    TicTacToe.y = -60;
    grid = new Sprite(id["grid.png"]);
    app.stage.addChild(grid);
    grid.x = window.innerWidth / 3 - 30;
    grid.y = 150;
    //oTurn  = new Sprite(id["o.png"]);
    //app.stage.addChild(oTurn);
    //xTurn  = new Sprite(id["x.png"]);
    //app.stage.addChild(xTurn);
    player1 = new Sprite(id["player1.png"]);
    app.stage.addChild(player1);
    player1.x = window.innerWidth / 2 - 270;
    player1.y = 770;
    player1.interactive = true;
    player2 = new Sprite(id["player2.png"]);
    app.stage.addChild(player2);
    player2.x = window.innerWidth / 2 + 145;
    player2.y = 770;
    restart = new Sprite(id["restart.png"]);
    app.stage.addChild(restart);
    restart.x = window.innerWidth / 2 - 60;
    restart.y = 770;
}
