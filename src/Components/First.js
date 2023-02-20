import React from "react";
import "../App.css";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import Secound from "./Secound";

const First = () => {
  const [high, High] = useState(18887.6);
  const [low, Low] = useState(1);
  const [close, Close] = useState(17956.6);
  const [fd1, Fd1] = useState(0.66666);
  const [fd2, Fd2] = useState(0.21);
  const [fd3, Fd3] = useState(1.2);
  const [div1, Div1] = useState(6.25);
  const [curr, Curr] = useState(1700);

  const [p, P] = useState();
  const [r1, R1] = useState(null);
  const [r2, R2] = useState(null);
  const [r3, R3] = useState(null);
  const [s1, S1] = useState(null);
  const [s2, S2] = useState(null);
  const [s3, S3] = useState(null);

  const [rHigh, RHigh] = useState(null);
  const [rLow, RLow] = useState(null);
  const [alpha, Alpha] = useState(null);

  const [rv0, Rv0] = useState(null);
  const [rv1, Rv1] = useState(null);
  const [rv2, Rv2] = useState(null);
  const [rv3, Rv3] = useState(null);
  const [rv4, Rv4] = useState(null);
  const [rv5, Rv5] = useState(null);
  const [rv6, Rv6] = useState(null);
  const [rv7, Rv7] = useState(null);
  const [rv8, Rv8] = useState(null);
  const [rv9, Rv9] = useState(null);
  const [rv10, Rv10] = useState(null);
  const [rv11, Rv11] = useState(null);
  const [rv12, Rv12] = useState(null);
  const [rv13, Rv13] = useState(null);
  const [rv14, Rv14] = useState(null);
  const [rv15, Rv15] = useState(null);
  const [rv16, Rv16] = useState(null);
  const [rv17, Rv17] = useState(null);
  const [rv18, Rv18] = useState(null);
  const [rv19, Rv19] = useState(null);
  const [rv20, Rv20] = useState(null);
  const [rv21, Rv21] = useState(null);

  const [qv0, Qv0] = useState(null);
  const [qv1, Qv1] = useState(null);
  const [qv2, Qv2] = useState(null);
  const [qv3, Qv3] = useState(null);
  const [qv4, Qv4] = useState(null);
  const [qv5, Qv5] = useState(null);
  const [qv6, Qv6] = useState(null);
  const [qv7, Qv7] = useState(null);
  const [qv8, Qv8] = useState(null);
  const [qv9, Qv9] = useState(null);
  const [qv10, Qv10] = useState(null);
  const [qv11, Qv11] = useState(null);
  const [qv12, Qv12] = useState(null);
  const [qv13, Qv13] = useState(null);
  const [qv14, Qv14] = useState(null);
  const [qv15, Qv15] = useState(null);
  const [qv16, Qv16] = useState(null);
  const [qv17, Qv17] = useState(null);
  const [qv18, Qv18] = useState(null);
  const [qv19, Qv19] = useState(null);
  const [qv20, Qv20] = useState(null);
  const [qv21, Qv21] = useState(null);

  const [bpl0, Bpl0] = useState(null);
  const [bpl1, Bpl1] = useState(null);
  const [bpl2, Bpl2] = useState(null);
  const [bpl3, Bpl3] = useState(null);
  const [bpl4, Bpl4] = useState(null);
  const [bpl5, Bpl5] = useState(null);
  const [bpl6, Bpl6] = useState(null);
  const [bpl7, Bpl7] = useState(null);
  const [bpl8, Bpl8] = useState(null);
  const [bpl9, Bpl9] = useState(null);
  const [bpl10, Bpl10] = useState(null);
  const [bpl11, Bpl11] = useState(null);
  const [bpl12, Bpl12] = useState(null);
  const [bpl13, Bpl13] = useState(null);
  const [bpl14, Bpl14] = useState(null);
  const [bpl15, Bpl15] = useState(null);
  const [bpl16, Bp16] = useState(null);
  const [bpl17, Bpl17] = useState(null);
  const [bpl18, Bpl18] = useState(null);
  const [bpl19, Bpl19] = useState(null);
  const [bpl20, Bpl20] = useState(null);
  const [bpl21, Bpl21] = useState(null);

  const [rh0, Rh0] = useState(null);
  const [rh1, Rh1] = useState(null);
  const [rh2, Rh2] = useState(null);
  const [rh3, Rh3] = useState(null);
  const [rh4, Rh4] = useState(null);
  const [rh5, Rh5] = useState(null);
  const [rh6, Rh6] = useState(null);
  const [rh7, Rh7] = useState(null);
  const [rh8, Rh8] = useState(null);
  const [rh9, Rh9] = useState(null);
  const [rh10, Rh10] = useState(null);
  const [rh11, Rh11] = useState(null);
  const [rh12, Rh12] = useState(null);
  const [rh13, Rh13] = useState(null);
  const [rh14, Rh14] = useState(null);
  const [rh15, Rh15] = useState(null);
  const [rh16, Rh16] = useState(null);
  const [rh17, Rh17] = useState(null);
  const [rh18, Rh18] = useState(null);
  const [rh19, Rh19] = useState(null);
  const [rh20, Rh20] = useState(null);
  const [rh21, Rh21] = useState(null);

  const [qh0, Qh0] = useState(null);
  const [qh1, Qh1] = useState(null);
  const [qh2, Qh2] = useState(null);
  const [qh3, Qh3] = useState(null);
  const [qh4, Qh4] = useState(null);
  const [qh5, Qh5] = useState(null);
  const [qh6, Qh6] = useState(null);
  const [qh7, Qh7] = useState(null);
  const [qh8, Qh8] = useState(null);
  const [qh9, Qh9] = useState(null);
  const [qh10, Qh10] = useState(null);
  const [qh11, Qh11] = useState(null);
  const [qh12, Qh12] = useState(null);
  const [qh13, Qh13] = useState(null);
  const [qh14, Qh14] = useState(null);
  const [qh15, Qh15] = useState(null);
  const [qh16, Qh16] = useState(null);
  const [qh17, Qh17] = useState(null);
  const [qh18, Qh18] = useState(null);
  const [qh19, Qh19] = useState(null);
  const [qh20, Qh20] = useState(null);
  const [qh21, Qh21] = useState(null);

  const [bph0, Bph0] = useState(null);
  const [bph1, Bph1] = useState(null);
  const [bph2, Bph2] = useState(null);
  const [bph3, Bph3] = useState(null);
  const [bph4, Bph4] = useState(null);
  const [bph5, Bph5] = useState(null);
  const [bph6, Bph6] = useState(null);
  const [bph7, Bph7] = useState(null);
  const [bph8, Bph8] = useState(null);
  const [bph9, Bph9] = useState(null);
  const [bph10, Bph10] = useState(null);
  const [bph11, Bph11] = useState(null);
  const [bph12, Bph12] = useState(null);
  const [bph13, Bph13] = useState(null);
  const [bph14, Bph14] = useState(null);
  const [bph15, Bph15] = useState(null);
  const [bph16, Bph16] = useState(null);
  const [bph17, Bph17] = useState(null);
  const [bph18, Bph18] = useState(null);
  const [bph19, Bph19] = useState(null);
  const [bph20, Bph20] = useState(null);
  const [bph21, Bph21] = useState(null);

  const [inp1, Inp1] = useState(2);
  const [inp2, Inp2] = useState(2);

  const [tb1_1, Tb1_1] = useState(null);
  const [tb1_2, Tb1_2] = useState(null);
  const [tb1_3, Tb1_3] = useState(null);
  const [tb1_4, Tb1_4] = useState(null);
  const [tb1_5, Tb1_5] = useState(null);
  const [tb1_6, Tb1_6] = useState(null);
  const [tb1_7, Tb1_7] = useState(null);
  const [tb1_8, Tb1_8] = useState(null);
  const [tb1_9, Tb1_9] = useState(null);
  const [tb1_10, Tb1_10] = useState(null);

  const [tb2_1, Tb2_1] = useState(null);
  const [tb2_2, Tb2_2] = useState(null);
  const [tb2_3, Tb2_3] = useState(null);
  const [tb2_4, Tb2_4] = useState(null);
  const [tb2_5, Tb2_5] = useState(null);
  const [tb2_6, Tb2_6] = useState(null);
  const [tb2_7, Tb2_7] = useState(null);
  const [tb2_8, Tb2_8] = useState(null);
  const [tb2_9, Tb2_9] = useState(null);
  const [tb2_10, Tb2_10] = useState(null);

  const [posDiffQ, PosDiffQ] = useState(null);
  const [posDiffBP, PosDiffBP] = useState(null);

  const [baseVal, BaseVal] = useState(0);
  const [baseValIndex, BaseValIndex] = useState(0);

  const [upperLimit, UpperLimit] = useState(0);
  const [downLimit, DownLimit] = useState(0);

  const [val1, Val1] = useState(0);
  const [noTimes, NoTimes] = useState(0);
  const [lastAns, LastAns] = useState(0);

  function MulDiv(nm) {
    for (let i = 0; i < div1 - 1; i++) {
      nm = nm / (1 / fd1);
    }
    return nm;
  }

  function getAlpha() {
    return MulDiv(
      Math.abs(
        Math.round(((high + low + close) / 3) * 100) / 100 -
          ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
      )
    );
  }

  function getP() {
    return Math.round(((high + low + close) / 3) * 100) / 100;
  }

  function getRH() {
    return (Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low;
  }

  function calQH() {
    Qh0((getRH() - getAlpha() * fd2).toFixed(2));
    Qh1((getRH() - (getAlpha() * fd2 + getAlpha())).toFixed(2));
    Qh2((getRH() - (getAlpha() * fd2 + 2 * getAlpha())).toFixed(2));
    Qh3((getRH() - (2 * getAlpha() * fd2 + 3 * getAlpha())).toFixed(2));
    Qh4((getRH() - (2 * getAlpha() * fd2 + 5 * getAlpha())).toFixed(2));
    Qh5((getRH() - (2 * getAlpha() * fd2 + 7 * getAlpha())).toFixed(2));
    Qh6((getRH() - (3 * getAlpha() * fd2 + 9 * getAlpha())).toFixed(2));
    Qh7((getRH() - (3 * getAlpha() * fd2 + 12 * getAlpha())).toFixed(2));
    Qh8((getRH() - (3 * getAlpha() * fd2 + 15 * getAlpha())).toFixed(2));
    Qh9((getRH() - (1.5 * getAlpha() * fd2 + 18 * getAlpha())).toFixed(2));
    Qh10((getRH() - (1.5 * getAlpha() * fd2 + 19.5 * getAlpha())).toFixed(2));
    Qh11((getRH() - (1.5 * getAlpha() * fd2 + 21 * getAlpha())).toFixed(2));
    Qh12((getRH() - (3 * getAlpha() * fd2 + 22.5 * getAlpha())).toFixed(2));
    Qh13((getRH() - (3 * getAlpha() * fd2 + 25.5 * getAlpha())).toFixed(2));
    Qh14((getRH() - (3 * getAlpha() * fd2 + 28.5 * getAlpha())).toFixed(2));
    Qh15((getRH() - (4.5 * getAlpha() * fd2 + 31.5 * getAlpha())).toFixed(2));
    Qh16((getRH() - (4.5 * getAlpha() * fd2 + 36 * getAlpha())).toFixed(2));
    Qh17((getRH() - (4.5 * getAlpha() * fd2 + 40.5 * getAlpha())).toFixed(2));
    Qh18((getRH() - (2 * getAlpha() * fd2 + 49.5 * getAlpha())).toFixed(2));
    Qh19((getRH() - (2 * getAlpha() * fd2 + 51.5 * getAlpha())).toFixed(2));
    Qh20((getRH() - (2 * getAlpha() * fd2 + 53.5 * getAlpha())).toFixed(2));
    Qh21((getRH() - (2 * getAlpha() * fd2 + 55.5 * getAlpha())).toFixed(2));
  }

  function calBPH() {
    Bph0((getRH() - getAlpha() * fd2 - getAlpha() * fd3).toFixed(2));
    Bph1(
      (getRH() - getAlpha() * fd2 - getAlpha() - getAlpha() * fd3).toFixed(2)
    );
    Bph2(
      (
        getRH() -
        getAlpha() * fd2 -
        2 * getAlpha() -
        (getAlpha() + getAlpha() * fd2) * fd3
      ).toFixed(2)
    );
    Bph3(
      (
        getRH() -
        2 * getAlpha() * fd2 -
        3 * getAlpha() -
        2 * getAlpha() * fd3
      ).toFixed(2)
    );
    Bph4(
      (
        getRH() -
        2 * getAlpha() * fd2 -
        5 * getAlpha() -
        2 * getAlpha() * fd3
      ).toFixed(2)
    );
    Bph5(
      (
        getRH() -
        2 * getAlpha() * fd2 -
        7 * getAlpha() -
        (getAlpha() * fd2 + 2 * getAlpha()) * fd3
      ).toFixed(2)
    );
    Bph6(
      (
        getRH() -
        3 * getAlpha() * fd2 -
        9 * getAlpha() -
        3 * getAlpha() * fd3
      ).toFixed(2)
    );
    Bph7(
      (
        getRH() -
        3 * getAlpha() * fd2 -
        12 * getAlpha() -
        3 * getAlpha() * fd3
      ).toFixed(2)
    );
    Bph8(
      (
        getRH() -
        3 * getAlpha() * fd2 -
        15 * getAlpha() -
        (3 * getAlpha() - 1.5 * getAlpha() * fd2) * fd3
      ).toFixed(2)
    );
    Bph9(
      (
        getRH() -
        1.5 * getAlpha() * fd2 -
        18 * getAlpha() -
        1.5 * getAlpha() * fd3
      ).toFixed(2)
    );
    Bph10(
      (
        getRH() -
        1.5 * getAlpha() * fd2 -
        19.5 * getAlpha() -
        1.5 * getAlpha() * fd3
      ).toFixed(2)
    );
    Bph11(
      (
        getRH() -
        1.5 * getAlpha() * fd2 -
        21 * getAlpha() -
        (1.5 * getAlpha() + 1.5 * getAlpha() * fd2) * fd3
      ).toFixed(2)
    );
    Bph12(
      (
        getRH() -
        3 * getAlpha() * fd2 -
        22.5 * getAlpha() -
        3 * getAlpha() * fd3
      ).toFixed(2)
    );
    Bph13(
      (
        getRH() -
        3 * getAlpha() * fd2 -
        25.5 * getAlpha() -
        3 * getAlpha() * fd3
      ).toFixed(2)
    );
    Bph14(
      (
        getRH() -
        3 * getAlpha() * fd2 -
        28.5 * getAlpha() -
        (1.5 * getAlpha() * fd2 + 3 * getAlpha()) * fd3
      ).toFixed(2)
    );
    Bph15(
      (
        getRH() -
        4.5 * getAlpha() * fd2 -
        31.5 * getAlpha() -
        4.5 * getAlpha() * fd3
      ).toFixed(2)
    );
  }

  const calAlpha = () => {
    let temp = 1;
    for (let i = 0; i < div1; i++) {
      temp *= 1 / fd1;
      temp = Math.pow(1 / fd1, 6.25);
    }

    Alpha(
      MulDiv(
        Math.abs(
          Math.round(((high + low + close) / 3) * 100) / 100 -
            ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
        )
      ).toFixed(2)
    );

    Rv0(Math.round(((high + low + close) / 3) * 100) / 100);
    Rv1(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        MulDiv(
          Math.abs(
            Math.round(((high + low + close) / 3) * 100) / 100 -
              ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
          )
        )
      ).toFixed(2)
    );
    Rv2(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        2 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          )
      ).toFixed(2)
    );
    Rv3(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        3 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          )
      ).toFixed(2)
    );

    Rv4(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        5 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          )
      ).toFixed(2)
    );

    Rv5(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        7 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          )
      ).toFixed(2)
    );

    Rv6(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        9 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          )
      ).toFixed(2)
    );
    Rv7(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        12 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          )
      ).toFixed(2)
    );

    Rv8(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        15 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          )
      ).toFixed(2)
    );

    Rv9(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        15 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) +
        4.5 * getAlpha()
      ).toFixed(2)
    );

    Rv10(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        15 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) +
        4.5 * getAlpha() +
        4.5 * getAlpha()
      ).toFixed(2)
    );

    Rv11(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        15 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) +
        4.5 * getAlpha() +
        4.5 * getAlpha() +
        4.5 * getAlpha()
      ).toFixed(2)
    );

    Rv12(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        15 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) +
        4.5 * getAlpha() +
        4.5 * getAlpha() +
        4.5 * getAlpha() +
        9 * getAlpha()
      ).toFixed(2)
    );
    Rv13(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        15 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) +
        4.5 * getAlpha() +
        4.5 * getAlpha() +
        4.5 * getAlpha() +
        9 * getAlpha() +
        9 * getAlpha()
      ).toFixed(2)
    );

    Rv14(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        15 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) +
        13.5 * getAlpha() +
        27 * getAlpha()
      ).toFixed(2)
    );

    Rv15(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        15 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) +
        13.5 * getAlpha() +
        27 * getAlpha() +
        13.5 * getAlpha()
      ).toFixed(2)
    );

    Rv16(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        (51 *
          Math.round(
            (Math.round((((high + low + close) / 3) * 100) / 100 - rHigh) /
              temp) *
              100
          )) /
          100
      ).toFixed(2)
    );

    Rv17(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        (57 *
          Math.round(
            (Math.round((((high + low + close) / 3) * 100) / 100 - rHigh) /
              temp) *
              100
          )) /
          100
      ).toFixed(2)
    );

    Rv18(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        (63 *
          Math.round(
            (Math.round((((high + low + close) / 3) * 100) / 100 - rHigh) /
              temp) *
              100
          )) /
          100
      ).toFixed(2)
    );

    Rv19(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        (70 *
          Math.round(
            (Math.round((((high + low + close) / 3) * 100) / 100 - rHigh) /
              temp) *
              100
          )) /
          100
      ).toFixed(2)
    );

    Rv20(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        (77 *
          Math.round(
            (Math.round((((high + low + close) / 3) * 100) / 100 - rHigh) /
              temp) *
              100
          )) /
          100
      ).toFixed(2)
    );

    Rv21(
      (
        Math.round(((high + low + close) / 3) * 100) / 100 +
        (84 *
          Math.round(
            (Math.round((((high + low + close) / 3) * 100) / 100 - rHigh) /
              temp) *
              100
          )) /
          100
      ).toFixed(2)
    );

    Qv0(
      (
        MulDiv(
          Math.abs(
            Math.round(((high + low + close) / 3) * 100) / 100 -
              ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
          )
        ) *
          fd2 +
        Math.round(((high + low + close) / 3) * 100) / 100
      ).toFixed(2)
    );

    Qv1(
      (
        MulDiv(
          Math.abs(
            Math.round(((high + low + close) / 3) * 100) / 100 -
              ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
          )
        ) *
          fd2 +
        (Math.round(((high + low + close) / 3) * 100) / 100 +
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ))
      ).toFixed(2)
    );

    Qv2(
      (
        MulDiv(
          Math.abs(
            Math.round(((high + low + close) / 3) * 100) / 100 -
              ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
          )
        ) *
          fd2 +
        (Math.round(((high + low + close) / 3) * 100) / 100 +
          2 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ))
      ).toFixed(2)
    );

    Qv3(
      (
        2 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
        (Math.round(((high + low + close) / 3) * 100) / 100 +
          3 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ))
      ).toFixed(2)
    );

    Qv4(
      (
        2 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
        (Math.round(((high + low + close) / 3) * 100) / 100 +
          5 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ))
      ).toFixed(2)
    );

    Qv5(
      (
        2 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
        (Math.round(((high + low + close) / 3) * 100) / 100 +
          7 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ))
      ).toFixed(2)
    );

    // Qv5(2 * getAlpha() * fd2 + getP() + getAlpha());

    Qv6(
      (
        3 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
        (Math.round(((high + low + close) / 3) * 100) / 100 +
          9 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ))
      ).toFixed(2)
    );

    Qv7(
      (
        3 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
        (Math.round(((high + low + close) / 3) * 100) / 100 +
          12 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ))
      ).toFixed(2)
    );

    Qv8(
      (
        3 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
        (Math.round(((high + low + close) / 3) * 100) / 100 +
          15 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ))
      ).toFixed(2)
    );

    Qv9(
      (
        4.5 * getAlpha() * fd2 +
        getP() +
        15 * getAlpha() +
        4.5 * getAlpha()
      ).toFixed(2)
    );

    // Qv9(
    //   (
    //     3 * (getAlpha() * fd2 + 2 * getAlpha() * fd2 + 3 * getAlpha() * fd2) +
    //     1.5 * getAlpha() * fd2
    //   ).toFixed(2)
    // );

    Qv10(
      (
        9 * getAlpha() * fd2 +
        getP() +
        15 * getAlpha() +
        9 * getAlpha()
      ).toFixed(2)
    );

    Qv11(
      (
        13.5 * getAlpha() * fd2 +
        getP() +
        15 * getAlpha() +
        13.5 * getAlpha()
      ).toFixed(2)
    );

    Qv12(
      (
        16.5 * getAlpha() * fd2 +
        getP() +
        15 * getAlpha() +
        13.5 * getAlpha() +
        9 * getAlpha()
      ).toFixed(2)
    );

    Qv13(
      (
        19.5 * getAlpha() * fd2 +
        getP() +
        15 * getAlpha() +
        4.5 * getAlpha() +
        18 * getAlpha()
      ).toFixed(2)
    );

    Qv14(
      (
        22.5 * getAlpha() * fd2 +
        getP() +
        15 * getAlpha() +
        4.5 * getAlpha() +
        27 * getAlpha()
      ).toFixed(2)
    );

    Qv15(
      (
        27 * getAlpha() * fd2 +
        getP() +
        15 * getAlpha() +
        54 * getAlpha()
      ).toFixed(2)
    );

    {
      /*__________________________________*/
    }
    Bpl0(
      (
        Math.abs(
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
            fd2 +
            Math.round(((high + low + close) / 3) * 100) / 100 -
            (MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ) *
              fd2 +
              (Math.round(((high + low + close) / 3) * 100) / 100 +
                MulDiv(
                  Math.abs(
                    Math.round(((high + low + close) / 3) * 100) / 100 -
                      ((Math.round(((high + low + close) / 3) * 100) / 100) *
                        2 -
                        low)
                  )
                )))
        ) *
          fd3 +
        (MulDiv(
          Math.abs(
            Math.round(((high + low + close) / 3) * 100) / 100 -
              ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
          )
        ) *
          fd2 +
          Math.round(((high + low + close) / 3) * 100) / 100)
      ).toFixed(2)
    );

    Bpl1(
      (
        Math.abs(
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
            fd2 +
            Math.round(((high + low + close) / 3) * 100) / 100 -
            (MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ) *
              fd2 +
              (Math.round(((high + low + close) / 3) * 100) / 100 +
                MulDiv(
                  Math.abs(
                    Math.round(((high + low + close) / 3) * 100) / 100 -
                      ((Math.round(((high + low + close) / 3) * 100) / 100) *
                        2 -
                        low)
                  )
                )))
        ) *
          fd3 +
        (MulDiv(
          Math.abs(
            Math.round(((high + low + close) / 3) * 100) / 100 -
              ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
          )
        ) *
          fd2 +
          (Math.round(((high + low + close) / 3) * 100) / 100 +
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            )))
      ).toFixed(2)
    );

    Bpl1(
      (
        Math.abs(
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
            fd2 +
            Math.round(((high + low + close) / 3) * 100) / 100 -
            (MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ) *
              fd2 +
              (Math.round(((high + low + close) / 3) * 100) / 100 +
                MulDiv(
                  Math.abs(
                    Math.round(((high + low + close) / 3) * 100) / 100 -
                      ((Math.round(((high + low + close) / 3) * 100) / 100) *
                        2 -
                        low)
                  )
                )))
        ) *
          fd3 +
        (MulDiv(
          Math.abs(
            Math.round(((high + low + close) / 3) * 100) / 100 -
              ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
          )
        ) *
          fd2 +
          (Math.round(((high + low + close) / 3) * 100) / 100 +
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            )))
      ).toFixed(2)
    );

    Bpl2(
      (
        Math.abs(
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
            fd2 +
            (Math.round(((high + low + close) / 3) * 100) / 100 +
              2 *
                MulDiv(
                  Math.abs(
                    Math.round(((high + low + close) / 3) * 100) / 100 -
                      ((Math.round(((high + low + close) / 3) * 100) / 100) *
                        2 -
                        low)
                  )
                )) -
            (2 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              ) *
              fd2 +
              (Math.round(((high + low + close) / 3) * 100) / 100 +
                3 *
                  MulDiv(
                    Math.abs(
                      Math.round(((high + low + close) / 3) * 100) / 100 -
                        ((Math.round(((high + low + close) / 3) * 100) / 100) *
                          2 -
                          low)
                    )
                  )))
        ) *
          fd3 +
        (MulDiv(
          Math.abs(
            Math.round(((high + low + close) / 3) * 100) / 100 -
              ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
          )
        ) *
          fd2 +
          (Math.round(((high + low + close) / 3) * 100) / 100 +
            2 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              )))
      ).toFixed(2)
    );

    Bpl3(
      (
        Math.abs(
          2 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ) *
            fd2 +
            (Math.round(((high + low + close) / 3) * 100) / 100 +
              3 *
                MulDiv(
                  Math.abs(
                    Math.round(((high + low + close) / 3) * 100) / 100 -
                      ((Math.round(((high + low + close) / 3) * 100) / 100) *
                        2 -
                        low)
                  )
                )) -
            (2 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              ) *
              fd2 +
              (Math.round(((high + low + close) / 3) * 100) / 100 +
                5 *
                  MulDiv(
                    Math.abs(
                      Math.round(((high + low + close) / 3) * 100) / 100 -
                        ((Math.round(((high + low + close) / 3) * 100) / 100) *
                          2 -
                          low)
                    )
                  )))
        ) *
          fd3 +
        (2 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
          (Math.round(((high + low + close) / 3) * 100) / 100 +
            3 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              )))
      ).toFixed(2)
    );

    Bpl4(
      (
        Math.abs(
          2 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ) *
            fd2 +
            (Math.round(((high + low + close) / 3) * 100) / 100 +
              5 *
                MulDiv(
                  Math.abs(
                    Math.round(((high + low + close) / 3) * 100) / 100 -
                      ((Math.round(((high + low + close) / 3) * 100) / 100) *
                        2 -
                        low)
                  )
                )) -
            (2 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              ) *
              fd2 +
              (Math.round(((high + low + close) / 3) * 100) / 100 +
                7 *
                  MulDiv(
                    Math.abs(
                      Math.round(((high + low + close) / 3) * 100) / 100 -
                        ((Math.round(((high + low + close) / 3) * 100) / 100) *
                          2 -
                          low)
                    )
                  )))
        ) *
          fd3 +
        (2 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
          (Math.round(((high + low + close) / 3) * 100) / 100 +
            5 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              )))
      ).toFixed(2)
    );

    Bpl5(
      (
        Math.abs(
          2 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ) *
            fd2 +
            (Math.round(((high + low + close) / 3) * 100) / 100 +
              7 *
                MulDiv(
                  Math.abs(
                    Math.round(((high + low + close) / 3) * 100) / 100 -
                      ((Math.round(((high + low + close) / 3) * 100) / 100) *
                        2 -
                        low)
                  )
                )) -
            (3 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              ) *
              fd2 +
              (Math.round(((high + low + close) / 3) * 100) / 100 +
                9 *
                  MulDiv(
                    Math.abs(
                      Math.round(((high + low + close) / 3) * 100) / 100 -
                        ((Math.round(((high + low + close) / 3) * 100) / 100) *
                          2 -
                          low)
                    )
                  )))
        ) *
          fd3 +
        (2 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
          (Math.round(((high + low + close) / 3) * 100) / 100 +
            7 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              )))
      ).toFixed(2)
    );

    Bpl6(
      (
        Math.abs(
          3 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ) *
            fd2 +
            (Math.round(((high + low + close) / 3) * 100) / 100 +
              9 *
                MulDiv(
                  Math.abs(
                    Math.round(((high + low + close) / 3) * 100) / 100 -
                      ((Math.round(((high + low + close) / 3) * 100) / 100) *
                        2 -
                        low)
                  )
                )) -
            (3 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              ) *
              fd2 +
              (Math.round(((high + low + close) / 3) * 100) / 100 +
                12 *
                  MulDiv(
                    Math.abs(
                      Math.round(((high + low + close) / 3) * 100) / 100 -
                        ((Math.round(((high + low + close) / 3) * 100) / 100) *
                          2 -
                          low)
                    )
                  )))
        ) *
          fd3 +
        (3 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
          (Math.round(((high + low + close) / 3) * 100) / 100 +
            9 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              )))
      ).toFixed(2)
    );

    Bpl7(
      (
        Math.abs(
          3 *
            MulDiv(
              Math.abs(
                Math.round(((high + low + close) / 3) * 100) / 100 -
                  ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                    low)
              )
            ) *
            fd2 +
            (Math.round(((high + low + close) / 3) * 100) / 100 +
              12 *
                MulDiv(
                  Math.abs(
                    Math.round(((high + low + close) / 3) * 100) / 100 -
                      ((Math.round(((high + low + close) / 3) * 100) / 100) *
                        2 -
                        low)
                  )
                )) -
            (3 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              ) *
              fd2 +
              (Math.round(((high + low + close) / 3) * 100) / 100 +
                15 *
                  MulDiv(
                    Math.abs(
                      Math.round(((high + low + close) / 3) * 100) / 100 -
                        ((Math.round(((high + low + close) / 3) * 100) / 100) *
                          2 -
                          low)
                    )
                  )))
        ) *
          fd3 +
        (3 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
          (Math.round(((high + low + close) / 3) * 100) / 100 +
            12 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              )))
      ).toFixed(2)
    );

    Bpl8(
      (
        (3 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
          (Math.round(((high + low + close) / 3) * 100) / 100 +
            15 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              )) -
          (4.5 * getAlpha() * fd2 +
            getP() +
            15 * getAlpha() +
            4.5 * getAlpha())) *
          fd3 +
        (3 *
          MulDiv(
            Math.abs(
              Math.round(((high + low + close) / 3) * 100) / 100 -
                ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low)
            )
          ) *
          fd2 +
          (Math.round(((high + low + close) / 3) * 100) / 100 +
            15 *
              MulDiv(
                Math.abs(
                  Math.round(((high + low + close) / 3) * 100) / 100 -
                    ((Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
                      low)
                )
              )))
      ).toFixed(2)
    );

    Bpl9(
      (
        (4.5 * getAlpha() * fd2 +
          getP() +
          15 * getAlpha() +
          4.5 * getAlpha() -
          (9 * getAlpha() * fd2 + getP() + 15 * getAlpha() + 9 * getAlpha())) *
          fd3 +
        (4.5 * getAlpha() * fd2 + getP() + 15 * getAlpha() + 4.5 * getAlpha())
      ).toFixed(2)
    );

    Bpl10(
      (
        (9 * getAlpha() * fd2 +
          getP() +
          15 * getAlpha() +
          9 * getAlpha() -
          (13.5 * getAlpha() * fd2 +
            getP() +
            15 * getAlpha() +
            13.5 * getAlpha())) *
          fd3 +
        (9 * getAlpha() * fd2 + getP() + 15 * getAlpha() + 9 * getAlpha())
      ).toFixed(2)
    );

    Bpl11(
      (
        (13.5 * getAlpha() * fd2 +
          getP() +
          15 * getAlpha() +
          13.5 * getAlpha() -
          (16.5 * getAlpha() * fd2 +
            getP() +
            15 * getAlpha() +
            13.5 * getAlpha() +
            9 * getAlpha())) *
          fd3 +
        (13.5 * getAlpha() * fd2 + getP() + 15 * getAlpha() + 13.5 * getAlpha())
      ).toFixed(2)
    );

    Bpl12(
      (
        (16.5 * getAlpha() * fd2 +
          getP() +
          15 * getAlpha() +
          13.5 * getAlpha() +
          9 * getAlpha() -
          (19.5 * getAlpha() * fd2 +
            getP() +
            15 * getAlpha() +
            4.5 * getAlpha() +
            18 * getAlpha())) *
          fd3 +
        (16.5 * getAlpha() * fd2 +
          getP() +
          15 * getAlpha() +
          13.5 * getAlpha() +
          9 * getAlpha())
      ).toFixed(2)
    );

    Bpl13(
      (
        19.5 * getAlpha() * fd2 +
        getP() +
        15 * getAlpha() +
        4.5 * getAlpha() +
        18 * getAlpha() -
        (22.5 * getAlpha() * fd2 +
          getP() +
          15 * getAlpha() +
          4.5 * getAlpha() +
          27 * getAlpha()) *
          fd3 +
        (19.5 * getAlpha() * fd2 +
          getP() +
          15 * getAlpha() +
          4.5 * getAlpha() +
          18 * getAlpha())
      ).toFixed(2)
    );

    Bpl14(
      (
        22.5 * getAlpha() * fd2 +
        getP() +
        15 * getAlpha() +
        4.5 * getAlpha() +
        27 * getAlpha() -
        (27 * getAlpha() * fd2 + getP() + 15 * getAlpha() + 54 * getAlpha()) *
          fd3 +
        (22.5 * getAlpha() * fd2 +
          getP() +
          15 * getAlpha() +
          4.5 * getAlpha() +
          27 * getAlpha())
      ).toFixed(2)
    );

    Rh0((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low);
    Rh1(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        getAlpha()
      ).toFixed(2)
    );
    Rh2(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        2 * getAlpha()
      ).toFixed(2)
    );
    Rh3(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        3 * getAlpha()
      ).toFixed(2)
    );
    Rh4(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        5 * getAlpha()
      ).toFixed(2)
    );
    Rh5(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        7 * getAlpha()
      ).toFixed(2)
    );
    Rh6(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        9 * getAlpha()
      ).toFixed(2)
    );
    Rh7(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        12 * getAlpha()
      ).toFixed(2)
    );
    Rh8(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        15 * getAlpha()
      ).toFixed(2)
    );
    Rh9(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        18 * getAlpha()
      ).toFixed(2)
    );
    Rh10(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        19.5 * getAlpha()
      ).toFixed(2)
    );
    Rh11(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        21 * getAlpha()
      ).toFixed(2)
    );
    Rh12(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        22.5 * getAlpha()
      ).toFixed(2)
    );
    Rh13(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        25.5 * getAlpha()
      ).toFixed(2)
    );
    Rh14(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        28.5 * getAlpha()
      ).toFixed(2)
    );
    Rh15(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        31.5 * getAlpha()
      ).toFixed(2)
    );
    Rh16(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        36 * getAlpha()
      ).toFixed(2)
    );
    Rh16(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        40.5 * getAlpha()
      ).toFixed(2)
    );
    Rh17(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        45 * getAlpha()
      ).toFixed(2)
    );

    Rh18(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        49.5 * getAlpha()
      ).toFixed(2)
    );
    Rh19(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        51.5 * getAlpha()
      ).toFixed(2)
    );
    Rh20(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        53.5 * getAlpha()
      ).toFixed(2)
    );
    Rh21(
      (
        (Math.round(((high + low + close) / 3) * 100) / 100) * 2 -
        low -
        55.5 * getAlpha()
      ).toFixed(2)
    );
  };

  const calculate = () => {
    P(Math.round(((high + low + close) / 3) * 100) / 100);

    R1((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low);
    R2(
      Math.round(
        (Math.round(((high + low + close) / 3) * 100) / 100 +
          Math.abs(high - low)) *
          100
      ) / 100
    );
    R3(2 * (Math.round(((high + low + close) / 3) * 100) / 100 - low) + high);
    S1(
      Math.round(
        (2 * (Math.round(((high + low + close) / 3) * 100) / 100) - high) * 100
      ) / 100
    );
    S2(
      Math.round(
        (Math.round(((high + low + close) / 3) * 100) / 100 -
          Math.abs(high - low)) *
          100
      ) / 100
    );
    S3(
      Math.round(
        (low -
          2 * (high - Math.round(((high + low + close) / 3) * 100) / 100)) *
          100
      ) / 100
    );
    RHigh((Math.round(((high + low + close) / 3) * 100) / 100) * 2 - low);
    RLow(Math.round(((high + low + close) / 3) * 100) / 100);

    calAlpha();
    calQH();
    calBPH();
    secPage();
  };

  function getPosDiffQ() {
    return Math.abs(qv5 - qv6).toFixed(2);
  }
  function getPosDiffBP() {
    return Math.abs(bpl5 - bpl6).toFixed(2);
  }
  // PosDiffQ(Math.abs(qv5 - qv6).toFixed(2));
  function secPage() {
    PosDiffBP(Math.abs(bpl5 - bpl6).toFixed(2));
    let posDiffQ10 = posDiffQ / 10;
    let posDiffBP10 = posDiffBP / 10;
    Tb1_1(getPosDiffQ());
    Tb1_2(getPosDiffQ() * 0.9);
    Tb1_3(getPosDiffQ() * 0.8);
    Tb1_4(getPosDiffQ() * 0.7);
    Tb1_5(getPosDiffQ() * 0.6);
    Tb1_6(getPosDiffQ() * 0.5);
    Tb1_7(getPosDiffQ() * 0.4);
    Tb1_8(getPosDiffQ() * 0.3);
    Tb1_9(getPosDiffQ() * 0.2);
    Tb1_10(getPosDiffQ() * 0.1);
    let firstVal = 0,
      baseIndex = 0;

    if (curr > getPosDiffQ()) {
      alert(
        "Got a Value higher than Upper Limit of Difference Table",
        curr,
        getPosDiffQ()
      );
    } else if (curr < getPosDiffQ() && curr >= getPosDiffQ() * 0.9) {
      firstVal = getPosDiffQ() * 0.9;
      baseIndex = 2;
    } else if (curr < getPosDiffQ() * 0.9 && curr >= getPosDiffQ() * 0.8) {
      firstVal = getPosDiffQ() * 0.8;
      baseIndex = 3;
    } else if (curr < getPosDiffQ() * 0.8 && curr >= getPosDiffQ() * 0.7) {
      firstVal = getPosDiffQ() * 7;
      baseIndex = 4;
    } else if (curr < getPosDiffQ() * 0.7 && curr >= getPosDiffQ() * 0.6) {
      firstVal = getPosDiffQ() * 0.6;
      baseIndex = 5;
    } else if (curr < getPosDiffQ() * 0.6 && curr >= getPosDiffQ() * 0.5) {
      firstVal = getPosDiffQ() * 0.5;
      baseIndex = 6;
    } else if (curr < getPosDiffQ() * 0.5 && curr >= getPosDiffQ() * 0.4) {
      firstVal = getPosDiffQ() * 0.4;
      baseIndex = 7;
    } else if (curr < getPosDiffQ() * 0.4 && curr >= getPosDiffQ() * 0.3) {
      firstVal = getPosDiffQ() * 0.3;
      baseIndex = 8;
    } else if (curr < getPosDiffQ() * 0.3 && curr >= getPosDiffQ() * 0.2) {
      firstVal = getPosDiffQ() * 0.2;
      baseIndex = 9;
    } else if (curr < getPosDiffQ() * 0.2 && curr >= getPosDiffQ() * 0.1) {
      firstVal = getPosDiffQ() * 0.1;
      baseIndex = 10;
    }
    if (firstVal === 0 || baseIndex === 0) {
      alert("got Forst Value as zero");
    }
    BaseVal((firstVal / 10).toFixed(2));
    BaseValIndex(baseIndex);

    Tb2_1(getPosDiffBP());
    Tb2_2(getPosDiffBP() * 0.9);
    Tb2_3(getPosDiffBP() * 0.8);
    Tb2_4(getPosDiffBP() * 0.7);
    Tb2_5(getPosDiffBP() * 0.6);
    Tb2_6(getPosDiffBP() * 0.5);
    Tb2_7(getPosDiffBP() * 0.4);
    Tb2_8(getPosDiffBP() * 0.3);
    Tb2_9(getPosDiffBP() * 0.2);
    Tb2_10(getPosDiffBP() * 0.1);

    let upperIndex = parseInt(baseIndex) - parseInt(inp1);
    let downIndex = parseInt(baseIndex) + parseInt(inp2);

    if (upperIndex == 1) UpperLimit(getPosDiffQ());
    else if (upperIndex == 2) UpperLimit(getPosDiffQ() * 0.9);
    else if (upperIndex == 3) UpperLimit(getPosDiffQ() * 0.8);
    else if (upperIndex == 4) UpperLimit(getPosDiffQ() * 0.7);
    else if (upperIndex == 5) UpperLimit(getPosDiffQ() * 0.6);
    else if (upperIndex == 6) UpperLimit(getPosDiffQ() * 0.5);
    else if (upperIndex == 7) UpperLimit(getPosDiffQ() * 0.4);
    else if (upperIndex == 8) UpperLimit(getPosDiffQ() * 0.3);
    else if (upperIndex == 9) UpperLimit(getPosDiffQ() * 0.2);
    else if (upperIndex == 10) UpperLimit(getPosDiffQ() * 0.1);
    else
      alert(
        "Got UpperIndex out of Range 1 to 10, Please Check!!" +
          upperIndex +
          " " +
          baseIndex +
          " " +
          inp2
      );

    if (downIndex == 1) DownLimit(getPosDiffBP());
    else if (downIndex == 2) DownLimit(getPosDiffBP() * 0.9);
    else if (downIndex == 3) DownLimit(getPosDiffBP() * 0.8);
    else if (downIndex == 4) DownLimit(getPosDiffBP() * 0.7);
    else if (downIndex == 5) DownLimit(getPosDiffBP() * 0.6);
    else if (downIndex == 6) DownLimit(getPosDiffBP() * 0.5);
    else if (downIndex == 7) DownLimit(getPosDiffBP() * 0.4);
    else if (downIndex == 8) DownLimit(getPosDiffBP() * 0.3);
    else if (downIndex == 9) DownLimit(getPosDiffBP() * 0.2);
    else if (downIndex == 10) DownLimit(getPosDiffBP() * 0.1);
    else
      alert(
        "Got DownIndex out of Range 1 to 10, Please Check!!" +
          downIndex +
          " " +
          baseIndex +
          " " +
          inp2
      );

    let divide1 = Math.abs(upperLimit - downLimit) / 1.9;
    let divide2 = Math.abs(upperLimit - downLimit) / 3.8;

    Val1(divide1);
    LastAns(Math.abs(upperLimit - downLimit) / 1.9 / Math.pow(2, noTimes));
  }

  return (
    <div className="App">
      <Table>
        <tr>
          <th>High : </th>
          <td>
            <input
              //   type="number"
              value={high}
              onChange={(e) => {
                High(e.target.value);
              }}
            />
          </td>
          <th>Low : </th>
          <td>
            <input
              type="number"
              value={low}
              onChange={(e) => {
                Low(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <th>Close : </th>
          <td>
            <input
              type="number"
              value={close}
              onChange={(e) => {
                Close(e.target.value);
              }}
            />
          </td>

          <th>Current : </th>
          <td>
            <input
              type="number"
              value={curr}
              onChange={(e) => {
                Curr(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <th>fd1 : </th>
          <td>
            <input
              type="number"
              value={fd1}
              onChange={(e) => {
                Fd1(e.target.value);
              }}
            />
          </td>
          <th>fd2 : </th>
          <td>
            <input
              type="number"
              value={fd2}
              onChange={(e) => {
                Fd2(e.target.value);
              }}
            />
          </td>
          <th>fd3 : </th>
          <td>
            <input
              type="number"
              value={fd3}
              onChange={(e) => {
                Fd3(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <th>Div 1 : </th>
          <td>
            <input
              type="number"
              value={div1}
              onChange={(e) => {
                Div1(e.target.value);
              }}
            />
          </td>
        </tr>
      </Table>
      <Button onClick={calculate} />
      <br />
      <br />
      <br />
      <div>
        <span className="leftside">
          <h5>Primary Values:</h5>P : {p}
          <br />
          R1 : {r1}
          <br />
          R2 : {r2}
          <br />
          R3 : {r3}
          <br />
          S1 : {s1}
          <br />
          S2 : {s2}
          <br />
          S3 : {s3}
          <br />
          R-High : {rHigh}
          <br />
          R-Low : {rLow}
          <br />
          Alpha : {alpha}
          <br />
        </span>

        <span className="leftside" style={{ margin: "20px" }} />

        <span className="leftside">
          <h5>R</h5>
          <tr>
            <th>Values:</th>
          </tr>
          <tr>
            <td>R0 : </td>
            <td>{rv0}</td>
          </tr>

          <tr>
            <td>R1</td>
            <td>{rv1}</td>
          </tr>
          <tr>
            <td>R2</td>
            <td>{rv2}</td>
          </tr>
          <tr>
            <td>R3</td>
            <td>{rv3}</td>
          </tr>

          <tr>
            <td>R4</td>
            <td>{rv4}</td>
          </tr>
          <tr>
            <td>R5</td>
            <td>{rv5}</td>
          </tr>
          <tr>
            <td>R6</td>
            <td>{rv6}</td>
          </tr>
          <tr>
            <td>R7</td>
            <td>{rv7}</td>
          </tr>
          <tr>
            <td>R8</td>
            <td>{rv8}</td>
          </tr>

          <tr>
            <td>R9</td>
            <td>{rv9}</td>
          </tr>
          <tr>
            <td>R10</td>
            <td>{" : " + rv10}</td>
          </tr>
          <tr>
            <td>R11</td>
            <td>{" : " + rv11}</td>
          </tr>
          <tr>
            <td>R12</td>
            <td>{" : " + rv12}</td>
          </tr>
          <tr>
            <td>R13</td>
            <td>{" : " + rv13}</td>
          </tr>
          <tr>
            <td>R14</td>
            <td>{" : " + rv14}</td>
          </tr>
          <tr>
            <td>R15</td>
            <td>{" : " + rv15}</td>
          </tr>
          <tr>
            <td>R16</td>
            <td>{" : " + rv16}</td>
          </tr>
          <tr>
            <td>R17</td>
            <td>{" : " + rv17}</td>
          </tr>
          <tr>
            <td>R18</td>
            <td>{" : " + rv18}</td>
          </tr>
          <tr>
            <td>R19</td>
            <td>{" : " + rv19}</td>
          </tr>
          <tr>
            <td>R20</td>
            <td>{" : " + rv20}</td>
          </tr>
          <tr>
            <td>R21</td>
            <td>{" : " + rv21}</td>
          </tr>
        </span>

        <span className="leftside" style={{ margin: "20px" }} />

        <span className="leftside">
          <h5>Q Low</h5>
          <tr>
            <td>Q0 : </td>
            <td>{qv0}</td>
          </tr>

          <tr>
            <td>Q1</td>
            <td>{qv1}</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td>{qv2}</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td>{qv3}</td>
          </tr>

          <tr>
            <td>Q4</td>
            <td>{qv4}</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td>{qv5}</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td>{qv6}</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td>{qv7}</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td>{qv8}</td>
          </tr>

          <tr>
            <td>Q9</td>
            <td>{qv9}</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td>{qv10}</td>
          </tr>
          <tr>
            <td>Q11</td>
            <td>{qv11}</td>
          </tr>
          <tr>
            <td>Q12</td>
            <td>{qv12}</td>
          </tr>
          <tr>
            <td>Q13</td>
            <td>{qv13}</td>
          </tr>
          <tr>
            <td>Q14</td>
            <td>{qv14}</td>
          </tr>
          <tr>
            <td>Q15</td>
            <td>{qv15}</td>
          </tr>
          <tr>
            <td>Q16</td>
            <td>{qv16}</td>
          </tr>
          <tr>
            <td>Q17</td>
            <td>{qv17}</td>
          </tr>
          <tr>
            <td>Q18</td>
            <td>{qv18}</td>
          </tr>
          <tr>
            <td>Q19</td>
            <td>{qv19}</td>
          </tr>
          <tr>
            <td>Q20</td>
            <td>{qv20}</td>
          </tr>
          <tr>
            <td>Q21</td>
            <td>{qv21}</td>
          </tr>
        </span>

        <span className="leftside" style={{ margin: "50px" }} />

        <span className="leftside">
          <h5>BP Low</h5>
          <tr>
            <td>BO-0 : </td>
            <td>{bpl0}</td>
          </tr>

          <tr>
            <td>BO-1</td>
            <td>{bpl1}</td>
          </tr>
          <tr>
            <td>BO-2</td>
            <td>{bpl2}</td>
          </tr>
          <tr>
            <td>BO-3</td>
            <td>{bpl3}</td>
          </tr>

          <tr>
            <td>BO-4</td>
            <td>{bpl4}</td>
          </tr>
          <tr>
            <td>BO-5</td>
            <td>{bpl5}</td>
          </tr>
          <tr>
            <td>BO-6</td>
            <td>{bpl6}</td>
          </tr>
          <tr>
            <td>BO-7</td>
            <td>{bpl7}</td>
          </tr>
          <tr>
            <td>BO-8</td>
            <td>{bpl8}</td>
          </tr>

          <tr>
            <td>BO-9</td>
            <td>{bpl9}</td>
          </tr>
          <tr>
            <td>BO-10</td>
            <td>{bpl10}</td>
          </tr>
          <tr>
            <td>BO-11</td>
            <td>{bpl11}</td>
          </tr>
          <tr>
            <td>BO-12</td>
            <td>{bpl12}</td>
          </tr>
          <tr>
            <td>BO-13</td>
            <td>{bpl13}</td>
          </tr>
          <tr>
            <td>BO-14</td>
            <td>{bpl14}</td>
          </tr>
          <tr>
            <td>BO-15</td>
            <td>{bpl15}</td>
          </tr>
          <tr>
            <td>BO-16</td>
            <td>{bpl16}</td>
          </tr>
          <tr>
            <td>BO-17</td>
            <td>{bpl17}</td>
          </tr>
          <tr>
            <td>BO-18</td>
            <td>{bpl18}</td>
          </tr>
          <tr>
            <td>BO-19</td>
            <td>{bpl19}</td>
          </tr>
          <tr>
            <td>BO-20</td>
            <td>{bpl20}</td>
          </tr>
          <tr>
            <td>BO-21</td>
            <td>{bpl21}</td>
          </tr>
        </span>

        <span className="leftside" style={{ margin: "50px" }} />

        <span className="leftside">
          <h5>R High</h5>
          <tr>
            <td>R0 : </td>
            <td>{rh0}</td>
          </tr>

          <tr>
            <td>R1</td>
            <td>{rh1}</td>
          </tr>
          <tr>
            <td>R2</td>
            <td>{rh2}</td>
          </tr>
          <tr>
            <td>R3</td>
            <td>{rh3}</td>
          </tr>

          <tr>
            <td>R4</td>
            <td>{rh4}</td>
          </tr>
          <tr>
            <td>R5</td>
            <td>{rh5}</td>
          </tr>
          <tr>
            <td>R6</td>
            <td>{rh6}</td>
          </tr>
          <tr>
            <td>R7</td>
            <td>{rh7}</td>
          </tr>
          <tr>
            <td>R8</td>
            <td>{rh8}</td>
          </tr>

          <tr>
            <td>R9</td>
            <td>{rh9}</td>
          </tr>
          <tr>
            <td>R10</td>
            <td>{rh10}</td>
          </tr>
          <tr>
            <td>R11</td>
            <td>{rh11}</td>
          </tr>
          <tr>
            <td>R12</td>
            <td>{rh12}</td>
          </tr>
          <tr>
            <td>R13</td>
            <td>{rh13}</td>
          </tr>
          <tr>
            <td>R14</td>
            <td>{rh14}</td>
          </tr>
          <tr>
            <td>R15</td>
            <td>{rh15}</td>
          </tr>
          <tr>
            <td>R16</td>
            <td>{rh16}</td>
          </tr>
          <tr>
            <td>R17</td>
            <td>{rh17}</td>
          </tr>
          <tr>
            <td>R18</td>
            <td>{rh18}</td>
          </tr>
          <tr>
            <td>R19</td>
            <td>{rh19}</td>
          </tr>
          <tr>
            <td>R20</td>
            <td>{rh20}</td>
          </tr>
          <tr>
            <td>R21</td>
            <td>{rh21}</td>
          </tr>
        </span>
        <span className="leftside" style={{ margin: "50px" }} />

        <span className="leftside">
          <h5>Q High</h5>
          <tr>
            <td>Q0 : </td>
            <td>{qh0}</td>
          </tr>

          <tr>
            <td>Q1</td>
            <td>{qh1}</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td>{qh2}</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td>{qh3}</td>
          </tr>

          <tr>
            <td>Q4</td>
            <td>{qh4}</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td>{qh5}</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td>{qh6}</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td>{qh7}</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td>{qh8}</td>
          </tr>

          <tr>
            <td>Q9</td>
            <td>{qh9}</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td>{qh10}</td>
          </tr>
          <tr>
            <td>Q11</td>
            <td>{qh11}</td>
          </tr>
          <tr>
            <td>Q12</td>
            <td>{qh12}</td>
          </tr>
          <tr>
            <td>Q13</td>
            <td>{qh13}</td>
          </tr>
          <tr>
            <td>Q14</td>
            <td>{qh14}</td>
          </tr>
          <tr>
            <td>Q15</td>
            <td>{qh15}</td>
          </tr>
          <tr>
            <td>Q16</td>
            <td>{qh16}</td>
          </tr>
          <tr>
            <td>Q17</td>
            <td>{qh17}</td>
          </tr>
          <tr>
            <td>Q18</td>
            <td>{qh18}</td>
          </tr>
          <tr>
            <td>Q19</td>
            <td>{qh19}</td>
          </tr>
          <tr>
            <td>Q20</td>
            <td>{qh20}</td>
          </tr>
          <tr>
            <td>Q21</td>
            <td>{qh21}</td>
          </tr>
        </span>

        <span className="leftside" style={{ margin: "50px" }} />

        <span className="leftside">
          <h5>BP High</h5>
          <tr>
            <td>
              Q <sub>0</sub> :
            </td>
            <td>{bph0}</td>
          </tr>

          <tr>
            <td>Q1 : </td>
            <td>{bph1}</td>
          </tr>
          <tr>
            <td>Q2 : </td>
            <td>{bph2}</td>
          </tr>
          <tr>
            <td>Q3 : </td>
            <td>{bph3}</td>
          </tr>

          <tr>
            <td>Q4 : </td>
            <td>{bph4}</td>
          </tr>
          <tr>
            <td>Q5 : </td>
            <td>{bph5}</td>
          </tr>
          <tr>
            <td>Q6 : </td>
            <td>{bph6}</td>
          </tr>
          <tr>
            <td>Q7 : </td>
            <td>{bph7}</td>
          </tr>
          <tr>
            <td>Q8 : </td>
            <td>{bph8}</td>
          </tr>

          <tr>
            <td>Q9 : </td>
            <td>{bph9}</td>
          </tr>
          <tr>
            <td>Q10 : </td>
            <td>{bph10}</td>
          </tr>
          <tr>
            <td>Q11 : </td>
            <td>{bph11}</td>
          </tr>
          <tr>
            <td>Q12 : </td>
            <td>{bph12}</td>
          </tr>
          <tr>
            <td>Q13 : </td>
            <td>{bph13}</td>
          </tr>
          <tr>
            <td>Q14 : </td>
            <td>{bph14}</td>
          </tr>
          <tr>
            <td>Q15 : </td>
            <td>{bph15}</td>
          </tr>
          <tr>
            <td>Q16 : </td>
            <td>{bph16}</td>
          </tr>
          <tr>
            <td>Q17 : </td>
            <td>{bph17}</td>
          </tr>
          <tr>
            <td>Q18 : </td>
            <td>{bph18}</td>
          </tr>
          <tr>
            <td>Q19 : </td>
            <td>{bph19}</td>
          </tr>
          <tr>
            <td>Q20 : </td>
            <td>{bph20}</td>
          </tr>
          <tr>
            <td>Q21 : </td>
            <td>{bph21}</td>
          </tr>
        </span>
      </div>
      <div>
        <Table>
          <tr>
            <th>Q Low(Sec)</th>
            <th>BP Low(Sec)</th>
          </tr>
          <tr>
            <td>{tb1_1}</td>
            <td>{tb2_1}</td>
          </tr>
          <tr>
            <td>{tb1_2}</td>
            <td>{tb2_2}</td>
          </tr>
          <tr>
            <td>{tb1_3}</td>
            <td>{tb2_3}</td>
          </tr>
          <tr>
            <td>{tb1_4}</td>
            <td>{tb2_4}</td>
          </tr>
          <tr>
            <td>{tb1_5}</td>
            <td>{tb2_5}</td>
          </tr>
          <tr>
            <td>{tb1_6}</td>
            <td>{tb2_6}</td>
          </tr>
          <tr>
            <td>{tb1_7}</td>
            <td>{tb2_7}</td>
          </tr>
          <tr>
            <td>{tb1_8}</td>
            <td>{tb2_8}</td>
          </tr>
          <tr>
            <td>{tb1_9}</td>
            <td>{tb2_9}</td>
          </tr>
          <tr>
            <td>{tb1_10}</td>
            <td>{tb2_10}</td>
          </tr>
        </Table>
        <label>
          Input1: <input value={inp1} onChange={(v) => Inp1(v.target.value)} />
        </label>
        How many time Multiply Upside
        <label>
          Input 2 :
          <input
            value={inp2}
            onChange={(v) => {
              Inp2(v.target.value);
            }}
          />
        </label>
        How many time Multiply DownSide
        <br />
        Base : {baseVal}
        <br />
        BaseValIndex : {baseValIndex}
        <br />
        DownLimitBP : {downLimit}
      </div>
      Upper Limit : {upperLimit + " "}
      Lower Limit : {downLimit}
      <br />
      {val1}
      <br />
      <input value={noTimes} onChange={(v) => NoTimes(v.target.value)} />
      <br />
      Last Ans : {lastAns}
      <div></div>
    </div>
  );
};

export default First;
