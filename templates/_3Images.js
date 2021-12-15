function _3Imagens(parameters) {
  return {
    elements: [
      createElement('twoHeader', {
        headers: parameters.headers,
        from: parameters.from,
        colors: parameters.colors,
      }),
      createElement('exemple', {
        fontSize: 30,
        id: 1,
        en: parameters.exemples[0][0],
        pt: parameters.exemples[0][1],
      }),
      createElement('exemple', {
        fontSize: 30,
        id: 2,
        en: parameters.exemples[1][0],
        pt: parameters.exemples[1][1],
      }),
      createElement('exemple', {
        fontSize: 30,
        id: 3,
        en: parameters.exemples[2][0],
        pt: parameters.exemples[2][1],
      }),
      createElement('img', {
        id: 1,
        src: parameters.images[0],
        from: 'bottom',
      }),
      createElement('img', {
        id: 2,
        src: parameters.images[1],
        from: 'bottom',
      }),
      createElement('img', {
        id: 3,
        src: parameters.images[2],
        from: 'bottom',
      }),
    ],
    timeLine: el => [
      () => {
        el.twoHeader.flex({ w: 7, h: 3.5 })
      },
      () => {
        // el.exemple_1 A terminar ammh
        el.img_1.flex({ w: 4, h: 6.5, line: 2 })
      },
      () => {
        el.img_1.flex({ w: 2.5, h: 4.5, line: 2 })
        el.img_2.flex({ w: 4, h: 6.5, line: 2 })
      },
      () => {
        el.img_1.flex({ w: 2.5, h: 4.5, line: 2 })
        el.img_2.flex({ w: 3, h: 6.5, line: 2 })
        el.img_3.flex({ w: 4, h: 7.5, line: 2 })
      },
    ],
  }
}
