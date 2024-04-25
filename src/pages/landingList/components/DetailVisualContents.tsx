import '@/stylesheet/pages.css';
import { VisualItems } from '@/definition/commonInterface';

const DetailVisualContents = (props: { content: VisualItems }) => {
  return (
    <>
      <div className="content_box">
        <img src="https://placehold.co/600x400" />
        <div className="desc">
          <p className="content_title">{props.content.contTitle}</p>
          {props.content.contDesc ? (
            <p className="content_desc">{props.content.contDesc}</p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailVisualContents;
