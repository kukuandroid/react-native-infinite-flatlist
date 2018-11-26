# InfiniteFlatList

<h1 align="center" style="border-bottom: none;">react-native-infinite-flatlist</h1>

<h3 align="center">InfiniteFlatList is a React Native flat list that provides defaults for the header and footer of the list and callbacks
                   for fetching and refreshing the list.</h3>
<p align="center">
  <a href="https://travis-ci.com/foundcareers/react-native-infinite-flatlist">
    <img alt="Travis" src="https://img.shields.io/travis/semantic-release/semantic-release/caribou.svg">
  </a>
  <a href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
  <a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@foundcareers/react-native-infinite-flatlist">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/@foundcareers/react-native-infinite-flatlist/latest.svg">
  </a>
  <a href="https://www.npmjs.com/package/@foundcareers/react-native-infinite-flatlist">
    <img alt="npm next version" src="https://img.shields.io/npm/v/@foundcareers/react-native-infinite-flatlist/next.svg">
  </a>
</p>


## Installation

```sh
npm install --save @foundcareers/react-native-infinite-flatlist
```

## Usage


```js
import InfiniteFlatList from 'react-native-infinite-flatlist';


class Items extends React.Component {
    ...
    render() {
        ...
        return (
            <InfiniteFlatList
              data={items}
              renderItem={this._renderItem}
              loading={loading}
              refreshing={refreshing}
              onRefresh={this._refreshPage}
              onEndReached={this._fetchNextPage}
              emptyText="No Items"
            />
        );
    }
}
```

## Props

| Name  | Type | Default | Description |
|---|---|---|---|
|data|Array|[ ]|An array of data to display.|
|renderItem|Function|noop|A function that takes an item from data and renders it into the list.|
|loading|Boolean|false|Set this true while waiting for new data from a page request.|
|refreshing|Boolean|false|Set this true while waiting for new data from a refresh.|
|onRefresh|Function|noop|A function that is called on Pull to Refresh.|
|onEndReached|Function|noop|A function that is called when the end of the list is reached.|
|onEndReachedThreshold|Number|0.75|How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback.|
|emptyText|String|No data|When there is no data this is displayed.|
|keyExtractor|Function|`(obj) => obj.id`|Used to extract a unique key for a given item at the specified index.|
|removeClippedSubviews|Boolean|false|This may improve scroll performance for large lists.|

## Caveats
The initial data size must be large enough to reach the bottom of the screen, otherwise scroll events won't trigger.
