
export default function Story(props) {
  return (
    <>
      <div class="story">
        <div class="imagem">
          <img src={props.image} />
        </div>
        <div class="usuario">
          {props.text}
        </div>
      </div>
      <div class="menu">
        <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
      </div>
    </>
  );
}

