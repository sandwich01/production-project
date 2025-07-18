import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => new Promise((resolve) => {
    // Фальшивая задержка для тестов
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));