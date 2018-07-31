import { observable, action, computed, runInAction } from 'mobx';
import { AxiosResponse } from 'axios';
import BaseStore from '~/mobx/BaseStore';
import PendingEnum from '~/mobx/enums/PendingEnum';
import Api from '~/api';
import NewsItemInterface from '~/scenes/News/interfaces/NewsItemInterface';


export default class NewsListStore extends BaseStore
{
    @observable list: NewsItemInterface[] = [];

    @action
    async request()
    {
        try
        {
            runInAction(() => this.pending = PendingEnum.Loading);

            const response: AxiosResponse = await Api.list();
            
            runInAction(() => {
                this.list = response.data as NewsItemInterface[];
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

    @computed
    get news()
    {
        return this.list;
    }
}