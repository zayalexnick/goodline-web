import instance from '~/api/instance';
import mockAdapter from 'axios-mock-adapter';
import { Store as NewsItemStore } from '~/scenes/News/Item';
import PendingEnum from '~/mobx/enums/PendingEnum';

const response = {
    id: 1,
    title: 'Тестовый',
    description: 'Описание',
    content: 'Контент',
    image: 'Изображение',
    categoryId: 1,
    category: {
        id: 1,
        category: 'Категория'
    }
};

const mock = new mockAdapter(instance);
mock.onGet('/api/news/1?_expand=category').reply(200, response)


describe('NewsListStore tests', () => {
    it('Signin test', async () => {
        const store = new NewsItemStore();
    
        await store.request(1);
        expect(store.pending).toBe(PendingEnum.Loaded);
        expect(store.item).toEqual(response);
    });
})