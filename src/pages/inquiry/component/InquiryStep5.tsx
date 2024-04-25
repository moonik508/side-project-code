import React from 'react';

import { chkFlag, reqInquiry } from '@/pages/inquiry/pages/InquiryPage';

export default function InquiryStep5(props: {
  reqData: reqInquiry;
  insertAllFlag: chkFlag;
  reqTypeFunction: (type: string, value: string) => void;
  chkFlagFunction: (type: string, value: boolean) => void;
}) {
  const emailChkFunction = (email_address: string) => {
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (email_address === undefined) {
      return true;
    }
    return email_regex.test(email_address);
  };
  const phoneChkFunction = (phoneNumber: string) => {
    const phone_regex = /^01(0|1|[6-9])[0-9]{3,4}[0-9]{4}$/;
    if (phoneNumber === undefined) {
      return true;
    }
    return phone_regex.test(phoneNumber);
  };
  return (
    <div className="inquiry-items">
      <p className="inquiry_title">personal data input</p>
      <div className="inquiry-card-box">
        <div className="inquiry-card user_info">
          <div className="data-box input-box">
            <div className="user-input-box">
              <input
                type="text"
                placeholder="이름"
                onChange={(e: any) => {
                  props.chkFlagFunction('name', true);
                  props.reqTypeFunction('userName', e.target.value);
                }}
                onBlur={() => {
                  if (!props.reqData.userName) {
                    props.reqTypeFunction('userName', '');
                    props.chkFlagFunction('name', false);
                  } else if (
                    props.reqData.userName === '' &&
                    props.insertAllFlag.name
                  ) {
                    props.chkFlagFunction('name', false);
                  }
                }}
              />
              <p
                className={
                  props.reqData.userName !== undefined &&
                  !props.insertAllFlag.name
                    ? 'alert-txt is_active'
                    : 'alert-txt'
                }
              >
                <span>이름을 입력해주세요.</span>
              </p>
            </div>
            <div className="user-input-box">
              <input
                type="text"
                placeholder="메일"
                onChange={(e: any) => {
                  props.chkFlagFunction('email', true);
                  props.reqTypeFunction('email', e.target.value);
                }}
                onBlur={() => {
                  if (!props.reqData.email) {
                    props.reqTypeFunction('email', '');
                    props.chkFlagFunction('email', false);
                  } else if (
                    props.reqData.email === '' &&
                    props.insertAllFlag.email
                  ) {
                    props.chkFlagFunction('email', false);
                  }
                }}
              />
              <p
                className={
                  !emailChkFunction(props.reqData.email)
                    ? 'alert-txt is_active'
                    : 'alert-txt'
                }
              >
                <span>올바르지 않은 형식이에요.</span>
              </p>
            </div>
            <div className="user-input-box">
              <input
                type="text"
                placeholder="번호"
                onChange={(e: any) => {
                  props.chkFlagFunction('phoneNumber', true);
                  props.reqTypeFunction('phoneNumber', e.target.value);
                }}
                onBlur={() => {
                  if (!props.reqData.phoneNumber) {
                    props.reqTypeFunction('phoneNumber', '');
                    props.chkFlagFunction('phoneNumber', false);
                  } else if (
                    props.reqData.phoneNumber === '' &&
                    props.insertAllFlag.phoneNumber
                  ) {
                    props.chkFlagFunction('phoneNumber', false);
                  }
                }}
              />
              <p
                className={
                  !phoneChkFunction(props.reqData.phoneNumber)
                    ? 'alert-txt is_active'
                    : 'alert-txt'
                }
              >
                <span>올바르지 않은 형식이에요.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
