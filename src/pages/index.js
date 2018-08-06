/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';

const IndexPage = props =>
  (<div className='container content-container'>
      <div className="row">
        <div className="col-12 text-center">
          <h1>Landing</h1>  
        </div>
      </div>
    </div>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
