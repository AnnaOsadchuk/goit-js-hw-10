import"./assets/styles-40f71578.js";import{i as r}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form"),n=document.querySelector('form input[name="delay"]'),m=document.querySelectorAll('form input[name="state"]');l.addEventListener("submit",c);function c(i){i.preventDefault();let o=n.value,t=null;m.forEach(e=>{e.checked&&(console.log(e.value),t=e.value)}),F(t,o).then(e=>r.show({title:"OK",icon:"/img/icons.svg",message:`${e}`,titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#59A10D",position:"topRight",timeout:3e3})).catch(e=>r.show({title:"Error",titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",message:`${e}`,position:"topRight",timeout:3e3}))}function F(i,o){return new Promise((t,s)=>{setTimeout(()=>{i=="fulfilled"?t(`Fulfilled promise in ${o}ms`):s(`Rejected promise in ${o}ms`)},o)})}
//# sourceMappingURL=commonHelpers2.js.map
