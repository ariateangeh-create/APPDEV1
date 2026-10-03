const aboutMe = {
  name: "Angelene",
  age: 21,
  course: "APPDEV1",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, and I'm studying ${this.course}.`);
  }
};

aboutMe.hobby = "Playing guitar";
aboutMe.introduce();
console.log("Hobby:", aboutMe.hobby);
