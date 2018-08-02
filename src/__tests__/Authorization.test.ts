import * as Authentification from '~/utils/Authorization/Authentication';

it('login & logout', () => {
    localStorage.removeItem('auth');
    
    expect(Authentification.authenticated()).toBe(false);

    expect(() => { Authentification.authenticate('sfdge', '142d') }).toThrow(Error);

    expect(Authentification.authenticate('Admin', '12345')).toBe(undefined);

    expect(Authentification.authenticated()).toBe(true);

    expect(Authentification.unauthenticate()).toBe(undefined);

    expect(Authentification.authenticated()).toBe(false);
});