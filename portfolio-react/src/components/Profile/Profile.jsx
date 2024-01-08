import GitSvg from "@/assets/Icons/GitSvg.jsx";
import MailSvg from "@/assets/Icons/MailSvg.jsx";
import { useRef } from "react";

export function Profile() {
  const emailRef = useRef();
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("클립보드 복사에 실패하였습니다.");
    }
  };
  return (
    <>
      <div className="container">
        <div className="flex flex-row h-full items-stretch justify-between">
          <div className="justify-between ml-10 mt-10">
            <h1 className="text-5xl font-bold mt-5">
              안녕하세요! 이웅회입니다.
            </h1>
            <p className="py-6">안녕하세요. 개발자 지망생 이웅회 입니다!</p>
          </div>
          <div className="flex flex-col justify-center mr-10">
            <img
              src="http://127.0.0.1:8001/api/file/IMG_0138.jpg"
              className="w-48 rounded-full aspect-square object-cover m-2"
            />
            <div className="join justify-center">
              <a
                href={"https://github.com/3oH6un"}
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn join-item">
                  <GitSvg />
                </button>
              </a>
              <button
                className="btn join-item"
                onClick={() => handleCopyClipBoard(emailRef.current.innerText)}
              >
                <MailSvg />
                <p hidden={true} ref={emailRef}>
                  leewh0829@gmail.com
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
