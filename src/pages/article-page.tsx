import { useParams } from "react-router-dom";
import CommentSection from "../components/comment-section/comment";

const ArticlePage = () => {
  const { id } = useParams();

  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2  space-y-3 pt-10">
        <h1 className="text-xl">artical id:{id}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          repellat eligendi repellendus nostrum pariatur, consequuntur ab
          deleniti quisquam architecto debitis. Nobis quam quisquam magni culpa
          repellendus aliquid natus eligendi ipsa?
        </p>
        <CommentSection
          email={"test@test.ir"}
          text={"hi"}
          id={"1"}
          canEdit={false}
        />
      </div>
    </div>
  );
};
export default ArticlePage;
