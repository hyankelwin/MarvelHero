import React, { Component } from 'react';
import { omit } from 'ramda';
import {
  Header as NBHeader,
  Left,
  Button,
  Body,
  Right,
  Title,
  Subtitle,
  Icon,
} from 'native-base';
import connectStyle from 'utils/connectStyle';
import clearStyle from 'utils/clearStyle';
import { If } from 'common/components';
import styles from './styles';

const onlyHeaderProps = omit(['onPressLeft', 'onPressRight', 'leftIcon', 'rightIcon']);

class Header extends Component {
  render() {
    const {
      bgColor,
      barColor,
      style,
      props,
      noLeft,
      leftIcon,
      onPressLeft,
      onPressTitle,
      title,
      subtitle,
      onPressRight,
      rightIcon,
      renderRight,
    } = this.props;
    return (
      <NBHeader
        androidStatusBarColor={bgColor}
        iosBarStyle={barColor}
        style={clearStyle(style)}
        {...onlyHeaderProps(props)}
      >
        <If condition={!noLeft}>
          {() => (
            <Left>
              {onPressLeft && leftIcon && (
                <Icon onPress={onPressLeft} name={leftIcon} />
              )}
            </Left>
          )}
        </If>
        <Body>
          {onPressTitle
            ? (
              <Button onPress={onPressTitle} transparent>
                <Title>{title}</Title>
              </Button>
            )
            : <Title>{title}</Title>
          }
          {subtitle ? (
            <Subtitle numberOfLines={1}>{subtitle}</Subtitle>
          ) : null}
        </Body>
        {(onPressRight && rightIcon) || renderRight ? (
          <Right>
            {renderRight ? (
              renderRight()
            ) : (
              <Button onPress={onPressRight} transparent>
                <Icon name={rightIcon} />
              </Button>
            )}
          </Right>
        ) : (
          <Right />
        )}
      </NBHeader>
    );
  }
}

const StyledHeader = connectStyle('marvel.Header', styles, Header);

export default StyledHeader;
