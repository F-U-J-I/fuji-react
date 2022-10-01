import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import './App.css';
import SignInPage from "./auth/signin/SignInPage";
import SignUpPage from "./auth/signup/SignUpPage";
import Catalog from "./main/catalog/Catalog";
import DetailCollection from "./main/detail_collection/DetailCollectionPage";
import {MainPageWrapper} from "./main/core/components/main_page_wrapper/MainPageWrapper";
import {MainPageWrapperContext} from "./main/core/context/Context";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route
                    element={
                        <MainPageWrapper MainPageWrapperContext={MainPageWrapperContext}>
                            <Outlet />
                        </MainPageWrapper>
                    }
                >
                    <Route path="/" element={<Catalog />}/>
                    <Route path="/collections/:path" element={<DetailCollection/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
