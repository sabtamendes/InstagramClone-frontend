
import Post from "./Post"

export default function Posts() {
  const postsInformation = [
    {
      imageUser: "./assets/img/meowed.jpeg",
      name: "meowed",
      imagePost: "./assets/img/gato-telefone.jpeg",
      likesImage: "./assets/img/respondeai.jpeg",
      likesCount: 95.523
    },

    {
      imageUser: "./assets/img/barked.jpeg",
      name: "barked",
      imagePost: "./assets/img/dog.jpeg",
      likesImage: "./assets/img/filomoderna.jpeg",
      likesCount: 101.525
    }
  ]
  return (

    <div>
      {
        postsInformation.map(item =>
          <Post
            imageUser={item.imageUser}
            name={item.name}
            imagePost={item.imagePost}
            likesImage={item.likesImage}
            likesCount={item.likesCount}
          />
        )
      }

    </div>
  );
}