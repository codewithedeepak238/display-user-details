import { useNavigate } from "react-router-dom"

export const Useritem = ({item}) => {
    const navigate = useNavigate();
    function handleSubmit(item){
        sessionStorage.setItem("item_id", item.index);
        navigate("/detail")
    }
    return (
        <>
            <tr onClick={()=>handleSubmit(item)} class="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.fullName}
                </th>
                <td class="px-6 py-4">
                    {item.hogwartsHouse}
                </td>
                <td class="px-6 py-4">
                    {item.interpretedBy}
                </td>
                <td class="px-6 py-4">
                    {item.birthdate}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </>
    )
}
