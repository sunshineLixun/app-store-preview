
export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string | undefined }; 
}) {
  return (
    <>
    {children}
    </>
  )

}