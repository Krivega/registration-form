import React from 'react';
import TextHighlight from 'react-text-highlight';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Autocomplete from 'components/Autocomplete';

export default class AutocompleteProfession extends React.PureComponent {
  renderProffesions(professions) {
    if (professions.length === 0) {
      return null;
    }

    const { onSelectProfession, profession } = this.props;

    return (
      <List>
        {professions.map(({ name }, index) => {
          const onSelect = onSelectProfession.bind(null, name);

          return (
            <ListItem onClick={onSelect} key={index}>
              <TextHighlight highlight={profession} text={name} markTag="b" />
            </ListItem>
          );
        })}
      </List>
    );
  }

  render() {
    const { professionsAutocomplete, isFetching } = this.props;

    if (!isFetching && professionsAutocomplete.length === 0) {
      return null;
    }

    return (
      <Autocomplete loading={isFetching}>
        {this.renderProffesions(professionsAutocomplete)}
      </Autocomplete>
    );
  }
}
