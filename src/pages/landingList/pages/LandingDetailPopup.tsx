import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '@/stylesheet/pages.css';

import { GetDummyLabDetail } from '@/dummy/DetailDataList';
import { CardDetailData, DetailParams } from '@/definition/commonInterface';
import DetailVisualContents from '@/pages/landingList/components/DetailVisualContents';
import DetailInfoContents from '@/pages/landingList/components/DetailInfoContents';
import useModal from '@/hooks/useModal';
import DetailSamplePopup from '@/pages/landingList/components/DetailSamplePopup';
import SampleModal from '@/components/template/SampleModal';

const LandingDetailPopup = (props: {
  upState: boolean;
  upStateCallback: () => void;
  toggleModal: () => void;
  urlParams: DetailParams;
}) => {
  // console.log()
  const { sampleModal, sampleModalState } = useModal();
  const [initDetailData, setInitDetailData] = useState<CardDetailData>(
    {} as CardDetailData,
  );
  const [targetData, setTargetData] = useState<string>('');
  const [sampleState, setSampleState] = useState<string>('TOUR');
  const tryCategoryData = () => {
    const detailData: CardDetailData[] = GetDummyLabDetail(
      Object.values(props.urlParams).length === 0
        ? props.urlParams
        : { categoryId: 1, itemId: 1 },
    );
    setInitDetailData(detailData[0]);
  };
  const MAP_SEARCH_KEYWORDTYPE = new Map<number, string>([
    [1, 'Retail & Popup'],
    [2, 'Real Estate'],
    [3, 'Company'],
    [4, 'Entertainment'],
    [5, 'Art'],
  ]);
  const newValueData = Array.from(MAP_SEARCH_KEYWORDTYPE.values());
  useEffect(() => {
    tryCategoryData();
  }, [props.urlParams]);
  return (
    <>
      <div
        className={
          props.upState ? 'landing_detail inner up' : 'landing_detail inner'
        }
      >
        <div className="modal_close_btn">
          <button
            onClick={() => {
              props.upStateCallback();
              props.toggleModal();
            }}
          ></button>
        </div>
        <div className="detail_wrap">
          <div className="detail_tab_box">
            <div>{newValueData[initDetailData.categoryId]}</div>
            <div className="edge_round">
              No.{' '}
              {props.urlParams
                ? String(props.urlParams.itemId).padStart(3, '0')
                : '000'}
            </div>
          </div>
          <div className="detail_contents_box">
            <div className="title_box">
              <div className="flex_box">
                <div className="left">
                  <p
                    className="main_title"
                    dangerouslySetInnerHTML={{ __html: initDetailData.title }}
                  ></p>
                  {initDetailData.subTitle ? (
                    <p
                      className="sub_title"
                      dangerouslySetInnerHTML={{
                        __html: initDetailData.subTitle,
                      }}
                    ></p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="right">
                  <p
                    dangerouslySetInnerHTML={{ __html: initDetailData.desc }}
                  ></p>
                </div>
              </div>

              <div className="sample_btn_box">
                <button
                  onClick={() => {
                    sampleModal();
                    setTargetData(initDetailData.sampleVideoUrl);
                    setSampleState('VIDEO');
                  }}
                >
                  <span>sample view button</span>
                  <i></i>
                </button>
                <button
                  onClick={() => {
                    sampleModal();
                    setTargetData(initDetailData.sampleVideoUrl);
                    setSampleState('VIDEO');
                  }}
                >
                  <span>sample view button</span>
                  <i></i>
                </button>
              </div>
            </div>
            <div className="total_contents_box">
              {initDetailData.mainVisualContents?.map((content, idx) => {
                return (
                  <DetailVisualContents
                    key={idx}
                    content={content}
                  ></DetailVisualContents>
                );
              })}
            </div>
          </div>
          <DetailInfoContents content={initDetailData} />
          <div className="detail_btn_box">
            <button
              type="button"
              className="list_btn"
              onClick={() => {
                props.upStateCallback();
                props.toggleModal();
              }}
            >
              목록으로 이동
            </button>
            <button type="button" className="inquiry_btn">
              <Link to={'./inquiry'} state={props.urlParams}>
                상세 문의하기
              </Link>
            </button>
          </div>
        </div>
      </div>
      <SampleModal
        isOpen={sampleModalState}
        toggleCallback={sampleModal}
        contents={
          <DetailSamplePopup
            sampleState={sampleState}
            targetData={targetData}
            setTargetData={setTargetData}
            toggleModal={sampleModal}
          />
        }
      ></SampleModal>
    </>
  );
};

export default LandingDetailPopup;
