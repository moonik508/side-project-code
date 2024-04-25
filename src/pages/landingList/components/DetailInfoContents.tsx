import '@/stylesheet/pages.css';
import { CardDetailData, detailDesc } from '@/definition/commonInterface';
import useMapData from '@/constants/mapData';

const DetailInfoContents = (props: { content: CardDetailData }) => {
  const { MAP_AMOUNT_TYPE } = useMapData();
  const newMapValue = Array.from(MAP_AMOUNT_TYPE.entries());
  const amountArr = props.content.amountList
    ? props.content.amountList?.length
    : 0;
  console.log(newMapValue);
  return (
    <>
      <div className="detail_info_box">
        <ul className="info_list">
          {props.content.detailResource?.map((element: detailDesc, idx) => {
            return (
              <li key={idx}>
                <p className="title">{element.title}</p>
                <p>
                  {element.description.map((value, idx) => {
                    return (
                      <i
                        key={idx}
                        className={value.tagType ? 'list-bullet' : ''}
                      >
                        {value.data}
                      </i>
                    );
                  })}
                </p>
              </li>
            );
          })}
          <li>
            <span className="title">상품 가격</span>
            <div className={amountArr > 1 ? 'amount_box' : 'amount_box full'}>
              {props.content.amountList?.map((item, idx) => {
                return (
                  <div key={idx} className="amount_item">
                    <span>
                      {newMapValue.map((value) => {
                        if (item.amountType === value[0]) {
                          return value[1];
                        }
                      })}
                    </span>
                    <span className="amount_value">
                      {item.amountType === 'CUSTOM' ? '문의' : item.amount}
                      {item.amountType === 'SOLUTION'
                        ? '만원'
                        : item.amountType === 'INFRA'
                        ? '원/월'
                        : ''}
                    </span>
                  </div>
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DetailInfoContents;
