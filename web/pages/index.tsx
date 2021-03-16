import React from 'react';
import { Layout } from '../components/Layout';

const IndexPage: React.FC<{ config: any }> = ({ config }) => (
  <Layout config={config}>
    <h1>No route set</h1>
    <h2>Setup automatic routes in sanity or custom routes in next.config.js</h2>
  </Layout>
);

export default IndexPage;
