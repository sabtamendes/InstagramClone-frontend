
import Post from "./Post"

export default function Posts() {
  const postsInformation = [
    {
      imageUser: "./assets/img/meowed.jpeg",
      name: "meowed",
      imagePost: "./assets/img/gato-telefone.jpeg",
      likesImage: "./assets/img/respondeai.jpeg",
      whoLiked: "respondeai",
      likesCount: 95,
      type: "image",
      liked: false,
      saved: false
    },

    {
      imageUser: "./assets/img/barked.jpeg",
      name: "barked",
      imagePost: "./assets/img/dog.jpeg",
      likesImage: "./assets/img/filomoderna.jpeg",
      whoLiked: "filomoderna",
      likesCount: 180,
      type: "image",
      liked: false,
      saved: false
    },

    {
      imageUser: "./assets/img/catanacomics.jpeg",
      name: "catanacomics",
      videoPost: "./assets/video/video.mp4",
      likesImage: "./assets/img/meowed.jpeg",
      whoLiked: "meowed",
      likesCount: 101,
      type: "video/mp4",
      liked: false,
      saved: false
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
            videoPost={item.videoPost}
            likesImage={item.likesImage}
            whoLiked={item.whoLiked}
            likesCount={item.likesCount}
            type={item.type}
            like={item.liked}
            save={item.saved}
          />
        )
      }
    </div>
  );
}