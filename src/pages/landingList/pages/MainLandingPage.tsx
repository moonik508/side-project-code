import '@/stylesheet/pages.css';

import { useState } from 'react';

import BestItemTemplate from '@/pages/landingList/templates/BestItemTemplate';
import CategoryBtnBox from '@/pages/landingList/components/CategoryBtnBox';
import LandingListPage from '@/pages/landingList/pages/LandingListPage';
import Modal from '@/components/template/Modal';
import LandingDetailPopup from '@/pages/landingList/pages/LandingDetailPopup';
import useModal from '@/hooks/useModal';
import { DetailParams } from '@/definition/commonInterface';

const MainLandingPage = () => {
  const { detailModal, detailModalState } = useModal();
  const [upState, setUpState] = useState<boolean>(false);
  const [categoryState, setCategoryState] = useState<string>('BEST');
  const [urlParams, setUrlParams] = useState<DetailParams>({
    categoryId: 1,
    itemId: 1,
  });
  return (
    <>
      <div className="container">
        {categoryState === 'BEST' ? (
          <BestItemTemplate
            toggleModal={detailModal}
            upStateCallback={(categoryId, itemId) => {
              setUrlParams({
                categoryId: categoryId,
                itemId: itemId,
              });
              setUpState(true);
            }}
          ></BestItemTemplate>
        ) : (
          <LandingListPage
            toggleModal={detailModal}
            upState={upState}
            upStateCallback={(categoryId, itemId) => {
              setUrlParams({
                categoryId: categoryId,
                itemId: itemId,
              });
              setUpState(true);
            }}
          ></LandingListPage>
        )}
        <CategoryBtnBox
          categoryState={categoryState}
          setCategoryState={setCategoryState}
        ></CategoryBtnBox>
        <Modal
          isOpen={detailModalState}
          toggleCallback={detailModal}
          scrollClass="scrollY"
          contents={
            <LandingDetailPopup
              upState={upState}
              upStateCallback={() => setUpState(false)}
              toggleModal={detailModal}
              urlParams={urlParams}
            />
          }
        ></Modal>
      </div>
    </>
  );
};

export default MainLandingPage;
