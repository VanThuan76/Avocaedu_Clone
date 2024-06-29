import { PreImage } from "../pre-image";

export interface ICardInstructorData {
    image: string,
    name: string,
    position: string
}
const CardInstructor = ({ image, name, position }: ICardInstructorData) => {
    return (
        <div className="w-[400px] flex justify-start items-start gap-5">
            <div className='w-full flex justify-center items-center relative cursor-pointer overflow-hidden'>
                <PreImage width={150} height={150} src={image} alt={name} className='w-full h-full rounded-full object-cover border-4 border-[#58cc05]' />
            </div>
            <div className="w-full flex flex-col justify-start items-start text-left gap-2">
                <h3 className="font-semibold text-lg md:text-xl">{name}</h3>
                <p className="font-semibold text-base md:textlg text-orange-400 dark:text-orange-100">{position}</p>
            </div>
        </div>
    );
}

export default CardInstructor;