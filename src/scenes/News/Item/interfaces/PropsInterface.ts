import { Store as NewsItemStore } from '~/scenes/News/Item';
import { RouteComponentProps } from 'react-router-dom';

export default interface PropsInterface extends RouteComponentProps<any> {
    NewsItem: NewsItemStore;
}