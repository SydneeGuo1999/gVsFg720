var jsonPicsNafplio = [
  {
    name: "fg/nafplio720/Blur_nafplio720_2over60.png",
  },
  {
    name: "fg/nafplio720/Blur_nafplio720_4over60.png",
  },
  {
    name: "fg/nafplio720/Blur_nafplio720_6over60.png",
  },

  {
    name: "gaussian/nafplio720/NoBlur_1xGaussian_BaseOn_Blur_nafplio720_2over60.png",
  },
  {
    name: "gaussian/nafplio720/NoBlur_1xGaussian_BaseOn_Blur_nafplio720_4over60.png",
  },
  {
    name: "gaussian/nafplio720/NoBlur_1xGaussian_BaseOn_Blur_nafplio720_6over60.png",
  },

  {
    name: "pngPics/nafplio720.png",
  },
];

var jsonPicsBike = [
  {
    name: "fg/bike720b/Blur_bike720b_2over60.png",
  },
  {
    name: "fg/bike720b/Blur_bike720b_4over60.png",
  },
  {
    name: "fg/bike720b/Blur_bike720b_6over60.png",
  },

  {
    name: "gaussian/bike720b/NoBlur_1xGaussian_BaseOn_Blur_bike720b_2over60.png",
  },
  {
    name: "gaussian/bike720b/NoBlur_1xGaussian_BaseOn_Blur_bike720b_4over60.png",
  },
  {
    name: "gaussian/bike720b/NoBlur_1xGaussian_BaseOn_Blur_bike720b_6over60.png",
  },

  {
    name: "pngPics/bike720b.png",
  },
];

var jsonPicsWoman = [
  {
    name: "fg/woman720c/Blur_woman720c_2over60.png",
  },
  {
    name: "fg/woman720c/Blur_woman720c_4over60.png",
  },
  {
    name: "fg/woman720c/Blur_woman720c_6over60.png",
  },

  {
    name: "gaussian/woman720c/NoBlur_1xGaussian_BaseOn_Blur_woman720c_2over60.png",
  },
  {
    name: "gaussian/woman720c/NoBlur_1xGaussian_BaseOn_Blur_woman720c_4over60.png",
  },
  {
    name: "gaussian/woman720c/NoBlur_1xGaussian_BaseOn_Blur_woman720c_6over60.png",
  },

  {
    name: "pngPics/woman720c.png",
  },
];

var jsonPicsLion = [
  {
    name: "fg/liongate720/Blur_liongate720_2over60.png",
  },
  {
    name: "fg/liongate720/Blur_liongate720_4over60.png",
  },
  {
    name: "fg/liongate720/Blur_liongate720_6over60.png",
  },

  {
    name: "gaussian/liongate720/NoBlur_1xGaussian_BaseOn_Blur_liongate720_2over60.png",
  },
  {
    name: "gaussian/liongate720/NoBlur_1xGaussian_BaseOn_Blur_liongate720_4over60.png",
  },
  {
    name: "gaussian/liongate720/NoBlur_1xGaussian_BaseOn_Blur_liongate720_6over60.png",
  },

  {
    name: "pngPics/liongate720.png",
  },
];

var jsonPicsSF = [
  {
    name: "fg/IMG_5726_720/Blur_IMG_5726_720_2over60.png",
  },
  {
    name: "fg/IMG_5726_720/Blur_IMG_5726_720_4over60.png",
  },
  {
    name: "fg/IMG_5726_720/Blur_IMG_5726_720_6over60.png",
  },

  {
    name: "gaussian/IMG_5726_720/NoBlur_1xGaussian_BaseOn_Blur_IMG_5726_720_2over60.png",
  },
  {
    name: "gaussian/IMG_5726_720/NoBlur_1xGaussian_BaseOn_Blur_IMG_5726_720_4over60.png",
  },
  {
    name: "gaussian/IMG_5726_720/NoBlur_1xGaussian_BaseOn_Blur_IMG_5726_720_6over60.png",
  },

  {
    name: "pngPics/IMG_5726_720.png",
  },
];

var jsonPicsWater = [
  {
    name: "fg/water720/Blur_water720_2over60.png",
  },
  {
    name: "fg/water720/Blur_water720_4over60.png",
  },

  {
    name: "gaussian/water720/NoBlur_1xGaussian_BaseOn_Blur_water720_2over60.png",
  },
  {
    name: "gaussian/water720/NoBlur_1xGaussian_BaseOn_Blur_water720_4over60.png",
  },
];

var jsonPicsNight = [
  {
    name: "fg/night720/Blur_night720_2over60.png",
  },
  {
    name: "fg/night720/Blur_night720_4over60.png",
  },

  {
    name: "gaussian/night720/NoBlur_1xGaussian_BaseOn_Blur_night720_2over60.png",
  },
  {
    name: "gaussian/night720/NoBlur_1xGaussian_BaseOn_Blur_night720_4over60.png",
  },
];

function getNData() {
  return jsonPicsNafplio;
}
function getBData() {
  return jsonPicsBike;
}

function getWData() {
  return jsonPicsWoman;
}
function getLData() {
  return jsonPicsLion;
}
function getSFData() {
  return jsonPicsSF;
}
function getWaterData() {
  return jsonPicsWater;
}
function getNightData() {
  return jsonPicsNight;
}

// function arrangement(j, offset) {
//     var len = j.length;
//     var ans = [];
//     for(var i = 0; i < len; i++)
//     {
//         var pidx = Math.floor(i/offset);
//         for(var j = (-i) + pidx * offset; j + i < (pidx+1) * offset; j++)
//         {
//             if(j+i != i)
//             {
//                 var curr = [i, j+i];
//                 ans.push(curr);
//             }

//         }
//     }
//     return ans;
// }

// function combination(json, offset) {
//     var len = json.length;
//     var ans = [];
//     for(var i = 0; i < len; i++)
//     {
//         var pidx = Math.floor(i/offset);
//         for(var j = i+1; j < (pidx+1) * offset; j++)
//         {
//             if(j+i != i)
//             {
//                 var curr = [i, j];
//                 ans.push(curr);
//             }

//         }
//     }
//     return ans;
// }

// function selecterPart(json, offset) {
//     var len = json.length;
//     var ans = [];
//     for(var i = 0; i < Math.floor(len/offset); i++)
//     {
//         for(var j = 1; j < offset; j++)
//         {
//             var curr = [i*offset, j + i*offset];
//                 ans.push(curr);
//         }
//     }
//     return ans;
// }

function selecterPartRandom(offset) {
  var ans = [];

  var oriNow = 0;

  for (var i = 0; i < offset.length; i++) {
    for (p = oriNow; p < offset[i]; p++) {
      for (var j = 1; j < offset[i] - p; j++) {
        if (Math.random() > 0.5) {
          var curr = [p, j + p];
          ans.push(curr);
        } else {
          var curr_r = [j + p, p];
          ans.push(curr_r);
        }
      }
    }
    oriNow = offset[i];
  }
  return ans;
}
