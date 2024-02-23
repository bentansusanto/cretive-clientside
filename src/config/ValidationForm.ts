import { DataCheckout } from "@/utils/types";
import * as Yup from "yup";

export const validationCheckout = Yup.object<DataCheckout>().shape({
  name: Yup.string().required("Nama harus diisi"),
  email: Yup.string().email("Email tidak valid").required("Email harus diisi"),
  phoneNumber: Yup.string().required("Nomor handphone harus diisi"),
  companyName: Yup.string().required("Nama perusahaan harus diisi"),
  industri: Yup.string().required("Industri perusahaan anda harus diisi"),
  needs: Yup.string().required("Kebutuhan website anda harus diisi"),
  prdLink: Yup.string(),
});

