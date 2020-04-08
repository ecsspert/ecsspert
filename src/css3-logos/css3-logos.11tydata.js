module.exports = {
  layout: 'layouts/css3-logos.njk',
  logos: [
    {
      name: 'Adidas Originals',
      background: '#017ac3',
      html: `<div id="adidas" class="icon">
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
      css: `#adidas, #adidas .stripes {
              background: #017ac3;
            }
            #adidas {
              height: 213px;
              overflow: hidden;
              width: 305px;
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
      name: 'Apple',
      background: '#f2f2f2',
      html: `<div id="apple" class="icon">
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
    css: `#apple, .apple6, .apple7, .apple8, .apple61 {
      background: #f2f2f2;
    }
    #apple {
      height: 202px;
      width: 172px;
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
      name: 'Pepsi',
    },
  ]
}
