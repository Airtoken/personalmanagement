var chou = new chou()


$(function () {
    var E = window.wangEditor
    var editor = new E('#editor')
    editor.create()
    $("#save-article").click(function () {
        $("#articleForm #content").val(editor.txt.text());
        $("#articleForm #categoryIds").val($("#select-category").val())
        $.ajax({
            type: "POST",
            url: "/admin/article/publish",
            data: $("#articleForm").serialize(),
            dataType: "JSON",
            async: false,
            success: function (result) {
                if (result && result.success) {
                    chou.showOk("保存成功");
                    setTimeout(function () {
                        window.location.href = "/admin/article/list"
                    }, 1000)
                } else {
                    chou.showError(result.msg);
                }
            }
        })
    })
})

function delArticle(id) {
    chou.showConfirm("确认要删除吗？", function () {
        $.ajax({
            type: "POST",
            url: "/admin/article/delete",
            data: {id: id},
            dataType: "JSON",
            async: false,
            success: function (result) {
                if (result && result.success) {
                    chou.showOk("删除成功");
                    setTimeout(function () {
                        window.location.href = "/admin/article/list"
                    }, 1000)
                } else {
                    chou.showError(result.msg);
                }
            }
        })
    })
}