import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const AddCourse = () => {
  const [courseName,setCourseName] = useState('')
  const [courseId,setCourseId] = useState('');
  const [courseType,setCourseType] = useState('self-paced')
  const [description,setDescription] = useState('')
  const [price,SetPrice] = useState('')
  const [courseImage,setCourseImage] = useState(null)

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const formData = new FormData();
      formData.append("CourseName",courseName)
      formData.append("CourseId",courseId)
      formData.append("CourseType",courseType)
      formData.append("Description",description)
      formData.append("Price",price)
      if(courseImage){
        formData.append("couresImage",courseImage)
      }
      const res = await fetch('/api/addCourse',{
        method:"POST",
        credentials:'include',
        body:formData,
      });
      if(!res.ok){
        throw new Error('Error adding course');
            }
            alert("Course Added Successfully")
            setCourseName("")
            setCourseId("");
            setCourseType("Self-paced")
            setDescription("")
            SetPrice("");
            setCourseImage(null);

    }
    catch(error){
      console.log(error);
      alert("Something went Wrong:" + error.message)
    }
  };

  return (
    <>
    <Navbar />
    <section className="bg-white mb-20">
    <div className="container m-auto max-w-2xl py-2">
      <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
            Add Course
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Course Name
            </label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Certified Blockchain Associate"
              required
              
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Course Id
            </label>
            <input
              type="text"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. 1"
              required
              
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            >
              Course Type
            </label>
            <select
              id="type"
              name="type"
              className="border rounded w-full py-2 px-3"
              required
              value={courseType}
              onChange={(e) => setCourseType(e.target.value)}
            >
              <option value="Self-Paced">Self-Paced</option>
              <option value="Instructor-Led">Instructor-Led</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Small description on the course"
            
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <select
              id="price"
              name="price"
              value={price}
              onChange={(e) => SetPrice(e.target.value)}
              className="border rounded w-full py-2 px-3"
              required
              
            >
              <option value="Rs.5000">Rs.5000</option>
              <option value="Rs.3500">Rs.3500</option>
              <option value="Rs.15000">Rs.15000</option>
            </select>
          </div>
          <div>
            <label className='"block text-gray-700 font-bold mb-2'>Course Image</label>
            <input type="file"
            accept="image/*" 
            onChange={(e)=>{
              if(e.target.files && e.target.files[0]){
                setCourseImage(e.target.files[0])
              }
            }

            }/>
          </div>
          <div>
            <button
              className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  </section></>
  )
}

export default AddCourse
