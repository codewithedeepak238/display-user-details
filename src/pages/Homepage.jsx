import { useFetch } from "../hooks/useFetch"
import { Useritem } from "../components";

export const Homepage = () => {
  const {list, loading} = useFetch("https://potterapi-fedeperin.vercel.app/en/characters");
  return (
    <div className="">
      <div class="relative w-full mt-[2%] shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-white uppercase bg-[#a2b0c7] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Full Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Hogwart House
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Played By
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Birth Date
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              {

                loading===false?<tbody className="">
                {
                  list && list.map((item)=>(
                    <Useritem key={item.index} item={item}/>
                  ))
                }
              </tbody>:<>
                  <div className="mt-[15%] w-[100%] flex items-center justify-center">
                    <div className="loader mt-[20%]"></div>
                  </div>
                  </>
            }
          </table>
      </div>
    </div>
  )
}
