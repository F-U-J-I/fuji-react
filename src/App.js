import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import './App.css';

import SignInPage from "./auth/signin/SignInPage";
import SignUpPage from "./auth/signup/SignUpPage";
import {MainPageWrapper} from "./main/core/wrapper/main_page_wrapper/MainPageWrapper";
import {MainPageWrapperContext} from "./main/core/context/Context";
import Catalog from "./main/catalog/Catalog";
import DetailCollection from "./main/detail_collection/DetailCollectionPage";
import {UserWrapper} from "./main/user/core/wrapper/UserWrapper";
import {UserWrapperContext} from "./main/user/core/wrapper/core/context/UserWrapperContext";
import UserCoursePage from "./main/user/course/UserCoursePage";
import UserCollectionPage from "./main/user/collection/UserCollectionPage";
import UserSettingPage from "./main/user/setting/UserSettingPage";
import LearnProcessCollection from "./main/learn_collection/process/LearnProcessCollection";
import LearnCompleteCollection from "./main/learn_collection/complete/LearnCompleteCollection";
import Page404 from "./error/Page404";
import Learn from "./main/learn/learn/Learn";
import LearnProcess from "./main/learn/process/LearnProcess";
import LearnComplete from "./main/learn/complete/LearnComplete";
import UserLearnPage from "./main/user/learn/UserLearnPage";
import {ArchiveWrapper} from "./main/archive/core/wrapper/ArchiveWrapper";
import {ArchiveWrapperContext} from "./main/archive/core/wrapper/core/context/ArchiveWrapperContext";
import ArchiveCourse from "./main/archive/course/ArchiveCourse";
import ArchiveCollection from "./main/archive/collection/ArchiveCollection";
import SearchAllPage from "./main/search/all/SearchAllPage";
import {SearchWrapperPage} from "./main/search/core/wrapper/SearchWrapperPage";
import {SearchWrapperPageContext} from "./main/search/core/wrapper/core/context/SearchWrapperPageContext";
import SearchCoursePage from "./main/search/courses/SearchCoursePage";
import SearchCollectionPage from "./main/search/collections/SearchCollectionPage";
import SearchUserPage from "./main/search/users/SearchUserPage";
import CoursePage from "./main/course_page/CoursePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Page404/>}/>
                <Route path="/404" element={<Page404/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route element={
                    <MainPageWrapper MainPageWrapperContext={MainPageWrapperContext}>
                        <Outlet/>
                    </MainPageWrapper>
                }>
                    <Route path="/" element={<Catalog/>}/>
                    <Route path="/collections/:path" element={<DetailCollection/>}/>
                    <Route path="/courses/:path/page" element={<CoursePage/>}/>


                    {/* МОЁ ОБУЧЕНИЕ */}
                    <Route path="/learn/" element={<Learn/>}/>
                    <Route path="/learn/process/" element={<LearnProcess/>}/>
                    <Route path="/learn/complete/" element={<LearnComplete/>}/>

                    {/* АРХИВ */}
                    <Route element={
                        <ArchiveWrapper ArchiveWrapperContext={ArchiveWrapperContext}>
                            <Outlet/>
                        </ArchiveWrapper>
                    }>
                        <Route path="/archive/" element={<ArchiveCourse/>}/>
                        <Route path="/archive/collections/" element={<ArchiveCollection/>}/>
                    </Route>

                    {/* ПОИСК */}
                    <Route element={
                        <SearchWrapperPage SearchWrapperPageContext={SearchWrapperPageContext}>
                            <Outlet/>
                        </SearchWrapperPage>
                    }>
                        <Route path="/search/" element={<SearchAllPage/>}/>
                        <Route path="/search/courses/" element={<SearchCoursePage/>}/>
                        <Route path="/search/collections/" element={<SearchCollectionPage />}/>
                        <Route path="/search/users/" element={<SearchUserPage />}/>

                    </Route>

                    {/* СТРАНИЦА ПОЛЬЗОВАТЕЛЯ */}
                    <Route element={
                        <UserWrapper UserWrapperContext={UserWrapperContext}>
                            <Outlet/>
                        </UserWrapper>
                    }>
                        <Route path="/users/:path" element={<UserLearnPage/>}/>
                        <Route path="/users/:path/collections" element={<UserCollectionPage/>}/>
                        <Route path="/users/:path/courses" element={<UserCoursePage/>}/>
                        <Route path="/settings" element={<UserSettingPage/>}/>

                        <Route path="/users/:path/learn/process/" element={<LearnProcessCollection/>}/>
                        <Route path="/users/:path/learn/complete/" element={<LearnCompleteCollection/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
