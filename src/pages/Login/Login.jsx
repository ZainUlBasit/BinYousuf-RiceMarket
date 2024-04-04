import React, { useState } from "react";
import { LoginWrapper } from "./Login.Styled";
import NotoSheaf from "../../assets/images/NotoSheaf.png";
import Overlay from "../../assets/images/overlay.png";
import Logo from "../../assets/images/logo.png";
import AuthInput from "../../components/inputs/AuthInput";
import { MdEmail, MdLock } from "react-icons/md";
import AuthBtn from "../../components/buttons/AuthBtn";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const imageCont = {
    hidden: { y: 150, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const loginCont = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <LoginWrapper variants={container} initial="hidden" animate="visible">
      <motion.img
        variants={imageCont}
        src={NotoSheaf}
        alt=""
        width={500}
        className="bottom-image"
      />
      <motion.img
        variants={imageCont}
        src={Overlay}
        alt=""
        width={500}
        className="top-image opacity-80"
      />
      <div className="flex w-full h-full justify-between z-10 mr-10 LoginContainerWrapper">
        <motion.div
          variants={item}
          className="flex p-10 font-sans text-4xl WelcomeText"
        >
          Welcome!
        </motion.div>
        {/* Conatiner Input */}
        <motion.div
          variants={loginCont}
          className="flex h-full justify-center items-center w-[50%] LoginContainer"
        >
          <div className="flex flex-col items-center gap-y-5 bg-[#fff9e9] h-fit py-10 px-[50px] rounded-[12px] shadow-custom">
            <img src={Logo} alt="" width={350} />
            <span className="text-3xl my-3">Admin Sign in</span>
            <div className="flex flex-col gap-y-4 mb-4">
              <AuthInput
                Type={"text"}
                Icon={MdEmail}
                Value={email}
                setValue={setEmail}
                placeholder={"Enter email..."}
              />
              <AuthInput
                Type={"password"}
                Icon={MdLock}
                Value={password}
                setValue={setPassword}
                placeholder={"*****************"}
              />
            </div>
            <AuthBtn Title={"Sign In"} onClick={() => navigate("/home")} />
          </div>
        </motion.div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
