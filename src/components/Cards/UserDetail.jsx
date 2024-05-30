import React, { useEffect, useState } from "react";
import StoreImage from "../../assets/images/store_detail.png";
import HomeWrapper from "../Wrapper/HomeWrapper";
import HeaderRequests from "../Headers/HeaderRequests";
import CnicFront from "../../assets/images/cnic front.png";
import CnicBack from "../../assets/images/cnic back.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewRequests } from "../../store/Slices/NewRequestsSlice";
import RequestBtn from "../buttons/RequestBtn";
import { RejectRequestsApi, VerifyRequestsApi } from "../../ApiRequests";
import { showErrorAlert, showSuccessAlert } from "../../utils/AlertMessage";

const UserDetail = () => {
  const [SearchText, setSearchText] = useState("");
  const { id } = useParams();
  const [CurrentState, setCurrentState] = useState({});
  const navigate = useNavigate();

  const location = useLocation();
  const { data } = location.state || {};

  const dispatch = useDispatch();
  const NewRequestState = useSelector((state) => state.NewRequestsState);
  useEffect(() => {
    dispatch(fetchNewRequests());
  }, []);
  useEffect(() => {
    setCurrentState(JSON.parse(data));
  }, [NewRequestState]);

  return (
    <HomeWrapper>
      {CurrentState && (
        <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
          <HeaderRequests
            title={"User Detail"}
            value={SearchText}
            setValue={setSearchText}
          />
          <img
            src={CurrentState.business_attachment}
            alt=""
            className="mt-5 w-[100%] max-h-[400px]"
          />
          <div className="flex gap-x-5">
            <div className="flex flex-col gap-y-2">
              <div className="">
                <div className="text-[#808080] font-bold text-2xl">Name</div>
                <div className="text-lg">{CurrentState.name}</div>
              </div>
              <div className="">
                <div className="text-[#808080] font-bold text-2xl">
                  Kaarubar ka naam
                </div>
                <div className="text-lg">{CurrentState.business_name}</div>
              </div>
              <div className="">
                <div className="text-[#808080] font-bold text-2xl">
                  Location
                </div>
                <div className="text-lg">{CurrentState.location}</div>
              </div>
              <div className="">
                <div className="text-[#808080] font-bold text-2xl">
                  Mobile Number
                </div>
                <div className="text-lg">{CurrentState.mobile_number}</div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="text-[#808080] font-bold text-2xl">
                Cnic ki tasweer
              </div>
              <div className="flex gap-x-4">
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="w-[280px] h-[180px]"
                    src={CurrentState.nic_front_attachment}
                    alt=""
                  />
                  <span>Front</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="w-[280px] h-[180px]"
                    src={CurrentState.nic_back_attachment}
                    alt=""
                  />
                  <span>Back</span>
                </div>
              </div>
              <div className="flex gap-x-3 w-full justify-end pt-2">
                <RequestBtn
                  Title={"Accept"}
                  onClick={async () => {
                    try {
                      const response = await VerifyRequestsApi({
                        mobile_number: CurrentState.mobile_number,
                      });
                      console.log(response);
                      if (response.data.success) {
                        showSuccessAlert(
                          "Request!",
                          "Request Successfully Approved!"
                        );
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
                        mobile_number: CurrentState.mobile_number,
                      });
                      console.log(response);
                      if (response.data.success) {
                        showSuccessAlert(
                          "Request!",
                          "Request Successfully Approved!"
                        );
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
                  Border="border-[#ED0000] border-[2px]"
                  Color="text-[#ED0000] hover:text-white hover:bg-[#ED0000]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </HomeWrapper>
  );
};

export default UserDetail;
