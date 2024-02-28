var form1 = document.getElementById("form");
var input = document.getElementById("input");
var msg = document.getElementById("msg");
var posts = document.getElementById("posts");
form1 === null || form1 === void 0 ? void 0 : form1.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});
var formValidation = function () {
    if ((input === null || input === void 0 ? void 0 : input.value) === "") {
        if (msg) {
            msg.innerHTML = "Post cannot be blank";
        }
        console.log("failure");
    }
    else {
        console.log("successs");
        if (msg) {
            msg.innerHTML = "";
        }
        acceptData();
    }
};
var data = {};
var acceptData = function () {
    if (input) {
        data["text"] = input.value;
        console.log(data);
        createPost();
    }
};
var createPost = function () {
    if (posts && input) {
        posts.innerHTML += "\n    <div>\n      <p>".concat(data.text, "</p>\n      <span class=\"options\">\n        <i onClick=\"editPost(this)\" class=\"fas fa-edit\"></i>\n        <i onClick=\"deletePost(this)\" class=\"fas fa-trash-alt\"></i>\n      </span>\n    </div>\n    ");
        input.value = "";
    }
};
var deletePost = function (e) {
    var _a;
    if ((_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) {
        e.parentElement.parentElement.remove();
    }
};
var editPost = function (e) {
    var _a, _b;
    if (input && ((_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.previousElementSibling)) {
        input.value = e.parentElement.previousElementSibling.innerHTML;
        if ((_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) {
            e.parentElement.parentElement.remove();
        }
    }
};
