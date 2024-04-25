import { reqInquiry } from '@/pages/inquiry/pages/InquiryPage';

export default function InquiryStep1(props: {
  reqData: reqInquiry;
  reqTypeFunction: (type: string, value: string) => void;
}) {
  return (
    <div className="inquiry-items">
      <p className="inquiry_title">Question1</p>
      <div className="inquiry-card-box">
        <div className="inquiry-card">
          <div
            className={
              props.reqData.type === 'project'
                ? 'data-box is_active'
                : 'data-box'
            }
            onClick={() => props.reqTypeFunction('type', 'project')}
          >
            <span className="inquiry-card-title">선택사항 1</span>
            <span>description.</span>
          </div>
        </div>
        <div className="inquiry-card">
          <div
            className={
              props.reqData.type === 'reseller'
                ? 'data-box is_active'
                : 'data-box'
            }
            onClick={() => props.reqTypeFunction('type', 'reseller')}
          >
            <span className="inquiry-card-title">선택사항 2</span>
            <span>description.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
