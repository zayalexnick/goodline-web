import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { StateInterface, PropsInterface } from './interfaces';
import PendingEnum from '~/mobx/enums/PendingEnum';
import { Container as LoaderContainer } from '~/components/Loader';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import { Title, Content, Container } from './styles';

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
                <LoaderContainer loading={pending === PendingEnum.Loading}>
                    <Container>
                        <Title background={item.get('image') as string}>
                            <span>{ item.get('title') }</span>
                        </Title>
                        <ResponsiveContainer>
                            <Content dangerouslySetInnerHTML={{ __html: item.get('content') as string }} />
                        </ResponsiveContainer>
                    </Container>
                </LoaderContainer>
            </div>
        );
    }
}