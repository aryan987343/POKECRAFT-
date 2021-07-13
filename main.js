var canvas=new fabric.Canvas('myCanvas');

block_image_width = 100;
block_image_height = 100;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x    
    });
    canvas.add(player_object);
    });
}
var block_object = "";
function new_block(image) {
    fabric.Image.fromURL(image,function(Img){
    block_object=Img;

    block_object.scaleToWidth(block_image_width);
    block_object.scaleToHeight(block_image_height);
    block_object.set({
    top:player_y,
    left:player_x    
    });
    canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == '80'){
    console.log("shift + p")
    block_image_height = block_image_height + 10;
    block_image_width = block_image_width + 10;
    document.getElementById("Current_Height").innerHTML=block_image_height;
    document.getElementById("Current_Width").innerHTML=block_image_width;
    }
    if (e.shiftKey == true && keypressed == '77'){
        console.log("shift + m")
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("Current_Height").innerHTML=block_image_height;
        document.getElementById("Current_Width").innerHTML=block_image_width;
        }
        if (keypressed == '38') {
            up();
        }
        if (keypressed == '37') {
            left();
        }
        if (keypressed == '39') {
            right();
        }
        if (keypressed == '40') {
            down();
        }
        if (keypressed == '67') {
            new_block("clear.jpg");
        }
        if (keypressed == '75') {
            new_block("kygore.jpg");
        }
        if (keypressed == '71') {
            new_block("groudon.jpg");
        }
        if (keypressed == '76') {
            new_block("lunala.jpg");
        }
        if (keypressed == '82') {
            new_block("raquaza.jpg");
        }
        if (keypressed == '83') {
            new_block("solgaleo.jpg");
        }
        if (keypressed == '78') {
            new_block("necrozma.jpg");
        }
        if (keypressed == '69') {
            new_block("eternatus.jpg");
        }
        if (keypressed == '65') {
            new_block("arceus.png");
        }
}
function up() {
    if(player_y>=0) {
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if(player_y<=500) {
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if(player_x>=0) {
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if(player_x<=900) {
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}