import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student LMS - Learning Management System',
  description: 'A comprehensive learning management system for students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/_next/static/css/app/globals.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
