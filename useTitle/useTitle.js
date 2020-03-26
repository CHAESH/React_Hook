import { useEffect, useRef } from "react";

export const useTitle = intialTitle => {
  const [title, setTitle] = useState(intialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
