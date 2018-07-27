import instance from './instance';

export default class Api
{
    static list = async () => await instance.get('/api/news/?_expand=category');
    static item = async (id: number) => await instance.get(`/api/news/${id}?_expand=category`);
}