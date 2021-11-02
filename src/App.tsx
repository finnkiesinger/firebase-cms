import { Switch, Route } from 'react-router-dom';
import LinkScreen from './screens/link-screen';
import MainApp from './screens/main-app';

function App() {
  return (
	<Switch>
		<Route path="/link" component={LinkScreen} />
		<Route path="/" component={MainApp} />
	</Switch>
  );
}

export default App;
