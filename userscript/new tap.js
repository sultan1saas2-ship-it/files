// ==UserScript==
// @name         所有链接设置新页面打开
// @namespace    caiyuntrans
// @version      0.1
// @description  增加了一些兼容性
// @author       You
// @match       https://*google.com/*
// @match        *://google.com/*
// @match        *://search.disroot.org/search*
// @match        *://www.bing.com/*
// @match        *://search.yahoo.com/search*
// @match        *://*.search.yahoo.com/search*
// @match        *://search.yahoo.co.jp/*
// @match        *://www.baidu.com/*
// @match        *://yandex.com/search/*
// @match        *://yandex.ru/search/*
// @match        *://search.disroot.org/search*
// @match        *://searx.tiekoetter.com/search*
// @match        *://search.bus-hit.me/search*
// @match        *://search.inetol.net/search*
// @match        *://priv.au/search*
// @match        *://searx.be/search*
// @match        *://searxng.site/search*
// @match        *://search.hbubli.cc/search*
// @match        *://search.im-in.space/search*
// @match        *://opnxng.com/search*
// @match        *://search.upinmars.com/search*
// @match        *://search.sapti.me/search*
// @match        *://freesearch.club/search*
// @match        *://xo.wtf/search*
// @match        *://www.gruble.de/search*
// @match        *://searx.tuxcloud.net/search*
// @match        *://baresearch.org/search*
// @match        *://searx.daetalytica.io/search*
// @match        *://etsi.me/search*
// @match        *://search.leptons.xyz/search*
// @match        *://search.rowie.at/search*
// @match        *://search.mdosch.de/search*
// @match        *://searx.catfluori.de/search*
// @match        *://searx.si/search*
// @match        *://searx.namejeff.xyz/search*
// @match        *://search.itstechtime.com/search*
// @match        *://s.mble.dk/search*
// @match        *://searx.kutay.dev/search*
// @match        *://ooglester.com/search*
// @match        *://searx.ox2.fr/search*
// @match        *://searx.techsaviours.org/search*
// @match        *://searx.perennialte.ch/search*
// @match        *://s.trung.fun/searxng/search*
// @match        *://search.in.projectsegfau.lt/search*
// @match        *://search.projectsegfau.lt/search*
// @match        *://darmarit.org/searx/search*
// @match        *://searx.lunar.icu/search*
// @match        *://nyc1.sx.ggtyler.dev/search*
// @match        *://search.rhscz.eu/search*
// @match        *://paulgo.io/search*
// @match        *://northboot.xyz/search*
// @match        *://searx.zhenyapav.com/search*
// @match        *://searxng.ch/search*
// @match        *://copp.gg/search*
// @match        *://searx.sev.monster/search*
// @match        *://searx.oakleycord.dev/search*
// @match        *://searx.juancord.xyz/search*
// @match        *://searx.work/search*
// @match        *://search.ononoki.org/search*
// @match        *://search.demoniak.ch/search*
// @match        *://searx.cthd.icu/search*
// @match        *://searx.fmhy.net/search*
// @match        *://searx.headpat.exchange/search*
// @match        *://sex.finaltek.net/search*
// @match        *://search.gcomm.ch/search*
// @match        *://search.smnz.de/search*
// @match        *://searx.ankha.ac/search*
// @match        *://search.lvkaszus.pl/search*
// @match        *://searx.nobulart.com/search*
// @match        *://sx.t-1.org/search*
// @match        *://www.jabber-germany.de/searx/search*
// @match        *://sx.catgirl.cloud/search*
// @match        *://sx.vern.cc/searxng/search*
// @match        *://www.startpage.com/search*
// @match        *://www.startpage.com/sp/search*
// @match        *://search.brave.com/*
// @match        *://duckduckgo.com
// @match        *://duckduckgo.com/*
// @match        *://ghosterysearch.com/*
 
// @match        *://presearch.com/*
 
// @match        *://metager.org/*meta/meta.ger3*
// @match        *://metager.de/*meta/meta.ger3*
 
