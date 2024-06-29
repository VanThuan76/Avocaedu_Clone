"use client"
import { useEffect, useState } from "react"
import Footer from "../../../_components/footer"
import Navbar from "../../../_components/navbar"
import CourseCard from "./components/course-card"
import Description from "./components/description"
import LessonsList from "./components/lessons-list"
import InstructorDetail from "./components/instructor-detail"

import { axiosInstanceNoAuth } from "@/shared/config/axios"
import { ICourseDetail } from "@/@types/avocaedu-type"
import { URL_API } from "@/shared/constants"

const CourseId = ({
  params
}: {
  params: { courseId: string }
}) => {
  const [course, setCourse] = useState<ICourseDetail>()
  useEffect(() => {
    const getCourse = async () => {
      try {
        const data = await axiosInstanceNoAuth.get<ICourseDetail>(`${URL_API.DETAILS_COURSE}/${params.courseId}/?format=json`);
        setCourse(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCourse();
  }, [params.courseId]);
  if (!course) return null
  return (
    <div>
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-8 md:px-24 my-4 md:my-16 flex flex-col md:flex-row gap-4">
        <div>
          <Description title={course?.title!} description={course?.description!} />
          <LessonsList lessons={course?.lessons} />
          <InstructorDetail instructors={course?.instructor} />
        </div>
        <div>
          <CourseCard course={course} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CourseId
