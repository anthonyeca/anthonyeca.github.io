const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to('.text',{y:'0%', duration:1, stagger: 0.25});
tl.to('.intro',{y:"-100%", duration:1});
tl.fromTo('header',{opacity:0},{opacity:1, duration:2});
/*
var gamer = [103,097,109,101,1144].join(),
    $div = $('div');

$(window).on('keypress', function(e)){
    var $this = $(this),
        gap = e.timeStamp - ($this.data('time') || e.timeStamp),
        chrs = $this.data('chrs') || [];

    if (gap > 1000){
        chars =[];
    }

    chars.push(e.wich);
    if(chars.join()===gamer){
        window.open("https://google.com",'_blank');
    }

    this.data('chars',chars);
    $this.data('time',e.timeStamp);
}