import React from 'react';
import DashboardHeader from './dashboard-header';
import CourseListContainer from './course-list-container';

function Dashboard() {
    return (

        <React.Fragment>
            <DashboardHeader />
            <CourseListContainer />
        </React.Fragment>

    );
}
export default Dashboard;
