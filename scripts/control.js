// 实现按键控制 + 数据读取、分析
var changePics = false;
var Name;
var selectorFlag = false;
var testStart = false;
var demoStart = true;
var resFlag = false;

var droppedPairs = "";

// key control
var keyPressed;
// Demo文件
var jsonPicsWater = getWaterData();
var jsonPicsNight = getNightData();
var offsetArrayDemo = [
  jsonPicsWater.length,
  jsonPicsWater.length + jsonPicsNight.length,
];
var jsonPicsDemo = Array.prototype.concat.call(jsonPicsWater, jsonPicsNight);
// double pairs -Demo
var pairsArrayDemo1 = selecterPartRandom(offsetArrayDemo);
var pairsArrayDemoS = pairsArrayDemo1;


// json文件
// noise: none, fg, g
// filter: none, lp, unsh
// N, Lp, Un
// var jsonPics = getAllJData();

var jsonPicsN = getNData();
var jsonPicsB = getBData();
// var jsonPicsS = getSDataG();
var jsonPicsW = getWData();
var jsonPicsL = getLData();
var jsonPicsSF = getSFData();


//const offSet = jsonPicsN.length;

var jsonColor = Array.prototype.concat.call(
  jsonPicsN,
  jsonPicsB,
  jsonPicsW,
  jsonPicsL,
  jsonPicsSF
);
console.log(jsonColor);
// var jsonPics = Array.prototype.concat.call(jsonColor, jsonGray);
var jsonPics = jsonColor;


const OFFSET = 7;
const NUMOfTYPES = 5;
var offsetArray = [OFFSET, 2 * OFFSET, 3 * OFFSET, 4 * OFFSET, 5 * OFFSET];
console.log(offsetArray);
/*
var grayPairsArray1 = colorGrayPairs(OFFSET, NUMOfTYPES);
var grayPairsArray2 = colorGrayPairs(OFFSET, NUMOfTYPES);
var grayPairsArray = grayPairsArray1.concat(grayPairsArray2);
console.log(grayPairsArray);
*/

// double pairs
var colorPairsArray1 = selecterPartRandom(offsetArray);
var colorPairsArray2 = selecterPartRandom(offsetArray);
var colorPairsArray = colorPairsArray1.concat(colorPairsArray2);
// var pairsArrayS = colorPairsArray.concat(grayPairsArray);
var pairsArrayS = colorPairsArray;
console.log(pairsArrayS);

var pairs = pairsArrayS;
var pairsDemo = pairsArrayDemoS;
var ans = new Array(pairs.length).fill(0);
var ansDemo = new Array(pairsDemo.length).fill(0);
// pairs = shuffle(pairs, 30); // 打乱十次

var pairsDemo_idx = 0;
var pairs_idx = 0;
var res_idx = -1;
var l_idx = 0;
var r_idx = 1;

var dayToday = new Date();

console.log(
  "Today: " +
    dayToday.getMonth() +
    "/" +
    dayToday.getDate() +
    "/" +
    dayToday.getFullYear()
);

var out = "";

function outPut() {
  for (var idxOut = 0; idxOut < pairs.length; idxOut++) {
    var pic1 = jsonPics[pairs[idxOut][0]];
    var pic2 = jsonPics[pairs[idxOut][1]];

    var ctype = "NoAnswer";

    if (ans[idxOut] - 1 >= 0) {
      var cpair = pairs[idxOut];
      var cpic = cpair[ans[idxOut] - 1];
      //var chose = jsonPics[cpic].name.split('/');
      // ctype = chose[0] == "fg" ? "FilmGrain": "gaussian";
    }
    //console.log(ans[idxOut]-1 + ", " + chose);
    var ctype = ans[idxOut] == 0 ? "NoAnswer" : jsonPics[cpic].name + " ";

    out = out + ctype + " " + pic1.name + "   " + pic2.name + "\n";
  }
}

function main() {}

function selector() {
  if (!selectorFlag && !testStart) {
    selectorFlag = true;
    document
      .getElementById("selectorButton")
      .setAttribute("style", "background-color: #a44141;");
    document.getElementById("selectorButton").innerHTML = "SELECTOR MODE ON";
    pairs = pairsArrayS;
    ans = new Array(pairs.length).fill(0);
  } else if (selectorFlag && !testStart) {
    // regular
    selectorFlag = false;
    document
      .getElementById("selectorButton")
      .setAttribute("style", "background-color: #333333;");
    document.getElementById("selectorButton").innerHTML = "SELECTOR MODE OFF";
    pairs = pairsArrayS;
    ans = new Array(pairs.length).fill(0);
  }
}

