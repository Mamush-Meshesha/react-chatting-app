import { FC } from "react"

interface DashboardheaderProps{

}
const  Dashboardheader:FC<DashboardheaderProps> =() => {
  return (
    <div className="bg-[#E5DDD5] h-24 w-[80%] ml-[20%]  absolute top-0 left-0 right-0 ">
      <div>
        {/* left side */}
        <div className="flex items-center h-full gap-3 px-10">
          <div className="h-10 w-10 relative border rounded-full bg-black  ">
            <span className="w-3 h-3 rounded-full bg-green-600 absolute right-0  bottom-0 "></span>
          </div>
          <div>
            <div className="flex flex-col">
              {/* name */}
              <h1>Mamush</h1>
              {/* status */}
              <span className="text-xs">active</span>
            </div>
          </div>
              </div>
              {/* right side */}
              <div>
                  <div>
                      
                  </div>
              </div>
      </div>
    </div>
  );
}

export default Dashboardheader
