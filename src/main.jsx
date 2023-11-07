import {createRoot} from 'react-dom/client';
import {AppContainer} from '@containers';

const root = document.getElementById('root');

if (root !== null) {
    createRoot(root).render(<AppContainer />);
}
