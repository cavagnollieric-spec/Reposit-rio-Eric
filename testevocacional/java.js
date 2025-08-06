var A=0,B=0,C=0,D=0,E=0;

function Contar(select){
    if(select.value =='A'){
        A++;
    }
    else if(select.value =='B'){
        B++;
    }
     else if(select.value =='C'){
        C++;
    }
     else if(select.value =='D'){
        D++;
    }
     else if(select.value =='E'){
        E++;
    }
}
function lerselecao(){
     
    const selects = document.querySelectorAll('select');
    
    selects.forEach(Contar);
    console.log('Quantidade de A:', A);
    console.log('Quantidade de B:', B);
    console.log('Quantidade de C:', C);
    console.log('Quantidade de D:', D);
    console.log('Quantidade de E:', E);
   atualizarPorcentagem();
}

function atualizarPorcentagem(){

    const skillBar = document.getElementById('exatas');
    
    skillBar.style.width = A*10+'%';
    skillBar.innerHTML = A*10+'%';
    
     const skillBar1 = document.getElementById('artes');
    
    skillBar1.style.width = B*10+'%';
    skillBar1.innerHTML = B*10+'%';
     const skillBar2 = document.getElementById('humanas');
    
    skillBar2.style.width = C*10+'%';
    skillBar2.innerHTML = C*10+'%';
     const skillBar3 = document.getElementById('ambiente');
    
    skillBar3.style.width = D*10+'%';
    skillBar3.innerHTML = D*10+'%';
     const skillBar4 = document.getElementById('direito');
    
    skillBar4.style.width = D*10+'%';
    skillBar4.innerHTML = D*10+'%';
}
