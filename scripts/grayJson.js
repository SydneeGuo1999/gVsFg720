var jsonPicsNafplioGary = [
  {
    name: "fg/nafplio720Gray/Blur_nafplio720_2over60.png",
  },
  {
    name: "fg/nafplio720Gray/Blur_nafplio720_4over60.png",
  },
  {
    name: "fg/nafplio720Gray/Blur_nafplio720_6over60.png",
  },

  {
    name: "gaussian/nafplio720Gray/NoBlur_1xGaussian_BaseOn_Blur_nafplio720_2over60.png",
  },
  {
    name: "gaussian/nafplio720Gray/NoBlur_1xGaussian_BaseOn_Blur_nafplio720_4over60.png",
  },
  {
    name: "gaussian/nafplio720Gray/NoBlur_1xGaussian_BaseOn_Blur_nafplio720_6over60.png",
  },
  {
    name: "pngPics/nafplio720.png",
  },
];

var jsonPicsBikeGary = [
  {
    name: "fg/bike720bGray/Blur_bike720b_2over60.png",
  },
  {
    name: "fg/bike720bGray/Blur_bike720b_4over60.png",
  },
  {
    name: "fg/bike720bGray/Blur_bike720b_6over60.png",
  },
  {
    name: "gaussian/bike720bGray/NoBlur_1xGaussian_BaseOn_Blur_bike720b_2over60.png",
  },
  {
    name: "gaussian/bike720bGray/NoBlur_1xGaussian_BaseOn_Blur_bike720b_4over60.png",
  },
  {
    name: "gaussian/bike720bGray/NoBlur_1xGaussian_BaseOn_Blur_bike720b_6over60.png",
  },
  {
    name: "pngPics/bike720b.png",
  },
];

var jsonPicsWomanGary = [
  {
    name: "fg/woman720cGray/Blur_woman720c_2over60.png",
  },
  {
    name: "fg/woman720cGray/Blur_woman720c_4over60.png",
  },
  {
    name: "fg/woman720cGray/Blur_woman720c_6over60.png",
  },

  {
    name: "gaussian/woman720cGray/NoBlur_1xGaussian_BaseOn_Blur_woman720c_2over60.png",
  },
  {
    name: "gaussian/woman720cGray/NoBlur_1xGaussian_BaseOn_Blur_woman720c_4over60.png",
  },
  {
    name: "gaussian/woman720cGray/NoBlur_1xGaussian_BaseOn_Blur_woman720c_6over60.png",
  },
  {
    name: "pngPics/woman720c.png",
  },
];

var jsonPicsLionGary = [
  {
    name: "fg/liongate720Gray/Blur_liongate720_2over60.png",
  },
  {
    name: "fg/liongate720Gray/Blur_liongate720_4over60.png",
  },
  {
    name: "fg/liongate720Gray/Blur_liongate720_6over60.png",
  },

  {
    name: "gaussian/liongate720Gray/NoBlur_1xGaussian_BaseOn_Blur_liongate720_2over60.png",
  },
  {
    name: "gaussian/liongate720Gray/NoBlur_1xGaussian_BaseOn_Blur_liongate720_4over60.png",
  },
  {
    name: "gaussian/liongate720Gray/NoBlur_1xGaussian_BaseOn_Blur_liongate720_6over60.png",
  },
  {
    name: "pngPics/liongate720.png",
  },
];

var jsonPicsSFGary = [
  {
    name: "fg/IMG_5726_720Gray/Blur_IMG_5726_720_2over60.png",
  },
  {
    name: "fg/IMG_5726_720Gray/Blur_IMG_5726_720_4over60.png",
  },
  {
    name: "fg/IMG_5726_720Gray/Blur_IMG_5726_720_6over60.png",
  },

  {
    name: "gaussian/IMG_5726_720Gray/NoBlur_1xGaussian_BaseOn_Blur_IMG_5726_720_2over60.png",
  },
  {
    name: "gaussian/IMG_5726_720Gray/NoBlur_1xGaussian_BaseOn_Blur_IMG_5726_720_4over60.png",
  },
  {
    name: "gaussian/IMG_5726_720Gray/NoBlur_1xGaussian_BaseOn_Blur_IMG_5726_720_6over60.png",
  },
  {
    name: "pngPics/IMG_5726_720.png",
  },
];

var jsonGray = Array.prototype.concat.call(
  jsonPicsNafplioGary,
  jsonPicsBikeGary,
  jsonPicsWomanGary,
  jsonPicsLionGary,
  jsonPicsSFGary
);

function getjsonGray() {
  return jsonGray;
}

function colorGrayPairs(OFFSET, numOfTypes) {
  var sizeOfColorPics = OFFSET * numOfTypes;
  var sizeOfPics = 2 * OFFSET * numOfTypes;
  var indexPairs = [];
  for (
    var grayIndex = sizeOfPics - 1;
    grayIndex > OFFSET * numOfTypes - 1;
    grayIndex--
  ) {
    if ((grayIndex + 1) % OFFSET == 0) {
      continue;
    }
    if (Math.random() > 0.5) {
      indexPairs.push([grayIndex, grayIndex - sizeOfColorPics]);
    } else {
      indexPairs.push([grayIndex - sizeOfColorPics, grayIndex]);
    }
  }

  for (
    var oriIndex = OFFSET - 1;
    oriIndex < sizeOfColorPics;
    oriIndex = oriIndex + OFFSET
  ) {
    for (
      var grayIndex = oriIndex + sizeOfColorPics - 1;
      grayIndex > oriIndex + sizeOfColorPics - OFFSET;
      grayIndex--
    ) {
      if (Math.random() > 0.5) {
        indexPairs.push([oriIndex, grayIndex]);
      } else {
        indexPairs.push([grayIndex, oriIndex]);
      }
    }
  }
  return indexPairs;
}
