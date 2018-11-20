import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {FlatList, View} from 'react-native';

import ListEmpty from './src/ListEmpty';
import ListFooter from './src/ListFooter';
import LoadingIndicator from './src/LoadingIndicator';

class InfiniteFlatList extends Component {
  componentDidMount() {
    this.props.onRefresh();
  };

  render() {
    const {
      data,
      loading,
      refreshing,
      onRefresh,
      onEndReached,
      emptyText,
      renderItem,
      keyExtractor,
      removeClippedSubviews
    } = this.props;

    if (!data.length && loading) {
      return <LoadingIndicator />;
    }

    const emptyListText = (loading || refreshing) ? 'Loading...' : emptyText;

    return (
      <FlatList data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                refreshing={refreshing}
                onRefresh={onRefresh}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.75}
                removeClippedSubviews={removeClippedSubviews}
                ListEmptyComponent={<ListEmpty text={emptyListText} />}
                ListFooterComponent={<ListFooter loading={loading} />}
    />
  );
  }
}

InfiniteFlatList.propTypes = {
  /**
   * The items to display - default: []
   */
  data: PropTypes.array,
  /**
   * Loading flag (initial load and paging) - default: false
   */
  loading: PropTypes.bool,
  /**
   * Refreshing flag (pull-to-refresh) - default: false
   */
  refreshing: PropTypes.bool,
  /**
   * Text to display when no items - default: 'No data'
   */
  emptyText: PropTypes.string,
  /**
   * The render item function - default: noop
   */
  renderItem: PropTypes.func,
  /**
   * The fetch action to dispatch paging requests - default: noop
   */
  onEndReached: PropTypes.func,
  /**
   * The fetch action to dispatch initial load and pull to refresh - default: noop
   */
  onRefresh: PropTypes.func,
  /**
   * The resource key extractor - default: object id
   */
  keyExtractor: PropTypes.func,
  /**
   * removeClippedSubviews - default: false
   */
  removeClippedSubviews: PropTypes.bool
};

InfiniteFlatList.defaultProps = {
  data: [],
  loading: false,
  refreshing: false,
  emptyText: 'No data',
  renderItem: () => {},
  onEndReached: () => {},
  onRefresh: () => {},
  keyExtractor: resource => resource.id,
  removeClippedSubviews: false
};

export default InfiniteFlatList;