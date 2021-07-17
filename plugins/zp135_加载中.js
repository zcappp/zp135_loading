import React from "react"

function render(ref) {
    return <div><span/><p>加载中</p></div>
}

function css({ props }) {
    return `
.zp135 div {
  display: none;
  position: fixed;
  z-index: 5000;
  width: 136px;
  height: 136px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(76, 76, 76);
  line-height: 1.4;
}
.zp135 span {
  font-size: 40px;
  display: inline-flex;
  position: relative;
  width: 1em;
  height: 1em;
  margin-bottom: 16px;
  animation: 1s steps(60) 0s infinite normal none running circleLoading;
}
.zp135 span:before, .zp135 span:after {
  content: "";
  display: block;
  width: 0.5em;
  height: 1em;
  box-sizing: border-box;
  border: 0.125em solid;
  border-color: currentColor;
}
.zp135 span:before {
  border-right-width: 0;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
  -webkit-mask-image: -webkit-linear-gradient(top,#000000 8%,rgba(0,0,0,0.3) 95%);
}
.zp135 span:after {
  border-left-width: 0;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  -webkit-mask-image: -webkit-linear-gradient(top,rgba(0,0,0,0) 8%,rgba(0,0,0,0.3) 95%);
}
.zp135 p {
  font-size: 17px;
  padding: 0 12px;
  word-wrap: break-word;
  hyphens: auto;
}
@keyframes circleLoading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}`
}

$plugin({
    id: "zp135",
    render,
    css
})