import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseLoadHandler = (id, title) => {
        this.props.history.replace({pathname: this.props.match.url + '/course/' + id, search: 'title=' + title})
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <article onClick={() => this.courseLoadHandler(course.id, course.title)} className="Course" key={course.id}>{course.title}</article>
                            );
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/course/:id'} component={Course} />
            </div>
        );
    }
}

export default Courses;