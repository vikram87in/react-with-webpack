import { render } from 'react-dom';
import App from './components/App';
import './css/styles.scss';

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept(); // to enable fast-refresh on this file
}