export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-[#8feffc] to-[#4299e1]">
      {children}
    </div>
  );
}
