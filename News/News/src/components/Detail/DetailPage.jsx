import React from 'react';
import { DetailWrap } from '../../styles/StyleSheet';
import Layout from '../co/Layout';
import Detail from './component/Detail';

const DetailPage = () => {
  return (
    <DetailWrap>
      <Layout>
        <Detail />
      </Layout>
    </DetailWrap>
  );
};

export default DetailPage;
