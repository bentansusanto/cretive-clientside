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
      name: "Benny Tan Susanto",
      noRek: "0607992462"
  }
]