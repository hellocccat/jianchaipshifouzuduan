//隐藏进度条先
$('.mdui-btn').click(function(){
	$('.mdui-list').show();
	h();
		// 禁用按钮
		$('.mdui-btn').attr('disabled','disabled');
		var ip = $('#ip').val();
		var port = $('#port').val();
		if (ip == '' || port == '') {
			mdui.alert('请填写完整!');
		}
		// 国内
		$.post(cnurl,{'ip':ip,'port':port},function(data){
			cn();
			if (data.code==1) {
				mdui.alert(data.msg)
			}else{
				$('#cntcp').html(data.tcp);
				$('#cnicmp').html(data.icmp);
				$(".mdui-btn").removeAttr("disabled");
			}
			
		});
		// 国外
		$.post(enurl,{'ip':ip,'port':port},function(data){
			en();
			if (data.code==1) {
				mdui.alert(data.msg)
			}else{
				$('#entcp').html(data.tcp);
				$('#enicmp').html(data.icmp);
				$(".mdui-btn").removeAttr("disabled");
			}
		});
		return false;
	});

function h(){
	$('#cntcpj').show();
	$('#cnicmpj').show();
	$('#cntcp').hide();
	$('#cnicmp').hide();
	$('#entcpj').show();
	$('#enicmpj').show();
	$('#entcp').hide();
	$('#enicmp').hide();
}

function cn(){
	$('.mdui-list').show();
	$('#cntcpj').hide();
	$('#cnicmpj').hide();
	$('#cntcp').show();
	$('#cnicmp').show();
}
function en(){
	$('.mdui-list').show();
	$('#entcpj').hide();
	$('#enicmpj').hide();
	$('#entcp').show();
	$('#enicmp').show();
}