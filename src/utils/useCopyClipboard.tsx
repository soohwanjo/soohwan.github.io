import React, { useState } from 'react';

// type onCopyFn = (text : string) => Promise<boolean>;

// export default function useCopyClipBoard(): [boolean, onCopyFn] {
//   const [isCopy, setIsCopy] = useState<boolean>(false);

//   const onCopy: onCopyFn = async (text : string) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setIsCopy(true);

//       return true;
//     } catch (error) {
//       console.error(error);
//       setIsCopy(false);

//       return false;
//     }
//   };

//   return [isCopy, onCopy];
// }

// export default function ClipboardCopy() {
//     const doCopy = (text : string) => {
//       // IE는 사용 불가, 크롬은 66버전 이상에서 사용 가능
//       if (navigator.clipboard) {
//         navigator.clipboard
//           .writeText(text)
//           .then(() => {
//             alert("클립보드에 복사되었습니다.");
//           })
//           .catch(() => {
//             alert("복사를 다시 시도해주세요.");
//           });
//       } else {
//         if (!document.queryCommandSupported("copy")) {
//           return alert("복사하기가 지원되지 않는 브라우저입니다.");
//         }
  
//         const textarea = document.createElement("textarea");
//         textarea.value = text;
//         textarea.style.top = 0;
//         textarea.style.left = 0;
//         textarea.style.position = "fixed";
  
//         // 흐름 4.
//         document.body.appendChild(textarea);
//         // focus() -> 사파리 브라우저 서포팅
//         textarea.focus();
//         // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
//         textarea.select();
//         // 흐름 5.
//         document.execCommand("copy");
//         // 흐름 6.
//         document.body.removeChild(textarea);
//         alert("클립보드에 복사되었습니다.");
//       }
//     };
  
//     return (
//       <button onClick={() => doCopy("복사할텍스트입니다!")}>복사하기</button>
//     );
// }

