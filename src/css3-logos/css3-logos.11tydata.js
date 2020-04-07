module.exports = {
  layout: 'layouts/css3-logos.njk',
  logos: [
    {
      'name': 'Adidas Originals',
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
      'name': 'Apple',
    },
    {
      'name': 'Pepsi',
    },
  ]
}
