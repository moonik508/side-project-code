import '@/stylesheet/pages.css';
import { useEffect, useState } from 'react';

import SelectBox from '@/pages/landingList/components/SelectBox';
import CardBox from '@/pages/landingList/components/CardBox';
import { DetailParams, LandingCardItem } from '@/definition/commonInterface';
import { GetDummyLabList } from '@/dummy/MainCardData';
import useMapData from '@/constants/mapData';

const LandingListPage = (props: {
  toggleModal: () => void;
  upState: boolean;
  upStateCallback: (categoryId: number, itemId: number) => void;
}) => {
  const { MAP_SEARCH_KEYWORDTYPE } = useMapData();
  const [reqParams, setReqParams] = useState<DetailParams>({ categoryId: 0 });
  const [initCategoryList, setInitCategoryList] = useState<LandingCardItem[]>(
    [],
  );
  const [category, setCategory] = useState<number>(0);
  const categoryHandler = (e: any) => {
    setCategory(e.target.value);
    setReqParams({
      categoryId: e.target.value,
    });
  };
  console.log(category);
  const tryCategoryData = () => {
    const detailData: LandingCardItem[] = GetDummyLabList(reqParams);
    setInitCategoryList(detailData);
  };

  useEffect(() => {
    tryCategoryData();
  }, [reqParams]);

  return (
    <div className="landing_list container">
      <div className="wrap">
        <div className="inner">
          <div className="category_select_box">
            <SelectBox<number, string>
              selectCallback={(e: any) => {
                categoryHandler(e);
              }}
              options={MAP_SEARCH_KEYWORDTYPE}
              useTotal={true}
            />
            <p>선택하기</p>
          </div>
          {/*contents_box*/}
          <div className="contents_box">
            {initCategoryList?.map((item, idx) => {
              return (
                <CardBox
                  key={idx}
                  upStateCallback={props.upStateCallback}
                  modalOpen={props.toggleModal}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingListPage;
