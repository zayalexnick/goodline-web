import { observable, action, runInAction } from 'mobx';

import BaseStore from '~/mobx/BaseStore';
import PendingEnum from '~/mobx/enums/PendingEnum';
import NewsItemInterface from '~/scenes/News/interfaces/NewsItemInterface';
import { AxiosResponse } from 'axios';
import Api from '~/api';

const initialItem: NewsItemInterface = {
    id: 0,
    title: '',
    description: '',
    content: '',
    image: '',
    categoryId: 0,
    category: {
        id: 0,
        category: ''
    }
}

export default class NewsItemStore extends BaseStore
{
    @observable item: NewsItemInterface = initialItem;

    @action
    async request(id: number)
    {
        try
        {
            runInAction(() => this.pending = PendingEnum.Loading);

            const response: AxiosResponse = await Api.item(id);
            
            runInAction(() => {
                this.item = response.data as NewsItemInterface;
                this.pending = PendingEnum.Loaded;
            });
        }
        catch(e)
        {
            runInAction(() => {
                this.error = e.message as string;
                this.pending = PendingEnum.Failed;
            });            
        }
    }
}