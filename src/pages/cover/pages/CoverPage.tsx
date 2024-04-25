import '@/stylesheet/pages.css';
import btnStyledComponents from '@/components/style/button.style';

const CoverPage = () => {
  const { StyledBtnDefault, StyledBtnWidePoint } = btnStyledComponents();
  return (
    <div className="cover container bg">
      <div className="wrap">
        <div className="title_box">
          <img src="./images/logo_ElypecsLab.svg" className="brand_logo" />
          <p className="title_txt">더 좋은 공간 을 위한 실험</p>
        </div>
        <div className="desc_box">
          <p>
            ELYPECS Lab은 공간의 상식을 깨고, 틀을 깨고, 아이디어를 깨워,
            <br />
            실험적인 솔루션을 통해 더 좋은 비즈니스 방식을 제안합니다.
          </p>
          <p className="txt_bold">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            '만약에'에서 시작한 아이디어가 XR공간에서
            <br /> 무한한 가능성을 펼치는 ELYPECS Lab를 만나보세요.
          </p>
        </div>
        <div className="contents_box">
          <div className="tooltip">
            <span>관심 키워드를 클릭하세요</span>
          </div>
          <div className="button_box">
            <StyledBtnWidePoint>베스트 추천</StyledBtnWidePoint>
            <div className="btn_flex_box">
              <StyledBtnDefault>리테일 & 팝업</StyledBtnDefault>
              <StyledBtnDefault>부동산</StyledBtnDefault>
              <StyledBtnDefault>아트</StyledBtnDefault>
              <StyledBtnDefault>기업</StyledBtnDefault>
              <StyledBtnDefault>엔터테인먼트</StyledBtnDefault>
              <StyledBtnDefault>ALL</StyledBtnDefault>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
