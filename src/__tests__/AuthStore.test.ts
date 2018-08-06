import { Store as AuthStore } from '~/scenes/Auth';
import PendingEnum from '~/mobx/enums/PendingEnum';

describe('AuthStore test', () => {
    let store: AuthStore;

    beforeEach(() => {
        store = new AuthStore;
    })

    it('Signin test', () => {    
        store.signin('Aasdf', 'adsf');
        expect(store.pending).toBe(PendingEnum.Failed)
        expect(store.error).toBe('Неверный логин или пароль');
        expect(store.authorized).toBeFalsy()
        expect(localStorage.getItem('auth')).toBeNull();
    
        store.signin('Admin', '12345');
        expect(store.pending).toBe(PendingEnum.Loaded);
        expect(store.authorized).toBeTruthy();
        expect(localStorage.getItem('auth')).toBeTruthy();
    });
    
    it('Logout test', () => {
        store.logout();
        expect(store.authorized).toBeFalsy();
        expect(localStorage.getItem('auth')).toBeNull();
    });
});