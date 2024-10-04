let url = "https://google.com";
let youtube = "Yout  ube";
let result;
result = url.length;
result = youtube.length;

//console.log(youtube.replace("","")).length;
//console.log(result);

/* 
Karakter sayisi bulma

*/
result = youtube.length;
console.log(result);

result = youtube.startsWith("Bilgisayar");
if (result) {
  console.log("yapilacaklar");
} else {
  console.log(result);
}
console.log(youtube.indexOf);
console.log();

youtube = youtube.toLocaleLowerCase().replace(" ","-");
url=url.replace("com","com/");

const newUrl=url.replace(url.replace(url,url+youtube));

