export default function User(props) {
  
  
  function changeImage(){
    let url = prompt("insira a url");
    
   url = props.UserImage
    console.log(url);
 console.log("olá")
  }



  function changeName(){
    let name = prompt("Qual o seu nome?");
    if(name === null || name === ""){
      name = "Anônimo";
      console.log(name)
    }else{
      name = name;
      console.log(name)
    }
  }
    
  
  return (
    <div class="usuario">
      <img src={props.userImage} onClick={changeImage}/>
      <div class="texto">
        <strong>{props.userText}</strong>
        <span>
          {props.userName}
          <ion-icon name="pencil" onClick={changeName} ></ion-icon>
        </span>
      </div>
    </div>
  )
}

