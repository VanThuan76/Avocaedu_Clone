'use client'
import { useState } from "react";

import { ILesson } from "@/@types/avocaedu-type";
import LessionItem from "./lesson-item"
interface LessonsListProps {
    lessons: ILesson[]
}
const LessonsList = ({
    lessons
}: LessonsListProps) => {
    const [current, setCurrent] = useState(-1);

    return (
        <div className="mt-6">
            <div>
                <h1 className='font-bold text-xl'>
                    Lessons
                </h1>
            </div>
            <div className="border border-slate-500 bg-muted rounded-md overflow-hidden mt-2">
                {
                    lessons.map((lesson, index) => {
                        const isLast = index === lessons.length - 1;
                        return (
                            <LessionItem isLast={isLast} current={current} setCurrent={setCurrent} key={index} lesson={lesson} />
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default LessonsList