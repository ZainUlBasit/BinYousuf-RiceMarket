import React, { useEffect, useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestCard from "../../components/Cards/RequestCard";
import { TbUserCancel } from "react-icons/tb";
import RequestIconBtn from "../../components/buttons/RequestIconBtn";
import RequestBtn from "../../components/buttons/RequestBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRejectedRequests } from "../../store/Slices/RejectedRequestsSlice";
import PageLoader from "../../components/Loaders/PageLoader";

const RejectedRequest = () => {
  const [SearchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const RejectedUserState = useSelector((state) => state.RejectedUserState);
  useEffect(() => {
    dispatch(fetchRejectedRequests());
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Rejected Requests"}
          value={SearchText}
          setValue={setSearchText}
        />
        {RejectedUserState.loading ? (
          <div className="flex flex-1 justify-center items-center">
            <PageLoader />
          </div>
        ) : (
          RejectedUserState.data &&
          RejectedUserState.data.map((dt, i) => {
            return (
              <RequestCard
                Name={dt.name}
                KarubarName={dt.business_name}
                Location={dt.location}
                Image={"/images/store.png"}
                key={i}
              >
                <RequestIconBtn
                  Icon={TbUserCancel}
                  Title={"Rejected User"}
                  onClick={() => {}}
                  // Border="border-[#ED0000] border-[2px]"
                  Color="text-[#ED0000]"
                />
                <RequestBtn
                  // Icon={TbUserCancel}
                  Title={"View New Details"}
                  onClick={() =>
                    navigate("/user_detail/" + dt._id, {
                      state: { data: JSON.stringify(dt) },
                    })
                  }
                  Border="border-[#5090E8] border-[2px]"
                  Color="text-[#5090E8] hover:text-white hover:bg-[#5090E8]"
                />
              </RequestCard>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RejectedRequest;
