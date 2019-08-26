let body = document.body;
let url = window.location.toString();

let getName = (url) => {
 let urlSeparation = url.split('=');
 console.log(urlSeparation);
 let userName = urlSeparation[1];
 if (userName == undefined){
  userName = 'KsuBurn';
 }
 return userName;
}
let name = getName(url);

fetch(`https://api.github.com/users/${getName(url)}`)
 .then(res => res.json())
 .then(showUserInfo => {

 	let userLogin = showUserInfo.login;
 	let userPhoto = showUserInfo.avatar_url;
 	let userDescription = showUserInfo.bio;
 	let userUrl = showUserInfo.html_url;

 	let addUserLogin = () => {
 	 let elementForLogin = document.createElement('h1');
 	 elementForLogin.innerHTML = userLogin;
 	 body.appendChild(elementForLogin);
 	}

 	let addUserInfo = () => {
 	 let elemenForInfo = document.createElement('p');
 	 elemenForInfo.innerHTML = userDescription;
 	 body.appendChild(elemenForInfo);
 	}

 	let addUserPhoto = () => {
 	 let elementForPhoto = document.createElement('img');
 	 let newString = document.createElement('br');
 	 elementForPhoto.src = userPhoto
 	 body.appendChild(newString);
 	 body.appendChild(elementForPhoto);
 	}

 	let addUserUrl = () => {
 	 let elementForUrl = document.createElement('a');
 	 let text = document.createTextNode('Profile');
 	 let newString = document.createElement('br');
 	 elementForUrl.href = userUrl;
 	 elementForUrl.appendChild(text);
 	 body.appendChild(newString);
 	 body.appendChild(elementForUrl);
 	}

 	addUserLogin();
 	addUserInfo();
 	addUserPhoto();
 	addUserUrl();
 })
 .catch(err => alert(err + 'Информация о пользователе не доступна'));