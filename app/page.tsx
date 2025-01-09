import PatchComponent from "@/components/Patch";
import PostComponent from "@/components/Post";

import DeletePostComponent from "@/components/Remove";

export default function Home() {
  return (
    <div>
      {/* <Fetchs /> */}
      <PostComponent />
      <PatchComponent />
      <DeletePostComponent />
    </div>
  );
}