// @match        *://4get.ca/*
// @match        *://4get.silly.computer/*
// @match        *://4get.plunked.party/*
// @match        *://4get.konakona.moe/*
// @match        *://4get.sijh.net/*
// @match        *://4get.hbubli.cc/*
// @match        *://4get.perennialte.ch/*
// @match        *://4get.zzls.xyz/*
// @match        *://4getus.zzls.xyz/*
// @match        *://4get.seitan-ayoub.lol/*
// @match        *://4get.dcs0.hu/*
// @match        *://4get.psily.garden/*
// @match        *://4get.lvkaszus.pl/*
// @match        *://4get.kizuki.lol/*
 
// @match        *://search.ahwx.org/search.php*
// @match        *://search2.ahwx.org/search.php*
// @match        *://search3.ahwx.org/search.php*
// @match        *://ly.owo.si/search.php*
// @match        *://librey.franklyflawless.org/search.php*
// @match        *://librey.org/search.php*
// @match        *://search.davidovski.xyz/search.php*
// @match        *://search.milivojevic.in.rs/search.php*
// @match        *://glass.prpl.wtf/search.php*
// @match        *://librex.uk.to/search.php*
// @match        *://librey.ix.tc/search.php*
// @match        *://search.funami.tech/search.php*
// @match        *://librex.retro-hax.net/search.php*
// @match        *://librex.nohost.network/search.php*
// @match        *://search.pabloferreiro.es/search.php*
// @match        *://librey.baczek.me/search.php*
// @match        *://lx.benike.me/search.php*
// @match        *://search.seitan-ayoub.lol/search.php*
// @match        *://librey.myroware.net/search.php*
// @match        *://librey.nezumi.party/search.php*
// @match        *://search.zeroish.xyz/search.php*
 
// @match        *://stract.com/*
 
// @match        *://search.albony.xyz/*
// @match        *://search.garudalinux.org/*
// @match        *://search.dr460nf1r3.org/*
// @match        *://search.nezumi.party/*
// @match        *://s.tokhmi.xyz/*
// @match        *://search.sethforprivacy.com/*
// @match        *://whoogle.dcs0.hu/*
// @match        *://whoogle.lunar.icu/*
// @match        *://gowogle.voring.me/*
// @match        *://whoogle.privacydev.net/*
// @match        *://whoogle.hostux.net/*
// @match        *://wg.vern.cc/*
// @match        *://whoogle.hxvy0.gq/*
// @match        *://whoogle.ungovernable.men/*
// @match        *://whoogle2.ungovernable.men/*
// @match        *://whoogle3.ungovernable.men/*
// @match        *://wgl.frail.duckdns.org/*
// @match        *://whoogle.no-logs.com/*
// @match        *://whoogle.ftw.lol/*
// @match        *://whoogle-search--replitcomreside.repl.co/*
// @match        *://search.notrustverify.ch/*
// @match        *://whoogle.datura.network/*
// @match        *://whoogle.yepserver.xyz/*
 
// @match        *://www.etools.ch/searchSubmit.do*
// @match        *://www.etools.ch/mobileSearch.do*
 
// @match        *://www.mojeek.com/*
// @match        *://www.mojeek.co.uk/*
 
// @match        *://wiby.me/*
// @match        *://yep.com/web*
// @match        *://www.torry.io/search*
// @match        *://www.qwant.com/*
// @match        *://www.ecosia.org/*
// @match        *://search.becovi.com/serp.php*
// @match        *://good-search.org/*search/*
// @match        *://www.alltheinternet.com/*
// @match        *://www.searchalot.com/*
// @match        *://search.aol.com/*search*
// @match        *://www.onesearch.com/*search*
// @match        *://www.info.com/*
// @match        *://oceanhero.today/web*
 
// @match        *://swisscows.com/*/web*
 
