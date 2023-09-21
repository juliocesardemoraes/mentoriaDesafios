const users = [{ name: "Julio" }, { name: "Ake" }, { name: "Patricia" }];

users.map((item, index) => {
  console.log(item.name);
  console.log(index);
  return <li>{item.name}</li>;
});
