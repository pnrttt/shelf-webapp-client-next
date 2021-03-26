import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthRouteRedux } from '../util/auth';
import { Provider } from 'react-redux';
import store from '../redux/store';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <AuthRouteRedux>
      <Component {...pageProps} />
    </AuthRouteRedux>
  </Provider>
);

export default MyApp;
