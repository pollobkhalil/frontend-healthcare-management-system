export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html >
      <body >
        RootLayout <br />
        {children}
        
        </body>
    </html>
  );
}