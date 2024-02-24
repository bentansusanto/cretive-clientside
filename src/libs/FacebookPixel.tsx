import { useRouter } from "next/router";
import { useEffect } from "react";

const FacebookPixel = () => {
  const router = useRouter();
  const fbPixel: string = process.env.FACEBOOK_PIXEL || "2732499000382696";

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        // Memasukkan kode HTML dengan fbq di dalam fungsi ini
        const script = document.createElement("script");
        script.innerHTML = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            ${ReactPixel.init(fbPixel)}
        `;
        // Tambahkan elemen script ke dalam body
        document.body.appendChild(script);

        // Membersihkan efek
        return () => {
            // Hapus elemen script saat komponen dibersihkan
            document.body.removeChild(script);
        };
      }); 
  }, [fbPixel]);

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(fbPixel);
        const handleRouteChange = () => {
          ReactPixel.pageView();
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
          router.events.off("routeChangeComplete", handleRouteChange);
        };
      });
  }, [router, fbPixel]);

  // Function to track Purchase event
  const trackPurchase = ( value:number, currency:string) => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.track("Purchase", { value, currency });
      });
  };
  return trackPurchase;
};

export default FacebookPixel;



