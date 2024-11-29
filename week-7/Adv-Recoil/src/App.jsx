import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { jobAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./store/atoms";

function App() {

  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const messageAtomCount = useRecoilValue(messageAtom)
  const totalnotificationCount = useRecoilValue(totalNotificationSelector)


  return (
    <div>
      <button>Home </button>

      <button>
        My Networks (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messaging ({messageAtomCount})</button>
      <button>Notification ({notificationAtomCount}) </button>

      <button>Me({totalnotificationCount})</button>
    </div>
  );
}

export default App;
