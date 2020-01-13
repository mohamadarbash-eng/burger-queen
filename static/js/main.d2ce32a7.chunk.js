(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],[,function(e,t,n){"use strict";t.a={ADD_INGREDIENT:"ADD_INGREDIENT",REMOVE_INGREDIENT:"REMOVE_INGREDIENT",SET_INGREDIENTS:"SET_INGREDIENTS",SET_ERROR:"SET_ERROR",PURCHASE_BURGER_SUCCESS:"PURCHASE_BURGER_SUCCESS",PURCHASE_BURGER_FAIL:"PURCHASE_BURGER_FAIL",PURCHASE_BURGER_START:"PURCHASE_BURGER_START",PURCHASE_INIT:"PURCHASE_INIT",FETCH_ORDERS_START:"FETCH_ORDERS_START",FETCH_ORDERS_SUCCESS:"FETCH_ORDERS_SUCCESS",FETCH_ORDERS_FAIL:"FETCH_ORDERS_FAIL",AUTH_START:"AUTH_START",AUTH_SUCCESS:"AUTH_SUCCESS",AUTH_FAIL:"AUTH_FAIL",LOG_OUT:"LOG_OUT",SET_AUTH_REDIRECT_PATH:"SET_AUTH_REDIRECT_PATH"}},,,,,,,,,,,function(e,t,n){"use strict";var a=n(1),r=n(14),o=function(e){return{type:a.a.ADD_INGREDIENT,ingredientName:e}},i=function(e){return{type:a.a.REMOVE_INGREDIENT,ingredientName:e}},c=function(){return function(e){r.a.get("/ingredients.json",{headers:{key:"Access-Control-Allow-Origin",value:"*"}}).then((function(t){var n;e((n=t.data,{type:a.a.SET_INGREDIENTS,ingredients:n}))})).catch((function(){e({type:a.a.SET_ERROR})}))}},l=n(2),u=function(e,t){return function(n){a.a.FETCH_ORDERS_START,r.a.get("/orders.json?auth="+e+'&orderBy="userId"&equalTo="'+t+'"').then((function(e){var t=[];for(var r in e.data)t.push(Object(l.a)({},e.data[r],{id:r}));n(function(e){return{type:a.a.FETCH_ORDERS_SUCCESS,orders:e}}(t))})).catch((function(e){var t;n((t=e,{type:a.a.FETCH_ORDERS_FAIL,error:t})),alert("somthing went wrong checkout "+e)}))}},s=function(){return{type:a.a.PURCHASE_INIT}},d=function(e,t){return function(n){n({type:a.a.PURCHASE_BURGER_START}),r.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:a.a.PURCHASE_BURGER_SUCCESS,id:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:a.a.PURCHASE_BURGER_FAIL,error:e}}(e))}))}},p=n(35),m=n.n(p),h=function(e){return Object(l.a)({type:a.a.AUTH_SUCCESS},e)},g=function(e){return function(t){setTimeout((function(){t(E())}),1e3*e)}},E=function(){return localStorage.removeItem("idToken"),localStorage.removeItem("expiresDate"),localStorage.removeItem("localId"),{type:a.a.LOG_OUT}},f=function(e){return{type:a.a.SET_AUTH_REDIRECT_PATH,path:e}},_=function(){return function(e){var t=localStorage.getItem("idToken");if(t){var n=localStorage.getItem("expirationDate");new Date>=new Date(n)?e(E()):(e(h({localId:localStorage.getItem("localId"),idToken:t})),e(g((new Date(n).getTime()-(new Date).getTime())/1e3)))}else e(E())}},v=function(e,t,n){return function(r){r({type:a.a.AUTH_START});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDnpJhSD3NSnNy_g2jNRccmWT68mADMDs0";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDnpJhSD3NSnNy_g2jNRccmWT68mADMDs0"),m.a.post(i,o).then((function(e){var t=e.data;localStorage.setItem("idToken",t.idToken);var n=new Date((new Date).getTime()+1e3*t.expiresIn);localStorage.setItem("expirationDate",n),localStorage.setItem("localId",t.localId),r(h(t)),r(g(t.expiresIn))})).catch((function(e){return r(function(e){return{type:a.a.AUTH_FAIL,error:e}}(e))}))}};n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"f",(function(){return E})),n.d(t,"j",(function(){return f})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return v}))},,function(e,t,n){"use strict";var a=n(35),r=n.n(a).a.create({baseURL:"https://burger-queen-92f6d.firebaseio.com"});t.a=r},,,function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(66),i=n.n(o);t.a=function(){return r.a.createElement("div",{className:i.a.Loader},"Loading...")}},,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(43),i=n.n(o);t.a=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis",ValidationError:"Input_ValidationError__qMR97"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,function(e,t,n){"use strict";var a=n(4),r=n(5),o=n(7),i=n(6),c=n(8),l=n(0),u=n.n(l),s=n(34),d=n(14);t.a=function(e,t){return function(n){function l(e){var n;return Object(a.a)(this,l),(n=Object(o.a)(this,Object(i.a)(l).call(this,e))).state={error:null},n.errorConfirmedHandler=function(){n.setState({error:null})},n.reqInterceptors=t.interceptors.request.use((function(e){return n.setState({error:null}),e})),n.resInterceptors=t.interceptors.response.use((function(e){return e}),(function(e){n.setState({error:e})})),n}return Object(c.a)(l,n),Object(r.a)(l,[{key:"componentWillUnmount",value:function(){d.a.interceptors.request.eject(this.reqInterceptors),d.a.interceptors.response.eject(this.resInterceptors)}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{show:!!this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),u.a.createElement(e,this.props))}}]),l}(l.Component)}},function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(63),i=n.n(o);t.a=function(e){return e.show?r.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var a=n(4),r=n(5),o=n(7),i=n(6),c=n(8),l=n(0),u=n.n(l),s=n(65),d=n.n(s),p=n(33),m=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{show:this.props.show,clicked:this.props.modalClosed}),u.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(l.Component);t.a=m},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD",disable:"BuildControls_disable__3ApY9"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(26),i=n.n(o);t.a=function(e){var t=null,n=[i.a.InputElement],a=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(n.push(i.a.Invalid),a=r.a.createElement("p",{className:i.a.ValidationError},"Please enter a valid value!")),n=n.join(" "),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n},e.elementConfig,{value:e.value,onChange:e.change,onBlur:e.setTouched}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n},e.elementConfig,{value:e.value,onChange:e.change}));break;case"select":t=r.a.createElement("select",{className:n,value:e.value,onChange:e.change},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayName)})));break;default:t=r.a.createElement("input",Object.assign({className:n},e.elementConfig,{value:e.value,onChange:e.change}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{htmlFor:"",className:i.a.Label},e.label),t,a)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){var n=!0;return t&&t.required&&(n=!!e&&e.trim()&&n),t&&t.minLength&&(n=e.trim().length>=t.minLength&&n),t&&t.maxLength&&(n=e.trim().length<=t.maxLength&&n),n}},,function(e,t,n){e.exports={Content:"Layout_Content__PrDi6"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load3:"Spinner_load3__3VkKK"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummery_CheckoutSummary__1jfZT"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__3ArQ-",Input:"ContactData_Input__1VTPh"}},,,function(e,t,n){e.exports=n(99)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),i=n.n(o),c=(n(76),n(4)),l=n(5),u=n(7),s=n(6),d=n(8),p=n(23),m=n(9),h=n(57),g=n.n(h),E=n(36),f=n.n(E),_=n(58),v=n.n(_),b=n(59),S=n.n(b),C=function(e){return r.a.createElement("div",{className:S.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:v.a,alt:"MyBurger"}))},T=n(60),O=n.n(T),I=n(39),R=n.n(I),y=n(21),k=function(e){return r.a.createElement("li",{className:R.a.NavigationItem},r.a.createElement(y.b,{exact:e.exact,to:e.link,activeClassName:R.a.active},e.children))},A=function(e){var t=e.isAuth?r.a.createElement(k,{link:"/logout"},"Logout"):r.a.createElement(k,{link:"/auth"},"Auth");return r.a.createElement("ul",{className:O.a.NavigationItems},r.a.createElement(k,{link:"/",exact:!0},"Burger Builder"),r.a.createElement(k,{link:"/orders"},"Orders"),t)},j=n(62),N=n.n(j),D=function(e){return r.a.createElement("div",{className:N.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},w=function(e){return r.a.createElement("header",{className:f.a.Toolbar},r.a.createElement(D,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:f.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",{className:f.a.DesktopOnly},r.a.createElement(A,{isAuth:e.isAuth})))},B=n(25),U=n.n(B),H=n(33),L=function(e){var t=[U.a.SideDrawer,U.a.Close];return e.open&&(t=[U.a.SideDrawer,U.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:U.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",{onClick:e.closed},r.a.createElement(A,{isAuth:e.isAuth}))))},P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{isAuth:this.props.isAuth,drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(L,{isAuth:this.props.isAuth,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:g.a.Content},this.props.children))}}]),t}(a.Component),F=Object(m.b)((function(e){return{isAuth:!!e.auth.token}}))(P),x=n(2),G=n(70),M=n(64),q=n.n(M),V=n(20),Y=n.n(V),K="bread-bottom",W="bread-top",J="meat",z="bacon",X="salad",Z="cheese",Q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case K:e=r.a.createElement("div",{className:Y.a.BreadBottom});break;case W:e=r.a.createElement("div",{className:Y.a.BreadTop},r.a.createElement("div",{className:Y.a.Seeds1}),r.a.createElement("div",{className:Y.a.Seeds2}));break;case J:e=r.a.createElement("div",{className:Y.a.Meat});break;case Z:e=r.a.createElement("div",{className:Y.a.Cheese});break;case z:e=r.a.createElement("div",{className:Y.a.Bacon});break;case X:e=r.a.createElement("div",{className:Y.a.Salad});break;default:e=null}return e}}]),t}(a.Component),$=Object(p.g)((function(e){var t=[],n=function(n){Object(G.a)(Array(e.ingredients[n])).forEach((function(e,a){var o=r.a.createElement(Q,{key:n+a,type:n});t.push(o)}))};for(var a in e.ingredients)n(a);return r.a.createElement("div",{className:q.a.Burger},r.a.createElement(Q,{type:"bread-top"}),t.length>0?t:r.a.createElement("p",null,"Please start adding ingredients!"),r.a.createElement(Q,{type:"bread-bottom"}))})),ee=n(42),te=n.n(ee),ne=n(29),ae=n.n(ne),re=function(e){return r.a.createElement("div",{className:ae.a.BuildControl},r.a.createElement("div",{className:ae.a.Label},e.label),r.a.createElement("button",{className:ae.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:ae.a.More,onClick:e.added},"More"))},oe=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ie=function(e){return r.a.createElement("div",{className:te.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),oe.map((function(t){return r.a.createElement(re,{isAuth:e.isAuth,key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:te.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},ce=n(34),le=n(22),ue=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(le.a,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(le.a,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},se=n(14),de=n(17),pe=n(32),me=n(12),he={salad:.5,cheese:.4,meat:1.3,bacon:.7},ge=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={purchasing:!1,loading:!1},n.purchaseHandler=function(){n.props.isAuth?n.setState({purchasing:!0}):(n.props.onAuthRedirect("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onPurchaseInit(),n.props.history.push({pathname:"/checkout"})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onSetIngredients()}},{key:"updatePurchaseState",value:function(){var e=0;for(var t in this.props.ingredients)e+=this.props.ingredients[t];return e>0}},{key:"render",value:function(){var e=Object(x.a)({},this.props.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null;this.props.ingredients&&(n=r.a.createElement(ue,{ingredients:this.props.ingredients,price:this.props.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),this.state.loading&&(n=r.a.createElement(de.a,null));var a=this.props.error?r.a.createElement("p",null,"Something is wrong please try later"):r.a.createElement(de.a,null);return this.props.ingredients&&(a=r.a.createElement(r.a.Fragment,null,r.a.createElement($,{ingredients:this.props.ingredients}),r.a.createElement(ie,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,isAuth:this.props.isAuth,purchasable:this.updatePurchaseState(),ordered:this.purchaseHandler,price:this.props.totalPrice}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),t}(a.Component),Ee=Object(m.b)((function(e){return{ingredients:e.ingredient.ingredients,totalPrice:e.ingredient.totalPrice,error:e.ingredient.error,isAuth:!!e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(me.a(t))},onIngredientRemoved:function(t){return e(me.i(t))},onSetIngredients:function(){return e(me.e())},onPurchaseInit:function(){return e(me.h())},onAuthRedirect:function(t){return e(me.j(t))}}}))(Object(pe.a)(ge,se.a)),fe=n(67),_e=n.n(fe),ve=function(e){return r.a.createElement("div",{className:_e.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement($,{ingredients:e.ingredients})),r.a.createElement(le.a,{btnType:"Danger",clicked:e.checkoutCancelled},"Cancel"),r.a.createElement(le.a,{btnType:"Success",clicked:e.checkoutContinued},"Continue"))},be=n(68),Se=n.n(be),Ce=n(54),Te={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},touched:!1,valid:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0},touched:!1,valid:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Your ZipCode"},value:"",validation:{required:!0,maxLength:8},touched:!1,valid:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Country"},value:"",validation:{required:!0},touched:!1,valid:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Name"},value:"",validation:{required:!0},touched:!1,valid:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayName:"Fastest"},{value:"slowest",displayName:"Slowest"}],placeholder:"Select Delivery Method"},value:"fastest",touched:!0,valid:!0}},formIsValid:!1},Oe=n(55),Ie=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state=Object(x.a)({},JSON.parse(JSON.stringify(Te))),n.orderHandler=function(e){e.preventDefault();var t={};for(var a in n.state.orderForm)t[a]=n.state.orderForm[a].value;var r={ingredients:n.props.ingredients,totalPrice:n.props.totalPrice,orderData:t,userId:n.props.userId};n.props.onOrderBurger(r,n.props.token,n.props.userId)},n.inputChangeHandler=function(e,t){var a=e.target.value;n.setState((function(e){var n=Object(x.a)({},e.orderForm);n[t].valid=Object(Oe.a)(a,n[t].validation),n[t].touched=!0,n[t].value=a;var r=!0;for(var o in n)r=n[o].valid&&r;return{orderForm:n,formIsValid:r}}))},n.setTouched=function(e){n.setState((function(t){var n=Object(x.a)({},t.orderForm);return n[e].touched=!0,{orderForm:n}}))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(Ce.a,{key:t.id,invalid:!t.config.valid,elementType:t.config.elementType,value:t.config.value,shouldValidate:!!t.config.validation,touched:t.config.touched,setTouched:function(){return e.setTouched(t.id)},change:function(n){return e.inputChangeHandler(n,t.id)},elementConfig:t.config.elementConfig})})),r.a.createElement(le.a,{btnType:this.state.formIsValid?"Success":"Danger",disabled:!this.state.formIsValid},"Order"));return this.props.loading&&(a=r.a.createElement(de.a,null)),r.a.createElement("div",{className:Se.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),t}(a.Component),Re=Object(m.b)((function(e){return{ingredients:e.ingredient.ingredients,totalPrice:e.ingredient.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n,a){return e(me.g(t,n,a))}}}))(Object(pe.a)(Ie,se.a)),ye=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=r.a.createElement(p.a,{to:"/"});return this.props.ingredients&&!this.props.purchased&&(e=r.a.createElement(ve,{checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler,ingredients:this.props.ingredients})),r.a.createElement(r.a.Fragment,null,e,r.a.createElement(p.b,{path:"".concat(this.props.match.path,"/contact-data"),component:Re}))}}]),t}(a.Component),ke=Object(m.b)((function(e){return{ingredients:e.ingredient.ingredients,totalPrice:e.ingredient.totalPrice,purchased:e.order.purchased}}))(ye),Ae=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(p.a,{to:"/"})}}]),t}(a.Component),je=Object(m.b)(null,(function(e){return{onLogout:function(){return e(me.f())}}}))(Ae),Ne=r.a.lazy((function(){return n.e(3).then(n.bind(null,102))})),De=r.a.lazy((function(){return n.e(4).then(n.bind(null,103))})),we=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onIsUserAuthenticated()}},{key:"render",value:function(){var e=r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/auth",render:function(e){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(de.a,null)}," ",r.a.createElement(Ne,e))}}),r.a.createElement(p.b,{path:"/orders",render:function(e){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(de.a,null)}," ",r.a.createElement(De,e))}}),r.a.createElement(p.b,{path:"/logout",component:je}),r.a.createElement(p.b,{path:"/",exact:!0,component:Ee}),r.a.createElement(p.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/checkout",component:ke}),r.a.createElement(p.b,{path:"/orders",render:function(e){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(de.a,null)}," ",r.a.createElement(De,e))}}),r.a.createElement(p.b,{path:"/auth",render:function(e){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(de.a,null)}," ",r.a.createElement(Ne,e))}}),r.a.createElement(p.b,{path:"/logout",component:je}),r.a.createElement(p.b,{path:"/",exact:!0,component:Ee}),r.a.createElement(p.a,{to:"/"}))),r.a.createElement("div",null,r.a.createElement(F,null,e))}}]),t}(a.Component),Be=Object(p.g)(Object(m.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{onIsUserAuthenticated:function(){return e(me.c())}}}))(we)),Ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function He(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Le=n(24),Pe=n(28),Fe=n(1),xe={ingredients:null,totalPrice:4,error:!1,building:!1},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe.a.ADD_INGREDIENT:return Object(x.a)({},e,{ingredients:Object(x.a)({},e.ingredients,Object(Pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+he[t.ingredientName],building:!0});case Fe.a.REMOVE_INGREDIENT:var n=e.ingredients[t.ingredientName];return Object(x.a)({},e,{ingredients:Object(x.a)({},e.ingredients,Object(Pe.a)({},t.ingredientName,n>1?n-1:0)),totalPrice:e.totalPrice-he[t.ingredientName],building:!0});case Fe.a.SET_INGREDIENTS:return Object(x.a)({},e,{ingredients:t.ingredients,error:!1,totalPrice:xe.totalPrice,building:!1});case Fe.a.SET_ERROR:return Object(x.a)({},e,{error:!0});default:return e}},Me={orders:[],loading:!1,error:null,purchased:!1},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe.a.FETCH_ORDERS_START:return Object(x.a)({},e,{loading:!0});case Fe.a.FETCH_ORDERS_SUCCESS:return Object(x.a)({},e,{loading:!1,orders:t.orders});case Fe.a.FETCH_ORDERS_FAIL:return Object(x.a)({},e,{loading:!1,error:t.error});case Fe.a.PURCHASE_INIT:return Object(x.a)({},e,{purchased:!1});case Fe.a.PURCHASE_BURGER_START:return Object(x.a)({},e,{loading:!0});case Fe.a.PURCHASE_BURGER_SUCCESS:var n=Object(x.a)({},t.orderData,{id:t.id});return Object(x.a)({},e,{loading:!1,purchased:!0,orders:e.orders.concat(n)});case Fe.a.PURCHASE_BURGER_FAIL:return Object(x.a)({},e,{error:t.error,loading:!1});default:return e}},Ve=n(69),Ye={token:null,userId:null,error:null,loading:!1,authRedirect:"/"},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe.a.SET_AUTH_REDIRECT_PATH:return Object(x.a)({},e,{authRedirect:t.path});case Fe.a.LOG_OUT:return Object(x.a)({},e,{token:null,userId:null});case Fe.a.AUTH_FAIL:return Object(x.a)({},e,{error:t.error,loading:!1});case Fe.a.AUTH_START:return Object(x.a)({},e,{error:null,loading:!0});case Fe.a.AUTH_SUCCESS:return Object(x.a)({},e,{token:t.idToken,userId:t.localId,error:null,loading:!1});default:return e}},We=Le.d,Je=Object(Le.c)({ingredient:Ge,order:qe,auth:Ke}),ze=Object(Le.e)(Je,We(Object(Le.a)(Ve.a))),Xe=r.a.createElement(m.a,{store:ze},r.a.createElement(y.a,null,r.a.createElement(Be,null)));i.a.render(Xe,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/burger-queen",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/burger-queen","/service-worker.js");Ue?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):He(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):He(e)}))}}()}],[[71,1,2]]]);
//# sourceMappingURL=main.d2ce32a7.chunk.js.map