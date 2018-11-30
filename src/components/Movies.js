import React, { Component } from 'react';
import { Header, Table, Loader } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import MovieRow from './MovieRow';

import GetMovies from '../graphql/movies.graphql';
import UpdatedMovie from '../graphql/updatedMovie.graphql';

class Movies extends Component {
  render() {
    return (
      <div className="Movies">
        <Header as='h2'>Top Movies</Header>
        <Query query={GetMovies}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <Loader active />
            if (error) return <div>Error</div>

            subscribeToMore({
              document: UpdatedMovie,
            });

            return (
              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell singleLine>Title</Table.HeaderCell>
                    <Table.HeaderCell>Claps</Table.HeaderCell>
                    <Table.HeaderCell>Year</Table.HeaderCell>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                    <Table.HeaderCell textAlign='right'>Category</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {data.movies.sort((a, b) => b.claps - a.claps).map((movie) => <MovieRow key={movie.id} movie={movie} />)}
                </Table.Body>
              </Table>
            )
          }}
        </Query>
      </div>
    );
  }
}

export default Movies;
