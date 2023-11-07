import { Image, Input } from "@components/common";
import { WritingTestInput } from "@components/feature";
import "./WritingTestProcess.scss";

export default function WritingTestProcess({ writing }) {
  return (
    <div className="writing__box">
      <div className="writing__group-task">
        <h4>{writing.title}</h4>
        <p>{writing.text}</p>
        <Image src={writing.image} />
      </div>
      <div className="writing__input-box">
        <WritingTestInput />
      </div>
    </div>
  );
}
