import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { map } from 'lodash';
import { PropsInterface, StateInterface } from './interfaces';
import { NewsItemInterface } from '~/scenes/News/Item/interfaces'
import { Item, Image, Category, Title, Description, Container } from './styles';
import PendingEnum from '~/mobx/enums/PendingEnum';
import { Container as LoaderContainer } from '~/components/Loader';
import ResponsiveContainer from '~/components/ResponsiveContainer';

const NewsItem: React.SFC<NewsItemInterface> = ({ id, title, image, category, description }) => (
    <Item to={`/news/${id}`}>
        <Image src={image} alt={title} />
        {<Category>{category.category}</Category>}
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Item>
);

@inject('NewsList')
@observer
export default class NewsListScene extends React.Component<PropsInterface, StateInterface>
{
    componentDidMount()
    {
        this.getNews();
    }
    
    getNews()
    {
        this.props.NewsList.request();
    }

    render(): JSX.Element
    {
        const { list, pending } = this.props.NewsList;

        return (
            <div>
                <LoaderContainer loading={pending === PendingEnum.Loading}>
                    <ResponsiveContainer>
                        <Container>
                            { list.map((item: NewsItemInterface, index: number) => <NewsItem key={index} { ...item } />) }
                        </Container>
                    </ResponsiveContainer>
                </LoaderContainer>
            </div>
        );
    }
}