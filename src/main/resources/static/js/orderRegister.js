

function orderRegister() {
console.log("함수가 실행 시 해당 알림")
console.log("데이터가 제대로 오는지 확인,");
var departName = document.getElementById("departName");

var click = document.querySelectorAll("option[name=departName]");
click.addEventListener("click", function()) {
    var word = this.getAttribute("id");
    console.log(word);
}

}


//console.log("정보를 잘 찾아오는지 확인 : ",departName);
// $.ajax({
//        url: '/orderRegister?&departName='+departName,
//        method: 'GET',
//        dataType: 'json',
//        success: function(data) {
//            var regBtn = document.getElementById("registerBtn");
//            if(data > 0)
//                regBtn.disabled = false;
//            else
//                regBtn.disabled = true;
//        },
//        error: function(error) {
//            console.error('오류:', error);
//        }
//    });
//}

//$(document).ready(function(){
//    $.ajax({
//        url: '/orderRegister?&departName='+departName,
//        method: 'GET',
//        dataType: 'json',
//        success: function(data) {
//            var regBtn = document.getElementById("registerBtn");
//            if(data > 0)
//                regBtn.disabled = false;
//            else
//                regBtn.disabled = true;
//        },
//        error: function(error) {
//            console.error('오류:', error);
//        }
//    });
//
//    function cancel(btn, pcode){
//        var confirmCancel = confirm("취소하시겠습니까?");
//        if(confirmCancel){
//            $.ajax({
//                url: '/api/cancelOrder/' + pcode,
//                method: 'DELETE',
//                success: function(data) {
//                    alert('취소되었습니다.');
//                    $('#row_' + pcode).remove();
//                    location.reload();
//                },
//                error: function(error) {
//                    console.error('취소 오류:', error);
//                }
//            });
//        }
//    }
//
//    function orderReg(){
//        var result = confirm("발주서를 등록하시겠습니까?");
//        if(result){
//            alert("발주서가 발행되었습니다.");
//            window.location.href = 'StatusManagementReport';
//        } else {
//            window.close();
//        }
//    }
//});