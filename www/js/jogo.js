$(document).ready(function (){
    var canvas;
    var context;

    var bruno_x = 10;
    var bruno_y = 10;
    var bruno_largura = 32;
    var bruno_altura = 32;

    var img = document.getElementById("baixo_1");
    var fundo = document.getElementById("fundo");
    var grass = document.getElementById("grass");
    var house = document.getElementById("house");

    var gary = document.getElementById("gary");

    var velocidade = 20;
    var pontos = 10;
    var andando = false;

    inicializar();
        
    function inicializar()
    {
        canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        context = canvas.getContext("2d");     
        
        setInterval(gameLoop, 30);
    }

    $('#btn-up').click(function (){
        if(bruno_y > 0){ 
            bruno_y -= velocidade;
            if (andando) { 
                img = document.getElementById("cima_1");
                andando = false;
            }else {
                img = document.getElementById("cima_2");
                andando = true;
            }
        }

    });

    $('#btn-down').click(function (){
        if(bruno_y < (canvas.height - bruno_altura)){ 
            bruno_y += velocidade;
            if (andando) { 
                img = document.getElementById("baixo_1");
                andando = false;
            }else {
                img = document.getElementById("baixo_2");
                andando = true;
            }
        }
    });

    $('#btn-left').click(function (){
        if(bruno_x > 0){ 
            bruno_x -= velocidade;
            if (andando) { 
                img = document.getElementById("direita_andando");
                andando = false;
            }else {
                img = document.getElementById("direita_parado");
                andando = true;
            }
        }
        
    });

    $('#btn-right').click(function (){
        if(bruno_x < (canvas.width - bruno_largura)){ 
            bruno_x += velocidade;
            if (andando) { 
                img = document.getElementById("esquerda_andando");
                andando = false;
            }else {
                img = document.getElementById("esquerda_parado");
                andando = true;
            }
        }
    });
    
    function gameLoop(){
        context.font = "20pt Tahoma";
        context.drawImage(fundo, 0, 0);
        context.drawImage(grass, 50, 50);
        context.drawImage(house, canvas.width - 150, canvas.height - 150);
        context.drawImage(gary, 100, 100);
        context.fillText(pontos, canvas.width - 35, 25);
        context.drawImage(img, bruno_x, bruno_y);
    }
});