import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test render</Button>);
        expect(screen.getByText('Test render')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test clear theme</Button>);
        expect(screen.getByText('Test clear theme')).toHaveClass('clear');
        screen.debug();
    });
});
