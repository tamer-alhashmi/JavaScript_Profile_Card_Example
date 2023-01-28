let btnStyle =
  "cursor: pointer; box-shadow: 0px 2px 15px #00000075; color: white; text-decoration: none; font-weight: normal; background-color: #0077ff; padding: 10px;  border-radius: 6px; display: block; width: 150px; margin: 10px; border: none";

let secTion = document.createElement("div");
document.body.append(secTion);

let proCard = document.createElement("div");
secTion.append(proCard);
proCard.className = "proCard";
// Profile Photo
let proPic = document.createElement("img");
// proPic.src = "photos/1627395228537 (2).jpg";
proPic.src =
  "https://scontent.fcai19-8.fna.fbcdn.net/v/t1.18169-9/15134579_1309751675723427_9138386697685778896_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=X1M3t0NK-rYAX_3I_GN&_nc_ht=scontent.fcai19-8.fna&oh=00_AfBrSEC63COUqAzKxpZTs7oss0AjDbmjGpq6chAhBuOPzg&oe=63FC91F6";
proCard.append(proPic);

// Info Row Start
let infoRow = document.createElement("div");
proCard.append(infoRow);

let mainName = document.createElement("h4");
document.body.append(mainName);
mainName.textContent = "Tamer Elhashmy";
infoRow.append(mainName);
// Info Row End

// Job Row Start
let jobTitle = document.createElement("span");
jobTitle.textContent = "Front-end Developer";
infoRow.append(jobTitle);
// Job Row End

// Location Row Start
let locaRow = document.createElement("div");
let locaIcon = document.createElement("i");
locaIcon.innerHTML = `<i class="fa-solid fa-location-dot loca-icon"></i>`;
let countName = document.createElement("span");
countName.textContent = "Egypt";
let cityName = document.createElement("span");
cityName.textContent = "Alexandria, ";

infoRow.append(locaRow);
locaRow.append(locaIcon);
locaIcon.after(cityName);
cityName.after(countName);
// Location Row End

// Numbers Row Start
let numRow = document.createElement("div");
locaRow.after(numRow);

let follDiv = document.createElement("div");
follDiv.className = "num-box";
let numBer = document.createElement("p");
numBer.textContent = "1598";
let sociName = document.createElement("p");
sociName.textContent = "Followers";
follDiv.prepend(numBer);
follDiv.append(sociName);
numRow.append(follDiv);

let follDiv2 = document.createElement("div");
follDiv2.className = "num-box";
let numBer2 = document.createElement("p");
numBer2.textContent = "65";
let sociName2 = document.createElement("p");
sociName2.textContent = "Following";
follDiv2.prepend(numBer2);
follDiv2.append(sociName2);
follDiv.after(follDiv2);

let follDiv3 = document.createElement("div");
follDiv3.className = "num-box";
let numBer3 = document.createElement("p");
numBer3.textContent = "123";
let sociName3 = document.createElement("p");
sociName3.textContent = "Articles";
follDiv3.prepend(numBer3);
follDiv3.append(sociName3);
follDiv2.after(follDiv3);

let follDiv4 = document.createElement("div");
follDiv4.className = "num-box";
let numBer4 = document.createElement("p");
numBer4.textContent = "85";
let sociName4 = document.createElement("p");
sociName4.textContent = "Works";
follDiv4.prepend(numBer4);
follDiv4.append(sociName4);
follDiv3.after(follDiv4);
// Numbers Row End

// Icon Row Start
let iconRow = document.createElement("div");
numRow.after(iconRow);
iconRow.className = "icon-row";

let linkBtn1 = document.createElement("a");
linkBtn1.href = "#";
let icon1 = document.createElement("i");
icon1.innerHTML = `<i class="fa-brands fa-facebook"></i>`;
linkBtn1.append(icon1);
iconRow.append(linkBtn1);

