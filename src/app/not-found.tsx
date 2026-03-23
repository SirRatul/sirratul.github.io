import type { Metadata } from 'next';
import NotFoundScreen from './components/NotFoundScreen';

export const metadata: Metadata = {
    title: '404 — Page not found | Samsul Islam',
    description: 'This page could not be found. Return home or browse projects.',
};

export default function NotFound() {
    return <NotFoundScreen variant='global' />;
}
