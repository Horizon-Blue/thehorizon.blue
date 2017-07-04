import React, { Component } from 'react';
import { Col } from 'antd';
import MediaQuery from 'react-responsive';

class Logo extends Component {
    renderTypingContent() {
        return (
            <Col
                style={{
                    bottom: 10,
                    textAlign: 'center',
                    position: 'absolute',
                }}
                sm={7}
                xs={16}
                span={7}
            >
                <div ref={typecontent => (this.typecontent = typecontent)}>
                    <p>
                        我就随便写点什么测试一下不要太在意细节就随便写点什么测试一下不要太在意细节就随便写点什么测试一下不要太在意细节
                    </p>
                    <p>真的，别太在意细节</p>
                    <p>千万别</p>
                </div>
                <span ref={typed => (this.typed = typed)} />
            </Col>
        );
    }

    renderSVG() {
        return (
            <MediaQuery minDeviceWidth={768}>
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 903.5 328"
                >
                    <defs>
                        <linearGradient
                            id="backgroundGrad"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                        >
                            <stop
                                offset="75%"
                                stopColor="#111116"
                                stopOpacity="0"
                            />
                            <stop
                                offset="90%"
                                stopColor="blue"
                                stopOpacity="0.3"
                            />
                            <stop
                                offset="100%"
                                stopColor="#1087FF"
                                stopOpacity="0.5"
                            />

                        </linearGradient>
                    </defs>
                    <g
                        fill="url(#backgroundGrad)"
                        ref={bgSvg => (this.bgSvg = bgSvg)}
                    >
                        <path d="M903,0.5H1l-0.5,327H215c6.7-4.8,11.6-16.4,14.7-23.9c3.7-8.9,6.1-18.1,7.1-27.7c0.2-1.5-0.2-3.1-0.3-4.7
				c-0.3-5.8-0.6-11.7-1-17.5c-0.1-1.5-0.2-3-0.5-4.4c-0.6-2.5,0.9-5.4-1.6-6.4l-4-20c-1.9-4.7-7.9-8.4-10.1-12.9
				c-0.5-1.1-9.4,4-10.2,3.1c0.1-0.2,0.2-0.3,0.4-0.5c-0.5-0.1-0.9-0.1-1-0.1c-0.9-1.8-1.6-3.5-2.5-5.3c-0.9,0.5-1.6,0.9-2.8,1.5
				c0.5-1,0.8-1.7,1.4-3c-1.8,0.9-3.2,1.6-5,2.4l2.1-3.9c-2,0.9-3.7,1.8-5.5,2.6c-0.1-0.1-0.1-0.3-0.2-0.4c0.6-0.7,1.3-1.5,2.2-2.6
				c-1.3,0.3-2.1,0.6-3.3,0.9c0.9-1.1,1.6-1.9,2.7-3.1c-1.9,0.6-3.3,1-5.1,1.6c0.5-0.8,0.8-1.3,1.2-2c-0.7,0.1-1.2,0.1-1.6,0.2
				c0.1-0.2,0.3-0.3,0.4-0.5c-0.9-0.8-1.8-1.7-3.1-2.8l-0.3,3.5l-2.4-0.7c-0.4,0.8-0.9,1.6-1.5,2.6c-1.4-1.3-2.6-2.4-3.9-3.6
				c-0.5,1.8-1.1,3.6-1.6,5.4c-0.3,0-0.3,0-0.6,0.1l-2-3.7l-2.1,5.9c-1.1-1.4-1.6-2.2-2.2-3c-0.8,0.5-1.6,1-2.6,1.6l-0.4-4.1
				c-0.9,0.7-1.5,1.2-2.4,1.9l-0.2-2.8l-2.5,1.6l-0.2-3.6c-0.9,0.7-1.7,1.2-2.7,2l-0.2-2.8c-1.2,0.9-2.2,1.6-3.7,2.7
				c0.5-2.8,1-5.2,1.4-7.6h-3.2l2.8-3.5c-1.4,0.1-2.4,0.1-3.6,0.2c0.3-0.6,0.5-1,0.8-1.5c-2,0.3-3.8,0.7-5.9,1l-0.6-2.4
				c-1.4,1.4-2,3.6-4.6,2.8l-0.2-2.4h-4.3l0.9-4l-2,0.5l1-3c-1.2,0.6-2.1,1.1-3.3,1.6v-2.6l-1.9,0.6l-0.8-4.3l-6.7,5
				c-0.2-0.1-0.1-0.1-0.3-0.2l2.1-5.2c-2.5,1.1-4,3.6-7.5,3.2l2.2-3.7c-0.9-0.4-2.5-0.8-2.6-1.3c-0.1-1,0.8-2,1.2-3
				c-0.9,0.3-2.1,0.6-3.6,1c1.1-2.3,2.1-4.2,3.1-6.3l-3.3-0.2c1.9-1.2,3.2-2.2,4.9-3.3c-1-0.1-1.7-0.2-2.5-0.3
				c0.6-0.5,1-0.8,1.6-1.4c-0.7-0.2-1.3-0.4-1.6-0.5c0.2-1.3,0.4-2.4,0.6-3.5c-0.3-0.1-0.5-0.1-0.8-0.2c-0.8,2.1-1.6,4.2-2.4,6.2
				c-2.9-0.8-2.9-1-0.7-7.4c-1.2,0.6-2.4,1.1-3.9,1.8l0.4-3.4l-2.5,0.9l2.1-4.8c-2.6,1.1-4.2,3.5-7.5,2.8c2.1-1.8,4-3.3,5.8-4.9
				c-0.4-0.5-0.2-0.4-0.6-0.9l-4.4,2.3c1.3-1.5,2.1-2.5,3.2-3.8c-1,0-1.5-0.1-2.3-0.1c0.2-0.6,0.5-1.2,0.8-2.1
				c-1.2,0.5-2.1,0.9-3,1.3c-0.2-0.2-0.2-0.2-0.4-0.4c0.9-1.9,1.8-3.8,2.6-5.7c-0.1,0-0.2-0.1-0.3-0.1c-0.8,1-1.5,2.3-2.6,3
				c-1,0.7-2.3,0.8-3.9,1.2c1.3-2.4,2.3-4.2,3.3-5.9c-0.1-0.1-0.3-0.2-0.4-0.3c-0.6,0.4-1.2,0.7-2.1,1.2c-0.5-3.3,2.2-4.7,3.4-7.1
				c-1.9,0.5-3.7,1-5.5,1.5c-0.2-0.3-0.1-0.3-0.3-0.6c2.1-1.7,4.2-3.3,6.3-5c-0.1-0.1-0.1-0.2-0.2-0.3l-3.5,0.8
				c-0.2-0.3-0.1-0.3-0.3-0.5l3.1-2.9l-2.4-2.5c0.1-0.3,0.1-0.3,0.3-0.6c4.1,0.5,8.3,1.6,10.9-3.2c-1.8,0.5-3.5,0.9-5.3,1.4
				c-0.2-0.3-0.1-0.3-0.3-0.6l4.7-3.8c-3.3,0.8-3.4,0.7-5.3-1.9c2.2-0.7,4.3-1.3,6.6-1.9l-2.8-1.6c0-0.3,0-0.3,0.1-0.7
				c3.1-0.7,6.2-1.4,9.5-2.2c0.1-1.9,2.1,0.4,2.9-0.5c-1.5-4.4-5.4-3.8-9-4.1c0.9-2,2.3-2.8,4.7-2.6c-2.9-1.5-5.4-2.8-7.8-4
				c0.1-0.3,0.1-0.3,0.1-0.7c1-0.1,2.1-0.3,3.3-0.5l-0.8-1.8h5.8l-3.5-2.6c0.1-0.4,0.1-0.4,0.2-0.8l4-0.5l-1.4-3.8l2.8,1.5v-3
				l2.9,2.2c0.2-0.5,0.3-0.9,0.6-1.8c0.5,0.7,0.9,1.1,1.4,1.7l0.9-1.7c-1.8-0.9-3.5-1.8-5.4-2.7c0.7-0.1,1.2-0.2,2.2-0.3
				c-1.5-0.5-2.4-0.9-3.6-1.3c0.7-0.2,1.1-0.4,1.8-0.6c-1.4-0.9-2.7-1.7-4-2.5c1.3-1.3,3.6,1.1,4.4-1.5l2.8,0.7l-1.3-3.8
				c0.9,0.3,1.7,0.6,2.5,0.9c0.1-0.1,0.1-0.2,0.2-0.3c-1.6-1.2-3.1-2.5-5.2-4.1l4.7,1.1c-0.8-1.1-1.3-1.8-1.8-2.5
				c0.1-0.1,0.2-0.2,0.3-0.3c1.3,0.9,2.5,1.9,3.9,2.9l0.7-3.8l3.2,3.3c0.2-2.4-0.2-4.3-1.5-6.1c-0.7-1.1-1.1-2.4-1.7-3.6
				c0.3-0.3,0.3-0.3,0.6-0.6l3.1,1.1l-1-4.5l4,2.1l1-1.2l2,2.2l0.9-3.3l2.5,2.9l1.3-3.6c1.3,0.5,2.5,0.9,3.8,1.4
				c0,0.2-0.1,0.4-0.1,0.6c1-0.2,2-0.3,3.3-0.5l0.6,3.3l2.9-0.5c0.2,1.8,0.4,3.4,0.6,5.3l2.1-1.6l0.4,3.3l2.7-3l0.2,3l1.7-0.9
				c2.9,0.5,5.8,0.9,6.5,4.5c-0.3-2.4,1.4-4.9-1.5-6.6c1.3-0.4,2.3-0.7,3.3-1c0-0.2,0-0.5-0.1-0.7c0.7,0.6,1.3,1.2,2.1,1.9
				c0.5-1.1,0.9-2.1,1.6-3.7l1.3,3.1l2.4-3c0.3,1.4,0.5,2.4,0.8,3.8c0.4-0.9,0.6-1.4,1-2.2c0.4,1.1,0.8,1.9,1.2,2.9l1.8-1.4l0.3,3.4
				c1.2-1.4,2.3-1.2,3.6-0.2c0.9,0.7,1.9,1.2,2.9,1.7c0,0,0.4-0.5,0.6-0.8c-0.9-0.6-1.9-1.2-2.8-1.9c-0.1-0.1-0.2-0.2-0.6-0.8
				c1.6,0.3,2.8,0.6,4.3,0.8c-0.7-1.3-1.3-2.4-2-3.6c0.5,0,0.9-0.1,1.6-0.1c-0.8-1.1-1.5-2-2.5-3.3l4.1,1.7c0.2-0.2,0.1-0.2,0.3-0.4
				l-2.6-3.2l1.4-0.9c-0.5-0.5-1-0.9-1.5-1.4c0.5-0.2,0.9-0.3,1.5-0.6l-4.9-1.7c0-0.3,0-0.2,0.1-0.5l3.3-0.4c0-0.2,0-0.2,0.1-0.4
				l-3.1-1.4l2.6-2.2l-3.4-1.3c3-2.3,5.7-2.2,8.6,0.4c-0.3-1-0.7-2.1-0.9-2.9l5.3,0.4c0.1-0.4,0.1-0.3,0.2-0.7l-4-2.1
				c1-0.2,1.6-0.3,2.6-0.4c-1.2-0.6-2.1-0.9-3.2-1.4c0.8-0.1,1.4-0.1,2.3-0.2c-1.1-1.1-2-1.9-3.3-3.1l4.8,1.2l-1.5-3l2.8,1.3
				l0.6-1.9c0.6,0.5,1.2,1,2,1.7c-0.2-0.9-0.3-1.5-0.4-2.2c0.6,0.3,1.2,0.5,1.9,0.8v-5l2.6,3.7l2-3.7c0.8,1.5,1.3,2.5,1.9,3.7
				c0.3-0.2,0.7-0.5,1.2-0.9c0.1,0.5,0.3,1,0.4,1.6c0.4-0.3,0.7-0.5,0.9-0.7c0.7,0.3,1.4,0.6,2.1,0.9v-2.4l3.8,2.3l0.6-2.7l2.1,1.5
				c0.8-2,1.5-3.9,2.3-5.7c0.6,1,1.3,2.1,2.3,3.5c0.5-1.7,1-3.1,1.4-4.4c0.3,0,0.2,0,0.5,0.1c0.2,1.8,0.3,3.6,0.5,5.8
				c0.8-0.7,1.4-1.2,2.1-1.8c-0.3,1.1-0.5,2-0.8,3.4l3.3-2.3c0.2,0.8,0.4,1.4,0.6,2.1c0.2,0,0.4-0.1,0.6-0.1c-0.1-0.9-0.2-1.8-0.3-3
				l2.7,0.5c-0.5-2-1-4.2-1.5-6.3c0.2-0.2,0.2-0.2,0.5-0.3l2.1,1.6c0.2-0.5,0.3-0.9,0.7-1.8c0.8,1,1.4,1.8,2,2.6
				c0.1-0.1,0.3-0.1,0.4-0.2c-0.1-0.7-0.1-1.5-0.2-2.4c0.4,0.1,0.8,0.1,1.4,0.2c-0.6-0.8-1.1-1.4-2-2.5l3,0.4l2.9-1.8
				c0.1-0.4,0.3-1.2,0.5-2.1c0.1,0,0.3,0,0.4,0c0.3,0.9,0.6,1.8,1.1,3.2c0.7-1.2,1.2-2,1.9-3.2c0.7,1.8,1.1,2.8,1.7,4.6
				c0.5-0.9,0.8-1.5,1.3-2.4c0.2,0.9,0.3,1.3,0.4,1.9l2-1c0,0.8,0,1.6,0,2.3c0.2,0.2,0.4,0.3,0.6,0.5c0.5-0.9,1-1.8,1.5-2.7
				c0.2,0.1,0.3,0.2,0.5,0.4c0,0.6,0,1.2,0,2c1.1-0.7,2.2-1.3,3.7-2.2c-0.4,1.5-0.6,2.5-1,3.7l3.5-0.3l-1.6,2.8l4.8-0.9
				c-0.9,1.2-1.6,2.1-2.4,3.1l3.6-0.2l-1.4,2.8c0.3,0.4,0.7,0.8,1.1,1.3c0.4,0.4,0.7,0.8,1.2,1.3c0.7-1.2,1.4-2.4,2.1-3.6
				c0.3,0.2,0.6,0.3,0.6,0.5c0.6,3,3.9,3.5,5.2,5.9c0.1,0.1,1.2,0,1.4-0.3c0.4-0.5,0.5-1.2,0.8-2c0.2,0.4,0.3,0.6,0.6,1.5
				c0.4-1.6,0.7-2.7,1.1-3.8c0.3-1.2,0.3-3.1,2-2.5c1,0.3,1.4,2.1,2,3.3c0.2,0.3-0.1,0.8-0.2,1.7c1.1-0.5,1.8-0.8,2.8-1.2
				c-0.4,1.4-3.2,2.4-0.6,4c1.1-1.7,2.1-3.4,3.3-5.3c2.9,2.8-0.5,4.2-0.9,6.3l2.7,0.3c-0.7,1.2-1.4,2.2-2,3.2
				c0.2,0.2,0.2,0.2,0.4,0.5c3.8-1.3,7.6-2.6,11.4-3.9c1.7,2.7,4.4,1.8,6.6,1.8c0.7,1.2,1.3,2.3,2.1,3.6c0.8-0.8,1.4-1.2,1.9-1.8
				l1.7,0.6l0.4-3.7c1.6,0,3.1-0.1,4.6,0.1c0.5,0.1,0-1.1,0.6-0.6c0.9-0.3,2-0.7,3.2-1.2l1.3,3.9c1.3,1,2.2,1.7,3.4,2.5
				c0.4-0.5,1.1-1.2,2.2-2.5c0.4,1.8,0.7,3.2,1,4.5c2-1.3,4.1-2.8,6.6-4.5c-0.2,1-0.4,1.7-0.4,2.3c0,0.6-0.2,1.6,0.1,1.7
				c2.1,1,0.9,2.5,0.6,4l1.8,1.1c-1.3,1.1-2.5,2.1-3.7,3.1c0.1,0.1,0.2,0.2,0.2,0.4c0.9-0.4,1.8-0.8,2.7-1.3
				c0.1,0.1,0.3,0.3,0.4,0.4c-1.9,1.6-3.8,3.1-5.7,4.7c0.1,0.3,0.1,0.3,0.2,0.6c3.1-0.2,5.7-1.4,7.8-4.2c0.4,0.8,0.8,1.5,1.1,2.2
				c2.3-1.3,4.5-2.4,7.2-4c-0.4,1.7-0.8,2.9-1.1,4.4h2.7c0.5,1.4,1,2.8,1.6,4.4c1.7-0.5,3.5-1,5.4-1.6c-0.3,1.8-0.4,3.1-0.6,4.6
				c2.8-0.8,5.3-1.5,7.9-2.2c0.2,3.3,1,2.5-3.2,5.5h4.2c-0.1,0.6-0.1,1-0.2,1.6c0.6,0.1,1.4,0.1,1.9,0.4c0.5,0.3,1,1.1,1,1.6
				c0,0.4-0.8,1-1.3,1.2c-1.8,0.5-3.6,0.7-5.9,1.6c0.8,0.5,1.7,0.9,2.8,1.6c-0.8,0.5-1.1,0.6-1.7,1c1.2,1.1,2.4,2,3.5,3
				c-0.7,1.5-2.3-0.2-3.4,1.5c-0.9,1.4-0.6,2.2-0.2,3.2c-1.1,0.8-2,1.5-3,2.2c0.2,0.2,0.3,0.5,0.5,0.7c-2.3,0-4.2,0.4-5,2.9
				c-0.2,0.6-1.3,1-2.1,1.5c3.2,0.9,5.5-0.1,7.8-3.6c0.7,1,1.3,1.9,2,3c0.3-0.1,1.1-0.3,2-0.5c0.2,0.4,0.4,0.8,0.4,0.9
				c2.1-0.2,4-0.4,6.5-0.6c-0.5,1.4-0.8,2.3-1.1,3.4l3.1-0.4c-0.1,1.3-0.2,2.7-0.3,4l4.7,0.6c-1.1,1.4-2,2.5-3,3.8l2.8,0.5
				c-1.4,3.3-4.8,1.1-7.4,2.8c4.6,1.4,8.5-1,12.5-0.7c0.6,2.3-1.9,2.4-2.7,3.9c1.2-0.2,2.2-0.3,3.3-0.5c0.1,0.1,0.1,0.2,0.2,0.4
				c-0.7,0.4-1.3,0.9-2.3,1.6l4.7,0.9c-1.1,0.7-1.7,1.1-2.5,1.7c0.2,0.3,0.5,0.6,0.8,1l-4.6,0.7c0,0.2,0,0.2,0,0.4
				c1.2,0.4,2.3,0.8,3.6,1.3c-2.8,2.4-4.9-0.1-7.2-0.8c-1.7,2.9-1.4,3.3,1.5,3.7c1.2,0.2,2.5,0.7,3.5,1.3c0.5,0.3,0.9,1.4,0.8,2.1
				c-0.1,0.4-1.1,0.7-1.8,0.9c-0.4,0.1-0.9,0-1.3,0.4c1,0.1,2,0.2,3.1,0.4c-0.9,1-0.9,1-4.4,0.7c0.5,0.9,0.9,1.6,1.4,2.6l-2.8,0.6
				l-1,2.1l2.3,0.4c-0.3,0.7-0.5,1.2-0.7,1.7c1.2,0.4,2.4,0.7,3.7,1l-0.7,1.5l6.2,1.4c-0.8,1.1-1.2,1.7-1.6,2.4
				c0.5,0.7,1.1,1.5,1.7,2.5l-2.8,1.5c0.9,0.7,1.8,1.4,3.1,2.4c-2,0.4-3.4,0.7-5,0.9c0.9,3.4,3.5,1.4,5.7,1.6
				c-0.8,1-1.5,1.8-2.1,2.5c2.1,0.2,4.2,0.4,6.8,0.6c-0.8,0.9-1.4,1.5-2,2.2c0.6,0.3,1.1,0.7,1.9,1.2c-0.6,0.4-1.2,0.8-2.1,1.4
				c1.8,0.6,3.4,1,4.8,1.5c-0.7,1.6-1.2,3.1-1.7,4.2c0.8,1.3,1.6,2.4,2.4,3.6c-1,0.7-1.6,1.2-2.4,1.7c1.4,2,2.8,4,4.4,6.3
				c-1.6,0.3-3,0.6-4.5,0.8l-0.3,1.8c-0.8-0.1-1.5-0.2-2.5-0.4c0.4,0.8,0.7,1.4,1,2.2l-2.4,0.4c0.4,0.8,0.8,1.5,1.4,2.5
				c-1-0.6-1.7-0.9-2.7-1.5c0.8,2.1,1.4,3.9,2,5.7c-0.2,0.2-0.2,0.2-0.4,0.4c-2.3-1.2-4.5-2.4-7.1-3.7v2c-0.7-0.2-1.3-0.3-2.3-0.6
				c1,1.5,1.8,2.7,2.6,3.9c-0.2,0-0.5,0.1-0.7,0.1c0.2,1.2,0.4,2.4,0.6,4.1c-0.9-0.7-1.4-1.2-2.1-1.5c-0.8-0.5-1.8-0.7-2.6-1.2
				c-0.8-0.6-1.5-1.3-2.1-1.9c-2.6,0.9-4.4-1-6.8-1.7c-0.2,1.3-0.9,1.8-2.5,0.8c0.1,1,0.2,1.6,0.3,2.3c-1-0.4-1.9-0.7-2.9-1.1
				c-0.2,0.9-0.3,1.5-0.5,2.3c-0.4-0.1-0.8-0.2-1.3-0.3c-0.4,1.1,0.9,3.4-1.5,3.1c-0.8-0.1-1.5-1.9-2.3-3.1
				c-0.4,0.6-0.8,1.4-1.5,1.8c-0.5,0.4-1.4,0.2-2.2,0.3c0.2,0.3,0.5,0.8,0.9,1.6c-1.3-0.4-2.2-0.6-3.2-0.9c-0.1,0.1-0.2,0.2-0.3,0.3
				c0.6,0.6,1.2,1.1,1.8,1.7c0.7,0.6,1.4,1.1,1.9,1.5c-0.8,1.3-1.3,2.2-1.9,3.2c0.1,0.1,0.3,0.3,0.4,0.4c-0.6,0.1-1.2,0.2-1.9,0.3
				c0.2,1,0.3,1.8,0.5,3.1c-1.2-0.5-2-0.9-3.3-1.4c0.5,1.3,0.9,2.3,1.5,3.7l-3.2-1.2c-0.2,0.9-0.3,1.7-0.6,3c-1.1-0.7-2.1-1.3-3.2-2
				c0.3,1,0.5,1.8,0.8,2.7c-0.2,0.1-0.2,0.1-0.4,0.3c-1.3-1.1-2.6-2.1-4.2-3.4c0.2,1.3,0.3,2.3,0.5,3.4c-0.5-0.1-0.8-0.2-1.2-0.3
				c0.1,0.7,0.2,1.3,0.3,1.9c-3.8,1-4.4,0.7-5.2-2.5c-0.6,0.5-1.2,1-2.1,1.6c-0.2-1.4-0.3-2.5-0.4-3.6c-0.1,0-0.3,0-0.4-0.1
				c-0.4,0.7-0.8,1.5-1.2,2.2c-1.1-1-2.2-2.1-3.7-3.5l-0.2,2.9l-2.3-0.8c0.3,1.1,0.6,2.1,1,3.5c-1-0.5-1.7-0.8-2.7-1.3
				c0.4,1.8,0.7,3.4,1.1,5.4c-0.9-0.3-1.4-0.5-1.5-0.6c-1.3,0.5-2.2,1-3.2,1.4c-0.3-1.1-0.6-2.2-1-3.5l-1.8,0.7l-0.4-2.4
				c-1.1,0.7-2,1.3-3.1,2.2l-0.2-3.1l-2.2,0.8c-1.2-1.6-2.5-3.1-3.8-4.8c-0.4,1.1-0.7,2.1-1.2,3.6c-0.7-1.2-1.1-1.9-1.6-2.8
				c-0.2,1.1-0.2,1.9-0.5,2.7c-0.2,0.5-0.5,1.1-1,1.4c-1,0.6-2.1,1.1-3.3,1.6c0,0-0.2-0.4-0.3-0.8c-0.7,0.8-1.4,1.6-2.3,2.6
				c-0.4-1.7-0.7-3-1.1-4.6c-1.2,1.6-2,3.2-4.1,2.1c-0.3-0.2-1.1,0.4-1.6,0.7c-13.7,6.3-19.6,17.3-19.1,32c0.1,3.6,0.5,7.2,0.7,10.7
				c0.4,7.6,0.9,15.2,0.9,22.8c0,6.7,1.9,12.7,5.2,18.5c3.2,5.7,5.8,11.7,8.5,17.8c1.6,3.7,3.8,6.8,6.9,9.2c2.6,2,5.4,3.7,8.2,5.5
				c0.8,0.6,1.7,1.1,3.1,2.1l0.3,0.4l330.5,0.4l-1-0.9c1.6-2.9,3.2-5.8,4.5-8.8c1.9-4.4,3.6-9.3,4-14.2c1.1-12.2,1.5-24.4,2.1-36.6
				c0.9-17.8-7.8-30.6-23.7-35.1c-1-0.3-1.9-0.9-3-1.4c-0.4,1-0.8,2-1.3,3.5c-3.9-2.5-7.5-5-11.4-7.5c-2.4,2.6-4.9,5.7-9.4,5.3
				c-1.3-0.1-2.8,2.4-4.5,4c-0.9-0.3-2.2-0.8-3.5-1.3c0.6-5.4-2.5-8.3-7.3-6.6c-1.6,0.6-3.5,0.7-4.9,1.6c-5,3.1-5.1,3.2-6.9-2.6
				c-3.4,1.7-8.6,0.9-10.1-2.1c-1.5-3.1-7.3-4.4-3.7-9.8c-1.6-1.3-3.2-2.6-5.5-4.4c-0.4,0.9-0.9,2.1-1.6,3.5
				c-7.4-11.2-15.3-6.4-23.1-2.6c-0.3-2.5-0.6-5-0.9-7.6c-2.5,0.6-4.9,1.2-7.6,1.9c0.3-1.3,0.7-2.8,1-3.7c-1.3-1.9-2.2-3.7-3.5-4.9
				c-1.5-1.3-3.4-2-4.5-2.7c0.9-5.3,1.8-10.5,2.8-16.5c2.4-0.4,3.7-2.5,2.1-5.8c3.4-1.6,6.6-3,10.7-4.9c-2.1-0.9-3.3-1.4-3.8-1.7
				c-0.2-3.3-0.4-6.1-0.6-7.7c3.9-2.9,7.2-5.4,11-8.4c-2.8-2.7-4.4-4.3-6-5.9c-0.4,0.2-0.7,0.5-1.1,0.7c-2.1-6.6,3.8-4.5,6.7-6.7
				c-1.4-5.4-5.3,0.3-7.3-1.9c0.3-0.5,0.7-1.2,1-1.8c-1.5-0.9-3-1.7-5.3-3.1c3.3-1.6,6.2-2.9,2.4-7.1c4.8,0.4,8.8,0.8,12.8,1.1
				c0-0.4,0.1-0.8,0.1-1.2c-1.7-0.3-3.3-0.5-5-0.8c-0.2-1.7-0.4-3.4-0.5-4.7c2-2.1,5.1-3.8,5.9-6.3c0.9-3,2.4-2.2,3.9-2.5
				c2.5-0.5,5-0.9,8.2-1.5c1,0.5,3.1,1.6,5.1,2.7c0.3-0.5,0.6-1,0.9-1.4c-3.7-3.8-7.5-7.6-11.3-11.5c1-2,1.9-4,3-6.3
				c-2.6-0.8-4.8-1.4-8-2.4c2.8-1.7,4.8-3,6.8-4.3c-0.6-1.1-1.3-2.2-2-3.3c2.4-3.3,7.9,4.2,8.6-3.4c5,0.8,9.4-2.9,9.1-7.4
				c5.3,1.7,10.7,3.5,16.1,5.2c-5.7-4.7-4.9-10.5-2.6-16.5c1.7,0.9,3.7,1.9,5.1,2.6c6.1-2.4,11.2-6.8,17-5.7c2.3,1.9,4,3.4,5.7,4.8
				c0-0.5,0-1,0-1.4c3.5-1.2,7-3.5,10.5-3.5c3.7,0,7.5,2.1,11.7,3.4c0-3.7,0-6.8,0-10.4c1.3,1.7,2.5,3.1,4,5
				c1.4-3.1,2.6-5.9,4.1-9.2c2,3.4,3.5,6.1,5.4,9.3c2.6-2.4,4.8-4.5,7-6.5c3.3,2.8,3,2.7,4.5-1.7c0.4-1.2,0.4-4.6,3.8-3.9
				c1.1,0.2,2.6-2.5,3.6-3.6c3.7-1.3,7.5-2.3,11-3.9c2.8-1.3,9.7,2,11,5.6c1.6-0.3,3.2-0.5,5.1-0.8c-0.3,1.9-0.5,3.5-0.8,5.2
				c8.4,1.7,8.4,1.7,9.1-2c1.4,0.2,2.8,0.4,4.8,0.8c3.2,5.7,11,6.9,15.5,2.1c1.8,0.4,3.2,0.6,3.8,0.7c3.6,2.4,6.9,4.5,10.5,6.9
				c-0.9,1.9-1.9,4.2-3.2,6.8c3.9,0.4,7.9,0.8,11.2,1.1c-0.2,2.5-0.3,4.8-0.4,6.4c-0.7,1.2-1.7,2.6-2.3,4.1
				c-0.6,1.4-0.7,3.1-1.1,4.9c0.8-0.1,1.6-0.1,2.5-0.2c-0.2,1.7-0.4,3.5-0.7,5.6c3.7,1.4,7.3,0.9,10.4-1.6c3.9-3.2,7.7-0.7,11.5,0
				c0.7,0.1,0.9,3.5,1.2,4.5c3.5-1,6.9-2.2,10.4-3c2.3-0.5,4.2-0.3,5.1-3.8c0.5-1.9,3.6-3.6,5.9-4.3c1.8-0.6,3.5-3.1,6.5,0
				c1.9,2,6.8,0.4,10.3,0.4c1,1.5,3.1,3.2,3,4.8c-0.1,2.1-1.8,4-2.9,6.2c3.9,0.5,7,0.8,10,1.2c-0.5,2.2-0.9,4.3-1.4,6.6
				c2.1,0.6,4.1,1.1,6.8,1.8c-3,2.8-5.6,5.3-8.5,8c2,0.3,4.5-0.1,6,1c1.9,1.4,4,3,4.3,6.5c0.1,1.5,3.8,2.7,6.4,4.3
				c-2.2,1.3-4.1,2.4-6.1,3.6c0.7,0.7,1.5,1.5,2.1,2.1c-2.7,1.1-5.4,2.2-8,3.3c0.1,0.5,0.1,1.1,0.2,1.6c1.9,0.5,3.9,0.6,5.6,1.6
				c2,1.1,6-1,5.7,4.3c0,0.5,3,1.3,5.5,2.3c-1.7,1.1-2.7,1.8-4,2.6c0.6,0.8,1.3,1.6,2.1,2.7c-1.4,0-2.5,0-4.2,0
				c3.1,4.4,6.9,3.4,11.5,2.7c-1.9,2.3-3.3,4.3,0.9,5.4c-1.8,0.7-2.5,1-3.6,1.4c1.9,1.6,3.5,3,6,5.1c-2.4-0.4-3.8-0.7-4.9-0.9
				c0.7,4,1.4,7.8,2.1,12c-1.5-0.6-2.8-1.1-4.6-1.8c0.3,1.3,0.6,2.2,0.5,2.2c-2.1,1.9-3.8,3.5-5.8,5.4c1.3,1.6,2.5,3.1,4.2,5.2
				c-2.3-0.9-3.8-1.5-5.5-2.1c-0.2,3.3-0.1,6.9-4.6,5.7c0.1,2.1,0.2,4.1,0.3,6.2c-0.5,0.1-0.9,0.2-1.4,0.2c-0.9-1.7-1.8-3.5-2.7-5.2
				c-0.5,0.1-0.9,0.2-1.4,0.3c0.5,4.8,1.1,9.7,1.7,14.6c-0.9,1.8-2.1,4.2-3.7,7.3c-1-0.5-2.8-1.4-5.3-2.6c0.4,1.7,0.7,2.9,1.1,4.8
				c-2.4-1.7-4.2-3-6.6-4.7c-0.2,5.9-9.6,4.1-7.3,11.4c-2.2,0.9-4,1.6-5.9,2.4c0-0.2,0.1-0.4,0.1-0.7c-4.2,0.3-8.4,0.7-12.3,1
				c-0.6,3.8-1,6.9-1.4,8.9c-5.9,2.7-11.7,5.5-17.8,8.3c-0.5-1.5-1.1-2.9-1.8-4.7c-1,1.2-1.8,2.1-2.8,3.2c-0.8-1.9-1.4-3.3-2.1-5.1
				c-1.2,0.9-2.3,1.8-3.6,2.8c-1.8-1.3-3.5-2.8-5.3-3.8c-0.5-0.3-1.6,0.9-2.4,1.4c-1.3,0.9-2.6,1.8-4.5,3.2c0,0.1-0.2,1.4-0.4,3.1
				c-1.4-0.4-2.7-0.8-4.1-1.2c0.1,0.3,0.2,0.6,0.3,0.9c-1.7,0.6-3.3,1.2-5,1.9l0,0c0,0-2.3,1.2-2.4,1.3c-1.6,0.9-18.9-3.3-24.2,0.8
				c-4.6,3.6,0.6,13.3-6.1,24.5c-0.5,0.8-0.6,0.8-0.9,1.5c-2.1,4.4-1.3,7.7,0.2,19.7c3.9,30.1,13.4,39.2,14.8,46.3l-0.2,0.3l203,0.5
				v0.5L903,0.5z" />
                    </g>

                    <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="#0749D0"
                        strokeWidth="1"
                        ref={g => (this.g = g)}
                    >
                        <path
                            ref={path => (this.path = path)}
                            d="M902.5,327.5l-203-0.5l0.2-0.3c-1.4-7.1-10.9-16.3-14.8-46.3c-1.6-12-2.4-15.3-0.2-19.7
			c0.3-0.7,0.4-0.7,0.9-1.5c6.7-11.2,1.5-20.9,6.1-24.5c5.2-4.2,22.6,0.1,24.2-0.8c0.1,0,2.4-1.3,2.4-1.3l0,0c1.6-0.7,3.3-1.3,5-1.9
			c-0.1-0.3-0.2-0.6-0.3-0.9c1.4,0.4,2.7,0.8,4.1,1.2c0.2-1.6,0.4-3,0.4-3.1c1.9-1.4,3.2-2.3,4.5-3.2c0.8-0.5,1.9-1.6,2.4-1.4
			c1.9,1,3.5,2.5,5.3,3.8c1.3-1,2.5-1.9,3.6-2.8c0.7,1.8,1.3,3.2,2.1,5.1c1-1.2,1.7-2,2.8-3.2c0.7,1.8,1.2,3.2,1.8,4.7
			c6.1-2.8,11.9-5.6,17.8-8.3c0.3-2,0.8-5.1,1.4-8.9c4-0.3,8.1-0.7,12.3-1c0,0.2-0.1,0.4-0.1,0.7c1.9-0.7,3.7-1.5,5.9-2.4
			c-2.2-7.2,7.1-5.4,7.3-11.4c2.3,1.7,4.1,3,6.6,4.7c-0.5-1.9-0.7-3.1-1.1-4.8c2.4,1.2,4.3,2.2,5.3,2.6c1.5-3,2.7-5.4,3.7-7.3
			c-0.6-4.9-1.1-9.7-1.7-14.6c0.5-0.1,0.9-0.2,1.4-0.3c0.9,1.7,1.8,3.5,2.7,5.2c0.5-0.1,0.9-0.2,1.4-0.2c-0.1-2.1-0.2-4.1-0.3-6.2
			c4.5,1.2,4.4-2.4,4.6-5.7c1.7,0.6,3.2,1.2,5.5,2.1c-1.7-2.2-2.9-3.6-4.2-5.2c2-1.9,3.8-3.5,5.8-5.4c0,0-0.2-0.9-0.5-2.2
			c1.8,0.7,3.1,1.2,4.6,1.8c-0.8-4.2-1.4-8-2.1-12c1,0.2,2.5,0.5,4.9,0.9c-2.5-2.1-4.1-3.5-6-5.1c1.1-0.4,1.8-0.7,3.6-1.4
			c-4.3-1.1-2.8-3.1-0.9-5.4c-4.5,0.7-8.4,1.7-11.5-2.7c1.7,0,2.8,0,4.2,0c-0.8-1.1-1.5-1.9-2.1-2.7c1.2-0.8,2.2-1.4,4-2.6
			c-2.5-1-5.6-1.7-5.5-2.3c0.4-5.3-3.7-3.2-5.7-4.3c-1.7-0.9-3.7-1.1-5.6-1.6c-0.1-0.5-0.1-1.1-0.2-1.6c2.7-1.1,5.3-2.2,8-3.3
			c-0.6-0.6-1.4-1.4-2.1-2.1c2-1.2,3.9-2.3,6.1-3.6c-2.6-1.7-6.3-2.8-6.4-4.3c-0.3-3.5-2.4-5.1-4.3-6.5c-1.5-1.1-4-0.7-6-1
			c2.8-2.7,5.5-5.2,8.5-8c-2.7-0.7-4.6-1.2-6.8-1.8c0.5-2.3,0.9-4.3,1.4-6.6c-2.9-0.3-6.1-0.7-10-1.2c1.1-2.1,2.8-4.1,2.9-6.2
			c0.1-1.6-2-3.3-3-4.8c-3.5,0-8.4,1.6-10.3-0.4c-3-3-4.7-0.6-6.5,0c-2.2,0.7-5.4,2.4-5.9,4.3c-0.9,3.5-2.8,3.3-5.1,3.8
			c-3.5,0.8-6.9,1.9-10.4,3c-0.3-1.1-0.5-4.4-1.2-4.5c-3.8-0.7-7.6-3.2-11.5,0c-3.1,2.5-6.7,3-10.4,1.6c0.3-2.1,0.5-3.9,0.7-5.6
			c-0.9,0.1-1.7,0.1-2.5,0.2c0.4-1.8,0.6-3.5,1.1-4.9c0.6-1.6,1.6-2.9,2.3-4.1c0.1-1.6,0.3-3.9,0.4-6.4c-3.3-0.3-7.3-0.7-11.2-1.1
			c1.3-2.7,2.3-5,3.2-6.8c-3.7-2.4-6.9-4.6-10.5-6.9c-0.6-0.1-2-0.4-3.8-0.7c-4.6,4.8-12.3,3.6-15.5-2.1c-2-0.3-3.4-0.5-4.8-0.8
			c-0.7,3.7-0.7,3.7-9.1,2c0.3-1.7,0.5-3.4,0.8-5.2c-1.9,0.3-3.5,0.5-5.1,0.8c-1.2-3.6-8.2-6.8-11-5.6c-3.5,1.6-7.3,2.6-11,3.9
			c-1,1-2.5,3.8-3.6,3.6c-3.4-0.7-3.4,2.7-3.8,3.9c-1.5,4.4-1.2,4.5-4.5,1.7c-2.2,2.1-4.4,4.1-7,6.5c-1.9-3.2-3.5-5.9-5.4-9.3
			c-1.5,3.3-2.7,6.1-4.1,9.2c-1.5-1.8-2.7-3.3-4-5c0,3.6,0,6.7,0,10.4c-4.2-1.3-8-3.4-11.7-3.4c-3.5,0-7,2.2-10.5,3.5
			c0,0.5,0,1,0,1.4c-1.7-1.4-3.5-2.9-5.7-4.8c-5.8-1.1-10.9,3.4-17,5.7c-1.4-0.7-3.4-1.7-5.1-2.6c-2.4,6.1-3.1,11.8,2.6,16.5
			c-5.4-1.7-10.8-3.5-16.1-5.2c0.4,4.5-4,8.2-9.1,7.4c-0.7,7.6-6.2,0.1-8.6,3.4c0.6,1.1,1.3,2.2,2,3.3c-2,1.3-4,2.5-6.8,4.3
			c3.2,1,5.4,1.6,8,2.4c-1.1,2.3-2.1,4.3-3,6.3c3.8,3.9,7.5,7.7,11.3,11.5c-0.3,0.5-0.6,1-0.9,1.4c-2.1-1.1-4.1-2.2-5.1-2.7
			c-3.2,0.6-5.7,1-8.2,1.5c-1.5,0.3-3-0.5-3.9,2.5c-0.7,2.5-3.8,4.3-5.9,6.3c0.1,1.3,0.3,3,0.5,4.7c1.7,0.3,3.3,0.5,5,0.8
			c0,0.4-0.1,0.8-0.1,1.2c-4-0.4-8-0.7-12.8-1.1c3.8,4.2,1,5.5-2.4,7.1c2.3,1.3,3.8,2.2,5.3,3.1c-0.3,0.6-0.7,1.3-1,1.8
			c2,2.2,5.9-3.5,7.3,1.9c-2.9,2.2-8.7,0.1-6.7,6.7c0.4-0.2,0.7-0.5,1.1-0.7c1.6,1.6,3.3,3.2,6,5.9c-3.9,2.9-7.2,5.4-11,8.4
			c0.1,1.7,0.3,4.5,0.6,7.7c0.6,0.2,1.7,0.8,3.8,1.7c-4.1,1.9-7.3,3.4-10.7,4.9c1.5,3.3,0.2,5.4-2.1,5.8c-1,5.9-1.9,11.2-2.8,16.5
			c1.1,0.6,3,1.3,4.5,2.7c1.4,1.2,2.2,3.1,3.5,4.9c-0.2,0.9-0.6,2.4-1,3.7c2.7-0.7,5.2-1.3,7.6-1.9c0.3,2.6,0.6,5.2,0.9,7.6
			c7.8-3.8,15.7-8.6,23.1,2.6c0.6-1.4,1.2-2.6,1.6-3.5c2.3,1.8,3.9,3.1,5.5,4.4c-3.6,5.4,2.2,6.7,3.7,9.8c1.5,3.1,6.7,3.8,10.1,2.1
			c1.8,5.8,1.8,5.7,6.9,2.6c1.4-0.9,3.3-1,4.9-1.6c4.7-1.7,7.9,1.2,7.3,6.6c1.3,0.5,2.6,1,3.5,1.3c1.8-1.6,3.2-4.1,4.5-4
			c4.5,0.3,7-2.7,9.4-5.3c3.9,2.6,7.5,5,11.4,7.5c0.5-1.5,0.9-2.4,1.3-3.5c1.1,0.5,2,1.1,3,1.4c15.9,4.5,24.6,17.3,23.7,35.1
			c-0.6,12.2-1,24.4-2.1,36.6c-0.4,4.8-2.1,9.7-4,14.2c-1.3,3-2.9,5.9-4.5,8.8l1,0.9L305.5,327l-0.3-0.4c-1.4-0.9-2.3-1.5-3.1-2.1
			c-2.7-1.8-5.6-3.5-8.2-5.5c-3.1-2.4-5.3-5.5-6.9-9.2c-2.6-6-5.2-12.1-8.5-17.8c-3.3-5.8-5.2-11.8-5.2-18.5
			c0-7.6-0.5-15.2-0.9-22.8c-0.2-3.6-0.6-7.2-0.7-10.7c-0.5-14.7,5.3-25.8,19.1-32c0.5-0.2,1.3-0.8,1.6-0.7c2.1,1.1,2.9-0.5,4.1-2.1
			c0.4,1.7,0.7,2.9,1.1,4.6c0.9-1,1.6-1.8,2.3-2.6c0.2,0.3,0.3,0.8,0.3,0.8c1.2-0.6,2.3-1,3.3-1.6c0.4-0.3,0.8-0.9,1-1.4
			c0.2-0.7,0.3-1.5,0.5-2.7c0.6,1,0.9,1.6,1.6,2.8c0.5-1.5,0.8-2.5,1.2-3.6c1.3,1.7,2.5,3.2,3.8,4.8l2.2-0.8l0.2,3.1
			c1.2-0.8,2.1-1.4,3.1-2.2l0.4,2.4l1.8-0.7c0.4,1.3,0.7,2.4,1,3.5c1-0.4,1.9-0.8,3.2-1.4c0.1,0,0.6,0.2,1.5,0.6
			c-0.4-2-0.7-3.5-1.1-5.4c1,0.5,1.7,0.8,2.7,1.3c-0.4-1.3-0.7-2.3-1-3.5l2.3,0.8l0.2-2.9c1.5,1.4,2.6,2.4,3.7,3.5
			c0.4-0.7,0.8-1.5,1.2-2.2c0.1,0,0.3,0,0.4,0.1c0.1,1.1,0.3,2.2,0.4,3.6c0.8-0.7,1.4-1.1,2.1-1.6c0.8,3.2,1.4,3.5,5.2,2.5
			c-0.1-0.6-0.2-1.3-0.3-1.9c0.4,0.1,0.7,0.2,1.2,0.3c-0.2-1.1-0.3-2.1-0.5-3.4c1.6,1.3,2.9,2.4,4.2,3.4c0.2-0.1,0.2-0.1,0.4-0.3
			c-0.3-0.9-0.5-1.8-0.8-2.7c1.1,0.7,2.1,1.3,3.2,2c0.2-1.3,0.4-2.1,0.6-3l3.2,1.2c-0.6-1.4-1-2.4-1.5-3.7c1.2,0.5,2.1,0.9,3.3,1.4
			c-0.2-1.2-0.4-2.1-0.5-3.1c0.7-0.1,1.3-0.2,1.9-0.3c-0.1-0.1-0.3-0.3-0.4-0.4c0.6-0.9,1.1-1.9,1.9-3.2c-0.5-0.4-1.2-0.9-1.9-1.5
			c-0.6-0.5-1.2-1.1-1.8-1.7c0.1-0.1,0.2-0.2,0.3-0.3c1,0.3,1.9,0.6,3.2,0.9c-0.5-0.8-0.7-1.3-0.9-1.6c0.8-0.1,1.6,0,2.2-0.3
			c0.7-0.4,1-1.3,1.5-1.8c0.8,1.2,1.5,3,2.3,3.1c2.3,0.2,1-2,1.5-3.1c0.5,0.1,0.9,0.2,1.3,0.3c0.2-0.7,0.3-1.4,0.5-2.3
			c1,0.4,1.9,0.7,2.9,1.1c-0.1-0.7-0.2-1.3-0.3-2.3c1.6,1,2.3,0.5,2.5-0.8c2.4,0.6,4.2,2.6,6.8,1.7c0.6,0.5,1.3,1.3,2.1,1.9
			c0.8,0.5,1.7,0.7,2.6,1.2c0.6,0.4,1.2,0.9,2.1,1.5c-0.3-1.7-0.4-2.9-0.6-4.1c0.2,0,0.5-0.1,0.7-0.1c-0.8-1.2-1.6-2.4-2.6-3.9
			c1,0.3,1.6,0.4,2.3,0.6v-2c2.6,1.3,4.8,2.5,7.1,3.7c0.2-0.2,0.2-0.2,0.4-0.4c-0.6-1.8-1.3-3.5-2-5.7c1,0.6,1.7,0.9,2.7,1.5
			c-0.6-1-0.9-1.7-1.4-2.5l2.4-0.4c-0.4-0.7-0.6-1.3-1-2.2c1,0.2,1.7,0.3,2.5,0.4l0.3-1.8c1.5-0.3,2.9-0.5,4.5-0.8
			c-1.6-2.3-3-4.3-4.4-6.3c0.8-0.5,1.4-1,2.4-1.7c-0.8-1.2-1.6-2.4-2.4-3.6c0.4-1.1,1-2.6,1.7-4.2c-1.4-0.4-3-0.9-4.8-1.5
			c0.9-0.6,1.5-1,2.1-1.4c-0.8-0.5-1.4-0.8-1.9-1.2c0.7-0.7,1.2-1.3,2-2.2c-2.6-0.2-4.7-0.4-6.8-0.6c0.6-0.7,1.3-1.6,2.1-2.5
			c-2.2-0.2-4.8,1.8-5.7-1.6c1.5-0.3,3-0.6,5-0.9c-1.3-1-2.2-1.7-3.1-2.4l2.8-1.5c-0.7-1-1.2-1.8-1.7-2.5c0.5-0.7,0.9-1.3,1.6-2.4
			l-6.2-1.4l0.7-1.5c-1.3-0.4-2.4-0.7-3.7-1c0.2-0.6,0.4-1.1,0.7-1.7l-2.3-0.4l1-2.1l2.8-0.6c-0.5-1-0.9-1.7-1.4-2.6
			c3.5,0.3,3.5,0.3,4.4-0.7c-1.1-0.1-2.1-0.2-3.1-0.4c0.5-0.4,0.9-0.3,1.3-0.4c0.7-0.2,1.8-0.5,1.8-0.9c0.1-0.7-0.3-1.7-0.8-2.1
			c-1-0.7-2.3-1.2-3.5-1.3c-2.9-0.4-3.1-0.9-1.5-3.7c2.3,0.7,4.4,3.1,7.2,0.8c-1.3-0.5-2.4-0.9-3.6-1.3c0-0.2,0-0.2,0-0.4l4.6-0.7
			c-0.3-0.4-0.6-0.7-0.8-1c0.8-0.5,1.4-0.9,2.5-1.7l-4.7-0.9c1-0.7,1.7-1.1,2.3-1.6c-0.1-0.1-0.1-0.2-0.2-0.4
			c-1,0.2-2.1,0.3-3.3,0.5c0.9-1.5,3.3-1.6,2.7-3.9c-4-0.3-7.8,2.1-12.5,0.7c2.6-1.7,5.9,0.4,7.4-2.8l-2.8-0.5c1-1.3,1.9-2.4,3-3.8
			l-4.7-0.6c0.1-1.3,0.2-2.7,0.3-4l-3.1,0.4c0.3-1,0.6-1.9,1.1-3.4c-2.4,0.2-4.4,0.4-6.5,0.6c0-0.1-0.2-0.5-0.4-0.9
			c-0.9,0.2-1.7,0.4-2,0.5c-0.8-1.1-1.3-2-2-3c-2.3,3.4-4.5,4.4-7.8,3.6c0.8-0.5,1.9-0.9,2.1-1.5c0.8-2.5,2.7-2.9,5-2.9
			c-0.2-0.2-0.3-0.5-0.5-0.7c1-0.7,1.9-1.4,3-2.2c-0.4-1-0.6-1.8,0.2-3.2c1-1.6,2.7,0,3.4-1.5c-1.1-1-2.3-1.9-3.5-3
			c0.6-0.4,0.9-0.5,1.7-1c-1.1-0.6-1.9-1.1-2.8-1.6c2.2-0.8,4.1-1.1,5.9-1.6c0.5-0.1,1.3-0.7,1.3-1.2c0.1-0.5-0.5-1.2-1-1.6
			c-0.5-0.3-1.2-0.3-1.9-0.4c0.1-0.5,0.1-1,0.2-1.6h-4.2c4.2-3,3.3-2.2,3.2-5.5c-2.6,0.7-5.1,1.4-7.9,2.2c0.2-1.4,0.4-2.8,0.6-4.6
			c-1.9,0.6-3.7,1.1-5.4,1.6c-0.6-1.6-1.1-3-1.6-4.4h-2.7c0.4-1.4,0.7-2.6,1.1-4.4c-2.8,1.5-4.9,2.7-7.2,4c-0.3-0.7-0.7-1.4-1.1-2.2
			c-2.1,2.8-4.7,4-7.8,4.2c-0.1-0.3-0.1-0.3-0.2-0.6c1.9-1.6,3.8-3.1,5.7-4.7c-0.1-0.1-0.3-0.3-0.4-0.4c-0.9,0.4-1.8,0.8-2.7,1.3
			c-0.1-0.1-0.2-0.2-0.2-0.4c1.2-1,2.4-2,3.7-3.1l-1.8-1.1c0.2-1.5,1.4-3-0.6-4c-0.2-0.1-0.1-1.1-0.1-1.7c0.1-0.7,0.2-1.3,0.4-2.3
			c-2.5,1.7-4.6,3.2-6.6,4.5c-0.3-1.3-0.6-2.7-1-4.5c-1.1,1.2-1.7,2-2.2,2.5c-1.2-0.9-2-1.5-3.4-2.5l-1.3-3.9
			c-1.2,0.4-2.3,0.8-3.2,1.2c-0.6-0.6,0,0.7-0.6,0.6c-1.5-0.2-3-0.1-4.6-0.1l-0.4,3.7l-1.7-0.6c-0.6,0.5-1.1,1-1.9,1.8
			c-0.8-1.3-1.4-2.4-2.1-3.6c-2.3,0-4.9,0.9-6.6-1.8c-3.8,1.3-7.6,2.6-11.4,3.9c-0.2-0.2-0.2-0.2-0.4-0.5c0.6-1,1.3-2.1,2-3.2
			l-2.7-0.3c0.4-2.1,3.8-3.5,0.9-6.3c-1.2,1.9-2.2,3.6-3.3,5.3c-2.6-1.7,0.2-2.6,0.6-4c-1,0.4-1.7,0.8-2.8,1.2
			c0.1-0.9,0.3-1.4,0.2-1.7c-0.6-1.2-1.1-3-2-3.3c-1.7-0.6-1.7,1.3-2,2.5c-0.3,1.1-0.6,2.3-1.1,3.8c-0.3-0.8-0.5-1.1-0.6-1.5
			c-0.3,0.8-0.4,1.5-0.8,2c-0.3,0.3-1.4,0.4-1.4,0.3c-1.3-2.4-4.6-2.9-5.2-5.9c0-0.1-0.3-0.2-0.6-0.5c-0.7,1.2-1.4,2.4-2.1,3.6
			c-0.4-0.5-0.8-0.9-1.2-1.3c-0.4-0.4-0.8-0.9-1.1-1.3l1.4-2.8l-3.6,0.2c0.8-1.1,1.5-1.9,2.4-3.1l-4.8,0.9l1.6-2.8l-3.5,0.3
			c0.3-1.2,0.6-2.2,1-3.7c-1.5,0.9-2.6,1.5-3.7,2.2c0-0.8,0-1.4,0-2c-0.2-0.1-0.3-0.2-0.5-0.4c-0.5,0.9-1,1.8-1.5,2.7
			c-0.2-0.2-0.4-0.3-0.6-0.5c0-0.8,0-1.5,0-2.3l-2,1c-0.1-0.6-0.2-1-0.4-1.9c-0.5,0.9-0.8,1.5-1.3,2.4c-0.7-1.7-1-2.7-1.7-4.6
			c-0.7,1.3-1.2,2.1-1.9,3.2c-0.5-1.5-0.8-2.4-1.1-3.2c-0.1,0-0.3,0-0.4,0c-0.2,0.8-0.4,1.6-0.5,2.1l-2.9,1.8l-3-0.4
			c0.9,1.1,1.3,1.7,2,2.5c-0.6-0.1-1-0.2-1.4-0.2c0.1,0.9,0.2,1.6,0.2,2.4c-0.1,0.1-0.3,0.1-0.4,0.2c-0.6-0.8-1.2-1.6-2-2.6
			c-0.3,0.9-0.5,1.3-0.7,1.8l-2.1-1.6c-0.2,0.2-0.2,0.2-0.5,0.3c0.5,2.1,1,4.3,1.5,6.3l-2.7-0.5c0.1,1.2,0.2,2.1,0.3,3
			c-0.2,0-0.4,0.1-0.6,0.1c-0.2-0.6-0.4-1.3-0.6-2.1l-3.3,2.3c0.3-1.4,0.6-2.3,0.8-3.4c-0.7,0.6-1.3,1.1-2.1,1.8
			c-0.2-2.2-0.4-4-0.5-5.8c-0.3,0-0.2,0-0.5-0.1c-0.4,1.3-0.8,2.6-1.4,4.4c-0.9-1.4-1.6-2.5-2.3-3.5c-0.7,1.9-1.5,3.7-2.3,5.7
			l-2.1-1.5l-0.6,2.7l-3.8-2.3v2.4c-0.7-0.3-1.4-0.6-2.1-0.9c-0.2,0.2-0.5,0.4-0.9,0.7c-0.2-0.7-0.3-1.1-0.4-1.6
			c-0.5,0.4-0.9,0.7-1.2,0.9c-0.6-1.2-1.1-2.2-1.9-3.7l-2,3.7l-2.6-3.7v5c-0.7-0.3-1.3-0.6-1.9-0.8c0.1,0.8,0.3,1.4,0.4,2.2
			c-0.8-0.7-1.4-1.2-2-1.7l-0.6,1.9l-2.8-1.3l1.5,3l-4.8-1.2c1.3,1.2,2.2,2.1,3.3,3.1c-0.9,0.1-1.4,0.1-2.3,0.2
			c1.1,0.5,1.9,0.9,3.2,1.4c-1,0.2-1.6,0.3-2.6,0.4l4,2.1c-0.1,0.4-0.1,0.3-0.2,0.7l-5.3-0.4c0.3,0.8,0.6,1.8,0.9,2.9
			c-2.8-2.6-5.6-2.8-8.6-0.4l3.4,1.3l-2.6,2.2l3.1,1.4c0,0.2,0,0.2-0.1,0.4l-3.3,0.4c0,0.3,0,0.2-0.1,0.5l4.9,1.7
			c-0.6,0.2-1,0.4-1.5,0.6c0.5,0.5,1,0.9,1.5,1.4l-1.4,0.9l2.6,3.2c-0.2,0.2-0.1,0.2-0.3,0.4l-4.1-1.7c1,1.4,1.7,2.3,2.5,3.3
			c-0.7,0-1.1,0.1-1.6,0.1c0.7,1.2,1.3,2.3,2,3.6c-1.5-0.3-2.7-0.5-4.3-0.8c0.5,0.5,0.5,0.7,0.6,0.8c0.9,0.6,1.9,1.2,2.8,1.9
			c-0.2,0.3-0.5,0.8-0.6,0.8c-1-0.5-2.1-1-2.9-1.7c-1.2-1-2.3-1.2-3.6,0.2l-0.3-3.4l-1.8,1.4c-0.4-1-0.8-1.8-1.2-2.9
			c-0.4,0.8-0.6,1.3-1,2.2c-0.3-1.4-0.5-2.4-0.8-3.8l-2.4,3l-1.3-3.1c-0.7,1.6-1.1,2.7-1.6,3.7c-0.8-0.7-1.5-1.3-2.1-1.9
			c0,0.2,0,0.5,0.1,0.7c-1,0.3-2,0.6-3.3,1c2.8,1.7,1.1,4.3,1.5,6.6c-0.7-3.5-3.6-3.9-6.5-4.5l-1.7,0.9l-0.2-3l-2.7,3l-0.4-3.3
			l-2.1,1.6c-0.2-1.9-0.4-3.5-0.6-5.3l-2.9,0.5l-0.6-3.3c-1.3,0.2-2.3,0.4-3.3,0.5c0-0.2,0.1-0.4,0.1-0.6c-1.2-0.5-2.5-0.9-3.8-1.4
			l-1.3,3.6l-2.5-2.9l-0.9,3.3l-2-2.2l-1,1.2l-4-2.1l1,4.5l-3.1-1.1c-0.3,0.3-0.3,0.3-0.6,0.6c0.5,1.2,0.9,2.5,1.7,3.6
			c1.3,1.8,1.6,3.7,1.5,6.1l-3.2-3.3l-0.7,3.8c-1.4-1-2.7-2-3.9-2.9c-0.1,0.1-0.2,0.2-0.3,0.3c0.5,0.7,1,1.4,1.8,2.5l-4.7-1.1
			c2.1,1.6,3.6,2.8,5.2,4.1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.8-0.3-1.6-0.6-2.5-0.9l1.3,3.8l-2.8-0.7c-0.8,2.6-3.1,0.2-4.4,1.5
			c1.3,0.8,2.5,1.6,4,2.5c-0.7,0.2-1.1,0.4-1.8,0.6c1.3,0.5,2.2,0.8,3.6,1.3c-1.1,0.1-1.5,0.2-2.2,0.3c2,1,3.6,1.8,5.4,2.7l-0.9,1.7
			c-0.5-0.6-0.9-1.1-1.4-1.7c-0.3,0.9-0.5,1.3-0.6,1.8l-2.9-2.2v3l-2.8-1.5l1.4,3.8l-4,0.5c-0.1,0.4-0.1,0.4-0.2,0.8l3.5,2.6h-5.8
			l0.8,1.8c-1.2,0.2-2.3,0.3-3.3,0.5c-0.1,0.3-0.1,0.3-0.1,0.7c2.4,1.3,4.9,2.5,7.8,4c-2.5-0.2-3.9,0.5-4.7,2.6
			c3.6,0.4,7.6-0.2,9,4.1c-0.8,0.9-2.7-1.3-2.9,0.5c-3.3,0.7-6.4,1.5-9.5,2.2c0,0.3,0,0.3-0.1,0.7l2.8,1.6c-2.3,0.7-4.3,1.3-6.6,1.9
			c1.9,2.7,2,2.7,5.3,1.9l-4.7,3.8c0.2,0.3,0.1,0.3,0.3,0.6c1.7-0.5,3.4-0.9,5.3-1.4c-2.6,4.9-6.8,3.8-10.9,3.2
			c-0.1,0.3-0.1,0.3-0.3,0.6l2.4,2.5l-3.1,2.9c0.2,0.3,0.1,0.3,0.3,0.5l3.5-0.8c0.1,0.1,0.1,0.2,0.2,0.3c-2.1,1.7-4.2,3.3-6.3,5
			c0.2,0.3,0.1,0.3,0.3,0.6c1.8-0.5,3.6-1,5.5-1.5c-1.1,2.4-3.9,3.8-3.4,7.1c0.8-0.5,1.5-0.8,2.1-1.2c0.1,0.1,0.3,0.2,0.4,0.3
			c-1,1.8-2,3.5-3.3,5.9c1.6-0.5,2.9-0.6,3.9-1.2c1-0.7,1.7-2,2.6-3c0.1,0,0.2,0.1,0.3,0.1c-0.9,1.9-1.8,3.8-2.6,5.7
			c0.2,0.2,0.2,0.2,0.4,0.4c0.9-0.4,1.8-0.8,3-1.3c-0.4,1-0.6,1.5-0.8,2.1c0.8,0,1.3,0.1,2.3,0.1c-1.1,1.3-2,2.3-3.2,3.8l4.4-2.3
			c0.4,0.5,0.2,0.4,0.6,0.9c-1.9,1.6-3.7,3.1-5.8,4.9c3.3,0.7,4.9-1.7,7.5-2.8l-2.1,4.8l2.5-0.9l-0.4,3.4c1.6-0.7,2.7-1.3,3.9-1.8
			c-2.2,6.4-2.2,6.6,0.7,7.4c0.8-2.1,1.6-4.1,2.4-6.2c0.3,0.1,0.5,0.1,0.8,0.2c-0.2,1.1-0.4,2.2-0.6,3.5c0.3,0.1,0.8,0.3,1.6,0.5
			c-0.6,0.5-1.1,0.9-1.6,1.4c0.9,0.1,1.5,0.2,2.5,0.3c-1.7,1.1-3,2-4.9,3.3l3.3,0.2c-1,2.1-2,4-3.1,6.3c1.4-0.4,2.7-0.8,3.6-1
			c-0.4,0.9-1.3,2-1.2,3c0,0.5,1.7,0.9,2.6,1.3l-2.2,3.7c3.5,0.4,5-2.1,7.5-3.2l-2.1,5.2c0.2,0.1,0.1,0.1,0.3,0.2l6.7-5l0.8,4.3
			l1.9-0.6v2.6c1.2-0.6,2.1-1,3.3-1.6l-1,3l2-0.5l-0.9,4h4.3l0.2,2.4c2.6,0.8,3.2-1.5,4.6-2.8l0.6,2.4c2-0.4,3.9-0.7,5.9-1
			c-0.3,0.5-0.5,1-0.8,1.5c1.2-0.1,2.2-0.1,3.6-0.2l-2.8,3.5h3.2c-0.4,2.4-0.9,4.8-1.4,7.6c1.4-1,2.5-1.8,3.7-2.7l0.2,2.8
			c1-0.7,1.8-1.3,2.7-2l0.2,3.6l2.5-1.6l0.2,2.8c0.9-0.7,1.5-1.2,2.4-1.9l0.4,4.1c1-0.6,1.7-1.1,2.6-1.6c0.6,0.8,1.2,1.5,2.2,3
			l2.1-5.9l2,3.7c0.3,0,0.3,0,0.6-0.1c0.5-1.8,1.1-3.5,1.6-5.4c1.3,1.2,2.5,2.3,3.9,3.6c0.6-1.1,1.1-1.9,1.5-2.6l2.4,0.7l0.3-3.5
			c1.3,1.1,2.2,2,3.1,2.8c-0.1,0.2-0.3,0.3-0.4,0.5c0.5-0.1,1-0.1,1.6-0.2c-0.4,0.7-0.7,1.2-1.2,2c1.8-0.6,3.2-1,5.1-1.6
			c-1,1.2-1.7,2-2.7,3.1c1.2-0.3,2-0.5,3.3-0.9c-1,1.1-1.6,1.9-2.2,2.6c0.1,0.1,0.1,0.3,0.2,0.4c1.7-0.8,3.5-1.6,5.5-2.6l-2.1,3.9
			c1.8-0.9,3.2-1.6,5-2.4c-0.6,1.2-0.9,1.9-1.4,3c1.1-0.6,1.9-1.1,2.8-1.5c0.9,1.8,1.6,3.5,2.5,5.3c0.1,0,0.6,0.1,1,0.1
			c-0.1,0.2-0.2,0.3-0.4,0.5c0.7,1,9.6-4.1,10.2-3.1c2.2,4.6,8.1,8.2,10.1,12.9l4,20c2.4,1,1,3.9,1.6,6.4c0.3,1.5,0.5,3,0.5,4.4
			c0.4,5.8,0.7,11.7,1,17.5c0.1,1.6,0.4,3.1,0.3,4.7c-1,9.6-3.4,18.8-7.1,27.7c-3.1,7.4-8,19.1-14.7,23.9H0.5"
                        />
                    </g>

                </svg>
            </MediaQuery>
        );
    }
    render() {
        return (
            <div
                className={this.props.className}
                ref={container => (this.container = container)}
                style={this.props.style}
            >
                {this.renderTypingContent()}
                {this.renderSVG()}
            </div>
        );
    }
}

export default Logo;
