import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestCard from "../../components/Cards/RequestCard";
import RequestIconBtn from "../../components/buttons/RequestIconBtn";
import { FaUserCheck } from "react-icons/fa";
import { TbUserCancel } from "react-icons/tb";
import Requests from "../../components/Modals/Requests";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlockedRequests } from "../../store/Slices/BlockedRequestsSlice";
import { UnblockUserApi } from "../../ApiRequests";
import { showErrorAlert } from "../../utils/AlertMessage";
import AddingLoader from "../../components/Loaders/AddingLoader";
import PageLoader from "../../components/Loaders/PageLoader";

const BlockedRequest = () => {
  const [SearchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const BlockedUserState = useSelector((state) => state.BlockedUserState);
  const [ProcessLoading, setProcessLoading] = useState(false);

  const [SelectedId, setSelectedId] = useState("");

  useEffect(() => {
    dispatch(fetchBlockedRequests());
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Blocked Requests"}
          value={SearchText}
          setValue={setSearchText}
        />
        {BlockedUserState.loading ? (
          <div className="flex flex-1 justify-center items-center">
            <PageLoader />
          </div>
        ) : (
          BlockedUserState.data &&
          BlockedUserState.data.map((dt, i) => {
            return (
              <RequestCard
                Name={dt.name}
                KarubarName={dt.business_name}
                Location={dt.location}
                Image={"/images/store.png"}
                key={i}
              >
                {ProcessLoading && SelectedId === dt.mobile_number ? (
                  <div className="h-full justify-center items-center flex w-[169px] px-3">
                    <AddingLoader />
                  </div>
                ) : (
                  <RequestIconBtn
                    Icon={TbUserCancel}
                    Title={"Unblock"}
                    onClick={() => {
                      setSelectedId(dt.mobile_number);
                      setOpen(!open);
                    }}
                    Border="border-[#D9A300] border-[2px]"
                    Color="text-[#D9A300]"
                  />
                )}
              </RequestCard>
            );
          })
        )}
      </div>
      {open && (
        <Requests
          open={open}
          setOpen={setOpen}
          type={"unblock"}
          Loading={ProcessLoading}
          onSubmit={async () => {
            setProcessLoading(true);
            try {
              const response = await UnblockUserApi({
                mobile_number: SelectedId,
              });
              console.log(response);
              if (response.data.success) {
                showErrorAlert("User!", "User Successfully Unblocked!");
                dispatch(fetchBlockedRequests());
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

export default BlockedRequest;
