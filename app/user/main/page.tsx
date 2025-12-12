import UserMain from "@/app/components/User/Main";
import { Category } from "@/types/category";

export default function UserMainPage() {

    const userCategory: Category[] = [{
        id: "car",
        name: "자동차"
    }, {
        id: "movie",
        name: "영화"
    }];


    return <UserMain userCategory={userCategory} />
}