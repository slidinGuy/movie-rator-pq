import React, { Component } from 'react';
import Category from './Category';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import mockData from '../mockData';

const GetCategories = gql`
  query GetCategories {
    categories {
      id
      name
      movies {
        id
        title
        poster
        year
        country
        claps
      }
    }
  }
`;


class Categories extends Component {
  render() {
    return (
      <Query query={GetCategories} >
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>
          if (error) return <div>Error</div>

          return (<div className="Categories">
            {data.categories.map((category) => <Category key={category.id} category={category} />)}
          </div>)
        }}
      </Query>
    );
  }
}

export default Categories;
