import { Slot } from 'expo-router';
import { ReduxProvider } from '../hooks/useStore';

export default function Layout() {
    return (
        <ReduxProvider>
            <Slot />
        </ReduxProvider>
    );
}