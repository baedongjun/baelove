'use client'

import ReactFullpage from "@fullpage/react-fullpage";
import Info from "@/components/Info";
import MainVideo from "@/components/MainVideo";
import PhotoList from "./PhotoList";

export default function FullpageJsExample() {
  const credits = {
    enabled: false,
  };

  return (
    <div className="App" >
      <ReactFullpage
        licenseKey={'7K647-OCLN6-KJJKH-WQJTJ-YWOLK'}
        scrollingSpeed = {1000}
        navigation
        debug={false}
        credits={credits}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            <div className="section" style={{height:'100%'}}>
              <MainVideo/>
            </div>
            <div className="section" style={{height:'100%'}}>
              <Info/>
            </div>
            <div className="section" style={{height:'100%'}}>
              <PhotoList/>
            </div>

          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};