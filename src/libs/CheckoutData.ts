import { CheckoutProps, PaymentMethod } from "@/utils/types";
import { generateCustomId } from "@/config/GenerateId";
export const dataCheckout: CheckoutProps = {
  title: "Checkout Packages",
  description: "Yuk, cek domainmu sekarang dan pilih paket website yang anda perlukan. ",
};

export const paymentMethod:PaymentMethod[] = [
  {
      id: generateCustomId(),
      bankName: "BNI",
      nameOwner: "Benny Tan Susanto",
      noRek: "0607992462"
  },
  {
      id: generateCustomId(),
      bankName: "DANA",
      nameOwner: "Benny Tan Susanto",
      noRek: "089604276162"
  }
]