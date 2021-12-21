document.addEventListener("DOMContentLoaded", function () {
  const db = firebase.firestore();
  console.log("ss");
  db.collection("bio")
    .doc("LEi8ac5CMJulvZMnWp67")
    .get()
    .then(querySnapshot => {
      const bio = querySnapshot.data();
      // set profile picture
      elem("ahkohd").src = bio.picture_url;
      // set name
      elem("full-name").innerHTML = '<span style="color:#999; font-size: inherit">#</span>' + bio.name;
      // render bio
      renderBioLine(3, bio.desc, bio.location);
    });
});

function elem(id) {
  return document.getElementById(id);
}

function renderBioLine(startNumber, text, location) {
  let parts = text.split('/n');

  let render = "";

  parts.forEach(c => {
    render +=
      '<div class="line"> <span>' +
      startNumber +
      "</span>" +
      '<p class="bio">' +
      c +
      "</p>" +
      "</div>";
    startNumber += 1;
  });

  render +=
    '<div class="line"> <span>' +
    startNumber +
    '</span>' +
    '<p class="bio"></p></div>';
  startNumber += 1;


  render +=
    '<div class="line"> <span>' +
    startNumber +
    "</span>" +
    '<p class="bio location"><img style="height: 12px;transform: translate(-5px, -2px)" src="./imgs/marker.svg" />' +
    location +
    "</p>" +
    "</div>";

  startNumber += 1;

  render +=
    '<div class="line"> <span>' +
    startNumber +
    '</span>' +
    '<p class="bio"></p></div>';

  elem("full-bio").innerHTML = render;
}

