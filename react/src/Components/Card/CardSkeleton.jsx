import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function CardSkeleton() {
    return (
        <div className="wrapper grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center gap-4">
            <div className="card-body flex gap-3 items-center bg-white p-4 rounded-md">
                <div className="group-hover:text-white">
                    <Skeleton circle className="w-12 h-12"></Skeleton>
                </div>
                <Skeleton
                    containerClassName="flex-1"
                    count={2}
                    className="mt-1"
                ></Skeleton>
            </div>
        </div>
    );
}
export default CardSkeleton;
