	//根据id获取HTML中的元素
	function $(id){
		return document.getElementById(id);
	}
	//验证输入的用户名是否有效
	function isValidName(){
		var name=$("username");
		var name_msg=$("name_msg");
		var  reg=/^[a-zA-Z]{4,12}$/;
		
		if(name.value.trim().length==0){
			name_msg.className="error";
			name_msg.innerHTML="用户名不能为空。";
		}
		else if(reg.exec(name.value)!=null){
			name_msg.className="success";
			name_msg.innerHTML="√";
		}
		else {
			name_msg.className="error";
			name_msg.innerHTML="用户名输入不正确，"+name.placeholder;
		}
	}
	//验证输入的密码是否是6-12位的字母、数字、下划线
	function isValidPwd(){
		var pwd=$("pwd");
		var pwd_msg=$("pwd_msg");
		var reg=/^\w{6,12}$/;
		if(pwd.value.trim().length==0){
			pwd_msg.className="error";
			pwd_msg.innerHTML="密码不能为空！";
		}
		else if(reg.exec(pwd.value)!=null){
			pwd_msg.className="success";
			pwd_msg.innerHTML="√";
		}
		else{
			pwd_msg.className="error";
			pwd_msg.innerHTML="密码输入不正确，"+pwd.placeholder;
		}	
	}
	//验证两次密码是否一致
	function isEquals(){
		var pwd=$("pwd");
		var repwd=$("repwd");
		var pwd2_msg=$("pwd2_msg");
		if(pwd.value==repwd.value){
			pwd2_msg.className="success";
			pwd2_msg.innerHTML="√";
		}
		else{
			pwd2_msg.className="error";
			pwd2_msg.innerHTML="两次密码不一致。";
		}	
	}
	//验证手机号码是否合理
	function isValidPhone(){
		var tel=$("tel");
		var tel_msg=$("tel_msg");
		var reg=/^1[345789]\d{9}$/;
	//	tel_msg.style.color="#ff0000";
		if(tel.value.trim().length==0){
			tel_msg.className="error";
			tel_msg.innerHTML="电话号码不能为空！";
		}
		else if(reg.exec(tel.value)){
			tel_msg.className="success";
			tel_msg.innerHTML="√";
		}
		else{
			tel_msg.className="error";
			tel_msg.innerHTML="电话号码不正确，"+tel.placeholder;
		}
	}
	//验证邮箱是否合理
	function isValidEmail(){
		var email=$("email");
		var email_msg=$("email_msg");
		var reg=/^(\w+(\_|\-|\.)*)+@(\w+(\-)?)+(\.\w{2,})+$/;
		if(email.value.trim().length==0){
			email_msg.className="error";
			email_msg.innerHTML="邮箱不能为空。";
			return false;
		}
		else if(reg.exec(email.value)!=null){
			email_msg.className="success";
			email_msg.innerHTML="√";
			return true;
		}
		else{
			email_msg.className="error";
			email_msg.innerHTML="邮箱输入不正确，"+email.placeholder;
			return false;
		}			
	}