import Home from "../Home";
import MyButton from "../test/mybutton";
import Css1 from "../test/css1";
import Css2 from "../test/css2";
import Css3 from "../test/css3";
import WechatMoments from "../test/WechatMoments";
import CanvasHome from "../test/CanvasHome";
import LoginPage from "../pages/login";
import ProductPage from "../pages/product";
import IndexPractice from "../pages/login/indexPractice";
import ProductPagePractice from "../pages/product/productPagePractice";
import CourseRequest from "../pages/courseRequest";
import Index from "../pages/home";
import ScheduleLogin from "../ScheduleLogin";
import ResetPassword from "../ResetPassword";
import SetAccount from "../SetAccount";
import AccountListPage from "../AccountListPage";


export const routers = [
    {
        element: <MyButton/>,
        path: '/mybutton'
    },
    {
        element: <Css1/>,
        path: '/css1'
    },
    {
        element: <Css2/>,
        path: '/css2'
    },
    {
        element: <Css3/>,
        path: '/css3'
    },
    {
        element: <WechatMoments/>,
        path: '/wechat'
    },
    {
        element: <CanvasHome/>,
        path: '/canvas'
    },
    {
        element: <LoginPage/>,
        path: '/login'
    },
    {
        element: <ProductPage/>,
        path: '/product'
    },
    {
        element: <Home/>,
        path: '/'
    },
    {
        element: <IndexPractice/>,
        path: '/IndexPractice'
    },
    {
        element: <ProductPagePractice/>,
        path: '/ProductPagePractice'
    },
    {
        element: <CourseRequest/>,
        path: '/CourseRequest'
    },
    {
        element: <Index/>,
        path: '/ReminderSchedule'
    },
    {
        element: <ScheduleLogin/>,
        path: '/ScheduleLogin'
    },
    {
        element: <ResetPassword/>,
        path: '/ResetPassword'
    },
    {
        element: <SetAccount/>,
            path: '/SetAccount'
    },
    {
        element: <AccountListPage/>,
        path: '/AccountListPage'
    }

]
