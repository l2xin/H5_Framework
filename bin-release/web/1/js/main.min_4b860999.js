var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(e){o(e)}}function s(t){try{u(r["throw"](t))}catch(e){o(e)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,o&&(a=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,o=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(a=u.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){u.label=n[1];break}if(6===n[0]&&u.label<a[1]){u.label=a[1],a=n;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(n);break}a[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(r){n=[6,r],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,s,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},puremvc;!function(t){"use strict";var e=function(){function e(){this.multitonKey=null}return e.prototype.initializeNotifier=function(t){this.multitonKey=t},e.prototype.sendNotification=function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null),this.facade()&&this.facade().sendNotification(t,e,n)},e.prototype.facade=function(){if(null===this.multitonKey)throw Error(e.MULTITON_MSG);return t.Facade.getInstance(this.multitonKey)},e.MULTITON_MSG="multitonKey for this Notifier not yet initialized!",e}();t.Notifier=e,__reflect(e.prototype,"puremvc.Notifier",["puremvc.INotifier"])}(puremvc||(puremvc={}));var puremvc;!function(t){"use strict";var e=function(){function t(t,e){this.notify=null,this.context=null,this.setNotifyMethod(t),this.setNotifyContext(e)}return t.prototype.getNotifyMethod=function(){return this.notify},t.prototype.setNotifyMethod=function(t){this.notify=t},t.prototype.getNotifyContext=function(){return this.context},t.prototype.setNotifyContext=function(t){this.context=t},t.prototype.notifyObserver=function(t){this.getNotifyMethod().call(this.getNotifyContext(),t)},t.prototype.compareNotifyContext=function(t){return t===this.context},t}();t.Observer=e,__reflect(e.prototype,"puremvc.Observer",["puremvc.IObserver"])}(puremvc||(puremvc={}));var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=n.sent(),this.startAnimation(t),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return e=n.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return n.sent(),this.stage.removeChild(t),[3,5];case 4:return e=n.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,n){var r=new eui.Theme("resource/default.thm.json",t.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){this.addChild(new TestTS)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.startAnimation=function(t){},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,n,r){function i(t){e.call(r,t)}function o(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}var a=this;"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(r,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(t,n){window.JSONParseClass.setData(t),i(t),egret.callLater(function(){e.call(r,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var TestTS=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/eui_skins/Test.exml",e}return __extends(e,t),e}(eui.Component);__reflect(TestTS.prototype,"TestTS");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var puremvc;!function(t){"use strict";var e=function(){function e(t){if(this.mediatorMap=null,this.observerMap=null,this.multitonKey=null,e.instanceMap[t])throw Error(e.MULTITON_MSG);e.instanceMap[t]=this,this.multitonKey=t,this.mediatorMap={},this.observerMap={},this.initializeView()}return e.prototype.initializeView=function(){},e.prototype.registerObserver=function(t,e){var n=this.observerMap[t];n?n.push(e):this.observerMap[t]=[e]},e.prototype.removeObserver=function(t,e){for(var n=this.observerMap[t],r=n.length;r--;){var i=n[r];if(i.compareNotifyContext(e)){n.splice(r,1);break}}0==n.length&&delete this.observerMap[t]},e.prototype.notifyObservers=function(t){var e=t.getName(),n=this.observerMap[e];if(n)for(var r=n.slice(0),i=r.length,o=0;i>o;o++){var a=r[o];a.notifyObserver(t)}},e.prototype.registerMediator=function(e){var n=e.getMediatorName();if(!this.mediatorMap[n]){e.initializeNotifier(this.multitonKey),this.mediatorMap[n]=e;var r=e.listNotificationInterests(),i=r.length;if(i>0)for(var o=new t.Observer(e.handleNotification,e),a=0;i>a;a++)this.registerObserver(r[a],o);e.onRegister()}},e.prototype.retrieveMediator=function(t){return this.mediatorMap[t]||null},e.prototype.removeMediator=function(t){var e=this.mediatorMap[t];if(!e)return null;for(var n=e.listNotificationInterests(),r=n.length;r--;)this.removeObserver(n[r],e);return delete this.mediatorMap[t],e.onRemove(),e},e.prototype.hasMediator=function(t){return null!=this.mediatorMap[t]},e.getInstance=function(t){return e.instanceMap[t]||(e.instanceMap[t]=new e(t)),e.instanceMap[t]},e.removeView=function(t){delete e.instanceMap[t]},e.MULTITON_MSG="View instance for this multiton key already constructed!",e.instanceMap={},e}();t.View=e,__reflect(e.prototype,"puremvc.View",["puremvc.IView"])}(puremvc||(puremvc={}));var puremvc;!function(t){"use strict";var e=function(){function e(t){if(this.view=null,this.commandMap=null,this.multitonKey=null,e.instanceMap[t])throw Error(e.MULTITON_MSG);e.instanceMap[t]=this,this.multitonKey=t,this.commandMap={},this.initializeController()}return e.prototype.initializeController=function(){this.view=t.View.getInstance(this.multitonKey)},e.prototype.executeCommand=function(t){var e=this.commandMap[t.getName()];if(e){var n=new e;n.initializeNotifier(this.multitonKey),n.execute(t)}},e.prototype.registerCommand=function(e,n){this.commandMap[e]||this.view.registerObserver(e,new t.Observer(this.executeCommand,this)),this.commandMap[e]=n},e.prototype.hasCommand=function(t){return null!=this.commandMap[t]},e.prototype.removeCommand=function(t){this.hasCommand(t)&&(this.view.removeObserver(t,this),delete this.commandMap[t])},e.getInstance=function(t){return e.instanceMap[t]||(e.instanceMap[t]=new e(t)),e.instanceMap[t]},e.removeController=function(t){delete e.instanceMap[t]},e.MULTITON_MSG="Controller instance for this multiton key already constructed!",e.instanceMap={},e}();t.Controller=e,__reflect(e.prototype,"puremvc.Controller",["puremvc.IController"])}(puremvc||(puremvc={}));var puremvc;!function(t){"use strict";var e=function(){function t(e){if(this.proxyMap=null,this.multitonKey=null,t.instanceMap[e])throw Error(t.MULTITON_MSG);t.instanceMap[e]=this,this.multitonKey=e,this.proxyMap={},this.initializeModel()}return t.prototype.initializeModel=function(){},t.prototype.registerProxy=function(t){t.initializeNotifier(this.multitonKey),this.proxyMap[t.getProxyName()]=t,t.onRegister()},t.prototype.removeProxy=function(t){var e=this.proxyMap[t];return e&&(delete this.proxyMap[t],e.onRemove()),e},t.prototype.retrieveProxy=function(t){return this.proxyMap[t]||null},t.prototype.hasProxy=function(t){return null!=this.proxyMap[t]},t.getInstance=function(e){return t.instanceMap[e]||(t.instanceMap[e]=new t(e)),t.instanceMap[e]},t.removeModel=function(e){delete t.instanceMap[e]},t.MULTITON_MSG="Model instance for this multiton key already constructed!",t.instanceMap={},t}();t.Model=e,__reflect(e.prototype,"puremvc.Model",["puremvc.IModel"])}(puremvc||(puremvc={}));var puremvc;!function(t){"use strict";var e=function(){function t(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null),this.name=null,this.body=null,this.type=null,this.name=t,this.body=e,this.type=n}return t.prototype.getName=function(){return this.name},t.prototype.setBody=function(t){this.body=t},t.prototype.getBody=function(){return this.body},t.prototype.setType=function(t){this.type=t},t.prototype.getType=function(){return this.type},t.prototype.toString=function(){var t="Notification Name: "+this.getName();return t+="\nBody:"+(null==this.getBody()?"null":this.getBody().toString()),t+="\nType:"+(null==this.getType()?"null":this.getType())},t}();t.Notification=e,__reflect(e.prototype,"puremvc.Notification",["puremvc.INotification"])}(puremvc||(puremvc={}));var puremvc;!function(t){"use strict";var e=function(){function e(t){if(this.model=null,this.view=null,this.controller=null,this.multitonKey=null,e.instanceMap[t])throw Error(e.MULTITON_MSG);this.initializeNotifier(t),e.instanceMap[t]=this,this.initializeFacade()}return e.prototype.initializeFacade=function(){this.initializeModel(),this.initializeController(),this.initializeView()},e.prototype.initializeModel=function(){this.model||(this.model=t.Model.getInstance(this.multitonKey))},e.prototype.initializeController=function(){this.controller||(this.controller=t.Controller.getInstance(this.multitonKey))},e.prototype.initializeView=function(){this.view||(this.view=t.View.getInstance(this.multitonKey))},e.prototype.registerCommand=function(t,e){this.controller.registerCommand(t,e)},e.prototype.removeCommand=function(t){this.controller.removeCommand(t)},e.prototype.hasCommand=function(t){return this.controller.hasCommand(t)},e.prototype.registerProxy=function(t){this.model.registerProxy(t)},e.prototype.retrieveProxy=function(t){return this.model.retrieveProxy(t)},e.prototype.removeProxy=function(t){var e;return this.model&&(e=this.model.removeProxy(t)),e},e.prototype.hasProxy=function(t){return this.model.hasProxy(t)},e.prototype.registerMediator=function(t){this.view&&this.view.registerMediator(t)},e.prototype.retrieveMediator=function(t){return this.view.retrieveMediator(t)},e.prototype.removeMediator=function(t){var e;return this.view&&(e=this.view.removeMediator(t)),e},e.prototype.hasMediator=function(t){return this.view.hasMediator(t)},e.prototype.notifyObservers=function(t){this.view&&this.view.notifyObservers(t)},e.prototype.sendNotification=function(e,n,r){void 0===n&&(n=null),void 0===r&&(r=null),this.notifyObservers(new t.Notification(e,n,r))},e.prototype.initializeNotifier=function(t){this.multitonKey=t},e.getInstance=function(t){return e.instanceMap[t]||(e.instanceMap[t]=new e(t)),e.instanceMap[t]},e.hasCore=function(t){return e.instanceMap[t]?!0:!1},e.removeCore=function(n){e.instanceMap[n]&&(t.Model.removeModel(n),t.View.removeView(n),t.Controller.removeController(n),delete e.instanceMap[n])},e.MULTITON_MSG="Facade instance for this multiton key already constructed!",e.instanceMap={},e}();t.Facade=e,__reflect(e.prototype,"puremvc.Facade",["puremvc.IFacade","puremvc.INotifier"])}(puremvc||(puremvc={}));var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function r(r){e.call(n,r,t)}if(RES.hasRes(t)){var i=RES.getRes(t);i?r(i):RES.getResAsync(t,r,this)}else RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var puremvc;!function(t){"use strict";var e=function(t){function e(){var e=t.call(this)||this;return e.subCommands=null,e.subCommands=new Array,e.initializeMacroCommand(),e}return __extends(e,t),e.prototype.initializeMacroCommand=function(){},e.prototype.addSubCommand=function(t){this.subCommands.push(t)},e.prototype.execute=function(t){for(var e=this.subCommands.slice(0),n=this.subCommands.length,r=0;n>r;r++){var i=e[r],o=new i;o.initializeNotifier(this.multitonKey),o.execute(t)}this.subCommands.splice(0)},e}(t.Notifier);t.MacroCommand=e,__reflect(e.prototype,"puremvc.MacroCommand",["puremvc.ICommand"])}(puremvc||(puremvc={}));var puremvc;!function(t){"use strict";var e=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.execute=function(t){},e}(t.Notifier);t.SimpleCommand=e,__reflect(e.prototype,"puremvc.SimpleCommand",["puremvc.ICommand"])}(puremvc||(puremvc={}));var puremvc;!function(t){"use strict";var e=function(t){function e(n,r){void 0===n&&(n=null),void 0===r&&(r=null);var i=t.call(this)||this;return i.mediatorName=null,i.viewComponent=null,i.mediatorName=null!=n?n:e.NAME,i.viewComponent=r,i}return __extends(e,t),e.prototype.getMediatorName=function(){return this.mediatorName},e.prototype.getViewComponent=function(){return this.viewComponent},e.prototype.setViewComponent=function(t){this.viewComponent=t},e.prototype.listNotificationInterests=function(){return new Array},e.prototype.handleNotification=function(t){},e.prototype.onRegister=function(){},e.prototype.onRemove=function(){},e.NAME="Mediator",e}(t.Notifier);t.Mediator=e,__reflect(e.prototype,"puremvc.Mediator",["puremvc.IMediator"])}(puremvc||(puremvc={}));var puremvc;!function(t){"use strict";var e=function(t){function e(n,r){void 0===n&&(n=null),void 0===r&&(r=null);var i=t.call(this)||this;return i.proxyName=null,i.data=null,i.proxyName=null!=n?n:e.NAME,null!=r&&i.setData(r),i}return __extends(e,t),e.prototype.getProxyName=function(){return this.proxyName},e.prototype.setData=function(t){this.data=t},e.prototype.getData=function(){return this.data},e.prototype.onRegister=function(){},e.prototype.onRemove=function(){},e.NAME="Proxy",e}(t.Notifier);t.Proxy=e,__reflect(e.prototype,"puremvc.Proxy",["puremvc.IProxy"])}(puremvc||(puremvc={}));