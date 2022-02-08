import React, {useState} from 'react'
import courses from '../data/courses'

const CourseCard = ({dept, number, title, description}) => {

  const [isDisplayed, setDisplay] = useState(false);

  return (
    <>
      <p onClick={(e)=>{setDisplay(!isDisplayed)}} key={`${dept}-${number}`}>
            {dept}
            {' '}
            {number}
            {' - '}
            {title}
        </p>
        {isDisplayed ? <p>{description}</p> : ''}
    </>
  )
}

const Courses = () => {

  return (
  <>
    {courses.map(({ dept, number, title, description }) => (
      <CourseCard dept={dept} number={number} title={title} description={description}/>
    ))}
  </>
)}

export default Courses
