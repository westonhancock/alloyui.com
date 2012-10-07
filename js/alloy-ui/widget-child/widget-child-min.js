/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("widget-child",function(c){var b=c.Lang;function a(){c.after(this._syncUIChild,this,"syncUI");c.after(this._bindUIChild,this,"bindUI");}a.ATTRS={selected:{value:0,validator:b.isNumber},index:{readOnly:true,getter:function(){var e=this.get("parent"),d=-1;if(e){d=e.indexOf(this);}return d;}},parent:{readOnly:true},depth:{readOnly:true,getter:function(){var e=this.get("parent"),d=this.get("root"),f=-1;while(e){f=(f+1);if(e==d){break;}e=e.get("parent");}return f;}},root:{readOnly:true,getter:function(){var d=function(h){var e=h.get("parent"),f=h.ROOT_TYPE,g=e;if(f){g=(e&&c.instanceOf(e,f));}return(g?d(e):h);};return d(this);}}};a.prototype={ROOT_TYPE:null,_getUIEventNode:function(){var d=this.get("root"),e;if(d){e=d.get("boundingBox");}return e;},next:function(f){var e=this.get("parent"),d;if(e){d=e.item((this.get("index")+1));}if(!d&&f){d=e.item(0);}return d;},previous:function(g){var f=this.get("parent"),d=this.get("index"),e;if(f&&d>0){e=f.item([(d-1)]);}if(!e&&g){e=f.item((f.size()-1));}return e;},remove:function(d){var e,f;if(b.isNumber(d)){f=c.WidgetParent.prototype.remove.apply(this,arguments);}else{e=this.get("parent");if(e){f=e.remove(this.get("index"));}}return f;},isRoot:function(){return(this==this.get("root"));},ancestor:function(f){var d=this.get("root"),e;if(this.get("depth")>f){e=this.get("parent");while(e!=d&&e.get("depth")>f){e=e.get("parent");}}return e;},_uiSetChildSelected:function(e){var f=this.get("boundingBox"),d=this.getClassName("selected");if(e===0){f.removeClass(d);}else{f.addClass(d);}},_afterChildSelectedChange:function(d){this._uiSetChildSelected(d.newVal);},_syncUIChild:function(){this._uiSetChildSelected(this.get("selected"));},_bindUIChild:function(){this.after("selectedChange",this._afterChildSelectedChange);}};c.WidgetChild=a;},"3.7.1pr1",{requires:["base-build","widget"]});