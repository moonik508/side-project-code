import React from 'react';

import formStyledComponents from '@/components/style/form.style';
const { StyledSelectBox } = formStyledComponents();
function SelectBox<T, U>(props: {
  name?: string;
  defaultOption?: string | number;
  options: Map<T, U>;
  disabled?: boolean;
  selectCallback: (e: any) => void;
  useTotal: boolean;
  className?: string;
}) {
  let newOptionState = JSON.parse(JSON.stringify(Array.from(props.options)));
  if (props.useTotal) {
    newOptionState = [['', '전체'], ...newOptionState];
  }
  return (
    <StyledSelectBox>
      <select
        name={props.name}
        disabled={!!props.disabled}
        defaultValue={props.defaultOption ?? ''}
        onChange={(e) => props.selectCallback(e)}
      >
        {newOptionState.map((option: [T, U]) => {
          const value: T = option[0];
          const title: U = option[1];
          return (
            <option key={`${value}`} value={`${value}`}>
              {`${title}`}
            </option>
          );
        })}
      </select>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ic-arrow-down-fill">
          <path
            id="Polygon 3"
            d="M10.8331 13.7187C10.4349 14.3159 9.56491 14.3159 9.16672 13.7187L4.96467 7.41537C4.51522 6.74116 4.99334 5.83329 5.79786 5.83329L14.202 5.83329C15.0065 5.83329 15.4846 6.74116 15.0352 7.41537L10.8331 13.7187Z"
            fill="#333333"
          />
        </g>
      </svg>
    </StyledSelectBox>
  );
}

export default SelectBox;
