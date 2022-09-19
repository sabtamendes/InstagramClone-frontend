// import React from "react";
export default function Sugestion(props) {
    // const [info, setInfo] = React.useState(props.followInformation)

    let information;
    if (props.followInformation === "Segue você") {
        information = "Segue você";
        // setInfo(information)
    } else {
        information = "Novo no Instagram";
        // setInfo(information)
    }
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userImage} alt="texto alternativo" />
                <div class="texto">
                    <div class="nome">{props.nickyname}</div>
                    <div class="razao">{information}</div>
                </div>
            </div>

            <div class="seguir">{props.follow}</div>
        </div>
    )
}
