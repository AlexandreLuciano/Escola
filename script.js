 // Lógica visual dos botões de comando
    function alternarBotao(id) {
        const btn = document.getElementById(id);
        
        // Alterna a classe de cor
        btn.classList.toggle('btn-active');

        // Alterna o texto
        if (btn.classList.contains('btn-active')) {
            btn.innerText = "Ligado";
        } else {
            btn.innerText = "Desligado";
        }
    }

    /* DICA PARA Depois:
       Para mudar os sensores via código, você usará:
       document.getElementById('f1').className = "sensor on";
       document.getElementById('f1').innerText = "ON";
       
       Para mudar a bateria:
       document.getElementById('batLevel').innerText = "75%";
    */