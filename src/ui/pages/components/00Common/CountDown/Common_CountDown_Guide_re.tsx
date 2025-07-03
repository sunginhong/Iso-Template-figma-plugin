import React, { Dispatch, Component, useEffect, useState, useRef } from "react";
import CountDown_Contain_Guide_re from "./elem/CountDown_Contain_Guide_re";
// 사용 예제 입니다.
export default function Common_CountDown_Guide_re() {
  return (
    <div
      style={{
        width: "350px",
        height: "200px",
        borderRadius: "30px",
        backgroundColor: "#E5ECFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "drop-shadow(1px 2px 6px rgba(0,0,0,0.15))",
      }}
    >
      <CountDown_Contain_Guide_re
        timeHour={10}
        timeMinute={30}
        timeSecond={50}
        fontColor={"#000"}
        fontFamily={"Pretendard"}
        fontSize={50}
        fontWeight={700}
        masking={true}
        animStartTimer={1000}
        animDelay={0.1}
        animDuration={0.5}
        animCurve={"standard"}
      />
    </div>
  );
}