function dropThis() {
  var p1name = jsonPics[pairs[pairs_idx][0]].name.split("/");
  var dname =
    p1name[0] == "fgPics"
      ? jsonPics[pairs[pairs_idx][0]].name
      : jsonPics[pairs[pairs_idx][1]].name;
  droppedPairs =
    droppedPairs +
    jsonPics[pairs[pairs_idx][0]].name +
    "\t" +
    jsonPics[pairs[pairs_idx][1]].name +
    "\n";
  document
    .getElementById("dropB")
    .setAttribute("style", "background-color: #a44141;");
  document.getElementById("dropB").innerHTML = "Dropped";
  console.log(droppedPairs);
}

function startTest() {
  testStart = true;
  pairs = shuffle(pairs, 1000); // 打乱十次
  console.log(pairs);
  Name = document.getElementById("name").value;
  document.getElementById("greetings").innerHTML = "Test for " + Name + "    ";

  if (!selectorFlag) {
    console.log(Name);
  } else {
    console.log("------------  SELECTOR MODE  ------------");
  }

  document.getElementById("realTest").style = "display: none";
  document.getElementById("istrct").style = "display: none";
  // document.getElementById("selector").style = "display: none";

  document
    .getElementById("LeftPic")
    .setAttribute("src", jsonPics[pairs[pairs_idx][0]].name);
  document
    .getElementById("RigntPic")
    .setAttribute("src", jsonPics[pairs[pairs_idx][1]].name);

  // delay display and hide
  // document.getElementById("test_page").style = "displey:block";
  document.getElementById("LeftPic").style = "display:block";
  document.getElementById("RigntPic").style = "display:block";
  document.getElementById("process").style = "display:block";
  document.getElementById("css").href = "css/mystyle.css";

  //    document.getElementById("LeftPic").style = "displey:block";
  //     setTimeout(function(){
  //         document.getElementById("LeftPic").style = "opacity: 0";
  //     },1000)

  //     setTimeout(function(){
  //         document.getElementById("RigntPic").style = "displey:block";
  //     },1000)

  //     setTimeout(function(){
  //         document.getElementById("RigntPic").style = "opacity: 0";
  //     },2000)

  if (selectorFlag) {
    document.getElementById("dropB").style = "displey:block";
    document.getElementById("leftLabel").style = "displey:block";
    document.getElementById("rightLabel").style = "displey:block";
    document.getElementById("leftLabel").innerHTML =
      jsonPics[pairs[pairs_idx][0]].name;
    document.getElementById("rightLabel").innerHTML =
      jsonPics[pairs[pairs_idx][1]].name;
  }

  document
    .getElementById("testBody")
    .setAttribute("style", "background-image: none;");

  window.addEventListener("keydown", myKeyDown, false);
  window.addEventListener("keyup", myKeyUp, false);
  document.getElementById("process").innerHTML =
    pairs_idx + 1 + " / " + pairs.length;
}

function startDemo() {
  pairsDemo = shuffle(pairsDemo, 1000); // 打乱十次
  console.log(pairsDemo);
  document.getElementById("nameForm").style = "display: none";
  document.getElementById("istrct").style = "display: none";
  // document.getElementById("selector").style = "display: none";

  document
    .getElementById("LeftPic")
    .setAttribute("src", jsonPicsDemo[pairsDemo[pairsDemo_idx][0]].name);
  document
    .getElementById("RigntPic")
    .setAttribute("src", jsonPicsDemo[pairsDemo[pairsDemo_idx][1]].name);

  // delay display and hide
  // document.getElementById("test_page").style = "displey:block";
  document.getElementById("LeftPic").style = "display:block";
  document.getElementById("RigntPic").style = "display:block";
  document.getElementById("process").style = "display:block";
  document
    .getElementById("testBody")
    .setAttribute("style", "background-image: none;");

  window.addEventListener("keydown", myKeyDown, false);
  window.addEventListener("keyup", myKeyUp, false);
  document.getElementById("process").innerHTML =
    pairsDemo_idx + 1 + " / " + pairsDemo.length;
}

function shuffle(arr, times) {
  var lenA = arr.length - 1;
  var i = 0;

  while (i < times) {
    var pos1 = Math.round(Math.random() * lenA);
    var pos2 = Math.round(Math.random() * lenA);
    var curr = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = curr;
    i++;
  }
  return arr;
}