function openPage(pageName, elmnt, file) {
  var i, tabcontent, tablinks;
  document.getElementById("log-file").innerText = file;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderColor = "transparent";
    tablinks[i].style.color = "rgba(103, 136, 158, 0.5)";
    tablinks[i].style.borderLeft = "1px solid transparent";
    tablinks[i].style.borderRight = "1px solid transparent";
    tablinks[i].style.background = "transparent";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.borderColor = "#00aced";
  elmnt.style.color = "white";
  elmnt.style.background = "rgba(0, 0, 0, 0.08)";
  elmnt.style.borderLeft = "1px solid rgba(0,0,0,.1)";
  elmnt.style.borderRight = "1px solid rgba(0,0,0,.1)";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

var textContent = [
  {
    title: "Inline Search",
    description:
      "An extension for Chrome and Firefox that allows you to use your favorite search /n engines on the fly without having to open new tab. Get to search Google, Wikipedia, /n Bing and Yahoo as quickly as possible, all you just need to do is highlight what to search /n and hit the shortcut.",
    links: [
      {
        link:
          "https://chrome.google.com/webstore/detail/inline-search/mihhpdfdjlgmpmgbajjfbepmfeedgnnj",
        linkTitle: "Get it at the Chrome extension store"
      },
      {
        link: "https://addons.mozilla.org/en-US/firefox/addon/inline-search/",
        linkTitle: "Get it on Mozilla addon store"
      }
    ]
  },
  {
    title: "Ice Cream Rush",
    description:
      "Have fun escaping from Andy who is always trying to grab a nice and delicious ice cream. /n Travel through the world while trying to fleeing from the hands of the ice cream gourmand. /n WIP 😹",
    links: [
      {
        link:
          "https://play.google.com/store/apps/details?id=com.verge.icecreamrush",
        linkTitle: "Get On Google Playstore"
      }
    ]
  },
  {
    title: "Express PHP",
    description:
      "A light weight php web framework. Simply a port of Express JS for PHP. /n I am no longer maintaining this project.",
    links: [
      {
        link: "http://bit.ly/express-php",
        linkTitle: "http://bit.ly/express-php"
      }
    ]
  },
  {
    title: "ngx-Emoj",
    description: "A simple, theme-able emoji mart/picker for angular 4+",
    links: [
      {
        link: "https://ahkohd.github.io/ngx-emoj/",
        linkTitle: "https://ahkohd.github.io/ngx-emoj/"
      }
    ]
  },
  {
    title: "ngx-progressive-img-loader",
    description:
      "Ngx-progressive-img-loader is a simple progressive image loader for Angular4+./n It's easy to use and yet flexible./n It uses the blur low resolution transition to high resolution technique to /n achieve a sleek progressive loading.",
    links: [
      {
        link: "https://www.npmjs.com/package/ngx-progressive-img-loader",
        linkTitle: "https://www.npmjs.com/package/ngx-progressive-img-loader"
      }
    ]
  },
  {
    title: "VSCode Tweet",
    description:
      "A Twitter client one click away at your VS CODE activity bar.",

    videoLink: "https://www.youtube.com/embed/km2UlDy5Koo",
    links: [
      {
        linkTitle:
          "https://marketplace.visualstudio.com/items?itemName=ahkohd.vscode-tweet",
        link:
          "https://marketplace.visualstudio.com/items?itemName=ahkohd.vscode-tweet"
      }
    ]
  },
  {
    title: "Ziggy Hover",
    description:
      "Have fun hovering on ziggy platforms and don't fall, aww it's way high up here./nCollect Diamonds to have scores and compete with your friends to beat their high scores.",

    videoLink: "https://www.youtube.com/embed/AX75HNw3LMQ",
    links: [
      {
        linkTitle: "Get it on playstore",
        link:
          "https://play.google.com/store/apps/details?id=com.verge.ziggyHover"
      }
    ]
  },
  {
    title: "FigmaDither",
    description:
      "Add dithering effects to your images right there in Figma ✨✔",
    links: [
      {
        link: "https://www.figma.com/c/plugin/752462766270432644",
        linkTitle: "Get it on Figma Plugins Store"
      }
    ],
    videoLink: "https://www.youtube.com/embed/VcqakOvHFX0"
  },
  {
    title: "FigmaThird",
    description: "Import, lit and use 3D models right there in Figma 🙈",
    links: [
      {
        link:
          "https://www.figma.com/community/plugin/772499949564209716/Third?ref=producthunt",
        linkTitle: "Get it on Figma Plugins Store"
      }
    ],
    videoLink: "https://www.youtube.com/embed/XRP-9JM7h4A"
  },
  {
    title: "FlutterGrocery-ShoppingAppUI",
    description: "Fryo - Grocery Shopping  App template UI kit in Flutter 🍔😋",
    links: [
      {
        link: "https://github.com/ahkohd/FlutterGrocery-ShoppingAppUI",
        linkTitle: "https://github.com/ahkohd/FlutterGrocery-ShoppingAppUI"
      }
    ],
    videoLink: "https://www.youtube.com/embed/OB2OiXJxQ-A"
  },
  {
    title: "Switch",
    description: "Switch between your favourite apps lightning fast.",
    links: [
      {
        link: "https://get-switch.app",
        linkTitle: "Get Switch for Windows and MacOS"
      }
    ],
    videoLink: "https://www.youtube.com/embed/GQ-l3Vu4Hak"
  },
  {
    title: "Sticker Cat",
    description:
      "AI super-powered sticker maker./n Make and share sticker packs with your friends in a jiffy.",
    links: [
      {
        link:
          "https://play.google.com/store/apps/details?id=com.verge.sticker_cat",
        linkTitle: "Get it on playstore"
      }
    ],
    videoLink: "https://www.youtube.com/embed/yps4I5864WI"
  },
  {
    title: "FlutterGamingApp",
    description: "Game streaming app UI kit made with Flutter. 🎮🔥",
    links: [
      {
        link: "https://github.com/ahkohd/FlutterGamingApp",
        linkTitle: "https://github.com/ahkohd/FlutterGamingApp"
      }
    ],
    videoLink: "https://www.youtube.com/embed/p8ja1-7EHpU"
  },
  {
    title: "Glance",
    description: "A VSCode extension for viewing SVG sprites easy-peasy.",
    links: [
      {
        link: "https://marketplace.visualstudio.com/items?itemName=ahkohd.glance",
        linkTitle: "Get it at VS Code Marketplace"
      }
    ],
    videoLink: "https://www.youtube.com/embed/dK5gAxghYSo"
  },
];
function renderEditorText(content) {
  content = content.reverse();
  var render = "";
  var numLine = 0;
  for (var i = 0; i < content.length; i++) {
    var project = textContent[i];
    numLine += 1;
    var line =
      '<div class="line"><span>' +
      numLine +
      "</span><h3>-> " +
      project.title +
      "</h3></div>";
    var descs = project.description.split("/n");
    for (var j = 0; j < descs.length; j++) {
      numLine += 1;
      line +=
        '<div class="line"><span>' +
        numLine +
        "</span><p>" +
        descs[j] +
        "</p></div>";
    }
    if (typeof project.links !== "undefined") {
      for (var k = 0; k < project.links.length; k++) {
        numLine += 1;
        line +=
          '<div class="line"><span>' +
          numLine +
          '</span><p><a href="' +
          project.links[k].link +
          '">' +
          project.links[k].linkTitle +
          "</a></p></div>";
      }
    }
    if (typeof project.videoLink !== "undefined") {
      numLine += 1;
      line +=
        '<div class="line"><span>' + numLine + "</span><p>&nbsp;</p></div>";
      numLine += 1;
      line +=
        '<div class="line"><span>' +
        numLine +
        '</span><iframe width="560" height="315" src="' +
        project.videoLink +
        '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
    }
    numLine += 1;
    line += '<div class="line"><span>' + numLine + "</span><p>&nbsp;</p></div>";
    numLine += 1;
    line += '<div class="line"><span>' + numLine + "</span><p>&nbsp;</p></div>";
    render += line;
  }
  document.getElementById("News").innerHTML = render;
}

renderEditorText(textContent);
