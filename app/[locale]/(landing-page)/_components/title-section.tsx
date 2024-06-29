import { cn } from "@/shared/lib/utils";

interface Props {
    title: string;
    className?: string;
    color?: string;
}

const TitleSection = (data: Props) => {
    return (
        <div className={cn(`w-full flex flex-col gap-3 text-center items-center justify-center ${data.className}`)}>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b drop-shadow-custom">{data.title}</p>
        </div>
    );
};

export default TitleSection;
