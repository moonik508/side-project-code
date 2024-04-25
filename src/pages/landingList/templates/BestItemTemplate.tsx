import { useEffect, useRef, useState } from 'react';

import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';
import '@/stylesheet/BestItemTemplate.css';
import BestCardBox from '@/pages/landingList/components/BestCardBox';
import { LandingCardItem } from '@/definition/commonInterface';
import { GetDummyBestList } from '@/dummy/BestItemList';

export default function BestItemTemplate(props: {
  toggleModal: () => void;
  upStateCallback: (categoryId: number, itemId: number) => void;
}) {
  const cardDummyData = GetDummyBestList();
  const [activeNumber, setActiveNumber] = useState<number>(0);
  const [cardDataList, setCardDataList] = useState<LandingCardItem[]>(
    cardDummyData.list,
  );
  const [lastDataLength, setLastDataLength] = useState<number>(-1);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [nextDisable, setNextDisable] = useState<boolean>(false);
  const [prevDisable, setPrevDisable] = useState<boolean>(false);
  const cardList = useRef<any>([]);
  const mouseEnterFunction = (direction?: string) => {
    if (direction === 'next') {
      cardList.current[0].classList.add('is-next-hover');
      cardList.current[lastDataLength - 1].style.visibility = 'visible';
      return;
    }
    cardList.current[lastDataLength].classList.add('is-prev-hover');
    cardList.current[lastDataLength].style.visibility = 'visible';
    return;
  };

  const mouseOutFunction = (direction?: string) => {
    if (direction === 'next') {
      cardList.current[0].classList.remove('is-next-hover');
      return;
    }
    cardList.current[lastDataLength].classList.remove('is-prev-hover');
    return;
  };
  const btnClickFunction = (num: number, direction?: string) => {
    if (direction === 'next') {
      setNextDisable(true);
      cardList.current[0].classList.remove('is-next-hover');
      cardList.current[0].classList.add('is-next-out');
      setTimeout(() => {
        cardList.current.forEach((ref: any) => {
          ref.classList.remove('is-next-hover', 'is-next-out', 'is-prev-in');
        });
        setCardDataList((prev) => {
          const shiftData = prev.shift();
          if (!shiftData) {
            return prev;
          }
          prev.push(shiftData);
          return prev;
        });
        setActiveNumber((prev) => {
          return prev + 1;
        });
        setNextDisable(false);
      }, 500);
    } else {
      setPrevDisable(true);
      cardList.current[lastDataLength].classList.remove('is-prev-hover');
      cardList.current[lastDataLength].classList.add('is-prev-in');
      setTimeout(() => {
        setCardDataList((prev) => {
          cardList.current[lastDataLength].classList.remove(
            'is-next-out',
            'is-prev-in',
          );
          const popData = prev.pop();
          if (!popData) {
            return prev;
          }
          prev.unshift(popData);
          return prev;
        });
        setActiveNumber(num - 1);
        setPrevDisable(false);
      }, 300);
    }
  };
  const checkDeviceWidth = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    setLastDataLength(cardDataList.length - 1);
  }, []);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
    window.addEventListener('resize', checkDeviceWidth);
    return () => {
      window.removeEventListener('resize', checkDeviceWidth);
    };
  }, []);

  return (
    <>
      <div className="btn-swiper-box">
        <button
          className="btn btn-swiper prev swiper-btn-prev"
          onMouseEnter={() => mouseEnterFunction()}
          onClick={() => {
            btnClickFunction(activeNumber);
          }}
          onMouseLeave={() => mouseOutFunction()}
          value={activeNumber}
          disabled={prevDisable}
        >
          prev
        </button>
        <button
          className="btn btn-swiper next swiper-btn-next"
          onMouseEnter={() => mouseEnterFunction('next')}
          onMouseLeave={() => mouseOutFunction('next')}
          onClick={() => {
            btnClickFunction(activeNumber, 'next');
          }}
          value={activeNumber}
          disabled={nextDisable}
        >
          next
        </button>
      </div>
      {isMobile ? (
        <div className="swiper-container-box">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiperEffect"
            onRealIndexChange={(swiper: SwiperType) => {
              swiper.allowTouchMove = false;
              swiper.unsetGrabCursor();
            }}
            onTouchEnd={(swiper: SwiperType) => {
              swiper.allowTouchMove = true;
            }}
          >
            {cardDataList.map((card, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div
                    key={idx}
                    className="card"
                    style={{
                      zIndex: `${100 - (activeNumber + idx)}`,
                    }}
                    onClick={() => {
                      props.toggleModal();
                      props.upStateCallback(card.categoryId, card.id);
                    }}
                  >
                    <BestCardBox
                      color={card.color}
                      title={card.title}
                      subTitle={card.subTitle}
                      id={card.id}
                      categoryId={card.categoryId}
                    ></BestCardBox>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <div className="card-wrap">
          {cardDataList.map((card, idx) => {
            return (
              <div
                key={card.id}
                className="card"
                style={{
                  zIndex: `${100 - (activeNumber + idx)}`,
                }}
                ref={(element) => {
                  cardList.current[idx] = element;
                }}
                onClick={() => {
                  props.toggleModal();
                  props.upStateCallback(card.categoryId, card.id);
                }}
              >
                <BestCardBox
                  color={card.color}
                  title={card.title}
                  subTitle={card.subTitle}
                  id={card.id}
                  categoryId={card.categoryId}
                ></BestCardBox>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
