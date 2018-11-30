import React, { Component } from 'react';
import { Table, Header, Label } from 'semantic-ui-react';

class MovieRow extends Component {
  render() {
    console.log(this.props.movie)
    const { title, claps, year, country, category } = this.props.movie;
    return (
      <Table.Row className="MovieRow">
        <Table.Cell><Header>{title}</Header></Table.Cell>
        <Table.Cell>
          <span role="img" aria-label="Clap emoji">👏</span>{' ' + claps}
        </Table.Cell>
        <Table.Cell>{year}</Table.Cell>
        <Table.Cell>{country}</Table.Cell>
        <Table.Cell textAlign='right'>
          <Label color='blue'>{category.name}</Label>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default MovieRow;
