#### react-tutorial-collections

### Tutorial
> https://ithelp.ithome.com.tw/articles/10214942

### Index
## Fundamentel
- React Dom
- ES6
- JSX
- Function component
- Props vs State
- API
- life cycle
- router
## Apple
- Material UI
- Nav bar

### create-react-app
> 一次安裝並設定好react、babel、webpack
>
> Steps 1: create-react-app {Project Name}
>
> Steps 2: npm start

### DOM (Document Object Model)
> 事實上，這支程式的架構就像是一棵樹、一份整理完善的文件，支幹底下有分支(例如: 元素類別中有按鍵)、分支上有多個樹葉(例如: 按鍵有提供點擊功能)...。這樣的結構，在程式語言中又稱為是「物件導向(Object-orient，簡稱OO)」結構。
>
> 我們把這個 HTML、XML 和 SVG 文件的程式介面，稱為文件物件模型（Document Object Model, DOM）。
> 這些常用的語法就是在操作DOM:
> - document.getElementById就是用id在向DOM取得元素。
> - document.getElementById().scrollTop=....就是在修改元素在DOM的scrollTop。

### ES6
## variable
> <i>var</i> problem:
> - var是全域(global)的，也就是即使在其他scope也會存在。
> - 沒有辦法保護var，也就是「不能強制不能被改變」。
> Solutions
> - let
> - const 
## function
```
    宣告型態 函式名稱 = (參數)=>{
        函式定義
    }
/* 舉例來說 */

    var testFunction = (A, B)=>{
        return A+B;
    }
```
## spread operator {...}
> 把陣列/物件展開成個別元素
## Promise 
> 解決非同步問題 callback
```
    宣告型態 宣告名稱 = new Promise((resolve, reject)=>{
        定義要先做什麼事情
        resolve(參數);
    })

    宣告名稱.then((參數，由resolve丟出)=>{ 定義要後做什麼事情 }).catch((錯誤)=>{ 先做的事情出現錯誤時怎麼處理 }))

/* 通常會這樣排版*/

    宣告名稱
    .then((參數，由resolve丟出)=>{ 
        定義要後做什麼事情 
    })
    .catch((錯誤)=>{ 
        先做的事情出現錯誤時怎麼處理 
    }))
```