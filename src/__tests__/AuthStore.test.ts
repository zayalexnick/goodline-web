import { Store as AuthStore } from '~/scenes/Auth';
import PendingEnum from '~/mobx/enums/PendingEnum';

describe('AuthStore test', () => {
    it('Signin test', () => {
        const store = new AuthStore();
    
        store.signin('Aasdf', 'adsf');
        expect(store.pending).toBe(PendingEnum.Failed)
        expect(store.error).toBe('Неверный логин или пароль');
        expect(store.authorized).toBe(false);
        expect(localStorage.getItem('auth')).toBe(null);
    
        store.signin('Admin', '12345');
        expect(store.pending).toBe(PendingEnum.Loaded);
        expect(store.authorized).toBe(true);
        expect(localStorage.getItem('auth')).toBe('true');
    });
    
    it('Logout test', () => {
        const store = new AuthStore();

        store.logout();
        expect(store.authorized).toBe(false);
        expect(localStorage.getItem('auth')).toBe(null);
    });
});