function end() {
  console.log(ans);
  outPut();
  // console.log(out);

  // if(!selectorFlag)
  {
    var blob = new Blob([out], { type: "text/plain" });
    var anchor = document.createElement("a");
    anchor.download = "gVSFg_rstFor" + Name + ".txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  if (selectorFlag) {
    var blob1 = new Blob([droppedPairs], { type: "text/plain" });
    var anchor = document.createElement("a");
    anchor.download =
      "DroppedList" + dayToday.getMonth() + dayToday.getDate() + "2.txt";
    anchor.href = window.URL.createObjectURL(blob1);
    anchor.target = "_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  window.alert("Thanks for your time!");
}

function resBotton() {
  resFlag = true;
  document
    .getElementById("resButton")
    .setAttribute("style", "background-color: #a44141;");
  document.getElementById("resButton").innerHTML = "res on";
  console.log(resFlag);
}

{
  //===================Mouse and Keyboard event-handling Callbacks
  function myKeyDown(kev) {
    console.log(
      "--kev.code:",
      kev.code,
      "\t\t--kev.key:",
      kev.key,
      "\n--kev.ctrlKey:",
      kev.ctrlKey,
      "\t--kev.shiftKey:",
      kev.shiftKey,
      "\n--kev.altKey:",
      kev.altKey,
      "\t--kev.metaKey:",
      kev.metaKey
    );

    keyPressed = kev.key;
    switch (kev.code) {
      case "KeyP":
        console.log("Pause/unPause!\n");
        break;
      //----------------Arrow keys------------------------
      case "ArrowLeft":
        kev.preventDefault();
        if (resFlag == false && testStart == true) {
          console.log("←");
          ans[pairs_idx] = 1;
          console.log(ans);
          document
            .getElementById("LeftPic")
            .setAttribute("src", "pngPics/gray.png");
          document.getElementById("css").href = "css/left.css";
        }
        if (resFlag == false && testStart == false && demoStart == true) {
          console.log("←");
          ansDemo[pairsDemo_idx] = 1;
          console.log(ansDemo);
          document
            .getElementById("LeftPic")
            .setAttribute("src", "pngPics/gray.png");
          document.getElementById("css").href = "css/left.css";
        }
        break;
      case "ArrowRight":
        kev.preventDefault();
        if (resFlag == false && testStart == true) {
          console.log("→");
          ans[pairs_idx] = 2;
          console.log(ans);
          document
            .getElementById("RigntPic")
            .setAttribute("src", "pngPics/gray.png");
          document.getElementById("css").href = "css/right.css";
        }
        if (resFlag == false && testStart == false && demoStart == true) {
          console.log("→");
          ansDemo[pairsDemo_idx] = 2;
          console.log(ansDemo);
          document
            .getElementById("RigntPic")
            .setAttribute("src", "pngPics/gray.png");
          document.getElementById("css").href = "css/right.css";
        }
        break;
      case "ArrowUp":
        kev.preventDefault();

        if (resFlag == false) {
          // document.getElementById("css").href = "";//for initializing css
          // document.getElementById("css").href = "mystyle.css";
          // if(selectorFlag)
          // {
          //     document.getElementById("dropB").setAttribute("style", 'background-color: #57595a;');
          //     document.getElementById("dropB").innerHTML = "Drop This Image";
          // }
          // if(pairs_idx - 1 >= 0)
          // {
          //     pairs_idx--;
          //     var curr_i = pairs[pairs_idx];
          //     document.getElementById("LeftPic").setAttribute("src", jsonPics[curr_i[0]].name);
          //     document.getElementById("RigntPic").setAttribute("src", jsonPics[curr_i[1]].name);
          //     if(pairs_idx!=pairs.length)
          //     {
          //       document.getElementById("endButton").style = "display:none";
          //       document.getElementById("resButton").style = "display:none";
          //     }
          //     if(selectorFlag)
          //     {
          //         document.getElementById("leftLabel").innerHTML = jsonPics[curr_i[0]].name;
          //         document.getElementById("rightLabel").innerHTML = jsonPics[curr_i[1]].name;
          //     }
          // }
          // console.log(pairs_idx);
          // document.getElementById("process").innerHTML = (pairs_idx + 1) + " / " + pairs.length;
        } else {
          //document.getElementById("css").href = "";//for initializing css
          if (res_idx - 1 >= 0) {
            res_idx--;
            if (ans[res_idx] == 1) {
              document.getElementById("css").href = "css/left2.css";
            }
            if (ans[res_idx] == 2) {
              document.getElementById("css").href = "css/right2.css";
            }
            var curr_i = pairs[res_idx];
            document
              .getElementById("LeftPic")
              .setAttribute("src", jsonPics[curr_i[0]].name);
            document
              .getElementById("RigntPic")
              .setAttribute("src", jsonPics[curr_i[1]].name);
            document.getElementById("process").innerHTML =
              res_idx + 1 + " / " + pairs.length;
            document.getElementById("leftLabel").style = "display:block";
            document.getElementById("rightLabel").style = "display:block";
            document.getElementById("leftLabel").innerHTML =
              jsonPics[curr_i[0]].name;
            document.getElementById("rightLabel").innerHTML =
              jsonPics[curr_i[1]].name;
          }
        }
        break;

      case "ArrowDown":
        kev.preventDefault();
        if (resFlag == false && testStart == true) {
          if (ans[pairs_idx] == 1 || ans[pairs_idx] == 2) {
            if (selectorFlag) {
              document
                .getElementById("dropB")
                .setAttribute("style", "background-color: #57595a;");
              document.getElementById("dropB").innerHTML = "Drop This Pair";
            }

            if (pairs_idx + 1 < pairs.length) {
              //document.getElementById("css").href = "";//for initializing css
              // document.getElementById("css").href = "mystyle.css";
              pairs_idx++;
              var curr_i = pairs[pairs_idx];
              console.log(curr_i);
              document
                .getElementById("LeftPic")
                .setAttribute("src", jsonPics[curr_i[0]].name);
              document
                .getElementById("RigntPic")
                .setAttribute("src", jsonPics[curr_i[1]].name);
              document.getElementById("css").href = "css/mystyle.css";

              if (selectorFlag) {
                document.getElementById("leftLabel").innerHTML =
                  jsonPics[curr_i[0]].name;
                document.getElementById("rightLabel").innerHTML =
                  jsonPics[curr_i[1]].name;
              }

              if (pairs_idx == pairs.length - 1) {
                document.getElementById("endButton").style = "display:block";
                document.getElementById("resButton").style = "display:block";
              }
            }
            //else if(pairs_idx == pairs.length - 1)
            // {
            //     document.getElementById("endButton").style = "display:block";
            // }

            document.getElementById("process").innerHTML =
              pairs_idx + 1 + " / " + pairs.length;
          }
        } else if (resFlag == true && testStart == true) {
          if (res_idx < pairs.length - 1) {
            res_idx++;
            //document.getElementById("css").href = "";//for initializing css
            if (ans[res_idx] == 1) {
              document.getElementById("css").href = "css/left2.css";
            }
            if (ans[res_idx] == 2) {
              document.getElementById("css").href = "css/right2.css";
            }
            var curr_i = pairs[res_idx];
            document
              .getElementById("LeftPic")
              .setAttribute("src", jsonPics[curr_i[0]].name);
            document
              .getElementById("RigntPic")
              .setAttribute("src", jsonPics[curr_i[1]].name);
            document.getElementById("process").innerHTML =
              res_idx + 1 + " / " + pairs.length;
            document.getElementById("leftLabel").style = "display:block";
            document.getElementById("rightLabel").style = "display:block";
            document.getElementById("leftLabel").innerHTML =
              jsonPics[curr_i[0]].name;
            document.getElementById("rightLabel").innerHTML =
              jsonPics[curr_i[1]].name;
          }
        } else {
          if (ansDemo[pairsDemo_idx] == 1 || ansDemo[pairsDemo_idx] == 2) {
            if (pairsDemo_idx + 1 < pairsDemo.length) {
              pairsDemo_idx++;
              var curr_i = pairsDemo[pairsDemo_idx];
              document
                .getElementById("LeftPic")
                .setAttribute("src", jsonPicsDemo[curr_i[0]].name);
              document
                .getElementById("RigntPic")
                .setAttribute("src", jsonPicsDemo[curr_i[1]].name);
              document.getElementById("css").href = "css/mystyle.css";

              console.log(pairsDemo[pairsDemo_idx]);
              document.getElementById("process").innerHTML =
                pairsDemo_idx + 1 + " / " + pairsDemo.length;
            } else {
              document.getElementById("LeftPic").style = "display:none";
              document.getElementById("RigntPic").style = "display:none";
              document.getElementById("realTest").style =
                "display:inline-block";
              document.getElementById("istrct").style = "display:block";
              document.getElementById("css").href = "css/left.css";
              document.getElementById("css").href = "css/right.css";
              demoStart = false;
            }
          }
        }
        break;
      default:
        console.log("UNUSED!");
        break;
    }
  }

  function myKeyUp(kev) {
    //===============================================================================
    // Called when user releases ANY key on the keyboard; captures scancodes well
    console.log("myKeyUp()--keyCode=" + kev.keyCode + " released.");
  }
}
