import"./assets/styles-40f71578.js";import{i as r}from"./assets/vendor-77e16229.js";import{E as s}from"./assets/error-832064dc.js";const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE3SURBVHgB3VXtccMgDJU38AiM4BG8QbNBukG9gb1J2gmaDXKdIN2AbOBsoIrLo+YICJzkT6K7dxxIvCe+BNGzW1MKYOZWmq2gExgMnwV7wU/TNCe6xYTYCD55MSs4AHMwvkMS8fxOI+9B4jA5MSUBG/ulP0K8S5Fv4DymiEsWkE+UycoC7UPJEeD33NBKqyE3/tBopRXJEfQeZ6/ehDXkCPx2tyYkx8TxbnIEHxyisSknkiOX/odgqBLIiWiZ53j8DbKUXt2/SGlb+PI49ynHEB9yRkQj9zdxm3K22uRAZFD8+jtCwMy3PbTyO0KQE3B1qLpUYPWWE4UvFdwjk3LwktQRczZUY3ypqNYvmfPleuSlrPe0xvj6w5l5+XBsML7TVlrzZRppesGbwJ/LSfAr+JIv80wvbX+lKUbbnDNdtAAAAABJRU5ErkJggg==",l=document.querySelector(".form"),m=document.querySelector('form input[name="delay"]'),c=document.querySelectorAll('form input[name="state"]');l.addEventListener("submit",g);function g(i){i.preventDefault();let o=m.value,t=null;c.forEach(e=>{e.checked&&(console.log(e.value),t=e.value)}),a(t,o).then(e=>r.show({title:"OK",icon:"/img/icons.svg",message:`${e}`,titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#59A10D",position:"topRight",timeout:3e3,iconUrl:n})).catch(e=>r.show({title:"Error",titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",message:`${e}`,position:"topRight",timeout:3e3,iconUrl:s}))}function a(i,o){return new Promise((t,A)=>{setTimeout(()=>{i=="fulfilled"?t(`Fulfilled promise in ${o}ms`):A(`Rejected promise in ${o}ms`)},o)})}
//# sourceMappingURL=commonHelpers2.js.map
