import React,{useState,useEffect} from 'react'
import CourseCard from '../components/CourseCard'

const CourseGrid = ({isHome=false}) => {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] =useState(true);
  const courseList = isHome ? courses.slice(0,3):courses

  useEffect(()=>{
    const fetchCourses = async()=>{
      try{
        const res = await fetch("http://locathost:5000/courses");
        const data = await res.json();
        setCourses(data);
      }
      catch(error){
        console.log(error)
      }
      finally{
        setLoading(false)
      }
    }
    fetchCourses();
  },[])
  return (
  <>
  <h1 className='flex flex-col items-center font-bold text-2xl md:text-4xl text-purple-800 pt-10'>
  {isHome?"Top Courses":"All Courses"}
  </h1>
  { loading ?(<h1>Loading</h1>
    ):<div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
        {courseList.map((course)=>(
            <CourseCard key={courses.courseId} course={course} />
        ))}
    </div>
}

  </>
  )   
}

export default CourseGrid
