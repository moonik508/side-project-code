import '@/stylesheet/pages.css';

const DetailSamplePopup = (props: {
  sampleState: string;
  targetData: string;
  setTargetData: React.Dispatch<React.SetStateAction<string>>;
  toggleModal: () => void;
}) => {
  return (
    <>
      <div className="detail_sample_popup">
        <div className="modal_close_btn">
          <button
            onClick={() => {
              props.toggleModal();
              props.setTargetData('');
            }}
          ></button>
        </div>
        <div className="sample_content">
          {props.sampleState === 'TOUR' ? (
            <iframe
              id="vr-player"
              src={props.targetData}
              className="vr-iframe"
              allowFullScreen
              allow="camera *;microphone *"
            ></iframe>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={props.targetData}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailSamplePopup;
