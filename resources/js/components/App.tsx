import React from "react";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
} from "react-router-dom";

export default function App() {
    const [a, setA] = useState();

    console.log('render');

    return <p>123</p>/*<Router>
        <p>Page</p>
        <Routes>
            <Route
              path={"app"}
              element={<p>main</p>}
            />
            <Route
              path={"/"}
              element={<p>Main page</p>}
            />
        </Routes>
    </Router>*/
}
