import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PendingEnum from '~/mobx/enums/PendingEnum';
import { Container as LoaderContainer } from '~/components/Loader';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import { Title, Content, Container } from './styles';
import { RouteComponentProps } from 'react-router-dom';
import NewsItemStore from './store/NewsItemStore';

interface PropsInterface extends RouteComponentProps<any> {
    NewsItem: NewsItemStore;
}

interface StateInterface {

}

@inject('NewsItem')
@observer
export default class NewsItemScene extends React.Component<PropsInterface, StateInterface>
{
    componentDidMount()
    {
        this.getItem();
    }
    
    getItem()
    {
        const { NewsItem, match } = this.props;

        NewsItem.request(match.params.id);
    }

    render(): JSX.Element
    {
        const { pending, item } = this.props.NewsItem;

        return (
            <div>
                <LoaderContainer loading={pending !== PendingEnum.Loaded}>
                    <Container>
                        <Title background={item.image as string}>
                            <span>{ item.title }</span>
                        </Title>
                        <ResponsiveContainer>
                            <Content dangerouslySetInnerHTML={{ __html: item.content }} />
                        </ResponsiveContainer>
                    </Container>
                </LoaderContainer>
            </div>
        );
    }
}