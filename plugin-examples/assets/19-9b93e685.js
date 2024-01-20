var C=Object.defineProperty;var x=(i,t,o)=>t in i?C(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o;var _=(i,t,o)=>(x(i,typeof t!="symbol"?t+"":t,o),o);import{P as D,T as P}from"./lightweight-charts.production-326b3816.js";import{a as k}from"./sample-data-c7d89ab8.js";import{c as R,g as S}from"./candles-e6ca9d48.js";import{a as w,p as f}from"./positions-0a54307c.js";class Y{constructor(){_(this,"_data",null);_(this,"_options",null)}draw(t,o){t.useBitmapCoordinateSpace(s=>this._drawImpl(s,o))}update(t,o){this._data=t,this._options=o}_drawImpl(t,o){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;let s=-1/0;const c=this._data.bars.map(n=>{const h=n.originalData.close>=s;s=n.originalData.close??s;const d=o(n.originalData.open)??0,l=o(n.originalData.high)??0,a=o(n.originalData.low)??0,r=o(n.originalData.close)??0;return{openY:d,highY:l,lowY:a,closeY:r,x:n.x,isUp:h}}),e=this._options.radius(this._data.barSpacing);this._drawWicks(t,c,this._data.visibleRange),this._drawCandles(t,c,this._data.visibleRange,e)}_drawWicks(t,o,s){if(this._data===null||this._options===null)return;const{context:c,horizontalPixelRatio:e,verticalPixelRatio:n}=t,h=S(e);for(let d=s.from;d<s.to;d++){const l=o[d];c.fillStyle=l.isUp?this._options.wickUpColor:this._options.wickDownColor;const a=w(l.lowY,l.highY,n),r=f(l.x,e,h);c.fillRect(r.position,a.position,r.length,a.length)}}_drawCandles(t,o,s,c){if(this._data===null||this._options===null)return;const{context:e,horizontalPixelRatio:n,verticalPixelRatio:h}=t,d=R(this._data.barSpacing,1);for(let l=s.from;l<s.to;l++){const a=o[l],r=w(Math.min(a.openY,a.closeY),Math.max(a.openY,a.closeY),h),p=f(a.x,n,d);e.fillStyle=a.isUp?this._options.upColor:this._options.downColor,e.roundRect?(e.beginPath(),e.roundRect(p.position,r.position,p.length,r.length,c),e.fill()):e.fillRect(p.position,r.position,p.length,r.length)}}}const b={...D,upColor:"#26a69a",downColor:"#ef5350",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350",radius:function(i){return i<4?0:i/3}};class v{constructor(){_(this,"_renderer");this._renderer=new Y}priceValueBuilder(t){return[t.high,t.low,t.close]}renderer(){return this._renderer}isWhitespace(t){return t.close===void 0}update(t,o){this._renderer.update(t,o)}defaultOptions(){return b}}const W=window.chart=P("chart",{autoSize:!0}),y=new v,m=W.addCustomSeries(y,{color:"#FF00FF"}),{upColor:U,downColor:V}=m.options();let g=-1/0;const u=k().map(i=>{const t=i.close>=g?U:V;return g=i.close,{...i,color:t}});u[u.length-2]={time:u[u.length-2].time};m.setData(u);
