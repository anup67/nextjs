import "@styles/globals.css";
import { Children } from "react/cjs/react.production.min";

export const metadata = {
  title: "Promptophia",
  description: "Discover and share AI Prompts",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
          <main className="app">{Children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
