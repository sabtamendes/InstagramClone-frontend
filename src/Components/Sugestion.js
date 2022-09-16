
export default function Sugestion(props) {
    let information;
    if (props.followInformation === "Segue você") {
        information = "Segue você"
    } else {
        information = "Novo no Instagram"
    }
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userImage} alt="image"/>
                <div class="texto">
                    <div class="nome">{props.nickyname}</div>
                    <div class="razao">{information}</div>
                </div>
            </div>

            <div class="seguir">{props.follow}</div>
        </div>
    )
}
