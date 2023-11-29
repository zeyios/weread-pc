/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */

const contentWidthKey = 'cWidthz';

const css = `
.readerControls {
  left: unset !important;
  margin-left: unset !important;
  right: 16px !important;
  transition: opacity .3s ease-in-out;
}

div.app_content div.readerTopBar {
  height: 32px;
  left:0;
  right:0;
  width: unset;
  max-width: unset;
  transition: opacity .3s ease-in-out;
}

div.readerContent div.app_content {
  max-width: ${getLS(contentWidthKey) || 1000}px !important; 
}

.wr_whiteTheme .readerContent div.app_content {
  background-color: rgb(253,246,227) !important;
}

.readerBottomBar {
  display: none !important;
}

.drag-bar {
  position: fixed;
  height: 100%;
  width: 8px;
  top: 0;
  bottom: 0;
}

.right-bar {
  cursor: col-resize;
  left: 50%;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  background: linear-gradient(0.25turn, #295BE9, #295BE9 20%, transparent 20%, transparent);
  opacity: 0;
}

.right-bar.active {
  opacity: 1;
}

.left-bar {
  right: 50%;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  background: linear-gradient(0.75turn, #295BE9, #295BE9 20%, transparent 20%, transparent);
  opacity: 0;
}

.left-bar.active {
  opacity: 1;
}

.darg-indicator {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: linear-gradient(0.25turn, transparent, #295BE9 20%, #295BE9 80%, transparent);
  height: 2px;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  opacity: 0;
  display: none;
}

.darg-indicator.active {
  opacity: 1;
  display: block;
}

.ind-num {
  font-size: 30px;
  color: #295BE9;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50%;
  width: 500px;
  text-align: center;
  margin: auto auto 0;
  text-shadow: 5px 3px 6px #576b95;
  background: linear-gradient(45deg, transparent,#fff 50%, #fff 50%, transparent);
  margin-bottom: 2px;
  z-index: 10;
  opacity: 0;
  display: none;
}

.ind-num.active {
  opacity: 1;
  display: block;
}

.navBar_link.navBar_link_ChangeFont {
  border: none;
  cursor: pointer;
}

.navBar_font_menu {
  position: relative;
  display: inline-block;
}

.navBar-subMenu {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.navBar-subMenu button {
  text-decoration: none;
  display: block;
}

.navBar-subMenu button:hover {background-color: #ddd;}

.show {display: block;}
`;

// function applyCss() {
  // const css = `
  //   * {
  //     font-family: "LXGW WenKai Screen", LXGWWenKai, TsangerJinKai05, sans-serif !important;
  //   }
    
  //   .readerControls {
  //     left: unset !important;
  //     margin-left: unset !important;
  //     right: 16px !important;
  //     transition: opacity .3s ease-in-out;
  //   }

  //   div.app_content div.readerTopBar {
  //     height: 32px;
  //     left:0;
  //     right:0;
  //     width: unset;
  //     max-width: unset;
  //     transition: opacity .3s ease-in-out;
  //   }

  //   div.readerContent div.app_content {
  //     max-width: ${getLS(contentWidthKey) || 1000}px !important; 
  //   }

  //   .wr_whiteTheme .readerContent div.app_content {
  //     background-color: rgb(253,246,227) !important;
  //   }

  //   .readerBottomBar {
  //     display: none !important;
  //   }
    
  //   .drag-bar {
  //     position: fixed;
  //     height: 100%;
  //     width: 8px;
  //     top: 0;
  //     bottom: 0;
  //   }

  //   .right-bar {
  //     cursor: col-resize;
  //     left: 50%;
  //     transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  //     background: linear-gradient(0.25turn, #295BE9, #295BE9 20%, transparent 20%, transparent);
  //     opacity: 0;
  //   }

  //   .right-bar.active {
  //     opacity: 1;
  //   }

  //   .left-bar {
  //     right: 50%;
  //     transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  //     background: linear-gradient(0.75turn, #295BE9, #295BE9 20%, transparent 20%, transparent);
  //     opacity: 0;
  //   }

  //   .left-bar.active {
  //     opacity: 1;
  //   }

  //   .darg-indicator {
  //     position: fixed;
  //     top: 0;
  //     bottom: 0;
  //     left: 0;
  //     right: 0;
  //     margin: auto;
  //     background: linear-gradient(0.25turn, transparent, #295BE9 20%, #295BE9 80%, transparent);
  //     height: 2px;
  //     transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  //     opacity: 0;
  //     display: none;
  //   }

  //   .darg-indicator.active {
  //     opacity: 1;
  //     display: block;
  //   }

  //   .ind-num {
  //     font-size: 30px;
  //     color: #295BE9;
  //     position: fixed;
  //     left: 0;
  //     right: 0;
  //     bottom: 50%;
  //     width: 500px;
  //     text-align: center;
  //     margin: auto auto 0;
  //     text-shadow: 5px 3px 6px #576b95;
  //     background: linear-gradient(45deg, transparent,#fff 50%, #fff 50%, transparent);
  //     margin-bottom: 2px;
  //     z-index: 10;
  //     opacity: 0;
  //     display: none;
  //   }

  //   .ind-num.active {
  //     opacity: 1;
  //     display: block;
  //   }
  // `;

