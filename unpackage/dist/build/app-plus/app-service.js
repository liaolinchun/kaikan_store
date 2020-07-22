var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPay']])
Z([[7],[3,'footerbottom']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longtap']],[[4],[[5],[[4],[[5],[[5],[1,'longtap']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'ifShow']])
Z([3,'__l'])
Z(z[0])
Z([3,'qrcode1'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'qrR']]]]]]]]])
Z([3,'qrcode'])
Z([[7],[3,'icon']])
Z([[7],[3,'iconsize']])
Z([[7],[3,'loadMake']])
Z([[7],[3,'lv']])
Z([[7],[3,'onval']])
Z([[7],[3,'pdground']])
Z([[7],[3,'size']])
Z([[7],[3,'unit']])
Z([1,true])
Z([[7],[3,'val']])
Z([3,'f293c7f6-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'addressList']])
Z(z[1])
Z([[2,'!='],[[6],[[7],[3,'addressList']],[3,'length']],[1,0]])
Z([3,'__e'])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'checkAddress']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'mo_ren']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'addressList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'0e0a4db1-1'])
Z(z[1])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^func']],[[4],[[5],[[4],[[5],[1,'setSelect']]]]]]]]])
Z([3,'getCity'])
Z([[7],[3,'showSite']])
Z([3,'0e0a4db1-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'city'])
Z([3,'true'])
Z([3,'index1'])
Z([3,'prov'])
Z([[7],[3,'province']])
Z(z[2])
Z([[7],[3,'showOne']])
Z([3,'index2'])
Z(z[0])
Z([[7],[3,'citys']])
Z(z[7])
Z([[7],[3,'showTwo']])
Z([3,'index3'])
Z([3,'reg'])
Z([[7],[3,'region']])
Z(z[12])
Z([[7],[3,'showThree']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'!'],[[7],[3,'hasLogin']]],[[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]]])
Z([3,'empty'])
Z([[7],[3,'hasLogin']])
Z(z[2])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'goodsList']])
Z(z[4])
Z([3,'__e'])
Z(z[8])
Z(z[8])
Z([[4],[[5],[[5],[1,'production']],[[2,'?:'],[[2,'=='],[[7],[3,'theIndex']],[[7],[3,'index']]],[1,'open'],[[2,'?:'],[[2,'=='],[[7],[3,'oldIndex']],[[7],[3,'index']]],[1,'close'],[1,'']]]]])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchStart']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchMove']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchEnd']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]]])
Z(z[8])
Z([3,'goods-info'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleGoodsInfo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'__l'])
Z(z[8])
Z(z[8])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'add']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]],[[4],[[5],[[5],[1,'^minus']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'minus']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1775f8c0-1-'],[[7],[3,'index']]])
Z([[2,'=='],[[2,'!'],[[6],[[7],[3,'goodsList']],[3,'length']]],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'selectedList']],[3,'length']],[1,0]])
Z([[7],[3,'sumPrice']])
Z(z[16])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'^func']],[[4],[[5],[[4],[[5],[1,'setPay']]]]]]]]])
Z([[7],[3,'footerbottom']])
Z([[7],[3,'showPay']])
Z([3,'1775f8c0-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'9d275500-1'])
Z(z[0])
Z([3,'9d275500-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'370ac2c5-1'])
Z(z[0])
Z([[7],[3,'footer_Text']])
Z([[7],[3,'goodsListCur']])
Z([[7],[3,'showTitle']])
Z([3,'370ac2c5-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'box'])
Z([[7],[3,'ten']])
Z([[7],[3,'hunbit']])
Z([[7],[3,'debit']])
Z([[7],[3,'myriabit']])
Z([[7],[3,'kilbit']])
Z([[7],[3,'decade']])
Z([[7],[3,'unit']])
Z([[7],[3,'isShow']])
Z([[7],[3,'shareShow']])
Z([3,'__l'])
Z([[7],[3,'goodsInfo']])
Z([[7],[3,'money']])
Z([3,'1664f398-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'wechatShow']]])
Z(z[0])
Z([[7],[3,'wechatShow']])
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'Series'])
Z([[7],[3,'goodsInfo']])
Z([[7],[3,'money']])
Z([3,'7f4a2cab-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^minus']],[[4],[[5],[[4],[[5],[1,'minus']]]]]]]],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[1,'add']]]]]]]]])
Z([[7],[3,'goodsInfo']])
Z([3,'3b9ee354-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'2aca65e9-1'])
Z(z[0])
Z([3,'2aca65e9-2'])
Z(z[0])
Z([3,'__e'])
Z(z[5])
Z(z[5])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[1,'add']]]]]]]],[[4],[[5],[[5],[1,'^minus']],[[4],[[5],[[4],[[5],[1,'minus']]]]]]]],[[4],[[5],[[5],[1,'^func']],[[4],[[5],[[4],[[5],[1,'setSelect']]]]]]]]])
Z([3,'Series'])
Z([[7],[3,'goodsInfo']])
Z([[7],[3,'goodsSpec']])
Z([[7],[3,'spaceInfo']])
Z([3,'2aca65e9-3'])
Z(z[0])
Z([[7],[3,'goodsData']])
Z([3,'2aca65e9-4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showBack']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showTitle']])
Z([[2,'!'],[[7],[3,'showTitle']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1da55560-1'])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^func']],[[4],[[5],[[4],[[5],[1,'toCart']]]]]]]]])
Z([3,'1da55560-2'])
Z(z[0])
Z([[7],[3,'hotList']])
Z([[7],[3,'showTitle']])
Z([3,'1da55560-3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[6],[[7],[3,'imgList']],[3,'length']],[1,3]])
Z([[2,'>'],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'addressData']],[3,'mo_ren']],[1,1]])
Z([[2,'!'],[[7],[3,'showPay']]])
Z([[7],[3,'sum']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^func']],[[4],[[5],[[4],[[5],[1,'setPay']]]]]]]]])
Z([3,'Series'])
Z([[7],[3,'showPay']])
Z([3,'z-index:9999;'])
Z([3,'503cc778-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'showOrder']])
Z(z[0])
Z([3,'__e'])
Z([3,'unit'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'showOrder']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'idx'])
Z([3,'i'])
Z([[6],[[7],[3,'item']],[3,'detail']])
Z(z[7])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state_name']],[1,'去评价']])
Z([[7],[3,'loading']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'showOrder']],[3,'length']],[1,0]],[[2,'!'],[[7],[3,'loading']]]])
Z([[7],[3,'sum']])
Z([3,'__l'])
Z(z[4])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^func']],[[4],[[5],[[4],[[5],[1,'setPay']]]]]]]]])
Z([3,'Series'])
Z([[7],[3,'showPay']])
Z([3,'z-index:9999;'])
Z([3,'3c50aaa2-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'hideTime']]])
Z([[7],[3,'hideTime']])
Z(z[0])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'addressData']])
Z([3,'__l'])
Z([1,true])
Z([3,'634eba9a-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'addressData']])
Z([3,'__l'])
Z([3,'0e3b8fc9-1'])
Z([[2,'!'],[[7],[3,'showPay']]])
Z(z[1])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^func']],[[4],[[5],[[4],[[5],[1,'setPay']]]]]]]]])
Z([3,'Series'])
Z([[7],[3,'showPay']])
Z([3,'z-index:9999;'])
Z([3,'0e3b8fc9-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'9a41ee6c-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__l'])
Z([3,'41ebb566-1'])
Z([3,'input-content'])
Z([[7],[3,'isVerify']])
Z([[7],[3,'toVerify']])
Z([[7],[3,'toRes']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'22008472-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'wechatShow']])
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'Series'])
Z([[7],[3,'goodsInfo']])
Z([[7],[3,'money']])
Z([3,'27b5bee6-1'])
Z([[7],[3,'loading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'380011e0-1'])
Z([3,'news'])
Z([[7],[3,'InfoShow']])
Z([[7],[3,'serviceShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/counter.wxml','./components/popupPay.wxml','./components/status.wxml','./components/tki-qrcode/tki-qrcode.wxml','./components/wechat.wxml','./pages/address/address.wxml','./pages/address/addressManage.wxml','./pages/address/base/popupSite.wxml','./pages/cart/cart.wxml','./pages/category/base/head.wxml','./pages/category/category.wxml','./pages/category/toCategory.wxml','./pages/game/index.wxml','./pages/game/share.wxml','./pages/good/base/popupSpec.wxml','./pages/good/base/ratings.wxml','./pages/good/goods.wxml','./pages/good/goodsEval.wxml','./pages/good/goodsHeader.wxml','./pages/home/base/pageHeader.wxml','./pages/home/base/pageHot.wxml','./pages/home/home.wxml','./pages/order/base/afterSale.wxml','./pages/order/base/createOrder.wxml','./pages/order/base/orderComment.wxml','./pages/order/order.wxml','./pages/pay/base/payHeader.wxml','./pages/pay/endOrder.wxml','./pages/pay/toPay.wxml','./pages/public/login.wxml','./pages/public/register.wxml','./pages/set/base/setPhone.wxml','./pages/set/set.wxml','./pages/user/base/gameOrder.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_v()
_(r,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
if(_oz(z,1,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
}
xC.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oH=_mz(z,'view',['bindlongtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,3,e,s,gg)){cI.wxVkey=1
var oJ=_mz(z,'tki-qrcode',['bind:__l',4,'bind:result',1,'cid',2,'class',3,'data-event-opts',4,'data-ref',5,'icon',6,'iconSize',7,'loadMake',8,'lv',9,'onval',10,'pdground',11,'size',12,'unit',13,'usingComponents',14,'val',15,'vueId',16],[],e,s,gg)
_(cI,oJ)
}
cI.wxXCkey=1
cI.wxXCkey=3
_(r,oH)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var eN=_v()
_(aL,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
if(_oz(z,5,xQ,oP,gg)){cT.wxVkey=1
var hU=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],xQ,oP,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,9,xQ,oP,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
_(cT,hU)
}
cT.wxXCkey=1
return oR
}
eN.wxXCkey=2
_2z(z,3,bO,e,s,gg,eN,'item','index','index')
var tM=_v()
_(aL,tM)
if(_oz(z,10,e,s,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
_(r,aL)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oX=_n('view')
_rz(z,oX,'class',0,e,s,gg)
var lY=_mz(z,'page-status',['bind:__l',1,'vueId',1],[],e,s,gg)
_(oX,lY)
var aZ=_mz(z,'popup-site',['bind:__l',3,'bind:func',1,'class',2,'data-event-opts',3,'data-ref',4,'showSite',5,'vueId',6],[],e,s,gg)
_(oX,aZ)
_(r,oX)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var e2=_mz(z,'scroll-view',['class',0,'scrollY',1],[],e,s,gg)
var b3=_v()
_(e2,b3)
var o4=function(o6,x5,f7,gg){
var h9=_v()
_(f7,h9)
if(_oz(z,6,o6,x5,gg)){h9.wxVkey=1
}
h9.wxXCkey=1
return f7
}
b3.wxXCkey=2
_2z(z,4,o4,e,s,gg,b3,'prov','index1','index1')
var o0=_v()
_(e2,o0)
var cAB=function(lCB,oBB,aDB,gg){
var eFB=_v()
_(aDB,eFB)
if(_oz(z,11,lCB,oBB,gg)){eFB.wxVkey=1
}
eFB.wxXCkey=1
return aDB
}
o0.wxXCkey=2
_2z(z,9,cAB,e,s,gg,o0,'city','index2','index2')
var bGB=_v()
_(e2,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
if(_oz(z,16,oJB,xIB,gg)){hMB.wxVkey=1
}
hMB.wxXCkey=1
return fKB
}
bGB.wxXCkey=2
_2z(z,14,oHB,e,s,gg,bGB,'reg','index3','index3')
_(r,e2)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var cOB=_n('view')
var oPB=_v()
_(cOB,oPB)
if(_oz(z,0,e,s,gg)){oPB.wxVkey=1
var aRB=_n('view')
_rz(z,aRB,'class',1,e,s,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,2,e,s,gg)){tSB.wxVkey=1
var eTB=_v()
_(tSB,eTB)
if(_oz(z,3,e,s,gg)){eTB.wxVkey=1
}
eTB.wxXCkey=1
}
else{tSB.wxVkey=2
}
tSB.wxXCkey=1
_(oPB,aRB)
}
var bUB=_v()
_(cOB,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_mz(z,'view',['bindtouchend',8,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4],[],oXB,xWB,gg)
var o2B=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],oXB,xWB,gg)
var c3B=_mz(z,'counter',['bind:__l',16,'bind:add',1,'bind:minus',2,'data-event-opts',3,'goodsInfo',4,'vueId',5],[],oXB,xWB,gg)
_(o2B,c3B)
_(h1B,o2B)
_(fYB,h1B)
return fYB
}
bUB.wxXCkey=4
_2z(z,6,oVB,e,s,gg,bUB,'item','index','index')
var lQB=_v()
_(cOB,lQB)
if(_oz(z,22,e,s,gg)){lQB.wxVkey=1
var o4B=_v()
_(lQB,o4B)
if(_oz(z,23,e,s,gg)){o4B.wxVkey=1
}
o4B.wxXCkey=1
}
var l5B=_mz(z,'popup-pay',['Price',24,'bind:__l',1,'bind:func',2,'data-event-opts',3,'footerbottom',4,'showPay',5,'vueId',6],[],e,s,gg)
_(cOB,l5B)
oPB.wxXCkey=1
lQB.wxXCkey=1
_(r,cOB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var e8B=_n('view')
var b9B=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(e8B,b9B)
var o0B=_mz(z,'page-head',['bind:__l',2,'vueId',1],[],e,s,gg)
_(e8B,o0B)
_(r,e8B)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oBC=_n('view')
var fCC=_mz(z,'page-head',['bind:__l',0,'vueId',1],[],e,s,gg)
_(oBC,fCC)
var cDC=_mz(z,'page-hot',['bind:__l',2,'footer_Text',1,'hotList',2,'showTitle',3,'vueId',4],[],e,s,gg)
_(oBC,cDC)
_(r,oBC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oFC=_n('view')
var lIC=_n('view')
_rz(z,lIC,'class',0,e,s,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,1,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(lIC,tKC)
if(_oz(z,2,e,s,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(lIC,eLC)
if(_oz(z,3,e,s,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(lIC,bMC)
if(_oz(z,4,e,s,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(lIC,oNC)
if(_oz(z,5,e,s,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(lIC,xOC)
if(_oz(z,6,e,s,gg)){xOC.wxVkey=1
}
var oPC=_v()
_(lIC,oPC)
if(_oz(z,7,e,s,gg)){oPC.wxVkey=1
}
aJC.wxXCkey=1
tKC.wxXCkey=1
eLC.wxXCkey=1
bMC.wxXCkey=1
oNC.wxXCkey=1
xOC.wxXCkey=1
oPC.wxXCkey=1
_(oFC,lIC)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,8,e,s,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(oFC,oHC)
if(_oz(z,9,e,s,gg)){oHC.wxVkey=1
var fQC=_mz(z,'share',['bind:__l',10,'goodsInfo',1,'money',2,'vueId',3],[],e,s,gg)
_(oHC,fQC)
}
cGC.wxXCkey=1
oHC.wxXCkey=1
oHC.wxXCkey=3
_(r,oFC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var hSC=_n('view')
var oTC=_v()
_(hSC,oTC)
if(_oz(z,0,e,s,gg)){oTC.wxVkey=1
}
var cUC=_v()
_(hSC,cUC)
if(_oz(z,1,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(hSC,oVC)
if(_oz(z,2,e,s,gg)){oVC.wxVkey=1
var lWC=_mz(z,'wechat',['bind:__l',3,'class',1,'data-ref',2,'goodsInfo',3,'money',4,'vueId',5],[],e,s,gg)
_(oVC,lWC)
}
oTC.wxXCkey=1
cUC.wxXCkey=1
oVC.wxXCkey=1
oVC.wxXCkey=3
_(r,hSC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var tYC=_mz(z,'counter',['bind:__l',0,'bind:add',1,'bind:minus',1,'data-event-opts',2,'goodsInfo',3,'vueId',4],[],e,s,gg)
_(r,tYC)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var o2C=_n('view')
var x3C=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(o2C,x3C)
var o4C=_mz(z,'goods-header',['bind:__l',2,'vueId',1],[],e,s,gg)
_(o2C,o4C)
var f5C=_mz(z,'popup-spec',['bind:__l',4,'bind:add',1,'bind:func',2,'bind:minus',3,'class',4,'data-event-opts',5,'data-ref',6,'goodsInfo',7,'goodsSpec',8,'spaceInfo',9,'vueId',10],[],e,s,gg)
_(o2C,f5C)
var c6C=_mz(z,'goods-eval',['bind:__l',15,'goodsData',1,'vueId',2],[],e,s,gg)
_(o2C,c6C)
_(r,o2C)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var c9C=_v()
_(r,c9C)
if(_oz(z,0,e,s,gg)){c9C.wxVkey=1
}
c9C.wxXCkey=1
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var aBD=_n('view')
var tCD=_v()
_(aBD,tCD)
if(_oz(z,0,e,s,gg)){tCD.wxVkey=1
}
var eDD=_v()
_(aBD,eDD)
if(_oz(z,1,e,s,gg)){eDD.wxVkey=1
}
tCD.wxXCkey=1
eDD.wxXCkey=1
_(r,aBD)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oFD=_n('view')
var xGD=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(oFD,xGD)
var oHD=_mz(z,'page-header',['bind:__l',2,'bind:func',1,'data-event-opts',2,'vueId',3],[],e,s,gg)
_(oFD,oHD)
var fID=_mz(z,'page-hot',['bind:__l',6,'hotList',1,'showTitle',2,'vueId',3],[],e,s,gg)
_(oFD,fID)
_(r,oFD)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var hKD=_n('view')
var oLD=_v()
_(hKD,oLD)
if(_oz(z,0,e,s,gg)){oLD.wxVkey=1
}
var cMD=_v()
_(hKD,cMD)
if(_oz(z,1,e,s,gg)){cMD.wxVkey=1
}
oLD.wxXCkey=1
cMD.wxXCkey=1
_(r,hKD)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var lOD=_n('view')
var aPD=_v()
_(lOD,aPD)
if(_oz(z,0,e,s,gg)){aPD.wxVkey=1
}
var tQD=_v()
_(lOD,tQD)
if(_oz(z,1,e,s,gg)){tQD.wxVkey=1
}
var eRD=_mz(z,'popup-pay',['Price',2,'bind:__l',1,'bind:func',2,'class',3,'data-event-opts',4,'data-ref',5,'showPay',6,'style',7,'vueId',8],[],e,s,gg)
_(lOD,eRD)
aPD.wxXCkey=1
tQD.wxXCkey=1
_(r,lOD)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var xUD=_n('view')
var cXD=_v()
_(xUD,cXD)
var hYD=function(c1D,oZD,o2D,gg){
var a4D=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],c1D,oZD,gg)
var t5D=_v()
_(a4D,t5D)
var e6D=function(o8D,b7D,x9D,gg){
var fAE=_v()
_(x9D,fAE)
if(_oz(z,11,o8D,b7D,gg)){fAE.wxVkey=1
}
fAE.wxXCkey=1
return x9D
}
t5D.wxXCkey=2
_2z(z,9,e6D,c1D,oZD,gg,t5D,'i','idx','idx')
_(o2D,a4D)
return o2D
}
cXD.wxXCkey=2
_2z(z,2,hYD,e,s,gg,cXD,'item','index','index')
var oVD=_v()
_(xUD,oVD)
if(_oz(z,12,e,s,gg)){oVD.wxVkey=1
}
var fWD=_v()
_(xUD,fWD)
if(_oz(z,13,e,s,gg)){fWD.wxVkey=1
}
var cBE=_mz(z,'popup-pay',['Price',14,'bind:__l',1,'bind:func',2,'class',3,'data-event-opts',4,'data-ref',5,'showPay',6,'style',7,'vueId',8],[],e,s,gg)
_(xUD,cBE)
oVD.wxXCkey=1
fWD.wxXCkey=1
_(r,xUD)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var oDE=_n('view')
var cEE=_v()
_(oDE,cEE)
if(_oz(z,0,e,s,gg)){cEE.wxVkey=1
}
var oFE=_n('view')
var lGE=_v()
_(oFE,lGE)
if(_oz(z,1,e,s,gg)){lGE.wxVkey=1
}
var aHE=_v()
_(oFE,aHE)
if(_oz(z,2,e,s,gg)){aHE.wxVkey=1
}
var tIE=_v()
_(oFE,tIE)
if(_oz(z,3,e,s,gg)){tIE.wxVkey=1
}
lGE.wxXCkey=1
aHE.wxXCkey=1
tIE.wxXCkey=1
_(oDE,oFE)
cEE.wxXCkey=1
_(r,oDE)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var bKE=_mz(z,'pay-header',['addressData',0,'bind:__l',1,'hideTime',1,'vueId',2],[],e,s,gg)
_(r,bKE)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var xME=_n('view')
var fOE=_mz(z,'pay-header',['addressData',0,'bind:__l',1,'vueId',1],[],e,s,gg)
_(xME,fOE)
var oNE=_v()
_(xME,oNE)
if(_oz(z,3,e,s,gg)){oNE.wxVkey=1
}
var cPE=_mz(z,'popup-pay',['bind:__l',4,'bind:func',1,'class',2,'data-event-opts',3,'data-ref',4,'showPay',5,'style',6,'vueId',7],[],e,s,gg)
_(xME,cPE)
oNE.wxXCkey=1
_(r,xME)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oRE=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,oRE)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var oTE=_n('view')
_rz(z,oTE,'class',0,e,s,gg)
var lUE=_mz(z,'page-status',['bind:__l',1,'vueId',1],[],e,s,gg)
_(oTE,lUE)
var aVE=_n('view')
_rz(z,aVE,'class',3,e,s,gg)
var tWE=_v()
_(aVE,tWE)
if(_oz(z,4,e,s,gg)){tWE.wxVkey=1
}
var eXE=_v()
_(aVE,eXE)
if(_oz(z,5,e,s,gg)){eXE.wxVkey=1
}
var bYE=_v()
_(aVE,bYE)
if(_oz(z,6,e,s,gg)){bYE.wxVkey=1
}
tWE.wxXCkey=1
eXE.wxXCkey=1
bYE.wxXCkey=1
_(oTE,aVE)
_(r,oTE)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var x1E=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,x1E)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var c4E=_n('view')
var h5E=_v()
_(c4E,h5E)
if(_oz(z,0,e,s,gg)){h5E.wxVkey=1
var c7E=_mz(z,'wechat',['bind:__l',1,'class',1,'data-ref',2,'goodsInfo',3,'money',4,'vueId',5],[],e,s,gg)
_(h5E,c7E)
}
var o6E=_v()
_(c4E,o6E)
if(_oz(z,7,e,s,gg)){o6E.wxVkey=1
}
h5E.wxXCkey=1
h5E.wxXCkey=3
o6E.wxXCkey=1
_(r,c4E)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var l9E=_n('view')
var a0E=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(l9E,a0E)
var tAF=_n('view')
_rz(z,tAF,'class',2,e,s,gg)
var eBF=_v()
_(tAF,eBF)
if(_oz(z,3,e,s,gg)){eBF.wxVkey=1
}
var bCF=_v()
_(tAF,bCF)
if(_oz(z,4,e,s,gg)){bCF.wxVkey=1
}
eBF.wxXCkey=1
bCF.wxXCkey=1
_(l9E,tAF)
_(r,l9E)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/home/home","pages/order/base/createOrder","pages/pay/toPay","pages/pay/endOrder","pages/category/category","pages/category/toCategory","pages/user/user","pages/user/base/gameOrder","pages/set/set","pages/set/base/setPhone","pages/public/login","pages/public/register","pages/good/goods","pages/good/base/ratings","pages/cart/cart","pages/order/order","pages/order/base/afterSale","pages/order/base/orderComment","pages/address/address","pages/address/addressManage","pages/game/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":" #fff","backgroundColor":"#fff"},"tabBar":{"color":"#333333","selectedColor":"#f06c7a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/home/home","iconPath":"static/img/tabBar/home.png","selectedIconPath":"static/img/tabBar/home-on.png","text":"首页"},{"pagePath":"pages/category/category","iconPath":"static/img/tabBar/category.png","selectedIconPath":"static/img/tabBar/category-on.png","text":"分类"},{"pagePath":"pages/cart/cart","iconPath":"static/img/tabBar/cart.png","selectedIconPath":"static/img/tabBar/cart-on.png","text":"购物车"},{"pagePath":"pages/user/user","iconPath":"static/img/tabBar/user.png","selectedIconPath":"static/img/tabBar/user-on.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"砍砍","compilerVersion":"2.6.5","usingComponents":{"page-status":"/components/status"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/counter.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/counter.wxml']=$gwx('./components/counter.wxml');

__wxAppCode__['components/popupPay.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/popupPay.wxml']=$gwx('./components/popupPay.wxml');

__wxAppCode__['components/status.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/status.wxml']=$gwx('./components/status.wxml');

__wxAppCode__['components/tki-qrcode/tki-qrcode.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/tki-qrcode/tki-qrcode.wxml']=$gwx('./components/tki-qrcode/tki-qrcode.wxml');

__wxAppCode__['components/wechat.json']={"component":true,"usingComponents":{"tki-qrcode":"/components/tki-qrcode/tki-qrcode"}};
__wxAppCode__['components/wechat.wxml']=$gwx('./components/wechat.wxml');

__wxAppCode__['pages/address/address.json']={"navigationBarTitleText":"收货地址","usingComponents":{}};
__wxAppCode__['pages/address/address.wxml']=$gwx('./pages/address/address.wxml');

__wxAppCode__['pages/address/addressManage.json']={"navigationBarTitleText":"编辑收货地址","usingComponents":{"page-status":"/components/status","popup-site":"/pages/address/base/popupSite"}};
__wxAppCode__['pages/address/addressManage.wxml']=$gwx('./pages/address/addressManage.wxml');

__wxAppCode__['pages/address/base/popupSite.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/address/base/popupSite.wxml']=$gwx('./pages/address/base/popupSite.wxml');

__wxAppCode__['pages/cart/cart.json']={"navigationBarTitleText":"购物车","usingComponents":{"counter":"/components/counter","popup-pay":"/components/popupPay"}};
__wxAppCode__['pages/cart/cart.wxml']=$gwx('./pages/cart/cart.wxml');

__wxAppCode__['pages/category/base/head.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/category/base/head.wxml']=$gwx('./pages/category/base/head.wxml');

__wxAppCode__['pages/category/category.json']={"navigationBarTitleText":"分类","enablePullDownRefresh":true,"onReachBottomDistance":0,"titleNView":false,"bounce":"none","usingComponents":{"page-status":"/components/status","page-head":"/pages/home/base/pageHeader"}};
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/category/toCategory.json']={"navigationBarTitleText":"跳转分类","enablePullDownRefresh":true,"onReachBottomDistance":0,"titleNView":false,"bounce":"none","usingComponents":{"page-head":"/pages/category/base/head","page-hot":"/pages/home/base/pageHot"}};
__wxAppCode__['pages/category/toCategory.wxml']=$gwx('./pages/category/toCategory.wxml');

__wxAppCode__['pages/game/index.json']={"navigationBarTitleText":"开砍","usingComponents":{"share":"/pages/game/share"}};
__wxAppCode__['pages/game/index.wxml']=$gwx('./pages/game/index.wxml');

__wxAppCode__['pages/game/share.json']={"usingComponents":{"wechat":"/components/wechat"},"component":true};
__wxAppCode__['pages/game/share.wxml']=$gwx('./pages/game/share.wxml');

__wxAppCode__['pages/good/base/popupSpec.json']={"usingComponents":{"counter":"/components/counter"},"component":true};
__wxAppCode__['pages/good/base/popupSpec.wxml']=$gwx('./pages/good/base/popupSpec.wxml');

__wxAppCode__['pages/good/base/ratings.json']={"navigationBarTitleText":"商品评论","usingComponents":{}};
__wxAppCode__['pages/good/base/ratings.wxml']=$gwx('./pages/good/base/ratings.wxml');

__wxAppCode__['pages/good/goods.json']={"navigationBarTitleText":"商品","navigationBarTextStyle":"black","titleNView":false,"bounce":"none","usingComponents":{"page-status":"/components/status","goods-header":"/pages/good/goodsHeader","popup-spec":"/pages/good/base/popupSpec","goods-eval":"/pages/good/goodsEval"}};
__wxAppCode__['pages/good/goods.wxml']=$gwx('./pages/good/goods.wxml');

__wxAppCode__['pages/good/goodsEval.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/good/goodsEval.wxml']=$gwx('./pages/good/goodsEval.wxml');

__wxAppCode__['pages/good/goodsHeader.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/good/goodsHeader.wxml']=$gwx('./pages/good/goodsHeader.wxml');

__wxAppCode__['pages/home/base/pageHeader.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/home/base/pageHeader.wxml']=$gwx('./pages/home/base/pageHeader.wxml');

__wxAppCode__['pages/home/base/pageHot.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/home/base/pageHot.wxml']=$gwx('./pages/home/base/pageHot.wxml');

__wxAppCode__['pages/home/home.json']={"navigationBarTitleText":"商城","titleNView":false,"bounce":"none","usingComponents":{"page-status":"/components/status","page-header":"/pages/home/base/pageHeader","page-hot":"/pages/home/base/pageHot"}};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/order/base/afterSale.json']={"navigationBarTitleText":"申请售后","usingComponents":{}};
__wxAppCode__['pages/order/base/afterSale.wxml']=$gwx('./pages/order/base/afterSale.wxml');

__wxAppCode__['pages/order/base/createOrder.json']={"navigationBarTitleText":"提交订单","usingComponents":{"popup-pay":"/components/popupPay"}};
__wxAppCode__['pages/order/base/createOrder.wxml']=$gwx('./pages/order/base/createOrder.wxml');

__wxAppCode__['pages/order/base/orderComment.json']={"navigationBarTitleText":"发表评价","navigationBarBackgroundColor":"#F7F7F7","usingComponents":{}};
__wxAppCode__['pages/order/base/orderComment.wxml']=$gwx('./pages/order/base/orderComment.wxml');

__wxAppCode__['pages/order/order.json']={"navigationBarTitleText":"我的订单","navigationBarBackgroundColor":"#F7F7F7","usingComponents":{"popup-pay":"/components/popupPay"}};
__wxAppCode__['pages/order/order.wxml']=$gwx('./pages/order/order.wxml');

__wxAppCode__['pages/pay/base/payHeader.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/pay/base/payHeader.wxml']=$gwx('./pages/pay/base/payHeader.wxml');

__wxAppCode__['pages/pay/endOrder.json']={"navigationBarTitleText":"订单详情","navigationBarBackgroundColor":"#F7F7F7","usingComponents":{"pay-header":"/pages/pay/base/payHeader","popup-pay":"/components/popupPay"}};
__wxAppCode__['pages/pay/endOrder.wxml']=$gwx('./pages/pay/endOrder.wxml');

__wxAppCode__['pages/pay/toPay.json']={"navigationBarTitleText":"订单详情","navigationBarBackgroundColor":"#F7F7F7","usingComponents":{"pay-header":"/pages/pay/base/payHeader","popup-pay":"/components/popupPay"}};
__wxAppCode__['pages/pay/toPay.wxml']=$gwx('./pages/pay/toPay.wxml');

__wxAppCode__['pages/public/login.json']={"navigationBarTitleText":"","navigationStyle":"custom","titleNView":false,"animationType":"slide-in-bottom","usingComponents":{"page-status":"/components/status"}};
__wxAppCode__['pages/public/login.wxml']=$gwx('./pages/public/login.wxml');

__wxAppCode__['pages/public/register.json']={"navigationBarTitleText":"","navigationStyle":"custom","titleNView":false,"animationType":"slide-in-bottom","usingComponents":{"page-status":"/components/status"}};
__wxAppCode__['pages/public/register.wxml']=$gwx('./pages/public/register.wxml');

__wxAppCode__['pages/set/base/setPhone.json']={"navigationBarTitleText":"绑定手机","usingComponents":{"page-status":"/components/status"}};
__wxAppCode__['pages/set/base/setPhone.wxml']=$gwx('./pages/set/base/setPhone.wxml');

__wxAppCode__['pages/set/set.json']={"navigationBarTitleText":"设置","usingComponents":{}};
__wxAppCode__['pages/set/set.wxml']=$gwx('./pages/set/set.wxml');

__wxAppCode__['pages/user/base/gameOrder.json']={"navigationBarTitleText":"我的砍价","usingComponents":{"wechat":"/components/wechat"}};
__wxAppCode__['pages/user/base/gameOrder.wxml']=$gwx('./pages/user/base/gameOrder.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"我的","titleNView":false,"bounce":"none","usingComponents":{"page-status":"/components/status"}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1130:function(t,e,n){"use strict";n.r(e);var o=n("5c48");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("ba0d");var r,i,a,c,f=n("f0c5"),l=Object(f["a"])(o["default"],r,i,!1,null,null,null,!1,a,c);e["default"]=l.exports},"5c48":function(t,e,n){"use strict";n.r(e);var o=n("6f5e"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a},"6f5e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62"),u=r(n("6467"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={methods:i({},(0,o.mapMutations)(["login","logout"])),onLaunch:function(){var e=this;this.request({url:u.default.isLogin,method:"POST",success:function(n){if(t("log",n," at App.vue:18"),0!=n.error_code)e.logout();else{var o={id:1,mobile:n.tell,nickname:"砍砍用户".concat(n.tell),portrait:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584357130382&di=99c11194936cc6efc617433713877360&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-501c31cde297a64e0710b6a2a592b156_hd.jpg"};e.login(o)}}})},onShow:function(){t("log","App Show"," at App.vue:44")},onHide:function(){t("log","App Hide"," at App.vue:47")}};e.default=c}).call(this,n("0de9")["default"])},ba0d:function(t,e,n){"use strict";var o=n("e3a7"),u=n.n(o);u.a},ca22:function(t,e,n){"use strict";(function(t,e){n("1eb0"),n("921b");var o=l(n("66fd")),u=l(n("1130")),r=l(n("e4df")),i=l(n("0f5c")),a=l(n("e9e5")),c=l(n("8627")),f=l(n("90a1"));function l(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.prototype.request=i.default;var p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(e)&&t.showToast({title:e,duration:n,mask:o,icon:u})},m=function(t){return new Promise(function(e){setTimeout(function(){e(a.default[t])},500)})},b=function(t){return new Promise(function(e){setTimeout(function(){e(f.default[t])},500)})},g=function(t){return new Promise(function(e){setTimeout(function(){e(c.default[t])},500)})},v=function(){var t=getCurrentPages(),e=t[t.length-2];return e.$vm};o.default.prototype.$api={json:m,listjson:g,prePage:v,msg:p,citys:b},o.default.prototype.$store=r.default;var h=function(){return n.e("components/status").then(n.bind(null,"83d2"))};o.default.component("page-status",h),o.default.config.productionTip=!1,u.default.mpType="app";var y=new o.default(s({},u.default));e(y).$mount()}).call(this,n("6e42")["default"],n("6e42")["createApp"])},e3a7:function(t,e,n){}},[["ca22","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var a, r, p = t[0], u = t[1], c = t[2], g = 0, i = []; g < p.length; g++) {
      r = p[g], n[r] && i.push(n[r][0]), n[r] = 0;
    }

    for (a in u) {
      Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }

    d && d(t);

    while (i.length) {
      i.shift()();
    }

    return s.push.apply(s, c || []), o();
  }

  function o() {
    for (var e, t = 0; t < s.length; t++) {
      for (var o = s[t], a = !0, r = 1; r < o.length; r++) {
        var p = o[r];
        0 !== n[p] && (a = !1);
      }

      a && (s.splice(t--, 1), e = u(u.s = o[0]));
    }

    return e;
  }

  var a = {},
      r = {
    "common/runtime": 0
  },
      n = {
    "common/runtime": 0
  },
      s = [];

  function p(e) {
    return u.p + "" + e + ".js";
  }

  function u(t) {
    if (a[t]) return a[t].exports;
    var o = a[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(o.exports, o, o.exports, u), o.l = !0, o.exports;
  }

  u.e = function (e) {
    var t = [],
        o = {
      "components/status": 1,
      "pages/home/base/pageHeader": 1,
      "pages/home/base/pageHot": 1,
      "components/popupPay": 1,
      "pages/pay/base/payHeader": 1,
      "pages/category/base/head": 1,
      "components/wechat": 1,
      "pages/good/base/popupSpec": 1,
      "pages/good/goodsEval": 1,
      "pages/good/goodsHeader": 1,
      "components/counter": 1,
      "pages/address/base/popupSite": 1,
      "pages/game/share": 1,
      "components/tki-qrcode/tki-qrcode": 1
    };
    r[e] ? t.push(r[e]) : 0 !== r[e] && o[e] && t.push(r[e] = new Promise(function (t, o) {
      for (var a = ({
        "components/status": "components/status",
        "pages/home/base/pageHeader": "pages/home/base/pageHeader",
        "pages/home/base/pageHot": "pages/home/base/pageHot",
        "components/popupPay": "components/popupPay",
        "pages/pay/base/payHeader": "pages/pay/base/payHeader",
        "pages/category/base/head": "pages/category/base/head",
        "components/wechat": "components/wechat",
        "pages/good/base/popupSpec": "pages/good/base/popupSpec",
        "pages/good/goodsEval": "pages/good/goodsEval",
        "pages/good/goodsHeader": "pages/good/goodsHeader",
        "components/counter": "components/counter",
        "pages/address/base/popupSite": "pages/address/base/popupSite",
        "pages/game/share": "pages/game/share",
        "components/tki-qrcode/tki-qrcode": "components/tki-qrcode/tki-qrcode"
      }[e] || e) + ".wxss", n = u.p + a, s = document.getElementsByTagName("link"), p = 0; p < s.length; p++) {
        var c = s[p],
            g = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (g === a || g === n)) return t();
      }

      var i = document.getElementsByTagName("style");

      for (p = 0; p < i.length; p++) {
        c = i[p], g = c.getAttribute("data-href");
        if (g === a || g === n) return t();
      }

      var d = document.createElement("link");
      d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function (t) {
        var a = t && t.target && t.target.src || n,
            s = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
        s.request = a, delete r[e], d.parentNode.removeChild(d), o(s);
      }, d.href = n;
      var l = document.getElementsByTagName("head")[0];
      l.appendChild(d);
    }).then(function () {
      r[e] = 0;
    }));
    var a = n[e];
    if (0 !== a) if (a) t.push(a[2]);else {
      var s = new Promise(function (t, o) {
        a = n[e] = [t, o];
      });
      t.push(a[2] = s);
      var c,
          g = document.createElement("script");
      g.charset = "utf-8", g.timeout = 120, u.nc && g.setAttribute("nonce", u.nc), g.src = p(e), c = function c(t) {
        g.onerror = g.onload = null, clearTimeout(i);
        var o = n[e];

        if (0 !== o) {
          if (o) {
            var a = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src,
                s = new Error("Loading chunk " + e + " failed.\n(" + a + ": " + r + ")");
            s.type = a, s.request = r, o[1](s);
          }

          n[e] = void 0;
        }
      };
      var i = setTimeout(function () {
        c({
          type: "timeout",
          target: g
        });
      }, 12e4);
      g.onerror = g.onload = c, document.head.appendChild(g);
    }
    return Promise.all(t);
  }, u.m = e, u.c = a, u.d = function (e, t, o) {
    u.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, u.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, u.t = function (e, t) {
    if (1 & t && (e = u(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (u.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      u.d(o, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return o;
  }, u.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return u.d(t, "a", t), t;
  }, u.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, u.p = "/", u.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      g = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var i = 0; i < c.length; i++) {
    t(c[i]);
  }

  var d = g;
  o();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(e,l,a){"use strict";function t(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function u(){return"string"===typeof __channelId__&&__channelId__}function n(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var n=l.shift();if(u())return l.push(l.pop().replace("at ","uni-app:///")),console[n]["apply"](console,l);var r=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(u){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),i="";if(r.length>1){var v=r.pop();i=r.join("---COMMA---"),0===v.indexOf(" at ")?i+=v:i+="---COMMA---"+v}else i=r[0];console[n](i)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=n},"0f5c":function(e,l,a){"use strict";(function(l){e.exports=function(e){var a=e.url,t=e.method,u=e.header||{},n=e.data||{};t&&(t=t.toUpperCase(),"POST"==t&&(u={"content-type":"application/x-www-form-urlencoded"})),e.hideLoading||l.showLoading({title:"加载中..."}),l.request({url:a,method:t||"GET",header:u,data:n,success:function(a){a.statusCode&&200!=a.statusCode?l.showModal({content:""+a.msg}):"function"==typeof e.success&&e.success(a.data)},fail:function(a){l.showModal({content:""+a.msg}),"function"==typeof e.fail&&e.fail(a.data)},complete:function(){l.hideLoading(),"function"==typeof e.complete&&e.complete()}})}}).call(this,a("6e42")["default"])},1618:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={appid:"__UNI__0606751"};l.default=t},"1eb0":function(e,l,a){},"2f62":function(e,l,a){"use strict";a.r(l),a.d(l,"Store",function(){return f}),a.d(l,"install",function(){return S}),a.d(l,"mapState",function(){return T}),a.d(l,"mapMutations",function(){return E}),a.d(l,"mapGetters",function(){return P}),a.d(l,"mapActions",function(){return C}),a.d(l,"createNamespacedHelpers",function(){return D});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var t=function(e){var l=Number(e.version.split(".")[0]);if(l>=2)e.mixin({beforeCreate:t});else{var a=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[t].concat(e.init):t,a.call(this,e)}}function t(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},u="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function n(e){u&&(e._devtoolHook=u,u.emit("vuex:init",e),u.on("vuex:travel-to-state",function(l){e.replaceState(l)}),e.subscribe(function(e,l){u.emit("vuex:mutation",e,l)}))}function r(e,l){Object.keys(e).forEach(function(a){return l(e[a],a)})}function i(e){return null!==e&&"object"===typeof e}function v(e){return e&&"function"===typeof e.then}var o=function(e,l){this.runtime=l,this._children=Object.create(null),this._rawModule=e;var a=e.state;this.state=("function"===typeof a?a():a)||{}},b={namespaced:{configurable:!0}};b.namespaced.get=function(){return!!this._rawModule.namespaced},o.prototype.addChild=function(e,l){this._children[e]=l},o.prototype.removeChild=function(e){delete this._children[e]},o.prototype.getChild=function(e){return this._children[e]},o.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},o.prototype.forEachChild=function(e){r(this._children,e)},o.prototype.forEachGetter=function(e){this._rawModule.getters&&r(this._rawModule.getters,e)},o.prototype.forEachAction=function(e){this._rawModule.actions&&r(this._rawModule.actions,e)},o.prototype.forEachMutation=function(e){this._rawModule.mutations&&r(this._rawModule.mutations,e)},Object.defineProperties(o.prototype,b);var s=function(e){this.register([],e,!1)};function c(e,l,a){if(l.update(a),a.modules)for(var t in a.modules){if(!l.getChild(t))return void 0;c(e.concat(t),l.getChild(t),a.modules[t])}}s.prototype.get=function(e){return e.reduce(function(e,l){return e.getChild(l)},this.root)},s.prototype.getNamespace=function(e){var l=this.root;return e.reduce(function(e,a){return l=l.getChild(a),e+(l.namespaced?a+"/":"")},"")},s.prototype.update=function(e){c([],this.root,e)},s.prototype.register=function(e,l,a){var t=this;void 0===a&&(a=!0);var u=new o(l,a);if(0===e.length)this.root=u;else{var n=this.get(e.slice(0,-1));n.addChild(e[e.length-1],u)}l.modules&&r(l.modules,function(l,u){t.register(e.concat(u),l,a)})},s.prototype.unregister=function(e){var l=this.get(e.slice(0,-1)),a=e[e.length-1];l.getChild(a).runtime&&l.removeChild(a)};var h;var f=function(e){var l=this;void 0===e&&(e={}),!h&&"undefined"!==typeof window&&window.Vue&&S(window.Vue);var a=e.plugins;void 0===a&&(a=[]);var t=e.strict;void 0===t&&(t=!1);var u=e.state;void 0===u&&(u={}),"function"===typeof u&&(u=u()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var r=this,i=this,v=i.dispatch,o=i.commit;this.dispatch=function(e,l){return v.call(r,e,l)},this.commit=function(e,l,a){return o.call(r,e,l,a)},this.strict=t,y(this,u,[],this._modules.root),m(this,u),a.forEach(function(e){return e(l)}),h.config.devtools&&n(this)},d={state:{configurable:!0}};function p(e,l){return l.indexOf(e)<0&&l.push(e),function(){var a=l.indexOf(e);a>-1&&l.splice(a,1)}}function g(e,l){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var a=e.state;y(e,a,[],e._modules.root,!0),m(e,a,l)}function m(e,l,a){var t=e._vm;e.getters={};var u=e._wrappedGetters,n={};r(u,function(l,a){n[a]=function(){return l(e)},Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})});var i=h.config.silent;h.config.silent=!0,e._vm=new h({data:{$$state:l},computed:n}),h.config.silent=i,e.strict&&j(e),t&&(a&&e._withCommit(function(){t._data.$$state=null}),h.nextTick(function(){return t.$destroy()}))}function y(e,l,a,t,u){var n=!a.length,r=e._modules.getNamespace(a);if(t.namespaced&&(e._modulesNamespaceMap[r]=t),!n&&!u){var i=A(l,a.slice(0,-1)),v=a[a.length-1];e._withCommit(function(){h.set(i,v,t.state)})}var o=t.context=_(e,r,a);t.forEachMutation(function(l,a){var t=r+a;O(e,t,l,o)}),t.forEachAction(function(l,a){var t=l.root?a:r+a,u=l.handler||l;$(e,t,u,o)}),t.forEachGetter(function(l,a){var t=r+a;k(e,t,l,o)}),t.forEachChild(function(t,n){y(e,l,a.concat(n),t,u)})}function _(e,l,a){var t=""===l,u={dispatch:t?e.dispatch:function(a,t,u){var n=x(a,t,u),r=n.payload,i=n.options,v=n.type;return i&&i.root||(v=l+v),e.dispatch(v,r)},commit:t?e.commit:function(a,t,u){var n=x(a,t,u),r=n.payload,i=n.options,v=n.type;i&&i.root||(v=l+v),e.commit(v,r,i)}};return Object.defineProperties(u,{getters:{get:t?function(){return e.getters}:function(){return w(e,l)}},state:{get:function(){return A(e.state,a)}}}),u}function w(e,l){var a={},t=l.length;return Object.keys(e.getters).forEach(function(u){if(u.slice(0,t)===l){var n=u.slice(t);Object.defineProperty(a,n,{get:function(){return e.getters[u]},enumerable:!0})}}),a}function O(e,l,a,t){var u=e._mutations[l]||(e._mutations[l]=[]);u.push(function(l){a.call(e,t.state,l)})}function $(e,l,a,t){var u=e._actions[l]||(e._actions[l]=[]);u.push(function(l,u){var n=a.call(e,{dispatch:t.dispatch,commit:t.commit,getters:t.getters,state:t.state,rootGetters:e.getters,rootState:e.state},l,u);return v(n)||(n=Promise.resolve(n)),e._devtoolHook?n.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):n})}function k(e,l,a,t){e._wrappedGetters[l]||(e._wrappedGetters[l]=function(e){return a(t.state,t.getters,e.state,e.getters)})}function j(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function A(e,l){return l.length?l.reduce(function(e,l){return e[l]},e):e}function x(e,l,a){return i(e)&&e.type&&(a=l,l=e,e=e.type),{type:e,payload:l,options:a}}function S(e){h&&e===h||(h=e,t(h))}d.state.get=function(){return this._vm._data.$$state},d.state.set=function(e){0},f.prototype.commit=function(e,l,a){var t=this,u=x(e,l,a),n=u.type,r=u.payload,i=(u.options,{type:n,payload:r}),v=this._mutations[n];v&&(this._withCommit(function(){v.forEach(function(e){e(r)})}),this._subscribers.forEach(function(e){return e(i,t.state)}))},f.prototype.dispatch=function(e,l){var a=this,t=x(e,l),u=t.type,n=t.payload,r={type:u,payload:n},i=this._actions[u];if(i)return this._actionSubscribers.forEach(function(e){return e(r,a.state)}),i.length>1?Promise.all(i.map(function(e){return e(n)})):i[0](n)},f.prototype.subscribe=function(e){return p(e,this._subscribers)},f.prototype.subscribeAction=function(e){return p(e,this._actionSubscribers)},f.prototype.watch=function(e,l,a){var t=this;return this._watcherVM.$watch(function(){return e(t.state,t.getters)},l,a)},f.prototype.replaceState=function(e){var l=this;this._withCommit(function(){l._vm._data.$$state=e})},f.prototype.registerModule=function(e,l,a){void 0===a&&(a={}),"string"===typeof e&&(e=[e]),this._modules.register(e,l),y(this,this.state,e,this._modules.get(e),a.preserveState),m(this,this.state)},f.prototype.unregisterModule=function(e){var l=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var a=A(l.state,e.slice(0,-1));h.delete(a,e[e.length-1])}),g(this)},f.prototype.hotUpdate=function(e){this._modules.update(e),g(this,!0)},f.prototype._withCommit=function(e){var l=this._committing;this._committing=!0,e(),this._committing=l},Object.defineProperties(f.prototype,d);var T=I(function(e,l){var a={};return N(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=this.$store.state,a=this.$store.getters;if(e){var t=L(this.$store,"mapState",e);if(!t)return;l=t.context.state,a=t.context.getters}return"function"===typeof u?u.call(this,l,a):l[u]},a[t].vuex=!0}),a}),E=I(function(e,l){var a={};return N(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.commit;if(e){var n=L(this.$store,"mapMutations",e);if(!n)return;t=n.context.commit}return"function"===typeof u?u.apply(this,[t].concat(l)):t.apply(this.$store,[u].concat(l))}}),a}),P=I(function(e,l){var a={};return N(l).forEach(function(l){var t=l.key,u=l.val;u=e+u,a[t]=function(){if(!e||L(this.$store,"mapGetters",e))return this.$store.getters[u]},a[t].vuex=!0}),a}),C=I(function(e,l){var a={};return N(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.dispatch;if(e){var n=L(this.$store,"mapActions",e);if(!n)return;t=n.context.dispatch}return"function"===typeof u?u.apply(this,[t].concat(l)):t.apply(this.$store,[u].concat(l))}}),a}),D=function(e){return{mapState:T.bind(null,e),mapGetters:P.bind(null,e),mapMutations:E.bind(null,e),mapActions:C.bind(null,e)}};function N(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(l){return{key:l,val:e[l]}})}function I(e){return function(l,a){return"string"!==typeof l?(a=l,l=""):"/"!==l.charAt(l.length-1)&&(l+="/"),e(l,a)}}function L(e,l,a){var t=e._modulesNamespaceMap[a];return t}var B={Store:f,install:S,version:"3.0.1",mapState:T,mapMutations:E,mapGetters:P,mapActions:C,createNamespacedHelpers:D};l["default"]=B},6467:function(e,l,a){"use strict";var t="http://www.tiktokshopee.com/",u={login:t+"apk/Login/act_login",get_yan:t+"apk/Login/get_yan",zhuce:t+"apk/Login/zhuce",set_password:t+"apk/Login/set_password",get_code:t+"apk/Login/get_code",edit_password:t+"apk/Login/edit_password",login_out:t+"apk/Login/logout",isLogin:t+"apk/index/is_online",search:t+"apk/Index/search",get_banner:t+"apk/Index/get_ad",get_bigclass:t+"apk/Index/get_bigclass",get_hotgoods:t+"apk/Index/get_hotgoods",get_bc_goods:t+"apk/Classe/get_bc_goods",get_goods_detail:t+"apk/Classe/get_goods_detail",get_goods_assess:t+"apk/Classe/goods_assess",add_assess:t+"apk/Classe/add_assess",all_order:t+"apk/Order/all_order",get_jifen:t+"apk/Mine/get_jifen",get_news:t+"apk/Mine/get_news",add_address:t+"apk/Mine/add_address",get_address:t+"apk/Mine/get_address",del_address:t+"apk/Mine/del_address",set_moren:t+"apk/Mine/set_moren",get_kefu:t+"apk/Mine/get_kefu",add_car:t+"apk/Car/add_car",get_car:t+"apk/Car/get_car",add_order:t+"apk/Car/add_order",del_car:t+"apk/Car/del_car",on_buy:t+"apk/Car/on_buy"};e.exports=u},6644:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={pages:{"pages/home/home":{navigationBarTitleText:"商城",titleNView:!1,bounce:"none"},"pages/order/base/createOrder":{navigationBarTitleText:"提交订单"},"pages/pay/toPay":{navigationBarTitleText:"订单详情",navigationBarBackgroundColor:"#F7F7F7"},"pages/pay/endOrder":{navigationBarTitleText:"订单详情",navigationBarBackgroundColor:"#F7F7F7"},"pages/category/category":{navigationBarTitleText:"分类",enablePullDownRefresh:!0,onReachBottomDistance:0,titleNView:!1,bounce:"none"},"pages/category/toCategory":{navigationBarTitleText:"跳转分类",enablePullDownRefresh:!0,onReachBottomDistance:0,titleNView:!1,bounce:"none"},"pages/user/user":{navigationBarTitleText:"我的",titleNView:!1,bounce:"none"},"pages/user/base/gameOrder":{navigationBarTitleText:"我的砍价"},"pages/set/set":{navigationBarTitleText:"设置"},"pages/set/base/setPhone":{navigationBarTitleText:"绑定手机"},"pages/public/login":{navigationBarTitleText:"",navigationStyle:"custom",titleNView:!1,animationType:"slide-in-bottom"},"pages/public/register":{navigationBarTitleText:"",navigationStyle:"custom",titleNView:!1,animationType:"slide-in-bottom"},"pages/good/goods":{navigationBarTitleText:"商品",navigationBarTextStyle:"black",titleNView:!1,bounce:"none"},"pages/good/base/ratings":{navigationBarTitleText:"商品评论"},"pages/cart/cart":{navigationBarTitleText:"购物车"},"pages/order/order":{navigationBarTitleText:"我的订单",navigationBarBackgroundColor:"#F7F7F7"},"pages/order/base/afterSale":{navigationBarTitleText:"申请售后"},"pages/order/base/orderComment":{navigationBarTitleText:"发表评价",navigationBarBackgroundColor:"#F7F7F7"},"pages/address/address":{navigationBarTitleText:"收货地址"},"pages/address/addressManage":{navigationBarTitleText:"编辑收货地址"},"pages/game/index":{navigationBarTitleText:"开砍"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:" #fff",backgroundColor:"#fff"}};l.default=t},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function u(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return!1===e}function i(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function v(e){return null!==e&&"object"===typeof e}var o=Object.prototype.toString;function b(e){return"[object Object]"===o.call(e)}function s(e){return"[object RegExp]"===o.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function h(e){return u(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function f(e){return null==e?"":Array.isArray(e)||b(e)&&e.toString===o?JSON.stringify(e,null,2):String(e)}function d(e){var l=parseFloat(e);return isNaN(l)?e:l}function p(e,l){for(var a=Object.create(null),t=e.split(","),u=0;u<t.length;u++)a[t[u]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}p("slot,component",!0);var g=p("key,ref,slot,slot-scope,is");function m(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var y=Object.prototype.hasOwnProperty;function _(e,l){return y.call(e,l)}function w(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var O=/-(\w)/g,$=w(function(e){return e.replace(O,function(e,l){return l?l.toUpperCase():""})}),k=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),j=/\B([A-Z])/g,A=w(function(e){return e.replace(j,"-$1").toLowerCase()});function x(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function S(e,l){return e.bind(l)}var T=Function.prototype.bind?S:x;function E(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function P(e,l){for(var a in l)e[a]=l[a];return e}function C(e){for(var l={},a=0;a<e.length;a++)e[a]&&P(l,e[a]);return l}function D(e,l,a){}var N=function(e,l,a){return!1},I=function(e){return e};function L(e,l){if(e===l)return!0;var a=v(e),t=v(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var u=Array.isArray(e),n=Array.isArray(l);if(u&&n)return e.length===l.length&&e.every(function(e,a){return L(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(u||n)return!1;var r=Object.keys(e),i=Object.keys(l);return r.length===i.length&&r.every(function(a){return L(e[a],l[a])})}catch(o){return!1}}function B(e,l){for(var a=0;a<e.length;a++)if(L(e[a],l))return a;return-1}function R(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var M=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:D,parsePlatformTagName:I,mustUseProp:N,async:!0,_lifecycleHooks:V},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function q(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var G=new RegExp("[^"+F.source+".$_\\d]");function z(e){if(!G.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var J,W="__proto__"in{},X="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=K&&WXEnvironment.platform.toLowerCase(),Y=X&&window.navigator.userAgent.toLowerCase(),Z=Y&&/msie|trident/.test(Y),ee=(Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),le=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Q),ae=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/),{}.watch);if(X)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(lu){}var ue=function(){return void 0===J&&(J=!X&&!K&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),J},ne=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"===typeof e&&/native code/.test(e.toString())}var ie,ve="undefined"!==typeof Symbol&&re(Symbol)&&"undefined"!==typeof Reflect&&re(Reflect.ownKeys);ie="undefined"!==typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var oe=D,be=0,se=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=be++,this.subs=[]};function ce(e){se.SharedObject.targetStack.push(e),se.SharedObject.target=e}function he(){se.SharedObject.targetStack.pop(),se.SharedObject.target=se.SharedObject.targetStack[se.SharedObject.targetStack.length-1]}se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){m(this.subs,e)},se.prototype.depend=function(){se.SharedObject.target&&se.SharedObject.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},se.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},se.SharedObject.target=null,se.SharedObject.targetStack=[];var fe=function(e,l,a,t,u,n,r,i){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=u,this.ns=void 0,this.context=n,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=i,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(fe.prototype,de);var pe=function(e){void 0===e&&(e="");var l=new fe;return l.text=e,l.isComment=!0,l};function ge(e){return new fe(void 0,void 0,void 0,String(e))}function me(e){var l=new fe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var ye=Array.prototype,_e=Object.create(ye),we=["push","pop","shift","unshift","splice","sort","reverse"];we.forEach(function(e){var l=ye[e];q(_e,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var u,n=l.apply(this,a),r=this.__ob__;switch(e){case"push":case"unshift":u=a;break;case"splice":u=a.slice(2);break}return u&&r.observeArray(u),r.dep.notify(),n})});var Oe=Object.getOwnPropertyNames(_e),$e=!0;function ke(e){$e=e}var je=function(e){this.value=e,this.dep=new se,this.vmCount=0,q(e,"__ob__",this),Array.isArray(e)?(W?e.push!==e.__proto__.push?xe(e,_e,Oe):Ae(e,_e):xe(e,_e,Oe),this.observeArray(e)):this.walk(e)};function Ae(e,l){e.__proto__=l}function xe(e,l,a){for(var t=0,u=a.length;t<u;t++){var n=a[t];q(e,n,l[n])}}function Se(e,l){var a;if(v(e)&&!(e instanceof fe))return _(e,"__ob__")&&e.__ob__ instanceof je?a=e.__ob__:$e&&!ue()&&(Array.isArray(e)||b(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new je(e)),l&&a&&a.vmCount++,a}function Te(e,l,a,t,u){var n=new se,r=Object.getOwnPropertyDescriptor(e,l);if(!r||!1!==r.configurable){var i=r&&r.get,v=r&&r.set;i&&!v||2!==arguments.length||(a=e[l]);var o=!u&&Se(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=i?i.call(e):a;return se.SharedObject.target&&(n.depend(),o&&(o.dep.depend(),Array.isArray(l)&&Ce(l))),l},set:function(l){var t=i?i.call(e):a;l===t||l!==l&&t!==t||i&&!v||(v?v.call(e,l):a=l,o=!u&&Se(l),n.notify())}})}}function Ee(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?(Te(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function Pe(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||_(e,l)&&(delete e[l],a&&a.dep.notify())}}function Ce(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Ce(l)}je.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)Te(e,l[a])},je.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)Se(e[l])};var De=U.optionMergeStrategies;function Ne(e,l){if(!l)return e;for(var a,t,u,n=ve?Reflect.ownKeys(l):Object.keys(l),r=0;r<n.length;r++)a=n[r],"__ob__"!==a&&(t=e[a],u=l[a],_(e,a)?t!==u&&b(t)&&b(u)&&Ne(t,u):Ee(e,a,u));return e}function Ie(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,u="function"===typeof e?e.call(a,a):e;return t?Ne(t,u):u}:l?e?function(){return Ne("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Le(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Be(a):a}function Be(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Re(e,l,a,t){var u=Object.create(e||null);return l?P(u,l):u}De.data=function(e,l,a){return a?Ie(e,l,a):l&&"function"!==typeof l?e:Ie(e,l)},V.forEach(function(e){De[e]=Le}),M.forEach(function(e){De[e+"s"]=Re}),De.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var u={};for(var n in P(u,e),l){var r=u[n],i=l[n];r&&!Array.isArray(r)&&(r=[r]),u[n]=r?r.concat(i):Array.isArray(i)?i:[i]}return u},De.props=De.methods=De.inject=De.computed=function(e,l,a,t){if(!e)return l;var u=Object.create(null);return P(u,e),l&&P(u,l),u},De.provide=Ie;var Me=function(e,l){return void 0===l?e:l};function Ve(e,l){var a=e.props;if(a){var t,u,n,r={};if(Array.isArray(a)){t=a.length;while(t--)u=a[t],"string"===typeof u&&(n=$(u),r[n]={type:null})}else if(b(a))for(var i in a)u=a[i],n=$(i),r[n]=b(u)?u:{type:u};else 0;e.props=r}}function Ue(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var u=0;u<a.length;u++)t[a[u]]={from:a[u]};else if(b(a))for(var n in a){var r=a[n];t[n]=b(r)?P({from:n},r):{from:r}}else 0}}function Fe(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function He(e,l,a){if("function"===typeof l&&(l=l.options),Ve(l,a),Ue(l,a),Fe(l),!l._base&&(l.extends&&(e=He(e,l.extends,a)),l.mixins))for(var t=0,u=l.mixins.length;t<u;t++)e=He(e,l.mixins[t],a);var n,r={};for(n in e)i(n);for(n in l)_(e,n)||i(n);function i(t){var u=De[t]||Me;r[t]=u(e[t],l[t],a,t)}return r}function qe(e,l,a,t){if("string"===typeof a){var u=e[l];if(_(u,a))return u[a];var n=$(a);if(_(u,n))return u[n];var r=k(n);if(_(u,r))return u[r];var i=u[a]||u[n]||u[r];return i}}function Ge(e,l,a,t){var u=l[e],n=!_(a,e),r=a[e],i=Xe(Boolean,u.type);if(i>-1)if(n&&!_(u,"default"))r=!1;else if(""===r||r===A(e)){var v=Xe(String,u.type);(v<0||i<v)&&(r=!0)}if(void 0===r){r=ze(t,u,e);var o=$e;ke(!0),Se(r),ke(o)}return r}function ze(e,l,a){if(_(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==Je(l.type)?t.call(e):t}}function Je(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function We(e,l){return Je(e)===Je(l)}function Xe(e,l){if(!Array.isArray(l))return We(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(We(l[a],e))return a;return-1}function Ke(e,l,a){ce();try{if(l){var t=l;while(t=t.$parent){var u=t.$options.errorCaptured;if(u)for(var n=0;n<u.length;n++)try{var r=!1===u[n].call(t,e,l,a);if(r)return}catch(lu){Ye(lu,t,"errorCaptured hook")}}}Ye(e,l,a)}finally{he()}}function Qe(e,l,a,t,u){var n;try{n=a?e.apply(l,a):e.call(l),n&&!n._isVue&&h(n)&&!n._handled&&(n.catch(function(e){return Ke(e,t,u+" (Promise/async)")}),n._handled=!0)}catch(lu){Ke(lu,t,u)}return n}function Ye(e,l,a){if(U.errorHandler)try{return U.errorHandler.call(null,e,l,a)}catch(lu){lu!==e&&Ze(lu,null,"config.errorHandler")}Ze(e,l,a)}function Ze(e,l,a){if(!X&&!K||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function tl(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&re(Promise)){var ul=Promise.resolve();el=function(){ul.then(tl),le&&setTimeout(D)}}else if(Z||"undefined"===typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&re(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var nl=1,rl=new MutationObserver(tl),il=document.createTextNode(String(nl));rl.observe(il,{characterData:!0}),el=function(){nl=(nl+1)%2,il.data=String(nl)}}function vl(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(lu){Ke(lu,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var ol=new ie;function bl(e){sl(e,ol),ol.clear()}function sl(e,l){var a,t,u=Array.isArray(e);if(!(!u&&!v(e)||Object.isFrozen(e)||e instanceof fe)){if(e.__ob__){var n=e.__ob__.dep.id;if(l.has(n))return;l.add(n)}if(u){a=e.length;while(a--)sl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)sl(e[t[a]],l)}}}var cl=w(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function hl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Qe(t,null,arguments,l,"v-on handler");for(var u=t.slice(),n=0;n<u.length;n++)Qe(u[n],null,e,l,"v-on handler")}return a.fns=e,a}function fl(e,l,a,u,r,i){var v,o,b,s;for(v in e)o=e[v],b=l[v],s=cl(v),t(o)||(t(b)?(t(o.fns)&&(o=e[v]=hl(o,i)),n(s.once)&&(o=e[v]=r(s.name,o,s.capture)),a(s.name,o,s.capture,s.passive,s.params)):o!==b&&(b.fns=o,e[v]=b));for(v in l)t(e[v])&&(s=cl(v),u(s.name,l[v],s.capture))}function dl(e,l,a,n){var r=l.options.mpOptions&&l.options.mpOptions.properties;if(t(r))return a;var i=l.options.mpOptions.externalClasses||[],v=e.attrs,o=e.props;if(u(v)||u(o))for(var b in r){var s=A(b),c=gl(a,o,b,s,!0)||gl(a,v,b,s,!1);c&&a[b]&&-1!==i.indexOf(s)&&n[$(a[b])]&&(a[b]=n[$(a[b])])}return a}function pl(e,l,a,n){var r=l.options.props;if(t(r))return dl(e,l,{},n);var i={},v=e.attrs,o=e.props;if(u(v)||u(o))for(var b in r){var s=A(b);gl(i,o,b,s,!0)||gl(i,v,b,s,!1)}return dl(e,l,i,n)}function gl(e,l,a,t,n){if(u(l)){if(_(l,a))return e[a]=l[a],n||delete l[a],!0;if(_(l,t))return e[a]=l[t],n||delete l[t],!0}return!1}function ml(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function yl(e){return i(e)?[ge(e)]:Array.isArray(e)?wl(e):void 0}function _l(e){return u(e)&&u(e.text)&&r(e.isComment)}function wl(e,l){var a,r,v,o,b=[];for(a=0;a<e.length;a++)r=e[a],t(r)||"boolean"===typeof r||(v=b.length-1,o=b[v],Array.isArray(r)?r.length>0&&(r=wl(r,(l||"")+"_"+a),_l(r[0])&&_l(o)&&(b[v]=ge(o.text+r[0].text),r.shift()),b.push.apply(b,r)):i(r)?_l(o)?b[v]=ge(o.text+r):""!==r&&b.push(ge(r)):_l(r)&&_l(o)?b[v]=ge(o.text+r.text):(n(e._isVList)&&u(r.tag)&&t(r.key)&&u(l)&&(r.key="__vlist"+l+"_"+a+"__"),b.push(r)));return b}function Ol(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function $l(e){var l=kl(e.$options.inject,e);l&&(ke(!1),Object.keys(l).forEach(function(a){Te(e,a,l[a])}),ke(!0))}function kl(e,l){if(e){for(var a=Object.create(null),t=ve?Reflect.ownKeys(e):Object.keys(e),u=0;u<t.length;u++){var n=t[u];if("__ob__"!==n){var r=e[n].from,i=l;while(i){if(i._provided&&_(i._provided,r)){a[n]=i._provided[r];break}i=i.$parent}if(!i)if("default"in e[n]){var v=e[n].default;a[n]="function"===typeof v?v.call(l):v}else 0}}return a}}function jl(e,l){if(!e||!e.length)return{};for(var a={},t=0,u=e.length;t<u;t++){var n=e[t],r=n.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,n.context!==l&&n.fnContext!==l||!r||null==r.slot)n.asyncMeta&&n.asyncMeta.data&&"page"===n.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(n):(a.default||(a.default=[])).push(n);else{var i=r.slot,v=a[i]||(a[i]=[]);"template"===n.tag?v.push.apply(v,n.children||[]):v.push(n)}}for(var o in a)a[o].every(Al)&&delete a[o];return a}function Al(e){return e.isComment&&!e.asyncFactory||" "===e.text}function xl(e,l,t){var u,n=Object.keys(l).length>0,r=e?!!e.$stable:!n,i=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(r&&t&&t!==a&&i===t.$key&&!n&&!t.$hasNormal)return t;for(var v in u={},e)e[v]&&"$"!==v[0]&&(u[v]=Sl(l,v,e[v]))}else u={};for(var o in l)o in u||(u[o]=Tl(l,o));return e&&Object.isExtensible(e)&&(e._normalized=u),q(u,"$stable",r),q(u,"$key",i),q(u,"$hasNormal",n),u}function Sl(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:yl(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function Tl(e,l){return function(){return e[l]}}function El(e,l){var a,t,n,r,i;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t,t,t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t,t,t);else if(v(e))if(ve&&e[Symbol.iterator]){a=[];var o=e[Symbol.iterator](),b=o.next();while(!b.done)a.push(l(b.value,a.length,t++,t)),b=o.next()}else for(r=Object.keys(e),a=new Array(r.length),t=0,n=r.length;t<n;t++)i=r[t],a[t]=l(e[i],i,t,t);return u(a)||(a=[]),a._isVList=!0,a}function Pl(e,l,a,t){var u,n=this.$scopedSlots[e];n?(a=a||{},t&&(a=P(P({},t),a)),u=n(a,this,a._i)||l):u=this.$slots[e]||l;var r=a&&a.slot;return r?this.$createElement("template",{slot:r},u):u}function Cl(e){return qe(this.$options,"filters",e,!0)||I}function Dl(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Nl(e,l,a,t,u){var n=U.keyCodes[l]||a;return u&&t&&!U.keyCodes[l]?Dl(u,t):n?Dl(n,e):t?A(t)!==l:void 0}function Il(e,l,a,t,u){if(a)if(v(a)){var n;Array.isArray(a)&&(a=C(a));var r=function(r){if("class"===r||"style"===r||g(r))n=e;else{var i=e.attrs&&e.attrs.type;n=t||U.mustUseProp(l,i,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var v=$(r),o=A(r);if(!(v in n)&&!(o in n)&&(n[r]=a[r],u)){var b=e.on||(e.on={});b["update:"+r]=function(e){a[r]=e}}};for(var i in a)r(i)}else;return e}function Ll(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Rl(t,"__static__"+e,!1),t)}function Bl(e,l,a){return Rl(e,"__once__"+l+(a?"_"+a:""),!0),e}function Rl(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&Ml(e[t],l+"_"+t,a);else Ml(e,l,a)}function Ml(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Vl(e,l){if(l)if(b(l)){var a=e.on=e.on?P({},e.on):{};for(var t in l){var u=a[t],n=l[t];a[t]=u?[].concat(u,n):n}}else;return e}function Ul(e,l,a,t){l=l||{$stable:!a};for(var u=0;u<e.length;u++){var n=e[u];Array.isArray(n)?Ul(n,l,a):n&&(n.proxy&&(n.fn.proxy=!0),l[n.key]=n.fn)}return t&&(l.$key=t),l}function Fl(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function Hl(e,l){return"string"===typeof e?l+e:e}function ql(e){e._o=Bl,e._n=d,e._s=f,e._l=El,e._t=Pl,e._q=L,e._i=B,e._m=Ll,e._f=Cl,e._k=Nl,e._b=Il,e._v=ge,e._e=pe,e._u=Ul,e._g=Vl,e._d=Fl,e._p=Hl}function Gl(e,l,t,u,r){var i,v=this,o=r.options;_(u,"_uid")?(i=Object.create(u),i._original=u):(i=u,u=u._original);var b=n(o._compiled),s=!b;this.data=e,this.props=l,this.children=t,this.parent=u,this.listeners=e.on||a,this.injections=kl(o.inject,u),this.slots=function(){return v.$slots||xl(e.scopedSlots,v.$slots=jl(t,u)),v.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return xl(e.scopedSlots,this.slots())}}),b&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=xl(e.scopedSlots,this.$slots)),o._scopeId?this._c=function(e,l,a,t){var n=ua(i,e,l,a,t,s);return n&&!Array.isArray(n)&&(n.fnScopeId=o._scopeId,n.fnContext=u),n}:this._c=function(e,l,a,t){return ua(i,e,l,a,t,s)}}function zl(e,l,t,n,r){var i=e.options,v={},o=i.props;if(u(o))for(var b in o)v[b]=Ge(b,o,l||a);else u(t.attrs)&&Wl(v,t.attrs),u(t.props)&&Wl(v,t.props);var s=new Gl(t,v,r,n,e),c=i.render.call(null,s._c,s);if(c instanceof fe)return Jl(c,t,s.parent,i,s);if(Array.isArray(c)){for(var h=yl(c)||[],f=new Array(h.length),d=0;d<h.length;d++)f[d]=Jl(h[d],t,s.parent,i,s);return f}}function Jl(e,l,a,t,u){var n=me(e);return n.fnContext=a,n.fnOptions=t,l.slot&&((n.data||(n.data={})).slot=l.slot),n}function Wl(e,l){for(var a in l)e[$(a)]=l[a]}ql(Gl.prototype);var Xl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Xl.prepatch(a,a)}else{var t=e.componentInstance=Yl(e,$a);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;xa(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(Pa(a,"onServiceCreated"),Pa(a,"onServiceAttached"),a._isMounted=!0,Pa(a,"mounted")),e.data.keepAlive&&(l._isMounted?Ha(a):Ta(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Ea(l,!0):l.$destroy())}},Kl=Object.keys(Xl);function Ql(e,l,a,r,i){if(!t(e)){var o=a.$options._base;if(v(e)&&(e=o.extend(e)),"function"===typeof e){var b;if(t(e.cid)&&(b=e,e=fa(b,o),void 0===e))return ha(b,l,a,r,i);l=l||{},ct(e),u(l.model)&&la(e.options,l);var s=pl(l,e,i,a);if(n(e.options.functional))return zl(e,s,l,a,r);var c=l.on;if(l.on=l.nativeOn,n(e.options.abstract)){var h=l.slot;l={},h&&(l.slot=h)}Zl(l);var f=e.options.name||i,d=new fe("vue-component-"+e.cid+(f?"-"+f:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:c,tag:i,children:r},b);return d}}}function Yl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return u(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Zl(e){for(var l=e.hook||(e.hook={}),a=0;a<Kl.length;a++){var t=Kl[a],u=l[t],n=Xl[t];u===n||u&&u._merged||(l[t]=u?ea(n,u):n)}}function ea(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function la(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var n=l.on||(l.on={}),r=n[t],i=l.model.callback;u(r)?(Array.isArray(r)?-1===r.indexOf(i):r!==i)&&(n[t]=[i].concat(r)):n[t]=i}var aa=1,ta=2;function ua(e,l,a,t,u,r){return(Array.isArray(a)||i(a))&&(u=t,t=a,a=void 0),n(r)&&(u=ta),na(e,l,a,t,u)}function na(e,l,a,t,n){if(u(a)&&u(a.__ob__))return pe();if(u(a)&&u(a.is)&&(l=a.is),!l)return pe();var r,i,v;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),n===ta?t=yl(t):n===aa&&(t=ml(t)),"string"===typeof l)?(i=e.$vnode&&e.$vnode.ns||U.getTagNamespace(l),r=U.isReservedTag(l)?new fe(U.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!u(v=qe(e.$options,"components",l))?new fe(l,a,t,void 0,void 0,e):Ql(v,a,e,t,l)):r=Ql(l,a,e,t);return Array.isArray(r)?r:u(r)?(u(i)&&ra(r,i),u(a)&&ia(a),r):pe()}function ra(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),u(e.children))for(var r=0,i=e.children.length;r<i;r++){var v=e.children[r];u(v.tag)&&(t(v.ns)||n(a)&&"svg"!==v.tag)&&ra(v,l,a)}}function ia(e){v(e.style)&&bl(e.style),v(e.class)&&bl(e.class)}function va(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,u=t&&t.context;e.$slots=jl(l._renderChildren,u),e.$scopedSlots=a,e._c=function(l,a,t,u){return ua(e,l,a,t,u,!1)},e.$createElement=function(l,a,t,u){return ua(e,l,a,t,u,!0)};var n=t&&t.data;Te(e,"$attrs",n&&n.attrs||a,null,!0),Te(e,"$listeners",l._parentListeners||a,null,!0)}var oa,ba=null;function sa(e){ql(e.prototype),e.prototype.$nextTick=function(e){return vl(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,u=a._parentVnode;u&&(l.$scopedSlots=xl(u.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=u;try{ba=l,e=t.call(l._renderProxy,l.$createElement)}catch(lu){Ke(lu,l,"render"),e=l._vnode}finally{ba=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof fe||(e=pe()),e.parent=u,e}}function ca(e,l){return(e.__esModule||ve&&"Module"===e[Symbol.toStringTag])&&(e=e.default),v(e)?l.extend(e):e}function ha(e,l,a,t,u){var n=pe();return n.asyncFactory=e,n.asyncMeta={data:l,context:a,children:t,tag:u},n}function fa(e,l){if(n(e.error)&&u(e.errorComp))return e.errorComp;if(u(e.resolved))return e.resolved;var a=ba;if(a&&u(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),n(e.loading)&&u(e.loadingComp))return e.loadingComp;if(a&&!u(e.owners)){var r=e.owners=[a],i=!0,o=null,b=null;a.$on("hook:destroyed",function(){return m(r,a)});var s=function(e){for(var l=0,a=r.length;l<a;l++)r[l].$forceUpdate();e&&(r.length=0,null!==o&&(clearTimeout(o),o=null),null!==b&&(clearTimeout(b),b=null))},c=R(function(a){e.resolved=ca(a,l),i?r.length=0:s(!0)}),f=R(function(l){u(e.errorComp)&&(e.error=!0,s(!0))}),d=e(c,f);return v(d)&&(h(d)?t(e.resolved)&&d.then(c,f):h(d.component)&&(d.component.then(c,f),u(d.error)&&(e.errorComp=ca(d.error,l)),u(d.loading)&&(e.loadingComp=ca(d.loading,l),0===d.delay?e.loading=!0:o=setTimeout(function(){o=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,s(!1))},d.delay||200)),u(d.timeout)&&(b=setTimeout(function(){b=null,t(e.resolved)&&f(null)},d.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function da(e){return e.isComment&&e.asyncFactory}function pa(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(u(a)&&(u(a.componentOptions)||da(a)))return a}}function ga(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&wa(e,l)}function ma(e,l){oa.$on(e,l)}function ya(e,l){oa.$off(e,l)}function _a(e,l){var a=oa;return function t(){var u=l.apply(null,arguments);null!==u&&a.$off(e,t)}}function wa(e,l,a){oa=e,fl(l,a||{},ma,ya,_a,e),oa=void 0}function Oa(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var u=0,n=e.length;u<n;u++)t.$on(e[u],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,u=e.length;t<u;t++)a.$off(e[t],l);return a}var n,r=a._events[e];if(!r)return a;if(!l)return a._events[e]=null,a;var i=r.length;while(i--)if(n=r[i],n===l||n.fn===l){r.splice(i,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?E(a):a;for(var t=E(arguments,1),u='event handler for "'+e+'"',n=0,r=a.length;n<r;n++)Qe(a[n],l,t,l,u)}return l}}var $a=null;function ka(e){var l=$a;return $a=e,function(){$a=l}}function ja(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Aa(e){e.prototype._update=function(e,l){var a=this,t=a.$el,u=a._vnode,n=ka(a);a._vnode=e,a.$el=u?a.__patch__(u,e):a.__patch__(a.$el,e,l,!1),n(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Pa(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||m(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Pa(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function xa(e,l,t,u,n){var r=u.data.scopedSlots,i=e.$scopedSlots,v=!!(r&&!r.$stable||i!==a&&!i.$stable||r&&e.$scopedSlots.$key!==r.$key),o=!!(n||e.$options._renderChildren||v);if(e.$options._parentVnode=u,e.$vnode=u,e._vnode&&(e._vnode.parent=u),e.$options._renderChildren=n,e.$attrs=u.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){ke(!1);for(var b=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var h=s[c],f=e.$options.props;b[h]=Ge(h,f,l,e)}ke(!0),e.$options.propsData=l}e._$updateProperties&&e._$updateProperties(e),t=t||a;var d=e.$options._parentListeners;e.$options._parentListeners=t,wa(e,t,d),o&&(e.$slots=jl(n,u.context),e.$forceUpdate())}function Sa(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Ta(e,l){if(l){if(e._directInactive=!1,Sa(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Ta(e.$children[a]);Pa(e,"activated")}}function Ea(e,l){if((!l||(e._directInactive=!0,!Sa(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Ea(e.$children[a]);Pa(e,"deactivated")}}function Pa(e,l){ce();var a=e.$options[l],t=l+" hook";if(a)for(var u=0,n=a.length;u<n;u++)Qe(a[u],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),he()}var Ca=[],Da=[],Na={},Ia=!1,La=!1,Ba=0;function Ra(){Ba=Ca.length=Da.length=0,Na={},Ia=La=!1}var Ma=Date.now;if(X&&!Z){var Va=window.performance;Va&&"function"===typeof Va.now&&Ma()>document.createEvent("Event").timeStamp&&(Ma=function(){return Va.now()})}function Ua(){var e,l;for(Ma(),La=!0,Ca.sort(function(e,l){return e.id-l.id}),Ba=0;Ba<Ca.length;Ba++)e=Ca[Ba],e.before&&e.before(),l=e.id,Na[l]=null,e.run();var a=Da.slice(),t=Ca.slice();Ra(),qa(a),Fa(t),ne&&U.devtools&&ne.emit("flush")}function Fa(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&Pa(t,"updated")}}function Ha(e){e._inactive=!1,Da.push(e)}function qa(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Ta(e[l],!0)}function Ga(e){var l=e.id;if(null==Na[l]){if(Na[l]=!0,La){var a=Ca.length-1;while(a>Ba&&Ca[a].id>e.id)a--;Ca.splice(a+1,0,e)}else Ca.push(e);Ia||(Ia=!0,vl(Ua))}}var za=0,Ja=function(e,l,a,t,u){this.vm=e,u&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++za,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ie,this.newDepIds=new ie,this.expression="","function"===typeof l?this.getter=l:(this.getter=z(l),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};Ja.prototype.get=function(){var e;ce(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(lu){if(!this.user)throw lu;Ke(lu,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&bl(e),he(),this.cleanupDeps()}return e},Ja.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Ja.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Ja.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ga(this)},Ja.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||v(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(lu){Ke(lu,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Ja.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ja.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Ja.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Wa={enumerable:!0,configurable:!0,get:D,set:D};function Xa(e,l,a){Wa.get=function(){return this[l][a]},Wa.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Wa)}function Ka(e){e._watchers=[];var l=e.$options;l.props&&Qa(e,l.props),l.methods&&nt(e,l.methods),l.data?Ya(e):Se(e._data={},!0),l.computed&&lt(e,l.computed),l.watch&&l.watch!==ae&&rt(e,l.watch)}function Qa(e,l){var a=e.$options.propsData||{},t=e._props={},u=e.$options._propKeys=[],n=!e.$parent;n||ke(!1);var r=function(n){u.push(n);var r=Ge(n,l,a,e);Te(t,n,r),n in e||Xa(e,"_props",n)};for(var i in l)r(i);ke(!0)}function Ya(e){var l=e.$options.data;l=e._data="function"===typeof l?Za(l,e):l||{},b(l)||(l={});var a=Object.keys(l),t=e.$options.props,u=(e.$options.methods,a.length);while(u--){var n=a[u];0,t&&_(t,n)||H(n)||Xa(e,"_data",n)}Se(l,!0)}function Za(e,l){ce();try{return e.call(l,l)}catch(lu){return Ke(lu,l,"data()"),{}}finally{he()}}var et={lazy:!0};function lt(e,l){var a=e._computedWatchers=Object.create(null),t=ue();for(var u in l){var n=l[u],r="function"===typeof n?n:n.get;0,t||(a[u]=new Ja(e,r||D,D,et)),u in e||at(e,u,n)}}function at(e,l,a){var t=!ue();"function"===typeof a?(Wa.get=t?tt(l):ut(a),Wa.set=D):(Wa.get=a.get?t&&!1!==a.cache?tt(l):ut(a.get):D,Wa.set=a.set||D),Object.defineProperty(e,l,Wa)}function tt(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),se.SharedObject.target&&l.depend(),l.value}}function ut(e){return function(){return e.call(this,this)}}function nt(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?D:T(l[a],e)}function rt(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var u=0;u<t.length;u++)it(e,a,t[u]);else it(e,a,t)}}function it(e,l,a,t){return b(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function vt(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Ee,e.prototype.$delete=Pe,e.prototype.$watch=function(e,l,a){var t=this;if(b(l))return it(t,e,l,a);a=a||{},a.user=!0;var u=new Ja(t,e,l,a);if(a.immediate)try{l.call(t,u.value)}catch(n){Ke(n,t,'callback for immediate watcher "'+u.expression+'"')}return function(){u.teardown()}}}var ot=0;function bt(e){e.prototype._init=function(e){var l=this;l._uid=ot++,l._isVue=!0,e&&e._isComponent?st(l,e):l.$options=He(ct(l.constructor),e||{},l),l._renderProxy=l,l._self=l,ja(l),ga(l),va(l),Pa(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&$l(l),Ka(l),"mp-toutiao"!==l.mpHost&&Ol(l),"mp-toutiao"!==l.mpHost&&Pa(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function st(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var u=t.componentOptions;a.propsData=u.propsData,a._parentListeners=u.listeners,a._renderChildren=u.children,a._componentTag=u.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function ct(e){var l=e.options;if(e.super){var a=ct(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var u=ht(e);u&&P(e.extendOptions,u),l=e.options=He(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function ht(e){var l,a=e.options,t=e.sealedOptions;for(var u in a)a[u]!==t[u]&&(l||(l={}),l[u]=a[u]);return l}function ft(e){this._init(e)}function dt(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=E(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function pt(e){e.mixin=function(e){return this.options=He(this.options,e),this}}function gt(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,u=e._Ctor||(e._Ctor={});if(u[t])return u[t];var n=e.name||a.options.name;var r=function(e){this._init(e)};return r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.cid=l++,r.options=He(a.options,e),r["super"]=a,r.options.props&&mt(r),r.options.computed&&yt(r),r.extend=a.extend,r.mixin=a.mixin,r.use=a.use,M.forEach(function(e){r[e]=a[e]}),n&&(r.options.components[n]=r),r.superOptions=a.options,r.extendOptions=e,r.sealedOptions=P({},r.options),u[t]=r,r}}function mt(e){var l=e.options.props;for(var a in l)Xa(e.prototype,"_props",a)}function yt(e){var l=e.options.computed;for(var a in l)at(e.prototype,a,l[a])}function _t(e){M.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&b(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function wt(e){return e&&(e.Ctor.options.name||e.tag)}function Ot(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!s(e)&&e.test(l)}function $t(e,l){var a=e.cache,t=e.keys,u=e._vnode;for(var n in a){var r=a[n];if(r){var i=wt(r.componentOptions);i&&!l(i)&&kt(a,n,t,u)}}}function kt(e,l,a,t){var u=e[l];!u||t&&u.tag===t.tag||u.componentInstance.$destroy(),e[l]=null,m(a,l)}bt(ft),vt(ft),Oa(ft),Aa(ft),sa(ft);var jt=[String,RegExp,Array],At={name:"keep-alive",abstract:!0,props:{include:jt,exclude:jt,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)kt(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){$t(e,function(e){return Ot(l,e)})}),this.$watch("exclude",function(l){$t(e,function(e){return!Ot(l,e)})})},render:function(){var e=this.$slots.default,l=pa(e),a=l&&l.componentOptions;if(a){var t=wt(a),u=this,n=u.include,r=u.exclude;if(n&&(!t||!Ot(n,t))||r&&t&&Ot(r,t))return l;var i=this,v=i.cache,o=i.keys,b=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;v[b]?(l.componentInstance=v[b].componentInstance,m(o,b),o.push(b)):(v[b]=l,o.push(b),this.max&&o.length>parseInt(this.max)&&kt(v,o[0],o,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},xt={KeepAlive:At};function St(e){var l={get:function(){return U}};Object.defineProperty(e,"config",l),e.util={warn:oe,extend:P,mergeOptions:He,defineReactive:Te},e.set=Ee,e.delete=Pe,e.nextTick=vl,e.observable=function(e){return Se(e),e},e.options=Object.create(null),M.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,P(e.options.components,xt),dt(e),pt(e),gt(e),_t(e)}St(ft),Object.defineProperty(ft.prototype,"$isServer",{get:ue}),Object.defineProperty(ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ft,"FunctionalRenderContext",{value:Gl}),ft.version="2.6.11";var Tt="[object Array]",Et="[object Object]";function Pt(e,l){var a={};return Ct(e,l),Dt(e,l,"",a),a}function Ct(e,l){if(e!==l){var a=It(e),t=It(l);if(a==Et&&t==Et){if(Object.keys(e).length>=Object.keys(l).length)for(var u in l){var n=e[u];void 0===n?e[u]=null:Ct(n,l[u])}}else a==Tt&&t==Tt&&e.length>=l.length&&l.forEach(function(l,a){Ct(e[a],l)})}}function Dt(e,l,a,t){if(e!==l){var u=It(e),n=It(l);if(u==Et)if(n!=Et||Object.keys(e).length<Object.keys(l).length)Nt(t,a,e);else{var r=function(u){var n=e[u],r=l[u],i=It(n),v=It(r);if(i!=Tt&&i!=Et)n!=l[u]&&Nt(t,(""==a?"":a+".")+u,n);else if(i==Tt)v!=Tt?Nt(t,(""==a?"":a+".")+u,n):n.length<r.length?Nt(t,(""==a?"":a+".")+u,n):n.forEach(function(e,l){Dt(e,r[l],(""==a?"":a+".")+u+"["+l+"]",t)});else if(i==Et)if(v!=Et||Object.keys(n).length<Object.keys(r).length)Nt(t,(""==a?"":a+".")+u,n);else for(var o in n)Dt(n[o],r[o],(""==a?"":a+".")+u+"."+o,t)};for(var i in e)r(i)}else u==Tt?n!=Tt?Nt(t,a,e):e.length<l.length?Nt(t,a,e):e.forEach(function(e,u){Dt(e,l[u],a+"["+u+"]",t)}):Nt(t,a,e)}}function Nt(e,l,a){e[l]=a}function It(e){return Object.prototype.toString.call(e)}function Lt(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function Bt(e){return Ca.find(function(l){return e._watcher===l})}function Rt(e,l){if(!e.__next_tick_pending&&!Bt(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return vl(l,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var u;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(lu){Ke(lu,e,"nextTick")}else u&&u(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){u=e})}function Mt(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Vt=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,u=Object.create(null);try{u=Mt(this)}catch(i){console.error(i)}u.__webviewId__=t.data.__webviewId__;var n=Object.create(null);Object.keys(u).forEach(function(e){n[e]=t.data[e]});var r=!1===this.$shouldDiffData?u:Pt(u,n);Object.keys(r).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,t.setData(r,function(){a.__next_tick_pending=!1,Lt(a)})):Lt(this)}};function Ut(){}function Ft(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Ut),e.$options.render||(e.$options.render=Ut),"mp-toutiao"!==e.mpHost&&Pa(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new Ja(e,t,D,{before:function(){e._isMounted&&!e._isDestroyed&&Pa(e,"beforeUpdate")}},!0),a=!1,e}function Ht(e,l){return u(e)||u(l)?qt(e,Gt(l)):""}function qt(e,l){return e?l?e+" "+l:e:l||""}function Gt(e){return Array.isArray(e)?zt(e):v(e)?Jt(e):"string"===typeof e?e:""}function zt(e){for(var l,a="",t=0,n=e.length;t<n;t++)u(l=Gt(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Jt(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Wt=w(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Xt(e){return Array.isArray(e)?C(e):"string"===typeof e?Wt(e):e}var Kt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Qt(e[t],a.slice(1).join("."))}function Yt(e){e.config.errorHandler=function(e){console.error(e);var l=getApp();l&&l.onError&&l.onError(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:E(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Rt(this,e)},Kt.forEach(function(l){e.prototype[l]=function(e){return this.$scope&&this.$scope[l]?this.$scope[l](e):"undefined"!==typeof my?"createSelectorQuery"===l?my.createSelectorQuery(e):"createIntersectionObserver"===l?my.createIntersectionObserver(e):void 0:void 0}}),e.prototype.__init_provide=Ol,e.prototype.__init_injections=$l,e.prototype.__call_hook=function(e,l){var a=this;ce();var t,u=a.$options[e],n=e+" hook";if(u)for(var r=0,i=u.length;r<i;r++)t=Qe(u[r],a,l?[l]:null,a,n);return a._hasHookEvent&&a.$emit("hook:"+e,l),he(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return b(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Qt(l||this,e)},e.prototype.__get_class=function(e,l){return Ht(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Xt(e),t=l?P(l,a):a;return Object.keys(t).map(function(e){return A(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,l){var a,t,u,n,r;if(Array.isArray(e)){for(a=new Array(e.length),t=0,u=e.length;t<u;t++)a[t]=l(e[t],t);return a}if(v(e)){for(n=Object.keys(e),a=Object.create(null),t=0,u=n.length;t<u;t++)r=n[t],a[r]=l(e[r],r,t);return a}return[]}}var Zt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eu(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Zt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Zt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Zt}ft.prototype.__patch__=Vt,ft.prototype.$mount=function(e,l){return Ft(this,e,l)},eu(ft),Yt(ft),l["default"]=ft}.call(this,a("c8ba"))},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=dl,l.createComponent=jl,l.createPage=kl,l.default=void 0;var t=u(a("66fd"));function u(e){return e&&e.__esModule?e:{default:e}}function n(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(l){b(e,l,a[l])})}return e}function r(e,l){return o(e)||v(e,l)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function v(e,l){var a=[],t=!0,u=!1,n=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0)if(a.push(r.value),l&&a.length===l)break}catch(v){u=!0,n=v}finally{try{t||null==i["return"]||i["return"]()}finally{if(u)throw n}}return a}function o(e){if(Array.isArray(e))return e}function b(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function s(e){return f(e)||h(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var d=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function g(e){return"function"===typeof e}function m(e){return"string"===typeof e}function y(e){return"[object Object]"===d.call(e)}function _(e,l){return p.call(e,l)}function w(){}function O(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var $=/-(\w)/g,k=O(function(e){return e.replace($,function(e,l){return l?l.toUpperCase():""})}),j=["invoke","success","fail","complete","returnValue"],A={},x={};function S(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?T(a):a}function T(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function E(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function P(e,l){Object.keys(l).forEach(function(a){-1!==j.indexOf(a)&&g(l[a])&&(e[a]=S(e[a],l[a]))})}function C(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==j.indexOf(a)&&g(l[a])&&E(e[a],l[a])})}function D(e,l){"string"===typeof e&&y(l)?P(x[e]||(x[e]={}),l):y(e)&&P(A,e)}function N(e,l){"string"===typeof e?y(l)?C(x[e],l):delete x[e]:y(e)&&C(A,e)}function I(e){return function(l){return e(l)||l}}function L(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function B(e,l){for(var a=!1,t=0;t<e.length;t++){var u=e[t];if(a)a=Promise.then(I(u));else{var n=u(l);if(L(n)&&(a=Promise.resolve(n)),!1===n)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function R(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=l[a];l[a]=function(l){B(e[a],l).then(function(e){return g(t)&&t(e)||e})}}}),l}function M(e,l){var a=[];Array.isArray(A.returnValue)&&a.push.apply(a,s(A.returnValue));var t=x[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,s(t.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function V(e){var l=Object.create(null);Object.keys(A).forEach(function(e){"returnValue"!==e&&(l[e]=A[e].slice())});var a=x[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function U(e,l,a){for(var t=arguments.length,u=new Array(t>3?t-3:0),n=3;n<t;n++)u[n-3]=arguments[n];var r=V(e);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var i=B(r.invoke,a);return i.then(function(e){return l.apply(void 0,[R(r,e)].concat(u))})}return l.apply(void 0,[R(r,a)].concat(u))}return l.apply(void 0,[a].concat(u))}var F={returnValue:function(e){return L(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},H=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,q=/^create|Manager$/,G=/^on/;function z(e){return q.test(e)}function J(e){return H.test(e)}function W(e){return G.test(e)&&"onPush"!==e}function X(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function K(e){return!(z(e)||J(e)||W(e))}function Q(e,l){return K(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return g(a.success)||g(a.fail)||g(a.complete)?M(e,U.apply(void 0,[e,l,a].concat(u))):M(e,X(new Promise(function(t,n){U.apply(void 0,[e,l,Object.assign({},a,{success:t,fail:n})].concat(u)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var Y=1e-4,Z=750,ee=!1,le=0,ae=0;function te(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;le=t,ae=a,ee="ios"===l}function ue(e,l){if(0===le&&te(),e=Number(e),0===e)return 0;var a=e/Z*(l||le);return a<0&&(a=-a),a=Math.floor(a+Y),0===a?1!==ae&&ee?.5:1:e<0?-a:a}var ne={promiseInterceptor:F},re=Object.freeze({__proto__:null,upx2px:ue,interceptors:ne,addInterceptor:D,removeInterceptor:N}),ie={},ve=[],oe=[],be=["success","fail","cancel","complete"];function se(e,l,a){return function(t){return l(he(e,t,a))}}function ce(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(l)){var n=!0===u?l:{};for(var r in g(a)&&(a=a(l,n)||{}),l)if(_(a,r)){var i=a[r];g(i)&&(i=i(l[r],l,n)),i?m(i)?n[i]=l[r]:y(i)&&(n[i.name?i.name:r]=i.value):console.warn("app-plus ".concat(e,"暂不支持").concat(r))}else-1!==be.indexOf(r)?n[r]=se(e,l[r],t):u||(n[r]=l[r]);return n}return g(l)&&(l=se(e,l,t)),l}function he(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(ie.returnValue)&&(l=ie.returnValue(e,l)),ce(e,l,a,{},t)}function fe(e,l){if(_(ie,e)){var a=ie[e];return a?function(l,t){var u=a;g(a)&&(u=a(l)),l=ce(e,l,u.args,u.returnValue);var n=[l];"undefined"!==typeof t&&n.push(t);var r=wx[u.name||e].apply(wx,n);return J(e)?he(e,r,u.returnValue,z(e)):r}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var de=Object.create(null),pe=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function ge(e){return function(l){var a=l.fail,t=l.complete,u={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};g(a)&&a(u),g(t)&&t(u)}}pe.forEach(function(e){de[e]=ge(e)});var me=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ye(e,l,a){return e[l].apply(e,a)}function _e(){return ye(me(),"$on",Array.prototype.slice.call(arguments))}function we(){return ye(me(),"$off",Array.prototype.slice.call(arguments))}function Oe(){return ye(me(),"$once",Array.prototype.slice.call(arguments))}function $e(){return ye(me(),"$emit",Array.prototype.slice.call(arguments))}var ke=Object.freeze({__proto__:null,$on:_e,$off:we,$once:Oe,$emit:$e});function je(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function Ae(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t="0"===e.__uniapp_mask_id?{setStyle:function(e){var l=e.mask;je("uni-tabview").setMask({color:l})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),u=e.show,n=e.hide,r=e.close,i=function(){t.setStyle({mask:a})},v=function(){t.setStyle({mask:"none"})};e.show=function(){i();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return u.apply(e,a)},e.hide=function(){v();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.close=function(){v(),l=[];for(var a=arguments.length,t=new Array(a),u=0;u<a;u++)t[u]=arguments[u];return r.apply(e,t)}}}function xe(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&Ae(l),l}var Se=Object.freeze({__proto__:null,getSubNVueById:xe,requireNativePlugin:je}),Te=Page,Ee=Component,Pe=/:/g,Ce=O(function(e){return k(e.replace(Pe,"-"))});function De(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return l.apply(e,[Ce(a)].concat(u))}}}function Ne(e,l){var a=l[e];l[e]=a?function(){De(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){De(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ne("onLoad",e),Te(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ne("created",e),Ee(e)};var Ie=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Le(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){_(a,l)&&(e[l]=a[l])})}function Be(e,l){if(!l)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(l=l.default||l,g(l))return!!g(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(g(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Be(e,l)}):void 0}function Re(e,l,a){l.forEach(function(l){Be(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Me(e,l){var a;return l=l.default||l,g(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Ve(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Ue(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Fe(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(u){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(u){}return y(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||_(a,e)||(a[e]=t[e])}),a}var He=[String,Number,Boolean,Object,Array,null];function qe(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function Ge(e,l){var a=e["behaviors"],t=e["extends"],u=e["mixins"],n=e["props"];n||(e["props"]=n=[]);var r=[];return Array.isArray(a)&&a.forEach(function(e){r.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(n)?(n.push("name"),n.push("value")):(n["name"]={type:String,default:""},n["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(t)&&t.props&&r.push(l({properties:Je(t.props,!0)})),Array.isArray(u)&&u.forEach(function(e){y(e)&&e.props&&r.push(l({properties:Je(e.props,!0)}))}),r}function ze(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function Je(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:qe(e)}}):y(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(y(t)){var u=t["default"];g(u)&&(u=u()),t.type=ze(l,t.type),a[l]={type:-1!==He.indexOf(t.type)?t.type:null,value:u,observer:qe(l)}}else{var n=ze(l,t);a[l]={type:-1!==He.indexOf(n)?n:null,observer:qe(l)}}}),a}function We(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=w,e.preventDefault=w,e.target=e.target||{},_(e,"detail")||(e.detail={}),y(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Xe(e,l){var a=e;return l.forEach(function(l){var t=l[0],u=l[2];if(t||"undefined"!==typeof u){var n=l[1],r=l[3],i=t?e.__get_value(t,a):a;Number.isInteger(i)?a=u:n?Array.isArray(i)?a=i.find(function(l){return e.__get_value(n,l)===u}):y(i)?a=Object.keys(i).find(function(l){return e.__get_value(n,i[l])===u}):console.error("v-for 暂不支持循环数据：",i):a=i[u],r&&(a=e.__get_value(r,a))}}),a}function Ke(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,u){"string"===typeof l?l?"$event"===l?t["$"+u]=a:0===l.indexOf("$event.")?t["$"+u]=e.__get_value(l.replace("$event.",""),a):t["$"+u]=e.__get_value(l):t["$"+u]=e:t["$"+u]=Xe(e,l)}),t}function Qe(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function Ye(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,r=!1;if(u&&(r=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return r?[l]:l.detail.__args__||l.detail;var i=Ke(e,t,l),v=[];return a.forEach(function(e){"$event"===e?"__set_model"!==n||u?u&&!r?v.push(l.detail.__args__[0]):v.push(l):v.push(l.target.value):Array.isArray(e)&&"o"===e[0]?v.push(Qe(e)):"string"===typeof e&&_(i,e)?v.push(i[e]):v.push(e)}),v}var Ze="~",el="^";function ll(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function al(e){var l=this;e=We(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var u=e.type,n=[];return t.forEach(function(a){var t=a[0],r=a[1],i=t.charAt(0)===el;t=i?t.slice(1):t;var v=t.charAt(0)===Ze;t=v?t.slice(1):t,r&&ll(u,t)&&r.forEach(function(a){var t=a[0];if(t){var u=l.$vm;if(u.$options.generic&&u.$parent&&u.$parent.$parent&&(u=u.$parent.$parent),"$emit"===t)return void u.$emit.apply(u,Ye(l.$vm,e,a[1],a[2],i,t));var r=u[t];if(!g(r))throw new Error(" _vm.".concat(t," is not a function"));if(v){if(r.once)return;r.once=!0}n.push(r.apply(u,Ye(l.$vm,e,a[1],a[2],i,t)))}})}),"input"===u&&1===n.length&&"undefined"!==typeof n[0]?n[0]:void 0}var tl=["onShow","onHide","onError","onPageNotFound"];function ul(e,l){var a=l.mocks,u=l.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=b({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(u(this),Le(this,a)))}});var n={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};n.globalData=e.$options.globalData||{};var r=e.$options.methods;return r&&Object.keys(r).forEach(function(e){n[e]=r[e]}),Re(n,tl),n}var nl=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function rl(e,l){for(var a,t=e.$children,u=t.length-1;u>=0;u--){var n=t[u];if(n.$scope._$vueId===l)return n}for(var r=t.length-1;r>=0;r--)if(a=rl(t[r],l),a)return a}function il(e){return Behavior(e)}function vl(){return!!this.route}function ol(e){this.triggerEvent("__l",e)}function bl(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function sl(e){var l,a=e.detail||e.value,t=a.vuePid,u=a.vueOptions;t&&(l=rl(this.$vm,t)),l||(l=this.$vm),u.parent=l}function cl(e){return ul(e,{mocks:nl,initRefs:bl})}var hl=["onUniNViewMessage"];function fl(e){var l=cl(e);return Re(l,hl),l}function dl(e){return App(fl(e)),e}function pl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,u=l.initRelation,i=Me(t.default,e),v=r(i,2),o=v[0],b=v[1],s=n({multipleSlots:!0,addGlobalClass:!0},b.options||{}),c={options:s,data:Fe(b,t.default.prototype),behaviors:Ge(b,il),properties:Je(b.props,!1,b.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Ue(e.vueId,this),u.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new o(l),Ve(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:sl,__e:al}};return Array.isArray(b.wxsCallMethods)&&b.wxsCallMethods.forEach(function(e){c.methods[e]=function(l){return this.$vm[e](l)}}),a?c:[c,o]}function gl(e){return pl(e,{isPage:vl,initRelation:ol})}function ml(e){var l=gl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var yl=["onShow","onHide","onUnload"];function _l(e,l){l.isPage,l.initRelation;var a=ml(e);return Re(a.methods,yl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function wl(e){return _l(e,{isPage:vl,initRelation:ol})}yl.push.apply(yl,Ie);var Ol=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $l(e){var l=wl(e);return Re(l.methods,Ol),l}function kl(e){return Component($l(e))}function jl(e){return Component(ml(e))}ve.forEach(function(e){ie[e]=!1}),oe.forEach(function(e){var l=ie[e]&&ie[e].name?ie[e].name:e;wx.canIUse(l)||(ie[e]=!1)});var Al={};Object.keys(re).forEach(function(e){Al[e]=re[e]}),Object.keys(ke).forEach(function(e){Al[e]=ke[e]}),Object.keys(Se).forEach(function(e){Al[e]=Q(e,Se[e])}),Object.keys(wx).forEach(function(e){(_(wx,e)||_(ie,e))&&(Al[e]=Q(e,fe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=Al,e.UniEmitter=ke),wx.createApp=dl,wx.createPage=kl,wx.createComponent=jl;var xl=Al,Sl=xl;l.default=Sl}).call(this,a("c8ba"))},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-26420200313001",_inBundle:!1,_integrity:"sha512-7dPuazTiDmUyRcw+WW+UlWGKH0eeCUB+p0P4pJVKEHjpdXnXgvDQCSdJk764NH99TfsUycnuxecP5oHckVa88g==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26420200313001.tgz",_shasum:"a006e329e033cd412accfa635f8933dbb822a9c3",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"b1fdbafab5dd4673cff64188a5203d0c947e4f50",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-26420200313001"}},8627:function(e){e.exports={statusCode:"200",msg:"success",data:[{id:1,title:"服饰内衣",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:3,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:4,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:5,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:6,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:7,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:228,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:8,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:9,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:10,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:11,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:12,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1},{id:13,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:328,new:"￥99.00",soldOut:500,img:"s1.jpg",number:1}]},{id:2,title:"美妆个护",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:2228,new:"￥99.00",soldOut:600,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:3,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:4,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:5,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:6,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:7,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:8,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:9,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]},{id:3,title:"珠宝配饰",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]},{id:4,title:"3C数码",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]},{id:5,title:"家用电器",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]},{id:6,title:"家居家具",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]},{id:7,title:"母婴用品",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]},{id:8,title:"美食零食",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]},{id:9,title:"旅行箱包",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]},{id:10,title:"宠物用品",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]},{id:11,title:"运动户外",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]},{id:12,title:"汽车用品",banner:"/static/img/category/banner.jpg",list:[{id:1,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"},{id:2,name:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",soldOut:500,img:"s1.jpg"}]}]}},"90a1":function(e){e.exports={statusCode:"200",msg:"success",data:[{value:"110000",label:"北京市",children:[{value:"110100",label:"北京市",children:[{value:"110101",label:"东城区"},{value:"110102",label:"西城区"},{value:"110105",label:"朝阳区"},{value:"110106",label:"丰台区"},{value:"110107",label:"石景山区"},{value:"110108",label:"海淀区"},{value:"110109",label:"门头沟区"},{value:"110111",label:"房山区"},{value:"110112",label:"通州区"},{value:"110113",label:"顺义区"},{value:"110114",label:"昌平区"},{value:"110115",label:"大兴区"},{value:"110116",label:"怀柔区"},{value:"110117",label:"平谷区"}]},{value:"110200",label:"北京市辖县",children:[{value:"110228",label:"密云县"},{value:"110229",label:"延庆县"}]}]},{value:"120000",label:"天津市",children:[{value:"120100",label:"天津市",children:[{value:"120101",label:"和平区"},{value:"120102",label:"河东区"},{value:"120103",label:"河西区"},{value:"120104",label:"南开区"},{value:"120105",label:"河北区"},{value:"120106",label:"红桥区"},{value:"120110",label:"东丽区"},{value:"120111",label:"西青区"},{value:"120112",label:"津南区"},{value:"120113",label:"北辰区"},{value:"120114",label:"武清区"},{value:"120115",label:"宝坻区"},{value:"120116",label:"滨海新区"}]},{value:"120200",label:"天津市辖县",children:[{value:"120221",label:"宁河县"},{value:"120223",label:"静海县"},{value:"120225",label:"蓟县"}]}]},{value:"130000",label:"河北省",children:[{value:"130100",label:"石家庄市",children:[{value:"130102",label:"长安区"},{value:"130104",label:"桥西区"},{value:"130105",label:"新华区"},{value:"130107",label:"井陉矿区"},{value:"130108",label:"裕华区"},{value:"130109",label:"藁城区"},{value:"130110",label:"鹿泉区"},{value:"130111",label:"栾城区"},{value:"130121",label:"井陉县"},{value:"130123",label:"正定县"},{value:"130125",label:"行唐县"},{value:"130126",label:"灵寿县"},{value:"130127",label:"高邑县"},{value:"130128",label:"深泽县"},{value:"130129",label:"赞皇县"},{value:"130130",label:"无极县"},{value:"130131",label:"平山县"},{value:"130132",label:"元氏县"},{value:"130133",label:"赵县"},{value:"130181",label:"辛集市"},{value:"130183",label:"晋州市"},{value:"130184",label:"新乐市"}]},{value:"130200",label:"唐山市",children:[{value:"130202",label:"路南区"},{value:"130203",label:"路北区"},{value:"130204",label:"古冶区"},{value:"130205",label:"开平区"},{value:"130207",label:"丰南区"},{value:"130208",label:"丰润区"},{value:"130209",label:"曹妃甸区"},{value:"130223",label:"滦县"},{value:"130224",label:"滦南县"},{value:"130225",label:"乐亭县"},{value:"130227",label:"迁西县"},{value:"130229",label:"玉田县"},{value:"130281",label:"遵化市"},{value:"130283",label:"迁安市"}]},{value:"130300",label:"秦皇岛市",children:[{value:"130302",label:"海港区"},{value:"130303",label:"山海关区"},{value:"130304",label:"北戴河区"},{value:"130321",label:"青龙满族自治县"},{value:"130322",label:"昌黎县"},{value:"130323",label:"抚宁县"},{value:"130324",label:"卢龙县"}]},{value:"130400",label:"邯郸市",children:[{value:"130402",label:"邯山区"},{value:"130403",label:"丛台区"},{value:"130404",label:"复兴区"},{value:"130406",label:"峰峰矿区"},{value:"130421",label:"邯郸县"},{value:"130423",label:"临漳县"},{value:"130424",label:"成安县"},{value:"130425",label:"大名县"},{value:"130426",label:"涉县"},{value:"130427",label:"磁县"},{value:"130428",label:"肥乡县"},{value:"130429",label:"永年县"},{value:"130430",label:"邱县"},{value:"130431",label:"鸡泽县"},{value:"130432",label:"广平县"},{value:"130433",label:"馆陶县"},{value:"130434",label:"魏县"},{value:"130435",label:"曲周县"},{value:"130481",label:"武安市"}]},{value:"130500",label:"邢台市",children:[{value:"130502",label:"桥东区"},{value:"130503",label:"桥西区"},{value:"130521",label:"邢台县"},{value:"130522",label:"临城县"},{value:"130523",label:"内丘县"},{value:"130524",label:"柏乡县"},{value:"130525",label:"隆尧县"},{value:"130526",label:"任县"},{value:"130527",label:"南和县"},{value:"130528",label:"宁晋县"},{value:"130529",label:"巨鹿县"},{value:"130530",label:"新河县"},{value:"130531",label:"广宗县"},{value:"130532",label:"平乡县"},{value:"130533",label:"威县"},{value:"130534",label:"清河县"},{value:"130535",label:"临西县"},{value:"130581",label:"南宫市"},{value:"130582",label:"沙河市"}]},{value:"130600",label:"保定市",children:[{value:"130602",label:"新市区"},{value:"130603",label:"北市区"},{value:"130604",label:"南市区"},{value:"130621",label:"满城县"},{value:"130622",label:"清苑县"},{value:"130623",label:"涞水县"},{value:"130624",label:"阜平县"},{value:"130625",label:"徐水县"},{value:"130626",label:"定兴县"},{value:"130627",label:"唐县"},{value:"130628",label:"高阳县"},{value:"130629",label:"容城县"},{value:"130630",label:"涞源县"},{value:"130631",label:"望都县"},{value:"130632",label:"安新县"},{value:"130633",label:"易县"},{value:"130634",label:"曲阳县"},{value:"130635",label:"蠡县"},{value:"130636",label:"顺平县"},{value:"130637",label:"博野县"},{value:"130638",label:"雄县"},{value:"130681",label:"涿州市"},{value:"130682",label:"定州市"},{value:"130683",label:"安国市"},{value:"130684",label:"高碑店市"}]},{value:"130700",label:"张家口市",children:[{value:"130702",label:"桥东区"},{value:"130703",label:"桥西区"},{value:"130705",label:"宣化区"},{value:"130706",label:"下花园区"},{value:"130721",label:"宣化县"},{value:"130722",label:"张北县"},{value:"130723",label:"康保县"},{value:"130724",label:"沽源县"},{value:"130725",label:"尚义县"},{value:"130726",label:"蔚县"},{value:"130727",label:"阳原县"},{value:"130728",label:"怀安县"},{value:"130729",label:"万全县"},{value:"130730",label:"怀来县"},{value:"130731",label:"涿鹿县"},{value:"130732",label:"赤城县"},{value:"130733",label:"崇礼县"}]},{value:"130800",label:"承德市",children:[{value:"130802",label:"双桥区"},{value:"130803",label:"双滦区"},{value:"130804",label:"鹰手营子矿区"},{value:"130821",label:"承德县"},{value:"130822",label:"兴隆县"},{value:"130823",label:"平泉县"},{value:"130824",label:"滦平县"},{value:"130825",label:"隆化县"},{value:"130826",label:"丰宁满族自治县"},{value:"130827",label:"宽城满族自治县"},{value:"130828",label:"围场满族蒙古族自治县"}]},{value:"130900",label:"沧州市",children:[{value:"130902",label:"新华区"},{value:"130903",label:"运河区"},{value:"130921",label:"沧县"},{value:"130922",label:"青县"},{value:"130923",label:"东光县"},{value:"130924",label:"海兴县"},{value:"130925",label:"盐山县"},{value:"130926",label:"肃宁县"},{value:"130927",label:"南皮县"},{value:"130928",label:"吴桥县"},{value:"130929",label:"献县"},{value:"130930",label:"孟村回族自治县"},{value:"130981",label:"泊头市"},{value:"130982",label:"任丘市"},{value:"130983",label:"黄骅市"},{value:"130984",label:"河间市"}]},{value:"131000",label:"廊坊市",children:[{value:"131002",label:"安次区"},{value:"131003",label:"广阳区"},{value:"131022",label:"固安县"},{value:"131023",label:"永清县"},{value:"131024",label:"香河县"},{value:"131025",label:"大城县"},{value:"131026",label:"文安县"},{value:"131028",label:"大厂回族自治县"},{value:"131081",label:"霸州市"},{value:"131082",label:"三河市"}]},{value:"131100",label:"衡水市",children:[{value:"131102",label:"桃城区"},{value:"131121",label:"枣强县"},{value:"131122",label:"武邑县"},{value:"131123",label:"武强县"},{value:"131124",label:"饶阳县"},{value:"131125",label:"安平县"},{value:"131126",label:"故城县"},{value:"131127",label:"景县"},{value:"131128",label:"阜城县"},{value:"131181",label:"冀州市"},{value:"131182",label:"深州市"}]}]},{value:"140000",label:"山西省",children:[{value:"140100",label:"太原市",children:[{value:"140105",label:"小店区"},{value:"140106",label:"迎泽区"},{value:"140107",label:"杏花岭区"},{value:"140108",label:"尖草坪区"},{value:"140109",label:"万柏林区"},{value:"140110",label:"晋源区"},{value:"140121",label:"清徐县"},{value:"140122",label:"阳曲县"},{value:"140123",label:"娄烦县"},{value:"140181",label:"古交市"}]},{value:"140200",label:"大同市",children:[{value:"140202",label:"城区"},{value:"140203",label:"矿区"},{value:"140211",label:"南郊区"},{value:"140212",label:"新荣区"},{value:"140221",label:"阳高县"},{value:"140222",label:"天镇县"},{value:"140223",label:"广灵县"},{value:"140224",label:"灵丘县"},{value:"140225",label:"浑源县"},{value:"140226",label:"左云县"},{value:"140227",label:"大同县"}]},{value:"140300",label:"阳泉市",children:[{value:"140302",label:"城区"},{value:"140303",label:"矿区"},{value:"140311",label:"郊区"},{value:"140321",label:"平定县"},{value:"140322",label:"盂县"}]},{value:"140400",label:"长治市",children:[{value:"140402",label:"城区"},{value:"140411",label:"郊区"},{value:"140421",label:"长治县"},{value:"140423",label:"襄垣县"},{value:"140424",label:"屯留县"},{value:"140425",label:"平顺县"},{value:"140426",label:"黎城县"},{value:"140427",label:"壶关县"},{value:"140428",label:"长子县"},{value:"140429",label:"武乡县"},{value:"140430",label:"沁县"},{value:"140431",label:"沁源县"},{value:"140481",label:"潞城市"}]},{value:"140500",label:"晋城市",children:[{value:"140502",label:"城区"},{value:"140521",label:"沁水县"},{value:"140522",label:"阳城县"},{value:"140524",label:"陵川县"},{value:"140525",label:"泽州县"},{value:"140581",label:"高平市"}]},{value:"140600",label:"朔州市",children:[{value:"140602",label:"朔城区"},{value:"140603",label:"平鲁区"},{value:"140621",label:"山阴县"},{value:"140622",label:"应县"},{value:"140623",label:"右玉县"},{value:"140624",label:"怀仁县"}]},{value:"140700",label:"晋中市",children:[{value:"140702",label:"榆次区"},{value:"140721",label:"榆社县"},{value:"140722",label:"左权县"},{value:"140723",label:"和顺县"},{value:"140724",label:"昔阳县"},{value:"140725",label:"寿阳县"},{value:"140726",label:"太谷县"},{value:"140727",label:"祁县"},{value:"140728",label:"平遥县"},{value:"140729",label:"灵石县"},{value:"140781",label:"介休市"}]},{value:"140800",label:"运城市",children:[{value:"140802",label:"盐湖区"},{value:"140821",label:"临猗县"},{value:"140822",label:"万荣县"},{value:"140823",label:"闻喜县"},{value:"140824",label:"稷山县"},{value:"140825",label:"新绛县"},{value:"140826",label:"绛县"},{value:"140827",label:"垣曲县"},{value:"140828",label:"夏县"},{value:"140829",label:"平陆县"},{value:"140830",label:"芮城县"},{value:"140881",label:"永济市"},{value:"140882",label:"河津市"}]},{value:"140900",label:"忻州市",children:[{value:"140902",label:"忻府区"},{value:"140921",label:"定襄县"},{value:"140922",label:"五台县"},{value:"140923",label:"代县"},{value:"140924",label:"繁峙县"},{value:"140925",label:"宁武县"},{value:"140926",label:"静乐县"},{value:"140927",label:"神池县"},{value:"140928",label:"五寨县"},{value:"140929",label:"岢岚县"},{value:"140930",label:"河曲县"},{value:"140931",label:"保德县"},{value:"140932",label:"偏关县"},{value:"140981",label:"原平市"}]},{value:"141000",label:"临汾市",children:[{value:"141002",label:"尧都区"},{value:"141021",label:"曲沃县"},{value:"141022",label:"翼城县"},{value:"141023",label:"襄汾县"},{value:"141024",label:"洪洞县"},{value:"141025",label:"古县"},{value:"141026",label:"安泽县"},{value:"141027",label:"浮山县"},{value:"141028",label:"吉县"},{value:"141029",label:"乡宁县"},{value:"141030",label:"大宁县"},{value:"141031",label:"隰县"},{value:"141032",label:"永和县"},{value:"141033",label:"蒲县"},{value:"141034",label:"汾西县"},{value:"141081",label:"侯马市"},{value:"141082",label:"霍州市"}]},{value:"141100",label:"吕梁市",children:[{value:"141102",label:"离石区"},{value:"141121",label:"文水县"},{value:"141122",label:"交城县"},{value:"141123",label:"兴县"},{value:"141124",label:"临县"},{value:"141125",label:"柳林县"},{value:"141126",label:"石楼县"},{value:"141127",label:"岚县"},{value:"141128",label:"方山县"},{value:"141129",label:"中阳县"},{value:"141130",label:"交口县"},{value:"141181",label:"孝义市"},{value:"141182",label:"汾阳市"}]}]},{value:"150000",label:"内蒙古自治区",children:[{value:"150100",label:"呼和浩特市",children:[{value:"150102",label:"新城区"},{value:"150103",label:"回民区"},{value:"150104",label:"玉泉区"},{value:"150105",label:"赛罕区"},{value:"150121",label:"土默特左旗"},{value:"150122",label:"托克托县"},{value:"150123",label:"和林格尔县"},{value:"150124",label:"清水河县"},{value:"150125",label:"武川县"}]},{value:"150200",label:"包头市",children:[{value:"150202",label:"东河区"},{value:"150203",label:"昆都仑区"},{value:"150204",label:"青山区"},{value:"150205",label:"石拐区"},{value:"150206",label:"白云鄂博矿区"},{value:"150207",label:"九原区"},{value:"150221",label:"土默特右旗"},{value:"150222",label:"固阳县"},{value:"150223",label:"达尔罕茂明安联合旗"}]},{value:"150300",label:"乌海市",children:[{value:"150302",label:"海勃湾区"},{value:"150303",label:"海南区"},{value:"150304",label:"乌达区"}]},{value:"150400",label:"赤峰市",children:[{value:"150402",label:"红山区"},{value:"150403",label:"元宝山区"},{value:"150404",label:"松山区"},{value:"150421",label:"阿鲁科尔沁旗"},{value:"150422",label:"巴林左旗"},{value:"150423",label:"巴林右旗"},{value:"150424",label:"林西县"},{value:"150425",label:"克什克腾旗"},{value:"150426",label:"翁牛特旗"},{value:"150428",label:"喀喇沁旗"},{value:"150429",label:"宁城县"},{value:"150430",label:"敖汉旗"}]},{value:"150500",label:"通辽市",children:[{value:"150502",label:"科尔沁区"},{value:"150521",label:"科尔沁左翼中旗"},{value:"150522",label:"科尔沁左翼后旗"},{value:"150523",label:"开鲁县"},{value:"150524",label:"库伦旗"},{value:"150525",label:"奈曼旗"},{value:"150526",label:"扎鲁特旗"},{value:"150581",label:"霍林郭勒市"}]},{value:"150600",label:"鄂尔多斯市",children:[{value:"150602",label:"东胜区"},{value:"150621",label:"达拉特旗"},{value:"150622",label:"准格尔旗"},{value:"150623",label:"鄂托克前旗"},{value:"150624",label:"鄂托克旗"},{value:"150625",label:"杭锦旗"},{value:"150626",label:"乌审旗"},{value:"150627",label:"伊金霍洛旗"}]},{value:"150700",label:"呼伦贝尔市",children:[{value:"150702",label:"海拉尔区"},{value:"150703",label:"扎赉诺尔区"},{value:"150721",label:"阿荣旗"},{value:"150722",label:"莫力达瓦达斡尔族自治旗"},{value:"150723",label:"鄂伦春自治旗"},{value:"150724",label:"鄂温克族自治旗"},{value:"150725",label:"陈巴尔虎旗"},{value:"150726",label:"新巴尔虎左旗"},{value:"150727",label:"新巴尔虎右旗"},{value:"150781",label:"满洲里市"},{value:"150782",label:"牙克石市"},{value:"150783",label:"扎兰屯市"},{value:"150784",label:"额尔古纳市"},{value:"150785",label:"根河市"}]},{value:"150800",label:"巴彦淖尔市",children:[{value:"150802",label:"临河区"},{value:"150821",label:"五原县"},{value:"150822",label:"磴口县"},{value:"150823",label:"乌拉特前旗"},{value:"150824",label:"乌拉特中旗"},{value:"150825",label:"乌拉特后旗"},{value:"150826",label:"杭锦后旗"}]},{value:"150900",label:"乌兰察布市",children:[{value:"150902",label:"集宁区"},{value:"150921",label:"卓资县"},{value:"150922",label:"化德县"},{value:"150923",label:"商都县"},{value:"150924",label:"兴和县"},{value:"150925",label:"凉城县"},{value:"150926",label:"察哈尔右翼前旗"},{value:"150927",label:"察哈尔右翼中旗"},{value:"150928",label:"察哈尔右翼后旗"},{value:"150929",label:"四子王旗"},{value:"150981",label:"丰镇市"}]},{value:"152200",label:"兴安盟",children:[{value:"152201",label:"乌兰浩特市"},{value:"152202",label:"阿尔山市"},{value:"152221",label:"科尔沁右翼前旗"},{value:"152222",label:"科尔沁右翼中旗"},{value:"152223",label:"扎赉特旗"},{value:"152224",label:"突泉县"}]},{value:"152500",label:"锡林郭勒盟",children:[{value:"152501",label:"二连浩特市"},{value:"152502",label:"锡林浩特市"},{value:"152522",label:"阿巴嘎旗"},{value:"152523",label:"苏尼特左旗"},{value:"152524",label:"苏尼特右旗"},{value:"152525",label:"东乌珠穆沁旗"},{value:"152526",label:"西乌珠穆沁旗"},{value:"152527",label:"太仆寺旗"},{value:"152528",label:"镶黄旗"},{value:"152529",label:"正镶白旗"},{value:"152530",label:"正蓝旗"},{value:"152531",label:"多伦县"}]},{value:"152900",label:"阿拉善盟",children:[{value:"152921",label:"阿拉善左旗"},{value:"152922",label:"阿拉善右旗"},{value:"152923",label:"额济纳旗"}]}]},{value:"210000",label:"辽宁省",children:[{value:"210100",label:"沈阳市",children:[{value:"210102",label:"和平区"},{value:"210103",label:"沈河区"},{value:"210104",label:"大东区"},{value:"210105",label:"皇姑区"},{value:"210106",label:"铁西区"},{value:"210111",label:"苏家屯区"},{value:"210112",label:"浑南区"},{value:"210113",label:"沈北新区"},{value:"210114",label:"于洪区"},{value:"210122",label:"辽中县"},{value:"210123",label:"康平县"},{value:"210124",label:"法库县"},{value:"210181",label:"新民市"}]},{value:"210200",label:"大连市",children:[{value:"210202",label:"中山区"},{value:"210203",label:"西岗区"},{value:"210204",label:"沙河口区"},{value:"210211",label:"甘井子区"},{value:"210212",label:"旅顺口区"},{value:"210213",label:"金州区"},{value:"210224",label:"长海县"},{value:"210281",label:"瓦房店市"},{value:"210282",label:"普兰店市"},{value:"210283",label:"庄河市"}]},{value:"210300",label:"鞍山市",children:[{value:"210302",label:"铁东区"},{value:"210303",label:"铁西区"},{value:"210304",label:"立山区"},{value:"210311",label:"千山区"},{value:"210321",label:"台安县"},{value:"210323",label:"岫岩满族自治县"},{value:"210381",label:"海城市"}]},{value:"210400",label:"抚顺市",children:[{value:"210402",label:"新抚区"},{value:"210403",label:"东洲区"},{value:"210404",label:"望花区"},{value:"210411",label:"顺城区"},{value:"210421",label:"抚顺县"},{value:"210422",label:"新宾满族自治县"},{value:"210423",label:"清原满族自治县"}]},{value:"210500",label:"本溪市",children:[{value:"210502",label:"平山区"},{value:"210503",label:"溪湖区"},{value:"210504",label:"明山区"},{value:"210505",label:"南芬区"},{value:"210521",label:"本溪满族自治县"},{value:"210522",label:"桓仁满族自治县"}]},{value:"210600",label:"丹东市",children:[{value:"210602",label:"元宝区"},{value:"210603",label:"振兴区"},{value:"210604",label:"振安区"},{value:"210624",label:"宽甸满族自治县"},{value:"210681",label:"东港市"},{value:"210682",label:"凤城市"}]},{value:"210700",label:"锦州市",children:[{value:"210702",label:"古塔区"},{value:"210703",label:"凌河区"},{value:"210711",label:"太和区"},{value:"210726",label:"黑山县"},{value:"210727",label:"义县"},{value:"210781",label:"凌海市"},{value:"210782",label:"北镇市"}]},{value:"210800",label:"营口市",children:[{value:"210802",label:"站前区"},{value:"210803",label:"西市区"},{value:"210804",label:"鲅鱼圈区"},{value:"210811",label:"老边区"},{value:"210881",label:"盖州市"},{value:"210882",label:"大石桥市"}]},{value:"210900",label:"阜新市",children:[{value:"210902",label:"海州区"},{value:"210903",label:"新邱区"},{value:"210904",label:"太平区"},{value:"210905",label:"清河门区"},{value:"210911",label:"细河区"},{value:"210921",label:"阜新蒙古族自治县"},{value:"210922",label:"彰武县"}]},{value:"211000",label:"辽阳市",children:[{value:"211002",label:"白塔区"},{value:"211003",label:"文圣区"},{value:"211004",label:"宏伟区"},{value:"211005",label:"弓长岭区"},{value:"211011",label:"太子河区"},{value:"211021",label:"辽阳县"},{value:"211081",label:"灯塔市"}]},{value:"211100",label:"盘锦市",children:[{value:"211102",label:"双台子区"},{value:"211103",label:"兴隆台区"},{value:"211121",label:"大洼县"},{value:"211122",label:"盘山县"}]},{value:"211200",label:"铁岭市",children:[{value:"211202",label:"银州区"},{value:"211204",label:"清河区"},{value:"211221",label:"铁岭县"},{value:"211223",label:"西丰县"},{value:"211224",label:"昌图县"},{value:"211281",label:"调兵山市"},{value:"211282",label:"开原市"}]},{value:"211300",label:"朝阳市",children:[{value:"211302",label:"双塔区"},{value:"211303",label:"龙城区"},{value:"211321",label:"朝阳县"},{value:"211322",label:"建平县"},{value:"211324",label:"喀喇沁左翼蒙古族自治县"},{value:"211381",label:"北票市"},{value:"211382",label:"凌源市"}]},{value:"211400",label:"葫芦岛市",children:[{value:"211402",label:"连山区"},{value:"211403",label:"龙港区"},{value:"211404",label:"南票区"},{value:"211421",label:"绥中县"},{value:"211422",label:"建昌县"},{value:"211481",label:"兴城市"}]}]},{value:"220000",label:"吉林省",children:[{value:"220100",label:"长春市",children:[{value:"220102",label:"南关区"},{value:"220103",label:"宽城区"},{value:"220104",label:"朝阳区"},{value:"220105",label:"二道区"},{value:"220106",label:"绿园区"},{value:"220112",label:"双阳区"},{value:"220113",label:"九台区"},{value:"220122",label:"农安县"},{value:"220182",label:"榆树市"},{value:"220183",label:"德惠市"}]},{value:"220200",label:"吉林市",children:[{value:"220202",label:"昌邑区"},{value:"220203",label:"龙潭区"},{value:"220204",label:"船营区"},{value:"220211",label:"丰满区"},{value:"220221",label:"永吉县"},{value:"220281",label:"蛟河市"},{value:"220282",label:"桦甸市"},{value:"220283",label:"舒兰市"},{value:"220284",label:"磐石市"}]},{value:"220300",label:"四平市",children:[{value:"220302",label:"铁西区"},{value:"220303",label:"铁东区"},{value:"220322",label:"梨树县"},{value:"220323",label:"伊通满族自治县"},{value:"220381",label:"公主岭市"},{value:"220382",label:"双辽市"}]},{value:"220400",label:"辽源市",children:[{value:"220402",label:"龙山区"},{value:"220403",label:"西安区"},{value:"220421",label:"东丰县"},{value:"220422",label:"东辽县"}]},{value:"220500",label:"通化市",children:[{value:"220502",label:"东昌区"},{value:"220503",label:"二道江区"},{value:"220521",label:"通化县"},{value:"220523",label:"辉南县"},{value:"220524",label:"柳河县"},{value:"220581",label:"梅河口市"},{value:"220582",label:"集安市"}]},{value:"220600",label:"白山市",children:[{value:"220602",label:"浑江区"},{value:"220605",label:"江源区"},{value:"220621",label:"抚松县"},{value:"220622",label:"靖宇县"},{value:"220623",label:"长白朝鲜族自治县"},{value:"220681",label:"临江市"}]},{value:"220700",label:"松原市",children:[{value:"220702",label:"宁江区"},{value:"220721",label:"前郭尔罗斯蒙古族自治县"},{value:"220722",label:"长岭县"},{value:"220723",label:"乾安县"},{value:"220781",label:"扶余市"}]},{value:"220800",label:"白城市",children:[{value:"220802",label:"洮北区"},{value:"220821",label:"镇赉县"},{value:"220822",label:"通榆县"},{value:"220881",label:"洮南市"},{value:"220882",label:"大安市"}]},{value:"222400",label:"延边朝鲜族自治州",children:[{value:"222401",label:"延吉市"},{value:"222402",label:"图们市"},{value:"222403",label:"敦化市"},{value:"222404",label:"珲春市"},{value:"222405",label:"龙井市"},{value:"222406",label:"和龙市"},{value:"222424",label:"汪清县"},{value:"222426",label:"安图县"}]}]},{value:"230000",label:"黑龙江省",children:[{value:"230100",label:"哈尔滨市",children:[{value:"230102",label:"道里区"},{value:"230103",label:"南岗区"},{value:"230104",label:"道外区"},{value:"230108",label:"平房区"},{value:"230109",label:"松北区"},{value:"230110",label:"香坊区"},{value:"230111",label:"呼兰区"},{value:"230112",label:"阿城区"},{value:"230123",label:"依兰县"},{value:"230124",label:"方正县"},{value:"230125",label:"宾县"},{value:"230126",label:"巴彦县"},{value:"230127",label:"木兰县"},{value:"230128",label:"通河县"},{value:"230129",label:"延寿县"},{value:"230182",label:"双城市"},{value:"230183",label:"尚志市"},{value:"230184",label:"五常市"}]},{value:"230200",label:"齐齐哈尔市",children:[{value:"230202",label:"龙沙区"},{value:"230203",label:"建华区"},{value:"230204",label:"铁锋区"},{value:"230205",label:"昂昂溪区"},{value:"230206",label:"富拉尔基区"},{value:"230207",label:"碾子山区"},{value:"230208",label:"梅里斯达斡尔族区"},{value:"230221",label:"龙江县"},{value:"230223",label:"依安县"},{value:"230224",label:"泰来县"},{value:"230225",label:"甘南县"},{value:"230227",label:"富裕县"},{value:"230229",label:"克山县"},{value:"230230",label:"克东县"},{value:"230231",label:"拜泉县"},{value:"230281",label:"讷河市"}]},{value:"230300",label:"鸡西市",children:[{value:"230302",label:"鸡冠区"},{value:"230303",label:"恒山区"},{value:"230304",label:"滴道区"},{value:"230305",label:"梨树区"},{value:"230306",label:"城子河区"},{value:"230307",label:"麻山区"},{value:"230321",label:"鸡东县"},{value:"230381",label:"虎林市"},{value:"230382",label:"密山市"}]},{value:"230400",label:"鹤岗市",children:[{value:"230402",label:"向阳区"},{value:"230403",label:"工农区"},{value:"230404",label:"南山区"},{value:"230405",label:"兴安区"},{value:"230406",label:"东山区"},{value:"230407",label:"兴山区"},{value:"230421",label:"萝北县"},{value:"230422",label:"绥滨县"}]},{value:"230500",label:"双鸭山市",children:[{value:"230502",label:"尖山区"},{value:"230503",label:"岭东区"},{value:"230505",label:"四方台区"},{value:"230506",label:"宝山区"},{value:"230521",label:"集贤县"},{value:"230522",label:"友谊县"},{value:"230523",label:"宝清县"},{value:"230524",label:"饶河县"}]},{value:"230600",label:"大庆市",children:[{value:"230602",label:"萨尔图区"},{value:"230603",label:"龙凤区"},{value:"230604",label:"让胡路区"},{value:"230605",label:"红岗区"},{value:"230606",label:"大同区"},{value:"230621",label:"肇州县"},{value:"230622",label:"肇源县"},{value:"230623",label:"林甸县"},{value:"230624",label:"杜尔伯特蒙古族自治县"}]},{value:"230700",label:"伊春市",children:[{value:"230702",label:"伊春区"},{value:"230703",label:"南岔区"},{value:"230704",label:"友好区"},{value:"230705",label:"西林区"},{value:"230706",label:"翠峦区"},{value:"230707",label:"新青区"},{value:"230708",label:"美溪区"},{value:"230709",label:"金山屯区"},{value:"230710",label:"五营区"},{value:"230711",label:"乌马河区"},{value:"230712",label:"汤旺河区"},{value:"230713",label:"带岭区"},{value:"230714",label:"乌伊岭区"},{value:"230715",label:"红星区"},{value:"230716",label:"上甘岭区"},{value:"230722",label:"嘉荫县"},{value:"230781",label:"铁力市"}]},{value:"230800",label:"佳木斯市",children:[{value:"230803",label:"向阳区"},{value:"230804",label:"前进区"},{value:"230805",label:"东风区"},{value:"230811",label:"郊区"},{value:"230822",label:"桦南县"},{value:"230826",label:"桦川县"},{value:"230828",label:"汤原县"},{value:"230833",label:"抚远县"},{value:"230881",label:"同江市"},{value:"230882",label:"富锦市"}]},{value:"230900",label:"七台河市",children:[{value:"230902",label:"新兴区"},{value:"230903",label:"桃山区"},{value:"230904",label:"茄子河区"},{value:"230921",label:"勃利县"}]},{value:"231000",label:"牡丹江市",children:[{value:"231002",label:"东安区"},{value:"231003",label:"阳明区"},{value:"231004",label:"爱民区"},{value:"231005",label:"西安区"},{value:"231024",label:"东宁县"},{value:"231025",label:"林口县"},{value:"231081",label:"绥芬河市"},{value:"231083",label:"海林市"},{value:"231084",label:"宁安市"},{value:"231085",label:"穆棱市"}]},{value:"231100",label:"黑河市",children:[{value:"231102",label:"爱辉区"},{value:"231121",label:"嫩江县"},{value:"231123",label:"逊克县"},{value:"231124",label:"孙吴县"},{value:"231181",label:"北安市"},{value:"231182",label:"五大连池市"}]},{value:"231200",label:"绥化市",children:[{value:"231202",label:"北林区"},{value:"231221",label:"望奎县"},{value:"231222",label:"兰西县"},{value:"231223",label:"青冈县"},{value:"231224",label:"庆安县"},{value:"231225",label:"明水县"},{value:"231226",label:"绥棱县"},{value:"231281",label:"安达市"},{value:"231282",label:"肇东市"},{value:"231283",label:"海伦市"}]},{value:"232700",label:"大兴安岭地区",children:[{value:"232721",label:"呼玛县"},{value:"232722",label:"塔河县"},{value:"232723",label:"漠河县"}]}]},{value:"310000",label:"上海市",children:[{value:"310100",label:"上海市",children:[{value:"310101",label:"黄浦区"},{value:"310104",label:"徐汇区"},{value:"310105",label:"长宁区"},{value:"310106",label:"静安区"},{value:"310107",label:"普陀区"},{value:"310108",label:"闸北区"},{value:"310109",label:"虹口区"},{value:"310110",label:"杨浦区"},{value:"310112",label:"闵行区"},{value:"310113",label:"宝山区"},{value:"310114",label:"嘉定区"},{value:"310115",label:"浦东新区"},{value:"310116",label:"金山区"},{value:"310117",label:"松江区"},{value:"310118",label:"青浦区"},{value:"310120",label:"奉贤区"}]},{value:"310200",label:"上海市辖县",children:[{value:"310230",label:"崇明县"}]}]},{value:"320000",label:"江苏省",children:[{value:"320100",label:"南京市",children:[{value:"320102",label:"玄武区"},{value:"320104",label:"秦淮区"},{value:"320105",label:"建邺区"},{value:"320106",label:"鼓楼区"},{value:"320111",label:"浦口区"},{value:"320113",label:"栖霞区"},{value:"320114",label:"雨花台区"},{value:"320115",label:"江宁区"},{value:"320116",label:"六合区"},{value:"320117",label:"溧水区"},{value:"320118",label:"高淳区"}]},{value:"320200",label:"无锡市",children:[{value:"320202",label:"崇安区"},{value:"320203",label:"南长区"},{value:"320204",label:"北塘区"},{value:"320205",label:"锡山区"},{value:"320206",label:"惠山区"},{value:"320211",label:"滨湖区"},{value:"320281",label:"江阴市"},{value:"320282",label:"宜兴市"}]},{value:"320300",label:"徐州市",children:[{value:"320302",label:"鼓楼区"},{value:"320303",label:"云龙区"},{value:"320305",label:"贾汪区"},{value:"320311",label:"泉山区"},{value:"320312",label:"铜山区"},{value:"320321",label:"丰县"},{value:"320322",label:"沛县"},{value:"320324",label:"睢宁县"},{value:"320381",label:"新沂市"},{value:"320382",label:"邳州市"}]},{value:"320400",label:"常州市",children:[{value:"320402",label:"天宁区"},{value:"320404",label:"钟楼区"},{value:"320405",label:"戚墅堰区"},{value:"320411",label:"新北区"},{value:"320412",label:"武进区"},{value:"320481",label:"溧阳市"},{value:"320482",label:"金坛市"}]},{value:"320500",label:"苏州市",children:[{value:"320505",label:"虎丘区"},{value:"320506",label:"吴中区"},{value:"320507",label:"相城区"},{value:"320508",label:"姑苏区"},{value:"320509",label:"吴江区"},{value:"320581",label:"常熟市"},{value:"320582",label:"张家港市"},{value:"320583",label:"昆山市"},{value:"320585",label:"太仓市"}]},{value:"320600",label:"南通市",children:[{value:"320602",label:"崇川区"},{value:"320611",label:"港闸区"},{value:"320612",label:"通州区"},{value:"320621",label:"海安县"},{value:"320623",label:"如东县"},{value:"320681",label:"启东市"},{value:"320682",label:"如皋市"},{value:"320684",label:"海门市"}]},{value:"320700",label:"连云港市",children:[{value:"320703",label:"连云区"},{value:"320705",label:"新浦"},{value:"320706",label:"海州区"},{value:"320707",label:"赣榆区"},{value:"320722",label:"东海县"},{value:"320723",label:"灌云县"},{value:"320724",label:"灌南县"}]},{value:"320800",label:"淮安市",children:[{value:"320802",label:"清河区"},{value:"320803",label:"淮安区"},{value:"320804",label:"淮阴区"},{value:"320811",label:"清浦区"},{value:"320826",label:"涟水县"},{value:"320829",label:"洪泽县"},{value:"320830",label:"盱眙县"},{value:"320831",label:"金湖县"}]},{value:"320900",label:"盐城市",children:[{value:"320902",label:"亭湖区"},{value:"320903",label:"盐都区"},{value:"320921",label:"响水县"},{value:"320922",label:"滨海县"},{value:"320923",label:"阜宁县"},{value:"320924",label:"射阳县"},{value:"320925",label:"建湖县"},{value:"320981",label:"东台市"},{value:"320982",label:"大丰市"}]},{value:"321000",label:"扬州市",children:[{value:"321002",label:"广陵区"},{value:"321003",label:"邗江区"},{value:"321012",label:"江都区"},{value:"321023",label:"宝应县"},{value:"321081",label:"仪征市"},{value:"321084",label:"高邮市"}]},{value:"321100",label:"镇江市",children:[{value:"321102",label:"京口区"},{value:"321111",label:"润州区"},{value:"321112",label:"丹徒区"},{value:"321181",label:"丹阳市"},{value:"321182",label:"扬中市"},{value:"321183",label:"句容市"}]},{value:"321200",label:"泰州市",children:[{value:"321202",label:"海陵区"},{value:"321203",label:"高港区"},{value:"321204",label:"姜堰区"},{value:"321281",label:"兴化市"},{value:"321282",label:"靖江市"},{value:"321283",label:"泰兴市"}]},{value:"321300",label:"宿迁市",children:[{value:"321302",label:"宿城区"},{value:"321311",label:"宿豫区"},{value:"321322",label:"沭阳县"},{value:"321323",label:"泗阳县"},{value:"321324",label:"泗洪县"}]}]},{value:"330000",label:"浙江省",children:[{value:"330100",label:"杭州市",children:[{value:"330102",label:"上城区"},{value:"330103",label:"下城区"},{value:"330104",label:"江干区"},{value:"330105",label:"拱墅区"},{value:"330106",label:"西湖区"},{value:"330108",label:"滨江区"},{value:"330109",label:"萧山区"},{value:"330110",label:"余杭区"},{value:"330122",label:"桐庐县"},{value:"330127",label:"淳安县"},{value:"330182",label:"建德市"},{value:"330183",label:"富阳市"},{value:"330185",label:"临安市"}]},{value:"330200",label:"宁波市",children:[{value:"330203",label:"海曙区"},{value:"330204",label:"江东区"},{value:"330205",label:"江北区"},{value:"330206",label:"北仑区"},{value:"330211",label:"镇海区"},{value:"330212",label:"鄞州区"},{value:"330225",label:"象山县"},{value:"330226",label:"宁海县"},{value:"330281",label:"余姚市"},{value:"330282",label:"慈溪市"},{value:"330283",label:"奉化市"}]},{value:"330300",label:"温州市",children:[{value:"330302",label:"鹿城区"},{value:"330303",label:"龙湾区"},{value:"330304",label:"瓯海区"},{value:"330322",label:"洞头县"},{value:"330324",label:"永嘉县"},{value:"330326",label:"平阳县"},{value:"330327",label:"苍南县"},{value:"330328",label:"文成县"},{value:"330329",label:"泰顺县"},{value:"330381",label:"瑞安市"},{value:"330382",label:"乐清市"}]},{value:"330400",label:"嘉兴市",children:[{value:"330402",label:"南湖区"},{value:"330411",label:"秀洲区"},{value:"330421",label:"嘉善县"},{value:"330424",label:"海盐县"},{value:"330481",label:"海宁市"},{value:"330482",label:"平湖市"},{value:"330483",label:"桐乡市"}]},{value:"330500",label:"湖州市",children:[{value:"330502",label:"吴兴区"},{value:"330503",label:"南浔区"},{value:"330521",label:"德清县"},{value:"330522",label:"长兴县"},{value:"330523",label:"安吉县"}]},{value:"330600",label:"绍兴市",children:[{value:"330602",label:"越城区"},{value:"330603",label:"柯桥区"},{value:"330604",label:"上虞区"},{value:"330624",label:"新昌县"},{value:"330681",label:"诸暨市"},{value:"330683",label:"嵊州市"}]},{value:"330700",label:"金华市",children:[{value:"330702",label:"婺城区"},{value:"330703",label:"金东区"},{value:"330723",label:"武义县"},{value:"330726",label:"浦江县"},{value:"330727",label:"磐安县"},{value:"330781",label:"兰溪市"},{value:"330782",label:"义乌市"},{value:"330783",label:"东阳市"},{value:"330784",label:"永康市"}]},{value:"330800",label:"衢州市",children:[{value:"330802",label:"柯城区"},{value:"330803",label:"衢江区"},{value:"330822",label:"常山县"},{value:"330824",label:"开化县"},{value:"330825",label:"龙游县"},{value:"330881",label:"江山市"}]},{value:"330900",label:"舟山市",children:[{value:"330902",label:"定海区"},{value:"330903",label:"普陀区"},{value:"330921",label:"岱山县"},{value:"330922",label:"嵊泗县"}]},{value:"331000",label:"台州市",children:[{value:"331002",label:"椒江区"},{value:"331003",label:"黄岩区"},{value:"331004",label:"路桥区"},{value:"331021",label:"玉环县"},{value:"331022",label:"三门县"},{value:"331023",label:"天台县"},{value:"331024",label:"仙居县"},{value:"331081",label:"温岭市"},{value:"331082",label:"临海市"}]},{value:"331100",label:"丽水市",children:[{value:"331102",label:"莲都区"},{value:"331121",label:"青田县"},{value:"331122",label:"缙云县"},{value:"331123",label:"遂昌县"},{value:"331124",label:"松阳县"},{value:"331125",label:"云和县"},{value:"331126",label:"庆元县"},{value:"331127",label:"景宁畲族自治县"},{value:"331181",label:"龙泉市"}]}]},{value:"340000",label:"安徽省",children:[{value:"340100",label:"合肥市",children:[{value:"340102",label:"瑶海区"},{value:"340103",label:"庐阳区"},{value:"340104",label:"蜀山区"},{value:"340111",label:"包河区"},{value:"340121",label:"长丰县"},{value:"340122",label:"肥东县"},{value:"340123",label:"肥西县"},{value:"340124",label:"庐江县"},{value:"340181",label:"巢湖市"}]},{value:"340200",label:"芜湖市",children:[{value:"340202",label:"镜湖区"},{value:"340203",label:"弋江区"},{value:"340207",label:"鸠江区"},{value:"340208",label:"三山区"},{value:"340221",label:"芜湖县"},{value:"340222",label:"繁昌县"},{value:"340223",label:"南陵县"},{value:"340225",label:"无为县"}]},{value:"340300",label:"蚌埠市",children:[{value:"340302",label:"龙子湖区"},{value:"340303",label:"蚌山区"},{value:"340304",label:"禹会区"},{value:"340311",label:"淮上区"},{value:"340321",label:"怀远县"},{value:"340322",label:"五河县"},{value:"340323",label:"固镇县"}]},{value:"340400",label:"淮南市",children:[{value:"340402",label:"大通区"},{value:"340403",label:"田家庵区"},{value:"340404",label:"谢家集区"},{value:"340405",label:"八公山区"},{value:"340406",label:"潘集区"},{value:"340421",label:"凤台县"}]},{value:"340500",label:"马鞍山市",children:[{value:"340503",label:"花山区"},{value:"340504",label:"雨山区"},{value:"340506",label:"博望区"},{value:"340521",label:"当涂县"},{value:"340522",label:"含山县"},{value:"340523",label:"和县"}]},{value:"340600",label:"淮北市",children:[{value:"340602",label:"杜集区"},{value:"340603",label:"相山区"},{value:"340604",label:"烈山区"},{value:"340621",label:"濉溪县"}]},{value:"340700",label:"铜陵市",children:[{value:"340702",label:"铜官山区"},{value:"340703",label:"狮子山区"},{value:"340711",label:"郊区"},{value:"340721",label:"铜陵县"}]},{value:"340800",label:"安庆市",children:[{value:"340802",label:"迎江区"},{value:"340803",label:"大观区"},{value:"340811",label:"宜秀区"},{value:"340822",label:"怀宁县"},{value:"340823",label:"枞阳县"},{value:"340824",label:"潜山县"},{value:"340825",label:"太湖县"},{value:"340826",label:"宿松县"},{value:"340827",label:"望江县"},{value:"340828",label:"岳西县"},{value:"340881",label:"桐城市"}]},{value:"341000",label:"黄山市",children:[{value:"341002",label:"屯溪区"},{value:"341003",label:"黄山区"},{value:"341004",label:"徽州区"},{value:"341021",label:"歙县"},{value:"341022",label:"休宁县"},{value:"341023",label:"黟县"},{value:"341024",label:"祁门县"}]},{value:"341100",label:"滁州市",children:[{value:"341102",label:"琅琊区"},{value:"341103",label:"南谯区"},{value:"341122",label:"来安县"},{value:"341124",label:"全椒县"},{value:"341125",label:"定远县"},{value:"341126",label:"凤阳县"},{value:"341181",label:"天长市"},{value:"341182",label:"明光市"}]},{value:"341200",label:"阜阳市",children:[{value:"341202",label:"颍州区"},{value:"341203",label:"颍东区"},{value:"341204",label:"颍泉区"},{value:"341221",label:"临泉县"},{value:"341222",label:"太和县"},{value:"341225",label:"阜南县"},{value:"341226",label:"颍上县"},{value:"341282",label:"界首市"}]},{value:"341300",label:"宿州市",children:[{value:"341302",label:"埇桥区"},{value:"341321",label:"砀山县"},{value:"341322",label:"萧县"},{value:"341323",label:"灵璧县"},{value:"341324",label:"泗县"}]},{value:"341500",label:"六安市",children:[{value:"341502",label:"金安区"},{value:"341503",label:"裕安区"},{value:"341521",label:"寿县"},{value:"341522",label:"霍邱县"},{value:"341523",label:"舒城县"},{value:"341524",label:"金寨县"},{value:"341525",label:"霍山县"}]},{value:"341600",label:"亳州市",children:[{value:"341602",label:"谯城区"},{value:"341621",label:"涡阳县"},{value:"341622",label:"蒙城县"},{value:"341623",label:"利辛县"}]},{value:"341700",label:"池州市",children:[{value:"341702",label:"贵池区"},{value:"341721",label:"东至县"},{value:"341722",label:"石台县"},{value:"341723",label:"青阳县"}]},{value:"341800",label:"宣城市",children:[{value:"341802",label:"宣州区"},{value:"341821",label:"郎溪县"},{value:"341822",label:"广德县"},{value:"341823",label:"泾县"},{value:"341824",label:"绩溪县"},{value:"341825",label:"旌德县"},{value:"341881",label:"宁国市"}]}]},{value:"350000",label:"福建省",children:[{value:"350100",label:"福州市",children:[{value:"350102",label:"鼓楼区"},{value:"350103",label:"台江区"},{value:"350104",label:"仓山区"},{value:"350105",label:"马尾区"},{value:"350111",label:"晋安区"},{value:"350121",label:"闽侯县"},{value:"350122",label:"连江县"},{value:"350123",label:"罗源县"},{value:"350124",label:"闽清县"},{value:"350125",label:"永泰县"},{value:"350128",label:"平潭县"},{value:"350181",label:"福清市"},{value:"350182",label:"长乐市"}]},{value:"350200",label:"厦门市",children:[{value:"350203",label:"思明区"},{value:"350205",label:"海沧区"},{value:"350206",label:"湖里区"},{value:"350211",label:"集美区"},{value:"350212",label:"同安区"},{value:"350213",label:"翔安区"}]},{value:"350300",label:"莆田市",children:[{value:"350302",label:"城厢区"},{value:"350303",label:"涵江区"},{value:"350304",label:"荔城区"},{value:"350305",label:"秀屿区"},{value:"350322",label:"仙游县"}]},{value:"350400",label:"三明市",children:[{value:"350402",label:"梅列区"},{value:"350403",label:"三元区"},{value:"350421",label:"明溪县"},{value:"350423",label:"清流县"},{value:"350424",label:"宁化县"},{value:"350425",label:"大田县"},{value:"350426",label:"尤溪县"},{value:"350427",label:"沙县"},{value:"350428",label:"将乐县"},{value:"350429",label:"泰宁县"},{value:"350430",label:"建宁县"},{value:"350481",label:"永安市"}]},{value:"350500",label:"泉州市",children:[{value:"350502",label:"鲤城区"},{value:"350503",label:"丰泽区"},{value:"350504",label:"洛江区"},{value:"350505",label:"泉港区"},{value:"350521",label:"惠安县"},{value:"350524",label:"安溪县"},{value:"350525",label:"永春县"},{value:"350526",label:"德化县"},{value:"350527",label:"金门县"},{value:"350581",label:"石狮市"},{value:"350582",label:"晋江市"},{value:"350583",label:"南安市"}]},{value:"350600",label:"漳州市",children:[{value:"350602",label:"芗城区"},{value:"350603",label:"龙文区"},{value:"350622",label:"云霄县"},{value:"350623",label:"漳浦县"},{value:"350624",label:"诏安县"},{value:"350625",label:"长泰县"},{value:"350626",label:"东山县"},{value:"350627",label:"南靖县"},{value:"350628",label:"平和县"},{value:"350629",label:"华安县"},{value:"350681",label:"龙海市"}]},{value:"350700",label:"南平市",children:[{value:"350702",label:"延平区"},{value:"350721",label:"顺昌县"},{value:"350722",label:"浦城县"},{value:"350723",label:"光泽县"},{value:"350724",label:"松溪县"},{value:"350725",label:"政和县"},{value:"350781",label:"邵武市"},{value:"350782",label:"武夷山市"},{value:"350783",label:"建瓯市"},{value:"350784",label:"建阳市"}]},{value:"350800",label:"龙岩市",children:[{value:"350802",label:"新罗区"},{value:"350821",label:"长汀县"},{value:"350822",label:"永定县"},{value:"350823",label:"上杭县"},{value:"350824",label:"武平县"},{value:"350825",label:"连城县"},{value:"350881",label:"漳平市"}]},{value:"350900",label:"宁德市",children:[{value:"350902",label:"蕉城区"},{value:"350921",label:"霞浦县"},{value:"350922",label:"古田县"},{value:"350923",label:"屏南县"},{value:"350924",label:"寿宁县"},{value:"350925",label:"周宁县"},{value:"350926",label:"柘荣县"},{value:"350981",label:"福安市"},{value:"350982",label:"福鼎市"}]}]},{value:"360000",label:"江西省",children:[{value:"360100",label:"南昌市",children:[{value:"360102",label:"东湖区"},{value:"360103",label:"西湖区"},{value:"360104",label:"青云谱区"},{value:"360105",label:"湾里区"},{value:"360111",label:"青山湖区"},{value:"360121",label:"南昌县"},{value:"360122",label:"新建县"},{value:"360123",label:"安义县"},{value:"360124",label:"进贤县"}]},{value:"360200",label:"景德镇市",children:[{value:"360202",label:"昌江区"},{value:"360203",label:"珠山区"},{value:"360222",label:"浮梁县"},{value:"360281",label:"乐平市"}]},{value:"360300",label:"萍乡市",children:[{value:"360302",label:"安源区"},{value:"360313",label:"湘东区"},{value:"360321",label:"莲花县"},{value:"360322",label:"上栗县"},{value:"360323",label:"芦溪县"}]},{value:"360400",label:"九江市",children:[{value:"360402",label:"庐山区"},{value:"360403",label:"浔阳区"},{value:"360421",label:"九江县"},{value:"360423",label:"武宁县"},{value:"360424",label:"修水县"},{value:"360425",label:"永修县"},{value:"360426",label:"德安县"},{value:"360427",label:"星子县"},{value:"360428",label:"都昌县"},{value:"360429",label:"湖口县"},{value:"360430",label:"彭泽县"},{value:"360481",label:"瑞昌市"},{value:"360482",label:"共青城市"}]},{value:"360500",label:"新余市",children:[{value:"360502",label:"渝水区"},{value:"360521",label:"分宜县"}]},{value:"360600",label:"鹰潭市",children:[{value:"360602",label:"月湖区"},{value:"360622",label:"余江县"},{value:"360681",label:"贵溪市"}]},{value:"360700",label:"赣州市",children:[{value:"360702",label:"章贡区"},{value:"360703",label:"南康区"},{value:"360721",label:"赣县"},{value:"360722",label:"信丰县"},{value:"360723",label:"大余县"},{value:"360724",label:"上犹县"},{value:"360725",label:"崇义县"},{value:"360726",label:"安远县"},{value:"360727",label:"龙南县"},{value:"360728",label:"定南县"},{value:"360729",label:"全南县"},{value:"360730",label:"宁都县"},{value:"360731",label:"于都县"},{value:"360732",label:"兴国县"},{value:"360733",label:"会昌县"},{value:"360734",label:"寻乌县"},{value:"360735",label:"石城县"},{value:"360781",label:"瑞金市"}]},{value:"360800",label:"吉安市",children:[{value:"360802",label:"吉州区"},{value:"360803",label:"青原区"},{value:"360821",label:"吉安县"},{value:"360822",label:"吉水县"},{value:"360823",label:"峡江县"},{value:"360824",label:"新干县"},{value:"360825",label:"永丰县"},{value:"360826",label:"泰和县"},{value:"360827",label:"遂川县"},{value:"360828",label:"万安县"},{value:"360829",label:"安福县"},{value:"360830",label:"永新县"},{value:"360881",label:"井冈山市"}]},{value:"360900",label:"宜春市",children:[{value:"360902",label:"袁州区"},{value:"360921",label:"奉新县"},{value:"360922",label:"万载县"},{value:"360923",label:"上高县"},{value:"360924",label:"宜丰县"},{value:"360925",label:"靖安县"},{value:"360926",label:"铜鼓县"},{value:"360981",label:"丰城市"},{value:"360982",label:"樟树市"},{value:"360983",label:"高安市"}]},{value:"361000",label:"抚州市",children:[{value:"361002",label:"临川区"},{value:"361021",label:"南城县"},{value:"361022",label:"黎川县"},{value:"361023",label:"南丰县"},{value:"361024",label:"崇仁县"},{value:"361025",label:"乐安县"},{value:"361026",label:"宜黄县"},{value:"361027",label:"金溪县"},{value:"361028",label:"资溪县"},{value:"361029",label:"东乡县"},{value:"361030",label:"广昌县"}]},{value:"361100",label:"上饶市",children:[{value:"361102",label:"信州区"},{value:"361121",label:"上饶县"},{value:"361122",label:"广丰县"},{value:"361123",label:"玉山县"},{value:"361124",label:"铅山县"},{value:"361125",label:"横峰县"},{value:"361126",label:"弋阳县"},{value:"361127",label:"余干县"},{value:"361128",label:"鄱阳县"},{value:"361129",label:"万年县"},{value:"361130",label:"婺源县"},{value:"361181",label:"德兴市"}]}]},{value:"370000",label:"山东省",children:[{value:"370100",label:"济南市",children:[{value:"370102",label:"历下区"},{value:"370103",label:"市中区"},{value:"370104",label:"槐荫区"},{value:"370105",label:"天桥区"},{value:"370112",label:"历城区"},{value:"370113",label:"长清区"},{value:"370124",label:"平阴县"},{value:"370125",label:"济阳县"},{value:"370126",label:"商河县"},{value:"370181",label:"章丘市"}]},{value:"370200",label:"青岛市",children:[{value:"370202",label:"市南区"},{value:"370203",label:"市北区"},{value:"370211",label:"黄岛区"},{value:"370212",label:"崂山区"},{value:"370213",label:"李沧区"},{value:"370214",label:"城阳区"},{value:"370281",label:"胶州市"},{value:"370282",label:"即墨市"},{value:"370283",label:"平度市"},{value:"370285",label:"莱西市"}]},{value:"370300",label:"淄博市",children:[{value:"370302",label:"淄川区"},{value:"370303",label:"张店区"},{value:"370304",label:"博山区"},{value:"370305",label:"临淄区"},{value:"370306",label:"周村区"},{value:"370321",label:"桓台县"},{value:"370322",label:"高青县"},{value:"370323",label:"沂源县"}]},{value:"370400",label:"枣庄市",children:[{value:"370402",label:"市中区"},{value:"370403",label:"薛城区"},{value:"370404",label:"峄城区"},{value:"370405",label:"台儿庄区"},{value:"370406",label:"山亭区"},{value:"370481",label:"滕州市"}]},{value:"370500",label:"东营市",children:[{value:"370502",label:"东营区"},{value:"370503",label:"河口区"},{value:"370521",label:"垦利县"},{value:"370522",label:"利津县"},{value:"370523",label:"广饶县"}]},{value:"370600",label:"烟台市",children:[{value:"370602",label:"芝罘区"},{value:"370611",label:"福山区"},{value:"370612",label:"牟平区"},{value:"370613",label:"莱山区"},{value:"370634",label:"长岛县"},{value:"370681",label:"龙口市"},{value:"370682",label:"莱阳市"},{value:"370683",label:"莱州市"},{value:"370684",label:"蓬莱市"},{value:"370685",label:"招远市"},{value:"370686",label:"栖霞市"},{value:"370687",label:"海阳市"}]},{value:"370700",label:"潍坊市",children:[{value:"370702",label:"潍城区"},{value:"370703",label:"寒亭区"},{value:"370704",label:"坊子区"},{value:"370705",label:"奎文区"},{value:"370724",label:"临朐县"},{value:"370725",label:"昌乐县"},{value:"370781",label:"青州市"},{value:"370782",label:"诸城市"},{value:"370783",label:"寿光市"},{value:"370784",label:"安丘市"},{value:"370785",label:"高密市"},{value:"370786",label:"昌邑市"}]},{value:"370800",label:"济宁市",children:[{value:"370802",label:"市中区"},{value:"370811",label:"任城区"},{value:"370812",label:"兖州区"},{value:"370826",label:"微山县"},{value:"370827",label:"鱼台县"},{value:"370828",label:"金乡县"},{value:"370829",label:"嘉祥县"},{value:"370830",label:"汶上县"},{value:"370831",label:"泗水县"},{value:"370832",label:"梁山县"},{value:"370881",label:"曲阜市"},{value:"370883",label:"邹城市"}]},{value:"370900",label:"泰安市",children:[{value:"370902",label:"泰山区"},{value:"370911",label:"岱岳区"},{value:"370921",label:"宁阳县"},{value:"370923",label:"东平县"},{value:"370982",label:"新泰市"},{value:"370983",label:"肥城市"}]},{value:"371000",label:"威海市",children:[{value:"371002",label:"环翠区"},{value:"371003",label:"文登区"},{value:"371082",label:"荣成市"},{value:"371083",label:"乳山市"}]},{value:"371100",label:"日照市",children:[{value:"371102",label:"东港区"},{value:"371103",label:"岚山区"},{value:"371121",label:"五莲县"},{value:"371122",label:"莒县"}]},{value:"371200",label:"莱芜市",children:[{value:"371202",label:"莱城区"},{value:"371203",label:"钢城区"}]},{value:"371300",label:"临沂市",children:[{value:"371302",label:"兰山区"},{value:"371311",label:"罗庄区"},{value:"371312",label:"河东区"},{value:"371321",label:"沂南县"},{value:"371322",label:"郯城县"},{value:"371323",label:"沂水县"},{value:"371324",label:"兰陵县"},{value:"371325",label:"费县"},{value:"371326",label:"平邑县"},{value:"371327",label:"莒南县"},{value:"371328",label:"蒙阴县"},{value:"371329",label:"临沭县"}]},{value:"371400",label:"德州市",children:[{value:"371402",label:"德城区"},{value:"371403",label:"陵城区"},{value:"371422",label:"宁津县"},{value:"371423",label:"庆云县"},{value:"371424",label:"临邑县"},{value:"371425",label:"齐河县"},{value:"371426",label:"平原县"},{value:"371427",label:"夏津县"},{value:"371428",label:"武城县"},{value:"371481",label:"乐陵市"},{value:"371482",label:"禹城市"}]},{value:"371500",label:"聊城市",children:[{value:"371502",label:"东昌府区"},{value:"371521",label:"阳谷县"},{value:"371522",label:"莘县"},{value:"371523",label:"茌平县"},{value:"371524",label:"东阿县"},{value:"371525",label:"冠县"},{value:"371526",label:"高唐县"},{value:"371581",label:"临清市"}]},{value:"371600",label:"滨州市",children:[{value:"371602",label:"滨城区"},{value:"371603",label:"沾化区"},{value:"371621",label:"惠民县"},{value:"371622",label:"阳信县"},{value:"371623",label:"无棣县"},{value:"371625",label:"博兴县"},{value:"371626",label:"邹平县"}]},{value:"371700",label:"菏泽市",children:[{value:"371702",label:"牡丹区"},{value:"371721",label:"曹县"},{value:"371722",label:"单县"},{value:"371723",label:"成武县"},{value:"371724",label:"巨野县"},{value:"371725",label:"郓城县"},{value:"371726",label:"鄄城县"},{value:"371727",label:"定陶县"},{value:"371728",label:"东明县"}]}]},{value:"410000",label:"河南省",children:[{value:"410100",label:"郑州市",children:[{value:"410102",label:"中原区"},{value:"410103",label:"二七区"},{value:"410104",label:"管城回族区"},{value:"410105",label:"金水区"},{value:"410106",label:"上街区"},{value:"410108",label:"惠济区"},{value:"410122",label:"中牟县"},{value:"410181",label:"巩义市"},{value:"410182",label:"荥阳市"},{value:"410183",label:"新密市"},{value:"410184",label:"新郑市"},{value:"410185",label:"登封市"}]},{value:"410200",label:"开封市",children:[{value:"410202",label:"龙亭区"},{value:"410203",label:"顺河回族区"},{value:"410204",label:"鼓楼区"},{value:"410205",label:"禹王台区"},{value:"410211",label:"金明区"},{value:"410221",label:"杞县"},{value:"410222",label:"通许县"},{value:"410223",label:"尉氏县"},{value:"410224",label:"开封县"},{value:"410225",label:"兰考县"}]},{value:"410300",label:"洛阳市",children:[{value:"410302",label:"老城区"},{value:"410303",label:"西工区"},{value:"410304",label:"瀍河回族区"},{value:"410305",label:"涧西区"},{value:"410306",label:"吉利区"},{value:"410311",label:"洛龙区"},{value:"410322",label:"孟津县"},{value:"410323",label:"新安县"},{value:"410324",label:"栾川县"},{value:"410325",label:"嵩县"},{value:"410326",label:"汝阳县"},{value:"410327",label:"宜阳县"},{value:"410328",label:"洛宁县"},{value:"410329",label:"伊川县"},{value:"410381",label:"偃师市"}]},{value:"410400",label:"平顶山市",children:[{value:"410402",label:"新华区"},{value:"410403",label:"卫东区"},{value:"410404",label:"石龙区"},{value:"410411",label:"湛河区"},{value:"410421",label:"宝丰县"},{value:"410422",label:"叶县"},{value:"410423",label:"鲁山县"},{value:"410425",label:"郏县"},{value:"410481",label:"舞钢市"},{value:"410482",label:"汝州市"}]},{value:"410500",label:"安阳市",children:[{value:"410502",label:"文峰区"},{value:"410503",label:"北关区"},{value:"410505",label:"殷都区"},{value:"410506",label:"龙安区"},{value:"410522",label:"安阳县"},{value:"410523",label:"汤阴县"},{value:"410526",label:"滑县"},{value:"410527",label:"内黄县"},{value:"410581",label:"林州市"}]},{value:"410600",label:"鹤壁市",children:[{value:"410602",label:"鹤山区"},{value:"410603",label:"山城区"},{value:"410611",label:"淇滨区"},{value:"410621",label:"浚县"},{value:"410622",label:"淇县"}]},{value:"410700",label:"新乡市",children:[{value:"410702",label:"红旗区"},{value:"410703",label:"卫滨区"},{value:"410704",label:"凤泉区"},{value:"410711",label:"牧野区"},{value:"410721",label:"新乡县"},{value:"410724",label:"获嘉县"},{value:"410725",label:"原阳县"},{value:"410726",label:"延津县"},{value:"410727",label:"封丘县"},{value:"410728",label:"长垣县"},{value:"410781",label:"卫辉市"},{value:"410782",label:"辉县市"}]},{value:"410800",label:"焦作市",children:[{value:"410802",label:"解放区"},{value:"410803",label:"中站区"},{value:"410804",label:"马村区"},{value:"410811",label:"山阳区"},{value:"410821",label:"修武县"},{value:"410822",label:"博爱县"},{value:"410823",label:"武陟县"},{value:"410825",label:"温县"},{value:"410882",label:"沁阳市"},{value:"410883",label:"孟州市"}]},{value:"410900",label:"濮阳市",children:[{value:"410902",label:"华龙区"},{value:"410922",label:"清丰县"},{value:"410923",label:"南乐县"},{value:"410926",label:"范县"},{value:"410927",label:"台前县"},{value:"410928",label:"濮阳县"}]},{value:"411000",label:"许昌市",children:[{value:"411002",label:"魏都区"},{value:"411023",label:"许昌县"},{value:"411024",label:"鄢陵县"},{value:"411025",label:"襄城县"},{value:"411081",label:"禹州市"},{value:"411082",label:"长葛市"}]},{value:"411100",label:"漯河市",children:[{value:"411102",label:"源汇区"},{value:"411103",label:"郾城区"},{value:"411104",label:"召陵区"},{value:"411121",label:"舞阳县"},{value:"411122",label:"临颍县"}]},{value:"411200",label:"三门峡市",children:[{value:"411202",label:"湖滨区"},{value:"411221",label:"渑池县"},{value:"411222",label:"陕县"},{value:"411224",label:"卢氏县"},{value:"411281",label:"义马市"},{value:"411282",label:"灵宝市"}]},{value:"411300",label:"南阳市",children:[{value:"411302",label:"宛城区"},{value:"411303",label:"卧龙区"},{value:"411321",label:"南召县"},{value:"411322",label:"方城县"},{value:"411323",label:"西峡县"},{value:"411324",label:"镇平县"},{value:"411325",label:"内乡县"},{value:"411326",label:"淅川县"},{value:"411327",label:"社旗县"},{value:"411328",label:"唐河县"},{value:"411329",label:"新野县"},{value:"411330",label:"桐柏县"},{value:"411381",label:"邓州市"}]},{value:"411400",label:"商丘市",children:[{value:"411402",label:"梁园区"},{value:"411403",label:"睢阳区"},{value:"411421",label:"民权县"},{value:"411422",label:"睢县"},{value:"411423",label:"宁陵县"},{value:"411424",label:"柘城县"},{value:"411425",label:"虞城县"},{value:"411426",label:"夏邑县"},{value:"411481",label:"永城市"}]},{value:"411500",label:"信阳市",children:[{value:"411502",label:"浉河区"},{value:"411503",label:"平桥区"},{value:"411521",label:"罗山县"},{value:"411522",label:"光山县"},{value:"411523",label:"新县"},{value:"411524",label:"商城县"},{value:"411525",label:"固始县"},{value:"411526",label:"潢川县"},{value:"411527",label:"淮滨县"},{value:"411528",label:"息县"}]},{value:"411600",label:"周口市",children:[{value:"411602",label:"川汇区"},{value:"411621",label:"扶沟县"},{value:"411622",label:"西华县"},{value:"411623",label:"商水县"},{value:"411624",label:"沈丘县"},{value:"411625",label:"郸城县"},{value:"411626",label:"淮阳县"},{value:"411627",label:"太康县"},{value:"411628",label:"鹿邑县"},{value:"411681",label:"项城市"}]},{value:"411700",label:"驻马店市",children:[{value:"411702",label:"驿城区"},{value:"411721",label:"西平县"},{value:"411722",label:"上蔡县"},{value:"411723",label:"平舆县"},{value:"411724",label:"正阳县"},{value:"411725",label:"确山县"},{value:"411726",label:"泌阳县"},{value:"411727",label:"汝南县"},{value:"411728",label:"遂平县"},{value:"411729",label:"新蔡县"}]},{value:"419000",label:"河南省直辖县级行政区划",children:[{value:"419001",label:"济源市"}]}]},{value:"420000",label:"湖北省",children:[{value:"420100",label:"武汉市",children:[{value:"420102",label:"江岸区"},{value:"420103",label:"江汉区"},{value:"420104",label:"硚口区"},{value:"420105",label:"汉阳区"},{value:"420106",label:"武昌区"},{value:"420107",label:"青山区"},{value:"420111",label:"洪山区"},{value:"420112",label:"东西湖区"},{value:"420113",label:"汉南区"},{value:"420114",label:"蔡甸区"},{value:"420115",label:"江夏区"},{value:"420116",label:"黄陂区"},{value:"420117",label:"新洲区"}]},{value:"420200",label:"黄石市",children:[{value:"420202",label:"黄石港区"},{value:"420203",label:"西塞山区"},{value:"420204",label:"下陆区"},{value:"420205",label:"铁山区"},{value:"420222",label:"阳新县"},{value:"420281",label:"大冶市"}]},{value:"420300",label:"十堰市",children:[{value:"420302",label:"茅箭区"},{value:"420303",label:"张湾区"},{value:"420304",label:"郧阳区"},{value:"420322",label:"郧西县"},{value:"420323",label:"竹山县"},{value:"420324",label:"竹溪县"},{value:"420325",label:"房县"},{value:"420381",label:"丹江口市"}]},{value:"420500",label:"宜昌市",children:[{value:"420502",label:"西陵区"},{value:"420503",label:"伍家岗区"},{value:"420504",label:"点军区"},{value:"420505",label:"猇亭区"},{value:"420506",label:"夷陵区"},{value:"420525",label:"远安县"},{value:"420526",label:"兴山县"},{value:"420527",label:"秭归县"},{value:"420528",label:"长阳土家族自治县"},{value:"420529",label:"五峰土家族自治县"},{value:"420581",label:"宜都市"},{value:"420582",label:"当阳市"},{value:"420583",label:"枝江市"}]},{value:"420600",label:"襄樊市",children:[{value:"420602",label:"襄城区"},{value:"420606",label:"樊城区"},{value:"420607",label:"襄州区"},{value:"420624",label:"南漳县"},{value:"420625",label:"谷城县"},{value:"420626",label:"保康县"},{value:"420682",label:"老河口市"},{value:"420683",label:"枣阳市"},{value:"420684",label:"宜城市"}]},{value:"420700",label:"鄂州市",children:[{value:"420702",label:"梁子湖区"},{value:"420703",label:"华容区"},{value:"420704",label:"鄂城区"}]},{value:"420800",label:"荆门市",children:[{value:"420802",label:"东宝区"},{value:"420804",label:"掇刀区"},{value:"420821",label:"京山县"},{value:"420822",label:"沙洋县"},{value:"420881",label:"钟祥市"}]},{value:"420900",label:"孝感市",children:[{value:"420902",label:"孝南区"},{value:"420921",label:"孝昌县"},{value:"420922",label:"大悟县"},{value:"420923",label:"云梦县"},{value:"420981",label:"应城市"},{value:"420982",label:"安陆市"},{value:"420984",label:"汉川市"}]},{value:"421000",label:"荆州市",children:[{value:"421002",label:"沙市区"},{value:"421003",label:"荆州区"},{value:"421022",label:"公安县"},{value:"421023",label:"监利县"},{value:"421024",label:"江陵县"},{value:"421081",label:"石首市"},{value:"421083",label:"洪湖市"},{value:"421087",label:"松滋市"}]},{value:"421100",label:"黄冈市",children:[{value:"421102",label:"黄州区"},{value:"421121",label:"团风县"},{value:"421122",label:"红安县"},{value:"421123",label:"罗田县"},{value:"421124",label:"英山县"},{value:"421125",label:"浠水县"},{value:"421126",label:"蕲春县"},{value:"421127",label:"黄梅县"},{value:"421181",label:"麻城市"},{value:"421182",label:"武穴市"}]},{value:"421200",label:"咸宁市",children:[{value:"421202",label:"咸安区"},{value:"421221",label:"嘉鱼县"},{value:"421222",label:"通城县"},{value:"421223",label:"崇阳县"},{value:"421224",label:"通山县"},{value:"421281",label:"赤壁市"}]},{value:"421300",label:"随州市",children:[{value:"421303",label:"曾都区"},{value:"421321",label:"随县"},{value:"421381",label:"广水市"}]},{value:"422800",label:"恩施土家族苗族自治州",children:[{value:"422801",label:"恩施市"},{value:"422802",label:"利川市"},{value:"422822",label:"建始县"},{value:"422823",label:"巴东县"},{value:"422825",label:"宣恩县"},{value:"422826",label:"咸丰县"},{value:"422827",label:"来凤县"},{value:"422828",label:"鹤峰县"}]},{value:"429000",label:"省直辖行政单位",children:[{value:"429004",label:"仙桃市"},{value:"429005",label:"潜江市"},{value:"429006",label:"天门市"},{value:"429021",label:"神农架林区"}]}]},{value:"430000",label:"湖南省",children:[{value:"430100",label:"长沙市",children:[{value:"430102",label:"芙蓉区"},{value:"430103",label:"天心区"},{value:"430104",label:"岳麓区"},{value:"430105",label:"开福区"},{value:"430111",label:"雨花区"},{value:"430112",label:"望城区"},{value:"430121",label:"长沙县"},{value:"430124",label:"宁乡县"},{value:"430181",label:"浏阳市"}]},{value:"430200",label:"株洲市",children:[{value:"430202",label:"荷塘区"},{value:"430203",label:"芦淞区"},{value:"430204",label:"石峰区"},{value:"430211",label:"天元区"},{value:"430221",label:"株洲县"},{value:"430223",label:"攸县"},{value:"430224",label:"茶陵县"},{value:"430225",label:"炎陵县"},{value:"430281",label:"醴陵市"}]},{value:"430300",label:"湘潭市",children:[{value:"430302",label:"雨湖区"},{value:"430304",label:"岳塘区"},{value:"430321",label:"湘潭县"},{value:"430381",label:"湘乡市"},{value:"430382",label:"韶山市"}]},{value:"430400",label:"衡阳市",children:[{value:"430405",label:"珠晖区"},{value:"430406",label:"雁峰区"},{value:"430407",label:"石鼓区"},{value:"430408",label:"蒸湘区"},{value:"430412",label:"南岳区"},{value:"430421",label:"衡阳县"},{value:"430422",label:"衡南县"},{value:"430423",label:"衡山县"},{value:"430424",label:"衡东县"},{value:"430426",label:"祁东县"},{value:"430481",label:"耒阳市"},{value:"430482",label:"常宁市"}]},{value:"430500",label:"邵阳市",children:[{value:"430502",label:"双清区"},{value:"430503",label:"大祥区"},{value:"430511",label:"北塔区"},{value:"430521",label:"邵东县"},{value:"430522",label:"新邵县"},{value:"430523",label:"邵阳县"},{value:"430524",label:"隆回县"},{value:"430525",label:"洞口县"},{value:"430527",label:"绥宁县"},{value:"430528",label:"新宁县"},{value:"430529",label:"城步苗族自治县"},{value:"430581",label:"武冈市"}]},{value:"430600",label:"岳阳市",children:[{value:"430602",label:"岳阳楼区"},{value:"430603",label:"云溪区"},{value:"430611",label:"君山区"},{value:"430621",label:"岳阳县"},{value:"430623",label:"华容县"},{value:"430624",label:"湘阴县"},{value:"430626",label:"平江县"},{value:"430681",label:"汨罗市"},{value:"430682",label:"临湘市"}]},{value:"430700",label:"常德市",children:[{value:"430702",label:"武陵区"},{value:"430703",label:"鼎城区"},{value:"430721",label:"安乡县"},{value:"430722",label:"汉寿县"},{value:"430723",label:"澧县"},{value:"430724",label:"临澧县"},{value:"430725",label:"桃源县"},{value:"430726",label:"石门县"},{value:"430781",label:"津市市"}]},{value:"430800",label:"张家界市",children:[{value:"430802",label:"永定区"},{value:"430811",label:"武陵源区"},{value:"430821",label:"慈利县"},{value:"430822",label:"桑植县"}]},{value:"430900",label:"益阳市",children:[{value:"430902",label:"资阳区"},{value:"430903",label:"赫山区"},{value:"430921",label:"南县"},{value:"430922",label:"桃江县"},{value:"430923",label:"安化县"},{value:"430981",label:"沅江市"}]},{value:"431000",label:"郴州市",children:[{value:"431002",label:"北湖区"},{value:"431003",label:"苏仙区"},{value:"431021",label:"桂阳县"},{value:"431022",label:"宜章县"},{value:"431023",label:"永兴县"},{value:"431024",label:"嘉禾县"},{value:"431025",label:"临武县"},{value:"431026",label:"汝城县"},{value:"431027",label:"桂东县"},{value:"431028",label:"安仁县"},{value:"431081",label:"资兴市"}]},{value:"431100",label:"永州市",children:[{value:"431102",label:"零陵区"},{value:"431103",label:"冷水滩区"},{value:"431121",label:"祁阳县"},{value:"431122",label:"东安县"},{value:"431123",label:"双牌县"},{value:"431124",label:"道县"},{value:"431125",label:"江永县"},{value:"431126",label:"宁远县"},{value:"431127",label:"蓝山县"},{value:"431128",label:"新田县"},{value:"431129",label:"江华瑶族自治县"}]},{value:"431200",label:"怀化市",children:[{value:"431202",label:"鹤城区"},{value:"431221",label:"中方县"},{value:"431222",label:"沅陵县"},{value:"431223",label:"辰溪县"},{value:"431224",label:"溆浦县"},{value:"431225",label:"会同县"},{value:"431226",label:"麻阳苗族自治县"},{value:"431227",label:"新晃侗族自治县"},{value:"431228",label:"芷江侗族自治县"},{value:"431229",label:"靖州苗族侗族自治县"},{value:"431230",label:"通道侗族自治县"},{value:"431281",label:"洪江市"}]},{value:"431300",label:"娄底市",children:[{value:"431302",label:"娄星区"},{value:"431321",label:"双峰县"},{value:"431322",label:"新化县"},{value:"431381",label:"冷水江市"},{value:"431382",label:"涟源市"}]},{value:"433100",label:"湘西土家族苗族自治州",children:[{value:"433101",label:"吉首市"},{value:"433122",label:"泸溪县"},{value:"433123",label:"凤凰县"},{value:"433124",label:"花垣县"},{value:"433125",label:"保靖县"},{value:"433126",label:"古丈县"},{value:"433127",label:"永顺县"},{value:"433130",label:"龙山县"}]}]},{value:"440000",label:"广东省",children:[{value:"440100",label:"广州市",children:[{value:"440103",label:"荔湾区"},{value:"440104",label:"越秀区"},{value:"440105",label:"海珠区"},{value:"440106",label:"天河区"},{value:"440111",label:"白云区"},{value:"440112",label:"黄埔区"},{value:"440113",label:"番禺区"},{value:"440114",label:"花都区"},{value:"440115",label:"南沙区"},{value:"440116",label:"萝岗区"},{value:"440117",label:"从化区"},{value:"440118",label:"增城区"}]},{value:"440200",label:"韶关市",children:[{value:"440203",label:"武江区"},{value:"440204",label:"浈江区"},{value:"440205",label:"曲江区"},{value:"440222",label:"始兴县"},{value:"440224",label:"仁化县"},{value:"440229",label:"翁源县"},{value:"440232",label:"乳源瑶族自治县"},{value:"440233",label:"新丰县"},{value:"440281",label:"乐昌市"},{value:"440282",label:"南雄市"}]},{value:"440300",label:"深圳市",children:[{value:"440303",label:"罗湖区"},{value:"440304",label:"福田区"},{value:"440305",label:"南山区"},{value:"440306",label:"宝安区"},{value:"440307",label:"龙岗区"},{value:"440308",label:"盐田区"}]},{value:"440400",label:"珠海市",children:[{value:"440402",label:"香洲区"},{value:"440403",label:"斗门区"},{value:"440404",label:"金湾区"}]},{value:"440500",label:"汕头市",children:[{value:"440507",label:"龙湖区"},{value:"440511",label:"金平区"},{value:"440512",label:"濠江区"},{value:"440513",label:"潮阳区"},{value:"440514",label:"潮南区"},{value:"440515",label:"澄海区"},{value:"440523",label:"南澳县"}]},{value:"440600",label:"佛山市",children:[{value:"440604",label:"禅城区"},{value:"440605",label:"南海区"},{value:"440606",label:"顺德区"},{value:"440607",label:"三水区"},{value:"440608",label:"高明区"}]},{value:"440700",label:"江门市",children:[{value:"440703",label:"蓬江区"},{value:"440704",label:"江海区"},{value:"440705",label:"新会区"},{value:"440781",label:"台山市"},{value:"440783",label:"开平市"},{value:"440784",label:"鹤山市"},{value:"440785",label:"恩平市"}]},{value:"440800",label:"湛江市",children:[{value:"440802",label:"赤坎区"},{value:"440803",label:"霞山区"},{value:"440804",label:"坡头区"},{value:"440811",label:"麻章区"},{value:"440823",label:"遂溪县"},{value:"440825",label:"徐闻县"},{value:"440881",label:"廉江市"},{value:"440882",label:"雷州市"},{value:"440883",label:"吴川市"}]},{value:"440900",label:"茂名市",children:[{value:"440902",label:"茂南区"},{value:"440904",label:"电白区"},{value:"440981",label:"高州市"},{value:"440982",label:"化州市"},{value:"440983",label:"信宜市"}]},{value:"441200",label:"肇庆市",children:[{value:"441202",label:"端州区"},{value:"441203",label:"鼎湖区"},{value:"441223",label:"广宁县"},{value:"441224",label:"怀集县"},{value:"441225",label:"封开县"},{value:"441226",label:"德庆县"},{value:"441283",label:"高要市"},{value:"441284",label:"四会市"}]},{value:"441300",label:"惠州市",children:[{value:"441302",label:"惠城区"},{value:"441303",label:"惠阳区"},{value:"441322",label:"博罗县"},{value:"441323",label:"惠东县"},{value:"441324",label:"龙门县"}]},{value:"441400",label:"梅州市",children:[{value:"441402",label:"梅江区"},{value:"441403",label:"梅县区"},{value:"441422",label:"大埔县"},{value:"441423",label:"丰顺县"},{value:"441424",label:"五华县"},{value:"441426",label:"平远县"},{value:"441427",label:"蕉岭县"},{value:"441481",label:"兴宁市"}]},{value:"441500",label:"汕尾市",children:[{value:"441502",label:"城区"},{value:"441521",label:"海丰县"},{value:"441523",label:"陆河县"},{value:"441581",label:"陆丰市"}]},{value:"441600",label:"河源市",children:[{value:"441602",label:"源城区"},{value:"441621",label:"紫金县"},{value:"441622",label:"龙川县"},{value:"441623",label:"连平县"},{value:"441624",label:"和平县"},{value:"441625",label:"东源县"}]},{value:"441700",label:"阳江市",children:[{value:"441702",label:"江城区"},{value:"441721",label:"阳西县"},{value:"441723",label:"阳东县"},{value:"441781",label:"阳春市"}]},{value:"441800",label:"清远市",children:[{value:"441802",label:"清城区"},{value:"441803",label:"清新区"},{value:"441821",label:"佛冈县"},{value:"441823",label:"阳山县"},{value:"441825",label:"连山壮族瑶族自治县"},{value:"441826",label:"连南瑶族自治县"},{value:"441881",label:"英德市"},{value:"441882",label:"连州市"}]},{value:"441900",label:"东莞市",children:[{value:"441900",label:"东莞市"}]},{value:"442000",label:"中山市",children:[{value:"442000",label:"中山市"}]},{value:"445100",label:"潮州市",children:[{value:"445102",label:"湘桥区"},{value:"445103",label:"潮安区"},{value:"445122",label:"饶平县"}]},{value:"445200",label:"揭阳市",children:[{value:"445202",label:"榕城区"},{value:"445203",label:"揭东区"},{value:"445222",label:"揭西县"},{value:"445224",label:"惠来县"},{value:"445281",label:"普宁市"}]},{value:"445300",label:"云浮市",children:[{value:"445302",label:"云城区"},{value:"445303",label:"云安区"},{value:"445321",label:"新兴县"},{value:"445322",label:"郁南县"},{value:"445381",label:"罗定市"}]}]},{value:"450000",label:"广西壮族自治区",children:[{value:"450100",label:"南宁市",children:[{value:"450102",label:"兴宁区"},{value:"450103",label:"青秀区"},{value:"450105",label:"江南区"},{value:"450107",label:"西乡塘区"},{value:"450108",label:"良庆区"},{value:"450109",label:"邕宁区"},{value:"450122",label:"武鸣县"},{value:"450123",label:"隆安县"},{value:"450124",label:"马山县"},{value:"450125",label:"上林县"},{value:"450126",label:"宾阳县"},{value:"450127",label:"横县"}]},{value:"450200",label:"柳州市",children:[{value:"450202",label:"城中区"},{value:"450203",label:"鱼峰区"},{value:"450204",label:"柳南区"},{value:"450205",label:"柳北区"},{value:"450221",label:"柳江县"},{value:"450222",label:"柳城县"},{value:"450223",label:"鹿寨县"},{value:"450224",label:"融安县"},{value:"450225",label:"融水苗族自治县"},{value:"450226",label:"三江侗族自治县"}]},{value:"450300",label:"桂林市",children:[{value:"450302",label:"秀峰区"},{value:"450303",label:"叠彩区"},{value:"450304",label:"象山区"},{value:"450305",label:"七星区"},{value:"450311",label:"雁山区"},{value:"450312",label:"临桂区"},{value:"450321",label:"阳朔县"},{value:"450323",label:"灵川县"},{value:"450324",label:"全州县"},{value:"450325",label:"兴安县"},{value:"450326",label:"永福县"},{value:"450327",label:"灌阳县"},{value:"450328",label:"龙胜各族自治县"},{value:"450329",label:"资源县"},{value:"450330",label:"平乐县"},{value:"450331",label:"荔浦县"},{value:"450332",label:"恭城瑶族自治县"}]},{value:"450400",label:"梧州市",children:[{value:"450403",label:"万秀区"},{value:"450405",label:"长洲区"},{value:"450406",label:"龙圩区"},{value:"450421",label:"苍梧县"},{value:"450422",label:"藤县"},{value:"450423",label:"蒙山县"},{value:"450481",label:"岑溪市"}]},{value:"450500",label:"北海市",children:[{value:"450502",label:"海城区"},{value:"450503",label:"银海区"},{value:"450512",label:"铁山港区"},{value:"450521",label:"合浦县"}]},{value:"450600",label:"防城港市",children:[{value:"450602",label:"港口区"},{value:"450603",label:"防城区"},{value:"450621",label:"上思县"},{value:"450681",label:"东兴市"}]},{value:"450700",label:"钦州市",children:[{value:"450702",label:"钦南区"},{value:"450703",label:"钦北区"},{value:"450721",label:"灵山县"},{value:"450722",label:"浦北县"}]},{value:"450800",label:"贵港市",children:[{value:"450802",label:"港北区"},{value:"450803",label:"港南区"},{value:"450804",label:"覃塘区"},{value:"450821",label:"平南县"},{value:"450881",label:"桂平市"}]},{value:"450900",label:"玉林市",children:[{value:"450902",label:"玉州区"},{value:"450903",label:"福绵区"},{value:"450921",label:"容县"},{value:"450922",label:"陆川县"},{value:"450923",label:"博白县"},{value:"450924",label:"兴业县"},{value:"450981",label:"北流市"}]},{value:"451000",label:"百色市",children:[{value:"451002",label:"右江区"},{value:"451021",label:"田阳县"},{value:"451022",label:"田东县"},{value:"451023",label:"平果县"},{value:"451024",label:"德保县"},{value:"451025",label:"靖西县"},{value:"451026",label:"那坡县"},{value:"451027",label:"凌云县"},{value:"451028",label:"乐业县"},{value:"451029",label:"田林县"},{value:"451030",label:"西林县"},{value:"451031",label:"隆林各族自治县"}]},{value:"451100",label:"贺州市",children:[{value:"451102",label:"八步区"},{value:"451121",label:"昭平县"},{value:"451122",label:"钟山县"},{value:"451123",label:"富川瑶族自治县"}]},{value:"451200",label:"河池市",children:[{value:"451202",label:"金城江区"},{value:"451221",label:"南丹县"},{value:"451222",label:"天峨县"},{value:"451223",label:"凤山县"},{value:"451224",label:"东兰县"},{value:"451225",label:"罗城仫佬族自治县"},{value:"451226",label:"环江毛南族自治县"},{value:"451227",label:"巴马瑶族自治县"},{value:"451228",label:"都安瑶族自治县"},{value:"451229",label:"大化瑶族自治县"},{value:"451281",label:"宜州市"}]},{value:"451300",label:"来宾市",children:[{value:"451302",label:"兴宾区"},{value:"451321",label:"忻城县"},{value:"451322",label:"象州县"},{value:"451323",label:"武宣县"},{value:"451324",label:"金秀瑶族自治县"},{value:"451381",label:"合山市"}]},{value:"451400",label:"崇左市",children:[{value:"451402",label:"江州区"},{value:"451421",label:"扶绥县"},{value:"451422",label:"宁明县"},{value:"451423",label:"龙州县"},{value:"451424",label:"大新县"},{value:"451425",label:"天等县"},{value:"451481",label:"凭祥市"}]}]},{value:"460000",label:"海南省",children:[{value:"460100",label:"海口市",children:[{value:"460105",label:"秀英区"},{value:"460106",label:"龙华区"},{value:"460107",label:"琼山区"},{value:"460108",label:"美兰区"}]},{value:"460200",label:"三亚市",children:[{value:"460202",label:"海棠区"},{value:"460203",label:"吉阳区"},{value:"460204",label:"天涯区"},{value:"460205",label:"崖州区"}]},{value:"469000",label:"省直辖县级行政单位",children:[{value:"469001",label:"五指山市"},{value:"469002",label:"琼海市"},{value:"469003",label:"儋州市"},{value:"469005",label:"文昌市"},{value:"469006",label:"万宁市"},{value:"469007",label:"东方市"},{value:"469021",label:"定安县"},{value:"469022",label:"屯昌县"},{value:"469023",label:"澄迈县"},{value:"469024",label:"临高县"},{value:"469025",label:"白沙黎族自治县"},{value:"469026",label:"昌江黎族自治县"},{value:"469027",label:"乐东黎族自治县"},{value:"469028",label:"陵水黎族自治县"},{value:"469029",label:"保亭黎族苗族自治县"},{value:"469030",label:"琼中黎族苗族自治县"}]}]},{value:"500000",label:"重庆市",children:[{value:"500100",label:"重庆市",children:[{value:"500101",label:"万州区"},{value:"500102",label:"涪陵区"},{value:"500103",label:"渝中区"},{value:"500104",label:"大渡口区"},{value:"500105",label:"江北区"},{value:"500106",label:"沙坪坝区"},{value:"500107",label:"九龙坡区"},{value:"500108",label:"南岸区"},{value:"500109",label:"北碚区"},{value:"500110",label:"綦江区"},{value:"500111",label:"大足区"},{value:"500112",label:"渝北区"},{value:"500113",label:"巴南区"},{value:"500114",label:"黔江区"},{value:"500115",label:"长寿区"},{value:"500116",label:"江津区"},{value:"500117",label:"合川区"},{value:"500118",label:"永川区"},{value:"500119",label:"南川区"},{value:"500120",label:"璧山区"},{value:"500151",label:"铜梁区"}]},{value:"500200",label:"重庆市辖县",children:[{value:"500223",label:"潼南县"},{value:"500226",label:"荣昌县"},{value:"500228",label:"梁平县"},{value:"500229",label:"城口县"},{value:"500230",label:"丰都县"},{value:"500231",label:"垫江县"},{value:"500232",label:"武隆县"},{value:"500233",label:"忠县"},{value:"500234",label:"开县"},{value:"500235",label:"云阳县"},{value:"500236",label:"奉节县"},{value:"500237",label:"巫山县"},{value:"500238",label:"巫溪县"},{value:"500240",label:"石柱土家族自治县"},{value:"500241",label:"秀山土家族苗族自治县"},{value:"500242",label:"酉阳土家族苗族自治县"},{value:"500243",label:"彭水苗族土家族自治县"}]}]},{value:"510000",label:"四川省",children:[{value:"510100",label:"成都市",children:[{value:"510104",label:"锦江区"},{value:"510105",label:"青羊区"},{value:"510106",label:"金牛区"},{value:"510107",label:"武侯区"},{value:"510108",label:"成华区"},{value:"510112",label:"龙泉驿区"},{value:"510113",label:"青白江区"},{value:"510114",label:"新都区"},{value:"510115",label:"温江区"},{value:"510121",label:"金堂县"},{value:"510122",label:"双流县"},{value:"510124",label:"郫县"},{value:"510129",label:"大邑县"},{value:"510131",label:"蒲江县"},{value:"510132",label:"新津县"},{value:"510181",label:"都江堰市"},{value:"510182",label:"彭州市"},{value:"510183",label:"邛崃市"},{value:"510184",label:"崇州市"}]},{value:"510300",label:"自贡市",children:[{value:"510302",label:"自流井区"},{value:"510303",label:"贡井区"},{value:"510304",label:"大安区"},{value:"510311",label:"沿滩区"},{value:"510321",label:"荣县"},{value:"510322",label:"富顺县"}]},{value:"510400",label:"攀枝花市",children:[{value:"510402",label:"东区"},{value:"510403",label:"西区"},{value:"510411",label:"仁和区"},{value:"510421",label:"米易县"},{value:"510422",label:"盐边县"}]},{value:"510500",label:"泸州市",children:[{value:"510502",label:"江阳区"},{value:"510503",label:"纳溪区"},{value:"510504",label:"龙马潭区"},{value:"510521",label:"泸县"},{value:"510522",label:"合江县"},{value:"510524",label:"叙永县"},{value:"510525",label:"古蔺县"}]},{value:"510600",label:"德阳市",children:[{value:"510603",label:"旌阳区"},{value:"510623",label:"中江县"},{value:"510626",label:"罗江县"},{value:"510681",label:"广汉市"},{value:"510682",label:"什邡市"},{value:"510683",label:"绵竹市"}]},{value:"510700",label:"绵阳市",children:[{value:"510703",label:"涪城区"},{value:"510704",label:"游仙区"},{value:"510722",label:"三台县"},{value:"510723",label:"盐亭县"},{value:"510724",label:"安县"},{value:"510725",label:"梓潼县"},{value:"510726",label:"北川羌族自治县"},{value:"510727",label:"平武县"},{value:"510781",label:"江油市"}]},{value:"510800",label:"广元市",children:[{value:"510802",label:"利州区"},{value:"510811",label:"昭化区"},{value:"510812",label:"朝天区"},{value:"510821",label:"旺苍县"},{value:"510822",label:"青川县"},{value:"510823",label:"剑阁县"},{value:"510824",label:"苍溪县"}]},{value:"510900",label:"遂宁市",children:[{value:"510903",label:"船山区"},{value:"510904",label:"安居区"},{value:"510921",label:"蓬溪县"},{value:"510922",label:"射洪县"},{value:"510923",label:"大英县"}]},{value:"511000",label:"内江市",children:[{value:"511002",label:"市中区"},{value:"511011",label:"东兴区"},{value:"511024",label:"威远县"},{value:"511025",label:"资中县"},{value:"511028",label:"隆昌县"}]},{value:"511100",label:"乐山市",children:[{value:"511102",label:"市中区"},{value:"511111",label:"沙湾区"},{value:"511112",label:"五通桥区"},{value:"511113",label:"金口河区"},{value:"511123",label:"犍为县"},{value:"511124",label:"井研县"},{value:"511126",label:"夹江县"},{value:"511129",label:"沐川县"},{value:"511132",label:"峨边彝族自治县"},{value:"511133",label:"马边彝族自治县"},{value:"511181",label:"峨眉山市"}]},{value:"511300",label:"南充市",children:[{value:"511302",label:"顺庆区"},{value:"511303",label:"高坪区"},{value:"511304",label:"嘉陵区"},{value:"511321",label:"南部县"},{value:"511322",label:"营山县"},{value:"511323",label:"蓬安县"},{value:"511324",label:"仪陇县"},{value:"511325",label:"西充县"},{value:"511381",label:"阆中市"}]},{value:"511400",label:"眉山市",children:[{value:"511402",label:"东坡区"},{value:"511421",label:"仁寿县"},{value:"511422",label:"彭山县"},{value:"511423",label:"洪雅县"},{value:"511424",label:"丹棱县"},{value:"511425",label:"青神县"}]},{value:"511500",label:"宜宾市",children:[{value:"511502",label:"翠屏区"},{value:"511503",label:"南溪区"},{value:"511521",label:"宜宾县"},{value:"511523",label:"江安县"},{value:"511524",label:"长宁县"},{value:"511525",label:"高县"},{value:"511526",label:"珙县"},{value:"511527",label:"筠连县"},{value:"511528",label:"兴文县"},{value:"511529",label:"屏山县"}]},{value:"511600",label:"广安市",children:[{value:"511602",label:"广安区"},{value:"511603",label:"前锋区"},{value:"511621",label:"岳池县"},{value:"511622",label:"武胜县"},{value:"511623",label:"邻水县"},{value:"511681",label:"华蓥市"}]},{value:"511700",label:"达州市",children:[{value:"511702",label:"通川区"},{value:"511703",label:"达川区"},{value:"511722",label:"宣汉县"},{value:"511723",label:"开江县"},{value:"511724",label:"大竹县"},{value:"511725",label:"渠县"},{value:"511781",label:"万源市"}]},{value:"511800",label:"雅安市",children:[{value:"511802",label:"雨城区"},{value:"511803",label:"名山区"},{value:"511822",label:"荥经县"},{value:"511823",label:"汉源县"},{value:"511824",label:"石棉县"},{value:"511825",label:"天全县"},{value:"511826",label:"芦山县"},{value:"511827",label:"宝兴县"}]},{value:"511900",label:"巴中市",children:[{value:"511902",label:"巴州区"},{value:"511903",label:"恩阳区"},{value:"511921",label:"通江县"},{value:"511922",label:"南江县"},{value:"511923",label:"平昌县"}]},{value:"512000",label:"资阳市",children:[{value:"512002",label:"雁江区"},{value:"512021",label:"安岳县"},{value:"512022",label:"乐至县"},{value:"512081",label:"简阳市"}]},{value:"513200",label:"阿坝藏族羌族自治州",children:[{value:"513221",label:"汶川县"},{value:"513222",label:"理县"},{value:"513223",label:"茂县"},{value:"513224",label:"松潘县"},{value:"513225",label:"九寨沟县"},{value:"513226",label:"金川县"},{value:"513227",label:"小金县"},{value:"513228",label:"黑水县"},{value:"513229",label:"马尔康县"},{value:"513230",label:"壤塘县"},{value:"513231",label:"阿坝县"},{value:"513232",label:"若尔盖县"},{value:"513233",label:"红原县"}]},{value:"513300",label:"甘孜藏族自治州",children:[{value:"513321",label:"康定县"},{value:"513322",label:"泸定县"},{value:"513323",label:"丹巴县"},{value:"513324",label:"九龙县"},{value:"513325",label:"雅江县"},{value:"513326",label:"道孚县"},{value:"513327",label:"炉霍县"},{value:"513328",label:"甘孜县"},{value:"513329",label:"新龙县"},{value:"513330",label:"德格县"},{value:"513331",label:"白玉县"},{value:"513332",label:"石渠县"},{value:"513333",label:"色达县"},{value:"513334",label:"理塘县"},{value:"513335",label:"巴塘县"},{value:"513336",label:"乡城县"},{value:"513337",label:"稻城县"},{value:"513338",label:"得荣县"}]},{value:"513400",label:"凉山彝族自治州",children:[{value:"513401",label:"西昌市"},{value:"513422",label:"木里藏族自治县"},{value:"513423",label:"盐源县"},{value:"513424",label:"德昌县"},{value:"513425",label:"会理县"},{value:"513426",label:"会东县"},{value:"513427",label:"宁南县"},{value:"513428",label:"普格县"},{value:"513429",label:"布拖县"},{value:"513430",label:"金阳县"},{value:"513431",label:"昭觉县"},{value:"513432",label:"喜德县"},{value:"513433",label:"冕宁县"},{value:"513434",label:"越西县"},{value:"513435",label:"甘洛县"},{value:"513436",label:"美姑县"},{value:"513437",label:"雷波县"}]}]},{value:"520000",label:"贵州省",children:[{value:"520100",label:"贵阳市",children:[{value:"520102",label:"南明区"},{value:"520103",label:"云岩区"},{value:"520111",label:"花溪区"},{value:"520112",label:"乌当区"},{value:"520113",label:"白云区"},{value:"520115",label:"观山湖区"},{value:"520121",label:"开阳县"},{value:"520122",label:"息烽县"},{value:"520123",label:"修文县"},{value:"520181",label:"清镇市"}]},{value:"520200",label:"六盘水市",children:[{value:"520201",label:"钟山区"},{value:"520203",label:"六枝特区"},{value:"520221",label:"水城县"},{value:"520222",label:"盘县"}]},{value:"520300",label:"遵义市",children:[{value:"520302",label:"红花岗区"},{value:"520303",label:"汇川区"},{value:"520321",label:"遵义县"},{value:"520322",label:"桐梓县"},{value:"520323",label:"绥阳县"},{value:"520324",label:"正安县"},{value:"520325",label:"道真仡佬族苗族自治县"},{value:"520326",label:"务川仡佬族苗族自治县"},{value:"520327",label:"凤冈县"},{value:"520328",label:"湄潭县"},{value:"520329",label:"余庆县"},{value:"520330",label:"习水县"},{value:"520381",label:"赤水市"},{value:"520382",label:"仁怀市"}]},{value:"520400",label:"安顺市",children:[{value:"520402",label:"西秀区"},{value:"520421",label:"平坝县"},{value:"520422",label:"普定县"},{value:"520423",label:"镇宁布依族苗族自治县"},{value:"520424",label:"关岭布依族苗族自治县"},{value:"520425",label:"紫云苗族布依族自治县"}]},{value:"522200",label:"铜仁地区",children:[{value:"520602",label:"碧江区"},{value:"520603",label:"万山区"},{value:"520621",label:"江口县"},{value:"520622",label:"玉屏侗族自治县"},{value:"520623",label:"石阡县"},{value:"520624",label:"思南县"},{value:"520625",label:"印江土家族苗族自治县"},{value:"520626",label:"德江县"},{value:"520627",label:"沿河土家族自治县"},{value:"520628",label:"松桃苗族自治县"}]},{value:"522300",label:"黔西南布依族苗族自治州",children:[{value:"522301",label:"兴义市"},{value:"522322",label:"兴仁县"},{value:"522323",label:"普安县"},{value:"522324",label:"晴隆县"},{value:"522325",label:"贞丰县"},{value:"522326",label:"望谟县"},{value:"522327",label:"册亨县"},{value:"522328",label:"安龙县"}]},{value:"522400",label:"毕节地区",children:[{value:"520502",label:"七星关区"},{value:"520521",label:"大方县"},{value:"520522",label:"黔西县"},{value:"520523",label:"金沙县"},{value:"520524",label:"织金县"},{value:"520525",label:"纳雍县"},{value:"520526",label:"威宁彝族回族苗族自治县"},{value:"520527",label:"赫章县"}]},{value:"522600",label:"黔东南苗族侗族自治州",children:[{value:"522601",label:"凯里市"},{value:"522622",label:"黄平县"},{value:"522623",label:"施秉县"},{value:"522624",label:"三穗县"},{value:"522625",label:"镇远县"},{value:"522626",label:"岑巩县"},{value:"522627",label:"天柱县"},{value:"522628",label:"锦屏县"},{value:"522629",label:"剑河县"},{value:"522630",label:"台江县"},{value:"522631",label:"黎平县"},{value:"522632",label:"榕江县"},{value:"522633",label:"从江县"},{value:"522634",label:"雷山县"},{value:"522635",label:"麻江县"},{value:"522636",label:"丹寨县"}]},{value:"522700",label:"黔南布依族苗族自治州",children:[{value:"522701",label:"都匀市"},{value:"522702",label:"福泉市"},{value:"522722",label:"荔波县"},{value:"522723",label:"贵定县"},{value:"522725",label:"瓮安县"},{value:"522726",label:"独山县"},{value:"522727",label:"平塘县"},{value:"522728",label:"罗甸县"},{value:"522729",label:"长顺县"},{value:"522730",label:"龙里县"},{value:"522731",label:"惠水县"},{value:"522732",label:"三都水族自治县"}]}]},{value:"530000",label:"云南省",children:[{value:"530100",label:"昆明市",children:[{value:"530102",label:"五华区"},{value:"530103",label:"盘龙区"},{value:"530111",label:"官渡区"},{value:"530112",label:"西山区"},{value:"530113",label:"东川区"},{value:"530114",label:"呈贡区"},{value:"530122",label:"晋宁县"},{value:"530124",label:"富民县"},{value:"530125",label:"宜良县"},{value:"530126",label:"石林彝族自治县"},{value:"530127",label:"嵩明县"},{value:"530128",label:"禄劝彝族苗族自治县"},{value:"530129",label:"寻甸回族彝族自治县"},{value:"530181",label:"安宁市"}]},{value:"530300",label:"曲靖市",children:[{value:"530302",label:"麒麟区"},{value:"530321",label:"马龙县"},{value:"530322",label:"陆良县"},{value:"530323",label:"师宗县"},{value:"530324",label:"罗平县"},{value:"530325",label:"富源县"},{value:"530326",label:"会泽县"},{value:"530328",label:"沾益县"},{value:"530381",label:"宣威市"}]},{value:"530400",label:"玉溪市",children:[{value:"530402",label:"红塔区"},{value:"530421",label:"江川县"},{value:"530422",label:"澄江县"},{value:"530423",label:"通海县"},{value:"530424",label:"华宁县"},{value:"530425",label:"易门县"},{value:"530426",label:"峨山彝族自治县"},{value:"530427",label:"新平彝族傣族自治县"},{value:"530428",label:"元江哈尼族彝族傣族自治县"}]},{value:"530500",label:"保山市",children:[{value:"530502",label:"隆阳区"},{value:"530521",label:"施甸县"},{value:"530522",label:"腾冲县"},{value:"530523",label:"龙陵县"},{value:"530524",label:"昌宁县"}]},{value:"530600",label:"昭通市",children:[{value:"530602",label:"昭阳区"},{value:"530621",label:"鲁甸县"},{value:"530622",label:"巧家县"},{value:"530623",label:"盐津县"},{value:"530624",label:"大关县"},{value:"530625",label:"永善县"},{value:"530626",label:"绥江县"},{value:"530627",label:"镇雄县"},{value:"530628",label:"彝良县"},{value:"530629",label:"威信县"},{value:"530630",label:"水富县"}]},{value:"530700",label:"丽江市",children:[{value:"530702",label:"古城区"},{value:"530721",label:"玉龙纳西族自治县"},{value:"530722",label:"永胜县"},{value:"530723",label:"华坪县"},{value:"530724",label:"宁蒗彝族自治县"}]},{value:"530800",label:"思茅市",children:[{value:"530802",label:"思茅区"},{value:"530821",label:"宁洱哈尼族彝族自治县"},{value:"530822",label:"墨江哈尼族自治县"},{value:"530823",label:"景东彝族自治县"},{value:"530824",label:"景谷傣族彝族自治县"},{value:"530825",label:"镇沅彝族哈尼族拉祜族自治县"},{value:"530826",label:"江城哈尼族彝族自治县"},{value:"530827",label:"孟连傣族拉祜族佤族自治县"},{value:"530828",label:"澜沧拉祜族自治县"},{value:"530829",label:"西盟佤族自治县"}]},{value:"530900",label:"临沧市",children:[{value:"530902",label:"临翔区"},{value:"530921",label:"凤庆县"},{value:"530922",label:"云县"},{value:"530923",label:"永德县"},{value:"530924",label:"镇康县"},{value:"530925",label:"双江拉祜族佤族布朗族傣族自治县"},{value:"530926",label:"耿马傣族佤族自治县"},{value:"530927",label:"沧源佤族自治县"}]},{value:"532300",label:"楚雄彝族自治州",children:[{value:"532301",label:"楚雄市"},{value:"532322",label:"双柏县"},{value:"532323",label:"牟定县"},{value:"532324",label:"南华县"},{value:"532325",label:"姚安县"},{value:"532326",label:"大姚县"},{value:"532327",label:"永仁县"},{value:"532328",label:"元谋县"},{value:"532329",label:"武定县"},{value:"532331",label:"禄丰县"}]},{value:"532500",label:"红河哈尼族彝族自治州",children:[{value:"532501",label:"个旧市"},{value:"532502",label:"开远市"},{value:"532503",label:"蒙自市"},{value:"532504",label:"弥勒市"},{value:"532523",label:"屏边苗族自治县"},{value:"532524",label:"建水县"},{value:"532525",label:"石屏县"},{value:"532527",label:"泸西县"},{value:"532528",label:"元阳县"},{value:"532529",label:"红河县"},{value:"532530",label:"金平苗族瑶族傣族自治县"},{value:"532531",label:"绿春县"},{value:"532532",label:"河口瑶族自治县"}]},{value:"532600",label:"文山壮族苗族自治州",children:[{value:"532601",label:"文山市"},{value:"532622",label:"砚山县"},{value:"532623",label:"西畴县"},{value:"532624",label:"麻栗坡县"},{value:"532625",label:"马关县"},{value:"532626",label:"丘北县"},{value:"532627",label:"广南县"},{value:"532628",label:"富宁县"}]},{value:"532800",label:"西双版纳傣族自治州",children:[{value:"532801",label:"景洪市"},{value:"532822",label:"勐海县"},{value:"532823",label:"勐腊县"}]},{value:"532900",label:"大理白族自治州",children:[{value:"532901",label:"大理市"},{value:"532922",label:"漾濞彝族自治县"},{value:"532923",label:"祥云县"},{value:"532924",label:"宾川县"},{value:"532925",label:"弥渡县"},{value:"532926",label:"南涧彝族自治县"},{value:"532927",label:"巍山彝族回族自治县"},{value:"532928",label:"永平县"},{value:"532929",label:"云龙县"},{value:"532930",label:"洱源县"},{value:"532931",label:"剑川县"},{value:"532932",label:"鹤庆县"}]},{value:"533100",label:"德宏傣族景颇族自治州",children:[{value:"533102",label:"瑞丽市"},{value:"533103",label:"芒市"},{value:"533122",label:"梁河县"},{value:"533123",label:"盈江县"},{value:"533124",label:"陇川县"}]},{value:"533300",label:"怒江傈僳族自治州",children:[{value:"533321",label:"泸水县"},{value:"533323",label:"福贡县"},{value:"533324",label:"贡山独龙族怒族自治县"},{value:"533325",label:"兰坪白族普米族自治县"}]},{value:"533400",label:"迪庆藏族自治州",children:[{value:"533421",label:"香格里拉县"},{value:"533422",label:"德钦县"},{value:"533423",label:"维西傈僳族自治县"}]}]},{value:"540000",label:"西藏自治区",children:[{value:"540100",label:"拉萨市",children:[{value:"540102",label:"城关区"},{value:"540121",label:"林周县"},{value:"540122",label:"当雄县"},{value:"540123",label:"尼木县"},{value:"540124",label:"曲水县"},{value:"540125",label:"堆龙德庆县"},{value:"540126",label:"达孜县"},{value:"540127",label:"墨竹工卡县"}]},{value:"542100",label:"昌都地区",children:[{value:"542121",label:"昌都县"},{value:"542122",label:"江达县"},{value:"542123",label:"贡觉县"},{value:"542124",label:"类乌齐县"},{value:"542125",label:"丁青县"},{value:"542126",label:"察雅县"},{value:"542127",label:"八宿县"},{value:"542128",label:"左贡县"},{value:"542129",label:"芒康县"},{value:"542132",label:"洛隆县"},{value:"542133",label:"边坝县"}]},{value:"542200",label:"山南地区",children:[{value:"542221",label:"乃东县"},{value:"542222",label:"扎囊县"},{value:"542223",label:"贡嘎县"},{value:"542224",label:"桑日县"},{value:"542225",label:"琼结县"},{value:"542226",label:"曲松县"},{value:"542227",label:"措美县"},{value:"542228",label:"洛扎县"},{value:"542229",label:"加查县"},{value:"542231",label:"隆子县"},{value:"542232",label:"错那县"},{value:"542233",label:"浪卡子县"}]},{value:"542300",label:"日喀则地区",children:[{value:"540202",label:"桑珠孜区"},{value:"540221",label:"南木林县"},{value:"540222",label:"江孜县"},{value:"540223",label:"定日县"},{value:"540224",label:"萨迦县"},{value:"540225",label:"拉孜县"},{value:"540226",label:"昂仁县"},{value:"540227",label:"谢通门县"},{value:"540228",label:"白朗县"},{value:"540229",label:"仁布县"},{value:"540230",label:"康马县"},{value:"540231",label:"定结县"},{value:"540232",label:"仲巴县"},{value:"540233",label:"亚东县"},{value:"540234",label:"吉隆县"},{value:"540235",label:"聂拉木县"},{value:"540236",label:"萨嘎县"},{value:"540237",label:"岗巴县"}]},{value:"542400",label:"那曲地区",children:[{value:"542421",label:"那曲县"},{value:"542422",label:"嘉黎县"},{value:"542423",label:"比如县"},{value:"542424",label:"聂荣县"},{value:"542425",label:"安多县"},{value:"542426",label:"申扎县"},{value:"542427",label:"索县"},{value:"542428",label:"班戈县"},{value:"542429",label:"巴青县"},{value:"542430",label:"尼玛县"},{value:"542431",label:"双湖县"}]},{value:"542500",label:"阿里地区",children:[{value:"542521",label:"普兰县"},{value:"542522",label:"札达县"},{value:"542523",label:"噶尔县"},{value:"542524",label:"日土县"},{value:"542525",label:"革吉县"},{value:"542526",label:"改则县"},{value:"542527",label:"措勤县"}]},{value:"542600",label:"林芝地区",children:[{value:"542621",label:"林芝县"},{value:"542622",label:"工布江达县"},{value:"542623",label:"米林县"},{value:"542624",label:"墨脱县"},{value:"542625",label:"波密县"},{value:"542626",label:"察隅县"},{value:"542627",label:"朗县"}]}]},{value:"610000",label:"陕西省",children:[{value:"610100",label:"西安市",children:[{value:"610102",label:"新城区"},{value:"610103",label:"碑林区"},{value:"610104",label:"莲湖区"},{value:"610111",label:"灞桥区"},{value:"610112",label:"未央区"},{value:"610113",label:"雁塔区"},{value:"610114",label:"阎良区"},{value:"610115",label:"临潼区"},{value:"610116",label:"长安区"},{value:"610122",label:"蓝田县"},{value:"610124",label:"周至县"},{value:"610125",label:"户县"},{value:"610126",label:"高陵县"}]},{value:"610200",label:"铜川市",children:[{value:"610202",label:"王益区"},{value:"610203",label:"印台区"},{value:"610204",label:"耀州区"},{value:"610222",label:"宜君县"}]},{value:"610300",label:"宝鸡市",children:[{value:"610302",label:"渭滨区"},{value:"610303",label:"金台区"},{value:"610304",label:"陈仓区"},{value:"610322",label:"凤翔县"},{value:"610323",label:"岐山县"},{value:"610324",label:"扶风县"},{value:"610326",label:"眉县"},{value:"610327",label:"陇县"},{value:"610328",label:"千阳县"},{value:"610329",label:"麟游县"},{value:"610330",label:"凤县"},{value:"610331",label:"太白县"}]},{value:"610400",label:"咸阳市",children:[{value:"610402",label:"秦都区"},{value:"610403",label:"杨陵区"},{value:"610404",label:"渭城区"},{value:"610422",label:"三原县"},{value:"610423",label:"泾阳县"},{value:"610424",label:"乾县"},{value:"610425",label:"礼泉县"},{value:"610426",label:"永寿县"},{value:"610427",label:"彬县"},{value:"610428",label:"长武县"},{value:"610429",label:"旬邑县"},{value:"610430",label:"淳化县"},{value:"610431",label:"武功县"},{value:"610481",label:"兴平市"}]},{value:"610500",label:"渭南市",children:[{value:"610502",label:"临渭区"},{value:"610521",label:"华县"},{value:"610522",label:"潼关县"},{value:"610523",label:"大荔县"},{value:"610524",label:"合阳县"},{value:"610525",label:"澄城县"},{value:"610526",label:"蒲城县"},{value:"610527",label:"白水县"},{value:"610528",label:"富平县"},{value:"610581",label:"韩城市"},{value:"610582",label:"华阴市"}]},{value:"610600",label:"延安市",children:[{value:"610602",label:"宝塔区"},{value:"610621",label:"延长县"},{value:"610622",label:"延川县"},{value:"610623",label:"子长县"},{value:"610624",label:"安塞县"},{value:"610625",label:"志丹县"},{value:"610626",label:"吴起县"},{value:"610627",label:"甘泉县"},{value:"610628",label:"富县"},{value:"610629",label:"洛川县"},{value:"610630",label:"宜川县"},{value:"610631",label:"黄龙县"},{value:"610632",label:"黄陵县"}]},{value:"610700",label:"汉中市",children:[{value:"610702",label:"汉台区"},{value:"610721",label:"南郑县"},{value:"610722",label:"城固县"},{value:"610723",label:"洋县"},{value:"610724",label:"西乡县"},{value:"610725",label:"勉县"},{value:"610726",label:"宁强县"},{value:"610727",label:"略阳县"},{value:"610728",label:"镇巴县"},{value:"610729",label:"留坝县"},{value:"610730",label:"佛坪县"}]},{value:"610800",label:"榆林市",children:[{value:"610802",label:"榆阳区"},{value:"610821",label:"神木县"},{value:"610822",label:"府谷县"},{value:"610823",label:"横山县"},{value:"610824",label:"靖边县"},{value:"610825",label:"定边县"},{value:"610826",label:"绥德县"},{value:"610827",label:"米脂县"},{value:"610828",label:"佳县"},{value:"610829",label:"吴堡县"},{value:"610830",label:"清涧县"},{value:"610831",label:"子洲县"}]},{value:"610900",label:"安康市",children:[{value:"610902",label:"汉滨区"},{value:"610921",label:"汉阴县"},{value:"610922",label:"石泉县"},{value:"610923",label:"宁陕县"},{value:"610924",label:"紫阳县"},{value:"610925",label:"岚皋县"},{value:"610926",label:"平利县"},{value:"610927",label:"镇坪县"},{value:"610928",label:"旬阳县"},{value:"610929",label:"白河县"}]},{value:"611000",label:"商洛市",children:[{value:"611002",label:"商州区"},{value:"611021",label:"洛南县"},{value:"611022",label:"丹凤县"},{value:"611023",label:"商南县"},{value:"611024",label:"山阳县"},{value:"611025",label:"镇安县"},{value:"611026",label:"柞水县"}]}]},{value:"620000",label:"甘肃省",children:[{value:"620100",label:"兰州市",children:[{value:"620102",label:"城关区"},{value:"620103",label:"七里河区"},{value:"620104",label:"西固区"},{value:"620105",label:"安宁区"},{value:"620111",label:"红古区"},{value:"620121",label:"永登县"},{value:"620122",label:"皋兰县"},{value:"620123",label:"榆中县"}]},{value:"620200",label:"嘉峪关市",children:[{value:"620201",label:"嘉峪关市辖区"}]},{value:"620300",label:"金昌市",children:[{value:"620302",label:"金川区"},{value:"620321",label:"永昌县"}]},{value:"620400",label:"白银市",children:[{value:"620402",label:"白银区"},{value:"620403",label:"平川区"},{value:"620421",label:"靖远县"},{value:"620422",label:"会宁县"},{value:"620423",label:"景泰县"}]},{value:"620500",label:"天水市",children:[{value:"620502",label:"秦州区"},{value:"620503",label:"麦积区"},{value:"620521",label:"清水县"},{value:"620522",label:"秦安县"},{value:"620523",label:"甘谷县"},{value:"620524",label:"武山县"},{value:"620525",label:"张家川回族自治县"}]},{value:"620600",label:"武威市",children:[{value:"620602",label:"凉州区"},{value:"620621",label:"民勤县"},{value:"620622",label:"古浪县"},{value:"620623",label:"天祝藏族自治县"}]},{value:"620700",label:"张掖市",children:[{value:"620702",label:"甘州区"},{value:"620721",label:"肃南裕固族自治县"},{value:"620722",label:"民乐县"},{value:"620723",label:"临泽县"},{value:"620724",label:"高台县"},{value:"620725",label:"山丹县"}]},{value:"620800",label:"平凉市",children:[{value:"620802",label:"崆峒区"},{value:"620821",label:"泾川县"},{value:"620822",label:"灵台县"},{value:"620823",label:"崇信县"},{value:"620824",label:"华亭县"},{value:"620825",label:"庄浪县"},{value:"620826",label:"静宁县"}]},{value:"620900",label:"酒泉市",children:[{value:"620902",label:"肃州区"},{value:"620921",label:"金塔县"},{value:"620922",label:"瓜州县"},{value:"620923",label:"肃北蒙古族自治县"},{value:"620924",label:"阿克塞哈萨克族自治县"},{value:"620981",label:"玉门市"},{value:"620982",label:"敦煌市"}]},{value:"621000",label:"庆阳市",children:[{value:"621002",label:"西峰区"},{value:"621021",label:"庆城县"},{value:"621022",label:"环县"},{value:"621023",label:"华池县"},{value:"621024",label:"合水县"},{value:"621025",label:"正宁县"},{value:"621026",label:"宁县"},{value:"621027",label:"镇原县"}]},{value:"621100",label:"定西市",children:[{value:"621102",label:"安定区"},{value:"621121",label:"通渭县"},{value:"621122",label:"陇西县"},{value:"621123",label:"渭源县"},{value:"621124",label:"临洮县"},{value:"621125",label:"漳县"},{value:"621126",label:"岷县"}]},{value:"621200",label:"陇南市",children:[{value:"621202",label:"武都区"},{value:"621221",label:"成县"},{value:"621222",label:"文县"},{value:"621223",label:"宕昌县"},{value:"621224",label:"康县"},{value:"621225",label:"西和县"},{value:"621226",label:"礼县"},{value:"621227",label:"徽县"},{value:"621228",label:"两当县"}]},{value:"622900",label:"临夏回族自治州",children:[{value:"622901",label:"临夏市"},{value:"622921",label:"临夏县"},{value:"622922",label:"康乐县"},{value:"622923",label:"永靖县"},{value:"622924",label:"广河县"},{value:"622925",label:"和政县"},{value:"622926",label:"东乡族自治县"},{value:"622927",label:"积石山保安族东乡族撒拉族自治县"}]},{value:"623000",label:"甘南藏族自治州",children:[{value:"623001",label:"合作市"},{value:"623021",label:"临潭县"},{value:"623022",label:"卓尼县"},{value:"623023",label:"舟曲县"},{value:"623024",label:"迭部县"},{value:"623025",label:"玛曲县"},{value:"623026",label:"碌曲县"},{value:"623027",label:"夏河县"}]}]},{value:"630000",label:"青海省",children:[{value:"630100",label:"西宁市",children:[{value:"630102",label:"城东区"},{value:"630103",label:"城中区"},{value:"630104",label:"城西区"},{value:"630105",label:"城北区"},{value:"630121",label:"大通回族土族自治县"},{value:"630122",label:"湟中县"},{value:"630123",label:"湟源县"}]},{value:"632100",label:"海东地区",children:[{value:"632121",label:"平安县"},{value:"632122",label:"民和回族土族自治县"},{value:"632123",label:"乐都县"},{value:"632126",label:"互助土族自治县"},{value:"632127",label:"化隆回族自治县"},{value:"632128",label:"循化撒拉族自治县"}]},{value:"632200",label:"海北藏族自治州",children:[{value:"632221",label:"门源回族自治县"},{value:"632222",label:"祁连县"},{value:"632223",label:"海晏县"},{value:"632224",label:"刚察县"}]},{value:"632300",label:"黄南藏族自治州",children:[{value:"632321",label:"同仁县"},{value:"632322",label:"尖扎县"},{value:"632323",label:"泽库县"},{value:"632324",label:"河南蒙古族自治县"}]},{value:"632500",label:"海南藏族自治州",children:[{value:"632521",label:"共和县"},{value:"632522",label:"同德县"},{value:"632523",label:"贵德县"},{value:"632524",label:"兴海县"},{value:"632525",label:"贵南县"}]},{value:"632600",label:"果洛藏族自治州",children:[{value:"632621",label:"玛沁县"},{value:"632622",label:"班玛县"},{value:"632623",label:"甘德县"},{value:"632624",label:"达日县"},{value:"632625",label:"久治县"},{value:"632626",label:"玛多县"}]},{value:"632700",label:"玉树藏族自治州",children:[{value:"632701",label:"玉树市"},{value:"632722",label:"杂多县"},{value:"632723",label:"称多县"},{value:"632724",label:"治多县"},{value:"632725",label:"囊谦县"},{value:"632726",label:"曲麻莱县"}]},{value:"632800",label:"海西蒙古族藏族自治州",children:[{value:"632801",label:"格尔木市"},{value:"632802",label:"德令哈市"},{value:"632821",label:"乌兰县"},{value:"632822",label:"都兰县"},{value:"632823",label:"天峻县"}]}]},{value:"640000",label:"宁夏回族自治区",children:[{value:"640100",label:"银川市",children:[{value:"640104",label:"兴庆区"},{value:"640105",label:"西夏区"},{value:"640106",label:"金凤区"},{value:"640121",label:"永宁县"},{value:"640122",label:"贺兰县"},{value:"640181",label:"灵武市"}]},{value:"640200",label:"石嘴山市",children:[{value:"640202",label:"大武口区"},{value:"640205",label:"惠农区"},{value:"640221",label:"平罗县"}]},{value:"640300",label:"吴忠市",children:[{value:"640302",label:"利通区"},{value:"640303",label:"红寺堡区"},{value:"640323",label:"盐池县"},{value:"640324",label:"同心县"},{value:"640381",label:"青铜峡市"}]},{value:"640400",label:"固原市",children:[{value:"640402",label:"原州区"},{value:"640422",label:"西吉县"},{value:"640423",label:"隆德县"},{value:"640424",label:"泾源县"},{value:"640425",label:"彭阳县"}]},{value:"640500",label:"中卫市",children:[{value:"640502",label:"沙坡头区"},{value:"640521",label:"中宁县"},{value:"640522",label:"海原县"}]}]},{value:"650000",label:"新疆维吾尔自治区",children:[{value:"650100",label:"乌鲁木齐市",children:[{value:"650102",label:"天山区"},{value:"650103",label:"沙依巴克区"},{value:"650104",label:"新市区"},{value:"650105",label:"水磨沟区"},{value:"650106",label:"头屯河区"},{value:"650107",label:"达坂城区"},{value:"650109",label:"米东区"},{value:"650121",label:"乌鲁木齐县"}]},{value:"650200",label:"克拉玛依市",children:[{value:"650202",label:"独山子区"},{value:"650203",label:"克拉玛依区"},{value:"650204",label:"白碱滩区"},{value:"650205",label:"乌尔禾区"}]},{value:"652100",label:"吐鲁番地区",children:[{value:"652101",label:"吐鲁番市"},{value:"652122",label:"鄯善县"},{value:"652123",label:"托克逊县"}]},{value:"652200",label:"哈密地区",children:[{value:"652201",label:"哈密市"},{value:"652222",label:"巴里坤哈萨克自治县"},{value:"652223",label:"伊吾县"}]},{value:"652300",label:"昌吉回族自治州",children:[{value:"652301",label:"昌吉市"},{value:"652302",label:"阜康市"},{value:"652323",label:"呼图壁县"},{value:"652324",label:"玛纳斯县"},{value:"652325",label:"奇台县"},{value:"652327",label:"吉木萨尔县"},{value:"652328",label:"木垒哈萨克自治县"}]},{value:"652700",label:"博尔塔拉蒙古自治州",children:[{value:"652701",label:"博乐市"},{value:"652702",label:"阿拉山口市"},{value:"652722",label:"精河县"},{value:"652723",label:"温泉县"}]},{value:"652800",label:"巴音郭楞蒙古自治州",children:[{value:"652801",label:"库尔勒市"},{value:"652822",label:"轮台县"},{value:"652823",label:"尉犁县"},{value:"652824",label:"若羌县"},{value:"652825",label:"且末县"},{value:"652826",label:"焉耆回族自治县"},{value:"652827",label:"和静县"},{value:"652828",label:"和硕县"},{value:"652829",label:"博湖县"}]},{value:"652900",label:"阿克苏地区",children:[{value:"652901",label:"阿克苏市"},{value:"652922",label:"温宿县"},{value:"652923",label:"库车县"},{value:"652924",label:"沙雅县"},{value:"652925",label:"新和县"},{value:"652926",label:"拜城县"},{value:"652927",label:"乌什县"},{value:"652928",label:"阿瓦提县"},{value:"652929",label:"柯坪县"}]},{value:"653000",label:"克孜勒苏柯尔克孜自治州",children:[{value:"653001",label:"阿图什市"},{value:"653022",label:"阿克陶县"},{value:"653023",label:"阿合奇县"},{value:"653024",label:"乌恰县"}]},{value:"653100",label:"喀什地区",children:[{value:"653101",label:"喀什市"},{value:"653121",label:"疏附县"},{value:"653122",label:"疏勒县"},{value:"653123",label:"英吉沙县"},{value:"653124",label:"泽普县"},{value:"653125",label:"莎车县"},{value:"653126",label:"叶城县"},{value:"653127",label:"麦盖提县"},{value:"653128",label:"岳普湖县"},{value:"653129",label:"伽师县"},{value:"653130",label:"巴楚县"},{value:"653131",label:"塔什库尔干塔吉克自治县"}]},{value:"653200",label:"和田地区",children:[{value:"653201",label:"和田市"},{value:"653221",label:"和田县"},{value:"653222",label:"墨玉县"},{value:"653223",label:"皮山县"},{value:"653224",label:"洛浦县"},{value:"653225",label:"策勒县"},{value:"653226",label:"于田县"},{value:"653227",label:"民丰县"}]},{value:"654000",label:"伊犁哈萨克自治州",children:[{value:"654002",label:"伊宁市"},{value:"654003",label:"奎屯市"},{value:"654021",label:"伊宁县"},{value:"654022",label:"察布查尔锡伯自治县"},{value:"654023",label:"霍城县"},{value:"654024",label:"巩留县"},{value:"654025",label:"新源县"},{value:"654026",label:"昭苏县"},{value:"654027",label:"特克斯县"},{value:"654028",label:"尼勒克县"}]},{value:"654200",label:"塔城地区",children:[{value:"654201",label:"塔城市"},{value:"654202",label:"乌苏市"},{value:"654221",label:"额敏县"},{value:"654223",label:"沙湾县"},{value:"654224",label:"托里县"},{value:"654225",label:"裕民县"},{value:"654226",label:"和布克赛尔蒙古自治县"}]},{value:"654300",label:"阿勒泰地区",children:[{value:"654301",label:"阿勒泰市"},{value:"654321",label:"布尔津县"},{value:"654322",label:"富蕴县"},{value:"654323",label:"福海县"},{value:"654324",label:"哈巴河县"},{value:"654325",label:"青河县"},{value:"654326",label:"吉木乃县"}]},{value:"659000",label:"省直辖行政单位",children:[{value:"659001",label:"石河子市"},{value:"659002",label:"阿拉尔市"},{value:"659003",label:"图木舒克市"}]}]},{value:"710000",label:"台湾省",children:[{value:"710000",label:"台湾省"}]},{value:"810000",label:"香港特别行政区",children:[{value:"810000",label:"香港特别行政区"}]},{value:"820000",label:"澳门特别行政区",children:[{value:"820000",label:"澳门特别行政区"}]}]}},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function t(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?u(e):l}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function r(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&i(e,l)}function i(e,l){return i=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},i(e,l)}function v(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function o(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function b(e,l,a){return l&&o(e.prototype,l),a&&o(e,a),e}var s=l.version,c="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",f=1800,d=300,p=10,g="__DC_STAT_UUID",m="__DC_UUID_VALUE";function y(){var l="";if("n"===$()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(g)}catch(a){l=m}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,l)}catch(a){e.setStorageSync(g,m)}}return l}var _=function(e){var l=Object.keys(e),a=l.sort(),t={},u="";for(var n in a)t[a[n]]=e[a[n]],u+=a[n]+"="+e[a[n]]+"&";return{sign:"",options:u.substr(0,u.length-1)}},w=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},O=function(){return parseInt((new Date).getTime()/1e3)},$=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},k=function(){var l="";return"wx"!==$()&&"qq"!==$()||e.canIUse("getAccountInfoSync")&&(l=e.getAccountInfoSync().miniProgram.appId||""),l},j=function(){return"n"===$()?plus.runtime.version:""},A=function(){var e=$(),l="";return"n"===e&&(l=plus.runtime.channel),l},x=function(l){var a=$(),t="";return l||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},S="First__Visit__Time",T="Last__Visit__Time",E=function(){var l=e.getStorageSync(S),a=0;return l?a=l:(a=O(),e.setStorageSync(S,a),e.removeStorageSync(T)),a},P=function(){var l=e.getStorageSync(T),a=0;return a=l||"",e.setStorageSync(T,O()),a},C="__page__residence__time",D=0,N=0,I=function(){return D=O(),"n"===$()&&e.setStorageSync(C,O()),D},L=function(){return N=O(),"n"===$()&&(D=e.getStorageSync(C)),N-D},B="Total__Visit__Count",R=function(){var l=e.getStorageSync(B),a=1;return l&&(a=l,a++),e.setStorageSync(B,a),a},M=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},V=0,U=0,F=function(){var e=(new Date).getTime();return V=e,U=0,e},H=function(){var e=(new Date).getTime();return U=e,e},q=function(e){var l=0;if(0!==V&&(l=U-V),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>d;return{residenceTime:l,overtime:a}}if("page"===e){var t=l>f;return{residenceTime:l,overtime:t}}return{residenceTime:l}},G=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===$()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},z=function(e){var l=getCurrentPages(),a=l[l.length-1],t=a.$vm,u=e._query,n=u&&"{}"!==JSON.stringify(u)?"?"+JSON.stringify(u):"";return e._query="","bd"===$()?t.$mp&&t.$mp.page.is+n:t.$scope&&t.$scope.route+n||t.$mp&&t.$mp.page.route+n},J=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},W=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},X=a("6644").default,K=a("1618").default||a("1618"),Q=e.getSystemInfoSync(),Y=function(){function l(){v(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:y(),ut:$(),mpn:k(),ak:K.appid,usv:s,v:j(),ch:A(),cn:"",pn:"",ct:"",t:O(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return b(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var e=q("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,H();var a=q();F();var t=z(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=z(this),l=G();if(this._navigationBarTitle.config=X&&X.pages[l]&&X.pages[l].titleNView&&X.pages[l].titleNView.titleText||X&&X.pages[l]&&X.pages[l].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=e);H(),this._lastPageRoute=e;var a=q("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var e=q("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=O(),this.statData.sc=x(e.scene),this.statData.fvts=E(),this.statData.lvts=P(),this.statData.tvc=R(),"n"===$()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(u)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,t=e.urlref_ts,u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(u,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,t=e.value,u=void 0===t?"":t,n=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:n,ch:this.statData.ch,e_n:a,e_v:"object"===typeof u?JSON.stringify(u):u.toString(),usv:this.statData.usv,t:O(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;K.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var t=this,u=O(),n=this._navigationBarTitle;l.ttn=n.page,l.ttpj=n.config,l.ttc=n.report;var r=this._reportingRequestData;if("n"===$()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[l.lt]||(r[l.lt]=[]),r[l.lt].push(l),"n"===$()&&e.setStorageSync("__UNI__STAT__DATA",r),!(L()<p)||a){var i=this._reportingRequestData;"n"===$()&&(i=e.getStorageSync("__UNI__STAT__DATA")),I();var v=[],o=[],b=[],c=function(e){var l=i[e];l.forEach(function(l){var a=w(l);0===e?v.push(a):3===e?b.push(a):o.push(a)})};for(var h in i)c(h);v.push.apply(v,o.concat(b));var f={usv:s,t:u,requests:JSON.stringify(v)};this._reportingRequestData={},"n"===$()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==$()||"a"!==this.statData.p?this._sendRequest(f):setTimeout(function(){t._sendRequest(f)},200):this.imageRequest(f)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:c,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=_(M(e)).options;l.src=h+"?"+a}},{key:"sendEvent",value:function(e,l){W(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),Z=function(l){function a(){var l;return v(this,a),l=t(this,n(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return r(a,l),b(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),b(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,I(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,J(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,J(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(a)}}]),a}(Y),ee=Z.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}te()}).call(this,a("6e42")["default"])},"96cf":function(e,l){!function(l){"use strict";var a,t=Object.prototype,u=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",v=n.toStringTag||"@@toStringTag",o="object"===typeof e,b=l.regeneratorRuntime;if(b)o&&(e.exports=b);else{b=l.regeneratorRuntime=o?e.exports:{},b.wrap=_;var s="suspendedStart",c="suspendedYield",h="executing",f="completed",d={},p={};p[r]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(C([])));m&&m!==t&&u.call(m,r)&&(p=m);var y=k.prototype=O.prototype=Object.create(p);$.prototype=y.constructor=k,k.constructor=$,k[v]=$.displayName="GeneratorFunction",b.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===$||"GeneratorFunction"===(l.displayName||l.name))},b.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,v in e||(e[v]="GeneratorFunction")),e.prototype=Object.create(y),e},b.awrap=function(e){return{__await:e}},j(A.prototype),A.prototype[i]=function(){return this},b.AsyncIterator=A,b.async=function(e,l,a,t){var u=new A(_(e,l,a,t));return b.isGeneratorFunction(l)?u:u.next().then(function(e){return e.done?e.value:u.next()})},j(y),y[v]="Generator",y[r]=function(){return this},y.toString=function(){return"[object Generator]"},b.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var t=l.pop();if(t in e)return a.value=t,a.done=!1,a}return a.done=!0,a}},b.values=C,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(E),!e)for(var l in this)"t"===l.charAt(0)&&u.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function t(t,u){return i.type="throw",i.arg=e,l.next=t,u&&(l.method="next",l.arg=a),!!u}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],i=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var v=u.call(r,"catchLoc"),o=u.call(r,"finallyLoc");if(v&&o){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(v){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc<=this.prev&&u.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var n=t;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=l&&l<=n.finallyLoc&&(n=null);var r=n?n.completion:{};return r.type=e,r.arg=l,n?(this.method="next",this.next=n.finallyLoc,d):this.complete(r)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),d},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),d}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var t=a.completion;if("throw"===t.type){var u=t.arg;E(a)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,t){return this.delegate={iterator:C(e),resultName:l,nextLoc:t},"next"===this.method&&(this.arg=a),d}}}function _(e,l,a,t){var u=l&&l.prototype instanceof O?l:O,n=Object.create(u.prototype),r=new P(t||[]);return n._invoke=x(e,a,r),n}function w(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(t){return{type:"throw",arg:t}}}function O(){}function $(){}function k(){}function j(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function A(e){function l(a,t,n,r){var i=w(e[a],e,t);if("throw"!==i.type){var v=i.arg,o=v.value;return o&&"object"===typeof o&&u.call(o,"__await")?Promise.resolve(o.__await).then(function(e){l("next",e,n,r)},function(e){l("throw",e,n,r)}):Promise.resolve(o).then(function(e){v.value=e,n(v)},function(e){return l("throw",e,n,r)})}r(i.arg)}var a;function t(e,t){function u(){return new Promise(function(a,u){l(e,t,a,u)})}return a=a?a.then(u,u):u()}this._invoke=t}function x(e,l,a){var t=s;return function(u,n){if(t===h)throw new Error("Generator is already running");if(t===f){if("throw"===u)throw n;return D()}a.method=u,a.arg=n;while(1){var r=a.delegate;if(r){var i=S(r,a);if(i){if(i===d)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(t===s)throw t=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t=h;var v=w(e,l,a);if("normal"===v.type){if(t=a.done?f:c,v.arg===d)continue;return{value:v.arg,done:a.done}}"throw"===v.type&&(t=f,a.method="throw",a.arg=v.arg)}}}function S(e,l){var t=e.iterator[l.method];if(t===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,S(e,l),"throw"===l.method))return d;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var u=w(t,e.iterator,l.arg);if("throw"===u.type)return l.method="throw",l.arg=u.arg,l.delegate=null,d;var n=u.arg;return n?n.done?(l[e.resultName]=n.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,d):n:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,d)}function T(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function E(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function C(e){if(e){var l=e[r];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,n=function l(){while(++t<e.length)if(u.call(e,t))return l.value=e[t],l.done=!1,l;return l.value=a,l.done=!0,l};return n.next=n}}return{next:D}}function D(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9a7b":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a={};(function(){function l(e){var l,a,t;return e<128?[e]:e<2048?(l=192+(e>>6),a=128+(63&e),[l,a]):(l=224+(e>>12),a=128+(e>>6&63),t=128+(63&e),[l,a,t])}function t(e){for(var a=[],t=0;t<e.length;t++)for(var u=e.charCodeAt(t),n=l(u),r=0;r<n.length;r++)a.push(n[r]);return a}function u(e,l){this.typeNumber=-1,this.errorCorrectLevel=l,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=e,this.utf8bytes=t(e),this.make()}u.prototype={constructor:u,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var l=0;l<this.moduleCount;l++)this.modules[l]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,e),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(e,l){for(var a=-1;a<=7;a++)if(!(e+a<=-1||this.moduleCount<=e+a))for(var t=-1;t<=7;t++)l+t<=-1||this.moduleCount<=l+t||(this.modules[e+a][l+t]=0<=a&&a<=6&&(0==t||6==t)||0<=t&&t<=6&&(0==a||6==a)||2<=a&&a<=4&&2<=t&&t<=4)},createQrcode:function(){for(var e=0,l=0,a=null,t=0;t<8;t++){this.makeImpl(t);var u=i.getLostPoint(this);(0==t||e>u)&&(e=u,l=t,a=this.modules)}this.modules=a,this.setupTypeInfo(!1,l),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0,null==this.modules[6][e]&&(this.modules[6][e]=e%2==0))},setupPositionAdjustPattern:function(){for(var e=i.getPatternPosition(this.typeNumber),l=0;l<e.length;l++)for(var a=0;a<e.length;a++){var t=e[l],u=e[a];if(null==this.modules[t][u])for(var n=-2;n<=2;n++)for(var r=-2;r<=2;r++)this.modules[t+n][u+r]=-2==n||2==n||-2==r||2==r||0==n&&0==r}},setupTypeNumber:function(e){for(var l=i.getBCHTypeNumber(this.typeNumber),a=0;a<18;a++){var t=!e&&1==(l>>a&1);this.modules[Math.floor(a/3)][a%3+this.moduleCount-8-3]=t,this.modules[a%3+this.moduleCount-8-3][Math.floor(a/3)]=t}},setupTypeInfo:function(e,l){for(var a=n[this.errorCorrectLevel]<<3|l,t=i.getBCHTypeInfo(a),u=0;u<15;u++){var r=!e&&1==(t>>u&1);u<6?this.modules[u][8]=r:u<8?this.modules[u+1][8]=r:this.modules[this.moduleCount-15+u][8]=r;r=!e&&1==(t>>u&1);u<8?this.modules[8][this.moduleCount-u-1]=r:u<9?this.modules[8][15-u-1+1]=r:this.modules[8][15-u-1]=r}this.modules[this.moduleCount-8][8]=!e},createData:function(){var e=new c,l=this.typeNumber>9?16:8;e.put(4,4),e.put(this.utf8bytes.length,l);for(var a=0,t=this.utf8bytes.length;a<t;a++)e.put(this.utf8bytes[a],8);e.length+4<=8*this.totalDataCount&&e.put(0,4);while(e.length%8!=0)e.putBit(!1);while(1){if(e.length>=8*this.totalDataCount)break;if(e.put(u.PAD0,8),e.length>=8*this.totalDataCount)break;e.put(u.PAD1,8)}return this.createBytes(e)},createBytes:function(e){for(var l=0,a=0,t=0,u=this.rsBlock.length/3,n=new Array,r=0;r<u;r++)for(var v=this.rsBlock[3*r+0],o=this.rsBlock[3*r+1],s=this.rsBlock[3*r+2],c=0;c<v;c++)n.push([s,o]);for(var h=new Array(n.length),f=new Array(n.length),d=0;d<n.length;d++){var p=n[d][0],g=n[d][1]-p;a=Math.max(a,p),t=Math.max(t,g),h[d]=new Array(p);for(r=0;r<h[d].length;r++)h[d][r]=255&e.buffer[r+l];l+=p;var m=i.getErrorCorrectPolynomial(g),y=new b(h[d],m.getLength()-1),_=y.mod(m);f[d]=new Array(m.getLength()-1);for(r=0;r<f[d].length;r++){var w=r+_.getLength()-f[d].length;f[d][r]=w>=0?_.get(w):0}}var O=new Array(this.totalDataCount),$=0;for(r=0;r<a;r++)for(d=0;d<n.length;d++)r<h[d].length&&(O[$++]=h[d][r]);for(r=0;r<t;r++)for(d=0;d<n.length;d++)r<f[d].length&&(O[$++]=f[d][r]);return O},mapData:function(e,l){for(var a=-1,t=this.moduleCount-1,u=7,n=0,r=this.moduleCount-1;r>0;r-=2){6==r&&r--;while(1){for(var v=0;v<2;v++)if(null==this.modules[t][r-v]){var o=!1;n<e.length&&(o=1==(e[n]>>>u&1));var b=i.getMask(l,t,r-v);b&&(o=!o),this.modules[t][r-v]=o,u--,-1==u&&(n++,u=7)}if(t+=a,t<0||this.moduleCount<=t){t-=a,a=-a;break}}}}},u.PAD0=236,u.PAD1=17;for(var n=[1,0,3,2],r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){var l=e<<10;while(i.getBCHDigit(l)-i.getBCHDigit(i.G15)>=0)l^=i.G15<<i.getBCHDigit(l)-i.getBCHDigit(i.G15);return(e<<10|l)^i.G15_MASK},getBCHTypeNumber:function(e){var l=e<<12;while(i.getBCHDigit(l)-i.getBCHDigit(i.G18)>=0)l^=i.G18<<i.getBCHDigit(l)-i.getBCHDigit(i.G18);return e<<12|l},getBCHDigit:function(e){var l=0;while(0!=e)l++,e>>>=1;return l},getPatternPosition:function(e){return i.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,l,a){switch(e){case r.PATTERN000:return(l+a)%2==0;case r.PATTERN001:return l%2==0;case r.PATTERN010:return a%3==0;case r.PATTERN011:return(l+a)%3==0;case r.PATTERN100:return(Math.floor(l/2)+Math.floor(a/3))%2==0;case r.PATTERN101:return l*a%2+l*a%3==0;case r.PATTERN110:return(l*a%2+l*a%3)%2==0;case r.PATTERN111:return(l*a%3+(l+a)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var l=new b([1],0),a=0;a<e;a++)l=l.multiply(new b([1,v.gexp(a)],0));return l},getLostPoint:function(e){for(var l=e.getModuleCount(),a=0,t=0,u=0;u<l;u++)for(var n=0,r=e.modules[u][0],i=0;i<l;i++){var v=e.modules[u][i];if(i<l-6&&v&&!e.modules[u][i+1]&&e.modules[u][i+2]&&e.modules[u][i+3]&&e.modules[u][i+4]&&!e.modules[u][i+5]&&e.modules[u][i+6]&&(i<l-10?e.modules[u][i+7]&&e.modules[u][i+8]&&e.modules[u][i+9]&&e.modules[u][i+10]&&(a+=40):i>3&&e.modules[u][i-1]&&e.modules[u][i-2]&&e.modules[u][i-3]&&e.modules[u][i-4]&&(a+=40)),u<l-1&&i<l-1){var o=0;v&&o++,e.modules[u+1][i]&&o++,e.modules[u][i+1]&&o++,e.modules[u+1][i+1]&&o++,0!=o&&4!=o||(a+=3)}r^v?n++:(r=v,n>=5&&(a+=3+n-5),n=1),v&&t++}for(i=0;i<l;i++)for(n=0,r=e.modules[0][i],u=0;u<l;u++){v=e.modules[u][i];u<l-6&&v&&!e.modules[u+1][i]&&e.modules[u+2][i]&&e.modules[u+3][i]&&e.modules[u+4][i]&&!e.modules[u+5][i]&&e.modules[u+6][i]&&(u<l-10?e.modules[u+7][i]&&e.modules[u+8][i]&&e.modules[u+9][i]&&e.modules[u+10][i]&&(a+=40):u>3&&e.modules[u-1][i]&&e.modules[u-2][i]&&e.modules[u-3][i]&&e.modules[u-4][i]&&(a+=40)),r^v?n++:(r=v,n>=5&&(a+=3+n-5),n=1)}var b=Math.abs(100*t/l/l-50)/5;return a+=10*b,a}},v={glog:function(e){if(e<1)throw new Error("glog("+e+")");return v.LOG_TABLE[e]},gexp:function(e){while(e<0)e+=255;while(e>=256)e-=255;return v.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},o=0;o<8;o++)v.EXP_TABLE[o]=1<<o;for(o=8;o<256;o++)v.EXP_TABLE[o]=v.EXP_TABLE[o-4]^v.EXP_TABLE[o-5]^v.EXP_TABLE[o-6]^v.EXP_TABLE[o-8];for(o=0;o<255;o++)v.LOG_TABLE[v.EXP_TABLE[o]]=o;function b(e,l){if(void 0==e.length)throw new Error(e.length+"/"+l);var a=0;while(a<e.length&&0==e[a])a++;this.num=new Array(e.length-a+l);for(var t=0;t<e.length-a;t++)this.num[t]=e[t+a]}b.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var l=new Array(this.getLength()+e.getLength()-1),a=0;a<this.getLength();a++)for(var t=0;t<e.getLength();t++)l[a+t]^=v.gexp(v.glog(this.get(a))+v.glog(e.get(t)));return new b(l,0)},mod:function(e){var l=this.getLength(),a=e.getLength();if(l-a<0)return this;for(var t=new Array(l),u=0;u<l;u++)t[u]=this.get(u);while(t.length>=a){var n=v.glog(t[0])-v.glog(e.get(0));for(u=0;u<e.getLength();u++)t[u]^=v.gexp(v.glog(e.get(u))+n);while(0==t[0])t.shift()}return new b(t,0)}};var s=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function c(){this.buffer=new Array,this.length=0}u.prototype.getRightType=function(){for(var e=1;e<41;e++){var l=s[4*(e-1)+this.errorCorrectLevel];if(void 0==l)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var a=l.length/3,t=0,u=0;u<a;u++){var n=l[3*u+0],r=l[3*u+2];t+=r*n}var i=e>9?2:1;if(this.utf8bytes.length+i<t||40==e){this.typeNumber=e,this.rsBlock=l,this.totalDataCount=t;break}}},c.prototype={get:function(e){var l=Math.floor(e/8);return this.buffer[l]>>>7-e%8&1},put:function(e,l){for(var a=0;a<l;a++)this.putBit(e>>>l-a-1&1)},putBit:function(e){var l=Math.floor(this.length/8);this.buffer.length<=l&&this.buffer.push(0),e&&(this.buffer[l]|=128>>>this.length%8),this.length++}};var h=[];a=function(l){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:l.canvasId,context:l.context,usingComponents:l.usingComponents,showLoading:l.showLoading,loadingText:l.loadingText},"string"===typeof l&&(l={text:l}),l)for(var a in l)this.options[a]=l[a];for(var t=null,n=(a=0,h.length);a<n;a++)if(h[a].text==this.options.text&&h[a].text.correctLevel==this.options.correctLevel){t=h[a].obj;break}a==n&&(t=new u(this.options.text,this.options.correctLevel),h.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:t}));var r=function(e){var l=e.options;return l.pdground&&(e.row>1&&e.row<5&&e.col>1&&e.col<5||e.row>e.count-6&&e.row<e.count-2&&e.col>1&&e.col<5||e.row>1&&e.row<5&&e.col>e.count-6&&e.col<e.count-2)?l.pdground:l.foreground},i=function(l){l.showLoading&&e.showLoading({title:l.loadingText,mask:!0});for(var a=e.createCanvasContext(l.canvasId,l.context),u=t.getModuleCount(),n=l.size,i=l.imageSize,v=(n/u).toPrecision(4),o=(n/u).toPrecision(4),b=0;b<u;b++)for(var s=0;s<u;s++){var c=Math.ceil((s+1)*v)-Math.floor(s*v),h=Math.ceil((b+1)*v)-Math.floor(b*v),f=r({row:b,col:s,count:u,options:l});a.setFillStyle(t.modules[b][s]?f:l.background),a.fillRect(Math.round(s*v),Math.round(b*o),c,h)}if(l.image){var d=function(e,a,t,u,n,r,i,v,o){e.setLineWidth(i),e.setFillStyle(l.background),e.setStrokeStyle(l.background),e.beginPath(),e.moveTo(a+r,t),e.arcTo(a+u,t,a+u,t+r,r),e.arcTo(a+u,t+n,a+u-r,t+n,r),e.arcTo(a,t+n,a,t+n-r,r),e.arcTo(a,t,a+r,t,r),e.closePath(),v&&e.fill(),o&&e.stroke()},p=Number(((n-i)/2).toFixed(2)),g=Number(((n-i)/2).toFixed(2));d(a,p,g,i,i,2,6,!0,!0),a.drawImage(l.image,p,g,i,i)}setTimeout(function(){a.draw(!0,function(){setTimeout(function(){e.canvasToTempFilePath({width:l.width,height:l.height,destWidth:l.width,destHeight:l.height,canvasId:l.canvasId,quality:Number(1),success:function(e){l.cbResult&&l.cbResult(e.tempFilePath)},fail:function(e){l.cbResult&&l.cbResult(e)},complete:function(){l.showLoading&&e.hideLoading()}},l.context)},l.text.length+100)})},l.usingComponents?0:150)};i(this.options)},a.prototype.clear=function(l){var a=e.createCanvasContext(this.options.canvasId,this.options.context);a.clearRect(0,0,this.options.size,this.options.size),a.draw(!1,function(){l&&l()})}})();var t=a;l.default=t}).call(this,a("6e42")["default"])},a34a:function(e,l,a){e.exports=a("bbdd")},bbdd:function(e,l,a){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),u=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,n=u&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=a("96cf"),u)t.regeneratorRuntime=n;else try{delete t.regeneratorRuntime}catch(r){t.regeneratorRuntime=void 0}},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},e4df:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=n(a("66fd")),u=n(a("2f62"));function n(e){return e&&e.__esModule?e:{default:e}}t.default.use(u.default);var r=new u.default.Store({state:{hasLogin:!1,userInfo:{}},mutations:{login:function(l,a){l.hasLogin=!0,l.userInfo=a,e.setStorage({key:"userInfo",data:a})},logout:function(l){l.hasLogin=!1,l.userInfo={},e.removeStorage({key:"userInfo"})}}}),i=r;l.default=i}).call(this,a("6e42")["default"])},e9e5:function(e){e.exports={statusCode:"200",msg:"success",data:{swiperList:[{id:1,src:"url1",img:"/static/img/home/1.jpg"},{id:2,src:"url2",img:"/static/img/home/2.jpg"},{id:3,src:"url3",img:"/static/img/home/3.jpg"}],categoryList:[{id:1,name:"服饰内衣",img:"/static/img/category/1.png"},{id:2,name:"美妆个护",img:"/static/img/category/2.png"},{id:3,name:"珠宝配饰",img:"/static/img/category/3.png"},{id:4,name:"3C数码",img:"/static/img/category/4.png"},{id:5,name:"家用电器",img:"/static/img/category/5.png"},{id:6,name:"家居家具",img:"/static/img/category/6.png"},{id:7,name:"母婴用品",img:"/static/img/category/7.png"},{id:8,name:"美食零食",img:"/static/img/category/8.png"},{id:9,name:"旅行箱包",img:"/static/img/category/9.png"},{id:10,name:"宠物用品",img:"/static/img/category/10.png"},{id:11,name:"户外运动",img:"/static/img/category/11.png"},{id:12,name:"汽车用品",img:"/static/img/category/12.png"}],orderLists:[{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",status:"待付款",price:"999.00",img:"/static/img/home/s1.jpg",time:"2012-10-15",number:2,iconTitle:"去付款"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",status:"待付款",price:"899.00",img:"/static/img/home/s1.jpg",time:"2012-10-15",number:2,iconTitle:"去付款"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",status:"已取消",price:"119.00",img:"/static/img/home/s1.jpg",time:"2022-10-15",number:2,iconTitle:"删除订单"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",status:"待发货",price:"999.00",img:"/static/img/home/s1.jpg",time:"2012-10-15",number:2,iconTitle:"提醒发货"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",status:"待付款",price:"9549.00",img:"/static/img/home/s1.jpg",time:"2018-20-15",number:2,iconTitle:"去付款"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",status:"待收货",price:"999.00",img:"/static/img/home/s1.jpg",time:"2012-10-15",number:2,iconTitle:"确认收货"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",status:"已完成",price:"99559.00",img:"/static/img/home/s1.jpg",time:"2020-10-15",number:22,iconTitle:"去评价"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",status:"已完成",price:"99.00",img:"/static/img/home/s1.jpg",time:"2020-10-15",number:42,iconTitle:"去评价"}],hotlists:[{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:138,new:"￥99.00",img:"/static/img/home/s1.jpg"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",img:"/static/img/home/s1.jpg"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:1628,new:"￥99.00",img:"/static/img/home/s1.jpg"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",img:"/static/img/home/s1.jpg"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",img:"/static/img/home/s1.jpg"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",img:"/static/img/home/s1.jpg"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",img:"/static/img/home/s1.jpg"},{title:"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链",old:128,new:"￥99.00",img:"/static/img/home/s1.jpg"}]}}},f0c5:function(e,l,a){"use strict";function t(e,l,a,t,u,n,r,i,v,o){var b,s="function"===typeof e?e.options:e;if(v&&(s.components=Object.assign(v,s.components||{})),o&&((o.beforeCreate||(o.beforeCreate=[])).unshift(function(){this[o.__module]=this}),(s.mixins||(s.mixins=[])).push(o)),l&&(s.render=l,s.staticRenderFns=a,s._compiled=!0),t&&(s.functional=!0),n&&(s._scopeId="data-v-"+n),r?(b=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),u&&u.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},s._ssrRegister=b):u&&(b=i?function(){u.call(this,this.$root.$options.shadowRoot)}:u),b)if(s.functional){s._injectStyles=b;var c=s.render;s.render=function(e,l){return b.call(l),c(e,l)}}else{var h=s.beforeCreate;s.beforeCreate=h?[].concat(h,b):[b]}return{exports:e,options:s}}a.d(l,"a",function(){return t})}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/counter';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/counter.js';

define('components/counter.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/counter"], {
  "26e1": function e1(n, t, u) {
    "use strict";

    var e,
        a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    u.d(t, "b", function () {
      return a;
    }), u.d(t, "c", function () {
      return c;
    }), u.d(t, "a", function () {
      return e;
    });
  },
  "65a4": function a4(n, t, u) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      props: ["goodsInfo"],
      data: function data() {
        return {
          number: 1
        };
      },
      methods: {
        minus: function minus() {
          this.$emit("minus");
        },
        add: function add() {
          this.$emit("add");
        }
      }
    };
    t.default = e;
  },
  "8cfa": function cfa(n, t, u) {
    "use strict";

    var e = u("a940"),
        a = u.n(e);
    a.a;
  },
  a940: function a940(n, t, u) {},
  ac1b: function ac1b(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("65a4"),
        a = u.n(e);

    for (var c in e) {
      "default" !== c && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(c);
    }

    t["default"] = a.a;
  },
  d64e: function d64e(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("26e1"),
        a = u("ac1b");

    for (var c in a) {
      "default" !== c && function (n) {
        u.d(t, n, function () {
          return a[n];
        });
      }(c);
    }

    u("8cfa");
    var r,
        o = u("f0c5"),
        i = Object(o["a"])(a["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], r);
    t["default"] = i.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/counter-create-component', {
  'components/counter-create-component': function componentsCounterCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d64e"));
  }
}, [['components/counter-create-component']]]);
});
require('components/counter.js');
__wxRoute = 'components/popupPay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/popupPay.js';

define('components/popupPay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/popupPay"], {
  "70e2": function e2(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("b620"),
        a = e("e8b4");

    for (var u in a) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(u);
    }

    e("eb58");
    var s,
        c = e("f0c5"),
        i = Object(c["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], s);
    n["default"] = i.exports;
  },
  ac79: function ac79(t, n, e) {
    "use strict";

    (function (t, o) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = u(e("a34a"));
      u(e("6467"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function s(t, n, e, o, a, u, s) {
        try {
          var c = t[u](s),
              i = c.value;
        } catch (p) {
          return void e(p);
        }

        c.done ? n(i) : Promise.resolve(i).then(o, a);
      }

      function c(t) {
        return function () {
          var n = this,
              e = arguments;
          return new Promise(function (o, a) {
            var u = t.apply(n, e);

            function c(t) {
              s(u, o, a, c, i, "next", t);
            }

            function i(t) {
              s(u, o, a, c, i, "throw", t);
            }

            c(void 0);
          });
        };
      }

      var i = {
        props: ["showPay", "Price", "footerbottom"],
        data: function data() {
          return {
            wechat: 0,
            zhifubao: 1,
            bankCard: 2,
            dealCur: !0,
            showIndex: 0,
            title: "request-payment",
            loading: !1,
            price: .01,
            alipayList: [],
            wxpayList: []
          };
        },
        methods: {
          hidePay: function hidePay() {
            var n = this;
            this.$emit("func", !1), t.showModal({
              title: "取消支付",
              content: "确定要取消支付吗？",
              cancelText: "否",
              confirmText: "是",
              success: function success(e) {
                e.confirm ? t.navigateTo({
                  url: "../order"
                }) : n.$emit("func", !0);
              }
            });
          },
          setIndex: function setIndex(t) {
            this.showIndex = t;
          },
          showCur: function showCur() {
            o("log", "13", " at components\\popupPay.vue:109"), this.dealCur = !this.dealCur;
          },
          weixinPay: function weixinPay() {
            var n = this;
            o("log", "发起支付", " at components\\popupPay.vue:114"), this.loading = !0, t.login({
              success: function success(e) {
                o("log", e, " at components\\popupPay.vue:118"), o("log", "login success", e, " at components\\popupPay.vue:119"), t.request({
                  url: "https://unidemo.dcloud.net.cn/payment/wx/mp?code=".concat(e.code, "&amount=").concat(n.price),
                  success: function success(e) {
                    if (o("log", "pay request success", e, " at components\\popupPay.vue:123"), 200 === e.statusCode) {
                      if (0 === e.data.ret) {
                        o("log", "得到接口prepay_id", e.data.payment, " at components\\popupPay.vue:132");
                        var a = e.data.payment;
                        t.requestPayment({
                          timeStamp: a.timeStamp,
                          nonceStr: a.nonceStr,
                          package: a.package,
                          signType: "MD5",
                          paySign: a.paySign,
                          success: function success(n) {
                            t.showToast({
                              title: "感谢您的赞助!"
                            });
                          },
                          fail: function fail(n) {
                            t.showModal({
                              content: "支付失败,原因为: " + n.errMsg,
                              showCancel: !1
                            });
                          },
                          complete: function complete() {
                            n.loading = !1;
                          }
                        });
                      } else t.showModal({
                        content: e.data.desc,
                        showCancel: !1
                      });
                    } else t.showModal({
                      content: "支付失败，请重试！",
                      showCancel: !1
                    });
                  },
                  fail: function fail(e) {
                    o("log", "fail", e, " at components\\popupPay.vue:164"), n.loading = !1, t.showModal({
                      content: "支付失败,原因为: " + e.errMsg,
                      showCancel: !1
                    });
                  }
                });
              },
              fail: function fail(e) {
                o("log", "fail", e, " at components\\popupPay.vue:174"), n.loading = !1, t.showModal({
                  content: "支付失败,原因为: " + e.errMsg,
                  showCancel: !1
                });
              }
            });
          },
          Payment: function Payment() {
            var n = this;
            t.getProvider({
              service: "payment",
              success: function success(t) {
                o("log", "payment success:" + JSON.stringify(t), " at components\\popupPay.vue:189");
                var e = [],
                    a = [];
                o("log", t, "初始", " at components\\popupPay.vue:192"), t.provider.map(function (t) {
                  switch (t) {
                    case "alipay":
                      e.push({
                        name: "支付宝",
                        id: t,
                        loading: !1
                      });
                      break;

                    case "wxpay":
                      a.push({
                        name: "微信",
                        id: t,
                        loading: !1
                      });
                      break;

                    default:
                      break;
                  }
                }), n.alipayList = e, n.wxpayList = a;
              },
              fail: function fail(t) {
                o("log", "获取支付通道失败：", t, " at components\\popupPay.vue:217");
              }
            });
          },
          toRequestPaymentH5: function toRequestPaymentH5() {
            0 === this.showIndex ? o("log", "微信支付", " at components\\popupPay.vue:224") : 1 === this.showIndex && o("log", "支付宝支付", " at components\\popupPay.vue:226");
          },
          toRequestPayment: function toRequestPayment() {
            if (0 === this.showIndex) {
              var t = "http://www.tiktokshopee.com/apk/Wxpay/H5jsapipay";
              plus.runtime.openWeb(t, function () {});
            } else if (1 === this.showIndex) {
              var n = "http://www.mamamohe.cn/zfb/alipay/index.php";
              plus.runtime.openWeb(n, function () {});
            }
          },
          requestPayment: function () {
            var n = c(a.default.mark(function n(e, u) {
              var s,
                  c = this;
              return a.default.wrap(function (n) {
                while (1) {
                  switch (n.prev = n.next) {
                    case 0:
                      return this.loading = !0, n.next = 3, this.getOrderInfo(e.id);

                    case 3:
                      if (s = n.sent, o("log", "得到订单信息", s, " at components\\popupPay.vue:253"), 200 === s.statusCode) {
                        n.next = 9;
                        break;
                      }

                      return o("log", "获得订单信息失败", s, " at components\\popupPay.vue:255"), t.showModal({
                        content: "获得订单信息失败",
                        showCancel: !1
                      }), n.abrupt("return");

                    case 9:
                      o("log", e.id, s.data, " at components\\popupPay.vue:262"), t.requestPayment({
                        provider: e.id,
                        orderInfo: s.data,
                        success: function success(n) {
                          o("log", "success", n, " at components\\popupPay.vue:267"), t.showToast({
                            title: "感谢您的赞助!"
                          });
                        },
                        fail: function fail(n) {
                          o("log", "fail", n, " at components\\popupPay.vue:273"), t.showModal({
                            content: "支付失败,原因为: " + n.errMsg,
                            showCancel: !1
                          });
                        },
                        complete: function complete() {
                          c.loading = !1;
                        }
                      });

                    case 11:
                    case "end":
                      return n.stop();
                  }
                }
              }, n, this);
            }));

            function e(t, e) {
              return n.apply(this, arguments);
            }

            return e;
          }(),
          getOrderInfo: function getOrderInfo(n) {
            var e = "";
            e = plus.runtime.appid;
            var o = "https://demo.dcloud.net.cn/payment/?payid=" + n + "&appid=" + e + "&total=" + this.price;
            return new Promise(function (n) {
              t.request({
                url: o,
                success: function success(t) {
                  n(t);
                },
                fail: function fail(t) {
                  n(t);
                }
              });
            });
          }
        }
      };
      n.default = i;
    }).call(this, e("6e42")["default"], e("0de9")["default"]);
  },
  b620: function b620(t, n, e) {
    "use strict";

    var o,
        a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "b", function () {
      return a;
    }), e.d(n, "c", function () {
      return u;
    }), e.d(n, "a", function () {
      return o;
    });
  },
  c8e2: function c8e2(t, n, e) {},
  e8b4: function e8b4(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("ac79"),
        a = e.n(o);

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    n["default"] = a.a;
  },
  eb58: function eb58(t, n, e) {
    "use strict";

    var o = e("c8e2"),
        a = e.n(o);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/popupPay-create-component', {
  'components/popupPay-create-component': function componentsPopupPayCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("70e2"));
  }
}, [['components/popupPay-create-component']]]);
});
require('components/popupPay.js');
__wxRoute = 'components/status';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/status.js';

define('components/status.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/status"], {
  "1ce4": function ce4(n, t, u) {
    "use strict";

    var c,
        e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    u.d(t, "b", function () {
      return e;
    }), u.d(t, "c", function () {
      return r;
    }), u.d(t, "a", function () {
      return c;
    });
  },
  "1cef": function cef(n, t, u) {
    "use strict";

    var c = u("8937"),
        e = u.n(c);
    e.a;
  },
  "44a7": function a7(n, t, u) {},
  "83d2": function d2(n, t, u) {
    "use strict";

    u.r(t);
    var c = u("1ce4"),
        e = u("bbf7");

    for (var r in e) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(r);
    }

    u("1cef");
    var f,
        a = u("f0c5"),
        o = Object(a["a"])(e["default"], c["b"], c["c"], !1, null, null, null, !1, c["a"], f);
    t["default"] = o.exports;
  },
  8937: function _(n, t, u) {},
  bbf7: function bbf7(n, t, u) {
    "use strict";

    u.r(t);
    var c = u("44a7"),
        e = u.n(c);

    for (var r in c) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return c[n];
        });
      }(r);
    }

    t["default"] = e.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/status-create-component', {
  'components/status-create-component': function componentsStatusCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("83d2"));
  }
}, [['components/status-create-component']]]);
});
require('components/status.js');
__wxRoute = 'components/tki-qrcode/tki-qrcode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/tki-qrcode/tki-qrcode.js';

define('components/tki-qrcode/tki-qrcode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tki-qrcode/tki-qrcode"], {
  "4ea3": function ea3(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("dfd8"),
        o = n("e7a7");

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    n("b6c4");
    var a,
        r = n("f0c5"),
        s = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], a);
    e["default"] = s.exports;
  },
  7977: function _(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i,
          o = u(n("9a7b"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var a = {
        name: "tki-qrcode",
        props: {
          cid: {
            type: String,
            default: "tki-qrcode-canvas"
          },
          size: {
            type: Number,
            default: 200
          },
          unit: {
            type: String,
            default: "upx"
          },
          show: {
            type: Boolean,
            default: !0
          },
          val: {
            type: String,
            default: ""
          },
          background: {
            type: String,
            default: "#ffffff"
          },
          foreground: {
            type: String,
            default: "#000000"
          },
          pdground: {
            type: String,
            default: "#000000"
          },
          icon: {
            type: String,
            default: ""
          },
          iconSize: {
            type: Number,
            default: 40
          },
          lv: {
            type: Number,
            default: 3
          },
          onval: {
            type: Boolean,
            default: !1
          },
          loadMake: {
            type: Boolean,
            default: !1
          },
          usingComponents: {
            type: Boolean,
            default: !0
          },
          showLoading: {
            type: Boolean,
            default: !0
          },
          loadingText: {
            type: String,
            default: "二维码生成中"
          }
        },
        data: function data() {
          return {
            result: ""
          };
        },
        methods: {
          _makeCode: function _makeCode() {
            var e = this;
            this._empty(this.val) ? t.showToast({
              title: "二维码内容不能为空",
              icon: "none",
              duration: 2e3
            }) : i = new o.default({
              context: e,
              canvasId: e.cid,
              usingComponents: e.usingComponents,
              showLoading: e.showLoading,
              loadingText: e.loadingText,
              text: e.val,
              size: e.cpSize,
              background: e.background,
              foreground: e.foreground,
              pdground: e.pdground,
              correctLevel: e.lv,
              image: e.icon,
              imageSize: e.iconSize,
              cbResult: function cbResult(t) {
                e._result(t);
              }
            });
          },
          _clearCode: function _clearCode() {
            this._result(""), i.clear();
          },
          _saveCode: function _saveCode() {
            var e = this;
            "" != this.result && t.saveImageToPhotosAlbum({
              filePath: e.result,
              success: function success() {
                t.showToast({
                  title: "二维码保存成功",
                  icon: "success",
                  duration: 2e3
                });
              }
            });
          },
          _result: function _result(t) {
            this.result = t, this.$emit("result", t);
          },
          _empty: function _empty(t) {
            var e = typeof t,
                n = !1;
            return "number" == e && "" == String(t) ? n = !0 : "undefined" == e ? n = !0 : "object" == e ? "{}" != JSON.stringify(t) && "[]" != JSON.stringify(t) && null != t || (n = !0) : "string" == e ? "" != t && "undefined" != t && "null" != t && "{}" != t && "[]" != t || (n = !0) : "function" == e && (n = !1), n;
          }
        },
        watch: {
          size: function size(t, e) {
            var n = this;
            t == e || this._empty(t) || (this.cSize = t, this._empty(this.val) || setTimeout(function () {
              n._makeCode();
            }, 100));
          },
          val: function val(t, e) {
            var n = this;
            this.onval && (t == e || this._empty(t) || setTimeout(function () {
              n._makeCode();
            }, 0));
          }
        },
        computed: {
          cpSize: function cpSize() {
            return "upx" == this.unit ? t.upx2px(this.size) : this.size;
          }
        },
        mounted: function mounted() {
          var t = this;
          this.loadMake && (this._empty(this.val) || setTimeout(function () {
            t._makeCode();
          }, 0));
        }
      };
      e.default = a;
    }).call(this, n("6e42")["default"]);
  },
  "97fa": function fa(t, e, n) {},
  b6c4: function b6c4(t, e, n) {
    "use strict";

    var i = n("97fa"),
        o = n.n(i);
    o.a;
  },
  dfd8: function dfd8(t, e, n) {
    "use strict";

    var i,
        o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "b", function () {
      return o;
    }), n.d(e, "c", function () {
      return u;
    }), n.d(e, "a", function () {
      return i;
    });
  },
  e7a7: function e7a7(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("7977"),
        o = n.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(u);
    }

    e["default"] = o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/tki-qrcode/tki-qrcode-create-component', {
  'components/tki-qrcode/tki-qrcode-create-component': function componentsTkiQrcodeTkiQrcodeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4ea3"));
  }
}, [['components/tki-qrcode/tki-qrcode-create-component']]]);
});
require('components/tki-qrcode/tki-qrcode.js');
__wxRoute = 'components/wechat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/wechat.js';

define('components/wechat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/wechat", "pages/game/share"], {
  "0718": function _(n, t, e) {
    "use strict";

    e.r(t);
    var o = e("351d"),
        i = e("80b4");

    for (var c in i) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(c);
    }

    e("9ca9");
    var s,
        u = e("f0c5"),
        a = Object(u["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], s);
    t["default"] = a.exports;
  },
  "14c6": function c6(n, t, e) {
    "use strict";

    (function (n, o) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      i(e("0718"));

      function i(n) {
        return n && n.__esModule ? n : {
          default: n
        };
      }

      var c = function c() {
        return Promise.all([e.e("common/vendor"), e.e("components/tki-qrcode/tki-qrcode")]).then(e.bind(null, "4ea3"));
      },
          s = {
        props: ["goodsInfo", "money"],
        data: function data() {
          return {
            ifShow: !0,
            val: "扫码",
            size: 100,
            unit: "upx",
            pdground: "#FF625E",
            icon: "/static/a.png",
            iconsize: 15,
            lv: 3,
            onval: !1,
            loadMake: !1,
            src: ""
          };
        },
        mounted: function mounted() {
          var t = this;
          setTimeout(function () {
            t.goodsInfo.old = t.money, t.goodsInfo.key = !0, t.val = JSON.stringify(t.goodsInfo), n("log", t.val, " at components\\wechat.vue:65"), t.$refs.qrcode._makeCode();
          }, 20);
        },
        components: {
          tkiQrcode: c
        },
        methods: {
          qrR: function qrR(n) {
            this.src = n;
          },
          saveQrcode: function saveQrcode() {
            this.$refs.qrcode._saveCode(), setTimeout(function () {
              o.showToast({
                icon: "success",
                title: "保存成功,打开APP识别"
              });
            }, 200);
          },
          longtap: function longtap() {
            var n = this;
            o.showModal({
              title: "保存二维码",
              content: "保存到本地相册吗？",
              cancelText: "否",
              confirmText: "是",
              success: function success(t) {
                t.confirm && n.saveQrcode();
              }
            });
          },
          formSubmit: function formSubmit() {
            o.share({
              provider: "weixin",
              scene: "WXSceneSession",
              type: 0,
              href: "http://uniapp.dcloud.io/",
              title: "快来帮朋友砍一刀吧~",
              summary: this.goodsInfo.name,
              imageUrl: "/static/img/home/" + this.goodsInfo.img,
              success: function success(t) {
                n("log", "success:" + JSON.stringify(t), " at components\\wechat.vue:110");
              },
              fail: function fail(t) {
                n("log", "fail:" + JSON.stringify(t), " at components\\wechat.vue:113");
              }
            });
          },
          formSubmit2: function formSubmit2() {
            o.share({
              provider: "weixin",
              scene: "WXSenceTimeline",
              type: 0,
              href: "http://uniapp.dcloud.io/goods=" + JSON.stringify(this.goodsInfo),
              title: "快来帮朋友砍一刀吧~",
              summary: this.goodsInfo.name,
              imageUrl: "/static/img/home/" + this.goodsInfo.img,
              success: function success(t) {
                n("log", "success:" + JSON.stringify(t), " at components\\wechat.vue:128");
              },
              fail: function fail(t) {
                n("log", "fail:" + JSON.stringify(t), " at components\\wechat.vue:131");
              }
            });
          }
        }
      };

      t.default = s;
    }).call(this, e("0de9")["default"], e("6e42")["default"]);
  },
  "351d": function d(n, t, e) {
    "use strict";

    var o,
        i = function i() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "b", function () {
      return i;
    }), e.d(t, "c", function () {
      return c;
    }), e.d(t, "a", function () {
      return o;
    });
  },
  "361d": function d(n, t, e) {},
  "4fd4": function fd4(n, t, e) {
    "use strict";

    e.r(t);
    var o = e("5525"),
        i = e("d710");

    for (var c in i) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(c);
    }

    e("5b06");
    var s,
        u = e("f0c5"),
        a = Object(u["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], s);
    t["default"] = a.exports;
  },
  5284: function _(n, t, e) {
    "use strict";

    (function (n, o) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var i = function i() {
        return e.e("components/wechat").then(e.bind(null, "4fd4"));
      },
          c = {
        props: ["goodsInfo", "money"],
        data: function data() {
          return {
            wechatShow: !1
          };
        },
        components: {
          wechat: i
        },
        onLoad: function onLoad() {
          n("log", this.goodsInfo, " at pages\\game\\share.vue:43");
        },
        methods: {
          handleSavePhotos: function handleSavePhotos() {
            this.goodsInfo.money = this.money, this.goodsInfo.game = "拍卖", n("log", this.goodsInfo, " at pages\\game\\share.vue:49"), o.navigateTo({
              url: "../order/base/createOrder?goodsInfo=" + JSON.stringify(this.goodsInfo)
            });
          },
          share: function share() {
            this.wechatShow = !0;
          }
        }
      };

      t.default = c;
    }).call(this, e("0de9")["default"], e("6e42")["default"]);
  },
  5525: function _(n, t, e) {
    "use strict";

    var o = {
      "tki-qrcode": function tkiQrcode() {
        return Promise.all([e.e("common/vendor"), e.e("components/tki-qrcode/tki-qrcode")]).then(e.bind(null, "4ea3"));
      }
    },
        i = function i() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "b", function () {
      return i;
    }), e.d(t, "c", function () {
      return c;
    }), e.d(t, "a", function () {
      return o;
    });
  },
  "5b06": function b06(n, t, e) {
    "use strict";

    var o = e("f2b6"),
        i = e.n(o);
    i.a;
  },
  "80b4": function b4(n, t, e) {
    "use strict";

    e.r(t);
    var o = e("5284"),
        i = e.n(o);

    for (var c in o) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return o[n];
        });
      }(c);
    }

    t["default"] = i.a;
  },
  "9ca9": function ca9(n, t, e) {
    "use strict";

    var o = e("361d"),
        i = e.n(o);
    i.a;
  },
  d710: function d710(n, t, e) {
    "use strict";

    e.r(t);
    var o = e("14c6"),
        i = e.n(o);

    for (var c in o) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return o[n];
        });
      }(c);
    }

    t["default"] = i.a;
  },
  f2b6: function f2b6(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/wechat-create-component', {
  'components/wechat-create-component': function componentsWechatCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4fd4"));
  }
}, [['components/wechat-create-component']]]);
});
require('components/wechat.js');
__wxRoute = 'pages/address/base/popupSite';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/base/popupSite.js';

define('pages/address/base/popupSite.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/address/base/popupSite"], {
  "30a0": function a0(t, e, i) {
    "use strict";

    var s,
        n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        h = [];

    i.d(e, "b", function () {
      return n;
    }), i.d(e, "c", function () {
      return h;
    }), i.d(e, "a", function () {
      return s;
    });
  },
  "7af2": function af2(t, e, i) {},
  8081: function _(t, e, i) {
    "use strict";

    i.r(e);
    var s = i("30a0"),
        n = i("fa19");

    for (var h in n) {
      "default" !== h && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(h);
    }

    i("8f92");
    var o,
        r = i("f0c5"),
        a = Object(r["a"])(n["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], o);
    e["default"] = a.exports;
  },
  "8f92": function f92(t, e, i) {
    "use strict";

    var s = i("7af2"),
        n = i.n(s);
    n.a;
  },
  ae47: function ae47(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var s = n(i("a34a"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t, e, i, s, n, h, o) {
      try {
        var r = t[h](o),
            a = r.value;
      } catch (u) {
        return void i(u);
      }

      r.done ? e(a) : Promise.resolve(a).then(s, n);
    }

    function o(t) {
      return function () {
        var e = this,
            i = arguments;
        return new Promise(function (s, n) {
          var o = t.apply(e, i);

          function r(t) {
            h(o, s, n, r, a, "next", t);
          }

          function a(t) {
            h(o, s, n, r, a, "throw", t);
          }

          r(void 0);
        });
      };
    }

    var r = {
      props: ["showSite"],
      data: function data() {
        return {
          siteNav: ["选择省", "选择市", "选择区"],
          showSiteIndex: 0,
          showProvIndex: 0,
          showCityIndex: 0,
          showRegIndex: 0,
          goback: 0,
          data: [],
          updateCity: [],
          province: [],
          showOne: !0,
          showTwo: !1,
          showThree: !1,
          citys: [],
          region: [],
          newAddressName: ""
        };
      },
      methods: {
        hideSpec: function hideSpec() {
          this.newAddressName ? this.$emit("func", !1, this.newAddressName) : this.$emit("func", !1);
        },
        showSiteNav: function showSiteNav(t) {
          0 == t ? (this.showOne = !0, this.showTwo = !1, this.showThree = !1, this.showProvIndex = this.goback) : 1 == t ? (this.showOne = !1, this.showTwo = !0, this.showThree = !1, this.showProvIndex = 0) : 2 == t && (this.showOne = !1, this.showTwo = !1, this.showThree = !0), this.showSiteIndex = t;
        },
        showProvNav: function showProvNav(t, e) {
          var i;
          this.siteNav[0] = t, this.showProvIndex = e, this.goback = e, i = this.data.filter(function (e) {
            return e.label == t;
          }), this.updateCity = i, this.citys = [], this.region = [];

          for (var s = 0; s < i.length; s++) {
            for (var n = 0; n < i[s].children.length; n++) {
              this.citys.push(i[s].children[n].label), this.siteNav[1] = this.citys[0];
            }
          }

          this.showOne = !1, this.showTwo = !0, this.showThree = !1, this.siteNav[2] = "选择区", this.showSiteIndex = 1, this.showProvIndex = 0, this.showCityIndex = 0;
        },
        showCityNav: function showCityNav(t, e) {
          this.siteNav[1] = t, this.showCityIndex = e;
          var i,
              s = this;
          this.region = [];

          for (var n = 0; n < s.updateCity.length; n++) {
            i = s.updateCity[n].children.filter(function (e) {
              return e.label === t;
            });
          }

          for (var h = 0; h < i[0].children.length; h++) {
            this.region.push(i[0].children[h].label);
          }

          this.showOne = !1, this.showTwo = !1, this.showThree = !0, this.siteNav[2] = this.region[0], this.showSiteIndex = 2, this.showRegIndex = 0;
        },
        overSelect: function overSelect(t, e) {
          this.siteNav[2] = t, this.showRegIndex = e, this.siteNav && (this.newAddressName = this.siteNav), this.hideSpec();
        },
        getCity: function () {
          var t = o(s.default.mark(function t() {
            var e, i;
            return s.default.wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, this.$api.citys("data");

                  case 2:
                    for (e = t.sent, this.data = e, i = 0; i < e.length; i++) {
                      this.province.push(e[i].label);
                    }

                  case 5:
                  case "end":
                    return t.stop();
                }
              }
            }, t, this);
          }));

          function e() {
            return t.apply(this, arguments);
          }

          return e;
        }()
      }
    };
    e.default = r;
  },
  fa19: function fa19(t, e, i) {
    "use strict";

    i.r(e);
    var s = i("ae47"),
        n = i.n(s);

    for (var h in s) {
      "default" !== h && function (t) {
        i.d(e, t, function () {
          return s[t];
        });
      }(h);
    }

    e["default"] = n.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/address/base/popupSite-create-component', {
  'pages/address/base/popupSite-create-component': function pagesAddressBasePopupSiteCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8081"));
  }
}, [['pages/address/base/popupSite-create-component']]]);
});
require('pages/address/base/popupSite.js');
__wxRoute = 'pages/category/base/head';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/base/head.js';

define('pages/category/base/head.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/category/base/head"], {
  3053: function _(t, n, e) {
    "use strict";

    var a,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return o;
    }), e.d(n, "a", function () {
      return a;
    });
  },
  6145: function _(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("3053"),
        u = e("b1bd");

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    e("fd97");
    var r,
        f = e("f0c5"),
        c = Object(f["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], r);
    n["default"] = c.exports;
  },
  b1bd: function b1bd(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("fffa"),
        u = e.n(a);

    for (var o in a) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(o);
    }

    n["default"] = u.a;
  },
  d76e: function d76e(t, n, e) {},
  fd97: function fd97(t, n, e) {
    "use strict";

    var a = e("d76e"),
        u = e.n(a);
    u.a;
  },
  fffa: function fffa(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = u(e("6467"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var o = {
        data: function data() {
          return {
            inp_text: ""
          };
        },
        methods: {
          goBack: function goBack() {
            t.navigateBack();
          },
          seek: function seek() {
            this.request({
              url: a.default.search,
              method: "POST",
              data: {
                goods_name: this.inp_text
              },
              success: function success(n) {
                0 == n.error_code ? t.navigateTo({
                  url: "./toCategory?goodsInfo=" + JSON.stringify(n.data)
                }) : t.showToast({
                  icon: "none",
                  title: n.data
                });
              }
            });
          }
        }
      };
      n.default = o;
    }).call(this, e("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/category/base/head-create-component', {
  'pages/category/base/head-create-component': function pagesCategoryBaseHeadCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6145"));
  }
}, [['pages/category/base/head-create-component']]]);
});
require('pages/category/base/head.js');
__wxRoute = 'pages/game/share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/game/share.js';

define('pages/game/share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/game/share"], {
  "0718": function _(n, t, e) {
    "use strict";

    e.r(t);
    var o = e("351d"),
        a = e("80b4");

    for (var u in a) {
      "default" !== u && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(u);
    }

    e("9ca9");
    var r,
        s = e("f0c5"),
        c = Object(s["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], r);
    t["default"] = c.exports;
  },
  "351d": function d(n, t, e) {
    "use strict";

    var o,
        a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    e.d(t, "b", function () {
      return a;
    }), e.d(t, "c", function () {
      return u;
    }), e.d(t, "a", function () {
      return o;
    });
  },
  "361d": function d(n, t, e) {},
  5284: function _(n, t, e) {
    "use strict";

    (function (n, o) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var a = function a() {
        return e.e("components/wechat").then(e.bind(null, "4fd4"));
      },
          u = {
        props: ["goodsInfo", "money"],
        data: function data() {
          return {
            wechatShow: !1
          };
        },
        components: {
          wechat: a
        },
        onLoad: function onLoad() {
          n("log", this.goodsInfo, " at pages\\game\\share.vue:43");
        },
        methods: {
          handleSavePhotos: function handleSavePhotos() {
            this.goodsInfo.money = this.money, this.goodsInfo.game = "拍卖", n("log", this.goodsInfo, " at pages\\game\\share.vue:49"), o.navigateTo({
              url: "../order/base/createOrder?goodsInfo=" + JSON.stringify(this.goodsInfo)
            });
          },
          share: function share() {
            this.wechatShow = !0;
          }
        }
      };

      t.default = u;
    }).call(this, e("0de9")["default"], e("6e42")["default"]);
  },
  "80b4": function b4(n, t, e) {
    "use strict";

    e.r(t);
    var o = e("5284"),
        a = e.n(o);

    for (var u in o) {
      "default" !== u && function (n) {
        e.d(t, n, function () {
          return o[n];
        });
      }(u);
    }

    t["default"] = a.a;
  },
  "9ca9": function ca9(n, t, e) {
    "use strict";

    var o = e("361d"),
        a = e.n(o);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/game/share-create-component', {
  'pages/game/share-create-component': function pagesGameShareCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0718"));
  }
}, [['pages/game/share-create-component']]]);
});
require('pages/game/share.js');
__wxRoute = 'pages/good/base/popupSpec';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/good/base/popupSpec.js';

define('pages/good/base/popupSpec.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/good/base/popupSpec"], {
  "0325": function _(n, t, e) {
    "use strict";

    var o = e("704b"),
        u = e.n(o);
    u.a;
  },
  "704b": function b(n, t, e) {},
  9728: function _(n, t, e) {
    "use strict";

    e.r(t);
    var o = e("da95"),
        u = e.n(o);

    for (var c in o) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return o[n];
        });
      }(c);
    }

    t["default"] = u.a;
  },
  d8c3: function d8c3(n, t, e) {
    "use strict";

    var o,
        u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "b", function () {
      return u;
    }), e.d(t, "c", function () {
      return c;
    }), e.d(t, "a", function () {
      return o;
    });
  },
  da95: function da95(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var o = function o() {
      return e.e("components/counter").then(e.bind(null, "d64e"));
    },
        u = {
      props: ["spaceInfo", "goodsInfo", "goodsSpec"],
      data: function data() {
        return {
          isShow: "",
          data: {
            color_name: "",
            goods_id: "",
            id: "",
            kucun: "",
            price_one: "",
            thumbimg: ""
          }
        };
      },
      methods: {
        hideSpec: function hideSpec() {
          this.$emit("func", this.data, !1);
        },
        setSelectSpec: function setSelectSpec(n) {
          this.data = n;
        },
        bridge: function bridge() {
          this.data = this.goodsSpec[0];
        },
        minus: function minus() {
          this.$emit("minus");
        },
        add: function add() {
          this.$emit("add");
        }
      },
      components: {
        counter: o
      }
    };

    t.default = u;
  },
  e0d1: function e0d1(n, t, e) {
    "use strict";

    e.r(t);
    var o = e("d8c3"),
        u = e("9728");

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    e("0325");
    var i,
        a = e("f0c5"),
        r = Object(a["a"])(u["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
    t["default"] = r.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/good/base/popupSpec-create-component', {
  'pages/good/base/popupSpec-create-component': function pagesGoodBasePopupSpecCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e0d1"));
  }
}, [['pages/good/base/popupSpec-create-component']]]);
});
require('pages/good/base/popupSpec.js');
__wxRoute = 'pages/good/goodsEval';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/good/goodsEval.js';

define('pages/good/goodsEval.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/good/goodsEval"], {
  "08b1": function b1(t, n, e) {},
  "0a93": function a93(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("3f0b"),
        u = e.n(a);

    for (var o in a) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(o);
    }

    n["default"] = u.a;
  },
  3004: function _(t, n, e) {
    "use strict";

    var a = e("08b1"),
        u = e.n(a);
    u.a;
  },
  "3f0b": function f0b(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: {
          goodsData: Object
        },
        data: function data() {
          return {};
        },
        methods: {
          toRatings: function toRatings() {
            t.setStorageSync("comments", this.goodsData), t.navigateTo({
              url: "./base/ratings"
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  cb44: function cb44(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("f3ed"),
        u = e("0a93");

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    e("3004");
    var r,
        c = e("f0c5"),
        f = Object(c["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], r);
    n["default"] = f.exports;
  },
  f3ed: function f3ed(t, n, e) {
    "use strict";

    var a,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return o;
    }), e.d(n, "a", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/good/goodsEval-create-component', {
  'pages/good/goodsEval-create-component': function pagesGoodGoodsEvalCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cb44"));
  }
}, [['pages/good/goodsEval-create-component']]]);
});
require('pages/good/goodsEval.js');
__wxRoute = 'pages/good/goodsHeader';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/good/goodsHeader.js';

define('pages/good/goodsHeader.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/good/goodsHeader"], {
  2258: function _(n, t, u) {
    "use strict";

    var c,
        e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    u.d(t, "b", function () {
      return e;
    }), u.d(t, "c", function () {
      return a;
    }), u.d(t, "a", function () {
      return c;
    });
  },
  4619: function _(n, t, u) {
    "use strict";

    var c = u("bcc9"),
        e = u.n(c);
    e.a;
  },
  "4fbf": function fbf(n, t, u) {
    "use strict";

    u.r(t);
    var c = u("f4d5"),
        e = u.n(c);

    for (var a in c) {
      "default" !== a && function (n) {
        u.d(t, n, function () {
          return c[n];
        });
      }(a);
    }

    t["default"] = e.a;
  },
  bcc9: function bcc9(n, t, u) {},
  cf08: function cf08(n, t, u) {
    "use strict";

    u.r(t);
    var c = u("2258"),
        e = u("4fbf");

    for (var a in e) {
      "default" !== a && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(a);
    }

    u("4619");
    var f,
        o = u("f0c5"),
        r = Object(o["a"])(e["default"], c["b"], c["c"], !1, null, null, null, !1, c["a"], f);
    t["default"] = r.exports;
  },
  f4d5: function f4d5(n, t, u) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var u = {
        data: function data() {
          return {
            showBack: !0
          };
        },
        onLoad: function onLoad() {},
        methods: {
          back: function back() {
            n.navigateBack();
          }
        }
      };
      t.default = u;
    }).call(this, u("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/good/goodsHeader-create-component', {
  'pages/good/goodsHeader-create-component': function pagesGoodGoodsHeaderCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cf08"));
  }
}, [['pages/good/goodsHeader-create-component']]]);
});
require('pages/good/goodsHeader.js');
__wxRoute = 'pages/home/base/pageHeader';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/base/pageHeader.js';

define('pages/home/base/pageHeader.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home/base/pageHeader"], {
  "1bb1": function bb1(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("372f"),
        u = n.n(a);

    for (var o in a) {
      "default" !== o && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(o);
    }

    t["default"] = u.a;
  },
  "1be2": function be2(e, t, n) {
    "use strict";

    var a,
        u = function u() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        o = [];

    n.d(t, "b", function () {
      return u;
    }), n.d(t, "c", function () {
      return o;
    }), n.d(t, "a", function () {
      return a;
    });
  },
  "372f": function f(e, t, n) {
    "use strict";

    (function (e, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var u = o(n("6467"));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var r = {
        data: function data() {
          return {
            inp_text: ""
          };
        },
        methods: {
          goCart: function goCart() {
            this.$emit("func");
          },
          seek: function seek() {
            this.request({
              url: u.default.search,
              method: "POST",
              data: {
                goods_name: this.inp_text
              },
              success: function success(t) {
                e("log", t, " at pages\\home\\base\\pageHeader.vue:45"), 0 == t.error_code ? a.navigateTo({
                  url: "../category/toCategory?goodsInfo=" + JSON.stringify(t.data)
                }) : a.showToast({
                  icon: "none",
                  title: t.data
                });
              }
            });
          },
          goCode: function goCode() {
            a.scanCode({
              success: function success(t) {
                e("log", "条码内容：" + t.result, " at pages\\home\\base\\pageHeader.vue:63");
                var n = JSON.parse(t.result);
                a.reLaunch({
                  url: "/pages/game/index?goodsInfo=" + JSON.stringify(n)
                });
              }
            });
          }
        }
      };
      t.default = r;
    }).call(this, n("0de9")["default"], n("6e42")["default"]);
  },
  a6cb: function a6cb(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("1be2"),
        u = n("1bb1");

    for (var o in u) {
      "default" !== o && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(o);
    }

    n("dbbc");
    var r,
        c = n("f0c5"),
        s = Object(c["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], r);
    t["default"] = s.exports;
  },
  d0b6: function d0b6(e, t, n) {},
  dbbc: function dbbc(e, t, n) {
    "use strict";

    var a = n("d0b6"),
        u = n.n(a);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/home/base/pageHeader-create-component', {
  'pages/home/base/pageHeader-create-component': function pagesHomeBasePageHeaderCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a6cb"));
  }
}, [['pages/home/base/pageHeader-create-component']]]);
});
require('pages/home/base/pageHeader.js');
__wxRoute = 'pages/home/base/pageHot';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/base/pageHot.js';

define('pages/home/base/pageHot.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home/base/pageHot"], {
  "00b0": function b0(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("6e5f"),
        u = e.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  "42c0": function c0(t, n, e) {
    "use strict";

    var o = e("eb93"),
        u = e.n(o);
    u.a;
  },
  4342: function _(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("9203"),
        u = e("00b0");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("42c0");
    var i,
        r = e("f0c5"),
        c = Object(r["a"])(u["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
    n["default"] = c.exports;
  },
  "6e5f": function e5f(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: ["hotList", "showTitle"],
        data: function data() {
          return {
            hotLists: this.hotList
          };
        },
        methods: {
          navToDetailPage: function navToDetailPage(n) {
            t.navigateTo({
              url: "../good/goods?goods_id=" + n.id
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  9203: function _(t, n, e) {
    "use strict";

    var o,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return a;
    }), e.d(n, "a", function () {
      return o;
    });
  },
  eb93: function eb93(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/home/base/pageHot-create-component', {
  'pages/home/base/pageHot-create-component': function pagesHomeBasePageHotCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4342"));
  }
}, [['pages/home/base/pageHot-create-component']]]);
});
require('pages/home/base/pageHot.js');
__wxRoute = 'pages/pay/base/payHeader';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/base/payHeader.js';

define('pages/pay/base/payHeader.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/pay/base/payHeader"], {
  "280e": function e(n, t, _e) {
    "use strict";

    var a,
        u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    _e.d(t, "b", function () {
      return u;
    }), _e.d(t, "c", function () {
      return r;
    }), _e.d(t, "a", function () {
      return a;
    });
  },
  "2a85": function a85(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("280e"),
        u = e("9959");

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    e("4151");
    var c,
        f = e("f0c5"),
        i = Object(f["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], c);
    t["default"] = i.exports;
  },
  4151: function _(n, t, e) {
    "use strict";

    var a = e("f509"),
        u = e.n(a);
    u.a;
  },
  9959: function _(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("a440"),
        u = e.n(a);

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    t["default"] = u.a;
  },
  a440: function a440(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = {
      props: ["addressData", "hideTime"],
      data: function data() {
        return {};
      }
    };
    t.default = a;
  },
  f509: function f509(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/pay/base/payHeader-create-component', {
  'pages/pay/base/payHeader-create-component': function pagesPayBasePayHeaderCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2a85"));
  }
}, [['pages/pay/base/payHeader-create-component']]]);
});
require('pages/pay/base/payHeader.js');

__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"6b48":function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");r(n("66fd"));var e=r(n("ce4e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},7402:function(t,e,n){"use strict";n.r(e);var r=n("74a1"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=a.a},"74a1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),a=u(n("6467"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,a,u,o){try{var i=t[u](o),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var u=t.apply(e,n);function i(t){o(u,r,a,i,c,"next",t)}function c(t){o(u,r,a,i,c,"throw",t)}i(void 0)})}}var c=function(){return Promise.all([n.e("common/vendor"),n.e("pages/home/base/pageHeader")]).then(n.bind(null,"a6cb"))},s=function(){return n.e("pages/home/base/pageHot").then(n.bind(null,"4342"))},f={data:function(){return{swiperList:[],categoryList:[],currentSwiper:0,hotList:[],showTitle:!0}},components:{pageHeader:c,pageHot:s},onLoad:function(){this.initData()},methods:{initData:function(){var t=i(r.default.mark(function t(){var e=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.request({url:a.default.get_banner,method:"POST",success:function(t){e.swiperList=t.data}}),this.request({url:a.default.get_hotgoods,method:"POST",success:function(t){e.hotList=t.data}}),this.request({url:a.default.get_bigclass,success:function(t){e.categoryList=t.data}});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),swiperChange:function(t){this.currentSwiper=t.detail.current},toCategory:function(e){t.navigateTo({url:"../category/toCategory?goods_id="+e})},toCart:function(){t.switchTab({url:"../cart/cart"})}}};e.default=f}).call(this,n("6e42")["default"])},8461:function(t,e,n){"use strict";var r=n("ad96"),a=n.n(r);a.a},ad96:function(t,e,n){},ca43:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},ce4e:function(t,e,n){"use strict";n.r(e);var r=n("ca43"),a=n("7402");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("8461");var o,i=n("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports}},[["6b48","common/runtime","common/vendor"]]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/order/base/createOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/base/createOrder.js';

define('pages/order/base/createOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/base/createOrder"],{"0a81":function(e,t,n){},"14b2":function(e,t,n){"use strict";var o=n("0a81"),r=n.n(o);r.a},1745:function(e,t,n){"use strict";n.r(t);var o=n("5cf0"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},"184f":function(e,t,n){"use strict";var o,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},"5cf0":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n("a34a")),a=s(n("6467"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o,r,a,s){try{var u=e[a](s),i=u.value}catch(d){return void n(d)}u.done?t(i):Promise.resolve(i).then(o,r)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function s(e){u(a,o,r,s,i,"next",e)}function i(e){u(a,o,r,s,i,"throw",e)}s(void 0)})}}var d=function(){return Promise.all([n.e("common/vendor"),n.e("components/popupPay")]).then(n.bind(null,"70e2"))},c={data:function(){return{car_goodsInfo:[],goodsInfo:[],maskState:0,desc:"",count:"",sum:"",addressData:{shou_name:"",shou_tell:"",province:"",area:"",address:"",mo_ren:""},showPay:!1,set_dizhi:"",key:!1}},onLoad:function(t){var n=this;t.car_goodsInfo?(this.key=!0,this.goodsInfo.push(JSON.parse(t.car_goodsInfo))):this.goodsInfo.push(JSON.parse(t.goodsInfo)),e("log",this.goodsInfo," at pages\\order\\base\\createOrder.vue:108"),this.goodsInfo.forEach(function(e){n.count+=e.num,n.sum=e.num*e.price_one,n.sum=n.sum.toFixed(2)}),this.initData()},components:{popupPay:d},methods:{initData:function(){var e=i(r.default.mark(function e(){var t=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.request({url:a.default.get_address,method:"POST",success:function(e){0===e.error_code&&(t.addressData=e.data.filter(function(e){return 1==e.mo_ren}),t.addressData=t.addressData[0],t.set_dizhi="更改地址"),t.addressData.mo_ren||(t.set_dizhi="设置地址")}});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),numberChange:function(e){this.number=e.number},changePayType:function(e){this.payType=e},submit:function(){if(this.key){var t=parseInt(this.sum);e("log",this.goodsInfo[0].id,this.addressData.id,t," at pages\\order\\base\\createOrder.vue:148");var n="";n+=this.goodsInfo[0].id,o.showLoading({title:"订单生成中..."},500);var r=this;setTimeout(function(){r.request({url:a.default.add_order,method:"POST",data:{car_ids:n,user_address:r.addressData.id,all_price:t},success:function(e){0==e.error_code&&(o.hideLoading(),r.showPay=!0,r.$refs.Series.Payment())}})},1e3)}else{e("log","666666"," at pages\\order\\base\\createOrder.vue:174");var s=this.goodsInfo[0].goods_id,u=this.goodsInfo[0].id,i=this.goodsInfo[0].num,d=this.addressData.id,c=parseInt(this.sum);o.showLoading({title:"订单生成中..."},500);var f=this;setTimeout(function(){e("log","123"," at pages\\order\\base\\createOrder.vue:186"),f.request({url:a.default.on_buy,method:"POST",data:{goods_id:s,child_id:u,num:i,user_address:d,all_price:c},success:function(t){e("log",t," at pages\\order\\base\\createOrder.vue:198"),0==t.error_code&&(o.hideLoading(),f.showPay=!0,f.$refs.Series.Payment())}})},1e3)}},setPay:function(e){this.showPay=e},stopPrevent:function(){}}};t.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},"9c2f":function(e,t,n){"use strict";n.r(t);var o=n("184f"),r=n("1745");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("14b2");var s,u=n("f0c5"),i=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=i.exports},df85:function(e,t,n){"use strict";(function(e){n("1eb0"),n("921b");o(n("66fd"));var t=o(n("9c2f"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["df85","common/runtime","common/vendor"]]]);
});
require('pages/order/base/createOrder.js');
__wxRoute = 'pages/pay/toPay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/toPay.js';

define('pages/pay/toPay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/toPay"],{"07dd":function(e,t,n){"use strict";n.r(t);var a=n("5b85"),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=u.a},"467a":function(e,t,n){},"5b85":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return n.e("pages/pay/base/payHeader").then(n.bind(null,"2a85"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/popupPay")]).then(n.bind(null,"70e2"))},o={data:function(){return{showPay:!1,addressData:{name:"",mobile:"",addressName:"",address:"",area:"",default:""}}},components:{payHeader:a,popupPay:u},methods:{toPay:function(){this.showPay=!0,this.$refs.Series.Payment()},setPay:function(e){this.showPay=e}},onLoad:function(t){this.addressData=JSON.parse(t.addressData),e("log",this.addressData," at pages\\pay\\toPay.vue:111")}};t.default=o}).call(this,n("0de9")["default"])},"99f1":function(e,t,n){"use strict";var a=n("467a"),u=n.n(a);u.a},"9e73":function(e,t,n){"use strict";var a,u=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return u}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a})},ad40:function(e,t,n){"use strict";n.r(t);var a=n("9e73"),u=n("07dd");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("99f1");var r,s=n("f0c5"),d=Object(s["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=d.exports},e324:function(e,t,n){"use strict";(function(e){n("1eb0"),n("921b");a(n("66fd"));var t=a(n("ad40"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["e324","common/runtime","common/vendor"]]]);
});
require('pages/pay/toPay.js');
__wxRoute = 'pages/pay/endOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/endOrder.js';

define('pages/pay/endOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/endOrder"],{"07fb":function(e,n,t){"use strict";(function(e){t("1eb0"),t("921b");o(t("66fd"));var n=o(t("c4a0"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},3008:function(e,n,t){"use strict";var o=t("be19"),a=t.n(o);a.a},"743b":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return t.e("pages/pay/base/payHeader").then(t.bind(null,"2a85"))},a=function(){return Promise.all([t.e("common/vendor"),t.e("components/popupPay")]).then(t.bind(null,"70e2"))},u={data:function(){return{goodsInfo:[],addressData:{name:"",mobile:"",addressName:"",address:"",area:"",default:""}}},components:{payHeader:o,popupPay:a},methods:{navTo:function(n){"去评价"==n.iconTitle?e.navigateTo({url:"../order/base/orderComment?goodsInfo="+JSON.stringify(n)}):"提醒发货"==n.iconTitle?(e.showLoading({title:"发送中..."}),setTimeout(function(){e.hideLoading(),e.showToast({icon:"success",title:"已成功提示商家"}),setTimeout(function(){e.navigateTo({url:"../order/order"})},200)},1e3)):"确认收货"==n.iconTitle&&e.showModal({title:"确认收货",content:"确定订单吗？",cancelText:"否",confirmText:"是",success:function(n){setTimeout(function(){e.showToast({icon:"success",title:"订单已完成"}),setTimeout(function(){e.navigateTo({url:"../order/order"})},500)},500)}})}},onLoad:function(e){this.goodsInfo=JSON.parse(e.goodsInfo)}};n.default=u}).call(this,t("6e42")["default"])},8358:function(e,n,t){"use strict";var o,a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return u}),t.d(n,"a",function(){return o})},"83c9":function(e,n,t){"use strict";t.r(n);var o=t("743b"),a=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n["default"]=a.a},be19:function(e,n,t){},c4a0:function(e,n,t){"use strict";t.r(n);var o=t("8358"),a=t("83c9");for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);t("3008");var r,i=t("f0c5"),c=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=c.exports}},[["07fb","common/runtime","common/vendor"]]]);
});
require('pages/pay/endOrder.js');
__wxRoute = 'pages/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/category.js';

define('pages/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"006f":function(t,e,n){"use strict";n.r(e);var o=n("65db"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},"5e84":function(t,e,n){"use strict";n.r(e);var o=n("f141"),a=n("006f");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("c41a");var i,u=n("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=s.exports},"65db":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a")),a=r(n("6467"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,a,r,i){try{var u=t[r](i),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(o,a)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(o,a){var r=t.apply(e,n);function u(t){i(r,o,a,u,s,"next",t)}function s(t){i(r,o,a,u,s,"throw",t)}u(void 0)})}}var s=function(){return Promise.all([n.e("common/vendor"),n.e("pages/home/base/pageHeader")]).then(n.bind(null,"a6cb"))},c={data:function(){return{categoryList:[],categoryListCur:[],addCategory:[],showCategoryIndex:0,currentPage:1,pagesize:7,atIndex:0,footer_Text:"暂无数据"}},components:{pageHead:s},methods:{initData:function(){var t=u(o.default.mark(function t(e){var n=this;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.categoryListCur=[],this.request({url:a.default.get_bigclass,method:"POST",success:function(t){n.categoryList=t.data}}),this.request({url:a.default.get_bc_goods,method:"POST",data:{b_class:e},success:function(t){0==t.error_code?(n.goodsList=t.data,n.footer_Text="数据加载中...",n.get_goodsCur()):n.footer_Text="暂无数据"}});case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),get_goodsCur:function(){var e=this,n=this.goodsList;this.addCategory=n.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize),this.addCategory.length>0?(t.hideLoading(),this.addCategory.forEach(function(t){e.categoryListCur.push(t)}),this.addCategory.length<7&&(this.addCategory.forEach(function(t){e.categoryListCur.push(t)}),this.footer_Text="到底了")):t.hideLoading()},showCategory:function(e){this.showCategoryIndex=e.id-1,t.showLoading({title:"加载中..."}),this.initData(e.id)},toGoods:function(e){t.navigateTo({url:"../good/goods?goods_id="+e.id})}},onLoad:function(t){this.initData(1)},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){t.showLoading({title:"加载中..."}),this.get_goodsCur(),this.currentPage++}};e.default=c}).call(this,n("6e42")["default"])},"8c65":function(t,e,n){},c1f3:function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");o(n("66fd"));var e=o(n("5e84"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c41a:function(t,e,n){"use strict";var o=n("8c65"),a=n.n(o);a.a},f141:function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o})}},[["c1f3","common/runtime","common/vendor"]]]);
});
require('pages/category/category.js');
__wxRoute = 'pages/category/toCategory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/toCategory.js';

define('pages/category/toCategory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/toCategory"],{"49a8":function(t,e,o){"use strict";o.r(e);var n=o("e5b0"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},"7c70":function(t,e,o){"use strict";o.r(e);var n=o("f200"),a=o("49a8");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("7d3b");var r,s=o("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=u.exports},"7d3b":function(t,e,o){"use strict";var n=o("f930"),a=o.n(n);a.a},e5b0:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(o("a34a")),i=r(o("6467"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,o,n,a,i,r){try{var s=t[i](r),u=s.value}catch(c){return void o(c)}s.done?e(u):Promise.resolve(u).then(n,a)}function u(t){return function(){var e=this,o=arguments;return new Promise(function(n,a){var i=t.apply(e,o);function r(t){s(i,n,a,r,u,"next",t)}function u(t){s(i,n,a,r,u,"throw",t)}r(void 0)})}}var c=function(){return o.e("pages/category/base/head").then(o.bind(null,"6145"))},d=function(){return o.e("pages/home/base/pageHot").then(o.bind(null,"4342"))},f={data:function(){return{goodsList:[],goodsListCur:[],addCategory:[],showTitle:!1,categoryList:[],currentPage:1,pagesize:7,showCategoryIndex:0,footer_Text:"暂无数据"}},components:{pageHead:c,pageHot:d},onLoad:function(e){if(e.goodsInfo){var o=JSON.parse(e.goodsInfo);this.goodsList=o,this.footer_Text="数据加载中...",this.get_goodsCur()}else if(e.goods_id){this.showCategoryIndex=e.goods_id-1;var n=e.goods_id;t("log",n," at pages\\category\\toCategory.vue:59"),this.initData(n)}},methods:{showCategory:function(t){this.showCategoryIndex=t.id-1,n.showLoading({title:"加载中..."}),this.initData(t.id)},initData:function(){var e=u(a.default.mark(function e(o){var n,r=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.goodsListCur=[],this.request({url:i.default.get_bc_goods,method:"POST",data:{b_class:o},success:function(e){t("log",e," at pages\\category\\toCategory.vue:84"),0==e.error_code?(r.goodsList=e.data,r.footer_Text="数据加载中...",r.get_goodsCur()):r.footer_Text="暂无数据"}}),e.next=4,this.$api.json("data");case 4:n=e.sent,this.categoryList=n.categoryList;case 6:case"end":return e.stop()}},e,this)}));function o(t){return e.apply(this,arguments)}return o}(),get_goodsCur:function(){var t=this,e=this.goodsList;this.addCategory=e.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize),this.addCategory.length>0?(n.hideLoading(),this.addCategory.forEach(function(e){t.goodsListCur.push(e)}),this.addCategory.length<7&&(this.addCategory.forEach(function(e){t.goodsListCur.push(e)}),this.footer_Text="到底了")):n.hideLoading()}},onPullDownRefresh:function(){setTimeout(function(){n.stopPullDownRefresh()},1e3)},onReachBottom:function(){n.showLoading({title:"加载中..."},50),this.get_goodsCur(),this.currentPage++}};e.default=f}).call(this,o("0de9")["default"],o("6e42")["default"])},f200:function(t,e,o){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"b",function(){return a}),o.d(e,"c",function(){return i}),o.d(e,"a",function(){return n})},f930:function(t,e,o){},fd0c:function(t,e,o){"use strict";(function(t){o("1eb0"),o("921b");n(o("66fd"));var e=n(o("7c70"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])}},[["fd0c","common/runtime","common/vendor"]]]);
});
require('pages/category/toCategory.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0199":function(e,t,n){"use strict";(function(e){n("1eb0"),n("921b");u(n("66fd"));var t=u(n("51b6"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},1765:function(e,t,n){"use strict";n.r(t);var u=n("6920"),r=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=r.a},3910:function(e,t,n){"use strict";var u=n("4a85"),r=n.n(u);r.a},"4a85":function(e,t,n){},"51b6":function(e,t,n){"use strict";n.r(t);var u=n("544f"),r=n("1765");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("3910");var a,i=n("f0c5"),c=Object(i["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=c.exports},"544f":function(e,t,n){"use strict";var u,r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return u})},6920:function(e,t,n){"use strict";(function(e,u){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a")),o=n("2f62"),a=i(n("6467"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,u,r,o,a){try{var i=e[o](a),c=i.value}catch(f){return void n(f)}i.done?t(c):Promise.resolve(c).then(u,r)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(u,r){var o=e.apply(t,n);function a(e){c(o,u,r,a,i,"next",e)}function i(e){c(o,u,r,a,i,"throw",e)}a(void 0)})}}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={data:function(){return{serviceShow:!1,InfoShow:!1,jifen:0,user_info:"",user_phone:""}},computed:s({},(0,o.mapState)(["hasLogin","userInfo"])),methods:{navTo:function(t){this.hasLogin||(t="/pages/public/login"),e.navigateTo({url:t})},off:function(e){this.serviceShow=e},offInfo:function(e){this.InfoShow=e},initData:function(){var e=f(r.default.mark(function e(){var t=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.request({url:a.default.get_jifen,method:"POST",success:function(e){u("log",e," at pages\\user\\user.vue:121"),1==e.err_code&&(t.jifen=e.data)}}),this.request({url:a.default.get_news,method:"POST",success:function(e){u("log",e," at pages\\user\\user.vue:131"),t.user_info=e.data}}),this.request({url:a.default.get_kefu,method:"POST",success:function(e){t.user_phone=e.data}});case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},onLoad:function(){this.initData()}};t.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["0199","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/user/base/gameOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/base/gameOrder.js';

define('pages/user/base/gameOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/base/gameOrder"],{"3f2f":function(t,n,e){"use strict";(function(t){e("1eb0"),e("921b");r(e("66fd"));var n=r(e("587e"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"51ba":function(t,n,e){"use strict";(function(t,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(f){return void e(f)}i.done?n(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var a=t.apply(n,e);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)})}}var c=function(){return e.e("components/wechat").then(e.bind(null,"4fd4"))},f={data:function(){return{goodsInfo:[],money:"",wechatShow:!1,loadingText:"正在加载....",loading:!0,goods:!1}},components:{wechat:c},methods:{share:function(){var t=this;this.wechatShow=!0,setTimeout(function(){t.$refs.Series.qr()},10)},toOrder:function(n){n.game="拍卖",t.navigateTo({url:"../../order/base/createOrder?goodsInfo="+JSON.stringify(n)})},initData:function(){var t=i(o.default.mark(function t(){var n;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("data");case 2:n=t.sent,this.goodsInfo=n.orderLists,this.loading=!1,r("log",this.goodsInfo," at pages\\user\\base\\gameOrder.vue:69");case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()},onLoad:function(){this.initData()}};n.default=f}).call(this,e("6e42")["default"],e("0de9")["default"])},"587e":function(t,n,e){"use strict";e.r(n);var r=e("d3f7"),o=e("9d45");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("6404");var u,i=e("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=c.exports},6404:function(t,n,e){"use strict";var r=e("b08d"),o=e.n(r);o.a},"9d45":function(t,n,e){"use strict";e.r(n);var r=e("51ba"),o=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n["default"]=o.a},b08d:function(t,n,e){},d3f7:function(t,n,e){"use strict";var r,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return r})}},[["3f2f","common/runtime","common/vendor"]]]);
});
require('pages/user/base/gameOrder.js');
__wxRoute = 'pages/set/set';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/set.js';

define('pages/set/set.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{1866:function(t,n,e){"use strict";var u,o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return u})},4098:function(t,n,e){"use strict";(function(t){e("1eb0"),e("921b");u(e("66fd"));var n=u(e("fd4b"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"6b25":function(t,n,e){"use strict";var u=e("a437"),o=e.n(u);o.a},7955:function(t,n,e){"use strict";e.r(n);var u=e("ca77"),o=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=o.a},a437:function(t,n,e){},ca77:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("2f62"),o=r(e("6467"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},u=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.forEach(function(n){a(t,n,e[n])})}return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var i={data:function(){return{}},methods:c({},(0,u.mapMutations)(["logout"]),{navTo:function(n){t.navigateTo({url:n})},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&n.request({url:o.default.login_out,method:"POST",success:function(e){0==e.error_code&&(n.logout(),setTimeout(function(){t.navigateBack()},200))}})}})},switchChange:function(t){t.detail.value}})};n.default=i}).call(this,e("6e42")["default"])},fd4b:function(t,n,e){"use strict";e.r(n);var u=e("1866"),o=e("7955");for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);e("6b25");var c,a=e("f0c5"),i=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=i.exports}},[["4098","common/runtime","common/vendor"]]]);
});
require('pages/set/set.js');
__wxRoute = 'pages/set/base/setPhone';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/base/setPhone.js';

define('pages/set/base/setPhone.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/base/setPhone"],{"39c6":function(e,t,n){"use strict";var s,o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return s})},"3b3b":function(e,t,n){"use strict";var s=n("b8e4"),o=n.n(s);o.a},"6f4d":function(e,t,n){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("6467"));function a(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{phone:"",verify:"",password:"",logining:!0}},methods:{update:function(){var t=this,n=/^[1][3,4,5,7,8][0-9]{9}$/;if(n.test(this.phone)){var a=this.phone;this.request({url:o.default.get_code,method:"POST",data:{tell:a},success:function(n){e("log",n," at pages\\set\\base\\setPhone.vue:48"),0===n.error_code&&(t.logining=!1),s.showToast({icon:"success",title:"已发送,请注意查收"},500)}})}else s.showToast({title:"号码错误",icon:"none",duration:500}),s.vibrate({success:function(){e("log","success"," at pages\\set\\base\\setPhone.vue:66")}})},setUpdate:function(){this.password&&this.verify?this.request({url:o.default.edit_password,method:"POST",data:{code:this.verify,tell:this.phone,password:this.password},success:function(t){e("log",t," at pages\\set\\base\\setPhone.vue:89"),0==t.error_code&&(s.showToast({icon:"success",title:"成功修改密码!"},500),s.navigateBack())}}):s.showToast({title:"请输密码或验证码",size:26,icon:"none",duration:500})}}};t.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},"8e4a":function(e,t,n){"use strict";(function(e){n("1eb0"),n("921b");s(n("66fd"));var t=s(n("fb11"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},b8e4:function(e,t,n){},bb50:function(e,t,n){"use strict";n.r(t);var s=n("6f4d"),o=n.n(s);for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);t["default"]=o.a},fb11:function(e,t,n){"use strict";n.r(t);var s=n("39c6"),o=n("bb50");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("3b3b");var u,i=n("f0c5"),c=Object(i["a"])(o["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],u);t["default"]=c.exports}},[["8e4a","common/runtime","common/vendor"]]]);
});
require('pages/set/base/setPhone.js');
__wxRoute = 'pages/public/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/public/login.js';

define('pages/public/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/login"],{"20b8":function(t,e,n){"use strict";n.r(e);var r=n("d208"),i=n("4382");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("b090");var a,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=c.exports},4382:function(t,e,n){"use strict";n.r(e);var r=n("d5d1"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},b090:function(t,e,n){"use strict";var r=n("f27c"),i=n.n(r);i.a},d208:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r})},d5d1:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a")),o=n("2f62"),a=u(n("6467"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,r,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function a(t){c(o,r,i,a,u,"next",t)}function u(t){c(o,r,i,a,u,"throw",t)}a(void 0)})}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={data:function(){return{mobile:"",password:"",logining:!0}},onLoad:function(){},methods:l({},(0,o.mapMutations)(["login"]),{inputChange:function(t){var e=t.currentTarget.dataset.key;this[e]=t.detail.value,this.logining=!1},navBack:function(){t.navigateBack()},toRegist:function(){t.navigateTo({url:"./register"})},toLogin:function(){var e=s(i.default.mark(function e(){var n,o,u=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this.mobile,o=this.password,n){e.next=6;break}return t.showToast({icon:"none",title:"请输入手机号"}),e.abrupt("return");case 6:if(o){e.next=11;break}return t.showToast({icon:"none",title:"请输入密码"}),e.abrupt("return");case 11:this.request({url:a.default.login,method:"POST",data:{tell:this.mobile,password:this.password},success:function(e){if(r("log",e," at pages\\public\\login.vue:112"),0==e.error_code){var n={id:1,mobile:u.mobile,nickname:"砍砍用户".concat(u.mobile),portrait:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584357130382&di=99c11194936cc6efc617433713877360&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-501c31cde297a64e0710b6a2a592b156_hd.jpg"};u.login(n),t.switchTab({url:"../home/home"})}else t.showToast({icon:"none",title:"账号或密码错误"})}});case 12:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()})};e.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},d8ef:function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");r(n("66fd"));var e=r(n("20b8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f27c:function(t,e,n){}},[["d8ef","common/runtime","common/vendor"]]]);
});
require('pages/public/login.js');
__wxRoute = 'pages/public/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/public/register.js';

define('pages/public/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/register"],{"0bf5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),i=o(n("6467"));function o(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,i,o,u){try{var a=t[o](u),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function a(t){u(o,r,i,a,s,"next",t)}function s(t){u(o,r,i,a,s,"throw",t)}a(void 0)})}}var s={data:function(){return{mobile:"",verify:"",password:"",logining:!0,isVerify:!1,toVerify:!1,toRes:!1}},onLoad:function(){},methods:{inputChange:function(t){var e=t.currentTarget.dataset.key;this[e]=t.detail.value;var n=this.mobile,r=/^[1][3,4,5,7,8][0-9]{9}$/;r.test(n)?this.isVerify=!0:this.isVerify=!1},navBack:function(){setTimeout(function(){t.navigateTo({url:"./login"})},500)},huoqu:function(){var e=this,n=this.mobile;this.request({url:i.default.get_yan,method:"POST",data:{tell:n},success:function(n){e.logining=!1,t.showToast({icon:"success",title:"已发送,请注意查收"},500)}})},toRegister:function(){var e=a(r.default.mark(function e(){var n,o,u=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this.mobile,o=this.verify,this.password,n){e.next=6;break}return t.showToast({icon:"none",title:"请输入手机号"}),e.abrupt("return");case 6:if(o){e.next=11;break}return t.showToast({icon:"none",title:"请输入验证码"}),e.abrupt("return");case 11:this.request({url:i.default.zhuce,method:"POST",data:{code:this.verify},success:function(e){0===e.error_code?u.request({url:i.default.set_password,method:"POST",data:{tell:u.mobile,password:u.password},success:function(e){0==e.error_code&&(t.showToast({icon:"success",title:"注册成功!"},500),u.navBack())}}):t.showToast({icon:"none",title:"验证码错误"},500)}});case 12:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=s}).call(this,n("6e42")["default"])},"813e":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r})},a9cb:function(t,e,n){"use strict";n.r(e);var r=n("813e"),i=n("f9d1");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("f808");var u,a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=s.exports},eb2b:function(t,e,n){},f7f4:function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");r(n("66fd"));var e=r(n("a9cb"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f808:function(t,e,n){"use strict";var r=n("eb2b"),i=n.n(r);i.a},f9d1:function(t,e,n){"use strict";n.r(e);var r=n("0bf5"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a}},[["f7f4","common/runtime","common/vendor"]]]);
});
require('pages/public/register.js');
__wxRoute = 'pages/good/goods';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/good/goods.js';

define('pages/good/goods.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/good/goods"],{"0bde":function(t,o,e){"use strict";(function(t){e("1eb0"),e("921b");n(e("66fd"));var o=n(e("cf62"));function n(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("6e42")["createPage"])},1204:function(t,o,e){"use strict";e.r(o);var n=e("2700"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(o,t,function(){return n[t]})}(s);o["default"]=i.a},2700:function(t,o,e){"use strict";(function(t,n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=r(e("a34a")),s=r(e("6467")),a=e("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function u(t,o,e,n,i,s,a){try{var r=t[s](a),u=r.value}catch(c){return void e(c)}r.done?o(u):Promise.resolve(u).then(n,i)}function c(t){return function(){var o=this,e=arguments;return new Promise(function(n,i){var s=t.apply(o,e);function a(t){u(s,n,i,a,r,"next",t)}function r(t){u(s,n,i,a,r,"throw",t)}a(void 0)})}}function d(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{},n=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(o){f(t,o,e[o])})}return t}function f(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var l=function(){return e.e("pages/good/goodsHeader").then(e.bind(null,"cf08"))},g=function(){return e.e("pages/good/base/popupSpec").then(e.bind(null,"e0d1"))},h=function(){return e.e("pages/good/goodsEval").then(e.bind(null,"cb44"))},p={data:function(){return{title_price:"",goodsInit:{},swiperList:[],goodsSpec:[],goodsInfo:{num:1,type:"",price:"",selectdata:"请选择 颜色 规格"},data:[],goodsData:[],currentSwiper:0,spaceInfo:{showSpace:!1},entTime:"",ids:[],key:""}},components:{goodsHeader:l,popupSpec:g,goodsEval:h},computed:d({},(0,a.mapState)(["hasLogin"])),methods:{initData:function(){var o=c(i.default.mark(function o(e){var n=this;return i.default.wrap(function(o){while(1)switch(o.prev=o.next){case 0:this.request({url:s.default.get_goods_detail,method:"POST",data:{goods_id:e},success:function(o){n.title_price=o.goods[0].price,n.goodsInit=o.goods[0],t("log",n.goodsInit," at pages\\good\\goods.vue:123"),o.data.forEach(function(t){n.swiperList.push(t.thumbimg)}),n.goodsSpec=o.data}}),this.request({url:s.default.get_goods_assess,method:"POST",data:{goods_id:e},success:function(t){0==t.error_code&&(n.goodsData=t.data)}});case 2:case"end":return o.stop()}},o,this)}));function e(t){return o.apply(this,arguments)}return e}(),swiperChange:function(t){this.currentSwiper=t.detail.current},setSelect:function(t,o){this.data=t,this.goodsInfo.type=t.color_name,this.goodsInit.price=t.price_one*this.goodsInfo.num,this.goodsInit.market_price=this.goodsInit.market_price*this.goodsInfo.num,this.spaceInfo.showSpace=o,this.goodsInfo.selectdata="已选择 : ".concat(t.color_name," ，数量 : ").concat(this.goodsInfo.num)},add:function(){this.goodsInfo.num++},minus:function(){this.goodsInfo.num<=1||this.goodsInfo.num--},showSpec:function(){this.spaceInfo.showSpace="ture",this.$refs.Series.bridge()},toGame:function(t){n.showToast({icon:"none",title:"维护中..."},2e3)},joinCart:function(){if(!this.hasLogin)return n.showToast({icon:"none",title:"请先去登录"}),void setTimeout(function(){n.navigateTo({url:"../public/login"})},1e3);this.goodsInfo.type?this.request({url:s.default.add_car,method:"POST",data:{goods_id:this.data.goods_id,child_id:this.data.id,num:this.goodsInfo.num},success:function(t){0==t.error_code?n.showToast({icon:"none",title:"成功加入购物车"}):n.showToast({icon:"none",title:"请先去登录"})}}):n.showToast({icon:"none",title:"请选择规格"})},toBuy:function(){if(!this.hasLogin)return n.showToast({icon:"none",title:"请先去登录"}),void setTimeout(function(){n.navigateTo({url:"../public/login"})},1e3);this.goodsInfo.type?(this.data.num=this.goodsInfo.num,this.data.old_money=this.goodsInit.market_price,this.data.game="商城",n.navigateTo({url:"../order/base/createOrder?goodsInfo="+JSON.stringify(this.data)})):n.showToast({icon:"none",title:"请选择规格"})}},onLoad:function(t){var o=t.goods_id;this.initData(o)}};o.default=p}).call(this,e("0de9")["default"],e("6e42")["default"])},"528a":function(t,o,e){},c9c2:function(t,o,e){"use strict";var n=e("528a"),i=e.n(n);i.a},cf62:function(t,o,e){"use strict";e.r(o);var n=e("e4ff"),i=e("1204");for(var s in i)"default"!==s&&function(t){e.d(o,t,function(){return i[t]})}(s);e("c9c2");var a,r=e("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);o["default"]=u.exports},e4ff:function(t,o,e){"use strict";var n,i=function(){var t=this,o=t.$createElement;t._self._c},s=[];e.d(o,"b",function(){return i}),e.d(o,"c",function(){return s}),e.d(o,"a",function(){return n})}},[["0bde","common/runtime","common/vendor"]]]);
});
require('pages/good/goods.js');
__wxRoute = 'pages/good/base/ratings';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/good/base/ratings.js';

define('pages/good/base/ratings.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/good/base/ratings"],{"11fa":function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");i(n("66fd"));var e=i(n("f418"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"3d2b":function(t,e,n){"use strict";n.r(e);var i=n("542b"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=o.a},"41e0":function(t,e,n){},"542b":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{labelIndex:0,ratingsList:[],videoContext:null,videoDirection:0,showFullscreenBtn:!0,videoSrc:"",showVideo:!0,clicked_list:[!1,!1,!1,!1,!1]}},onLoad:function(){var e=this;try{var n=t.getStorageSync("comments");n&&(n.forEach(function(t){t.time=e.timestampToTime(t.time)}),this.ratingsList=n)}catch(i){}},onReady:function(e){this.videoContext=t.createVideoContext("myVideo")},methods:{loadRatings:function(t){this.labelIndex=t},showBigImg:function(e,n){t.previewImage({current:e,urls:n})},playVideo:function(t){this.videoSrc=t,this.$nextTick(function(){this.videoContext.requestFullScreen({direction:0})})},videoPause:function(){this.videoSrc=""},viderFullscreen:function(t){t.detail.fullScreen?this.videoContext.play():this.videoContext.pause()},videoError:function(t){n("log",t," at pages\\good\\base\\ratings.vue:131")},timestampToTime:function(t){var e=t.toString();10==e.length&&(e*=1e3);var n=new Date(e),i=n.getFullYear()+"-",o=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",u=n.getDate()+" ",r=n.getHours()+":",a=n.getMinutes()+":",c=n.getSeconds();return i+o+u+r+a+c}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},8229:function(t,e,n){"use strict";var i=n("41e0"),o=n.n(i);o.a},eb25:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return i})},f418:function(t,e,n){"use strict";n.r(e);var i=n("eb25"),o=n("3d2b");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("8229");var r,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports}},[["11fa","common/runtime","common/vendor"]]]);
});
require('pages/good/base/ratings.js');
__wxRoute = 'pages/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cart/cart.js';

define('pages/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"0605":function(t,e,n){},4445:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("a34a")),s=u(n("6467")),c=n("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,o,s,c){try{var u=t[s](c),a=u.value}catch(r){return void n(r)}u.done?e(a):Promise.resolve(a).then(i,o)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var s=t.apply(e,n);function c(t){a(s,i,o,c,u,"next",t)}function u(t){a(s,i,o,c,u,"throw",t)}c(void 0)})}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(){return n.e("components/counter").then(n.bind(null,"d64e"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/popupPay")]).then(n.bind(null,"70e2"))},g={data:function(){return{goodsList:[],theIndex:null,oldIndex:null,isAllSelected:!1,selectedList:[],sumPrice:"0.00",showPay:!1,goods_pay:[]}},computed:l({},(0,c.mapState)(["hasLogin"])),components:{counter:h,popupPay:f},methods:{initData:function(){var t=r(o.default.mark(function t(){var e=this;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.request({url:s.default.get_car,method:"POST",success:function(t){0==t.error_code&&(e.goodsList=t.data)}});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),navToLogin:function(){t.navigateTo({url:"/pages/public/login"})},toPay:function(){"0.00"!=this.sumPrice&&(this.goods_pay.game="商城",t.navigateTo({url:"../order/base/createOrder?car_goodsInfo="+JSON.stringify(this.goods_pay)}))},setPay:function(t){this.showPay=t},handleSelectedAll:function(){var t=this;this.isAllSelected=!this.isAllSelected;var e=[];this.goodsList.forEach(function(n,i){n.selected=t.isAllSelected,e.push(n)}),this.selectedList=this.isAllSelected?e:[],this.sumPrice="0.00"},handleMulDelete:function(){while(this.selectedList.length>0)this.handleSingleDelete(this.selectedList[0]);this.isAllSelected=!1},add:function(t){t.num++,this.sum()},minus:function(t){t.num<=1||(t.num--,this.sum())},handleTouchStart:function(t,e){e.touches.length>1||(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},handleTouchMove:function(t,e){if(!(e.touches.length>1)){var n=e.touches[0].pageX-this.initXY[0],i=e.touches[0].pageY-this.initXY[1];Math.abs(n)<5||Math.abs(i)>Math.abs(n)||n<0&&(this.theIndex=t)}},handleTouchEnd:function(t,e){},handleCheckbox:function(t){this.goods_pay=[],this.goods_pay=t,this.goodsList.forEach(function(e,n){t.id!=e.id&&(e.selected=!1)}),t.selected=!t.selected,this.sum(),this.isAllSelected=!1},sum:function(){var t=this;this.sumPrice=0,this.goodsList.forEach(function(e,n){e.selected&&(t.sumPrice=e.num*e.price_one)}),this.sumPrice=this.sumPrice.toFixed(2)},handleSingleDelete:function(e){var n=this,o=e.id;this.request({url:s.default.del_car,method:"POST",data:{car_id:o},success:function(e){i("log",e," at pages\\cart\\cart.vue:246"),0==e.error_code&&(t.showToast({icon:"none",title:"删除成功"}),n.initData())}}),this.goodsList.splice(this.goodsList.indexOf(e),1),this.selectedList.splice(this.selectedList.indexOf(e),1),this.isAllSelected=this.goodsList.length>0&&this.isAllSelected,this.oldIndex=null,this.theIndex=null},handleGoodsInfo:function(e){i("log",e," at pages\\cart\\cart.vue:269"),t.navigateTo({url:"../good/goods?goods_id="+e.goods_id})}},onShow:function(){this.initData()},onLoad:function(){}};e.default=g}).call(this,n("6e42")["default"],n("0de9")["default"])},"6af5":function(t,e,n){"use strict";n.r(e);var i=n("4445"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},b862:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},c86a:function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");i(n("66fd"));var e=i(n("cd26"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},cd26:function(t,e,n){"use strict";n.r(e);var i=n("b862"),o=n("6af5");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("effa");var c,u=n("f0c5"),a=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=a.exports},effa:function(t,e,n){"use strict";var i=n("0605"),o=n.n(i);o.a}},[["c86a","common/runtime","common/vendor"]]]);
});
require('pages/cart/cart.js');
__wxRoute = 'pages/order/order';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/order.js';

define('pages/order/order.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"05e2":function(e,t,n){"use strict";n.r(t);var r=n("155e"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=o.a},"155e":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("a34a")),a=i(n("6467"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){s(a,r,o,i,u,"next",e)}function u(e){s(a,r,o,i,u,"throw",e)}i(void 0)})}}var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/popupPay")]).then(n.bind(null,"70e2"))},d={data:function(){return{orderNav:["全部","待付款","代发货","待收货","已完成"],showOrderIndex:0,showOrder:[],orderLists:[],dfk_order:[],dfh_order:[],dsh_order:[],end_order:[],loadingText:"正在加载....",loading:!0,showPay:!1,sum:""}},components:{popupPay:c},onShow:function(){},methods:{showOrderNav:function(e){switch(this.showOrderIndex=e,e){case 0:this.showOrder=this.orderLists;break;case 1:this.showOrder=this.dfk_order;break;case 2:this.showOrder=this.dfh_order;break;case 3:this.showOrder=this.dsh_order;break;case 4:this.showOrder=this.end_order;break}},initData:function(){var t=u(o.default.mark(function t(){var n=this;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.request({url:a.default.all_order,method:"POST",success:function(t){e("log",t," at pages\\order\\order.vue:94"),0==t.error_code&&(n.orderLists=t.data,n.showOrder=t.data,t.data.forEach(function(e){e.time=n.timestampToTime(e.time)}),n.dfk_order=t.data.filter(function(e){return"待付款"===e.state_name}),n.dfh_order=t.data.filter(function(e){return"待发货"===e.state_name}),n.dsh_order=t.data.filter(function(e){return"待收货"===e.state_name}),n.end_order=t.data.filter(function(e){return"已完成"===e.state_name}),n.loading=!1)}});case 1:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),navTo:function(t){e("log",t.iconTitle," at pages\\order\\order.vue:126"),"待付款"==t.state_name?r.navigateTo({url:"../pay/toPay?goodsInfo="+JSON.stringify(t)}):"待收货"==t.state_name||"待发货"==t.state_name?r.navigateTo({url:"../pay/endOrder?goodsInfo="+JSON.stringify(t)}):"已完成"==t.state_name&&r.navigateTo({url:"../pay/endOrder?goodsInfo="+JSON.stringify(t)})},toSale:function(e){r.navigateTo({url:"./base/afterSale"})},toComment:function(e){if("已完成"!=e.state_name)return"待付款"==e.state_name?(this.sum=e.price,this.showPay=!0,void this.$refs.Series.Payment()):void("提醒发货"==e.iconTitle?(r.showLoading({title:"发送中..."}),setTimeout(function(){r.hideLoading(),setTimeout(function(){r.showToast({icon:"success",title:"已成功提示商家"})},200)},1e3)):"删除订单"==e.iconTitle?r.showModal({title:"删除",content:"确定要删除订单吗？",cancelText:"否",confirmText:"是",success:function(e){}}):"确认收货"==e.iconTitle&&r.showModal({title:"确认收货",content:"确定订单吗？",cancelText:"否",confirmText:"是",success:function(e){setTimeout(function(){r.showToast({icon:"success",title:"订单已完成"})},200)}}));r.navigateTo({url:"./base/orderComment?goodsInfo="+JSON.stringify(e)})},setPay:function(e){this.showPay=e},timestampToTime:function(e){var t=e.toString();10==t.length&&(t*=1e3);var n=new Date(t),r=n.getFullYear()+"-",o=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",a=n.getDate()+" ",i=n.getHours()+":",s=n.getMinutes()+":",u=n.getSeconds();return r+o+a+i+s+u}},onLoad:function(){this.initData()}};t.default=d}).call(this,n("0de9")["default"],n("6e42")["default"])},"2d29":function(e,t,n){"use strict";n.r(t);var r=n("61bf"),o=n("05e2");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("bf4d");var i,s=n("f0c5"),u=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=u.exports},"61bf":function(e,t,n){"use strict";var r,o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return r})},"846c":function(e,t,n){"use strict";(function(e){n("1eb0"),n("921b");r(n("66fd"));var t=r(n("2d29"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"9c60":function(e,t,n){},bf4d:function(e,t,n){"use strict";var r=n("9c60"),o=n.n(r);o.a}},[["846c","common/runtime","common/vendor"]]]);
});
require('pages/order/order.js');
__wxRoute = 'pages/order/base/afterSale';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/base/afterSale.js';

define('pages/order/base/afterSale.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/base/afterSale"],{"103c":function(t,e,n){},3023:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return i})},"636c":function(t,e,n){"use strict";var i=n("103c"),a=n.n(i);a.a},"7abf":function(t,e,n){"use strict";n.r(e);var i=n("3023"),a=n("7fe8");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("636c");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=r.exports},"7fe8":function(t,e,n){"use strict";n.r(e);var i=n("e616"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=a.a},a8e6:function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");i(n("66fd"));var e=i(n("7abf"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e616:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{imgList:[],count:3,cause_val:"",phone_val:"",apply_val:""}},methods:{setPhoto:function(){var e=this;t.chooseImage({count:this.count,sizeType:["original","compressed"],sourceType:["album"],success:function(t){0!=e.imgList.length?(e.imgList=e.imgList.concat(t.tempFilePaths),e.count=3-e.imgList.length):(e.imgList=t.tempFilePaths,e.imgList.length>=3&&(e.imgList=t.tempFilePaths.slice(e.imgList.length-3,e.imgList.length)),e.count=3-e.imgList.length)}})},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(t){this.imgList.splice(t.currentTarget.dataset.index,1),this.count=3-this.imgList.length},submit:function(){n("log",this.phone_val,this.imgList," at pages\\order\\base\\afterSale.vue:96")}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["a8e6","common/runtime","common/vendor"]]]);
});
require('pages/order/base/afterSale.js');
__wxRoute = 'pages/order/base/orderComment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/base/orderComment.js';

define('pages/order/base/orderComment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/base/orderComment"],{"2d6a":function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");s(n("66fd"));var e=s(n("dbdd"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},3371:function(t,e,n){"use strict";var s=n("a37d"),i=n.n(s);i.a},8524:function(t,e,n){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("6467"));function o(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{goodsInfo:[],clicked_list:[!1,!1,!1,!0,!0],des_font:"好",imgList:[],count:3,comment_content:""}},methods:{setStar:function(t){switch(t){case 0:this.star(t),this.des_font="差";break;case 1:this.star(t),this.des_font="一般";break;case 2:this.star(t),this.des_font="好";break;case 3:this.star(t),this.des_font="非常好";break;case 4:this.star(t),this.des_font="五星好评";break}},star:function(t){var e=this;this.clicked_list.forEach(function(n,s){n=!(s<=t),e.clicked_list[s]=n})},uploadImg:function(){var e=this;t.chooseImage({count:this.count,sizeType:["original","compressed"],sourceType:["album"],success:function(t){0!=e.imgList.length?(e.imgList=e.imgList.concat(t.tempFilePaths),e.count=3-e.imgList.length):(e.imgList=t.tempFilePaths,e.imgList.length>=3&&(e.imgList=t.tempFilePaths.slice(e.imgList.length-3,e.imgList.length)),e.count=3-e.imgList.length)}})},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(t){this.imgList.splice(t.currentTarget.dataset.index,1),this.count=3-this.imgList.length},submit:function(){s("log","提交评论"," at pages\\order\\base\\orderComment.vue:127");for(var e=0,n=0;n<this.clicked_list.length;n++)0==this.clicked_list[n]&&(e+=1);this.request({url:i.default.add_assess,method:"POST",data:{goods_id:2772,content:this.comment_content,heart:e},seccess:function(e){0==e.error_code&&t.showToast({title:"评论提交成功!"},1e3)}})}},onLoad:function(t){this.goodsInfo=JSON.parse(t.goodsInfo)}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"887c":function(t,e,n){"use strict";n.r(e);var s=n("8524"),i=n.n(s);for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);e["default"]=i.a},a37d:function(t,e,n){},dbdd:function(t,e,n){"use strict";n.r(e);var s=n("f71d"),i=n("887c");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("3371");var a,c=n("f0c5"),r=Object(c["a"])(i["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=r.exports},f71d:function(t,e,n){"use strict";var s,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return s})}},[["2d6a","common/runtime","common/vendor"]]]);
});
require('pages/order/base/orderComment.js');
__wxRoute = 'pages/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/address.js';

define('pages/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"235b":function(t,e,n){"use strict";var a=n("5db8"),r=n.n(a);r.a},"396e":function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");a(n("66fd"));var e=a(n("5f5c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5db8":function(t,e,n){},"5f5c":function(t,e,n){"use strict";n.r(e);var a=n("b87f"),r=n("7cbf");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);n("235b");var u,c=n("f0c5"),i=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=i.exports},"7cbf":function(t,e,n){"use strict";n.r(e);var a=n("dede"),r=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=r.a},b87f:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})},dede:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),s=u(n("6467"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,a,r,s,u){try{var c=t[s](u),i=c.value}catch(d){return void n(d)}c.done?e(i):Promise.resolve(i).then(a,r)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var s=t.apply(e,n);function u(t){c(s,a,r,u,i,"next",t)}function i(t){c(s,a,r,u,i,"throw",t)}u(void 0)})}}var d={data:function(){return{source:0,addressList:[]}},onLoad:function(t){this.source=t.source},onShow:function(t){this.initData()},methods:{initData:function(){var e=i(r.default.mark(function e(){var n=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.request({url:s.default.get_address,method:"POST",success:function(e){t("log",e.data," at pages\\address\\address.vue:47"),0===e.error_code?n.addressList=e.data:n.addressList=[]}});case 1:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),delAddress:function(t){var e=this;a.showModal({title:"删除",content:"确定要删除收货地址吗？",cancelText:"否",confirmText:"是",success:function(n){n.confirm&&e.request({url:s.default.del_address,method:"POST",data:{address_id:t.id},success:function(t){0==t.error_code&&e.initData()}})}})},checkAddress:function(t){1==this.source&&(this.$api.prePage().addressData=t,a.navigateBack())},addAddress:function(t,e){a.navigateTo({url:"/pages/address/addressManage?type=".concat(t,"&data=").concat(JSON.stringify(e))})},refreshList:function(t,e){this.addressList.unshift(t)}}};e.default=d}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["396e","common/runtime","common/vendor"]]]);
});
require('pages/address/address.js');
__wxRoute = 'pages/address/addressManage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/addressManage.js';

define('pages/address/addressManage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressManage"],{"0fb7":function(e,a,t){"use strict";var s,n=function(){var e=this,a=e.$createElement;e._self._c},d=[];t.d(a,"b",function(){return n}),t.d(a,"c",function(){return d}),t.d(a,"a",function(){return s})},7600:function(e,a,t){},"76de":function(e,a,t){"use strict";(function(e,s){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=d(t("6467"));function d(e){return e&&e.__esModule?e:{default:e}}var r=function(){return Promise.all([t.e("common/vendor"),t.e("pages/address/base/popupSite")]).then(t.bind(null,"8081"))},i={data:function(){return{showSite:!1,addressData:{name:"",mobile:"",addressName:"请选择省 、 市 、 区",province:"",area:"",address:"",default:2,showCheck:!1},new_address:!0}},components:{popupSite:r},onLoad:function(a){var t="新增收货地址";if("edit"===a.type){this.new_address=!1,t="编辑收货地址";var s=JSON.parse(a.data);this.addressData=s,this.addressData.addressName=s.province+s.area,1==s.mo_ren&&(this.addressData.showCheck=!0)}this.manageType=a.type,e.setNavigationBarTitle({title:t})},methods:{switchChange:function(e){e.detail.value?this.addressData.default=1:this.addressData.default=2},setSelect:function(e,a){this.showSite=e,a&&(this.addressData.province=a[0],this.addressData.area=a[1]+a[2],this.addressData.addressName=this.addressData.province+this.addressData.area)},setShowSite:function(){this.showSite=!0,this.$refs.getCity.getCity()},confirm:function(){var a=this;if(this.new_address){var t=this.addressData;if(!t.shou_name)return void this.$api.msg("请填写收货人姓名");if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(t.shou_tell))return void this.$api.msg("请输入正确的手机号码");if("请选择省 、 市 、 区"==t.addressName)return void this.$api.msg("请选择所在位置");if(!t.address)return void this.$api.msg("请填写门牌号信息");s("log",this.addressData," at pages\\address\\addressManage.vue:123"),this.request({url:n.default.add_address,method:"POST",data:{shou_name:t.shou_name,shou_tell:t.shou_tell,shou_email:"",province:t.province,area:t.area,address:t.address,zip_code:"",mo_ren:t.default},success:function(t){s("log",t," at pages\\address\\addressManage.vue:138"),0==t.error_code&&(a.$api.msg("地址".concat("edit"==a.manageType?"修改":"添加","成功")),setTimeout(function(){e.navigateBack()},800))}})}}}};a.default=i}).call(this,t("6e42")["default"],t("0de9")["default"])},a341:function(e,a,t){"use strict";(function(e){t("1eb0"),t("921b");s(t("66fd"));var a=s(t("fa9a"));function s(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},e3bc:function(e,a,t){"use strict";var s=t("7600"),n=t.n(s);n.a},fa9a:function(e,a,t){"use strict";t.r(a);var s=t("0fb7"),n=t("ff77");for(var d in n)"default"!==d&&function(e){t.d(a,e,function(){return n[e]})}(d);t("e3bc");var r,i=t("f0c5"),o=Object(i["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],r);a["default"]=o.exports},ff77:function(e,a,t){"use strict";t.r(a);var s=t("76de"),n=t.n(s);for(var d in s)"default"!==d&&function(e){t.d(a,e,function(){return s[e]})}(d);a["default"]=n.a}},[["a341","common/runtime","common/vendor"]]]);
});
require('pages/address/addressManage.js');
__wxRoute = 'pages/game/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/game/index.js';

define('pages/game/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/game/index"],{"00a1":function(t,i,n){"use strict";var e=n("2f65"),s=n.n(e);s.a},1190:function(t,i,n){"use strict";(function(t){n("1eb0"),n("921b");e(n("66fd"));var i=e(n("ef42"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("6e42")["createPage"])},"2f65":function(t,i,n){},"30f7":function(t,i,n){"use strict";n.r(i);var e=n("dbd2"),s=n.n(e);for(var h in e)"default"!==h&&function(t){n.d(i,t,function(){return e[t]})}(h);i["default"]=s.a},"3a39":function(t,i,n){"use strict";var e,s=function(){var t=this,i=t.$createElement;t._self._c},h=[];n.d(i,"b",function(){return s}),n.d(i,"c",function(){return h}),n.d(i,"a",function(){return e})},dbd2:function(t,i,n){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=function(){return n.e("pages/game/share").then(n.bind(null,"0718"))},h={data:function(){return{goodsInfo:{name:"",old:"",new:"",soldOut:"",img:"",id:"",money:""},sec:9,startSec:3,isShow:!1,canClick:!0,startFont:"开始",money:"",unit:"",decade:"",hunders:".",kilbit:"",myriabit:"",debit:"",hunbit:"",ten:"",timer:null,count:0,shareShow:!1,hour:"",minute:"",second:"",endTime:"",userInfo:""}},onLoad:function(i){try{t.showToast({icon:"loading",title:"数据获取中"}),this.goodsInfo=JSON.parse(i.goodsInfo),e("log",this.goodsInfo," at pages\\game\\index.vue:123"),this.goodsInfo.old&&(t.hideLoading(),this.goodsInfo.key?(this.canClick=!1,this.startFont="结束",this.sec=0,this.single(this.goodsInfo.old),this.synth(),this.shareShow=!0):(this.money=this.goodsInfo.old,parseInt(this.goodsInfo.old)==this.goodsInfo.old&&(this.money=this.goodsInfo.old.toFixed(2)),this.single(this.money)),this.open())}catch(n){}},components:{share:s},methods:{open:function(){var t=this;setInterval(function(){var i=new Date(t.endTime)-new Date;if(i>0){var n=i/1e3;t.hour=parseInt(n%86400/3600)<10?"0"+parseInt(n%86400/3600):parseInt(n%86400/3600),t.minute=parseInt(n%86400%3600/60)<10?"0"+parseInt(n%86400%3600/60):parseInt(n%86400%3600/60),t.second=parseInt(n%86400%3600%60)<10?"0"+parseInt(n%86400%3600%60):parseInt(n%86400%3600%60)}else t.hour="00",t.minute="00",t.second="00"},1e3)},countDown:function(){var t=this;if(3==this.startSec){if(!this.canClick)return;this.canClick=!1,this.isShow=!0;var i=this,n=setInterval(function(){i.startSec--,t.startSec<1&&(clearInterval(n),t.canClick=!0,t.isShow=!1,t.startFont="点击",t.start())},1e3)}else this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.minus()},100)},start:function(){var t=this,i=setInterval(function(){t.sec--,t.sec<1&&(clearInterval(i),t.canClick=!1,t.startFont="结束",t.synth(),t.shareShow=!0)},1e3)},single:function(t){this.money=t.toString().split(""),this.unit=this.money[this.money.length-1],this.decade=this.money[this.money.length-2],this.hunders=this.money[this.money.length-3],this.kilbit=this.money[this.money.length-4],this.myriabit=this.money[this.money.length-5],this.debit=this.money[this.money.length-6],this.hunbit=this.money[this.money.length-7],this.ten=this.money[this.money.length-8]},synth:function(){this.ten?this.money=this.ken+this.hunbit+this.debit+this.myriabit+this.kilbit+this.hunders+this.decade+this.unit:this.hunbit?this.money=this.hunbit+this.debit+this.myriabit+this.kilbit+this.hunders+this.decade+this.unit:this.debit?this.money=this.debit+this.myriabit+this.kilbit+this.hunders+this.decade+this.unit:this.myriabit?this.money=this.myriabit+this.kilbit+this.hunders+this.decade+this.unit:this.kilbit&&(this.money=this.kilbit+this.hunders+this.decade+this.unit)},minus:function(){this.canClick&&(this.count++,this.unit--,this.unit<=0&&(this.unit=9,this.decade--,this.decade<=0&&(this.decade=9,this.kilbit--,this.kilbit<=0&&(this.kilbit=9,this.myriabit--,this.myriabit<=0&&(this.myriabit=9,this.debit--,this.canClick=!1)))))}}};i.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])},ef42:function(t,i,n){"use strict";n.r(i);var e=n("3a39"),s=n("30f7");for(var h in s)"default"!==h&&function(t){n.d(i,t,function(){return s[t]})}(h);n("00a1");var o,a=n("f0c5"),r=Object(a["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);i["default"]=r.exports}},[["1190","common/runtime","common/vendor"]]]);
});
require('pages/game/index.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

