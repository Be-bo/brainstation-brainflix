import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './components/Main/Main';
import Upload from "./components/Upload/Upload";


function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={ <Main />}/>
					<Route path="/videos/:videoId" element={<Main />}/>
					<Route path="/upload" element={<Upload />}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
