import React, { useRef } from "react";
import ModalWrapper from "./ModalWrapper";
import ReceiptLogo from "../../assets/images/reciept_logo.png";
import ReceiptTable from "../Tables/ReceiptTable";
import ReceiptPDF from "../Reports/ReceiptReport";
import { PDFDownloadLink } from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const RecieptModal = ({ open, setOpen, onSubmit }) => {
  const pdfRef = useRef();

  const downloadPdf = (e) => {
    alert("clicked");
    const input = pdfRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4", true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 5;
        pdf.addImage(
          imgData,
          "PNG",
          imgX,
          imgY,
          imgWidth * ratio,
          imgHeight * ratio
        );
        pdf.save("invoice.pdf");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <div className="flex flex-col px-5 w-[750px]" ref={pdfRef}>
        <div className="flex justify-center items-center font-bold text-3xl border-b-black border-b-[3px] text-black py-5">
          Receipt
        </div>
        <div className="flex justify-between items-center pt-3">
          <img src={ReceiptLogo} alt="not found" className="w-[120px]" />
          <div>
            <div className="font-bold text-xl text-black">Receipt No 1</div>
            <div className="text-[#B5B5B5] text-lg">5/3/2024</div>
            <div className="text-[#B5B5B5] text-lg">12:05:17 PM</div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mb-4">
          <div className="font-bold text-black text-xl">
            Bin Yousuf - Rice Market
          </div>
          <div className="flex gap-x-1 text-[#8B8A8A]">
            <div className="font-bold">User: </div>
            <div className="">Admin</div>
          </div>
          <div className="flex gap-x-1 text-[#8B8A8A]">
            <div className="font-bold">Order No: </div>
            <div className="">12345</div>
          </div>
        </div>
        <div className="border-2 border-[#d9d9d9] rounded-lg">
          <ReceiptTable
            Data={[
              {
                desc: "Rice Kainaat",
                unit: "25 kg bag",
                qty: 2,
                price: 2500,
                total: 5000,
              },
              {
                desc: "Rice Kainaat",
                unit: "25 kg bag",
                qty: 2,
                price: 2500,
                total: 5000,
              },
              {
                desc: "Rice Kainaat",
                unit: "25 kg bag",
                qty: 2,
                price: 2500,
                total: 5000,
              },
            ]}
          />
        </div>

        <div className="flex justify-end text-black p-3">
          <div className="flex font-bold gap-x-1">
            Grand Total: <div>Rs. {(10000).toLocaleString()}</div>
          </div>
        </div>
        <div className="flex justify-start items-start text-[#8B8A8A]  gap-x-1">
          <div className="font-bold text-xl">Note:</div>
          <div className=" text-xl">
            Maal wasool krte waqt check karlen, daalen kharab ho jany ky bad
            wapis ya tabdeel nahi hongi.
          </div>
        </div>
        <div className="flex justify-center items-center py-5">
          {/* <PDFDownloadLink
            document={
              <ReceiptPDF
                receiptData={[
                  {
                    desc: "Rice Kainaat",
                    unit: "25 kg bag",
                    qty: 2,
                    price: 2500,
                    total: 5000,
                  },
                  {
                    desc: "Rice Kainaat",
                    unit: "25 kg bag",
                    qty: 2,
                    price: 2500,
                    total: 5000,
                  },
                  {
                    desc: "Rice Kainaat",
                    unit: "25 kg bag",
                    qty: 2,
                    price: 2500,
                    total: 5000,
                  },
                ]}
              />
            }
            fileName={`Receipt.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error: {error.message}</div>
              ) : (
              )
            }
          </PDFDownloadLink> */}
        </div>
      </div>
      <div className="flex justify-center w-full items-center py-5">
        <button
          className="text-white font-bold rounded-full bg-[#F8C21F] border-[#F8C21F] border-[3px] hover:bg-white hover:text-[#F8C21F] px-10 py-4 text-2xl transition-all duration-500 ease-in-out max-w-[200px]"
          onClick={downloadPdf}
        >
          Download
        </button>
      </div>
    </ModalWrapper>
  );
};

export default RecieptModal;