// @match        *://search.lilo.org/*
// @match        *://search.entireweb.com/*
// @match        *://www.tadadoo.com/*
// @match        *://search.gmx.com/web/result*
// @match        *://search.gmx.com/web*
// @match        *://youcare.world/all*
// @match        *://search.lycos.com/web/*
// @match        *://alohafind.com/search/*
// @match        *://spot.ecloud.global/search*
// @match        *://qmamu.com/*
// @match        *://search.carrot2.org/*
// @match        *://www.nona.de/*
// @match        *://www.sapo.pt/pesquisa/web/tudo*
// @match        *://www.exalead.com/search/web/results/*
// @match        *://cgi.search.biglobe.ne.jp/cgi-bin/search2-b*
// @match        *://search.goo.ne.jp/web.jsp*
// @match        *://search.walla.co.il/*
// @match        *://coccoc.com/*
// @match        *://search.seznam.cz/*
// @match        *://www.startsiden.no/sok/*
// @match        *://search.marginalia.nu/*
// @match        *://mwmbl.org/*
// @match        *://search.naver.com/search.naver*
// @match        *://gibiru.com/results.html*
// @match        *://www.lukol.com/s.php*
// @match        *://www.draze.com/web/*
 
// @match        *://www.yelliot.com/search/*
// @match        *://fr.yelliot.com/search/*
// @match        *://ar.yelliot.com/search/*
// @match        *://es.yelliot.com/search/*
// @match        *://de.yelliot.com/search/*
// @match        *://it.yelliot.com/search/*
// @match        *://ru.yelliot.com/search/*
// @match        *://cn.yelliot.com/search/*
// @match        *://in.yelliot.com/search/*
// @match        *://pt.yelliot.com/search/*
 
// @match        *://efind.com/search*
// @match        *://fireball.de/de/*
// @match        *://freespoke.com/search/web*
// @match        *://gogoprivate.com/search*
// @match        *://resulthunter.com/*
// @match        *://search.givewater.com/*
// @match        *://results.excite.com/*
// @match        *://www.webcrawler.com/*
// @match        *://www.metacrawler.com/*
// @match        *://www.dogpile.com/*
// @match        *://www.infospace.com/*
// @match        *://www.refseek.com/*
// @match        *://www.zapmeta.com/*
// @match        *://www.izito.com/*
// @match        *://www.ask.com/web*
// @match        *://www.pronto.com/web*
// @match        *://anoox.com/find.php*
 
// @match        *://kagi.com/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

function isPostForm(dom) {
    if (dom.method && dom.method.toLowerCase() === 'post') {
        return true;
    }
    var forms = dom.querySelectorAll("form");
    for (var m = 0; m < forms.length; m++) {
        if (forms[m].method && forms[m].method.toLowerCase() === 'post') {
            return true;
        }
    }
    return false;
}
function inCanBlank(dom) {
    return dom && dom.href && dom.href.indexOf("http") === 0 && dom.getAttribute("href").indexOf("#") !== 0;
}
function setTarget(dom) {

    if (inCanBlank(dom)) {
        dom.target = '_blank';
    }
}
function isSearchsoso(url) {

if(jsreplace){
 for(var i=0;i<jsreplace.length;i++){
   if(url.indexOf(jsreplace[i])>-1){
   return true;
   }

   }

}
     return false;
}



document.body.addEventListener('mousedown',
function(e) {
    if (isPostForm(e.target)) {
        return;
    }
    var dom = e.target;
    for (var m = 0; m < 4; m++) {
        dom = dom.parentNode;
        if (dom && isPostForm(dom)) {
            return;
        }
    }

    var child = e.target.querySelectorAll("a");
    for (var i = 0; i < child.length; i++) {
        if (inCanBlank(child[i])) {
            child[i].target = '_blank';
        }
    }
    setTarget(e.target);
    setTarget(e.target.parentNode);
    setTarget(e.target.parentNode.parentNode);
    setTarget(e.target.parentNode.parentNode.parentNode);
    setTarget(e.target.parentNode.parentNode.parentNode.parentNode);

})


    // Your code here...
})();
