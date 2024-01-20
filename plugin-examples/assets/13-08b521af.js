var x=Object.defineProperty;var g=(s,t,e)=>t in s?x(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var m=(s,t,e)=>(g(s,typeof t!="symbol"?t+"":t,e),e);import{P,T as v}from"./lightweight-charts.production-326b3816.js";import{a as L}from"./sample-data-c7d89ab8.js";const f={...P,highLineColor:"#049981",lowLineColor:"#F23645",closeLineColor:"#878993",areaBottomColor:"rgba(242, 54, 69, 0.2)",areaTopColor:"rgba(4, 153, 129, 0.2)",highLineWidth:2,lowLineWidth:2,closeLineWidth:2};class C{constructor(){m(this,"_data",null);m(this,"_options",null)}draw(t,e){t.useBitmapCoordinateSpace(a=>this._drawImpl(a,e))}update(t,e){this._data=t,this._options=e}_drawImpl(t,e){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const a=this._options,u=this._data.bars.map(o=>({x:o.x*t.horizontalPixelRatio,high:e(o.originalData.high)*t.verticalPixelRatio,low:e(o.originalData.low)*t.verticalPixelRatio,close:e(o.originalData.close)*t.verticalPixelRatio})),i=t.context;i.beginPath();const w=new Path2D,_=new Path2D,h=new Path2D,l=u[this._data.visibleRange.from];w.moveTo(l.x,l.low),_.moveTo(l.x,l.high);for(let o=this._data.visibleRange.from+1;o<this._data.visibleRange.to;o++){const r=u[o];w.lineTo(r.x,r.low),_.lineTo(r.x,r.high)}const n=u[this._data.visibleRange.to-1];h.moveTo(n.x,n.close);for(let o=this._data.visibleRange.to-2;o>=this._data.visibleRange.from;o--){const r=u[o];h.lineTo(r.x,r.close)}const c=new Path2D(_);c.lineTo(n.x,n.close),c.addPath(h),c.lineTo(l.x,l.high),c.closePath(),i.fillStyle=a.areaTopColor,i.fill(c);const d=new Path2D(w);d.lineTo(n.x,n.close),d.addPath(h),d.lineTo(l.x,l.low),d.closePath(),i.fillStyle=a.areaBottomColor,i.fill(d),i.lineJoin="round",i.strokeStyle=a.lowLineColor,i.lineWidth=a.lowLineWidth*t.verticalPixelRatio,i.stroke(w),i.strokeStyle=a.highLineColor,i.lineWidth=a.highLineWidth*t.verticalPixelRatio,i.stroke(_),i.strokeStyle=a.closeLineColor,i.lineWidth=a.closeLineWidth*t.verticalPixelRatio,i.stroke(h)}}class b{constructor(){m(this,"_renderer");this._renderer=new C}priceValueBuilder(t){return[t.low,t.high,t.close]}isWhitespace(t){return t.close===void 0}renderer(){return this._renderer}update(t,e){this._renderer.update(t,e)}defaultOptions(){return f}}const R=window.chart=v("chart",{autoSize:!0}),T=new b,p=R.addCustomSeries(T,{}),D=L(100);p.setData(D);
