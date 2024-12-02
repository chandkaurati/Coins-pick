import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk publishable key to the .env.local file");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    publishableKey={PUBLISHABLE_KEY}
    afterSignOutUrl="/"
  >
    <App />
  </ClerkProvider>
);
