import QueryProviders from "../providers/QueryProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html >
      <body >
        <QueryProviders>
          {children}
        </QueryProviders>
        
        
        </body>
    </html>
  );
}