let linkBtn2 = document.createElement("a");
linkBtn2.href = "#";
let icon2 = document.createElement("i");
icon2.innerHTML = `<i class="fa-brands fa-twitter"></i>`;
linkBtn2.append(icon2);
linkBtn1.after(linkBtn2);

let linkBtn3 = document.createElement("a");
linkBtn3.href = "https://github.com/tamer-alhashmi";
let icon3 = document.createElement("i");
icon3.innerHTML = `<i class="fa-brands fa-github"></i>`;
linkBtn3.append(icon3);
linkBtn2.after(linkBtn3);

let linkBtn4 = document.createElement("a");
linkBtn4.href = "#";
let icon4 = document.createElement("i");
icon4.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
linkBtn4.append(icon4);
linkBtn3.after(linkBtn4);

let linkBtn5 = document.createElement("a");
linkBtn5.href = "#";
let icon5 = document.createElement("i");
icon5.innerHTML = `<i class="fa-brands fa-figma"></i>`;
linkBtn5.append(icon5);
linkBtn4.after(linkBtn5);

let linkBtn6 = document.createElement("a");
linkBtn6.href = "https://codepen.io/Tamer_Alhashmi";
let icon6 = document.createElement("i");
icon6.innerHTML = `<i class="fa-brands fa-codepen"></i>`;
linkBtn6.append(icon6);
linkBtn5.after(linkBtn6);
// Icon Row End

// Create Button
let btnRow = document.createElement("div");
iconRow.after(btnRow);
btnRow.style.cssText = "display: flex; justify-content: center; padding: 15px;";

let mssBtn = document.createElement("button");
mssBtn.innerHTML = "Massage";
mssBtn.style.cssText = btnStyle;

let follBtn = document.createElement("button");
follBtn.innerHTML = "Follow";
follBtn.style.cssText = btnStyle;

btnRow.prepend(mssBtn);
btnRow.append(follBtn);

// Style Start

secTion.style.cssText =
  "background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);	animation: gradient 15s ease infinite; padding-top: 150px; padding-bottom: 100px; ";

// "background-image: linear-gradient(347deg, #ec2c5d, #7441f5); padding-top: 150px; padding-bottom: 100px; ";

proCard.style.cssText =
  "font-family: Poppins; position: relative; margin: 0 auto; width: 400px; background-color: #f3f3f3; border-radius: 8px; padding: 80px 50px 40px; text-align: center ";

proPic.style.cssText =
  "filter: drop-shadow(0px 8px 12px #00000090); width: 140px; border-radius: 50%; position: absolute; top: -80px; transform: translate(-50%); border: 6px solid #0875cf60";

mainName.style.cssText =
  "color: #3794fe; margin: 0; line-height: 1.6; padding-top: 30px; font-size: 24px; letter-spacing: 1px; font-weight: 400;  ";
jobTitle.style.cssText =
  "color: #505050; margin: 0; line-height: 1.6; margin: 10px; ";
numRow.style.cssText = "display: flex; justify-content: space-around; ";
numBer.style.cssText =
  "color: #505050; font-weight: bold; font-size: 25px; line-height: 1.6; margin-bottom: 0;";
numBer2.style.cssText =
  "color: #505050; font-weight: bold; font-size: 25px; line-height: 1.6; margin-bottom: 0;";
numBer3.style.cssText =
  "color: #505050; font-weight: bold; font-size: 25px; line-height: 1.6; margin-bottom: 0;";
numBer4.style.cssText =
  "color: #505050; font-weight: bold; font-size: 25px; line-height: 1.6; margin-bottom: 0;";
iconRow.style.cssText =
  "font-size: 30px; padding: 20px; display: flex; justify-content: space-around;";

icon1.style.cssText =
  "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #1877f2";
icon2.style.cssText =
  "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #1da1f2";
icon3.style.cssText =
  "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #333";
icon4.style.cssText =
  "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #0077b5";
icon5.style.cssText =
  "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #f67c1a";
icon6.style.cssText =
  "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #333";
// Style End
