import $api from "../http";

const fetchUsers = () => {
  return $api.get("/users");
};

export { fetchUsers };
