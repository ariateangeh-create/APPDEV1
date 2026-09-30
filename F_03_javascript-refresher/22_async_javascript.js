function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Angelene", age: 21 });
  }, 1000);
}

fetchUserMock((user) => {
  console.log("Callback result:", user);
});

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Angelene", age: 21 });
    }, 1000);
  });
}

async function showUser() {
  try {
    const user = await fetchUser();
    console.log("Async/await result:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}

showUser();
