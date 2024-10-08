import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestIconBtn from "../../components/buttons/RequestIconBtn";
import { FaUserCheck } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import RequestCard from "../../components/Cards/RequestCard";
import { FaRegEye } from "react-icons/fa";
import Requests from "../../components/Modals/Requests";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchApprovedRequests } from "../../store/Slices/ApprovedRequestsSlice";
import { BlockUserApi } from "../../ApiRequests";
import { showErrorAlert, showSuccessAlert } from "../../utils/AlertMessage";
import PageLoader from "../../components/Loaders/PageLoader";

const ApprovedRequest = () => {
  const [SearchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const [SelectedId, setSelectedId] = useState("");
  const [ProcessLoading, setProcessLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ApprovedUserState = useSelector((state) => state.ApprovedUserState);
  useEffect(() => {
    dispatch(fetchApprovedRequests());
  }, []);

  return (
    <div>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Approved Requests"}
          value={SearchText}
          setValue={setSearchText}
        />
        {ApprovedUserState.loading ? (
          <div className="flex flex-1 justify-center items-center">
            <PageLoader />
          </div>
        ) : (
          ApprovedUserState.data &&
          ApprovedUserState.data.map((dt, i) => {
            return (
              <RequestCard
                Name={dt.name}
                KarubarName={dt.business_name}
                Location={dt.location}
                Image={"/images/store.png"}
                key={i}
              >
                <RequestIconBtn
                  Icon={FaUserCheck}
                  Title={"Approved User"}
                  onClick={() => {
                    // setOpen(!open);
                    // setSelectedId(i);
                  }}
                  // Border="border-[#ED0000] border-[2px]"
                  Color="text-[#20B038] w-[200px]"
                />
                <RequestIconBtn
                  Icon={FaUserTimes}
                  Title={"Block this User"}
                  onClick={() => {
                    setOpen(!open);
                    setSelectedId(dt.mobile_number);
                  }}
                  Border="border-[#21211f] border-[2px]"
                  Color="text-[#D9A300] w-[200px] hover:bg-[#D9A300] hover:text-white"
                />
                <div
                  className="absolute -left-[55px] border-[1px] border-black hover:bg-black hover:text-white rounded-full py-2 px-2 cursor-pointer transition-all ease-in-out duration-500"
                  onClick={() => navigate("/previous-orders/" + i)}
                >
                  <FaRegEye className="text-xl" />
                </div>
              </RequestCard>
            );
          })
        )}
      </div>
      {open && (
        <Requests
          open={open}
          setOpen={setOpen}
          type={"block"}
          Loading={ProcessLoading}
          onSubmit={async () => {
            setProcessLoading(true);
            try {
              const response = await BlockUserApi({
                mobile_number: SelectedId,
              });
              console.log(response);
              if (response.data.success) {
                showSuccessAlert("User!", "User Successfully Blocked!");
                dispatch(fetchApprovedRequests());
                // navigate("/new-requests");
                setOpen(false);
              } else {
                showErrorAlert("User!", "User unable to Blocked!");
              }
            } catch (err) {
              showErrorAlert("User!", "Internal server error!");
            }
            setProcessLoading(false);
          }}
        />
      )}
    </div>
  );
};

export default ApprovedRequest;
