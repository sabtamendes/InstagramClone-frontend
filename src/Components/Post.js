import React from "react";

export default function Post(props) {

    const [like, setLike] = React.useState(props.liked);
    const [save, setSave] = React.useState(props.saved);
    const [count, setCount] = React.useState(props.likesCount)

    function likePost() {
        setLike(!like)

        if (like) {
            return setCount(count - 1)
        }
        return setCount(count + 1)
    }

    function savePost() {
        setSave(!save)
    }

    function countLikes() {
        if (like) {
            return setCount(count - 1)
        }
        return setCount(count + 1)
    }

    return (

        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imageUser} alt="texto alternativo" />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" onClick={() => setLike(!like)}>

                {
                    props.type === "image"

                        ? <img onClick={countLikes} src={props.imagePost} alt="texto alternativo" />

                        : <video width="100%" height="500px" controls loop>
                            <source src={props.videoPost} type={props.type} />
                        </video>
                }
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {
                            like
                                ? <ion-icon name="heart" onClick={likePost}></ion-icon>
                                : <ion-icon name="heart-outline" onClick={likePost}></ion-icon>
                        }

                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {
                            save
                                ? <ion-icon name="bookmark" onClick={savePost}></ion-icon>
                                : <ion-icon name="bookmark-outline" onClick={savePost}></ion-icon>
                        }
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likesImage} alt="texto alternativo" />
                    <div class="texto">
                        Curtido por <strong>{props.whoLiked}</strong> e <strong>outras <span>{count}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )

}



