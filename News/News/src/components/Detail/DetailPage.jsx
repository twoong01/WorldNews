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
          <div style={{ flex: '1', maxWidth: '70%'}}>
            <Detail />
          </div>
          <div style={{ flex: '1', maxWidth: '30%'}}>
            <TopCard />
          </div>
        </div>
      </Layout>
    </DetailWrap>
  );
};

export default DetailPage;
