"use client"

export default function HomePage({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex min-h-screen w-full text-text-color">
          <main className=" w-full py-3 px-3 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
