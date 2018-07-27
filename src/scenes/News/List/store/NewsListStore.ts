import { observable, action, computed } from 'mobx';
import { List } from 'immutable';
import { AxiosResponse } from 'axios';

import BaseStore from '~/mobx/BaseStore';
import StoreInterface from '~/mobx/interfaces/StoreInterface';
import PendingEnum from '~/mobx/enums/PendingEnum';
import { NewsItemInterface } from '~/scenes/News/Item/interfaces';

import Api from '~/api';


export default class NewsListStore extends BaseStore implements StoreInterface
{
    @observable pending: PendingEnum = PendingEnum.Clear;
    @observable error: string;
    @observable list: List<NewsItemInterface> = List();

    @action
    async request()
    {
        try
        {
            this.pending = PendingEnum.Loading;

            const response: AxiosResponse = await Api.list();
            
            this.list = List(response.data as NewsItemInterface[]);

            this.pending = PendingEnum.Loaded;

        }
        catch(e)
        {
            this.error = e.message as string;
            this.pending = PendingEnum.Failed;
        }
    }

    @computed
    get news()
    {
        return this.list;
    }
}