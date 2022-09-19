import React from "react";

export default function User(props) {

  const [userNickName, setUserNickName] = React.useState(props.userText);
  const [name, setName] = React.useState(props.userName);
  const [url, setUrl] = React.useState(props.userImage);


  function changeImage() {
    const photo = prompt("insira a url");
    if (photo) {
      setUrl(photo);
    } else {
      setUrl(props.userImage);
    }
  }

  function changeName(icon) {
    let nomePrompt = prompt("Qual o seu nome? 😊");
    if ((nomePrompt === null || nomePrompt === "" || nomePrompt === false) && (!icon)) {
      setName(props.userName);
    } else {
      setName(nomePrompt);
    }
  }

  function changeNickName() {
    let nickPrompt = prompt("Qual o seu usuário? 😊");
    if (nickPrompt === null || nickPrompt === "" || nickPrompt === false) {
      setUserNickName(props.userText);
    } else {
      setUserNickName(nickPrompt);
    }
  }

  return (
    <div class="usuario">
      <img onClick={changeImage} src={url} alt="texto alternativo" />
      <div class="texto" onClick={changeNickName}>
        <strong>{userNickName}</strong>
        <span>
          {name}
          <ion-icon name="pencil" onClick={() => changeName("pencil")} ></ion-icon>
        </span>
      </div>
    </div>
  )
}

