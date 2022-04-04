import 'components/scss/google-editor.scss';

import { useState } from 'react';
import { Expressions } from './contents/Expressions';
import { Insight } from './contents/Insight';
import { VideoClip } from './contents/VideoClip';

export const GoogleDocs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const contentsArr = [
    { title: "Insight", content: <Insight /> },
    { title: "Expressions", content: <Expressions /> },
    { title: "VideoClip / Article", content: <VideoClip /> }
  ];

  const selectTabHandler = (index) => {
    setCurrentTab(index);
  };

  return(
    <div className='googleEditor'>
      <h1>구글 닥스 에디터</h1>

      <div className='contents'>
        <div className="lecture">
          <ul className='textTabs'>
            {
              contentsArr.map((content, index) => {
                return(
                  <li 
                    className={currentTab === index ? "active" : ""}
                    key={index}
                    onClick={() => selectTabHandler(index)}
                  >
                    {content.title}
                  </li>
                )
              })
            }
          </ul>
          <article className="tabContents">{contentsArr[currentTab].content}</article>
        </div>

        <div className='editorWrap'>
          <div className='editorTab'>
            <a rel="noreferrer" href="https://docs.google.com/document/u/1/d/1lOvGxG2LOKKP4u-sMGR3_Nj1FIQSdMkKXk9GmzFBShg/edit?rm=embedded" target="_blank" className='button'>새 창</a>
          </div>
          <div className='editorIn'>
            <iframe rel="noreferrer" src="https://docs.google.com/document/u/1/d/1lOvGxG2LOKKP4u-sMGR3_Nj1FIQSdMkKXk9GmzFBShg/edit?rm=embedded" data-gtm-yt-inspected-1_19="true"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}