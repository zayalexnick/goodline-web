import { Store as NewsListStore } from '~/scenes/News/List';
import { Store as NewsItemStore } from '~/scenes/News/Item';
import { Store as AuthStore } from '~/scenes/Auth';

export default {
    NewsList: new NewsListStore,
    NewsItem: new NewsItemStore,
    Auth: new AuthStore
}