import React from 'react';
import { DetailWrap } from '../../styles/StyleSheet';
import Layout from '../co/Layout';
import Detail from './component/Detail';
import TopCard from './component/TopCard';

const DetailPage = () => {
  return (
    <DetailWrap>
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <Detail />
          <TopCard />
        </div>
      </Layout>
    </DetailWrap>
  );
};

export default DetailPage;
