export const authenticated = (): boolean => !!localStorage.getItem('auth');

export const authenticate = (login: string, password: string) => {
    if (login === 'Admin' && password === '12345') localStorage.setItem('auth', 'true');
    else throw new Error('Неверный логин или пароль');
}
export const unauthenticate = () => localStorage.removeItem('auth');