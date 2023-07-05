import Image from 'next/image';

export const dynamic = 'force-dynamic'

export default function MainVideo() {
  return (
    <div style={{width:'100%',height:'100%'}}>
      <video autoPlay playsInline loop style={{width:'100%',height:'100%',objectFit:'cover'}}>
        <source src="/video/video1.mp4" type="video/mp4"/>
      </video>
      <div className="title title--main s-show">
        <h1 className="title__title showup">
          <span className="title__img">
            <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
              <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}>
                <Image alt="" width={1000} height={2000} src="/icon/icon_scroll_down.svg" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px'}}/>
              </span>
              <Image alt="결혼합니다." width={1000} height={2000} src="/icon/icon_scroll_down.svg" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}/>
            </span>
          </span>
        </h1>
        <p className="title__description showup">
          배동준 배진영
        </p>
        <p className="title__description showup">
          우리 결혼합니다.
        </p>
        <p className="title__description showup">
          광주 라페스타
        </p>
      </div>
      
      <span className="welcome__icon-down">
        <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
          <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}>
            <Image alt="" width={1000} height={2000} src="/icon/icon_scroll_down.svg" style={{display: 'block',maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px'}}/>
          </span>
          <Image alt="" width={1000} height={2000} src="/icon/icon_scroll_down.svg" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}/>
          <noscript></noscript>
        </span>
      </span>
    </div>
  );
};
