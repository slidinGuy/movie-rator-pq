import React, { Component } from 'react';
import { Image, Card } from 'semantic-ui-react';
import { Mutation } from 'react-apollo';

import GetCategories from '../graphql/categories.graphql';
import AddClap from '../graphql/addClap.graphql';

class MoviePoster extends Component {
  render() {
    const { poster, title, claps } = this.props.movie;
    return (
      <div className="MoviePoster">
        <Card>
          <Image width={150} height={223} src={poster} />
          <Card.Content className="MoviePoster__title" >
            <Card.Header>{title}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Mutation
              mutation={AddClap}
              variables={{ movieId: this.props.movie.id }}
            >{(addClap) =>
              <a onClick={addClap}>
                <span role="img" aria-label="Clap emoji">👏</span>
                {' ' + claps} claps
            </a>}
            </Mutation>
          </Card.Content>
        </Card>

      </div>
    );
  }
}

export default MoviePoster;
