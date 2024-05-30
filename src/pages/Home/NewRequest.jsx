import React, { useEffect, useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import { IoSearchSharp } from "react-icons/io5";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestCard from "../../components/Cards/RequestCard";
import RequestBtn from "../../components/buttons/RequestBtn";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewRequests } from "../../store/Slices/NewRequestsSlice";
import { RejectRequestsApi, VerifyRequestsApi } from "../../ApiRequests";
import { showErrorAlert, showSuccessAlert } from "../../utils/AlertMessage";

const NewRequest = () => {
  const navigate = useNavigate();
  const [SearchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const NewRequestState = useSelector((state) => state.NewRequestsState);
  useEffect(() => {
    dispatch(fetchNewRequests());
    console.log(NewRequestState.data);
  }, []);
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"New Requests"}
          value={SearchText}
          setValue={setSearchText}
        />
        {NewRequestState.data &&
          NewRequestState.data.map((dt, i) => {
            return (
              <RequestCard
                Name={dt.name}
                KarubarName={dt.business_name}
                Location={dt.location}
                Image={"/images/store.png"}
                key={i}
              >
                <RequestBtn
                  Title={"Accept"}
                  onClick={async () => {
                    try {
                      const response = await VerifyRequestsApi({
                        mobile_number: dt.mobile_number,
                      });
                      console.log(response);
                      if (response.data.success) {
                        showSuccessAlert(
                          "Request!",
                          "Request Successfully Approved!"
                        );
                        dispatch(fetchNewRequests());
                        navigate("/new-requests");
                      } else {
                        showErrorAlert(
                          "Request!",
                          "Request Unable to Approved!"
                        );
                      }
                    } catch (err) {
                      showErrorAlert("Request!", "Internal server error!");
                    }
                  }}
                  Border="border-[#20B038] border-[2px]"
                  Color="text-[#20B038] hover:text-white hover:bg-[#20B038]"
                />
                <RequestBtn
                  Title={"REJECT"}
                  onClick={async () => {
                    try {
                      const response = await RejectRequestsApi({
                        mobile_number: dt.mobile_number,
                      });
                      console.log(response);
                      if (response.data.success) {
                        showSuccessAlert(
                          "Request!",
                          "Request Successfully Rejected!"
                        );
                        dispatch(fetchNewRequests());
                        navigate("/new-requests");
                      } else {
                        showErrorAlert(
                          "Request!",
                          "Request Unable to Rejected!"
                        );
                      }
                    } catch (err) {
                      showErrorAlert("Request!", "Internal server error!");
                    }
                  }}
                  Border="border-[#ED0000] border-[2px]"
                  Color="text-[#ED0000] hover:text-white hover:bg-[#ED0000]"
                />
                <div
                  className="absolute -left-[55px] border-[1px] border-black hover:bg-black hover:text-white rounded-full py-2 px-2 cursor-pointer transition-all ease-in-out duration-500"
                  onClick={() =>
                    navigate("/user_detail/" + dt._id, {
                      state: { data: JSON.stringify(dt) },
                    })
                  }
                >
                  <FaRegEye className="text-xl" />
                </div>
              </RequestCard>
            );
          })}
      </div>
    </HomeWrapper>
  );
};

export default NewRequest;
