let data = {
    name: 'Min Thu Eain',
    position : 'Senior',
    now : new Date(),
}
document.querySelector('.p_class').innerHTML = `
Welcome ${data.now}
`;
let click = document.getElementById("bt_click")
// click.onclick = function(){
//     click.innerHTML = "You Click ME"
// }
// LocalStorage
let addDataToDB = (obj) => {
    let data = JSON.stringify(obj)
    localStorage.setItem('localdb',data)
}
let getDataDB = (obj) => {
    let str = localStorage.getItem('localdb')
    let str1 = JSON.parse(str)
    return str1
}
// click.addEventListener('click', function(e){
//     let user_click.addEventListener('click', function(e){
//         let user_name = document.querySelector("#userName")
//         let pwd = document.querySelector("#pwd")
//         let xhttp = new XMLHttpRequest();
//         xhttp.onload = function() {
//         if (this.status == 200) {
//             document.getElementById("demo").innerHTML =
//            responseText;
//     }
//   };
//     xhttp.open("GET", "ajax_info.txt");
//     xhttp.send();
//     fetch('https://jsonplaceholder.ir/users', {
//         method: 'GET',
//         })
//         .then(response => response.json())
//         .then(json => console.log(json))
// click.onclick = (e) => {
//     alert('Arrow function click')
// }
click.addEventListener('click', function(e){
    add(1,5);
    alert('HELLO')
})
function add_num(a,b) {
	if (a==1){
		return a+b;
	}else {
		return false
	}
}

async function add(a,b){
	const ret = new Promise((resolve,reject)=>{
		fetch(add_num(a,b))
		.then((res)=>resolve(res))
		.catch((err)=>reject(err));
	})
	const cd = await ret;
	return cd;
}
add(1,4)
	.then((res)=> console.log(res) )
	.catch((err)=> console.log(err) );

