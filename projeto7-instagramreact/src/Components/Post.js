
export default function Post(props) {

    function changeColor(icone) {
        let contador = 0;
        console.log(icone)
        let colorRed = document.querySelector(".red");
        let colorWhite = document.querySelector(".white");

        if (icone === 'heart-outline') {
          colorRed.classList.add("red");
          contador++;
        }if(icone === 'bookmark-outline' ){
            colorWhite.classList.add("white");
        }
        contador--;
      }
    return (

        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imageUser} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagePost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline" onClick={() =>changeColor("heart-outline")}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" onClick={() =>changeColor('bookmark-outline')}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likesImage} />
                    <div class="texto" onClick={console.log(() =>changeColor("heart-outline") ? props.likesCount++ : props.likesCount--)}>
                        Curtido por <strong>respondeai</strong> e <strong>outras {props.likesCount} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
   
}



  