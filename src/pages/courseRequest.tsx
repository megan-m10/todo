import React, {useEffect} from "react";
import {Col, Input, Row} from "antd";
import {Courselist} from "../api/courseList";

const CourseRequest = () => {

    const [courseList,setCourseList] = React.useState<any[]>([]);

    const [loading, setLoading] = React.useState(true);

    const [request, setRequest] = React.useState('');

    useEffect(() => {
        if (request.trim() === '') {
            setCourseList([]); // Clear courses if no search term
        }

        setLoading(true);
        Courselist(request)
            .then(res => {
                setCourseList(res);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setCourseList([]);
            });
    }, [request]);

    return (
        <div>
            <Input.Search
                placeholder={"Search for a course"}
                enterButton
                onSearch={value => {
                    setRequest(value);  // Update the search request
                }}
            />

            <Row gutter={[24, 24]}>
                {courseList.map((item:any)=>{
                return (
                    <Col span={12}>
                        <div>
                            <div>{item.name}</div>
                            <div>Short desciption: {item.desc}</div>
                            <div>Taught by：{item.teacher}</div>
                        </div>

                    </Col>
                )
            })}

            </Row>


        </div>


    );
}
export default CourseRequest;
