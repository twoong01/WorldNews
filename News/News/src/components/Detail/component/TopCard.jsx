import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { TopCardWrap } from '../../../styles/StyleSheet';
import TopCardItem from './TopCardItem';

const TopCard = () => {
  const topArticles = useSelector((state) => state.top.article_list);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const newContentHeight = contentRef.current.clientHeight;
      setContentHeight(newContentHeight);
    }
  }, [topArticles]);

  return (
    <TopCardWrap style={{ height: contentHeight }}>
      <div ref={contentRef}>
        {topArticles.map((value, index) => (
          <TopCardItem key={index} value={value} index={index} />
        ))}
      </div>
    </TopCardWrap>
  );
};

export default TopCard;
