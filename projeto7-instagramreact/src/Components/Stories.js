import Story from "./Story"

export default function Stories() {
  const userStories =
    [
      { image: "./assets/img/9gag.jpeg", text: "9gag" },
      { image: "./assets/img/meowed.jpeg", text: "9meowed" },
      { image: "./assets/img/barked.jpeg", text: "barked" },
      { image: "./assets/img/nathanwpylestrangeplanet.jpeg", text: "nathanwpyle" },
      { image: "./assets/img/wawawiwacomicsa.jpeg", text: "wawawiwac" },
      { image: "./assets/img/respondeai.jpeg", text: "respondeai" },
      { image: "./assets/img/filomoderna.jpeg", text: "filomoderna" },
      { image: "./assets/img/memeriagourmet.jpeg", text: "meme" },
      { image: "./assets/img/barked.jpeg", text: "barked" }

    ]
  return (
    <>
      <div class="stories">

        {userStories.map(item => <Story image={item.image} text={item.text} />)}

      </div>
  
    </>

  )
}
