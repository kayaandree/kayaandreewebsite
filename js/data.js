/* ==========================================================================
   Central image manifest.
   To add or swap an image: drop the file in the matching folder and add
   its filename to the array below. Nothing else needs to change.
   ========================================================================== */

const SITE_DATA = {
  home: {
    folder: 'home page',
    images: [
      '2F9A4773 2.JPG',
      '8528 - 2026.06.05 - Kaya Kelly - Kodak Gold 200 -26-2 copie.jpg',
      'IMG_9231.jpg',
      '_MG_9107.jpg',
      '_MG_9123.jpg',
      'andorrab copie.jpg',
      'andorraor copie.jpg',
      'bee copie.jpg',
      'plast copie.jpg',
      'poppy copie.jpg',
      'purple moon copie.jpg',
      'redgreen copie.jpg',
      'volcano copie.jpg',
      'water copie.jpg',
      'yardback copie.jpg'
    ]
  },

  // Artist statement lifted from the top of "Painting descriptions.pdf"
  paintingsStatement:
    "It is hard to express what is not meant to be defined. I am most inspired by love and spite. Each piece starts as a hum in the back of my throat growing louder until I can’t constrain it. Then I make something and put it here.",

  paintings: {
    folder: 'paintings',
    items: [
      {
        file: 'Playdoh.jpeg',
        name: 'Playdoh',
        medium: 'Print on Paper',
        fullWidth: true,
        sideBySide: true,
        imgBigger: true,
        desc: "Inspired by Plato’s Analogy of the cave, this piece comments on our inability to see. We may sometimes have a glimpse into the way things are or why they are that way but our grasp is limited and irrational. Our understanding of the present is molded by what we have learned in the past. We never experience anything without any prior existence. Our experience of reality is merely a perception. Until we understand that, we are trapped in the cycles and patterns of our reactions.\n\nTo break away from this, you must understand your oneness with this world. You are not individual, the world is not your other. We are collective, connected, whatever you want to call it, we are one."
      },
      {
        file: 'What?.jpg',
        name: 'What?',
        medium: 'Mixed Media on Paper',
        alignEnd: true,
        desc: 'I think therefore'
      },
      {
        file: 'ahah.jpg',
        name: 'ahah',
        medium: 'Color pencil on paper',
        cropTop: true,
        alignEnd: true,
        desc: 'Too much to say.'
      },
      {
        file: 'Lily Lady.JPG',
        name: 'Lily Lady',
        medium: 'Acrylic on canvas',
        desc: 'Lily Lady lives in Lily Land\nLily Lady never chose to be a Lily Lady but\nLily Lady was born in Lily Land so\nLily Lady must be a Lily Lady\nLily Lady is the reason Lily Land is Lily Land is the reason\nLily Lady is Lily Lady\nLily Lady has never considered if she liked living in Lily Land or if she liked being a Lily Lady'
      },
      {
        file: 'Just One More.jpg',
        name: 'Just One More!',
        medium: 'Acrylic on canvas',
        wideText: true,
        desc: "I loveeee sprinkles. They are so colorful and fun to look at. They can make anything look better. If you mess up a cake or the cookies you made are a bit burnt, just add some sprinkles. It won’t help too much with the flavor or anything but at least it will look nice. Anyways, it’s not like I was going to marry the sprinkles or anything. They’re just for fun.\n\nIn case that was a bit too cryptic, modern women have been lobotomized by extreme expectations of beauty. Conscious of it or not, they will in some way or another base their worth at least partially on their appearance. Self objectification and sexualization prompts the same treatment from others. The more time a woman spends obsessing over her appearance, the less time she has with herself, to create, and to love. The more importance allocated to a woman’s beauty, the less attention paid to other qualities of her identity."
      },
      {
        file: 'No Brainer.jpg',
        name: 'No Brainer',
        medium: 'Acrylic on canvas',
        fullWidth: true,
        sideBySide: true,
        imgMuchBigger: true,
        desc: "Are you thinking with your dick for biological, evolutionary, or societal reasons?\n\nWhat do we do in the inevitable case that it's actually a fun mix of all three?\n\nWhile we figure this out, do you mind not looking at my boobs, please?"
      },
      {
        file: 'Do You Really?.jpeg',
        name: 'Do You Really?',
        medium: 'Acrylic on canvas',
        wideText: true,
        desc: 'As women, our bodies will never be left alone. An attractive body will be lusted after, left sexualized and inanimate while an unattractive body is scrutinized and shamed. The catch, however, is that standards of beauty are neither stagnant nor unanimous. A woman can be simultaneously praised and shamed for the body she has despite never bringing attention to it herself.\n\nThe obsession with women’s bodies prompts inherent objectification and women’s lack of autonomy. Emphasized importance of women’s physical appearances diminishes the perceived value or all other aspects of their identities. Violence and sexual violence towards women is driven by societies that do not view them as fully human.'
      },
      {
        file: 'You Are The River Btw.jpg',
        name: 'You Are The River Btw',
        medium: 'Oil on a piece of cardboard',
        desc: 'Do not blame the river because you have stumbled and fallen into it.'
      },
      {
        file: 'Tout Pour Toi.jpeg',
        name: 'Tout Pour Toi',
        medium: 'Acrylic on Paper',
        desc: '"In the act of loving, of giving myself, in the act of penetrating the other person, I find myself, I discover myself, I discover us both, I discover man."\n— Erich Fromm'
      },
      {
        file: 'Madiana.JPG',
        name: 'Madiana',
        medium: 'Mixed media on paper',
        wideText: true,
        desc: "Pour cette œuvre, j’ai dû prendre des centaines de photos de la Martinique, les découper et les recoller afin de représenter une mulâtresse, une femme typique de la Martinique. J’ai été inspirée par la poterie de Sylvain Fillon. Beaucoup des poteries qu’il crée rendent hommage à la Martinique et à la culture martiniquaise.\n\nElle porte un foulard en tissu madras, qui a été introduit en Martinique lorsque les colons ont ramené des Indiens pour faire le travail que les esclaves nouvellement libérés ne voulaient plus faire. À ses oreilles, elle porte des boucles d’oreilles créoles, que toutes les filles rêvent de porter quand elles seront plus grandes.\n\nOn oublie souvent notre histoire et on n’apprécie pas assez notre culture à cause de cela. Petite, on se moquait de moi parce que j’étais martiniquaise, en disant qu’on n’était pas des gens civilisés, qu’on venait d’un pays pauvre ou qu’on avait un accent drôle. Aujourd’hui, je ne pourrais pas être plus fière de mon pays."
      },
      {
        file: 'From Memory.jpg',
        name: 'From Memory',
        medium: 'Acrylic on canvas',
        fullWidth: true,
        shrink: true,
        desc: 'You are familiar.'
      },
      {
        file: 'Simple Stupid Swirly Love.JPG',
        name: 'Stupid Swirly Love',
        medium: 'Acrylic on paper',
        smaller: true,
        desc: 'Blah blah blah big feelings blah blah blah who cares?'
      },
      {
        file: 'Yikes!.jpeg',
        name: 'Yikes!',
        medium: 'Mixed media on canvas',
        bigger: true,
        desc: 'Through suffering, we cause suffering.\nWe must learn to transform our suffering into love to heal ourselves and others.\nTo do so, one must have grace.'
      },
      {
        file: 'Commission Peice.jpg',
        name: 'Commission Piece',
        medium: 'Acrylic on canvas',
        fullWidth: true,
        shrink: true,
        desc: ''
      }
    ]
  },

  portraits: {
    folder: 'Photography/portraits',
    subsections: [
      {
        key: 'bayko',
        folder: 'Bayko',
        title: 'Bayko',
        images: [
          '3.jpg',
          '6.jpg',
          '4.jpg',
          'multi exposure.jpg',
          'color 1.jpg',
          'b&w 1.jpg',
          'color 2.jpg',
          'b&w 2.jpg'
        ],
        // 5 cells (the two toggle pairs each count as one frame): row of 3, then row of 2.
        // 3.jpg is very slightly zoomed/cropped within its own frame. Top-right toggles
        // between 4.jpg and the multi-exposure shot every 1s, freezing on 4.jpg on hover.
        layout: [
          [{ file: '3.jpg', zoom: 1.06 }, '6.jpg', { toggle: ['4.jpg', 'multi exposure.jpg'], intervalMs: 1000, hoverIndex: 0 }],
          [{ toggle: ['color 1.jpg', 'b&w 1.jpg'] }, { toggle: ['color 2.jpg', 'b&w 2.jpg'] }]
        ]
      },
      {
        key: 'elisabetta',
        folder: 'Elisabetta',
        title: 'Elisabetta',
        images: [],
        layout: []
      },
      {
        key: 'street',
        folder: '',
        title: 'Street',
        images: [
          '8528 - 2026.06.05 - Kaya Kelly - Kodak Gold 200 -2 copie.jpg',
          'ccd37838-accb-49a3-a7e7-d002e598a9dd_rw_1920 copie.jpg',
          'IMG_7142 copie.jpg'
        ],
        layout: [
          ['8528 - 2026.06.05 - Kaya Kelly - Kodak Gold 200 -2 copie.jpg', 'ccd37838-accb-49a3-a7e7-d002e598a9dd_rw_1920 copie.jpg', 'IMG_7142 copie.jpg']
        ]
      }
    ]
  },

  events: {
    folder: 'Photography/event photography',
    groups: [
      {
        key: 'club',
        folder: 'club',
        title: 'Events',
        subLabel: 'Club',
        images: [
          '1-IMG_1520 copie.jpg',
          '2-IMG_8659 copie.jpg',
          '3-IMG_3307 2 copie.jpg',
          '4-IMG_5461 copie.jpg',
          '5-IMG_8546 copie.jpg',
          '6-IMG_8547 copie.jpg',
          '7-IMG_8551 copie.jpg',
          '8-IMG_5981 copie.jpg',
          '9-IMG_8709 copie.jpg',
          '10-IMG_5926 copie.jpg',
          '11-IMG_8737 copie.jpg',
          '12-IMG_8700 copie.jpg',
          '13-IMG_8763 copie.jpg',
          '14-IMG_8696 copy copie.jpg',
          '15-IMG_8572 copie.jpg',
          '16-IMG_8566 copie.jpg',
          '17-IMG_5961 copie.jpg',
          '18-IMG_8557 copie.jpg',
          '20-IMG_8480_Nero_AI_Image_Denoiser_100% copie.jpeg',
          '21-IMG_8632 copie.jpg',
          '22-IMG_5949 copie.jpg',
          '23-IMG_8515 copie.jpg'
        ],
        // Rows 1-4: simple pairs/trios. Row 5: 11 next to 12-over-13 stacked.
        // Row 6: 15-over-16 stacked next to 14. Rows 7-8 (17,18,20,21,22,23):
        // free arrangement, two rows of three. 19 and 24 intentionally left out.
        layout: [
          ['1-IMG_1520 copie.jpg', '2-IMG_8659 copie.jpg'],
          ['3-IMG_3307 2 copie.jpg', '4-IMG_5461 copie.jpg'],
          ['5-IMG_8546 copie.jpg', '6-IMG_8547 copie.jpg', '7-IMG_8551 copie.jpg'],
          ['8-IMG_5981 copie.jpg', '9-IMG_8709 copie.jpg', '10-IMG_5926 copie.jpg'],
          ['11-IMG_8737 copie.jpg', ['12-IMG_8700 copie.jpg', '13-IMG_8763 copie.jpg']],
          [['15-IMG_8572 copie.jpg', '16-IMG_8566 copie.jpg'], '14-IMG_8696 copy copie.jpg'],
          ['17-IMG_5961 copie.jpg', '18-IMG_8557 copie.jpg', '20-IMG_8480_Nero_AI_Image_Denoiser_100% copie.jpeg'],
          ['21-IMG_8632 copie.jpg', '22-IMG_5949 copie.jpg', '23-IMG_8515 copie.jpg']
        ]
      },
      {
        key: 'boat',
        folder: 'boat',
        title: 'Boat Party',
        headingStyle: 'label',
        images: [
          '1-IMG_6198 copie.jpg',
          '2-IMG_6201 copie.jpg',
          '3-IMG_6160 copie.jpg',
          '4- IMG_6176 copie.jpg',
          '5-IMG_6053 copie.jpg'
        ],
        // Row 1: photos 1+2 side by side (1 very slightly zoomed/cropped in its frame).
        // Row 2: photo 3 next to 4-over-5 stacked.
        layout: [
          [{ file: '1-IMG_6198 copie.jpg', zoom: 1.06 }, '2-IMG_6201 copie.jpg'],
          ['3-IMG_6160 copie.jpg', ['4- IMG_6176 copie.jpg', '5-IMG_6053 copie.jpg']]
        ]
      },
      {
        key: 'volleyball',
        folder: 'volleyball',
        title: 'Beach',
        headingStyle: 'label',
        images: [
          'IMG_5498 copie.jpg',
          'IMG_5503 copie.jpg',
          'IMG_5512 copie.jpg',
          'IMG_5513 copie.jpg',
          'IMG_5521 copie.jpg',
          'IMG_5570 copie.jpg',
          'IMG_5611 copie.jpg',
          'IMG_5615 copie.jpg',
          'IMG_5713 copie.jpg',
          'IMG_5721 copie-2.jpg',
          'IMG_5754 copie-2.jpg'
        ],
        // 11 photos: three even rows of 3, then a final row of 2 — every row
        // still full width and matched height, so edges stay straight.
        layout: [
          ['IMG_5498 copie.jpg', 'IMG_5503 copie.jpg', 'IMG_5512 copie.jpg'],
          ['IMG_5513 copie.jpg', 'IMG_5521 copie.jpg', 'IMG_5570 copie.jpg'],
          ['IMG_5611 copie.jpg', 'IMG_5615 copie.jpg', 'IMG_5713 copie.jpg'],
          ['IMG_5721 copie-2.jpg', 'IMG_5754 copie-2.jpg']
        ]
      }
    ]
  },

  film: {
    folder: 'Photography/film',
    subsections: [
      {
        key: 'vietnam',
        folder: 'Vietnam',
        title: 'Vietnam',
        images: [
          '000004 copie.jpg',
          '000005 copie.jpg',
          '000010 copie.jpg',
          '000015 copie.jpg',
          '000018 copie.jpg',
          '000034 copie.jpg',
          '000035 copie.jpg',
          '000043 copie.jpg',
          '000051 copie.jpg',
          '000055 copie.jpg',
          '000065 copie.jpg'
        ],
        // 11 photos: rows of 3, with the last row left at 2 to keep every edge straight.
        layout: [
          ['000004 copie.jpg', '000005 copie.jpg', '000010 copie.jpg'],
          ['000015 copie.jpg', '000018 copie.jpg', '000034 copie.jpg'],
          ['000035 copie.jpg', '000043 copie.jpg', '000051 copie.jpg'],
          ['000055 copie.jpg', '000065 copie.jpg']
        ]
      },
      {
        key: 'italy',
        folder: 'Italy',
        title: 'Italy',
        images: [
          '000105680017 copie.jpg',
          '000105680018 copie.jpg',
          '000105680019 copie.jpg',
          '000105680021 copie.jpg',
          '0c6be7d1-14a3-4062-99cf-9614d8e0259e_rw_600 copie.jpg',
          'it copie.jpg'
        ],
        // 6 photos: two even rows of 3.
        layout: [
          ['000105680017 copie.jpg', '000105680018 copie.jpg', '000105680019 copie.jpg'],
          ['000105680021 copie.jpg', '0c6be7d1-14a3-4062-99cf-9614d8e0259e_rw_600 copie.jpg', 'it copie.jpg']
        ]
      }
    ]
  },

  otherPrettyThings: {
    folder: 'Other Pretty Things',
    images: [
      '000105680013 copie.jpg',
      '000105680014 copie.jpg',
      '000105680031 copie.jpg',
      '000105680033 copie.jpg',
      '9131 - 2026.06.18 - Kaya Kelly - Agfacolor 200 -24 copie.jpg',
      '9132 - 2026.06.18 - Kaya Kelly - Cinestill 400D -3 copie.jpg',
      'andorra copie.jpg',
      'andorraor copie.jpg',
      'andorraw copie.jpg',
      'colordark copie.jpg',
      'colorlight copie.jpg',
      'd09f8aa6-db7f-4b82-8880-450ea39770be_rw_1920 copie.jpg',
      'greece copie.jpg',
      'moto copie.jpg',
      'untitled-713 copie.jpg'
    ],
    // 15 photos: five even rows of 3.
    layout: [
      ['000105680013 copie.jpg', '000105680014 copie.jpg', '000105680031 copie.jpg'],
      ['000105680033 copie.jpg', '9131 - 2026.06.18 - Kaya Kelly - Agfacolor 200 -24 copie.jpg', '9132 - 2026.06.18 - Kaya Kelly - Cinestill 400D -3 copie.jpg'],
      ['andorra copie.jpg', 'andorraor copie.jpg', 'andorraw copie.jpg'],
      ['colordark copie.jpg', 'colorlight copie.jpg', 'd09f8aa6-db7f-4b82-8880-450ea39770be_rw_1920 copie.jpg'],
      ['greece copie.jpg', 'moto copie.jpg', 'untitled-713 copie.jpg']
    ]
  },

  info: {
    folder: 'info',
    images: ['FullSizeRender copie.jpg']
  }
};
