import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TertiaryButton } from "./index";

interface IBackButton {
  url?: string;
  goBack?: () => void;
}

function BackButton({ url, goBack }: IBackButton) {
  const nav = useNavigate();
  const goBackFn = () => {
    if (goBack) return goBack();
    if (!url) return nav(-1);
    return nav(url);
  };
  return (
    <TertiaryButton
      data-id="goBack"
      onClick={goBackFn}
      className="margin-0 padding-0 px-color-text-primary"
    >
      <ArrowBackIos />
    </TertiaryButton>
  );
}

export default BackButton;
