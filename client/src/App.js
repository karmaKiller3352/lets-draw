import {
	BrowserRouter,
	Switch,
	Redirect,
	Route
} from "react-router-dom";
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import { getUniqId } from "./helpers/utils";
import * as UI from './ui';


function App() {
	const id = getUniqId()

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/:id">
					<UI.GlobalStyle />
					<UI.Wrapper>
						<Toolbar />
						<Canvas />
						<Sidebar />

					</UI.Wrapper>
				</Route>
				<Redirect to={id}></Redirect>
			</Switch>
		</BrowserRouter>
	)
}

export default App;
