import Sugestion from "./Sugestion"

export default function Sugestions() {
    const usersInformations =
        [
            {userImage:"../assets/img/bad.vibes.memes.jpeg", nickyname: "bad.vibes.memes", followInformation: "Segue você", follow: "Seguir" }, 
            {userImage: "../assets/img/chibiart.jpeg", nickyname:"chibirdart", followInformation:"Segue você", follow:"Seguir" },
            {userImage: "../assets/img/razoesparaacreditar.jpeg", nickyname: "razoesparaacreditar", followInformation:"Novo no Instagram", follow: "Seguir" }, 
            { userImage: "../assets/img/adorablesanimals.jpeg", nickyname: "adorable_animals", followInformation: "Novo no Instagram", follow: "Seguir" },
            { userImage: "../assets/img/smallcutecats.jpeg", nickyname: "smallcutecats", followInformation: "Segue você", follow: "Seguir" }
        ]
    return (
        <>

            {usersInformations.map(item => <Sugestion userImage={item.userImage} nickyname={item.nickyname} followInformation={item.followInformation} follow={item.follow} />)}

        </>
    )
}