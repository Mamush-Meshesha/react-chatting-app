import { FC, useState } from "react";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import Addmodal from "./addmodal";

interface ModalProps {

}

const Modal: FC<ModalProps> = () => {

    const [open, setIsOpen] = useState(false)
    
    const handleShow = () => {
        setIsOpen(!open)
    }
    return (
      <div>
        <div className="w-[200px] h-auto  border rounded-md p-6 ">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <button>Profile</button>
              <button onClick={handleShow}>
                <CgProfile />
              </button>
                    </div>
                    {
                        open ? <Addmodal  onClose={handleShow}/> : null
                    }
            <div className="flex justify-between">
              <button>Settings</button>
              <button>
                <IoSettingsOutline />
              </button>
            </div>
            <div className="flex justify-between">
              <button>Logout</button>
              <button>
                <CgLogOut />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Modal