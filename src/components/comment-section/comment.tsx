import { EditComment } from "../../servises/edit-comment";
import { Like } from "../../servises/like";

interface IProps {
  canEdit: boolean;
  text: string;
  email: string;
  id: string;
}
const CommentSection = ({ email, text, id, canEdit }: IProps) => {
  return (
    <div className="border p-2 rounded-md ">
      <div className="flex">
        <div className="" onClick={() => Like(id)}>
          like
        </div>
        {canEdit && <div className="" onClick={() => EditComment(id)}>Edit</div>}
      </div>
      <h1>{email}</h1>
      <p>{text}</p>
    </div>
  );
};

export default CommentSection;
