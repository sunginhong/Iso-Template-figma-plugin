import React, { MouseEvent, useRef, useState } from 'react';
import { Link, Route, Routes,BrowserRouter as Router } from "react-router-dom"
import SideMenuItem from './components/SideMenuItem';
import SideMenuTitle from './components/SideMenuTitle';
import SideSubMenuItem from './components/SideSubMenuItem';
import Page00 from './pages/page00';
import Page01 from './pages/page01';
import Page02 from './pages/page02';
import TestPage from './pages/AnimationResources/TestPage'; 
import AccordionPage from './pages/AnimationResources/AccordionPage';
import BottomSheetPage from './pages/AnimationResources/BottomSheetPage';
import PopUpPage from './pages/AnimationResources/PopUpPage';
import FocusBubblePage from './pages/AnimationResources/FocusBubblePage';
import PopOverPage from './pages/AnimationResources/PopOverPage';

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [selectedSubIndex, setSelectedSubIndex] = useState<number | null>(-1);
  const contentsRef = useRef<HTMLDivElement>(null);

  let tabContents = [
    { id: 0, title: "Easing", page: <Page00/> },
    { id: 1, title: "Haptics", page: <Page01/> },
    { id: 2, title: "Interaction Guides", page: <Page02/> },
  ];

  let resoucesContents = [
    { id: 0, title: "Accordion", page: <AccordionPage/> },
    { id: 1, title: "Bottom Sheet", page: <BottomSheetPage/> },
    { id: 2, title: "Popup", page: <PopUpPage/> },
    { id: 3, title: "Focus Bubble", page: <FocusBubblePage/> },
    { id: 4, title: "Popover", page: <PopOverPage/> },
    // { id: 4, title: "Count", page: <TestPage/> },
    // { id: 5, title: "Focus Bubble", page: <TestPage/> },
    // { id: 6, title: "Image Affordance", page: <TestPage/> },
    // { id: 7, title: "Menu", page: <TestPage/> },
    // { id: 8, title: "Pin Input", page: <TestPage/> },
    // 
    // { id: 10, title: "Rolling", page: <TestPage/> },
    // { id: 11, title: "Skeleton", page: <TestPage/> },
    // { id: 12, title: "Tab", page: <TestPage/> },
  ];

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
    setSelectedSubIndex(-1);
    if (contentsRef.current) {
      contentsRef.current.scrollTop = 0;
    }
  };

    const handleSubButtonClick = (index: number) => {
    setSelectedSubIndex(index);
    if (contentsRef.current) {
      contentsRef.current.scrollTop = 0;
    }
  };

  return <>
    <div className='side_menu' style={{position:"fixed", width: "294px",height: "923px", padding: 0, background: 'black' }}>
      <div style={{padding: 50, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
          <div style={{display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: 10}}>
          <SideMenuTitle title="Naver" underline={false}/>
          <SideMenuTitle title="InteractiveStudio" underline={false}/>
        </div>
         <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
          {tabContents.map((item, index) => (
              <React.Fragment key={item.id}>
              <SideMenuItem
                key={item.id}
                title={item.title}
                selected={selectedIndex === index}
                sideSubSelected={selectedIndex === 2 && selectedSubIndex !== -1}
                onClick={() => handleButtonClick(index)}
              />
              {item.id === 2 && selectedIndex === 2 && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: 12, gap: 10 }}>
                {resoucesContents.map((subItem) => (
                  <SideSubMenuItem
                  key={subItem.id}
                  title={subItem.title}
                  selected={selectedSubIndex === subItem.id}
                  onClick={() => handleSubButtonClick(subItem.id)}
                  />
                ))}
                </div>
              )}
              </React.Fragment>
          ))}
        </div>
      </div>
    </div>
    <div
      className='contents'
      ref={contentsRef}
      style={{position:"absolute", height: "923px" , left: "294px", overflowY: 'auto'}}
    >
      {selectedSubIndex != -1
        ? resoucesContents[selectedSubIndex]?.page
        : tabContents[selectedIndex]?.page}
    </div>
  </>;
}

export default App;
