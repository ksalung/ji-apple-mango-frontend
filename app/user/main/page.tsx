import UserMain from "@/app/components/User/Main";
import { Category } from "@/types/category";

export default function UserMainPage() {

    const userCategory: Category[] = [];


    return <UserMain userCategory={userCategory} />
}