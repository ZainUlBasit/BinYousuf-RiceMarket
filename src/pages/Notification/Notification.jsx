import React, { useEffect, useState } from "react";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import AddBtn from "../../components/buttons/AddBtn";
import { FaCheck, FaTimes } from "react-icons/fa";
import SuccessIcon from "../../components/NotificationItem/SuccessIcon";
import ErrorIcon from "../../components/NotificationItem/ErrorIcon";
import NotificationItem from "../../components/NotificationItem/NotificationItem";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifcationsAll } from "../../store/Slices/NotificationsSlice";

const Notification = () => {
  const [SearchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const NotificationState = useSelector((state) => state.NotificationState);
  useEffect(() => {
    dispatch(fetchNotifcationsAll());
  }, []);
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Notification"}
          value={SearchText}
          setValue={setSearchText}
          SearchBoxBlock={true}
        />

        {/* <div className="flex flex-col border-b-2 py-4 gap-y-4">
          <div className="pt-4 px-3 text-[#878787] font-[600] text-xl">
            Today
          </div>
          <NotificationItem
            type={1}
            desc={"Order no 12345 has been delivered"}
            date={moment(new Date()).format("DD MMMM YYYY")}
            border={true}
          />
          <NotificationItem
            type={0}
            desc={"Order no 12345 has been cancelled"}
            date={moment(new Date()).format("DD MMMM YYYY")}
            border={false}
          />
        </div> */}
        <div className="flex flex-col border-b-2 py-4 gap-y-4">
          {/* <div className="pt-4 px-3 text-[#878787] font-[600] text-xl font-inter">
            Yesterday
          </div> */}
          {NotificationState.data &&
            NotificationState.data.map((dt, i) => {
              return (
                <NotificationItem
                  type={dt.status}
                  desc={dt.description}
                  date={dt.notificationDate}
                  border={true}
                />
              );
            })}
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Notification;
