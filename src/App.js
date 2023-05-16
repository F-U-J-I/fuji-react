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
import UserSettingPage from "./main/user/setting/changing_profile/UserSettingChangingProfilePage";
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
import TeachingPage from "./main/teaching/TeachingPage";
import {CourseWrapper} from "./main/course/core/wrapper/CourseWrapper";
import {CourseWrapperContext} from "./main/course/core/wrapper/core/context/CourseWrapperContext";
import {OtherCreateCourseWrapper} from "./main/course/creating/other/core/wrapper/OtherCreateCourseWrapper";
import {CreateCourseWrapper} from "./main/course/creating/core/wrapper/CreateCourseWrapper";
import {CreateCourseWrapperContext} from "./main/course/creating/core/wrapper/core/context/CreateCourseWrapperContext";
import ThemesPage from "./main/course/creating/other/themes/ThemesPage";
import {StepCreateCourseWrapper} from "./main/course/creating/step_detail/core/wrapper/StepCreateCourseWrapper";
import {
    StepCreateCourseWrapperContext
} from "./main/course/creating/step_detail/core/wrapper/core/context/StepCreateCourseWrapperContext";
import LessonsPage from "./main/course/creating/other/lessons/LessonsPage";
import StepDetailPage from "./main/course/creating/step_detail/StepDetailPage";
import {
    OtherCreateCourseWrapperContext
} from "./main/course/creating/other/core/wrapper/core/context/OtherCreateCourseWrapperContext";
import {UserSettingWrapper} from "./main/user/setting/core/wrapper/UserSettingWrapper";
import {UserSettingWrapperContext} from "./main/user/setting/core/wrapper/core/context/UserSettingWrapperContext";
import {LearnCourseWrapper} from "./main/course/learning/core/wrapper/LearnCourseWrapper";
import {LearnCourseWrapperContext} from "./main/course/learning/core/wrapper/core/context/LearnCourseWrapperContext";
import {OtherLearnCourseWrapper} from "./main/course/learning/other/core/wrapper/OtherLearnCourseWrapper";
import {
    OtherLearnCourseWrapperContext
} from "./main/course/learning/other/core/wrapper/core/context/OtherLearnCourseWrapperContext";
import LearnThemesPage from "./main/course/learning/other/themes/LearnThemesPage";
import LearnLessonsPage from "./main/course/learning/other/lessons/LearnLessonsPage";
import StepLearnPage from "./main/course/learning/step_detail/StepLearnPage";
import {StepLearnCourseWrapper} from "./main/course/learning/step_detail/core/wrapper/StepLearnCourseWrapper";
import {
    StepLearnCourseWrapperContext
} from "./main/course/learning/step_detail/core/wrapper/core/context/StepLearnCourseWrapperContext";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Page404/>}/>
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

                    {/* {Преподавание} */}
                    <Route path="/teaching" element={<TeachingPage/>}/>

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

                        {/* НАСТРОЙКИ ПОЛЬЗОВАТЕЛЯ */}
                        <Route element={
                            <UserSettingWrapper UserSettingWrapperContext={UserSettingWrapperContext}>
                                <Outlet />
                            </UserSettingWrapper>
                        }>
                            <Route path="/settings" element={<UserSettingPage/>}/>
                        </Route>

                        <Route path="/users/:path/learn/process/" element={<LearnProcessCollection/>}/>
                        <Route path="/users/:path/learn/complete/" element={<LearnCompleteCollection/>}/>
                    </Route>

                    {/* КУРС */}
                    <Route element={
                        <CourseWrapper CourseWrapperContext={CourseWrapperContext}>
                            <Outlet />
                        </CourseWrapper>
                    }>

                        {/*  ПРОХОЖДЕНИЕ КУРСА  */}
                        <Route element={
                            <LearnCourseWrapper LearnCourseWrapperContext={LearnCourseWrapperContext}>
                                <Outlet />
                            </LearnCourseWrapper>
                        }>
                            <Route element={
                                <OtherLearnCourseWrapper OtherCreateCourseWrapperContext={OtherLearnCourseWrapperContext}>
                                    <Outlet />
                                </OtherLearnCourseWrapper>
                            }>
                                <Route path="/courses/:path/learn/" element={<LearnThemesPage />} />
                                <Route path="/courses/:path/learn/:pathTheme/" element={<LearnLessonsPage />} />
                            </Route>
                            {/*  ШАГИ  */}
                            <Route element={
                                <StepLearnCourseWrapper StepLearnCourseWrapperContext={StepLearnCourseWrapperContext}>
                                    <Outlet />
                                </StepLearnCourseWrapper>
                            }>
                                <Route path="/courses/:path/learn/:pathTheme/:pathLesson/:pathStep/" element={<StepLearnPage />} />
                            </Route>
                        </Route>

                        {/*  СОЗДАНИЕ КУРСА  */}
                        <Route element={
                            <CreateCourseWrapper CreateCourseWrapperContext={CreateCourseWrapperContext}>
                                <Outlet />
                            </CreateCourseWrapper>
                        }>
                            {/*  ТЕМЫ И УРОКИ  */}
                            <Route element={
                                <OtherCreateCourseWrapper OtherCreateCourseWrapperContext={OtherCreateCourseWrapperContext}>
                                    <Outlet />
                                </OtherCreateCourseWrapper>
                            }>
                                <Route path="/courses/:path/create/" element={<ThemesPage />} />
                                <Route path="/courses/:path/create/:pathTheme/" element={<LessonsPage />} />
                            </Route>

                            {/*  ШАГИ  */}
                            <Route element={
                                <StepCreateCourseWrapper StepCreateCourseWrapperContext={StepCreateCourseWrapperContext}>
                                    <Outlet />
                                </StepCreateCourseWrapper>
                            }>
                                <Route path="/courses/:path/create/:pathTheme/:pathLesson/:pathStep/" element={<StepDetailPage />} />
                            </Route>
                        </Route>

                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
