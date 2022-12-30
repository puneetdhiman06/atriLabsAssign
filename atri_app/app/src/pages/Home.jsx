import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { UnorderedList } from "@atrilabs/react-component-manifests/src/manifests/UnorderedList/UnorderedList.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex4Cb, useDiv42Cb, useDiv96Cb, useDiv97Cb, useFlex7Cb, useDiv103Cb, useDiv101Cb, usereadArticleDivCb, useDiv133Cb, useDiv135Cb, useDiv136Cb, useDiv137Cb, useDiv102Cb, useFlex8Cb, useDiv112Cb, useleftCb, usemainCb, userightCb, useDiv121Cb, useDiv120Cb, useserviceCb, useDiv125Cb, useDiv122Cb, useDiv123Cb, useDiv124Cb, useDiv127Cb, useDiv116Cb, useFlex9Cb, useFlex10Cb, useFlex11Cb, useFlex12Cb, useDiv142Cb, useFlex13Cb, useDiv67Cb, useDiv145Cb, useDiv143Cb, useDiv144Cb, useFlex14Cb, useFlex16Cb, useDiv76Cb, useFlex17Cb, useDiv146Cb, useFlex18Cb, useFlex19Cb, useDiv147Cb, useDiv148Cb, useFlex22Cb, useDiv149Cb, useDiv79Cb, useDiv84Cb, useFlex23Cb, useDiv150Cb, useFlex24Cb, useFlex25Cb, useFlex26Cb, useFlex28Cb, useFlex29Cb, useFlex31Cb, useImage33Cb, useTextBox54Cb, useTextBox55Cb, useTextBox56Cb, useImage34Cb, useImage103Cb, useTextBox167Cb, useTextBox168Cb, useTextBox169Cb, useImage106Cb, useImage105Cb, useTextBox170Cb, useTextBox171Cb, useTextBox172Cb, useImage107Cb, useImage108Cb, useImage109Cb, useTextBox200Cb, useTextBox201Cb, useTextBox202Cb, useImage136Cb, useImage145Cb, useTextBox213Cb, useTextBox214Cb, useTextBox215Cb, useTextBox219Cb, useTextBox220Cb, useTextBox221Cb, useImage147Cb, useTextBox222Cb, useTextBox223Cb, useTextBox224Cb, useImage148Cb, useTextBox225Cb, useTextBox226Cb, useTextBox227Cb, useImage149Cb, useTextBox174Cb, useTextBox175Cb, useTextBox176Cb, useImage142Cb, useImage126Cb, useButton7Cb, useButton8Cb, useTextBox182Cb, useTextBox183Cb, useTextBox184Cb, usebuttonDownCb, useImage127Cb, useTextBox185Cb, useImage128Cb, useImage129Cb, useImage130Cb, useImage131Cb, useTextBox192Cb, useTextBox193Cb, useTextBox194Cb, useTextBox195Cb, useImage132Cb, useTextBox186Cb, useTextBox187Cb, useUnorderedList11Cb, useImage133Cb, useTextBox188Cb, useTextBox189Cb, useUnorderedList12Cb, useUnorderedList13Cb, useTextBox190Cb, useTextBox191Cb, useImage134Cb, useButton9Cb, useTextBox196Cb, useTextBox197Cb, useTextBox198Cb, useImage140Cb, useLink26Cb, useLink27Cb, useLink28Cb, useLink29Cb, useLink30Cb, useImage141Cb, useTextBox113Cb, useTextBox114Cb, useTextBox110Cb, useTextBox108Cb, useTextBox109Cb, useImage153Cb, useImage154Cb, useImage155Cb, useUnorderedList16Cb, useTextBox230Cb, useUnorderedList17Cb, useTextBox231Cb, useImage69Cb, useImage70Cb, useImage71Cb, useImage72Cb, useImage158Cb, useImage77Cb, useTextBox115Cb, useTextBox117Cb, useTextBox118Cb, useImage78Cb, useImage79Cb, useTextBox123Cb, useTextBox124Cb, useTextBox125Cb, useTextBox126Cb, useUnorderedList10Cb, useUnorderedList9Cb, useTextBox247Cb, useImage159Cb, useTextBox245Cb, useTextBox246Cb, useTextBox232Cb, useTextBox233Cb, useTextBox234Cb, useTextBox238Cb, useTextBox239Cb, useTextBox240Cb, useTextBox235Cb, useTextBox236Cb, useTextBox237Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Div42Props = useStore((state)=>state["Home"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Home"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Div96Props = useStore((state)=>state["Home"]["Div96"]);
const Div96IoProps = useIoStore((state)=>state["Home"]["Div96"]);
const Div96Cb = useDiv96Cb()
const Div97Props = useStore((state)=>state["Home"]["Div97"]);
const Div97IoProps = useIoStore((state)=>state["Home"]["Div97"]);
const Div97Cb = useDiv97Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Div103Props = useStore((state)=>state["Home"]["Div103"]);
const Div103IoProps = useIoStore((state)=>state["Home"]["Div103"]);
const Div103Cb = useDiv103Cb()
const Div101Props = useStore((state)=>state["Home"]["Div101"]);
const Div101IoProps = useIoStore((state)=>state["Home"]["Div101"]);
const Div101Cb = useDiv101Cb()
const readArticleDivProps = useStore((state)=>state["Home"]["readArticleDiv"]);
const readArticleDivIoProps = useIoStore((state)=>state["Home"]["readArticleDiv"]);
const readArticleDivCb = usereadArticleDivCb()
const Div133Props = useStore((state)=>state["Home"]["Div133"]);
const Div133IoProps = useIoStore((state)=>state["Home"]["Div133"]);
const Div133Cb = useDiv133Cb()
const Div135Props = useStore((state)=>state["Home"]["Div135"]);
const Div135IoProps = useIoStore((state)=>state["Home"]["Div135"]);
const Div135Cb = useDiv135Cb()
const Div136Props = useStore((state)=>state["Home"]["Div136"]);
const Div136IoProps = useIoStore((state)=>state["Home"]["Div136"]);
const Div136Cb = useDiv136Cb()
const Div137Props = useStore((state)=>state["Home"]["Div137"]);
const Div137IoProps = useIoStore((state)=>state["Home"]["Div137"]);
const Div137Cb = useDiv137Cb()
const Div102Props = useStore((state)=>state["Home"]["Div102"]);
const Div102IoProps = useIoStore((state)=>state["Home"]["Div102"]);
const Div102Cb = useDiv102Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Div112Props = useStore((state)=>state["Home"]["Div112"]);
const Div112IoProps = useIoStore((state)=>state["Home"]["Div112"]);
const Div112Cb = useDiv112Cb()
const leftProps = useStore((state)=>state["Home"]["left"]);
const leftIoProps = useIoStore((state)=>state["Home"]["left"]);
const leftCb = useleftCb()
const mainProps = useStore((state)=>state["Home"]["main"]);
const mainIoProps = useIoStore((state)=>state["Home"]["main"]);
const mainCb = usemainCb()
const rightProps = useStore((state)=>state["Home"]["right"]);
const rightIoProps = useIoStore((state)=>state["Home"]["right"]);
const rightCb = userightCb()
const Div121Props = useStore((state)=>state["Home"]["Div121"]);
const Div121IoProps = useIoStore((state)=>state["Home"]["Div121"]);
const Div121Cb = useDiv121Cb()
const Div120Props = useStore((state)=>state["Home"]["Div120"]);
const Div120IoProps = useIoStore((state)=>state["Home"]["Div120"]);
const Div120Cb = useDiv120Cb()
const serviceProps = useStore((state)=>state["Home"]["service"]);
const serviceIoProps = useIoStore((state)=>state["Home"]["service"]);
const serviceCb = useserviceCb()
const Div125Props = useStore((state)=>state["Home"]["Div125"]);
const Div125IoProps = useIoStore((state)=>state["Home"]["Div125"]);
const Div125Cb = useDiv125Cb()
const Div122Props = useStore((state)=>state["Home"]["Div122"]);
const Div122IoProps = useIoStore((state)=>state["Home"]["Div122"]);
const Div122Cb = useDiv122Cb()
const Div123Props = useStore((state)=>state["Home"]["Div123"]);
const Div123IoProps = useIoStore((state)=>state["Home"]["Div123"]);
const Div123Cb = useDiv123Cb()
const Div124Props = useStore((state)=>state["Home"]["Div124"]);
const Div124IoProps = useIoStore((state)=>state["Home"]["Div124"]);
const Div124Cb = useDiv124Cb()
const Div127Props = useStore((state)=>state["Home"]["Div127"]);
const Div127IoProps = useIoStore((state)=>state["Home"]["Div127"]);
const Div127Cb = useDiv127Cb()
const Div116Props = useStore((state)=>state["Home"]["Div116"]);
const Div116IoProps = useIoStore((state)=>state["Home"]["Div116"]);
const Div116Cb = useDiv116Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Div142Props = useStore((state)=>state["Home"]["Div142"]);
const Div142IoProps = useIoStore((state)=>state["Home"]["Div142"]);
const Div142Cb = useDiv142Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Div67Props = useStore((state)=>state["Home"]["Div67"]);
const Div67IoProps = useIoStore((state)=>state["Home"]["Div67"]);
const Div67Cb = useDiv67Cb()
const Div145Props = useStore((state)=>state["Home"]["Div145"]);
const Div145IoProps = useIoStore((state)=>state["Home"]["Div145"]);
const Div145Cb = useDiv145Cb()
const Div143Props = useStore((state)=>state["Home"]["Div143"]);
const Div143IoProps = useIoStore((state)=>state["Home"]["Div143"]);
const Div143Cb = useDiv143Cb()
const Div144Props = useStore((state)=>state["Home"]["Div144"]);
const Div144IoProps = useIoStore((state)=>state["Home"]["Div144"]);
const Div144Cb = useDiv144Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Div76Props = useStore((state)=>state["Home"]["Div76"]);
const Div76IoProps = useIoStore((state)=>state["Home"]["Div76"]);
const Div76Cb = useDiv76Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Div146Props = useStore((state)=>state["Home"]["Div146"]);
const Div146IoProps = useIoStore((state)=>state["Home"]["Div146"]);
const Div146Cb = useDiv146Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Div147Props = useStore((state)=>state["Home"]["Div147"]);
const Div147IoProps = useIoStore((state)=>state["Home"]["Div147"]);
const Div147Cb = useDiv147Cb()
const Div148Props = useStore((state)=>state["Home"]["Div148"]);
const Div148IoProps = useIoStore((state)=>state["Home"]["Div148"]);
const Div148Cb = useDiv148Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Div149Props = useStore((state)=>state["Home"]["Div149"]);
const Div149IoProps = useIoStore((state)=>state["Home"]["Div149"]);
const Div149Cb = useDiv149Cb()
const Div79Props = useStore((state)=>state["Home"]["Div79"]);
const Div79IoProps = useIoStore((state)=>state["Home"]["Div79"]);
const Div79Cb = useDiv79Cb()
const Div84Props = useStore((state)=>state["Home"]["Div84"]);
const Div84IoProps = useIoStore((state)=>state["Home"]["Div84"]);
const Div84Cb = useDiv84Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Div150Props = useStore((state)=>state["Home"]["Div150"]);
const Div150IoProps = useIoStore((state)=>state["Home"]["Div150"]);
const Div150Cb = useDiv150Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const Image103Props = useStore((state)=>state["Home"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["Home"]["Image103"]);
const Image103Cb = useImage103Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Image106Props = useStore((state)=>state["Home"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["Home"]["Image106"]);
const Image106Cb = useImage106Cb()
const Image105Props = useStore((state)=>state["Home"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["Home"]["Image105"]);
const Image105Cb = useImage105Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const Image107Props = useStore((state)=>state["Home"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Home"]["Image107"]);
const Image107Cb = useImage107Cb()
const Image108Props = useStore((state)=>state["Home"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["Home"]["Image108"]);
const Image108Cb = useImage108Cb()
const Image109Props = useStore((state)=>state["Home"]["Image109"]);
const Image109IoProps = useIoStore((state)=>state["Home"]["Image109"]);
const Image109Cb = useImage109Cb()
const TextBox200Props = useStore((state)=>state["Home"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Home"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["Home"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Home"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["Home"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["Home"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const Image136Props = useStore((state)=>state["Home"]["Image136"]);
const Image136IoProps = useIoStore((state)=>state["Home"]["Image136"]);
const Image136Cb = useImage136Cb()
const Image145Props = useStore((state)=>state["Home"]["Image145"]);
const Image145IoProps = useIoStore((state)=>state["Home"]["Image145"]);
const Image145Cb = useImage145Cb()
const TextBox213Props = useStore((state)=>state["Home"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Home"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox214Props = useStore((state)=>state["Home"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Home"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const TextBox215Props = useStore((state)=>state["Home"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Home"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const TextBox219Props = useStore((state)=>state["Home"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Home"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox220Props = useStore((state)=>state["Home"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Home"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox221Props = useStore((state)=>state["Home"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Home"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const Image147Props = useStore((state)=>state["Home"]["Image147"]);
const Image147IoProps = useIoStore((state)=>state["Home"]["Image147"]);
const Image147Cb = useImage147Cb()
const TextBox222Props = useStore((state)=>state["Home"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Home"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox223Props = useStore((state)=>state["Home"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Home"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const TextBox224Props = useStore((state)=>state["Home"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Home"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const Image148Props = useStore((state)=>state["Home"]["Image148"]);
const Image148IoProps = useIoStore((state)=>state["Home"]["Image148"]);
const Image148Cb = useImage148Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox227Props = useStore((state)=>state["Home"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Home"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const Image149Props = useStore((state)=>state["Home"]["Image149"]);
const Image149IoProps = useIoStore((state)=>state["Home"]["Image149"]);
const Image149Cb = useImage149Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const Image142Props = useStore((state)=>state["Home"]["Image142"]);
const Image142IoProps = useIoStore((state)=>state["Home"]["Image142"]);
const Image142Cb = useImage142Cb()
const Image126Props = useStore((state)=>state["Home"]["Image126"]);
const Image126IoProps = useIoStore((state)=>state["Home"]["Image126"]);
const Image126Cb = useImage126Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const TextBox182Props = useStore((state)=>state["Home"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Home"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox183Props = useStore((state)=>state["Home"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["Home"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["Home"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["Home"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const buttonDownProps = useStore((state)=>state["Home"]["buttonDown"]);
const buttonDownIoProps = useIoStore((state)=>state["Home"]["buttonDown"]);
const buttonDownCb = usebuttonDownCb()
const Image127Props = useStore((state)=>state["Home"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["Home"]["Image127"]);
const Image127Cb = useImage127Cb()
const TextBox185Props = useStore((state)=>state["Home"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["Home"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const Image128Props = useStore((state)=>state["Home"]["Image128"]);
const Image128IoProps = useIoStore((state)=>state["Home"]["Image128"]);
const Image128Cb = useImage128Cb()
const Image129Props = useStore((state)=>state["Home"]["Image129"]);
const Image129IoProps = useIoStore((state)=>state["Home"]["Image129"]);
const Image129Cb = useImage129Cb()
const Image130Props = useStore((state)=>state["Home"]["Image130"]);
const Image130IoProps = useIoStore((state)=>state["Home"]["Image130"]);
const Image130Cb = useImage130Cb()
const Image131Props = useStore((state)=>state["Home"]["Image131"]);
const Image131IoProps = useIoStore((state)=>state["Home"]["Image131"]);
const Image131Cb = useImage131Cb()
const TextBox192Props = useStore((state)=>state["Home"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Home"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["Home"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["Home"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const TextBox194Props = useStore((state)=>state["Home"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["Home"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const TextBox195Props = useStore((state)=>state["Home"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["Home"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const Image132Props = useStore((state)=>state["Home"]["Image132"]);
const Image132IoProps = useIoStore((state)=>state["Home"]["Image132"]);
const Image132Cb = useImage132Cb()
const TextBox186Props = useStore((state)=>state["Home"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["Home"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const TextBox187Props = useStore((state)=>state["Home"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["Home"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const UnorderedList11Props = useStore((state)=>state["Home"]["UnorderedList11"]);
const UnorderedList11IoProps = useIoStore((state)=>state["Home"]["UnorderedList11"]);
const UnorderedList11Cb = useUnorderedList11Cb()
const Image133Props = useStore((state)=>state["Home"]["Image133"]);
const Image133IoProps = useIoStore((state)=>state["Home"]["Image133"]);
const Image133Cb = useImage133Cb()
const TextBox188Props = useStore((state)=>state["Home"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["Home"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["Home"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Home"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const UnorderedList12Props = useStore((state)=>state["Home"]["UnorderedList12"]);
const UnorderedList12IoProps = useIoStore((state)=>state["Home"]["UnorderedList12"]);
const UnorderedList12Cb = useUnorderedList12Cb()
const UnorderedList13Props = useStore((state)=>state["Home"]["UnorderedList13"]);
const UnorderedList13IoProps = useIoStore((state)=>state["Home"]["UnorderedList13"]);
const UnorderedList13Cb = useUnorderedList13Cb()
const TextBox190Props = useStore((state)=>state["Home"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["Home"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox191Props = useStore((state)=>state["Home"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const Image134Props = useStore((state)=>state["Home"]["Image134"]);
const Image134IoProps = useIoStore((state)=>state["Home"]["Image134"]);
const Image134Cb = useImage134Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const TextBox196Props = useStore((state)=>state["Home"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["Home"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const TextBox197Props = useStore((state)=>state["Home"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["Home"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["Home"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["Home"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const Image140Props = useStore((state)=>state["Home"]["Image140"]);
const Image140IoProps = useIoStore((state)=>state["Home"]["Image140"]);
const Image140Cb = useImage140Cb()
const Link26Props = useStore((state)=>state["Home"]["Link26"]);
const Link26IoProps = useIoStore((state)=>state["Home"]["Link26"]);
const Link26Cb = useLink26Cb()
const Link27Props = useStore((state)=>state["Home"]["Link27"]);
const Link27IoProps = useIoStore((state)=>state["Home"]["Link27"]);
const Link27Cb = useLink27Cb()
const Link28Props = useStore((state)=>state["Home"]["Link28"]);
const Link28IoProps = useIoStore((state)=>state["Home"]["Link28"]);
const Link28Cb = useLink28Cb()
const Link29Props = useStore((state)=>state["Home"]["Link29"]);
const Link29IoProps = useIoStore((state)=>state["Home"]["Link29"]);
const Link29Cb = useLink29Cb()
const Link30Props = useStore((state)=>state["Home"]["Link30"]);
const Link30IoProps = useIoStore((state)=>state["Home"]["Link30"]);
const Link30Cb = useLink30Cb()
const Image141Props = useStore((state)=>state["Home"]["Image141"]);
const Image141IoProps = useIoStore((state)=>state["Home"]["Image141"]);
const Image141Cb = useImage141Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const Image153Props = useStore((state)=>state["Home"]["Image153"]);
const Image153IoProps = useIoStore((state)=>state["Home"]["Image153"]);
const Image153Cb = useImage153Cb()
const Image154Props = useStore((state)=>state["Home"]["Image154"]);
const Image154IoProps = useIoStore((state)=>state["Home"]["Image154"]);
const Image154Cb = useImage154Cb()
const Image155Props = useStore((state)=>state["Home"]["Image155"]);
const Image155IoProps = useIoStore((state)=>state["Home"]["Image155"]);
const Image155Cb = useImage155Cb()
const UnorderedList16Props = useStore((state)=>state["Home"]["UnorderedList16"]);
const UnorderedList16IoProps = useIoStore((state)=>state["Home"]["UnorderedList16"]);
const UnorderedList16Cb = useUnorderedList16Cb()
const TextBox230Props = useStore((state)=>state["Home"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["Home"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const UnorderedList17Props = useStore((state)=>state["Home"]["UnorderedList17"]);
const UnorderedList17IoProps = useIoStore((state)=>state["Home"]["UnorderedList17"]);
const UnorderedList17Cb = useUnorderedList17Cb()
const TextBox231Props = useStore((state)=>state["Home"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["Home"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const Image70Props = useStore((state)=>state["Home"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Home"]["Image70"]);
const Image70Cb = useImage70Cb()
const Image71Props = useStore((state)=>state["Home"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home"]["Image71"]);
const Image71Cb = useImage71Cb()
const Image72Props = useStore((state)=>state["Home"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["Home"]["Image72"]);
const Image72Cb = useImage72Cb()
const Image158Props = useStore((state)=>state["Home"]["Image158"]);
const Image158IoProps = useIoStore((state)=>state["Home"]["Image158"]);
const Image158Cb = useImage158Cb()
const Image77Props = useStore((state)=>state["Home"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Home"]["Image77"]);
const Image77Cb = useImage77Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const Image78Props = useStore((state)=>state["Home"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Home"]["Image78"]);
const Image78Cb = useImage78Cb()
const Image79Props = useStore((state)=>state["Home"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["Home"]["Image79"]);
const Image79Cb = useImage79Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const UnorderedList10Props = useStore((state)=>state["Home"]["UnorderedList10"]);
const UnorderedList10IoProps = useIoStore((state)=>state["Home"]["UnorderedList10"]);
const UnorderedList10Cb = useUnorderedList10Cb()
const UnorderedList9Props = useStore((state)=>state["Home"]["UnorderedList9"]);
const UnorderedList9IoProps = useIoStore((state)=>state["Home"]["UnorderedList9"]);
const UnorderedList9Cb = useUnorderedList9Cb()
const TextBox247Props = useStore((state)=>state["Home"]["TextBox247"]);
const TextBox247IoProps = useIoStore((state)=>state["Home"]["TextBox247"]);
const TextBox247Cb = useTextBox247Cb()
const Image159Props = useStore((state)=>state["Home"]["Image159"]);
const Image159IoProps = useIoStore((state)=>state["Home"]["Image159"]);
const Image159Cb = useImage159Cb()
const TextBox245Props = useStore((state)=>state["Home"]["TextBox245"]);
const TextBox245IoProps = useIoStore((state)=>state["Home"]["TextBox245"]);
const TextBox245Cb = useTextBox245Cb()
const TextBox246Props = useStore((state)=>state["Home"]["TextBox246"]);
const TextBox246IoProps = useIoStore((state)=>state["Home"]["TextBox246"]);
const TextBox246Cb = useTextBox246Cb()
const TextBox232Props = useStore((state)=>state["Home"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["Home"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const TextBox233Props = useStore((state)=>state["Home"]["TextBox233"]);
const TextBox233IoProps = useIoStore((state)=>state["Home"]["TextBox233"]);
const TextBox233Cb = useTextBox233Cb()
const TextBox234Props = useStore((state)=>state["Home"]["TextBox234"]);
const TextBox234IoProps = useIoStore((state)=>state["Home"]["TextBox234"]);
const TextBox234Cb = useTextBox234Cb()
const TextBox238Props = useStore((state)=>state["Home"]["TextBox238"]);
const TextBox238IoProps = useIoStore((state)=>state["Home"]["TextBox238"]);
const TextBox238Cb = useTextBox238Cb()
const TextBox239Props = useStore((state)=>state["Home"]["TextBox239"]);
const TextBox239IoProps = useIoStore((state)=>state["Home"]["TextBox239"]);
const TextBox239Cb = useTextBox239Cb()
const TextBox240Props = useStore((state)=>state["Home"]["TextBox240"]);
const TextBox240IoProps = useIoStore((state)=>state["Home"]["TextBox240"]);
const TextBox240Cb = useTextBox240Cb()
const TextBox235Props = useStore((state)=>state["Home"]["TextBox235"]);
const TextBox235IoProps = useIoStore((state)=>state["Home"]["TextBox235"]);
const TextBox235Cb = useTextBox235Cb()
const TextBox236Props = useStore((state)=>state["Home"]["TextBox236"]);
const TextBox236IoProps = useIoStore((state)=>state["Home"]["TextBox236"]);
const TextBox236Cb = useTextBox236Cb()
const TextBox237Props = useStore((state)=>state["Home"]["TextBox237"]);
const TextBox237IoProps = useIoStore((state)=>state["Home"]["TextBox237"]);
const TextBox237Cb = useTextBox237Cb()

  return (<>
  <Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Div className="p-Home Div112 bpt" {...Div112Props} {...Div112Cb} {...Div112IoProps}>
<Div className="p-Home Div116 bpt" {...Div116Props} {...Div116Cb} {...Div116IoProps}>
<Flex className="p-Home Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Image className="p-Home Image140 bpt" {...Image140Props} {...Image140Cb} {...Image140IoProps}/>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Link className="p-Home Link26 bpt" {...Link26Props} {...Link26Cb} {...Link26IoProps}/>
<Link className="p-Home Link27 bpt" {...Link27Props} {...Link27Cb} {...Link27IoProps}/>
<Link className="p-Home Link28 bpt" {...Link28Props} {...Link28Cb} {...Link28IoProps}/>
<Link className="p-Home Link29 bpt" {...Link29Props} {...Link29Cb} {...Link29IoProps}/>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Link className="p-Home Link30 bpt" {...Link30Props} {...Link30Cb} {...Link30IoProps}/>
<Image className="p-Home Image141 bpt" {...Image141Props} {...Image141Cb} {...Image141IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home left bpt" {...leftProps} {...leftCb} {...leftIoProps}>
<TextBox className="p-Home TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<TextBox className="p-Home TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<TextBox className="p-Home TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
<Div className="p-Home buttonDown bpt" {...buttonDownProps} {...buttonDownCb} {...buttonDownIoProps}/>
<Image className="p-Home Image126 bpt" {...Image126Props} {...Image126Cb} {...Image126IoProps}/>
</Div>
<Div className="p-Home main bpt" {...mainProps} {...mainCb} {...mainIoProps}>
<Div className="p-Home right bpt" {...rightProps} {...rightCb} {...rightIoProps}>
<Image className="p-Home Image127 bpt" {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
</Div>
</Div>
<Div className="p-Home Div121 bpt" {...Div121Props} {...Div121Cb} {...Div121IoProps}>
<TextBox className="p-Home TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<Div className="p-Home Div120 bpt" {...Div120Props} {...Div120Cb} {...Div120IoProps}>
<Image className="p-Home Image130 bpt" {...Image130Props} {...Image130Cb} {...Image130IoProps}/>
<Image className="p-Home Image129 bpt" {...Image129Props} {...Image129Cb} {...Image129IoProps}/>
<Image className="p-Home Image128 bpt" {...Image128Props} {...Image128Cb} {...Image128IoProps}/>
<Image className="p-Home Image131 bpt" {...Image131Props} {...Image131Cb} {...Image131IoProps}/>
</Div>
</Div>
<Div className="p-Home service bpt" {...serviceProps} {...serviceCb} {...serviceIoProps}>
<TextBox className="p-Home TextBox195 bpt" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
<TextBox className="p-Home TextBox194 bpt" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
<TextBox className="p-Home TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
<TextBox className="p-Home TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<Div className="p-Home Div125 bpt" {...Div125Props} {...Div125Cb} {...Div125IoProps}>
<Div className="p-Home Div124 bpt" {...Div124Props} {...Div124Cb} {...Div124IoProps}>
<Image className="p-Home Image134 bpt" {...Image134Props} {...Image134Cb} {...Image134IoProps}/>
<TextBox className="p-Home TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<TextBox className="p-Home TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<UnorderedList className="p-Home UnorderedList13 bpt" {...UnorderedList13Props} {...UnorderedList13Cb} {...UnorderedList13IoProps}/>
</Div>
<Div className="p-Home Div123 bpt" {...Div123Props} {...Div123Cb} {...Div123IoProps}>
<Image className="p-Home Image133 bpt" {...Image133Props} {...Image133Cb} {...Image133IoProps}/>
<TextBox className="p-Home TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<TextBox className="p-Home TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<UnorderedList className="p-Home UnorderedList12 bpt" {...UnorderedList12Props} {...UnorderedList12Cb} {...UnorderedList12IoProps}/>
</Div>
<Div className="p-Home Div122 bpt" {...Div122Props} {...Div122Cb} {...Div122IoProps}>
<Image className="p-Home Image132 bpt" {...Image132Props} {...Image132Cb} {...Image132IoProps}/>
<TextBox className="p-Home TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
<TextBox className="p-Home TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
<UnorderedList className="p-Home UnorderedList11 bpt" {...UnorderedList11Props} {...UnorderedList11Cb} {...UnorderedList11IoProps}/>
</Div>
</Div>
</Div>
<Div className="p-Home Div127 bpt" {...Div127Props} {...Div127Cb} {...Div127IoProps}>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<TextBox className="p-Home TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
<TextBox className="p-Home TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
<TextBox className="p-Home TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
</Div>
</Div>
</Flex>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Div className="p-Home Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Div>
<Div className="p-Home Div96 bpt" {...Div96Props} {...Div96Cb} {...Div96IoProps}>
<Image className="p-Home Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<Image className="p-Home Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
</Div>
<Div className="p-Home Div97 bpt" {...Div97Props} {...Div97Cb} {...Div97IoProps}>
<Image className="p-Home Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<Image className="p-Home Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Div className="p-Home Div103 bpt" {...Div103Props} {...Div103Cb} {...Div103IoProps}>
<Div className="p-Home Div101 bpt" {...Div101Props} {...Div101Cb} {...Div101IoProps}>
<Image className="p-Home Image109 bpt" {...Image109Props} {...Image109Cb} {...Image109IoProps}/>
<Image className="p-Home Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
<Div className="p-Home readArticleDiv bpt" {...readArticleDivProps} {...readArticleDivCb} {...readArticleDivIoProps}>
<TextBox className="p-Home TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox className="p-Home TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
<TextBox className="p-Home TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<Image className="p-Home Image136 bpt" {...Image136Props} {...Image136Cb} {...Image136IoProps}/>
</Div>
<Div className="p-Home Div133 bpt" {...Div133Props} {...Div133Cb} {...Div133IoProps}>
<TextBox className="p-Home TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<TextBox className="p-Home TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
<TextBox className="p-Home TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<Image className="p-Home Image145 bpt" {...Image145Props} {...Image145Cb} {...Image145IoProps}/>
</Div>
<Div className="p-Home Div135 bpt" {...Div135Props} {...Div135Cb} {...Div135IoProps}>
<TextBox className="p-Home TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<TextBox className="p-Home TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<TextBox className="p-Home TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<Image className="p-Home Image147 bpt" {...Image147Props} {...Image147Cb} {...Image147IoProps}/>
</Div>
<Div className="p-Home Div136 bpt" {...Div136Props} {...Div136Cb} {...Div136IoProps}>
<TextBox className="p-Home TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<TextBox className="p-Home TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
<TextBox className="p-Home TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
<Image className="p-Home Image148 bpt" {...Image148Props} {...Image148Cb} {...Image148IoProps}/>
</Div>
<Div className="p-Home Div137 bpt" {...Div137Props} {...Div137Cb} {...Div137IoProps}>
<TextBox className="p-Home TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox className="p-Home TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<TextBox className="p-Home TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
<Image className="p-Home Image149 bpt" {...Image149Props} {...Image149Cb} {...Image149IoProps}/>
</Div>
</Div>
<Div className="p-Home Div102 bpt" {...Div102Props} {...Div102Cb} {...Div102IoProps}>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<Image className="p-Home Image142 bpt" {...Image142Props} {...Image142Cb} {...Image142IoProps}/>
</Div>
</Div>
</Flex>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Div className="p-Home Div142 bpt" {...Div142Props} {...Div142Cb} {...Div142IoProps}>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Div className="p-Home Div67 bpt" {...Div67Props} {...Div67Cb} {...Div67IoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
</Div>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Flex>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Image className="p-Home Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
<Image className="p-Home Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image className="p-Home Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<Image className="p-Home Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div145 bpt" {...Div145Props} {...Div145Cb} {...Div145IoProps}>
<Div className="p-Home Div143 bpt" {...Div143Props} {...Div143Cb} {...Div143IoProps}>
<TextBox className="p-Home TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
<UnorderedList className="p-Home UnorderedList16 bpt" {...UnorderedList16Props} {...UnorderedList16Cb} {...UnorderedList16IoProps}/>
<Image className="p-Home Image155 bpt" {...Image155Props} {...Image155Cb} {...Image155IoProps}/>
<Image className="p-Home Image154 bpt" {...Image154Props} {...Image154Cb} {...Image154IoProps}/>
<Image className="p-Home Image153 bpt" {...Image153Props} {...Image153Cb} {...Image153IoProps}/>
</Div>
<Div className="p-Home Div144 bpt" {...Div144Props} {...Div144Cb} {...Div144IoProps}>
<TextBox className="p-Home TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
<UnorderedList className="p-Home UnorderedList17 bpt" {...UnorderedList17Props} {...UnorderedList17Cb} {...UnorderedList17IoProps}/>
</Div>
</Div>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<Div className="p-Home Div76 bpt" {...Div76Props} {...Div76Cb} {...Div76IoProps}>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Image className="p-Home Image158 bpt" {...Image158Props} {...Image158Cb} {...Image158IoProps}/>
<Div className="p-Home Div146 bpt" {...Div146Props} {...Div146Cb} {...Div146IoProps}>
<Image className="p-Home Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Div className="p-Home Div147 bpt" {...Div147Props} {...Div147Cb} {...Div147IoProps}>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
</Div>
<Div className="p-Home Div148 bpt" {...Div148Props} {...Div148Cb} {...Div148IoProps}>
<Image className="p-Home Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
<Image className="p-Home Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
</Div>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
</Div>
</Flex>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Div className="p-Home Div149 bpt" {...Div149Props} {...Div149Cb} {...Div149IoProps}>
<Div className="p-Home Div79 bpt" {...Div79Props} {...Div79Cb} {...Div79IoProps}>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<UnorderedList className="p-Home UnorderedList9 bpt" {...UnorderedList9Props} {...UnorderedList9Cb} {...UnorderedList9IoProps}/>
<UnorderedList className="p-Home UnorderedList10 bpt" {...UnorderedList10Props} {...UnorderedList10Cb} {...UnorderedList10IoProps}/>
</Flex>
<Div className="p-Home Div84 bpt" {...Div84Props} {...Div84Cb} {...Div84IoProps}>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
</Div>
</Div>
<Div className="p-Home Div150 bpt" {...Div150Props} {...Div150Cb} {...Div150IoProps}>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Image className="p-Home Image159 bpt" {...Image159Props} {...Image159Cb} {...Image159IoProps}/>
<TextBox className="p-Home TextBox245 bpt" {...TextBox245Props} {...TextBox245Cb} {...TextBox245IoProps}/>
<TextBox className="p-Home TextBox246 bpt" {...TextBox246Props} {...TextBox246Cb} {...TextBox246IoProps}/>
</Flex>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox className="p-Home TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
<TextBox className="p-Home TextBox233 bpt" {...TextBox233Props} {...TextBox233Cb} {...TextBox233IoProps}/>
<TextBox className="p-Home TextBox234 bpt" {...TextBox234Props} {...TextBox234Cb} {...TextBox234IoProps}/>
</Flex>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<TextBox className="p-Home TextBox235 bpt" {...TextBox235Props} {...TextBox235Cb} {...TextBox235IoProps}/>
<TextBox className="p-Home TextBox236 bpt" {...TextBox236Props} {...TextBox236Cb} {...TextBox236IoProps}/>
<TextBox className="p-Home TextBox237 bpt" {...TextBox237Props} {...TextBox237Cb} {...TextBox237IoProps}/>
</Flex>
<Flex className="p-Home Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<TextBox className="p-Home TextBox238 bpt" {...TextBox238Props} {...TextBox238Cb} {...TextBox238IoProps}/>
<TextBox className="p-Home TextBox239 bpt" {...TextBox239Props} {...TextBox239Cb} {...TextBox239IoProps}/>
<TextBox className="p-Home TextBox240 bpt" {...TextBox240Props} {...TextBox240Cb} {...TextBox240IoProps}/>
</Flex>
</Flex>
</Flex>
<TextBox className="p-Home TextBox247 bpt" {...TextBox247Props} {...TextBox247Cb} {...TextBox247IoProps}/>
</Div>
</Div>
</Flex>
  </>);
}
