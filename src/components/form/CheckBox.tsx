import React, { ReactNode } from 'react';

import formStyledComponents from '@/components/style/form.style';

const { StyledCheckBox } = formStyledComponents();

export default function CheckBox(props: {
  isChecked: boolean;
  className?: string;
  name?: string;
  onChangeCallback: (e: any) => void;
  value?: string;
  useText?: ReactNode;
}): JSX.Element {
  return (
    <StyledCheckBox className={props.className || ''}>
      <input
        name={props.name}
        type="checkbox"
        value={props.value}
        checked={props.isChecked}
        onChange={props.onChangeCallback}
      />
      <span>
        {props.useText ? props.useText : ''}
        {/*<i>개인정보 처리방침</i>에 동의*/}
      </span>
    </StyledCheckBox>
  );
}
