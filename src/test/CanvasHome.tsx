import React from 'react';
import "./CanvasHome.css"
import {
    ArrowRightOutlined, BorderOutlined,
    CalendarOutlined,
    DashboardOutlined,
    HistoryOutlined, InboxOutlined, MoreOutlined, NotificationOutlined,
    QuestionCircleOutlined, UserOutlined
} from "@ant-design/icons";
import { Avatar} from 'antd';
import { Input } from 'antd';

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const { TextArea } = Input;

const CanvasHome = () => {

    return (
        <div className={"CanvasWhiteBackground"}>
            <div className={"LeftPortion"}>
                <div className={"CanvasSidebar"}>
                    <BorderOutlined className={"sideIconSpaceHolder0"}/>
                    <div className={"CanvasSidebar-listOfIcons"}>
                        <Avatar className={"sideIconAvatar"} shape="circle" icon={<UserOutlined/>} size="large"/>
                        <DashboardOutlined className={"sideIconDashboard"}/>
                        <BorderOutlined className={"sideIconSpaceHolder"}/>
                        <BorderOutlined className={"sideIconSpaceHolder2"}/>
                        <CalendarOutlined className={"sideIconCalendar"}/>
                        <InboxOutlined className={"sideIconInbox"}/>
                        <HistoryOutlined className={"sideIconHistory"}/>
                        <QuestionCircleOutlined className={"sideIconQuestionCircle"}/>
                    </div>
                    <div className={"CanvasSidebar-bottom"}>
                        <ArrowRightOutlined className={"sideIconRightArrow"}/>
                    </div>
                </div>
            </div>


            <div className={"Content"}>
                <div className={"Dashboard"}>
                    <div className={"Dashboard-topPart"}>
                        <div className={"Dashboard-title"}>
                            Dashboard
                        </div>
                        <MoreOutlined className={"Dashboard-dots"}/>
                    </div>

                    <div className={"Dashboard-textbox"}>
                        <TextArea  className={"Textbox"} rows={4} />

                    </div>
                </div>

                <div className={"ContentBottomPortion"}>
                    <div className={"BottomPortionCourses"}>
                        <div className={"Course-box"}>
                            <div className={"Course Course-1"}>
                                <div className={"Course1TopPortion"}>
                                    <div className={"Course1TopSpaceHolder"}></div>
                                    <MoreOutlined className={"Course1Dots"}/>
                                </div>
                                <div className={"Course1WhiteBackground"}>
                                    <div className={"Course1TitleColor"}>
                                        Algebra 2 & Trig(Adv)
                                    </div>
                                    <div className={"Course1Title"}>
                                        Algebra 2 & Trig(Adv)
                                    </div>
                                    <div className={"Course1Timeframe"}>
                                        US 2024-2025(Year)
                                    </div>
                                    <NotificationOutlined className={"Course1Notification"}/>
                                </div>
                            </div>

                        </div>
                        <div className={"Course-box"}>
                            <div className={"Course Course-2"}>
                                <div className={"Course1TopPortion"}>
                                    <div className={"Course1TopSpaceHolder"}></div>
                                    <MoreOutlined className={"Course1Dots"}/>
                                </div>
                                <div className={"Course1WhiteBackground"}>
                                    <div className={"Course1TitleColor"}>
                                        Biology 2 - Ecology(Adv)
                                    </div>
                                    <div className={"Course1Title"}>
                                        Biology 2 - Ecology(Adv)
                                    </div>
                                    <div className={"Course1Timeframe"}>
                                        US 2024-2025(2nd Semester)
                                    </div>
                                    <NotificationOutlined className={"Course1Notification"}/>
                                </div>
                            </div>
                        </div>
                        <div className={"Course-box"}>
                            <div className={"Course Course-3"}>
                                <div className={"Course1TopPortion"}>
                                    <div className={"Course1TopSpaceHolder"}></div>
                                    <MoreOutlined className={"Course1Dots"}/>
                                </div>
                                <div className={"Course1WhiteBackground"}>
                                    <div className={"Course1TitleColor"}>
                                        Health and Life Skills
                                    </div>
                                    <div className={"Course1Title"}>
                                        Health and Life Skills
                                    </div>
                                    <div className={"Course1Timeframe"}>
                                        US 2024-2025(Year)
                                    </div>
                                    <NotificationOutlined className={"Course1Notification"}/>
                                </div>
                            </div>
                        </div>

                        <div className={"Course-box"}>
                            <div className={"Course Course-4"}>
                                <div className={"Course1TopPortion"}>
                                    <div className={"Course1TopSpaceHolder"}></div>
                                    <MoreOutlined className={"Course1Dots"}/>
                                </div>
                                <div className={"Course1WhiteBackground"}>
                                    <div className={"Course1TitleColor"}>
                                        Intro to Studio Art:3-D
                                    </div>
                                    <div className={"Course1Title"}>
                                        Intro to Studio Art:3-D
                                    </div>
                                    <div className={"Course1Timeframe"}>
                                        US 2024-2025(2nd Semester)
                                    </div>
                                    <NotificationOutlined className={"Course1Notification"}/>
                                </div>
                            </div>
                        </div>

                        <div className={"Course-box"}>
                            <div className={"Course5"}>
                                <div className={"Course5TopPortion"}>
                                    <div className={"Course5TopSpaceHolder"}></div>
                                    <MoreOutlined className={"Course5Dots"}/>
                                </div>
                                <div className={"Course5WhiteBackground"}>
                                    <div className={"Course5TitleColor"}>
                                        Peace & Justice
                                    </div>
                                    <div className={"Course5Title"}>
                                        Peace & Justice
                                    </div>
                                    <div className={"Course5Timeframe"}>
                                        US 2024-2025(Year)
                                    </div>
                                    <NotificationOutlined className={"Course5Notification"}/>
                                </div>
                            </div>
                        </div>
                        <div className={"Course-box"}>
                            <div className={"Course6"}>
                                <div className={"Course6TopPortion"}>
                                    <div className={"Course6TopSpaceHolder"}></div>
                                    <MoreOutlined className={"Course6Dots"}/>
                                </div>
                                <div className={"Course6WhiteBackground"}>
                                    <div className={"Course6TitleColor"}>
                                        Perspectives in Literature
                                    </div>
                                    <div className={"Course6Title"}>
                                        Perspectives in Literature
                                    </div>
                                    <div className={"Course6Timeframe"}>
                                        US 2024-2025(Year)
                                    </div>
                                    <NotificationOutlined className={"Course6Notification"}/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={"BottomPortionSpaceHolder"}>
                    </div>

                </div>



            </div>
        </div>

    )
}

export default CanvasHome;
