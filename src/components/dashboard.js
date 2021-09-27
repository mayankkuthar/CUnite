import React from "react";


export default class Dashboard extends React.Component {
    render() {
        return (
            <div id="dashboard">
                <div id="dashboard-appbar">
                    <div>
                        <h2>Mohit Sharma</h2>
                    </div>
                    <div id="dashboard-appbar-left">
                        <h3>Events</h3>
                        <h3>Clubs</h3>
                        <h3 className="active-red">Overview</h3>
                        <div className="normal-flex">
                            <img src="./calender-icon.svg" />
                            <p>21 Nov, 2021</p>
                        </div>
                    </div>
                </div>
                <p className="small">Welcome Back!</p>
                <div id="dashboard-box1">
                    <div className="inside-box1">
                        <div>
                            <p>Total Attended Events</p>
                            <h2>12</h2>
                            <div className="up">
                                <span className="a">1% <img src="./arrow-up-icon.svg" /></span>
                                <span className="b"> than last month</span>
                            </div>
                        </div>
                        <div>
                            <img className="graph" src="./graph-green.jpeg" />
                        </div>
                    </div>
                    <div className="inside-box1">
                        <div>
                            <p>Total Attended Events</p>
                            <h2>12</h2>
                            <div className="up">
                                <span className="a">1% <img src="./arrow-up-icon.svg" /></span>
                                <span className="b"> than last month</span>
                            </div>
                        </div>
                        <div>
                            <img className="graph-yellow" src="./graph-yellow.jpeg" />
                        </div>
                    </div>
                    <div className="inside-box1">
                        <div>
                            <p>Total Attended Events</p>
                            <h2>12</h2>
                            <div className="up">
                                <span className="a">1% <img src="./arrow-up-icon.svg" /></span>
                                <span className="b"> than last month</span>
                            </div>
                        </div>
                        <div>
                            <img className="graph" src="./graph-blue.jpeg" />
                        </div>
                    </div>
                </div>
                <div id="dashboard-box2">
                    <div id="inside-box2">
                        <div>
                            <h2 className="dashboard-h2">Events Data</h2>
                        </div>
                        <div className="b">
                            <p>Last Month <img className="DownArrow2" src="./DownArrow.svg" /></p>
                            <p className="export"><img className="export-icon" src="./export-icon.svg" /> Export</p>
                        </div>
                    </div>
                    <div id="RSVP">
                        <p><span class="small-dot1"></span> Attended</p>
                        <p><span class="small-dot2"></span> RSVP's</p>
                    </div>
                    <div>
                        <img id="main-graph" src="./main-graph.jpeg" />
                    </div>
                </div>
                <div id="dashboard-box3">
                    <div id="inside-box3">
                        <h2 className="dashboard-h2">Upcoming Events</h2>
                        <p>Events</p>
                        <div id="flex">
                            <div className="grid">
                                <div className="name">
                                    <img src="./flag-icon.svg" />
                                    <h2>
                                        30 Days Google Cloud Days
                                    </h2>
                                </div>
                                <div className="date">
                                    <h2>21 Nov</h2>
                                </div>
                                <div className="org">
                                    <h2>GDSC</h2>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="name">
                                    <img src="./flag-icon.svg" />
                                    <h2>
                                        30 Days Google Cloud Days
                                    </h2>
                                </div>
                                <div className="date">
                                    <h2>21 Nov</h2>
                                </div>
                                <div className="org">
                                    <h2>GDSC</h2>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="name">
                                    <img src="./flag-icon.svg" />
                                    <h2>
                                        30 Days Google Cloud Days
                                    </h2>
                                </div>
                                <div className="date">
                                    <h2>21 Nov</h2>
                                </div>
                                <div className="org">
                                    <h2>GDSC</h2>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="name">
                                    <img src="./flag-icon.svg" />
                                    <h2>
                                        30 Days Google Cloud Days
                                    </h2>
                                </div>
                                <div className="date">
                                    <h2>21 Nov</h2>
                                </div>
                                <div className="org">
                                    <h2>GDSC</h2>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="name">
                                    <img src="./flag-icon.svg" />
                                    <h2>
                                        30 Days Google Cloud Days
                                    </h2>
                                </div>
                                <div className="date">
                                    <h2>21 Nov</h2>
                                </div>
                                <div className="org">
                                    <h2>GDSC</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="category">
                        <h2 className="dashboard-h2">Events by Category</h2>
                        <div id="inside-category">
                            <div className="grid">
                                <span className="square"></span>
                                <h3>Tech</h3>
                                <h2>50%</h2>
                            </div>
                            <div className="grid">
                                <span className="square"></span>
                                <h3>Tech</h3>
                                <h2>50%</h2>
                            </div>
                            <div className="grid">
                                <span className="square"></span>
                                <h3>Tech</h3>
                                <h2>50%</h2>
                            </div>
                            <div className="grid">
                                <span className="square"></span>
                                <h3>Tech</h3>
                                <h2>50%</h2>
                            </div>
                            <div className="grid">
                                <span className="square"></span>
                                <h3>Tech</h3>
                                <h2>50%</h2>
                            </div>
                            <div className="grid">
                                <span className="square"></span>
                                <h3>Tech</h3>
                                <h2>50%</h2>
                            </div>
                            
                        </div>
                        <div className="hr"></div>
                            <h2>More Insights <img className="RightArrow" src="./DownArrow.svg" /></h2>
                    </div>
                </div>
            </div>
        );
    }
}