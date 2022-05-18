const carrousel = (container, heroImgs) => {
    let cont = 0;
    container.addEventListener('click', e => {
        let previus = document.getElementById('previus');
        let next = document.getElementById('next');
        let img = container.querySelector('img');
        let tgt = e.target;

        if( tgt == previus ){
            if(cont > 0) {
                img.src = heroImgs[cont - 1];
                cont--;
            }else {
                img.src = heroImgs[heroImgs.length - 1];
                cont = heroImgs.length - 1;
            }
        }else if(tgt == next){
            if(cont < heroImgs.length - 1){
                img.src = heroImgs[cont + 1];
                cont ++;
            }else{
                img.src = heroImgs[0];
                cont = 0;
            }
        }
    });
}
export{carrousel};