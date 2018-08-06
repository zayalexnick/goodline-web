import * as Authentification from '~/utils/Authorization/Authentication';

it('login & logout', () => {
    localStorage.removeItem('auth');
    
    expect(Authentification.authenticated()).toBeFalsy();
    expect(() => { Authentification.authenticate('sfdge', '142d') }).toThrow(Error);
    expect(Authentification.authenticate('Admin', '12345')).toBeUndefined();
    expect(Authentification.authenticated()).toBeTruthy()
    expect(Authentification.unauthenticate()).toBeUndefined();
    expect(Authentification.authenticated()).toBeFalsy();
});