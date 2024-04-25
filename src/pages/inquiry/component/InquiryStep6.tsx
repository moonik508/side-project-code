import CheckBox from '@/components/form/CheckBox';

export default function InquiryStep6(props: {
  checked: boolean;
  setChecked: (value: boolean) => void;
  toggleModal: () => void;
}) {
  return (
    <div className="inquiry-items">
      <p className="inquiry_title">
        약관 동의 후 <br />
        제출해주세요.
      </p>
      <div className="inquiry-card-box">
        <div className="inquiry-card black">
          <div
            className={
              !props.checked ? 'data-box black' : 'data-box black active'
            }
          >
            <CheckBox
              isChecked={props.checked || false}
              onChangeCallback={() => props.setChecked(!props.checked)}
              useText={
                <>
                  <button onClick={props.toggleModal}>개인정보 처리방침</button>
                  에 동의
                </>
              }
            />
          </div>
          <div className="cards"></div>
        </div>
      </div>
    </div>
  );
}
