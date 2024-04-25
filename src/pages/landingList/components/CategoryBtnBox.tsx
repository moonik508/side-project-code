import React from 'react';

function CategoryBtnBox(props: {
  categoryState: string;
  setCategoryState: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="bottom_tab_box">
      <button
        className={props.categoryState === 'BEST' ? 'active' : ''}
        type="button"
        onClick={() => props.setCategoryState('BEST')}
      >
        <span>베스트</span>
      </button>
      <button
        type="button"
        className={props.categoryState === 'CATEGORY' ? 'active' : ''}
        onClick={() => props.setCategoryState('CATEGORY')}
      >
        <span>카테고리</span>
      </button>
    </div>
  );
}

export default CategoryBtnBox;
