import { reqInquiry } from '@/pages/inquiry/pages/InquiryPage';

export default function InquiryStep4(props: {
  reqData: reqInquiry;
  reqTypeFunction: (type: string, value: string) => void;
}) {
  return (
    <div className="inquiry-items">
      <p className="inquiry_title">More Information input</p>
      <div className="inquiry-card-box">
        <div className="inquiry-card full">
          <textarea
            value={props.reqData.desc}
            onChange={(e: any) => props.reqTypeFunction('desc', e.target.value)}
            className="inquiry-text-area"
            placeholder="만약에... 이런 것도 가능할까요?"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
