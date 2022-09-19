
import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function Body() {
  return (
    <>

      <div class="corpo">
        <div class="esquerda">

          <Stories />

          <div class="posts">
            <Posts />

          </div>
        </div>

        <SideBar />
      </div>
      <Footer />
    </>
  );
}