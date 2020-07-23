$(document).ready(function () {
});

function GetSanPhamNavigation(id) {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetDanhMucSanPhamNavigation'
	}).done(function (data) {
		var optionData = JSON.parse(data.jsData);
		var html = ``;
		for (let i = 0; i < optionData.length; i++) {
			html += `<li><a class="${optionData[i].MetaTitle}" href='/danh-muc/${optionData[i].MetaTitle}'>${optionData[i].TenDanhMucSanPham}</a></li>`;
			$('#naviSanPham').addClass(optionData[i].MetaTitle);
		}
		$(id).html(html);
	});
}
function GetHeThongNavigation(id) {
	$.ajax({
		method: 'POST',
		url: '/Shared/GetDanhMucHeThongNavigation'
	}).done(function (data) {
		var optionData = JSON.parse(data.jsData);
		var html = ``;
		for (let i = 0; i < optionData.length; i++) {
			html += `<li><a class="${optionData[i].MaDanhMucHeThong}" href='/he-thong/${optionData[i].MaDanhMucHeThong}'>${optionData[i].TenDanhMucHeThong}</a></li>`;
			$('#naviPhanPhoi').addClass(optionData[i].MaDanhMucHeThong);
		}
		$(id).html(html);
	});
}