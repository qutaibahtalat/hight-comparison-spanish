import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { Suspense } from "react";

// import StickyFooter from "@/components/StickyFooter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Comparación De Altura - Comparar Estaturas en Segundos",
  description:
    "HeightComparisonChart.com tiene una herramienta simple pero poderosa para comparar alturas con su pareja, hijos, mascotas, celebridades, personajes de ficción o incluso lugares famosos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="Q5vf4BwqS69WGAaE2QZF_ovxGAVtgW_Jdq6kC_8zY7M" />
        {`/* Microsoft Clarity */`}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nedsxhc991");`,
          }}
        />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LPQ1ZYFR1F"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LPQ1ZYFR1F');`,
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased` + " bg-[#F7F8FD]"}>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0">
              <CgSpinner size={50} className="animate-spin" />
            </div>
          }
        >
          <Header />
          <Providers>{children}</Providers>
          <Footer />
          {/* <StickyFooter /> */}
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
