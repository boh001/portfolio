import React, { useCallback, useState } from "react";

import {
  Slider,
  Wrap,
  Frame,
  Content,
  Prev,
  Next,
  Items,
  Theme
} from "./Content.style";
export default ({ top, h, theme, repeat, children }) => {
  console.log("content");

  const [margin, setMargin] = useState(0);
  const prev = useCallback(e => {
    setMargin(margin + 200);
  });

  const next = useCallback(e => {
    setMargin(margin - 200);
  });
  return (
    <Frame>
      <Theme>{theme}</Theme>
      <Slider h={h}>
        <Prev margin={margin} onClick={e => prev(e)} top={top}></Prev>
        <Content first={`${margin}%`}>
          <Items repeat={repeat}>{children}</Items>
        </Content>
        <Next margin={margin} onClick={e => next(e)} top={top}></Next>
      </Slider>
    </Frame>
  );
};
