(function(){
var CATS=window.CATS, DET=window.DETAILS, D=window.DEALER||{};
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var SIL={
 wall:'<svg viewBox="0 0 60 90"><rect x="6" y="8" width="48" height="74" rx="3" fill="#fff" stroke="#c9cbce" stroke-width="1.5"/><rect x="25" y="2" width="10" height="7" fill="#d6d8db"/><rect x="20" y="58" width="20" height="9" rx="1" fill="#3a3c40"/><path d="M18 84v5M30 84v5M42 84v5" stroke="#c9cbce" stroke-width="2"/></svg>',
 heater:'<svg viewBox="0 0 60 90"><rect x="10" y="10" width="40" height="70" rx="3" fill="#fff" stroke="#c9cbce" stroke-width="1.5"/><rect x="26" y="2" width="8" height="9" fill="#d6d8db"/><rect x="24" y="52" width="12" height="16" rx="2" fill="#3a3c40"/><path d="M22 82v6M38 82v6" stroke="#c9cbce" stroke-width="2"/></svg>',
 cascade:'<svg viewBox="0 0 90 90"><g fill="#fff" stroke="#c9cbce" stroke-width="1.5"><rect x="4" y="14" width="24" height="56" rx="2"/><rect x="33" y="14" width="24" height="56" rx="2"/><rect x="62" y="14" width="24" height="56" rx="2"/></g><path d="M4 78h82" stroke="#bbb" stroke-width="3"/></svg>',
 floor:'<svg viewBox="0 0 60 90"><rect x="12" y="6" width="36" height="80" rx="2" fill="#fff" stroke="#c9cbce" stroke-width="1.5"/><rect x="30" y="12" width="12" height="7" fill="#3a3c40"/></svg>',
 mat:'<svg viewBox="0 0 90 60"><rect x="4" y="22" width="82" height="22" rx="8" fill="#fff" stroke="#c9cbce" stroke-width="1.5"/><path d="M40 44c0-14 6-22 16-22s16 8 16 22z" fill="#f5f5f5" stroke="#c9cbce" stroke-width="1.5"/></svg>',
 acc:'<svg viewBox="0 0 60 60"><rect x="10" y="10" width="40" height="40" rx="6" fill="#2b2d30"/><rect x="16" y="16" width="28" height="14" rx="2" fill="#3f6ad8" opacity=".7"/></svg>'
};
function pic(img,icon,model){
  if(img) return '<img src="assets/img/'+img+'.jpg" alt="'+esc(model)+'" loading="lazy" draggable="false">';
  return '<div class="ph-sil">'+SIL[icon]+'<span>'+esc(model)+'</span></div>';
}
var HEAD='<div class="ph"><b><i class="sq"></i>NAVIEN 庆东纳碧安<em>KD NAVIEN</em></b><span class="r">{R}</span></div>';
var pages=[], labels=[];
function foot(n){return '<div class="pf"><span><b>庆东纳碧安 · 专注冷凝技术</b><br>产品参数以产品说明书为准</span><span class="no">'+String(n).padStart(2,'0')+'</span></div>'}
function add(cls,inner,label,hard,right){pages.push({cls:cls,inner:inner,hard:hard,right:right||''});labels.push(label)}

/* 1 cover */
add('cover','<div class="glow"></div>'+HEAD.replace('{R}','产品画册')+
 '<div class="body"><div class="kick">产品画册 · PRODUCT CATALOGUE</div><h1>全系列画册</h1>'+
 '<div class="en big">FULL RANGE <span class="sl">//</span> 2026</div><div class="orbar"></div>'+
 '<div class="tag">畅销北美<i>NO.1</i>，<br>专注冷凝技术近40年！</div>'+
 '<div class="txt">六大品类，覆盖采暖、生活热水、商用供热与舒适家居——壁挂炉、热水器、商用并联系统、落地锅炉、水暖床垫与原厂配件。</div>'+
 '<div class="hero"><div><img src="assets/img/ncb700.jpg" alt=""></div><div><img src="assets/img/npw500.jpg" alt=""></div><div><img src="assets/img/nfb98hc.jpg" alt=""></div></div>'+
 '<p class="foot-note" style="margin-top:calc(var(--u)*2)">* 美国、加拿大市场燃气壁挂炉和即热式燃气热水器销量第一 (2023)</p></div>','封面',true);

/* 2 brand */
add('',HEAD.replace('{R}','品牌')+'<div class="body"><div class="kick">关于庆东纳碧安 · ABOUT</div><h2 style="margin-top:calc(var(--u)*2)">专注冷凝技术<br>近40年</h2>'+
 '<div class="en">KD NAVIEN <span class="sl">//</span> CONDENSING TECHNOLOGY</div>'+
 '<div class="txt">六大品类，覆盖采暖、生活热水、商用供热与舒适家居——壁挂炉、热水器、商用并联系统、落地锅炉、水暖床垫与原厂配件。</div>'+
 '<div class="stats"><div><b>畅销北美<i>NO.1</i></b><span>美国、加拿大市场燃气壁挂炉和即热式燃气热水器销量第一 (2023)*</span></div><div><b>近<i>40</i>年</b><span>专注冷凝技术</span></div><div><b><i>6</i> 大品类</b><span>采暖 · 热水 · 商用 · 舒适家居</span></div><div><b><i>40+</i> 款</b><span>本册收录产品型号</span></div></div>'+
 '<div class="trio"><div><b>采暖</b><span>壁挂炉 · 落地锅炉</span></div><div><b>热水</b><span>热水器 · 商用并联</span></div><div><b>舒适家居</b><span>水暖床垫 · 配件</span></div></div>'+
 '</div>'+foot(2),'品牌');

/* 3 toc placeholder (filled after) */
add('','__TOC__','目录');

var catStart={}, detStart=0;
CATS.forEach(function(c){
  catStart[c.id]=pages.length+1;
  var first=c.items.filter(function(i){return i[3]})[0];
  add('intro',HEAD.replace('{R}',c.zh)+'<div class="bigno">'+c.no+'</div><div class="body"><div class="kick">CATEGORY '+c.no+'</div><h1>'+c.zh+'</h1><div class="en">'+c.en+'</div><div class="orbar"></div>'+
   '<div class="txt">'+c.blurb+'</div><div class="cnt"><div><b>'+c.items.length+'</b><span>款产品</span></div><div><b>'+c.no+'</b><span>/ 06 品类</span></div></div>'+
   '<div class="heroimg">'+pic(first&&first[3],c.icon,first?first[0]:c.zh)+'</div></div>__F__',c.no+' '+c.zh);
  for(var i=0;i<c.items.length;i+=c.per){
    var chunk=c.items.slice(i,i+c.per), g=c.per===3?' g3':(c.per===2?' g2':'');
    if(c.per===4 && chunk.length<=2) g=' g2';
    var html=HEAD.replace('{R}',c.zh)+'<div class="body"><div class="sect"><h3>'+c.zh+'</h3><small>'+c.en+'</small></div><div class="grid'+g+'">'+
      chunk.map(function(p){var hasDet=DET.some(function(d){return d.m===p[0]});
        return '<div class="card">'+(p[4]?'<span class="flag">'+p[4]+'</span>':'')+'<div class="im">'+pic(p[3],c.icon,p[0])+'</div><div class="ct"><div class="m">'+esc(p[0])+'</div><div class="d">'+esc(p[1])+'</div><div class="r">'+esc(p[2])+'</div>'+(hasDet?'<div class="see" data-det="'+esc(p[0])+'">详细参数 → P__D'+esc(p[0])+'__</div>':'')+'</div></div>'}).join('')+
      '</div></div>__F__';
    add('',html,c.zh+' '+(i/c.per+1));
  }
  if(c.id==='water'){
    detStart=pages.length+1;
    DET.forEach(function(d){
      var lab=['能效等级','额定热负荷','最小热负荷','产热水能力 (ΔT=25K)','尺寸 (宽×深×高)','净重','产地'];
      var rows=lab.map(function(l,k){return '<tr'+(k===3?' class="hl"':'')+'><td>'+l+'</td><td>'+esc(d.spec[k])+'</td></tr>'}).join('')+(d.extra||[]).map(function(e){return '<tr><td>'+e[0]+'</td><td>'+esc(e[1])+'</td></tr>'}).join('');
      add('detail',HEAD.replace('{R}','产品详情')+'<div class="body"><div class="top2"><div class="dimg">'+pic(d.img,'heater',d.m)+'</div><div class="dtl"><div class="kick">燃气热水器 · DETAIL</div><h2 style="margin-top:calc(var(--u)*1.5)">'+esc(d.m)+'</h2><div class="s">'+esc(d.sub)+'</div><span class="gas">天然气 12T</span></div></div>'+
       '<div class="feat">'+d.feat.map(function(f){return '<div>'+esc(f)+'</div>'}).join('')+'</div>'+
       '<table class="spec"><caption>技术参数 SPECIFICATIONS</caption>'+rows+'</table></div>__F__','详情 '+d.m);
    });
  }
});

/* index */
var idx=CATS.map(function(c){return '<h4>'+c.no+' '+c.zh+'</h4>'+c.items.map(function(p){return '<p>'+esc(p[0])+'<span>'+esc(p[2])+'</span></p>'}).join('')}).join('');
add('',HEAD.replace('{R}','型号速览')+'<div class="body"><div class="sect"><h3>全系列型号速览</h3><small>MODEL INDEX</small></div><div class="idx">'+idx+'</div></div>__F__','型号速览');
if(pages.length%2===0) add('',HEAD.replace('{R}','')+'<div class="body"><div class="kick">NOTES</div></div>__F__','备注');

/* back cover with dealer info */
function fv(v){return v?esc(v):''}
var qr=D.qrcode?'<img src="'+esc(D.qrcode)+'" alt="微信二维码">':'微信二维码<br>粘贴处';
add('back',HEAD.replace('{R}','KD NAVIEN')+'<div class="body"><div class="kick">KD NAVIEN · 专注冷凝技术近40年</div><h2 style="margin-top:calc(var(--u)*2)">庆东纳碧安</h2><div class="en">FULL RANGE <span class="sl">//</span> 2026</div>'+
 '<div class="tag" style="font-size:calc(var(--u)*2.8)">畅销北美<i>NO.1</i>，专注冷凝技术近40年！</div>'+
 '<div class="dealer"><div class="lab">经销商信息<small>DEALER</small></div><div class="rowwrap"><div class="fields">'+
 '<div class="f"><b>店名</b><span>'+fv(D.name)+'</span></div><div class="f"><b>电话</b><span>'+fv(D.phone)+'</span></div><div class="f"><b>地址</b><span>'+fv(D.address)+'</span></div>'+(D.wechat?'<div class="f"><b>微信</b><span>'+fv(D.wechat)+'</span></div>':'')+
 '</div><div class="qr">'+qr+'</div></div><div class="note">扫码添加经销商微信</div></div>'+
 '<p class="foot-note" style="margin-top:auto;padding-top:calc(var(--u)*2)">* 美国、加拿大市场燃气壁挂炉和即热式燃气热水器销量第一 (2023)<br>庆东纳碧安 · 专注冷凝技术 / 产品参数以产品说明书为准</p></div>','封底 · 经销商信息',true);

/* TOC */
var toc=HEAD.replace('{R}','目录')+'<div class="body"><div class="kick">目录 · CONTENTS</div><h2 style="margin-top:calc(var(--u)*1.5)">六大品类</h2><div class="en">SIX CATEGORIES <span class="sl">//</span></div><div class="toc">'+
 CATS.map(function(c){return '<a data-go="'+catStart[c.id]+'"><span class="no">'+c.no+'</span><span><b>'+c.zh+'</b><small>'+c.en+'</small></span><span class="p">P'+String(catStart[c.id]).padStart(2,'0')+'</span></a>'}).join('')+
 '<a data-go="'+detStart+'"><span class="no">+</span><span><b>热水器详细参数</b><small>FEATURED DETAILS</small></span><span class="p">P'+detStart+'</span></a></div></div>__F__';
pages[2].inner=toc;

/* build DOM */
var book=document.getElementById('book');
pages.forEach(function(p,i){
  var el=document.createElement('div');
  el.className='page '+p.cls+(p.hard?' hard':'');
  if(p.hard) el.setAttribute('data-density','hard');
  var inner=p.inner.replace('__F__',foot(i+1)).replace(/__D(.+?)__/g,function(_,m){var k=DET.findIndex(function(d){return d.m===m});return String(detStart+k)});
  el.innerHTML='<div class="pg">'+inner+'</div>'+(p.hard?'':'<div class="spine-shadow"></div>');
  book.appendChild(el);
});

var stage=document.getElementById('stage');
function fit(){var W=stage.clientWidth-(innerWidth<560?12:32),H=stage.clientHeight-(innerWidth<560?16:28);var land=W>H*1.05&&W>=520;
  var w=land?Math.min(W,H*2*500/707):Math.min(W,H*500/707);bw.style.width=Math.floor(w)+'px';bw.style.height=Math.floor(land?w*707/1000:w*707/500)+'px'}
var bw=document.getElementById('bookwrap');fit();window.addEventListener('resize',fit);
var pf=new St.PageFlip(book,{width:500,height:707,size:'stretch',minWidth:240,maxWidth:1000,minHeight:339,maxHeight:1414,
  showCover:true,usePortrait:true,drawShadow:true,maxShadowOpacity:.55,flippingTime:850,mobileScrollSupport:false,swipeDistance:20,showPageCorners:true,autoSize:true});
pf.loadFromHTML(book.querySelectorAll('.page'));
var N=pf.getPageCount();

function scale(){try{var r=pf.getRender().getRect();if(r&&r.pageWidth)book.style.setProperty('--u',(r.pageWidth/100)+'px')}catch(e){}}
var cnt=document.getElementById('counter');
function upd(){var i=pf.getCurrentPageIndex(),o=pf.getOrientation();
  var t=(o==='landscape'&&i>0&&i<N-1)?((i+1)+'–'+Math.min(i+2,N)):(i+1);
  cnt.textContent=t+' / '+N; marks();}
pf.on('flip',function(){upd();play()});
pf.on('changeOrientation',function(){setTimeout(function(){scale();upd()},0)});
pf.on('update',scale);
window.addEventListener('resize',function(){setTimeout(scale,50)});

document.getElementById('prev').onclick=function(){pf.flipPrev()};
document.getElementById('next').onclick=function(){pf.flipNext()};
document.addEventListener('keydown',function(e){if(e.key==='ArrowRight')pf.flipNext();if(e.key==='ArrowLeft')pf.flipPrev()});
function go(n){n=Math.max(1,Math.min(N,n));pf.flip(n-1);closeD()}
book.addEventListener('click',function(e){var a=e.target.closest('[data-go]');if(a){e.stopPropagation();go(+a.getAttribute('data-go'))}},true);
book.addEventListener('click',function(e){var a=e.target.closest('[data-det]');if(a){var k=DET.findIndex(function(d){return d.m===a.getAttribute('data-det')});e.stopPropagation();go(detStart+k)}},true);

/* drawer thumbs */
var th=document.getElementById('thumbs'),dr=document.getElementById('drawer'),mk=document.getElementById('mask');
labels.forEach(function(l,i){var b=document.createElement('button');b.className='th'+(/^0\d /.test(l)?' sec':'');b.innerHTML='<span class="n">'+(i+1)+'</span><span class="t">'+esc(l)+'</span>';b.onclick=function(){go(i+1)};th.appendChild(b)});
function marks(){var i=pf.getCurrentPageIndex();[].forEach.call(th.children,function(b,k){b.classList.toggle('cur',k===i)})}
function openD(){dr.classList.add('open');mk.classList.add('on');dr.setAttribute('aria-hidden','false')}
function closeD(){dr.classList.remove('open');mk.classList.remove('on');dr.setAttribute('aria-hidden','true')}
document.getElementById('btnToc').onclick=openD;document.getElementById('closeToc').onclick=closeD;mk.onclick=closeD;

/* sound (off by default, synthesized — no external file) */
var snd=false,ac=null,bs=document.getElementById('btnSound');
bs.onclick=function(){snd=!snd;bs.textContent=snd?'🔊':'🔇';bs.setAttribute('aria-pressed',snd);if(snd&&!ac){try{ac=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}};
function play(){if(!snd||!ac)return;var len=ac.sampleRate*.32,buf=ac.createBuffer(1,len,ac.sampleRate),d=buf.getChannelData(0);
  for(var i=0;i<len;i++){var t=i/len;d[i]=(Math.random()*2-1)*Math.pow(1-t,2.2)*Math.min(1,t*14)*.5}
  var s=ac.createBufferSource(),f=ac.createBiquadFilter();f.type='bandpass';f.frequency.value=1800;f.Q.value=.6;s.buffer=buf;s.connect(f);f.connect(ac.destination);s.start()}
document.getElementById('btnFs').onclick=function(){var e=document.documentElement;if(document.fullscreenElement)document.exitFullscreen();else if(e.requestFullscreen)e.requestFullscreen().catch(function(){})};
var h=document.getElementById('hint');setTimeout(function(){h.style.opacity=0},3500);
scale();upd();window.__pf=pf;
})();
