import '../styles/globals.css';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div id="root">
          <Header />
          <main>{children}</main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
