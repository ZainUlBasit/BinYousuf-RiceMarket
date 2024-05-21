import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import ReceiptTable from "../Tables/ReceiptTable";
import ReceiptLogo from "../../assets/images/reciept_logo.png";

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  receiptHeader: {
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 3,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  logo: {
    width: 120,
    marginBottom: 20,
  },
  receiptInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  receiptInfoText: {
    fontSize: 16,
  },
});

// Define the component for the PDF document
const ReceiptPDF = ({ receiptData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.receiptHeader}>Receipt</Text>
          <View style={styles.receiptInfo}>
            <Image src={ReceiptLogo} style={styles.logo} />
            <View>
              <Text style={styles.receiptInfoText}>Receipt No 1</Text>
              <Text style={styles.receiptInfoText}>5/3/2024</Text>
              <Text style={styles.receiptInfoText}>12:05:17 PM</Text>
            </View>
          </View>
          <Text style={styles.receiptInfoText}>Bin Yousuf - Rice Market</Text>
          <Text style={styles.receiptInfoText}>User: Admin</Text>
          <Text style={styles.receiptInfoText}>Order No: 12345</Text>
        </View>
        <View style={styles.section}>
          <ReceiptTable Data={receiptData} />
        </View>
        <View style={styles.section}>
          <Text style={styles.receiptInfoText}>Grand Total: Rs. 10,000</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.receiptInfoText}>
            Note: Maal wasool krte waqt check karlen, daalen kharab ho jany ky
            bad wapis ya tabdeel nahi hongi.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.receiptInfoText}>Download</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReceiptPDF;