//   const styleElement = document.createElement('style');
//   styleElement.innerHTML = css;
//   document.head.appendChild(styleElement);
// };

function saveLS(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
  }
}

function getLS(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

let removeTimer = null;
function scrollChange(isDown, diff) {
  const readerTopBar = document.querySelector('.readerTopBar');
  const readerControls = document.querySelector('.readerControls');
  if (removeTimer) {
    clearTimeout(removeTimer);
  }

  if (isDown) {
    readerTopBar.style.opacity = 0;
    readerControls.style.opacity = 0;

    removeTimer = setTimeout(() => {
      readerTopBar.style.display = 'none';
      readerControls.style.display = 'none';
    }, 300);
  } else {
    readerTopBar.style.display = 'flex';
    readerControls.style.display = 'flex';
    readerTopBar.style.opacity = 1;
    readerControls.style.opacity = 1;
  }
}

let lastScrollY;
function scrollListener() {
  window.addEventListener('scroll', () => {
    const curY = window.scrollY;

    if (typeof lastScrollY !== 'number') {
      lastScrollY = curY;
      return;
    }

    scrollChange(curY > lastScrollY, curY - lastScrollY);

    lastScrollY = curY;
  });
}

function loadDynamicCss(url) {
  const fileref = document.createElement("link");
  fileref.rel = "stylesheet";
  fileref.type = "text/css";
  fileref.href = url;
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

function loadFont() {
  loadDynamicCss('https://npm.elemecdn.com/lxgw-wenkai-screen-webfont@1.7.0/style.css');
}

function changeContentSize(sizePx) {
  const content = document.querySelector(".readerContent div.app_content");
  content.style.setProperty('max-width',`${sizePx}px`, 'important');
  const event = new Event('resize');
  window.dispatchEvent(event);
}

function renderDragBar() {

  let contentWidth = +getLS(contentWidthKey) || 1000;

  const rightBar = document.createElement('div');
  rightBar.className = 'drag-bar right-bar ';
  rightBar.style.marginLeft = `${contentWidth / 2}px`;
  document.body.appendChild(rightBar);

  const leftBar = document.createElement('div');
  leftBar.className = 'drag-bar left-bar ';
  leftBar.style.marginRight = `${contentWidth / 2}px`;
  document.body.appendChild(leftBar);

  const dragIndicator = document.createElement('div');
  dragIndicator.className = 'darg-indicator';
  dragIndicator.style.width = `${contentWidth}px`;
  document.body.appendChild(dragIndicator);

  const indicatorNum = document.createElement('div');
  indicatorNum.className = 'ind-num';
  document.body.appendChild(indicatorNum);


  function makeEleActive(e) {
    if (e.className && e.className.indexOf('active') >= 0) {
      return;
    }

    e.className += ' active';
  }

  function makeEleInactive(e) {
    e.className = e.className.replace(' active', '');
  }

  function changeIndNum(newNum) {
    indicatorNum.innerText = newNum;
  }

  let isDrag = false;
  let dragClientX = -1;
  let marginWidth;
  rightBar.addEventListener('mouseover', (e) => {
    makeEleActive(rightBar);
  });

  rightBar.addEventListener('mouseleave', () => {
    if (!isDrag) {
      makeEleInactive(rightBar);
    }
  });

  rightBar.addEventListener('mousedown', (e) => {
    if (e.button !== 0) {
      return;
    }
    isDrag = true;
    makeEleActive(leftBar);
    makeEleActive(dragIndicator);
    makeEleActive(indicatorNum);

    dragClientX = e.clientX;
    marginWidth = contentWidth / 2;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDrag) {
      let clientX = e.clientX;
      if (clientX >= window.innerWidth) {
        clientX = window.innerWidth;
      }

      if (clientX <= (window.innerWidth/2 + 202)) {
        clientX = window.innerWidth/2 + 202;
      }
      const offset = clientX - dragClientX;
      dragClientX = clientX;
      marginWidth = offset + marginWidth;
      rightBar.style.marginLeft = `${marginWidth}px`;
      leftBar.style.marginRight = `${marginWidth}px`;
      dragIndicator.style.width = `${marginWidth * 2}px`;
      changeIndNum(marginWidth * 2);
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (isDrag) {
      isDrag = false;
      console.log('moseup');
      makeEleInactive(rightBar);
      makeEleInactive(leftBar);
      makeEleInactive(dragIndicator);
      makeEleInactive(indicatorNum);
      contentWidth = marginWidth * 2;
      changeContentSize(contentWidth);
      saveLS(contentWidthKey, contentWidth);
    }
  });

}

function setTitle(title) {
  window.__TAURI__.window.getCurrent().setTitle(title);
}

function titleHelper() {
  setTitle(document.title);
  new MutationObserver(function (mutations) {
    setTitle(mutations[0].target.nodeValue);
  }).observe(
    document.querySelector('title'),
    { subtree: true, characterData: true, childList: true }
  );
}

// 这里不修改原有的按钮，而是在前面添加按钮
function modifyHeader() {
  const linkUpload = document.getElementsByClassName('navBar_link navBar_link_Upload')
  const navBarSpace = document.getElementsByClassName('navBar_placeholder_regular')
  const navBarSeparator = document.createElement('span')
  const headerParent = document.getElementsByClassName('navBar_inner')
  // const navBarSeparator = document.getElementsByClassName('navBar_separator')[0]

  navBarSeparator.className = 'navBar_separator'
  // 在这两个元素之间插入别的按钮
  function addButton() {
    const HeaderUnit = document.createElement('div')
    HeaderUnit.id = 'change_font_unit'
    HeaderUnit.className = 'navBar_font_menu'

    // 需要把选择的字体传递到函数外，修改整体的CSS？

    const button_ChangeFont = document.createElement('button')
    // <button class="navBar_link navBar_link_ChangeFont">传书到手机</button>
    // <span class="navBar_separator"></span>
    button_ChangeFont.innerText = '全局字体'
    button_ChangeFont.className = 'navBar_link navBar_link_ChangeFont'
    button_ChangeFont.onclick = showFunction()

    
    
    // 下拉菜单
    const HiddenList = document.createElement('div')
    HiddenList.className = 'navBar-subMenu'

    const fontName = ['思源宋体','霞鹜文楷','思源黑体']
    const fontCount = fontName.length  // 和加入的字体个数相等
    for (var i=0; i<fontCount; i++){
      const HiddenContent = document.createElement('button')
      HiddenContent.className = 'navBar-subMenu-content'
      HiddenContent.innerText = fontName[i]
      HiddenList.after(HiddenContent)
    }

    HeaderUnit.after(button_ChangeFont,navBarSeparator,HiddenList)
    headerParent.insertBefore(HeaderUnit,linkUpload)

    /* 当用户点击按钮时，
    在隐藏和显示下拉内容之间切换 */
    function showFunction() {
      document.getElementsByClassName('navBar-subMenu').classList.toggle('show');
    }

    // 如果用户在下拉框外单击，则关闭下拉框
    window.onclick = function(event) {
      if (!event.target.matches('.navBar_link.navBar_link_ChangeFont')) {
        var dropdowns = document.getElementsByClassName('navBar-subMenu');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    
    
    
    
    
    // <button class="navBar_link navBar_link_GithubCode">Github</button>
    // <span class="navBar_separator"></span>
    // <button class="navBar_link navBar_link_GithubIssue">Github</button>
    // <span class="navBar_separator"></span>
    return HeaderUnit
  }
  function createALink(name, url, beforeWhatNode) {
    const HeaderUnit = document.createElement('div')
    HeaderUnit.id('header_add_unit')

    const item = document.createElement('a');
    item.innerText = name;
    item.target = '_blank';
    item.className = 'navBar_link';
    item.style.cursor = 'pointer';

    item.addEventListener('click', () => {
      window.__TAURI__.shell.open(url);
    });
  
    HeaderUnit.after(item,navBarSeparator)
    beforeWhatNode.insertBefore(HeaderUnit)
    return HeaderUnit;
  }
  const FontButton = addButton()
  const IssueLink = createALink('PC版问题反馈', 'https://github.com/zeyios/weread-pc/issues', FontButton)
  const CodeLink = createALink('Github', 'https://github.com/zeyios/weread-pc', IssueLink)
}


function modifyHeader() {
  const sendBook = document.querySelector('.navBar_link.navBar_link_Upload');
  const linkPage = document.querySelector('.navBar_link.navBar_link_ink');
  const linkPhone = document.querySelector('.navBar_link.navBar_link_Phone');

  function createALink(name, url) {
    const item = document.createElement('a');
    item.innerText = name;
    item.target = '_blank';
    item.className = 'navBar_link';
    item.style.cursor = 'pointer';

    item.addEventListener('click', () => {
      window.__TAURI__.shell.open(url);
    });
    return item;
  }

  // 这里我还是想保留传书功能
  if (sendBook) {
    const githubLink = createALink('Github', 'https://github.com/zeyios/weread-pc');
    sendBook.replaceWith(githubLink);
  }

  if (linkPage) {
    const reportLink = createALink('PC版问题反馈', 'https://github.com/zeyios/weread-pc/issues');
    linkPage.replaceWith(reportLink);
  }
}

function customHeader() {
  modifyHeader();

  var observer = new MutationObserver(function(mutations, observer) {
      modifyHeader();
  });
  var options = {
    'childList': true,
    'subtree': true,
  };
  observer.observe(document.body, options);
  
}

document.addEventListener('DOMContentLoaded', () => {
  titleHelper();
  loadFont();

  applyCss();
  customHeader();

  if (window.location.pathname.indexOf('web/reader') >= 0) {
    scrollListener();
    renderDragBar();
  }
});


