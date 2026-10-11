/* ==========================================================================
   Central image manifest.
   To add or swap an image: drop the file in the matching folder and add
   its filename to the array below. Nothing else needs to change.
   ========================================================================== */

const SITE_DATA = {
  home: {
    folder: 'home page',
    video: 'Homepagebackground.mov'
  },

  // Artist statement lifted from the top of "Painting descriptions.pdf"
  paintingsStatement:
    "It is hard to express what is not meant to be defined. I am most inspired by love and spite.",

  paintings: {
    folder: 'paintings',
    items: [
      {
        file: 'Playdoh.jpeg',
        name: 'Playdoh',
        medium: 'Print on Paper, 2023',
        fullWidth: true,
        sideBySide: true,
        imgBigger: true,
        desc: "Inspired by Plato’s Analogy of the cave, this piece comments on our inability to see. We may sometimes have a glimpse into the way things are or why they are that way but our grasp is limited and irrational. Our understanding of the present is molded by what we have learned in the past. We never experience anything without any prior existence. Our experience of reality is merely a perception. Until we understand that, we are trapped in the cycles and patterns of our reactions.\n\nTo break away from this, you must understand your oneness with this world. You are not individual, the world is not your other."
      },
      {
        file: 'What?.jpg',
        name: 'Small',
        medium: 'Mixed Media on Paper, 2022',
        alignEnd: true,
      },
      {
        file: 'ahah.jpg',
        name: 'ahah',
        medium: 'Color pencil on paper, 2023',
        cropTop: true,
        alignEnd: true,
      },
      {
        file: 'Lily Lady.JPG',
        name: 'Lily Lady',
        medium: 'Acrylic on canvas, 2025',
        desc: 'Lily Lady lives in Lily Land\nLily Lady never chose to be a Lily Lady but\nLily Lady was born in Lily Land so\nLily Lady must be a Lily Lady\nLily Lady is the reason Lily Land is Lily Land is the reason\nLily Lady is Lily Lady\nLily Lady has never considered if\nLily Lady liked living in Lily Land or if\nLily Lady liked being a\nLily Lady'
      },
      {
        file: 'Just One More.jpg',
        name: 'Just One More!',
        medium: 'Acrylic on canvas, 2025',
        wideText: true,
        desc: "I loveeee sprinkles. They are so colorful and fun to look at. They can make anything look better. If you mess up a cake or the cookies you made are a bit burnt, just add some sprinkles. It won’t help too much with the flavor or anything but at least it will look nice. Anyways, it’s not like I was going to marry the sprinkles or anything. They’re just for fun.\n\nIn case that was a bit too cryptic, modern women have been lobotomized by extreme expectations of beauty. Conscious of it or not, they will in some way or another base their worth at least partially on their appearance. Self objectification and sexualization prompts the same treatment from others. The more time a woman spends obsessing over her appearance, the less time she has with herself, to create, and to love. The more importance allocated to a woman’s beauty, the less attention paid to other qualities of her identity."
      },
      {
        file: 'No Brainer.jpg',
        name: 'No Brainer',
        medium: 'Acrylic on canvas, 2025',
        fullWidth: true,
        sideBySide: true,
        imgMuchBigger: true,
        spaceAround: true,
        desc: "Are you thinking with your dick for biological, evolutionary, or societal reasons?\n\nWhat do we do in the inevitable case that it's actually a fun mix of all three?\n\nWhile we figure this out, do you mind not looking at my boobs, please?"
      },
      {
        file: 'Do You Really?.jpeg',
        name: 'Do You Really?',
        medium: 'Acrylic on canvas, 2024',
        wideText: true,
        desc: 'As women, our bodies will never be left alone. An attractive body will be lusted after, left sexualized and inanimate while an unattractive body is scrutinized and shamed. The catch, however, is that standards of beauty are neither stagnant nor unanimous. A woman can be simultaneously praised and shamed for the body she has despite never bringing attention to it herself.\n\nThe obsession with women’s bodies prompts inherent objectification and women’s lack of autonomy. Emphasized importance of women’s physical appearances diminishes the perceived value or all other aspects of their identities. Violence and sexual violence towards women is driven by societies that do not view them as fully human.'
      },
      {
        file: 'You Are The River Btw.jpg',
        name: 'You Are The River Btw',
        medium: 'Oil on a piece of cardboard, 2024',
        // Narrowed so its height matches Do You Really? beside it (1920x2459 vs
        // this 1920x2741: 2459 / 2741 = 0.897). Aspect ratio unchanged.
        imgScale: 0.897,
        desc: 'Do not blame the river because you have stumbled and fallen into it.'
      },
      {
        file: 'Tout Pour Toi.jpeg',
        name: 'Tout Pour Toi',
        medium: 'Acrylic on Paper, 2025',
        desc: '"In the act of loving, of giving myself, in the act of penetrating the other person, I find myself, I discover myself, I discover us both, I discover man."\n— Erich Fromm'
      },
      {
        file: 'Madiana.JPG',
        name: 'Madiana',
        medium: 'Mixed media on paper, 2023',
        wideText: true,
        // Narrowed so its height matches Tout Pour Toi beside it (1738x2395 vs
        // this 3583x5252: 1.3780 / 1.4658 = 0.940). Aspect ratio unchanged.
        imgScale: 0.940,
        desc: "Pour cette œuvre, j’ai dû prendre des centaines de photos de la Martinique, les découper et les recoller afin de représenter une mulâtresse, une femme typique de la Martinique. J’ai été inspirée par la poterie de Sylvain Fillon. Beaucoup des poteries qu’il crée rendent hommage à la Martinique et à la culture martiniquaise.\n\nElle porte un foulard en tissu madras, qui a été introduit en Martinique lorsque les colons ont ramené des Indiens pour faire le travail que les esclaves nouvellement libérés ne voulaient plus faire. À ses oreilles, elle porte des boucles d’oreilles créoles, que toutes les filles rêvent de porter quand elles seront plus grandes.\n\nOn oublie souvent notre histoire et on n’apprécie pas assez notre culture à cause de cela. Petite, on se moquait de moi parce que j’étais martiniquaise, en disant qu’on n’était pas des gens civilisés, qu’on venait d’un pays pauvre ou qu’on avait un accent drôle. Aujourd’hui, je ne pourrais pas être plus fière de mon pays."
      },
      {
        file: 'Lol.jpg',
        name: 'Lol',
        medium: 'Mixed media on canvas, 2026',
      },
      {
        file: 'Simple Stupid Swirly Love.JPG',
        name: 'Stupid Swirly Love',
        medium: 'Acrylic on paper, 2023',
        // Narrowed so its height matches Lol beside it (Lol is 1178x1500,
        // this is 2726x3822: 1.2733 / 1.4021 = 0.908). Aspect ratio unchanged.
        imgScale: 0.908,
        desc: 'Blah blah blah big feelings blah blah blah who cares?'
      },
      {
        file: 'Yikes!.jpeg',
        name: 'Yikes!',
        medium: 'Mixed media on canvas, 2024',
        bigger: true,
        desc: 'Through suffering, we cause suffering.\nWe must learn to transform our suffering into love to heal ourselves and others.\nTo do so, one must have grace.'
      },
      {
        file: 'Commission Peice.jpg',
        name: 'Commission Piece',
        medium: 'Acrylic on canvas, 2024',
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
        title: 'Bayko, 2025',
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
        title: 'Eli',
        images: [
          'eli1.jpg',
          'eli3.jpg',
          'eli13.jpg'
        ],
        // 3 photos: a single row of 3.
        layout: [
          ['eli1.jpg', 'eli3.jpg', 'eli13.jpg']
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
        subLabel: 'Club, 2025',
        images: [
          '1-IMG_1520 copie.jpg',
          '2-IMG_8659 copie.jpg',
          '5-IMG_8546 copie.jpg',
          '9-IMG_8709 copie.jpg',
          '25-red-dance.jpg',
          '11-IMG_8737 copie.jpg',
          '12-IMG_8700 copie.jpg',
          '15-IMG_8572 copie.jpg',
          '16-IMG_8566 copie.jpg',
          '21-IMG_8632 copie.jpg',
          '23-IMG_8515 copie.jpg'
        ],
        // Row 1: 1+2. Row 2: 5, 9, 25 (red dance-floor shot).
        // Row 3: 11+12. Row 4: 15+16. Row 5: 21+23.
        layout: [
          ['1-IMG_1520 copie.jpg', '2-IMG_8659 copie.jpg'],
          ['5-IMG_8546 copie.jpg', '9-IMG_8709 copie.jpg', '25-red-dance.jpg'],
          ['11-IMG_8737 copie.jpg', '12-IMG_8700 copie.jpg'],
          ['15-IMG_8572 copie.jpg', '16-IMG_8566 copie.jpg'],
          ['21-IMG_8632 copie.jpg', '23-IMG_8515 copie.jpg']
        ]
      },
      {
        key: 'boat',
        folder: 'boat 2026',
        title: 'Boat Party, 2026',
        headingStyle: 'label',
        images: [
          '1.jpg',
          '2.jpg',
          '3.jpg',
          '4.jpg',
          '5.jpg'
        ],
        // Row 1: photo 1 (portrait) next to 2-over-3 stacked.
        // Row 2: photo 4 (portrait) next to 5.
        layout: [
          ['1.jpg', ['2.jpg', '3.jpg']],
          ['4.jpg', '5.jpg']
        ]
      },
      {
        key: 'volleyball',
        folder: 'volleyball',
        title: 'Integration Weekend, 2025',
        headingStyle: 'label',
        images: [
          'IMG_5503 copie.jpg',
          'IMG_5521 copie.jpg',
          'IMG_5570 copie.jpg',
          'IMG_5721 copie-2.jpg',
          'IMG_5754 copie-2.jpg'
        ],
        // 5 photos: a row of 3 landscapes, then the 2 portraits side by side.
        layout: [
          ['IMG_5503 copie.jpg', 'IMG_5521 copie.jpg', 'IMG_5570 copie.jpg'],
          ['IMG_5721 copie-2.jpg', 'IMG_5754 copie-2.jpg']
        ]
      }
    ]
  },

  film: {
    folder: 'Photography/film',
    subsections: [
      {
        key: 'world-cup-final-2026-bcn',
        folder: '2026 World Cup Final, Barcelona',
        title: '2026 World Cup Final, Barcelona',
        images: [
          '1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -11 copie.jpg',
          '1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -12 copie.jpg',
          '1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -13 copie.jpg',
          '1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -18 copie.jpg',
          '1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -24 copie.jpg',
          '1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -28 copie.jpg'
        ],
        // 6 photos: three even rows of 2.
        layout: [
          ['1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -11 copie.jpg', '1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -12 copie.jpg'],
          ['1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -13 copie.jpg', '1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -18 copie.jpg'],
          ['1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -24 copie.jpg', '1581 - 2026.07.22 - Kaya Kelly - Fuji 400 -28 copie.jpg']
        ]
      },
      {
        key: 'vietnam',
        folder: 'Vietnam',
        title: 'Vietnam, 2026',
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
        title: 'Italy, 2025',
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
