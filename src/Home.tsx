import React from "react";
import {Space} from "antd";
import {useNavigate} from "react-router";


const Home = () => {

    const navigate = useNavigate();

    const handleCalculator = () => {
        window.open('/#/calculator','_blank');
    }

    const handleTest = () => {
        navigate('/test',{state:{'name':'123'}});
    }

    const handleMyButton = () => {
        navigate('/mybutton');
    }


    const handleCss1 = () => {
        navigate('/css1');
    }

    const handleCss2 = () => {
        navigate('/css2');
    }

    const handleCss3 = () => {
        navigate('/css3');
    }

    const handleWechat = () => {
        navigate('/wechat');
    }

    const handleCanVas = () => {
        navigate('/canvas');
    }

    const handleLogin = () => {
        navigate('/login');
    }
    const handleindexPractice = () => {
        navigate('/indexPractice');
    }
    const handleCourseRequest = () => {
        navigate('/CourseRequest');
    }
    const handleReminderSchedule = () => {
        navigate('/ReminderSchedule');
    }
    const handleScheduleLogin = () => {
        navigate('/ScheduleLogin');
    }
    const handleResetPassword = () => {
        navigate('/ResetPassword');
    }
    const handleSetAccount = () => {
        navigate('/SetAccount');
    }
    const    AccountListPage = () => {
        navigate('/AccountListPage');
    }


    return (
        <Space>
            <a onClick={handleMyButton}>MyButton</a>
            <a onClick={handleCss1}>css1</a>
            <a onClick={handleCss2}>css2</a>
            <a onClick={handleCss3}>css3</a>
            <a onClick={handleWechat}>wechat</a>
            <a onClick={handleCanVas}>canvas</a>
            <a onClick={handleLogin}>login</a>
            <a onClick={handleindexPractice}>indexPractice</a>
            <a onClick={handleCourseRequest}>CourseRequest</a>
            <a onClick={handleScheduleLogin}>ScheduleLogin</a>
            <a onClick={handleReminderSchedule}>ReminderSchedule</a>
            <a onClick={handleResetPassword}>ResetPassword</a>
            <a onClick={handleSetAccount}>SetAccount</a>
            <a onClick={AccountListPage}>AccountListPage</a>

        </Space>
    )
}

export default Home;
