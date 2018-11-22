# InfiniteFlatList

InfiniteFlatList is a React Native flat list that provides some defaults for the header and footer of the list and callbacks
for fetching and refreshing the list.

[![npm package](https://nodei.co/npm/react-native-infinite-flatview.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-infinite-flatview/)

## Installation

```sh
npm install --save react-native-infinite-flatlist
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
              onRefresh={() => refreshFirstPage(fetch)}
              onEndReached={() => fetchNextPage(fetch, nextPage)}
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
