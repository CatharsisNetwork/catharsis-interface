import React from 'react';
import './assets/styles/global.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/global/Header/Header';
import Footer from './components/global/Footer/Footer';
import usePageRender from './hooks/useRederPage';
import ProfileUser from './components/content/user/ProfileUser';

function App() {
	return (
		<div className={'main'}>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={usePageRender} />
					<Route exact path="/:page" component={usePageRender} />
					<Route exact path="/:page/:slug" component={usePageRender} />
					<Route exact path="/account">
						<ProfileUser slug={1} />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
