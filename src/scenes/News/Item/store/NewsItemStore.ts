import { observable, action, computed } from 'mobx';
import { Map } from 'immutable';

import BaseStore from '~/mobx/BaseStore';
import StoreInterface from '~/mobx/interfaces/StoreInterface';
import PendingEnum from '~/mobx/enums/PendingEnum';
import { NewsItemInterface } from '../interfaces';
import { AxiosResponse } from 'axios';
import Api from '~/api';


export default class NewsItemStore extends BaseStore implements StoreInterface
{
    @observable pending: PendingEnum = PendingEnum.Clear;
    @observable error: string;
    @observable item: Map<string, {}> = Map();

    @action
    async request(id: number)
    {
        try
        {
            this.pending = PendingEnum.Loading;

            const response: AxiosResponse = await Api.item(id);
            
            this.item = Map(response.data as NewsItemInterface);

            this.pending = PendingEnum.Loaded;

        }
        catch(e)
        {
            this.error = e.message as string;
            this.pending = PendingEnum.Failed;
        }
    }
}