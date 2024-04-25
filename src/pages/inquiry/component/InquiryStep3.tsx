import { reqInquiry } from '@/pages/inquiry/pages/InquiryPage';

export default function InquiryStep3(props: {
  reqData: reqInquiry;
  setPeriodUpHandler: (dataType: string) => void;
  setPeriodDownHandler: (dataType: string) => void;
}) {
  return (
    <div className="inquiry-items">
      <p className="inquiry_title">Select Date</p>
      <div className="inquiry-card-box">
        <div className="inquiry-card">
          <div className="data-box is_active">
            <p className="date-title">시작 일자</p>
            <div className="date-box">
              <p>년</p>
              <p className="date-value">{props.reqData.startDateYear}</p>
              <div className="up-down-btn-box">
                <button
                  className="date-up"
                  onClick={() => props.setPeriodUpHandler('startDateYear')}
                >
                  up
                </button>
                <button
                  className="date-down"
                  onClick={() => props.setPeriodDownHandler('startDateYear')}
                >
                  down
                </button>
              </div>
            </div>
            <div className="date-box">
              <p>월</p>
              <p className="date-value">{props.reqData.startDateMonth}</p>
              <div className="up-down-btn-box">
                <button
                  className="date-up"
                  onClick={() => props.setPeriodUpHandler('startDateMonth')}
                >
                  up
                </button>
                <button
                  className="date-down"
                  onClick={() => props.setPeriodDownHandler('startDateMonth')}
                >
                  down
                </button>
              </div>
            </div>
            <div className="date-box">
              <p>일</p>
              <p className="date-value">{props.reqData.startDatePeriod}</p>
              <div className="up-down-btn-box">
                <button
                  className="date-up"
                  onClick={() => props.setPeriodUpHandler('startDatePeriod')}
                >
                  up
                </button>
                <button
                  className="date-down"
                  onClick={() => props.setPeriodDownHandler('startDatePeriod')}
                >
                  down
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="inquiry-card">
          <div className="data-box is_active">
            <p className="date-title">종료 일자</p>
            <div className="date-box">
              <p>년</p>
              <p className="date-value">{props.reqData.endDateYear}</p>
              <div className="up-down-btn-box">
                <button
                  className="date-up"
                  onClick={() => props.setPeriodUpHandler('endDateYear')}
                >
                  up
                </button>
                <button
                  className="date-down"
                  onClick={() => props.setPeriodDownHandler('endDateYear')}
                >
                  down
                </button>
              </div>
            </div>
            <div className="date-box">
              <p>월</p>
              <p className="date-value">{props.reqData.endDateMonth}</p>
              <div className="up-down-btn-box">
                <button
                  className="date-up"
                  onClick={() => props.setPeriodUpHandler('endDateMonth')}
                >
                  up
                </button>
                <button
                  className="date-down"
                  onClick={() => props.setPeriodDownHandler('endDateMonth')}
                >
                  down
                </button>
              </div>
            </div>
            <div className="date-box">
              <p>일</p>
              <p className="date-value">{props.reqData.endDatePeriod}</p>
              <div className="up-down-btn-box">
                <button
                  className="date-up"
                  onClick={() => props.setPeriodUpHandler('endDatePeriod')}
                >
                  up
                </button>
                <button
                  className="date-down"
                  onClick={() => props.setPeriodDownHandler('endDatePeriod')}
                >
                  down
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
