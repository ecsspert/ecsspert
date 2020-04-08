module.exports = {
  layout: 'layouts/css3-logos.njk',
  logos: [
    {
      name: 'ABN Amro',
      html: `
      <div id="abnamro">
        <div class="icon"></div>
      </div>`,
      css: `
      #abnamro {
        position: relative;
      }
      #abnamro .icon {
        background: #007d78;
        height: 125px;
        left: 50%;
        margin: -102px 0 0 -75px;
        position: absolute;
        top: 25%;
        width: 150px;
      }
      #abnamro .icon:after {
        background: linear-gradient(45deg, #007d78 50%, #ff9300 50%);
        content: "";
        display: block;
        height: 106px;
        left: 22px;
        position: absolute;
          transform: rotate(45deg);
        top: 72px;
        width: 106px;
      }`,
      cssForThePage: `
      .showcase {
        backgroind-color: #f2f2f2;
        background: radial-gradient(50% 50%, circle, #ddd 50%, #f2f2f2 50%);
        background: radial-gradient(#ddd 50%, #f2f2f2 50%);
        background-size: 4px 4px
      }`
    },
    {
      name: 'Adidas Originals',
      background: '#017ac3',
      html: `
      <div id="adidas">
        <div class="leaf1">
          <div class="leaf-t1"></div>
          <div class="leaf-t2"></div>
        </div>
        <div class="leaf2">
          <div class="leaf-t1"></div>
          <div class="leaf-t2"></div>
        </div>
        <div class="leaf3">
          <div class="leaf-t1"></div>
          <div class="leaf-t2"></div>
        </div>
        <div class="stripes">
          <div class="stripe"></div>
          <div class="stripe"></div>
          <div class="stripe"></div>
        </div>
      </div>`,
      css: `

      #adidas {
        position: relative;
        height: 213px;
        overflow: hidden;
        width: 305px;
      }
      #adidas, #adidas .stripes {
        background: #017ac3;
      }
      #adidas * {
        position: absolute;
      }
      #adidas .leaf-t1,
      #adidas .leaf-t2 {
        background: #fff;
        border-radius: 204px/280px;
        clip: rect(18px 43px 255px 0px);
        height: 280px;
        top: -68px;
        width: 194px;
      }
      #adidas .leaf-t2 {
        left: -109px;
        transform: rotate(180deg);
      }
      #adidas .leaf1 .leaf-t1,
      #adidas .leaf1 .leaf-t2 {
        height: 250px;
      }
      #adidas .leaf2 .leaf-t1,
      #adidas .leaf2 .leaf-t2,
      #adidas .leaf3 .leaf-t1,
      #adidas .leaf3 .leaf-t2 {
        clip: rect(20px 38px 220px 0px );
        height: 240px;
      }
      #adidas .leaf1 {
        top: 50px;
        left: 111px;
      }
      #adidas .leaf2 {
        left: 0px;
        top: 123px;
        transform: rotate(-40deg);
      }
      #adidas .leaf2 .leaf-t1,
      #adidas .leaf2 .leaf-t2 {
        border-radius: 200px/287px;
        width: 200px;
      }
      #adidas .leaf2 .leaf-t1 {
        left: 5px;
      }
      #adidas .leaf2 .leaf-t2 {
        left: -120px;
      }
      #adidas .leaf3 {
        left: 241px;
        top: 69px;
        transform: rotate(40deg);
      }
      #adidas .leaf3 .leaf-t1,
      #adidas .leaf3 .leaf-t2 {
        border-radius: 200px/287px;
        width: 200px;
      }
      #adidas .leaf3 .leaf-t1 {
        left: 4px;
      }
      #adidas .leaf3 .leaf-t2 {
        left: -121px;
      }
      #adidas .stripes {
        box-shadow: 0 24px 0 0 #017ac3, 0 48px 0 0 #017ac3;
        height: 12px;
        left: 0;
        top: 128px;
        width: 100%;
        z-index: 10;
      }`
    },
    {
      name: 'Adobe',
      html: `
      <div id="adobe">
        <div class="adobe1"></div>
        <div class="adobe2"></div>
        <div class="adobe3"></div>
      </div>`,
      css: `
      #adobe {
        height: 250px;
        overflow: hidden;
        position: relative;
        width: 292px;
      }
      #adobe * {
        position: absolute;
      }
      .adobe1,
      .adobe2,
      .adobe3 {
          background: #fff;
      }
      .adobe1 {
          height: 305px;
          left: 55px;
          top: -26px;
          transform: rotate(23deg);
          width: 70px;
      }
      .adobe2 {
          height: 305px;
          left: 162px;
          top: -26px;
          transform: rotate(-23deg);
          width: 70px;
      }
      .adobe3 {
          height: 50px;
          left: 62px;
          top: 200px;
          transform: skewx(22deg);
          width: 93px;
      }`,
      background: `#df2624`,
    },
    {
      name: 'Apple',
      background: '#f2f2f2',
      html: `
      <div id="apple">
        <div class="slice1 slice">
          <div class="apple1"></div>
          <div class="apple2"></div>
          <div class="apple5"></div>
        </div>
        <div class="slice2 slice">
          <div class="apple1"></div>
          <div class="apple2"></div>
          <div class="apple3"></div>
          <div class="apple4"></div>
          <div class="apple5"></div>
        </div>
        <div class="slice3 slice">
          <div class="apple1"></div>
          <div class="apple2"></div>
          <div class="apple3"></div>
          <div class="apple4"></div>
          <div class="apple5"></div>
        </div>
        <div class="slice4 slice">
          <div class="apple3"></div>
          <div class="apple4"></div>
          <div class="apple5"></div>
        </div>
        <div class="slice5 slice">
          <div class="apple3"></div>
          <div class="apple4"></div>
          <div class="apple5"></div>
        </div>
        <div class="slice6 slice">
          <div class="apple3"></div>
          <div class="apple4"></div>
          <div class="apple5"></div>
        </div>
        <div class="slice">
          <div class="apple6">
            <div class="apple61"></div>
          </div>
          <div class="apple7"></div>
          <div class="apple8"></div>
          <div class="apple9"></div>
        </div>
      </div>`,
      css: `
      #apple {
        height: 202px;
        overflow: hidden;
        position: relative;
        width: 172px;
      }
      #apple * {
        position: absolute;
      }
      #apple, .apple6, .apple7, .apple8, .apple61 {
        background: #f2f2f2;
      }

      .apple1,
      .apple2 {
        border-radius: 108px 108px 108px 94px/128px 128px 128px 128px;
        height: 128px;
        top: 47px;
        width: 108px;
      }
      .apple2 {
        left: 72px;
      }
      .apple3,
      .apple4 {
        border-radius: 22px 64px 64px 64px/106px 106px 106px 106px;
        height: 106px;
        left: 12px;
        transform: rotate(-25deg);
        top: 98px;
        width: 64px;
      }
      .apple4 {
        border-radius: 64px 22px 64px 64px/106px 106px 106px 106px;
        left: 103px;
        transform: rotate(25deg);
      }
      .apple5 {
        height: 145px;
        left: 54px;
        top: 53px;
        width: 70px;
      }
      .apple6 {
        left: 50px;
        transform: scaley(0.5);
        top: 14px;
      }
      .apple61 {
        border-radius: 20px;
        height: 80px;
        transform: rotate(-45deg) scale(0.9);
        width: 80px;
      }
      .apple7 {
        border-radius: 50%;
        height: 22px;
        left: 66px;
        top: 192px;
        width: 47px;
      }
      .apple8 {
        border-radius: 50%;
        height: 85px;
        left: 144px;
        top: 63px;
        width: 85px;
      }
      #apple .slice {
        height: 200px;
        width: 180px;
      }
      #apple .slice1 *,
      .apple9:before,
      .apple9:after {
        background: #62bb47;
      }
      #apple .slice2 * {
        background: #fcb827;
      }
      #apple .slice3 * {
        background: #f6821f;
      }
      #apple .slice4 * {
        background: #e03a3e;
      }
      #apple .slice5 * {
        background: #963d97;
      }
      #apple .slice6 * {
        background: #009ddc;
      }
      #apple .slice1 {
        clip: rect(0 180px 73px 0px);
      }
      #apple .slice2 {
        clip: rect(73px 180px 98px 0px);
      }
      #apple .slice3 {
        clip: rect(98px 180px 123px 0px);
      }
      #apple .slice4 {
        clip: rect(123px 180px 148px 0px);
      }
      #apple .slice5 {
        clip: rect(148px 180px 174px 0px);
      }
      #apple .slice6 {
        clip: rect(174px 180px 205px 0px);
      }
      .apple9 {
        left: 122px;
        top: -18px;
        transform: rotate(40deg);
      }
      .apple9:before, .apple9:after {
        border-radius: 50%;
        content: '';
        display: block;
        height: 90px;
        position: absolute;
        text-indent: -9999px;
        width: 90px;
      }
      .apple9:before {
        clip: rect(0 13px 80px 0px);
      }
      .apple9:after {
        clip: rect(14px 100px 76px 76px);
        left: -64px;
      }`
    },
    {
      name: 'Atari',
      html: `
      <div id="atari">
        <div class="icon">
          <div class="side1 side">
            <div class="atari1"></div>
            <div class="atari2"></div>
            <div class="atari3"></div>
            <div class="atari4"></div>
          </div>
          <div class="side2 side">
            <div class="atari1"></div>
            <div class="atari2"></div>
            <div class="atari3"></div>
            <div class="atari4"></div>
          </div>
        </div>
        <div class="pong">
          <div class="score1 score"></div>
          <div class="score2 score"></div>
          <div class="player1 player"></div>
          <div class="player2 player"></div>
          <div class="ball"></div>
        </div>
      </div>`,
      css: `
      #atari,
      .atari2,
      .atari4 {
        background: #111;
      }
      #atari {
        height: 304px;
        position: relative;
        width: 540px;
      }
      #atari .pong {
        left: 20px;
        position: absolute;
        top: 2px;
      }
      #atari .pong * {
        background: #fff;
        position: absolute;
      }

      @keyframes ball { 0%, 100% { left: 30px; top: 107px } 30% { left: 300px; top: 294px } 50% { left: 464px; top: 192px } 80% { left: 198px; top: 0px } }
      @keyframes player1 { 0%, 90%, 100% { top: 70px } 30% { top: 90px } 50% { top: 80px } 80% { top: 60px } }
      @keyframes player2 { 0%, 90%, 100% { top: 180px } 30% { top: 200px } 50% { top: 190px } 80% { top: 160px } }

      #atari .pong .ball {
        animation: ball 4s linear 0s infinite normal;
        height: 6px;
        left: 300px;
        top: 294px;
        width: 6px;
      }
      #atari .pong .player {
        height: 54px;
        width: 8px;
      }
      #atari .pong .player1 {
        animation: player1 4s linear 0s infinite alternate;
        left: 22px;
        top: 70px;
      }

      #atari .pong .player2 {
        animation: player2 4s linear 0s infinite normal;
        left: 470px;
        top: 180px;
      }
      #atari .pong .midfield {
        height: 240px;
        left: 247px;
        top: 30px;
        width: 6px;
      }
      #atari .icon {
        height: 200px;
        left: 153px;
        overflow: hidden;
        position: absolute;
        top: 52px;
        width: 234px;
      }
      #atari .icon * {
        position: absolute;
      }
      #atari .side2 {
        left: 234px;
        position: absolute;
        top: 0px;
        transform: scalex(-1);
      }
      .atari1,
      .atari3 {
        background: #fa000f;
      }
      .atari1 {
        height: 200px;
        left: 85px;
        width: 32px;
      }
      .atari2 {
        height: 256px;
        top: -53px;
        width: 141px}
      .atari2 {
        border-radius: 0 0 141px 141px/256px 256px 256px 256px;
        left: -34px;
        top: -22px;
      }
      .atari3 {
        border-radius: 0 0 200px 200px/334px 334px 334px 334px;
        bottom: 0;
        height: 334px;
        left: -101px;
        top: -135px;
        width: 200px;
      }
      .atari4 {
        border-radius: 0 0 183px 183px/239px 239px 239px 239px;
        height: 239px;
        left: -100px;
        top: -89px;
        width: 183px;
      }`,
      cssForThePage: `
      .showcase:after {
        background-image: linear-gradient(transparent 33%, #111 33%);
        background-size: 1px 3px;
        bottom: 0;
        content: '';
        left: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
      }
      `,
      background: `#111`,
    },
    {
      name: 'BP',
      html: `
      <div id="bp">
        <div class="circle1">
          <div class="leaf"><div class="leaf"><div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"></div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>
        </div>
        <div class="circle2">
          <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"> <div class="leaf"></div> </div> </div> </div> </div></div> </div> </div> </div> </div> </div></div> </div></div> </div> </div> </div> </div>
        </div>
        <div class="circle3">
          <div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div> </div></div></div>
        </div>
        <div class="circle4">
          <div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"><div class="leaf"></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div> </div></div></div>
        </div>
      </div>`,
      css: `
      #bp {
        height: 200px;
        overflow: hidden;
        position: relative;
        width: 200px;
      }
      #bp * {
        position: absolute;
      }

      #bp .leaf {
        border-radius: 50%;
        bottom: 0;
        font-size: 0;
        height: 100px;
        left: 24px;
        transform: rotate(20deg);
        width: 40px;
      }
      #bp .leaf:before,#bp .leaf:after {
        background: #009e01;
        border-radius: 137px/196px;
        clip: rect(15px 21px 127px 0px);
        content: "#";
        display: block;
        height: 141px;
        position: absolute;
        width: 98px;

      }
      #bp .leaf:before {
        left: 11px;
        top: 5px;
      }
      #bp .leaf:after {
        left: -47px;
        top: 5px;
        transform: rotate(180deg);
      }

      #bp .circle1 {
        left: 69px;
        top: 83px;
      }
      #bp .circle2 {
        left: 77px;
        top: 82px;
        transform: rotate(10deg) scale(0.82);
      }
      #bp .circle2 .leaf:before,#bp .circle2 .leaf:after {
        background: #80c300;
        clip: rect(13px 18px 134px 0px);
      }
      #bp .circle2 .leaf:before {
        left: 14px;
      }
      #bp .circle2 .leaf:after {
        left: -50px;
      }
      #bp .circle3 {
        left: 80px;
        top: 90px;
        transform: scale(0.63);
      }
      #bp .circle3 .leaf:before,#bp .circle3 .leaf:after {
        background: #fff001;
      }
      #bp .circle3 .leaf:before {
        clip: rect(13px 14px 133px 0px);
        left: 18px;
      }
      #bp .circle3 .leaf:after {
        clip: rect(14px 14px 134px 0px);
        left: -54px;
      }
      #bp .circle4 {
        left: 87.5px;
        top: 90.5px;
        transform: rotate(10deg) scale(0.47);
      }
      #bp .circle4 .leaf:before,#bp .circle4 .leaf:after {
        background: #fff;
        clip: rect(13px 10px 134px 0px);
      }
      #bp .circle4 .leaf:before {
        left: 22px;
      }
      #bp .circle4 .leaf:after {
        left: -58px;
      }
      `,
      background: `#ededed`,
    },
    {
      name: 'CBS',
      html: `
      <div id="cbs">
          <div class="cbs1"></div>
      </div>
      `,
      css: `
      #cbs {
        border-radius: 50%;
        height: 200px;
        width: 200px;
        position: relative;
      }
      #cbs,
      #cbs .cbs1 {
          background: #fff;
      }
      #cbs:before,
      #cbs:after
      {
          background-color: #12ABF8;
          border-radius: 50%;
          content: "";
          display: block;
          height: 204px;
          left: -2px;
          overflow: hidden;
          position: absolute;
          width: 204px;
      }
      #cbs:before {
          clip: rect(0 200px 58px 0);
          top: 44px;
      }
      #cbs:after {
          clip: rect(146px 200px 204px 0);
          top: -44px;
      }
      #cbs .cbs1 {
          border-radius: 50%;
          display: block;
          height: 106px;
          left: 47px;
          position: absolute;
          top: 49px;
          width: 106px;
          z-index: 10;
      }`,
      background: `#12ABF8`,
    },
    {
      name: 'Dribbble',
      html: `
      <div id="dribbble">
        <div class="dribbble1"></div>
        <div class="dribbble2"></div>
        <div class="dribbble3"></div>
        <div class="dribbble4"></div>
        <div class="dribbble5"></div>
      </div>`,
      css: `
      #dribbble {
          background: #f05e95;
          border-radius: 50%;
          height: 250px;
          position: relative;
          transform: scale(0.7);
          width: 250px;
      }
      #dribbble * {
        position: absolute;
      }
      .dribbble1 {
          background: #F58FB5;
          border-radius: 50%;
          height: 132px;
          left: 37px;
          top: 8px;
          transform: rotate(12deg);
          width: 200px;
      }
      #dribbble, .dribbble2, .dribbble3, .dribbble4 {
          border: 25px solid #cb386f;
      }
      .dribbble2 {
          border-radius: 50%;
          clip: rect(0px,200px,140px,0);
          height: 309px;
          left: 53px;
          top: 108px;
          width: 356px;
      }
      .dribbble3 {
          border-radius: 50%;
          clip: rect(230px, 390px, 360px, 180px);
          height: 309px;
          left: -192px;
          top: -234px;
          width: 353px;
      }
      .dribbble4 {
          border-radius: 50%;
          clip: rect(0, 1088px, 184px, 850px);
          height: 1164px;
          left: -1054px;
          top: -207px;
          transform: rotate(30deg);
          width: 1248px;
      }`,
      background: `#434950`,
    },
    {
      name: 'Magento',
      html: `
      <div id="magento">
        <div class="magento1"></div>
        <div class="magento2"></div>
        <div class="magento3"></div>
        <div class="magento4"></div>
        <div class="magento5"></div>
        <div class="magento6"></div>
        <div class="magento7"></div>
        <div class="magento8"></div>
        <div class="magento9"></div>
        <div class="magento10"></div>
      </div>`,
      css: `
      #magento {
        height: 210px;
        position: relative;
        width: 178px;
      }
      #magento * {
        position: absolute;
      }
      .magento1 {
        background: #f6844e;
        height: 104px;
        position: absolute;
        top: 26px;
        transform: skewy(-30deg);
        width: 89px;
      }
      .magento2 {
        background: #f6844e;
        height: 104px;
        left: 89px;
        position: absolute;
        top: 26px;
        transform: skewy(30deg);
        width: 89px;
      }
      .magento3 {
        background: #f15c22;
        height: 104px;
        position: absolute;
        top: 78px;
        transform: skewy(30deg);
        width: 89px;
      }
      .magento4 {
        background: #f15c22;
        height: 104px;
        left: 89px;
        position: absolute;
        top: 78px;
        transform: skewy(-30deg);
        width: 89px;
      }
      .magento5,.magento6,.magento7,.magento8,.magento9,.magento10 {
        background: #fff;
      }
      .magento5 {
        height: 105px;
        left: 22px;
        position: absolute;
        top: 72px;
        transform: skewy(30deg);
        width: 24px;
      }
      .magento6 {
        height: 105px;
        left: 133px;
        position: absolute;
        top: 72px;
        transform: skewy(-30deg);
        width: 24px;
      }
      .magento7 {
        height: 144px;
        left: 77px;
        position: absolute;
        top: 41px;
        transform: skewy(30deg);
        width: 12px;
      }
      .magento8 {
        height: 144px;
        left: 89px;
        position: absolute;
        top: 41px;
        transform: skewy(-30deg);
        width: 12px;
      }
      .magento9 {
        height: 78px;
        left: 44px;
        position: absolute;
        top: 20px;
        transform: rotate(60deg) skewy(30deg);
        width: 24px;
      }
      .magento10 {
        height: 78px;
        left: 111px;
        position: absolute;
        top: 20px;
        transform: rotate(-60deg) skewy(-30deg);
        width: 24px;
      }
      `,
    },
    {
      name: "McDonalds",
      title: "McDonald's",
      html: `
      <div id="mcdonalds">
        <div class="left">
          <div class="arch1 arch"></div>
          <div class="arch2 arch"></div>
          <div class="glow">
            <div class="arch1 arch"></div>
            <div class="arch2 arch"></div>
          </div>
          <div class="inner">
            <div class="arch1 arch"></div>
            <div class="arch2 arch"></div>
          </div>
          <div class="hole">
            <div class="arch1 arch"></div>
            <div class="arch2 arch"></div>
          </div>
          <div class="triangle1 triangle"></div>
          <div class="triangle2 triangle"></div>
        </div>
        <div class="right">
          <div class="arch1 arch"></div>
          <div class="arch2 arch"></div>
          <div class="glow">
            <div class="arch1 arch"></div>
            <div class="arch2 arch"></div>
          </div>
          <div class="inner">
            <div class="arch1 arch"></div>
            <div class="arch2 arch"></div>
          </div>
          <div class="triangle1 triangle"></div>
          <div class="hole">
            <div class="arch1 arch"></div>
            <div class="arch2 arch"></div>
          </div>
        </div>
        <div class="border1"></div>
        <div class="border2"></div>
      </div>`,
      css: `
      #mcdonalds {
        background-color: #c00;
        position: relative;
        height: 200px;
        overflow: hidden;
        width: 238px;
      }
      #mcdonalds * {
        position: absolute;
      }
      #mcdonalds .left,
      #mcdonalds .right,
      #mcdonalds .border1,
      #mcdonalds .border2 {
          margin-left: -130px;
      }
      #mcdonalds .arch {
        background: #ffc20f;
        border-radius: 139px/410px;
        clip: rect(0 75px 201px 0);
        height: 410px;
        position: absolute;
        transform: skewx(-1deg);
        width: 139px;
      }
      #mcdonalds .arch1 {
        left: 130px;
      }
      #mcdonalds .arch2 {
        left: 135px;
        transform: skewx(0deg) scalex(-0.9);
      }
      #mcdonalds .glow {
        clip: rect(0px 267px 189px 130px);
        left: 29px;
        position: absolute;
        top: 16px;
        transform: scalex(0.83) scaley(0.95);
      }
      #mcdonalds .glow .arch {
        background-image: linear-gradient(0deg,rgb(247,245,103) 70%,rgb(255,195,15) 100%);
      }
      #mcdonalds .inner {
        clip: rect(0 280px 222px 130px);
        left: 61px;
        position: absolute;
        top: 23px;
        transform: scalex(0.66);
      }
      #mcdonalds .inner .arch2 {
        left: 142px;
      }
      #mcdonalds .hole {
        clip: rect(0 270px 230px 130px);
        left: 61px;
        position: absolute;
        top: 23px;
        transform: scalex(0.66);
      }
      #mcdonalds .hole .arch {
        background: #c00;
      }
      #mcdonalds .hole .arch1 {
        clip: rect(5px 57px 201px 0);
        left: 158px;
        transform: skewx(0deg);
      }
      #mcdonalds .hole .arch2 {
        clip: rect(0 55px 201px 0);
        left: 124px;
        transform: skewx(-2deg) scalex(-0.9);
      }
      #mcdonalds .triangle {
        border: 14px solid transparent;
        border-bottom-color: #ffc20f;
        position: absolute;
      }
      #mcdonalds .triangle1 {
        left: 135px;
        top: 168px;
      }
      #mcdonalds .triangle2 {
        left: 236px;
        top: 156px;
      }
      #mcdonalds .right {
        clip: rect(0 249px 250px 0px);
        left: 498px;
        position: absolute;
        transform: scalex(-1);
      }
      #mcdonalds .right .glow {
        left: 40px;
      }
      #mcdonalds .right .inner {
        left: 71px;
      }
      #mcdonalds .right .inner .arch2 {
        left: 141px;
        transform: skewx(0deg) scalex(-0.9) rotate(1deg);
      }
      #mcdonalds .border1 {
        background: #ffc20f;
        height: 15px;
        left: 230px;
        position: absolute;
        top: 180px;
        width: 38px;
      }
      #mcdonalds .border2 {
        background: #c00;
        height: 15px;
        left: 229px;
        position: absolute;
        top: 189px;
        width: 40px;
      }`,
      background: `#c00`,
    },
    {
      name: 'Nike',
      html: `
      <div id="nike">
        <div class="icon">
          <div class="nike1"></div>
          <div class="nike2"></div>
          <div class="nike3"></div>
          <div class="nike4"></div>
          <div class="nike5"></div>
        </div>
      </div>`,
      css: `
      #nike {
        background-color: #ef3e1d;
        height: 132px;
        overflow: hidden;
        position: relative;
        width: 360px;
      }
      #nike * {
        position: absolute;
      }
      #nike .icon {
        left: -40px;
        top: 8px;
        transform: rotate(-23deg);
      }
      .nike1,.nike2,.nike3,.nike4,.nike5 {
      }
      .nike3,.nike5 {
        background: #ef3e1d;
      }
      .nike1,.nike2 {
        background: #fff;
      }
      .nike1 {
        border-radius: 101px/230px;
        height: 230px;
        left: 57px;
        top: -40px;
        transform: rotate(67deg);
        width: 101px;
        z-index: 11;
      }
      .nike2 {
        border-radius: 101px/207px;
        height: 207px;
        left: 53px;
        top: 1px;
        transform: rotate(84deg);
        width: 101px;
        z-index: 12;
      }
      .nike3 {
        height: 80px;
        left: 91px;
        top: 65px;
        width: 124px;
        z-index: 13;
      }
      .nike4 {
        border-top: 39px solid transparent;
        border-right: 0 none;
        border-bottom: 5px solid transparent;
        border-left: 276px solid #fff;
        left: 90px;
        top: 112px;
        z-index: 14;
      }
      .nike5 {
        border-radius: 97px/175px;
        height: 175px;
        left: 88px;
        top: -31px;
        transform: rotate(67deg);
        width: 97px;
        z-index: 15;
      }`,
      background: `#ef3e1d`,
    },
    {
      name: 'Pepsi',
      html: `
      <div id="pepsi">
        <div class="red1"></div>
        <div class="red2"></div>
        <div class="red3"></div>
        <div class="blue1"></div>
        <div class="blue2"></div>
        <div class="blue3"></div>
        <div class="white1"></div>
        <div class="white2"></div>
        <div class="drop1 drop"></div>
        <div class="drop2 drop"></div>
        <div class="drop3 drop"></div>
        <div class="drop4 drop"></div>
        <div class="drop5 drop"></div>
        <div class="drop6 drop"></div>
    </div>`,
      css: `
      #pepsi {
        background: #fff;
        border-radius: 50%;
        height: 220px;
        position: relative;
        width: 220px;
      }
      #pepsi * {
        position: absolute;
      }
      #pepsi .red1, #pepsi .red2, #pepsi .red3 {
          background: #ee3a43;
      }
      #pepsi .red1 {
          border-radius: 200px 0 0 0;
          clip: rect(0px 200px 79px 0);
          height: 100px;
          left: 10px;
          top: 10px;
          width: 100px;
      }
      #pepsi .red2 {
          border-radius: 0 200px 0 0;
          clip: rect(0px 200px 92px 0);
          height: 100px;
          left: 110px;
          top: 10px;
          width: 100px;
      }
      #pepsi .red3 {
          border-radius: 161px/117px;
          clip: rect(103px 140px 117px 30px);
          height: 117px;
          left: -17px;
          top: -15px;
          width: 161px;
      }
      #pepsi .blue1,#pepsi .blue2,#pepsi .blue3 {
          background: #016aab;
      }
      #pepsi .blue1 {
          border-radius: 0 0 0 200px;
          bottom: 10px;
          clip: rect(8px 200px 100px 0);
          height: 100px;
          left: 10px;
          width: 100px;
      }
      #pepsi .blue2 {
          border-radius: 0 0 200px 0;
          bottom: 10px;
          clip: rect(22px 200px 100px 0);
          height: 100px;
          left: 110px;
          width: 100px;
      }
      #pepsi .blue3 {
          border-radius: 161px/117px;
          clip: rect(0 132px 15px 29px);
          height: 117px;
          left: 75px;
          top: 118px;
          width: 161px;
      }
      #pepsi .white1 {
          background: #ffffff;
          border-radius: 161px/117px;
          clip: rect(0 136px 22px 0);
          height: 117px;
          left: 75px;
          position: absolute;
          top: 81px;
          width: 161px;
      }
      #pepsi .white2 {
          background: #ffffff;
          border-radius: 161px/117px;
          clip: rect(95px 136px 117px 0);
          height: 117px;
          left: -17px;
          position: absolute;
          top: 22px;
          width: 161px;
      }
      #pepsi .drop {
          border: 1px solid rgba(0,0,0,0.3);
          border-radius: 26px/30px;
          box-shadow: 0 2px 2px rgba(0,0,0,0.3);
          height: 30px;
          opacity: 0.6;
          width: 26px;
      }
      #pepsi .drop:before {
          background: linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 30%,rgba(255,255,255,0) 70%,rgba(255,255,255,0) 100%);
          border-radius: 20px;
          content: "";
          height: 20px;
          left: 4px;
          position: absolute;
          top: 2px;
          width: 18px;
      }
      #pepsi .drop:after {
          border-radius: 26px;
          background: linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0.5) 100%);
          box-shadow: 0 2px 0 #fff;
          content: "";
          height: 24px;
          left: 1px;
          position: absolute;
          top: 3px;
          width: 24px;
      }
      #pepsi .drop1 {
          left: 80px;
          top: 80px;
      }
      #pepsi .drop2 {
          left: 33px;
          top: 50px;
          transform: scale(0.6);
      }
      #pepsi .drop3 {
          left: 150px;
          top: 136px;
          transform: scale(0.7);
      }
      #pepsi .drop4 {
          left: 145px;
          top: 169px;
      }
      #pepsi .drop5 {
          left: 130px;
          top: 26px;
          transform: scale(0.9);
      }
      #pepsi .drop6 {
          left: 50px;
          top: 138px;
          transform: scale(0.7);
      }`,
      background: `#013668`,
    },
    {
      name: 'Twitter',
      html: `
      <div id="twitter" class="icon">
        <div class="twitter1 draw"></div>
        <div class="twitter2 mask"></div>
        <div class="twitter3 draw"></div>
        <div class="twitter4 mask"></div>
        <div class="twitter5 draw"></div>
        <div class="twitter6 draw"></div>
        <div class="twitter7 draw"></div>
        <div class="twitter8 mask"></div>
        <div class="twitter9 draw"></div>
        <div class="twitter10 draw"></div>
        <div class="twitter11 mask"></div>
        <div class="twitter12 draw"></div>
        <div class="twitter13 draw"></div>
        <div class="twitter14 draw"></div>
        <div class="twitter15 draw"></div>
        <div class="twitter16 draw"></div>
        <div class="twitter17 draw"></div>
        <div class="twitter18 draw"></div>
        <div class="twitter19 draw"></div>
        <div class="twitter20 draw"></div>
        <div class="twitter21 draw"></div>
        <div class="twitter22 draw"></div>
      </div>`,
      css: ``,
      cssForThePage: `
      #twitter {
        background: #33ccff ;
        height: 200px;
        position: absolute;
        width: 290px;
      }
      #twitter * {
        position: absolute;
      }
      #twitter .draw {
        background: white;
      }
      #twitter .mask {
        background: #33ccff;
      }
      #twitter .twitter1,
      #twitter .twitter3 {
        border-radius: 56px/33px;
        height: 33px;
        width: 56px;
      }
      #twitter .twitter1 {
        clip: rect(17px 70px 40px 0);
        left: 234px;
        top: 72px;
        transform: skewy(-4deg);
      }
      #twitter .twitter3 {
        clip: rect(18px 70px 40px 0);
        left: 232px;
        top: 56px;
        transform: skewy(-5deg);
      }
      #twitter .twitter2,
      #twitter .twitter4 {
        border-radius: 38px/10px;
        height: 10px;
        width: 38px;
      }
      #twitter .twitter2 {
        left: 254px;
        top: 83px;
        transform: rotate(5deg);
      }
      #twitter .twitter4 {
        left: 251px;
        top: 67px;
      }
      #twitter .twitter5 {
        border-radius: 148px;
        clip: rect(0 150px 72px 60px);
        height: 148px;
        left: 109px;
        top: 16px;
        width: 148px;
      }
      #twitter .twitter6 {
        border-radius: 258px/167px;
        bottom: 0;
        clip: rect(50px 130px 170px 0px);
        height: 167px;
        left: -5px;
        width: 258px;
      }
      #twitter .twitter7 {
        border-radius: 259px/208px;
        bottom: 0;
        clip: rect(91px 260px 220px 127px);
        height: 208px;
        left: -3px;
        transform: skewx(-5deg);
        width: 259px;
      }
      #twitter .twitter8 {
        border-radius: 149px;
        height: 149px;
        left: -22px;
        top: 16px;
        width: 149px;
      }
      #twitter .twitter9,
      #twitter .twitter10 {
        border-radius: 63px/157px;
        height: 157px;
        width: 63px;
      }
      #twitter .twitter9 {
        clip: rect(49px 20px 160px 0px);
        left: 149px;
        top: -20px;
        transform: rotate(27deg);
      }
      #twitter .twitter10 {
        clip: rect(26px 20px 50px 0px);
        left: 149px;
        top: -20px;
        transform: rotate(27deg);
      }
      #twitter .twitter11 {
        height: 10px;
        left: 182px;
        top: 3px;
        transform: rotate(20deg);
        width: 10px;
      }
      #twitter .twitter12 {
        border-radius: 8px/30px;
        height: 30px;
        left: 198px;
        top: -3px;
        transform: rotate(66deg);
        width: 8px;
      }
      #twitter .twitter13 {
        border-radius: 7px 13px 0 0/64px;
        height: 44px;
        left: 180px;
        top: -8px;
        transform: rotate(53deg);
        width: 9px;
      }
      #twitter .twitter14 {
        border-radius: 27px 137px 137px 137px/50px;
        clip: rect(0 130px 7px 14px);
        height: 50px;
        left: 29px;
        top: 47px;
        transform: rotate(24deg) skewx(32deg);
        width: 137px;
      }
      #twitter .twitter15 {
        border-radius: 36px/58px;
        clip: rect(14px 8px 60px 0);
        height: 58px;
        left: 48px;
        top: 5px;
        transform: rotate(-31deg);
        width: 36px;
      }
      #twitter .twitter16 {
        clip: rect(0px 30px 3px 0);
        border-radius: 30px/10px;
        height: 10px;
        left: 50px;
        top: 59px;
        width: 30px;
      }
      #twitter .twitter17 {
        clip: rect(31px 76px 62px 0);
        border-radius: 80px/62px;
        height: 62px;
        left: 51px;
        top: 31px;
        transform: skewx(10deg);
        width: 80px;
      }
      #twitter .twitter18 {
        clip: rect(0px 30px 7px 0);
        border-radius: 30px/20px;
        height: 20px;
        left: 64px;
        top: 91px;
        width: 30px;
      }
      #twitter .twitter19 {
        clip: rect(16px 40px 34px 0);
        border-radius: 40px 40px 40px 40px/34px;
        height: 34px;
        left: 65px;
        top: 81.5px;
        transform: skewx(23deg);
        width: 40px;
      }
      #twitter .twitter20 {
        border-radius: 40px 60px/34px;
        height: 34px;
        left: 86px;
        top: 109px;
        transform: rotate(-20deg) skewx(10deg) scale(0.9);
        width: 50px;
      }
      #twitter .twitter21 {
        background: none;
        border: 56px solid white;
        border-right: 59px solid transparent;
        border-top: 33px solid transparent;
        height: 0;
        left: 77px;
        top: 30px;
        transform: skewx(30deg);
        width: 0;
      }
      #twitter .twitter22 {
        background: none;
        border: 20px solid transparent;
        border-right-color: white;
        border-bottom-color: white;
        top: 54px;
        left: 130px;
      }`,
      background: `#3cf`,
    },
    {
      name: 'Windows',
      html: `
      <div id="windows">
        <div class="window1">
          <div class="window-e1"></div>
          <div class="window-e2 shadow1"></div>
          <div class="window-e2 shadow2"></div>
          <div class="window-e2"></div>
          <div class="window-e3"></div>
          <div class="window-e4 shadow3"></div>
          <div class="window-e4"></div>
        </div>
        <div class="window4">
          <div class="window-e1 shadow3"></div>
          <div class="window-e1"></div>
          <div class="window-e2 shadow1"></div>
          <div class="window-e2 shadow2"></div>
          <div class="window-e2"></div>
          <div class="window-e3"></div>

          <div class="window-e4"></div>
        </div>
        <div class="window3">
          <div class="window-e1"></div>
          <div class="window-e2 shadow1"></div>
          <div class="window-e2 shadow2"></div>
          <div class="window-e2"></div>
          <div class="window-e3"></div>
          <div class="window-e4 shadow3"></div>
          <div class="window-e4"></div>
        </div>
        <div class="window2">
          <div class="window-e1 shadow3"></div>
          <div class="window-e1"></div>
          <div class="window-e2 shadow1"></div>
          <div class="window-e2 shadow2"></div>
          <div class="window-e2"></div>
          <div class="window-e3"></div>
          <div class="window-e4"></div>
        </div>
      </div>`,
      css: `
      #windows {
        height: 220px;
        position: relative;
        transform: rotate(16deg);
        width: 188px;
      }
      #windows * {
        position: absolute;
      }
      #windows, .window-e4 {
        background: #4192d1;
      }
      .window-e1 {
        border-radius: 100px/67px;
        clip: rect(0px 77px 67px 0);
        height: 67px;
        left: 9px;
        top: 11px;
        width: 102px;
      }
      .window-e2 {
        height: 85px;
        left: 0;
        top: 27px;
        transform: skewy(-30deg);
        width: 25px;
      }
      .window-e3 {
        height: 41px;
        left: 24px;
        top: 64px;
        width: 62px;
      }
      .window-e4 {
        opacity: 1;
        border-radius: 100px/67px;
        clip: rect(0 77px 12px 16px);
        height: 67px;
        left: 9px;
        top: 96px;
        width: 100px;
      }
      .window1 {
        left: 0;
        top: 0;
      }
      .window1 .window-e1,.window1 .window-e2 {
        background: #d53407;
      }
      .window1 .window-e3 {
        background-image: radial-gradient(circle at 100% 100%, #ebbd2c, #D53407 60%); /* standard syntax */
      }
      .window2 {
        left: 183px;

        transform: rotate(180deg);
        top: 119px;
      }
      .window2 .window-e1 {
        background-image: radial-gradient(100% 0%, circle, #c7d78e, #7dae1c 50%); /* legacy syntax */
        background-image: radial-gradient(circle at 100% 0%, #c7d78e, #7dae1c 50%); /* standard syntax */
      }
      .window2 .window-e2,.window2 .window-e3 {
        background: #7dae1c;
      }
      .window3 {
        left: 0;
        top: 95px;
      }
      .window3 .window-e1,.window3 .window-e2,.window3 .window-e3 {
        background: #3576ac;
      }
      .window3 .window-e1 {
        background-image: radial-gradient(100% 0%, circle, #b7d7ec, #3576ac 50%); /* legacy syntax */
        background-image: radial-gradient(circle at 100% 0%, #b7d7ec, #3576ac 50%); /* standard syntax */
      }
      .window4 {
        left: 183px;
        transform: rotate(180deg);
        top: 214px;
      }
      .window4 .window-e1,.window4 .window-e2 {
        background: #fac112;
      }
      .window4 .window-e3 {
        background-image: radial-gradient(circle at 100% 100%, #f5e2a8, #fac112 70%); /* standard syntax */
      }
      #windows .registered {
        left: 190px;
        transform: rotate(-16deg);
        top: 160px;
      }
      #windows .shadow1,#windows .shadow2,#windows .shadow3 {
        background: #3c86c0;
      }
      .window1 .window-e4,.window3 .window-e4 {
        top: 101px;
      }
      .window1 .shadow1,.window3 .shadow1 {
        left: 65px;
        clip: rect(0px 30px 94px 21px);
        transform: skewy(30deg);
        top: 16px;
      }
      .window1 .shadow2,.window3 .shadow2 {
        clip: rect(50px 40px 90px 5px);
        top: 30px;
        width: 32px;
      }
      .window1 .shadow3,.window3 .shadow3 {
        clip: rect(0 77px 12px 16px);
        top: 96px;
      }
      .window2 .shadow1,.window4 .shadow1 {
        clip: rect(0px 10px 90px 5px);
        left: -10px;
        top: 28px;
      }
      .window2 .shadow2,.window4 .shadow2 {
        clip: rect(70px 40px 90px 5px);
        left: -6px;
        top: -44px;
      }
      .window2 .shadow3,.window4 .shadow3 {
        clip: rect(0 73px 22px 0px);
        left: 9px;
        top: 6px;
      }`,
      background: `#4192d1`,
    },
    // {
    //   name: '',
    //   html: ``,
    //   css: ``,
    //   cssForThePage: ``,
    //   background: ``,
    // },
  ]
}
