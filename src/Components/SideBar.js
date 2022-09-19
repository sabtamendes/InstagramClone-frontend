import User from "./User";
import Sugestions from "./Sugestions";

export default function Sidebar() {

  return (
    <div class="sidebar">

      <User userImage="../assets/img/catanacomics.jpeg" userText="catanacomics" userName="Catana" />

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        <Sugestions />

      </div >

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}