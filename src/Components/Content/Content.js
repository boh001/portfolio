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
export default ({ mt, theme, repeat, children }) => {
  const [margin, setMargin] = useState(0);
  const prev = useCallback(e => {
    setMargin(margin + 200);
  });

  const next = useCallback(e => {
    setMargin(margin - 200);
  });
  return (
    <Wrap mt={mt}>
      <Frame>
        <Theme>{theme}</Theme>
        <Slider>
          <Prev margin={margin} onClick={e => prev(e)}></Prev>
          <Content first={`${margin}%`}>
            <Items repeat={repeat}>{children}</Items>
          </Content>
          <Next margin={margin} onClick={e => next(e)}></Next>
        </Slider>
      </Frame>
    </Wrap>
  );
};
