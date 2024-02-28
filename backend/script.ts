let form1: HTMLFormElement | null = document.getElementById("form") as HTMLFormElement;
let input: HTMLInputElement | null = document.getElementById("input") as HTMLInputElement;
let msg: HTMLElement | null = document.getElementById("msg") as HTMLElement;
let posts: HTMLElement | null = document.getElementById("posts") as HTMLElement;

form1?.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input?.value === "") {
    if (msg) {
      msg.innerHTML = "Post cannot be blank";
    }
    console.log("failure");
  } else {
    console.log("successs");
    if (msg) {
      msg.innerHTML = "";
    }
    acceptData();
  }
};

let data: { text?: string } = {};

let acceptData = () => {
  if (input) {
    data["text"] = input.value;
    console.log(data);
    createPost();
  }
};

let createPost = () => {
  if (posts && input) {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  }
};

let deletePost = (e: HTMLElement) => {
  if (e.parentElement?.parentElement) {
    e.parentElement.parentElement.remove();
  }
};

let editPost = (e: HTMLElement) => {
  if (input && e.parentElement?.previousElementSibling) {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    if (e.parentElement?.parentElement) {
      e.parentElement.parentElement.remove();
    }
  }
};
