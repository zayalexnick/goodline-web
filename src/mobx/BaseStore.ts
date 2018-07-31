import StoreInterface from "./interfaces/StoreInterface";
import { observable } from "mobx";
import PendingEnum from "./enums/PendingEnum";

export default class BaseStore implements StoreInterface {
    @observable pending: PendingEnum = PendingEnum.Clear;
    @observable error: string = '';
}