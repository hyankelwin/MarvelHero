import React, { Component } from 'react';
import {
  Container, Tab, Tabs, TabHeading, Icon,
} from 'native-base';
import { Header } from 'common/components';
import * as Navigator from 'services/navigator';
import { BASE_COLOR } from 'style/colors';
import {
  ImageContent, Line, Description, OptionHero, TabItem,
} from '../components';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      title: [this.props.details.name || 'Hero', 'Comics', 'Events', 'Series', 'Stories'],
    };
  }

  render() {
    const { details, onPressItem, favorites } = this.props;
    const { title, tab } = this.state;
    return (
      <Container>
        <Header
          title={title[tab]}
          leftIcon="arrow-left"
          onPressLeft={() => Navigator.back()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />
        <Tabs
          tabBarPosition="bottom"
          tabBarBackgroundColor="red"
          onChangeTab={index => this.setState({ tab: index.i })}
          page={tab}
        >
          <Tab heading={<TabHeading><Icon name="account-outline" /></TabHeading>}>
            <ImageContent
              image={details.thumbnail}
            />
            <Line
              name={details.name}
              itemDetails={details}
              favorites={favorites}
              onPress={() => onPressItem(details)}
            />
            <Description
              title={details.description}
            />
            <OptionHero
              name="Comics"
              quantity={details.comics.available}
            />
            <OptionHero
              name="Events"
              quantity={details.events.available}
            />
            <OptionHero
              name="Series"
              quantity={details.series.available}
            />
            <OptionHero
              name="Stories"
              quantity={details.stories.available}
            />
          </Tab>

          <Tab heading={<TabHeading><Icon name="thought-bubble-outline" /></TabHeading>}>
            <TabItem
              items={details.comics.items}
              icon="thought-bubble-outline"
              favorites={favorites}
              itemDetails={details}
            />
          </Tab>
          <Tab heading={<TabHeading><Icon name="calendar" /></TabHeading>}>
            <TabItem
              items={details.events.items}
              icon="calendar"
              favorites={favorites}
              itemDetails={details}
            />
          </Tab>
          <Tab heading={<TabHeading><Icon name="box-shadow" /></TabHeading>}>
            <TabItem
              items={details.series.items}
              icon="box-shadow"
              favorites={favorites}
              itemDetails={details}
            />
          </Tab>
          <Tab heading={<TabHeading><Icon name="book-open-page-variant" /></TabHeading>}>
            <TabItem
              items={details.stories.items}
              icon="book-open-page-variant"
              favorites={favorites}
              itemDetails={details}
            />
          </Tab>
        </Tabs>

      </Container>
    );
  }
}

export default DetailScreen;
