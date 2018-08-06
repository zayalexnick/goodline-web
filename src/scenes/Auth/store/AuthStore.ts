import { observable, action } from 'mobx';
import { Authentication } from '~/utils/Authorization';
import BaseStore from '~/mobx/BaseStore';
import PendingEnum from '~/mobx/enums/PendingEnum';

export default class AuthStore extends BaseStore
{
    @observable pending: PendingEnum = PendingEnum.Clear;
    @observable error: string;
    @observable authorized: boolean = Authentication.authenticated();

    @action
    signin(login: string, password: string)
    {
        try
        {
            this.pending = PendingEnum.Loading;
            Authentication.authenticate(login, password);
            this.authorized = true;
            this.pending = PendingEnum.Loaded;
        }
        catch(e)
        {
            this.error = e.message as string;
            this.pending = PendingEnum.Failed;
        }
    }
    
    @action
    logout()
    {
        try
        {
            this.pending = PendingEnum.Loading;
            Authentication.unauthenticate();
            this.authorized = false;
            this.pending = PendingEnum.Loaded;
        }
        catch(e)
        {
            this.error = e.message as string;
            this.pending = PendingEnum.Failed;
        }        
    }
}